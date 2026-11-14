// ============================================================================
// VERIFICATION SUITE: FIREBASE FIRESTORE & AUTH CLIENT ADAPTER
// Validates Firebase integration readiness for Google AI Studio deployments
// ============================================================================

const assert = require('assert');
const fs = require('fs');

console.log('========================================================================');
console.log('VERIFYING FIREBASE FIRESTORE & AUTH CLIENT ADAPTER');
console.log('========================================================================\n');

// 1. File existence check
assert(fs.existsSync('firebase-client.js'), 'firebase-client.js must exist');
console.log('▶ [Test 1] firebase-client.js file exists... ✅ PASSED');

// 2. Load script in mock browser environment
const mockWindow = {
  localStorage: {
    getItem: (k) => null,
    setItem: (k, v) => {}
  }
};

const scriptCode = fs.readFileSync('firebase-client.js', 'utf8');
const runInContext = new Function('window', scriptCode);
runInContext(mockWindow);

assert(typeof mockWindow.initFirebase === 'function', 'initFirebase must be exposed');
assert(typeof mockWindow.isFirebaseActive === 'function', 'isFirebaseActive must be exposed');
assert(typeof mockWindow.getFirebaseStatus === 'function', 'getFirebaseStatus must be exposed');
assert(typeof mockWindow.fetchFirebaseIncidents === 'function', 'fetchFirebaseIncidents must be exposed');
assert(typeof mockWindow.upsertFirebaseIncident === 'function', 'upsertFirebaseIncident must be exposed');
assert(typeof mockWindow.bulkUpsertFirebaseIncidents === 'function', 'bulkUpsertFirebaseIncidents must be exposed');
assert(typeof mockWindow.deleteFirebaseIncident === 'function', 'deleteFirebaseIncident must be exposed');
assert(typeof mockWindow.listenToFirebaseIncidents === 'function', 'listenToFirebaseIncidents must be exposed');
assert(typeof mockWindow.authenticateUserWithFirebase === 'function', 'authenticateUserWithFirebase must be exposed');
console.log('▶ [Test 2] Adapter exposes all required methods on window... ✅ PASSED');

// 3. Status without configuration (clean unconfigured state)
const initialStatus = mockWindow.getFirebaseStatus();
assert.strictEqual(initialStatus.active, false, 'Should be inactive when not configured');
assert.strictEqual(initialStatus.configured, false, 'Should be unconfigured without projectId');
console.log('▶ [Test 3] Graceful unconfigured state reporting... ✅ PASSED');

// 4. Test safe mock Firebase initialization
const mockFirebase = {
  apps: [],
  initializeApp: function(cfg) {
    this.apps.push({ name: '[DEFAULT]', options: cfg });
    return this.apps[0];
  },
  app: function() { return this.apps[0]; },
  firestore: function() {
    return {
      collection: function(name) {
        return {
          orderBy: () => ({ get: async () => ({ empty: true, docs: [] }) }),
          doc: (id) => ({ set: async (d) => {}, delete: async () => {} })
        };
      },
      batch: function() {
        return { set: () => {}, commit: async () => {} };
      }
    };
  },
  auth: function() { return {}; }
};

global.firebase = mockFirebase;
const initResult = mockWindow.initFirebase({
  apiKey: 'test-ai-studio-key',
  projectId: 'plant-it-downtime-aistudio',
  authDomain: 'plant-it-downtime-aistudio.firebaseapp.com'
});

assert.strictEqual(initResult, true, 'initFirebase should return true with valid config');
assert.strictEqual(mockWindow.isFirebaseActive(), true, 'isFirebaseActive should be true after init');
const activeStatus = mockWindow.getFirebaseStatus();
assert.strictEqual(activeStatus.active, true);
assert.strictEqual(activeStatus.projectId, 'plant-it-downtime-aistudio');
console.log('▶ [Test 4] Mock Firebase & Firestore initialization... ✅ PASSED');

// 5. Test HTML integration check
const indexHtml = fs.readFileSync('index.html', 'utf8');
assert(indexHtml.includes('firebase-client.js'), 'index.html must include firebase-client.js');
assert(indexHtml.includes('firebase-app-compat.js'), 'index.html must load firebase-app SDK');
assert(indexHtml.includes('firebase-firestore-compat.js'), 'index.html must load firestore SDK');
assert(indexHtml.includes('firebase-auth-compat.js'), 'index.html must load firebase-auth SDK');
console.log('▶ [Test 5] index.html includes Firebase SDKs & client adapter... ✅ PASSED');

// 6. Test app.js hooks check
const appJs = fs.readFileSync('app.js', 'utf8');
assert(appJs.includes('window.isFirebaseActive'), 'app.js must check isFirebaseActive');
assert(appJs.includes('window.fetchFirebaseIncidents'), 'app.js must hook fetchFirebaseIncidents');
assert(appJs.includes('window.bulkUpsertFirebaseIncidents'), 'app.js must hook bulkUpsertFirebaseIncidents');
assert(appJs.includes('window.authenticateUserWithFirebase'), 'app.js must hook authenticateUserWithFirebase');
console.log('▶ [Test 6] app.js contains reactive Firebase lifecycle hooks... ✅ PASSED');

console.log('\n========================================================================');
console.log('SUMMARY: ALL 6 FIREBASE INTEGRATION TESTS PASSED (100%)');
console.log('========================================================================');
