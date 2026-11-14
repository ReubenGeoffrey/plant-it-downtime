// ============================================================================
// YOKOHAMA MES PORTAL - FIREBASE FIRESTORE & AUTH CLIENT ADAPTER
// Built for Google AI Studio / Firebase App Hosting / Cloud Run Deployments
// Authors: Hadssha Bell S & Reuben Geoffrey
// ============================================================================

(function(window) {
  'use strict';

  // Default configuration holder (can be injected by Google AI Studio, window, or localStorage)
  let _activeConfig = null;
  let _firebaseApp = null;
  let _firestore = null;
  let _firebaseAuth = null;
  let _activeSnapshotUnsubscribe = null;

  // --------------------------------------------------------------------------
  // 1. Configuration Discovery & Initialization
  // --------------------------------------------------------------------------
  function getStoredFirebaseConfig() {
    if (typeof window === 'undefined') return null;

    // 1. Injected by Google AI Studio / hosting environment
    if (window.firebaseConfig && typeof window.firebaseConfig === 'object' && window.firebaseConfig.projectId) {
      return window.firebaseConfig;
    }
    if (window.FIREBASE_CONFIG && typeof window.FIREBASE_CONFIG === 'object' && window.FIREBASE_CONFIG.projectId) {
      return window.FIREBASE_CONFIG;
    }

    // 2. Saved in localStorage
    try {
      const stored = localStorage.getItem('YOKOHAMA_FIREBASE_CONFIG');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && parsed.projectId) return parsed;
      }
    } catch (e) {}

    return null;
  }

  function initFirebase(customConfig) {
    if (typeof window === 'undefined' || typeof firebase === 'undefined') {
      return false;
    }

    const config = customConfig || getStoredFirebaseConfig();
    if (!config || !config.projectId) {
      return false;
    }

    try {
      if (!firebase.apps || firebase.apps.length === 0) {
        _firebaseApp = firebase.initializeApp(config);
      } else {
        _firebaseApp = firebase.app();
      }

      if (typeof firebase.firestore === 'function') {
        _firestore = firebase.firestore();
        // Enable offline persistence if supported in browser environment
        try {
          _firestore.enablePersistence({ synchronizeTabs: true }).catch(err => {
            if (err.code !== 'failed-precondition' && err.code !== 'unimplemented') {
              console.warn('[Firebase] Offline persistence notice:', err.message);
            }
          });
        } catch (persErr) {}
      }

      if (typeof firebase.auth === 'function') {
        _firebaseAuth = firebase.auth();
      }

      _activeConfig = config;
      console.log(`[Firebase] Initialized successfully for project: ${config.projectId}`);
      return true;
    } catch (err) {
      console.warn('[Firebase] Initialization notice:', err.message);
      return false;
    }
  }

  function isFirebaseActive() {
    return !!(_firestore && _firebaseApp);
  }

  function getFirebaseStatus() {
    const config = _activeConfig || getStoredFirebaseConfig();
    return {
      sdkLoaded: typeof firebase !== 'undefined',
      configured: !!(config && config.projectId),
      active: isFirebaseActive(),
      projectId: config?.projectId || null
    };
  }

  // --------------------------------------------------------------------------
  // 2. Incident Record Mapper (Aligned with Yokohama Schema)
  // --------------------------------------------------------------------------
  function mapIncidentToFirestore(rec) {
    if (!rec || !rec.id) return null;
    const dtMin = Math.max(0, parseInt(rec.downtimeMinutes, 10) || 0);
    const aff = Math.max(1, parseInt(rec.affectedMachines, 10) || 1);
    const tot = Math.max(0, parseInt(rec.totalDowntimeMinutes, 10) || (dtMin * aff));

    return {
      id: String(rec.id),
      date: rec.issueDate || rec.date || new Date().toISOString().split('T')[0],
      issueDate: rec.issueDate || rec.date || new Date().toISOString().split('T')[0],
      issueTime: rec.issueTime || '07:00',
      closedDate: rec.closedDate || '',
      closedTime: rec.closedTime || '',
      shift: rec.shift || 'Shift A (7am - 3pm)',
      nature: rec.nature || 'MES',
      area: rec.area || 'ALL',
      process: rec.process || 'ALL',
      machineNo: rec.machineNo || 'ALL',
      machineType: rec.machineType || '',
      isCritical: (rec.isCritical === 'Yes' || rec.isCritical === true) ? 'Yes' : 'No',
      downtimeMinutes: dtMin,
      affectedMachines: aff,
      totalDowntimeMinutes: tot,
      category: rec.category || 'Other',
      issueDetails: rec.issueDetails || '',
      actionPlan: rec.actionPlan || '',
      responsibility: rec.responsibility || 'ATC',
      responsiblePerson: rec.responsiblePerson || rec.solvedBy || '',
      solvedBy: rec.solvedBy || rec.responsiblePerson || '',
      status: rec.status || 'Open',
      remarks: rec.remarks || '',
      createdBy: rec.createdBy || 'operator',
      createdByName: rec.createdByName || rec.actorName || 'Plant Operator',
      updatedBy: rec.updatedBy || '',
      actorName: rec.actorName || rec.createdByName || '',
      updatedAt: new Date().toISOString()
    };
  }

  function mapFirestoreToIncident(data, docId) {
    if (!data) return null;
    return {
      id: docId || data.id,
      date: data.issueDate || data.date,
      issueDate: data.issueDate || data.date,
      issueTime: data.issueTime || '',
      closedDate: data.closedDate || '',
      closedTime: data.closedTime || '',
      shift: data.shift || '',
      nature: data.nature || 'MES',
      area: data.area || 'ALL',
      process: data.process || 'ALL',
      machineNo: data.machineNo || 'ALL',
      machineType: data.machineType || '',
      isCritical: (data.isCritical === 'Yes' || data.isCritical === true) ? 'Yes' : 'No',
      downtimeMinutes: Number(data.downtimeMinutes) || 0,
      affectedMachines: Number(data.affectedMachines) || 1,
      totalDowntimeMinutes: Number(data.totalDowntimeMinutes) || (Number(data.downtimeMinutes) || 0),
      category: data.category || '',
      issueDetails: data.issueDetails || '',
      actionPlan: data.actionPlan || '',
      responsibility: data.responsibility || 'ATC',
      responsiblePerson: data.responsiblePerson || data.solvedBy || '',
      solvedBy: data.solvedBy || data.responsiblePerson || '',
      status: data.status || 'Open',
      remarks: data.remarks || '',
      createdBy: data.createdBy || '',
      createdByName: data.createdByName || '',
      updatedBy: data.updatedBy || '',
      actorName: data.actorName || data.createdByName || '',
      createdAt: data.createdAt || data.updatedAt,
      updatedAt: data.updatedAt
    };
  }

  // --------------------------------------------------------------------------
  // 3. Firestore Incident CRUD Operations
  // --------------------------------------------------------------------------
  async function fetchFirebaseIncidents() {
    if (!isFirebaseActive()) return null;
    try {
      const snapshot = await _firestore.collection('incidents')
        .orderBy('date', 'desc')
        .get();

      if (!snapshot.empty) {
        return snapshot.docs.map(doc => mapFirestoreToIncident(doc.data(), doc.id));
      }
      return [];
    } catch (err) {
      console.warn('[Firebase] fetchIncidents warning:', err.message);
      return null;
    }
  }

  async function upsertFirebaseIncident(record) {
    if (!isFirebaseActive() || !record || !record.id) return false;
    try {
      const data = mapIncidentToFirestore(record);
      await _firestore.collection('incidents').doc(String(record.id)).set(data, { merge: true });
      return true;
    } catch (err) {
      console.warn('[Firebase] upsertIncident warning:', err.message);
      return false;
    }
  }

  async function bulkUpsertFirebaseIncidents(records, mode = 'append') {
    if (!isFirebaseActive() || !Array.isArray(records) || records.length === 0) return false;
    try {
      const batchLimit = 400; // Safe below Firestore's 500 operations batch limit
      for (let i = 0; i < records.length; i += batchLimit) {
        const chunk = records.slice(i, i + batchLimit);
        const batch = _firestore.batch();
        chunk.forEach(rec => {
          if (rec && rec.id) {
            const docRef = _firestore.collection('incidents').doc(String(rec.id));
            batch.set(docRef, mapIncidentToFirestore(rec), { merge: true });
          }
        });
        await batch.commit();
      }
      return true;
    } catch (err) {
      console.warn('[Firebase] bulkUpsert warning:', err.message);
      return false;
    }
  }

  async function deleteFirebaseIncident(id) {
    if (!isFirebaseActive() || !id) return false;
    try {
      await _firestore.collection('incidents').doc(String(id)).delete();
      return true;
    } catch (err) {
      console.warn('[Firebase] deleteIncident warning:', err.message);
      return false;
    }
  }

  function listenToFirebaseIncidents(onUpdateCallback) {
    if (!isFirebaseActive() || typeof onUpdateCallback !== 'function') return null;
    try {
      if (_activeSnapshotUnsubscribe) {
        _activeSnapshotUnsubscribe();
      }
      _activeSnapshotUnsubscribe = _firestore.collection('incidents')
        .orderBy('date', 'desc')
        .onSnapshot(snapshot => {
          const records = snapshot.docs.map(doc => mapFirestoreToIncident(doc.data(), doc.id));
          onUpdateCallback(records);
        }, err => {
          console.warn('[Firebase] Realtime snapshot listener notice:', err.message);
        });
      return _activeSnapshotUnsubscribe;
    } catch (err) {
      console.warn('[Firebase] listenToIncidents notice:', err.message);
      return null;
    }
  }

  // --------------------------------------------------------------------------
  // 4. Firestore User Accounts & Auth
  // --------------------------------------------------------------------------
  async function authenticateUserWithFirebase(username, password) {
    if (!isFirebaseActive()) return { user: null, connected: false };
    const cleanUser = String(username || '').trim().toLowerCase();
    const rawPass = String(password || '').trim();

    try {
      // 1. Query user_accounts collection in Firestore
      const snap = await _firestore.collection('user_accounts')
        .where('username', '==', cleanUser)
        .limit(1)
        .get();

      if (!snap.empty) {
        const u = snap.docs[0].data();
        let isMatch = false;

        if (typeof sha256 === 'function') {
          const pHash = await sha256(rawPass);
          if (u.password_hash && u.password_hash.toLowerCase() === pHash.toLowerCase()) {
            isMatch = true;
          }
        }

        if (!isMatch && u.plain_password && u.plain_password === rawPass) {
          isMatch = true;
        }

        if (isMatch) {
          const roleUpper = String(u.role || 'OPERATOR').toUpperCase();
          const dName = u.display_name || (roleUpper === 'OPERATOR' ? 'Plant Operator' : (roleUpper === 'SUPERVISOR' ? 'Production Supervisor' : 'Plant IT Admin'));
          return {
            connected: true,
            user: {
              id: snap.docs[0].id,
              username: u.username,
              role: roleUpper,
              displayName: dName,
              canExport: u.can_export !== false,
              canManageSettings: u.can_manage_settings === true,
              themeColor: u.theme_color || 'red',
              allowedTabs: roleUpper === 'OPERATOR' ? ['entry'] : (roleUpper === 'SUPERVISOR' ? ['entry', 'kpi', 'logs', 'all'] : ['entry', 'kpi', 'logs', 'all', 'settings'])
            }
          };
        }
      }
    } catch (err) {
      console.warn('[Firebase] Auth check notice:', err.message);
    }

    return { user: null, connected: false };
  }

  async function fetchFirebaseUserAccounts() {
    if (!isFirebaseActive()) return null;
    try {
      const snap = await _firestore.collection('user_accounts').get();
      if (!snap.empty) {
        return snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      }
      return [];
    } catch (e) {
      return null;
    }
  }

  async function updateFirebaseUserAccount(role, username, displayName, newPassword) {
    if (!isFirebaseActive() || !role) return false;
    try {
      const cleanUser = String(username || '').toLowerCase().trim();
      const roleUpper = String(role).toUpperCase().trim();
      const pHash = (newPassword && typeof sha256 === 'function') ? await sha256(newPassword) : null;

      const payload = {
        username: cleanUser,
        role: roleUpper,
        display_name: displayName,
        updated_at: new Date().toISOString()
      };
      if (pHash) payload.password_hash = pHash;

      await _firestore.collection('user_accounts').doc(roleUpper.toLowerCase()).set(payload, { merge: true });
      return true;
    } catch (e) {
      return false;
    }
  }

  // --------------------------------------------------------------------------
  // 5. Auto-Initialize on Load if Config Present
  // --------------------------------------------------------------------------
  if (typeof window !== 'undefined') {
    window.initFirebase = initFirebase;
    window.isFirebaseActive = isFirebaseActive;
    window.getFirebaseStatus = getFirebaseStatus;
    window.fetchFirebaseIncidents = fetchFirebaseIncidents;
    window.upsertFirebaseIncident = upsertFirebaseIncident;
    window.bulkUpsertFirebaseIncidents = bulkUpsertFirebaseIncidents;
    window.deleteFirebaseIncident = deleteFirebaseIncident;
    window.listenToFirebaseIncidents = listenToFirebaseIncidents;
    window.authenticateUserWithFirebase = authenticateUserWithFirebase;
    window.fetchFirebaseUserAccounts = fetchFirebaseUserAccounts;
    window.updateFirebaseUserAccount = updateFirebaseUserAccount;

    // Run safe initial check
    if (typeof firebase !== 'undefined') {
      initFirebase();
    }
  }

})(typeof window !== 'undefined' ? window : this);
