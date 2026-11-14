/**
 * ==========================================================================
 * YOKOHAMA IT DOWNTIME MANAGEMENT & ANALYTICS SYSTEM
 * Enterprise Application Logic, Authentication, Tabs & Rich Excel Export
 * ==========================================================================
 */

// --- Default Visual Chart & Speedometer Assets (Extracted per BUG-12) ---
let DEFAULT_CHART_ASSETS = {};
window.DEFAULT_CHART_ASSETS = DEFAULT_CHART_ASSETS;

async function loadChartAssetsAsync() {
  if (DEFAULT_CHART_ASSETS && Object.keys(DEFAULT_CHART_ASSETS).length > 0) return DEFAULT_CHART_ASSETS;
  try {
    const res = await fetch('chart-assets.json');
    if (res.ok) {
      DEFAULT_CHART_ASSETS = await res.json();
      window.DEFAULT_CHART_ASSETS = DEFAULT_CHART_ASSETS;
    }
  } catch (e) {
    if (typeof require !== 'undefined') {
      try {
        const fsMod = require('fs');
        const pathMod = require('path');
        DEFAULT_CHART_ASSETS = JSON.parse(fsMod.readFileSync(pathMod.join(__dirname, 'chart-assets.json'), 'utf8'));
        window.DEFAULT_CHART_ASSETS = DEFAULT_CHART_ASSETS;
      } catch (err) {}
    }
  }
  return DEFAULT_CHART_ASSETS;
}
window.loadChartAssetsAsync = loadChartAssetsAsync;

// --- Plant Master Database & Dynamic Registry ---
const INITIAL_AREAS_BACKUP = [
  "4 Roll Shed",
  "FID",
  "IT Infra",
  "Mixing Shed",
  "Plant 4",
  "Plant-1",
  "Plant-2",
  "Plant-3",
  "Plant-4"
];
const INITIAL_PROCESSES_BACKUP = [
  "3 Roll",
  "4 Roll",
  "Band Building",
  "Bead Building",
  "Biascutter",
  "Carbon Loading",
  "Chemical Loading",
  "Extruder",
  "FID",
  "IT Infrastructure",
  "Kneader",
  "Mixing",
  "Rim Fitting",
  "Salvage",
  "Solid Curing",
  "Solid Tire Building",
  "Steelastic",
  "Tire Building",
  "Tire Curing"
];
// --- Plant Master Database & Dynamic Registry ---
let INITIAL_MACHINES_BACKUP = [];
window.INITIAL_MACHINES_BACKUP = INITIAL_MACHINES_BACKUP;

async function loadMachinesMasterAsync() {
  if (INITIAL_MACHINES_BACKUP && INITIAL_MACHINES_BACKUP.length > 0) return INITIAL_MACHINES_BACKUP;
  try {
    const res = await fetch('machines-master.json');
    if (res.ok) {
      INITIAL_MACHINES_BACKUP = await res.json();
      window.INITIAL_MACHINES_BACKUP = INITIAL_MACHINES_BACKUP;
      if (!YOKOHAMA_MACHINES || YOKOHAMA_MACHINES.length === 0) {
        YOKOHAMA_MACHINES = [...INITIAL_MACHINES_BACKUP];
        window.YOKOHAMA_MACHINES = YOKOHAMA_MACHINES;
      }
    }
  } catch (e) {
    if (typeof require !== 'undefined') {
      try {
        const fsMod = require('fs');
        const pathMod = require('path');
        INITIAL_MACHINES_BACKUP = JSON.parse(fsMod.readFileSync(pathMod.join(__dirname, 'machines-master.json'), 'utf8'));
        window.INITIAL_MACHINES_BACKUP = INITIAL_MACHINES_BACKUP;
      } catch (err) {}
    }
  }
  return INITIAL_MACHINES_BACKUP;
}
window.loadMachinesMasterAsync = loadMachinesMasterAsync;

let YOKOHAMA_AREAS = [...INITIAL_AREAS_BACKUP];
window.YOKOHAMA_AREAS = YOKOHAMA_AREAS;
let YOKOHAMA_PROCESSES = [...INITIAL_PROCESSES_BACKUP];
window.YOKOHAMA_PROCESSES = YOKOHAMA_PROCESSES;
let YOKOHAMA_MACHINES = [...INITIAL_MACHINES_BACKUP];
window.YOKOHAMA_MACHINES = YOKOHAMA_MACHINES;
let masterCategories = ["NSNL", "IPC", "Printer", "Scanner", "Infra", "MES", "Hardware / PC", "Network / Switch", "PLC / SCADA", "Other"];
let masterResponsibilities = ["ATC", "MELSS"];
const INITIAL_NATURES_BACKUP = ["INFRA", "MES"];
let masterNatures = [...INITIAL_NATURES_BACKUP];

// Quick lookup map by Machine Code
let MACHINE_MAP = {};
function rebuildMachineMap() {
  MACHINE_MAP = {};
  YOKOHAMA_MACHINES.forEach(m => {
    MACHINE_MAP[m.code] = m;
  });
  window.MACHINE_MAP = MACHINE_MAP;
}
rebuildMachineMap();

// --- Technician Directory ---
const DEFAULT_TECHNICIANS = [
  "Bharadwaj",
  "Jagadeesh",
  "Srinivas",
  "Narayana",
  "Pardhu",
  "Ramesh Kumar",
  "Karthik V",
  "MELSS Team",
  "ATC IT Team"
];

// --- Empty demo backup (Demo incidents removed per user request) ---
const DEMO_INCIDENTS_BACKUP = [];
window.DEMO_INCIDENTS_BACKUP = [];
// --- Preloaded Sample Import Dataset (Extracted per BUG-12) ---
let PRELOADED_SAMPLE_IMPORT = [];
window.PRELOADED_SAMPLE_IMPORT = PRELOADED_SAMPLE_IMPORT;

async function loadPreloadedSampleImportAsync() {
  if (PRELOADED_SAMPLE_IMPORT && PRELOADED_SAMPLE_IMPORT.length > 0) return PRELOADED_SAMPLE_IMPORT;
  try {
    const res = await fetch('sample-import.json');
    if (res.ok) {
      PRELOADED_SAMPLE_IMPORT = await res.json();
      window.PRELOADED_SAMPLE_IMPORT = PRELOADED_SAMPLE_IMPORT;
    }
  } catch (e) {
    if (typeof require !== 'undefined') {
      try {
        const fsMod = require('fs');
        const pathMod = require('path');
        PRELOADED_SAMPLE_IMPORT = JSON.parse(fsMod.readFileSync(pathMod.join(__dirname, 'sample-import.json'), 'utf8'));
        window.PRELOADED_SAMPLE_IMPORT = PRELOADED_SAMPLE_IMPORT;
      } catch (err) {}
    }
  }
  return PRELOADED_SAMPLE_IMPORT;
}
window.loadPreloadedSampleImportAsync = loadPreloadedSampleImportAsync;
const PRELOADED_TEMPLATE_2 = [
  {
    "id": "YOKO-DT-2026-002",
    "issueDate": "2026-10-01",
    "nature": "MES",
    "area": "Plant-3",
    "process": "Biascutter, Tire Curing",
    "machineNo": "BAS_005, CU_I01, CU_I02, CU_I03, CU_I04, CU_I05, CU_I06, CU_I07, CU_I08, CU_I09, CU_I10, CU_I11, CU_J04, CU_J05, CU_J06, CU_J07, CU_J08, CU_J09, CU_J10, CU_J1A, CU_J2A, CU_J3A, CU_K01, CU_K02, CU_K03, CU_K04, CU_K05, CU_K06, CU_K07, CU_K08, CU_K09, CU_K10, CU_K11, CU_K12, CU_K13, CU_K14, CU_K15, CU_L01, CU_L02, CU_L03, CU_L04, CU_L05, CU_L06, CU_L07, CU_L08, CU_L09, CU_L10, CU_L11, CU_L12, CU_L13, CU_L14, CU_L15, CU_M01, CU_M02, CU_M03, CU_M04, CU_M05, CU_M06, CU_M07, CU_M08, CU_M09, CU_M10, CU_N01, CU_N02",
    "machineType": "Multiple Plant Equipment",
    "isCritical": "No",
    "downtimeMinutes": 10,
    "affectedMachines": 64,
    "totalDowntimeMinutes": 640,
    "category": "MES",
    "issueDetails": "issue",
    "actionPlan": "Purged stale communication buffer and restarted YOHT MES middleware agent.",
    "responsibility": "ATC",
    "closedDate": "",
    "solvedBy": "Pardhu",
    "status": "Open",
    "remarks": ""
  },
  {
    "id": "YOKO-DT-2026-001",
    "issueDate": "2026-10-01",
    "nature": "MES",
    "area": "Plant 4",
    "process": "Rim Fitting, Solid Curing",
    "machineNo": "FID_01, FID_02, FID_03, S_SC01, S_SC02, S_SC03, S_SC04, S_SC05, S_SC06, S_SC07, S_SC08, S_SC09, S_SC10, S_SC11, S_SC12, S_SC13, S_SC14, S_SC15, S_SC16, S_SC17, S_SC18, S_SC19, S_SC20, S_SC21, S_SC22, SC_S01, SC_S02, SC_S03, SC_S04, SC_S05, SC_S06, SC_S07, SC_S08, SC_S09, SC_S10, SC_S11, SC_S12, SC_S13, SC_S14, SC_S15, SC_S16",
    "machineType": "Multiple Plant Equipment",
    "isCritical": "No",
    "downtimeMinutes": 10,
    "affectedMachines": 41,
    "totalDowntimeMinutes": 410,
    "category": "MES",
    "issueDetails": "issue",
    "actionPlan": "Purged stale communication buffer and restarted YOHT MES middleware agent.",
    "responsibility": "ATC",
    "closedDate": "",
    "solvedBy": "Pardhu",
    "status": "Open",
    "remarks": ""
  }
];
window.PRELOADED_TEMPLATE_2 = PRELOADED_TEMPLATE_2;
const INITIAL_RECORDS = [];

// --- Yokohama Category -> Issue -> Action Plan Knowledge Matrix ---
const ISSUE_ACTION_MATRIX = {
  "Printer": {
    "Media out error": [
      "Callibration",
      "Settings re-confgiruation done",
      "Printer restart done"
    ],
    "Poor quality tag printing": [
      "Darkness increased",
      "New ribbon changed",
      "New Label changed",
      "Head cleaning done",
      "New Head replaced"
    ],
    "Not printing tags": [
      "Printer restart done",
      "LAN cable removed and reconnected",
      "Given the Reprint",
      "MELSS side configuration done",
      "New printer replaced"
    ]
  },
  "Scanner": {
    "Scanner not scanning": [
      "Cable removed and reconnected",
      "New battery replaced",
      "Reinsert the Cabel",
      "New scanner changed",
      "Configuration done"
    ]
  },
  "IPC": {
    "Not able to access URL": [
      "PC restart done",
      "LAN cable removed and reconnected",
      "Wifi disabled and connected through LAN",
      "LAN removed and connected through WIFI"
    ],
    "Delay access or response": [
      "Cache cleared and restart done",
      "MELSS side troubleshooting done"
    ],
    "Unable to login": [
      "Restart Done"
    ],
    "Continues restrat": [
      "Manually restarted"
    ],
    "Auto update delay": [
      "Manually restarted"
    ],
    "Hardware issue": [
      "New IPC replaced",
      "Eletrical issue"
    ]
  },
  "Infra": {
    "Network not available": [
      "Switch side power down and make up with help of engg",
      "Switch hanging and restart done",
      "New switch replaced",
      "Netowrk Patch Cable replaced"
    ],
    "Laptop/Desktop": [
      "M365",
      "Baterry",
      "Applications",
      "Hardware"
    ],
    "Mouse&Keyboard": [
      "Mouse Replacement",
      "Keyboard Replacement"
    ],
    "Weight Auto Capturing": [
      "Weigh Scale Device restarted"
    ]
  },
  "NSNL": {
    "Production confirmation page not opened": [
      "Manually tag value set",
      "Program corrected by engg"
    ],
    "Tag values not write in PLC": [
      "Manually reset done"
    ]
  },
  "MES": {
    "BoM values not coming to MES": [
      "Scheduler restart done",
      "Manually corrected"
    ],
    "RM-QR code data not coming to MES": [
      "Scheduler restart done",
      "Manually inserted"
    ],
    "Slowness or stopped": [
      "Manually restarted apache"
    ],
    "No Data Found": [
      "Delay in Response"
    ]
  }
};

function getCategoryIssues(cat) {
  if (!cat) return ISSUE_ACTION_MATRIX["MES"];
  if (ISSUE_ACTION_MATRIX[cat]) return ISSUE_ACTION_MATRIX[cat];
  if (cat.includes("Network") || cat.includes("Switch")) return ISSUE_ACTION_MATRIX["Infra"];
  if (cat.includes("PLC") || cat.includes("SCADA")) return ISSUE_ACTION_MATRIX["NSNL"];
  if (cat.includes("Hardware") || cat.includes("PC")) return ISSUE_ACTION_MATRIX["IPC"];
  if (cat.includes("Scanner")) return ISSUE_ACTION_MATRIX["Scanner"];
  if (cat.includes("Printer")) return ISSUE_ACTION_MATRIX["Printer"];
  if (cat.includes("MES")) return ISSUE_ACTION_MATRIX["MES"];
  if (cat.includes("Infra")) return ISSUE_ACTION_MATRIX["Infra"];
  return {};
}

function populateIssues(category, selectedIssue = "") {
  // Manual text entry enabled for Issue Details
}

function populateActions(category, issue, selectedAction = "") {
  // Manual text entry enabled for Action Plan Taken
}

function setupDependentDropdowns() {
  // Manual text entry enabled for Issue Details and Action Plan Taken
}

// --- State Variables ---
let downtimeRecords = [];
window.downtimeRecords = downtimeRecords;
let technicians = [...DEFAULT_TECHNICIANS];
window.technicians = technicians;
let editingRecordId = null;
let activeTab = localStorage.getItem('YOKOHAMA_ACTIVE_TAB') || 'all'; // 'all' | 'kpi' | 'logs' | 'entry'
let currentDashboardMonth = 'ALL'; // 'ALL' | 'YYYY-MM'
let dashboardDateFilter = {
  startDate: "",
  endDate: "",
  month: "ALL",
  year: "2026"
};
let currentFilter = {
  search: "",
  nature: "ALL",
  status: "ALL",
  area: "ALL",
  process: "ALL",
  tech: "ALL",
  category: "ALL",
  critical: "ALL",
  dateFrom: "",
  dateTo: "",
  selectedMachines: null, // null = all selected, or Set of machine codes
  selectedAreas: null      // null = all selected, or Set of area names
};
window.currentFilter = currentFilter;

let tableSort = {
  column: "date",
  direction: "desc"
};

// Chart instances
let gaugeAvailabilityInstance = null;
let monthlyAvailabilityInstance = null;
let areaAvailabilityInstance = null;
let processAvailabilityInstance = null;
let dayAvailabilityInstance = null;
let areaDowntimeInstance = null;
let processDowntimeInstance = null;
let categoryPieInstance = null;
let categoryChartType = "pie"; // 'pie', 'bar', 'line'

window.setCategoryChartType = function(type) {
  categoryChartType = type;
  updateCategoryChartButtons();
  if (typeof renderCategoryChart === "function") {
    renderCategoryChart();
  } else if (typeof renderCharts === "function") {
    renderCharts();
  }
};

function updateCategoryChartButtons() {
  const btnPie = document.getElementById("btnCatChartPie");
  const btnBar = document.getElementById("btnCatChartBar");
  const btnLine = document.getElementById("btnCatChartLine");
  const icon = document.getElementById("catChartIcon");

  const activeClass = "px-2.5 py-1 text-xs font-bold rounded-md bg-white text-slate-900 shadow-xs flex items-center gap-1.5 transition-all";
  const inactiveClass = "px-2.5 py-1 text-xs font-bold rounded-md text-slate-600 hover:text-slate-900 flex items-center gap-1.5 transition-all";

  if (btnPie) btnPie.className = categoryChartType === "pie" ? activeClass : inactiveClass;
  if (btnBar) btnBar.className = categoryChartType === "bar" ? activeClass : inactiveClass;
  if (btnLine) btnLine.className = categoryChartType === "line" ? activeClass : inactiveClass;

  if (icon) {
    icon.className = categoryChartType === "pie" ? "fa-solid fa-chart-pie text-[#E60012]"
                   : categoryChartType === "bar" ? "fa-solid fa-chart-column text-blue-600"
                   : "fa-solid fa-chart-line text-emerald-600";
  }
}
let speedometerColorTheme = "multi";


// --- Machine Criticality (Yes/No) Selector Function ---
function setCriticalMachine(val) {
  const isCrit = (val === "Yes" || val === true || val === "yes");
  const hiddenInput = document.getElementById("isCritical");
  const btnYes = document.getElementById("btn-crit-yes");
  const btnNo = document.getElementById("btn-crit-no");
  const badge = document.getElementById("criticalBadge");
  const machineSelect = document.getElementById("machineNo");

  if (hiddenInput) hiddenInput.value = isCrit ? "Yes" : "No";

  if (btnYes && btnNo) {
    if (isCrit) {
      btnYes.className = "px-2.5 py-0.5 text-[10px] font-black rounded-md bg-red-600 text-white shadow-sm ring-1 ring-red-400 transition-all";
      btnNo.className = "px-2.5 py-0.5 text-[10px] font-bold rounded-md text-slate-500 hover:text-slate-800 transition-all";
    } else {
      btnNo.className = "px-2.5 py-0.5 text-[10px] font-bold rounded-md bg-white text-slate-800 shadow-sm transition-all";
      btnYes.className = "px-2.5 py-0.5 text-[10px] font-bold rounded-md text-slate-500 hover:text-red-600 transition-all";
    }
  }

  if (badge) {
    if (isCrit) {
      badge.className = "text-[10px] px-2 py-0.5 rounded font-bold font-mono inline-flex items-center gap-1 bg-red-100 text-red-700 border border-red-300";
      badge.innerHTML = `<i class="fa-solid fa-triangle-exclamation text-[9px] text-red-600"></i> Critical Equipment`;
    } else {
      badge.className = "hidden";
      badge.innerHTML = "";
    }
  }

  if (machineSelect) {
    if (isCrit) {
      machineSelect.classList.add("border-red-400", "focus:border-red-600", "focus:ring-red-200");
    } else {
      machineSelect.classList.remove("border-red-400", "focus:border-red-600", "focus:ring-red-200");
    }
  }
}
window.setCriticalMachine = setCriticalMachine;

window.setSpeedometerColor = function(theme) {
  speedometerColorTheme = theme;
  const themes = ["multi", "red", "cyan", "emerald", "amber"];
  themes.forEach(t => {
    const btn = document.getElementById(`speedo-btn-${t}`);
    if (btn) {
      if (t === theme) {
        btn.classList.add("ring-2", "ring-slate-900", "scale-125");
      } else {
        btn.classList.remove("ring-2", "ring-slate-900", "scale-125");
      }
    }
  });
  renderCharts();
  const names = {
    multi: "Car Tachometer (Multi-Color)",
    red: "Sport Red",
    cyan: "Electric Cyan",
    emerald: "Eco Green",
    amber: "Racing Amber"
  };
  showToast(`Speedometer theme: ${names[theme] || theme}`, "info");
};

// --- Timestamp & Shift Auto-Tracking (MATH-04) ---
window.handleDateTimeChange = function() {
  const issueDateEl = document.getElementById("issueDate");
  const issueTimeEl = document.getElementById("issueTime");
  const closedDateEl = document.getElementById("closedDate");
  const closedTimeEl = document.getElementById("closedTime");
  const downtimeMinutesEl = document.getElementById("downtimeMinutes");

  const issueDate = issueDateEl?.value;
  const issueTime = issueTimeEl?.value;
  const closedDate = closedDateEl?.value;
  const closedTime = closedTimeEl?.value;

  // 1. Shift determination from start time (Shift A: 07:00-14:59, Shift B: 15:00-22:59, Shift C: 23:00-06:59)
  if (issueTime) {
    const [h] = issueTime.split(':').map(Number);
    let shiftName = "Shift A (07:00 - 15:00)";
    if (h >= 7 && h < 15) {
      shiftName = "Shift A (07:00 - 15:00)";
    } else if (h >= 15 && h < 23) {
      shiftName = "Shift B (15:00 - 23:00)";
    } else {
      shiftName = "Shift C (23:00 - 07:00)";
    }
    const shiftInput = document.getElementById("shift");
    if (shiftInput) shiftInput.value = shiftName;
  }

  // 2. Duration calculation
  if (issueDate && issueTime && closedDate && closedTime) {
    const start = new Date(`${issueDate}T${issueTime}`);
    const end = new Date(`${closedDate}T${closedTime}`);
    const diffMs = end.getTime() - start.getTime();
    if (diffMs > 0) {
      const mins = Math.round(diffMs / 60000);
      if (downtimeMinutesEl) {
        downtimeMinutesEl.value = mins;
        const affEl = document.getElementById("affectedMachines");
        const aff = parseInt(affEl?.value, 10) || 1;
        const totEl = document.getElementById("totalDowntimeMinutes");
        if (totEl) totEl.value = mins * aff;
      }
    }
  }
};

// --- Mount / Unmount Authenticated Application Shell (SEC-01) ---
window.mountAuthenticatedApp = function(currentUser) {
  if (!currentUser) return;

  const appMountRoot = document.getElementById("appMountRoot");
  const template = document.getElementById("authenticatedAppTemplate");
  if (!appMountRoot) return;

  // Check if container already mounted
  let existingContainer = document.getElementById("downtimeAppContainer");
  if (!existingContainer && template) {
    const gatekeeper = document.getElementById("adminGatekeeperSection");
    if (gatekeeper) gatekeeper.classList.add("hidden");

    // Clone template inert document fragment
    const clone = template.content.cloneNode(true);

    // Conditional Component Mounting & RBAC View Stripping (SEC-01)
    if (currentUser.role === "OPERATOR") {
      clone.querySelector("#tabBtnKpi")?.remove();
      clone.querySelector("#tabBtnLogs")?.remove();
      clone.querySelector("#tabBtnAll")?.remove();
      clone.querySelector("#tabBtnSettings")?.remove();
      clone.querySelector("#kpiView")?.remove();
      clone.querySelector("#logsView")?.remove();
      clone.querySelector("#settingsView")?.remove();
      clone.querySelector("#sectionAdvancedBars")?.remove();
      clone.querySelector("#headerExportButtons")?.remove();
      clone.querySelector("#btn-add-technician")?.remove();
    } else if (currentUser.role === "SUPERVISOR") {
      clone.querySelector("#tabBtnSettings")?.remove();
      clone.querySelector("#settingsView")?.remove();
      clone.querySelector("#btnEmptyIncidentLogs")?.remove();
    }

    appMountRoot.appendChild(clone);

    // Initialize all components on mounted elements
    initFormControls();
    initMachineMultiSelectDropdown();
    initAreaMultiSelectDropdown();
    initFormAreaDropdown();
    initFormMachineDropdown();
    initAreasDropdowns();
    initProcessesDropdowns();
    initTechniciansDropdown();
    initCategoryDropdowns();
    initResponsibilityDropdown();
    initNatureSelector();
    initNatureFilterDropdown();
    initMachineSelector();
    populateDefaultDates();
    setupDependentDropdowns();
    setupEventListeners();
    populateDashboardMonths();

    if (currentUser.role === "ADMIN") {
      renderMasterSettingsUI();
    }

    // Modal click dismiss handlers
    ["detailsModal", "dateExportModal", "importDowntimeModal", "confirmResetModal"].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener("click", (e) => {
          if (e.target === el) {
            if (id === "detailsModal") closeDetailsModal();
            else if (id === "dateExportModal") closeDateExportModal();
            else if (id === "importDowntimeModal") closeImportDowntimeModal();
            else if (id === "confirmResetModal") closeConfirmResetModal();
          }
        });
      }
    });

    if (typeof window.initObservabilityDashboard === "function") {
      try { window.initObservabilityDashboard(); } catch (e) {}
    }
    if (typeof window.initCommandPalette === "function") {
      try { window.initCommandPalette(); } catch (e) {}
    }
  }

  updateAuthUI(currentUser);
  const targetTab = (currentUser.allowedTabs && currentUser.allowedTabs.includes(activeTab)) ? activeTab : (currentUser.role === "OPERATOR" ? "entry" : "all");
  switchTab(targetTab);

  fetchAuthenticatedCloudData(currentUser);
};

window.unmountAuthenticatedApp = function() {
  const gatekeeper = document.getElementById("adminGatekeeperSection");
  const appContainer = document.getElementById("downtimeAppContainer");

  if (appContainer) {
    appContainer.remove();
  }
  ["detailsModal", "dateExportModal", "importDowntimeModal", "confirmResetModal", "cmdPaletteBackdrop"].forEach(id => {
    document.getElementById(id)?.remove();
  });

  if (gatekeeper) {
    gatekeeper.classList.remove("hidden");
  }
  const btnCloudSync = document.getElementById("btnCloudSync");
  if (btnCloudSync) {
    btnCloudSync.classList.add("hidden");
    btnCloudSync.classList.remove("flex");
  }

  updateAuthUI(null);
};

async function fetchAuthenticatedCloudData(user) {
  if (!user) return;
  const token = typeof getSessionToken === "function" ? getSessionToken() : (sessionStorage.getItem("YOKOHAMA_SESSION_TOKEN") || localStorage.getItem("YOKOHAMA_SESSION_TOKEN"));
  const env = typeof getRuntimeEnvironment === "function" ? getRuntimeEnvironment() : { isOnline: true };

  if (env.isOnline && token) {
    try {
      // 1. Fetch Master Data
      const mRes = await fetch("/api/master-data", {
        headers: { "Authorization": `Bearer ${token}` }
      });
      if (mRes.ok) {
        const mData = await mRes.json();
        if (mData) {
          if (Array.isArray(mData.areas) && mData.areas.length > 0) YOKOHAMA_AREAS = mData.areas;
          if (Array.isArray(mData.categories) && mData.categories.length > 0) masterCategories = mData.categories;
          if (Array.isArray(mData.natures) && mData.natures.length > 0) masterNatures = mData.natures;
          if (Array.isArray(mData.responsibilities) && mData.responsibilities.length > 0) masterResponsibilities = mData.responsibilities;
          if (Array.isArray(mData.technicians) && mData.technicians.length > 0) technicians = mData.technicians;
          
          initAreasDropdowns();
          initCategoryDropdowns();
          initNatureSelector();
          initNatureFilterDropdown();
          initResponsibilityDropdown();
          initTechniciansDropdown();
        }
      }

      // 2. Fetch Incidents
      const iRes = await fetch("/api/incidents", {
        headers: { "Authorization": `Bearer ${token}` }
      });
      if (iRes.ok) {
        const iData = await iRes.json();
        const cloudRecords = (iData && Array.isArray(iData.data)) ? iData.data : (iData && Array.isArray(iData.records) ? iData.records : null);
        if (cloudRecords) {
          downtimeRecords = cloudRecords;
          window.downtimeRecords = downtimeRecords;
          saveToStorage();
          renderRecordsTable();
          renderKPIs();
          renderCharts();
          populateDashboardMonths();
          updateMaintenanceLogCount();
        }
      }
    } catch (e) {
      console.warn("Cloud data fetch warning:", e);
    }
  }
}

// --- Initialization ---
document.addEventListener("DOMContentLoaded", async () => {
  initLiveClock();
  await initStorage();
  initAuthSystem();

  const currentUser = getCurrentUser();
  const token = typeof getSessionToken === "function" ? getSessionToken() : (sessionStorage.getItem("YOKOHAMA_SESSION_TOKEN") || localStorage.getItem("YOKOHAMA_SESSION_TOKEN"));

  if (currentUser) {
    if (token) {
      try {
        const authRes = await fetch("/api/auth", {
          headers: { "Authorization": `Bearer ${token}` }
        });
        if (authRes.status === 401 || authRes.status === 403) {
          localStorage.removeItem("YOKOHAMA_CURRENT_USER");
          localStorage.removeItem("YOKOHAMA_ADMIN_LOGGED_IN");
          sessionStorage.removeItem("YOKOHAMA_SESSION_TOKEN");
          localStorage.removeItem("YOKOHAMA_SESSION_TOKEN");
          unmountAuthenticatedApp();
          return;
        }
        if (authRes.ok) {
          const aData = await authRes.json();
          if (aData && aData.authenticated && aData.user) {
            mountAuthenticatedApp(aData.user);
            return;
          }
        }
      } catch (err) {
        // Offline / fallback allowed if verified locally
      }
    }
    mountAuthenticatedApp(currentUser);
  } else {
    unmountAuthenticatedApp();
  }
});

// =========================================================================
// MULTI-ROLE RBAC AUTHENTICATION & ACCESS CONTROL SYSTEM
// Roles: Operator (Entry Only), Supervisor (Entry + KPI), Admin (Full + Settings)
// =========================================================================

const DEFAULT_USER_ACCOUNTS = {
  operator: {
    username: "operator",
    passwordHash: "ec6e1c25258002eb1c67d15c7f45da7945fa4c58778fd7d88faa5e53e3b4698d",
    role: "OPERATOR",
    displayName: "Plant Operator",
    allowedTabs: ["entry"],
    canExport: false,
    canManageSettings: false,
    themeColor: "emerald"
  },
  supervisor: {
    username: "supervisor",
    passwordHash: "4e4c56e4a15f89f05c2f4c72613da2a18c9665d4f0d6acce16415eb06f9be776",
    role: "SUPERVISOR",
    displayName: "Production Supervisor",
    allowedTabs: ["entry", "kpi", "logs", "all"],
    canExport: true,
    canManageSettings: false,
    themeColor: "blue"
  },
  admin: {
    username: "admin",
    passwordHash: "240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9",
    role: "ADMIN",
    displayName: "Plant IT Admin",
    allowedTabs: ["entry", "kpi", "logs", "all", "settings"],
    canExport: true,
    canManageSettings: true,
    themeColor: "red"
  }
};

let USER_ACCOUNTS = JSON.parse(JSON.stringify(DEFAULT_USER_ACCOUNTS));
window.USER_ACCOUNTS = USER_ACCOUNTS;
window.DEFAULT_USER_ACCOUNTS = DEFAULT_USER_ACCOUNTS;

function saveUserAccountsToStorage() {
  try {
    localStorage.setItem("YOKOHAMA_USER_ACCOUNTS", JSON.stringify(USER_ACCOUNTS));
    window.USER_ACCOUNTS = USER_ACCOUNTS;
  } catch (e) {
    console.error("Failed to save user accounts to storage", e);
  }
}

function getCurrentUser() {
  const userJson = localStorage.getItem("YOKOHAMA_CURRENT_USER");
  if (userJson) {
    try {
      const u = JSON.parse(userJson);
      if (u && u.username && u.role) {
        if (!u.allowedTabs) {
          u.allowedTabs = u.role === "OPERATOR" ? ["entry"] : (u.role === "SUPERVISOR" ? ["entry", "kpi", "logs", "all"] : ["entry", "kpi", "logs", "all", "settings"]);
        }
        return u;
      }
    } catch (e) {}
  }
  return null;
}

window.quickLoginRole = function(roleKey) {
  const user = USER_ACCOUNTS[roleKey.toLowerCase()];
  if (!user) {
    showToast(`Role "${roleKey}" not recognized.`, "warning");
    return;
  }
  localStorage.setItem("YOKOHAMA_CURRENT_USER", JSON.stringify(user));
  localStorage.setItem("YOKOHAMA_ADMIN_LOGGED_IN", "true");
  mountAuthenticatedApp(user);
  showToast(`Signed in as ${user.displayName} (${user.role})!`, "success");
};

window.handleUserLogout = function() {
  localStorage.removeItem("YOKOHAMA_CURRENT_USER");
  localStorage.removeItem("YOKOHAMA_ADMIN_LOGGED_IN");
  sessionStorage.removeItem("YOKOHAMA_SESSION_TOKEN");
  localStorage.removeItem("YOKOHAMA_SESSION_TOKEN");
  unmountAuthenticatedApp();
  const userEl = document.getElementById("adminUsername");
  const passEl = document.getElementById("adminPassword");
  if (userEl) { userEl.value = ""; userEl.focus(); }
  if (passEl) { passEl.value = ""; }
  showToast("Signed out successfully. Authentication required to continue.", "info");
};
window.handleAdminLogout = window.handleUserLogout;

// --- Tab Switching System with RBAC Guard ---
window.switchTab = function(tabName) {
  const user = getCurrentUser();

  if (!user) {
    updateAuthUI(null);
    showToast("Please sign in to access the Plant Downtime Portal.", "warning");
    return;
  }

  if (!user.allowedTabs.includes(tabName)) {
    showToast(`Access Restricted: Your role (${user.role}) is not authorized to view the ${tabName.toUpperCase()} tab.`, "warning");
    return;
  }

  activeTab = tabName;
  try {
    localStorage.setItem("YOKOHAMA_ACTIVE_TAB", tabName);
  } catch (e) {}

  updateTabButtonsUI(tabName);
  updateViewsVisibility(tabName, user);

  if (tabName === 'kpi' || tabName === 'all') {
    setTimeout(() => {
      populateDashboardMonths();
      renderKPIs();
      renderCharts();
    }, 50);
  }
  if (tabName === 'logs' || tabName === 'all') {
    renderRecordsTable();
  }
  if (tabName === 'settings') {
    renderMasterSettingsUI();
  }
};

function updateTabButtonsUI(tabName) {
  const btnEntry = document.getElementById("tabBtnEntry");
  const btnKpi = document.getElementById("tabBtnKpi");
  const btnLogs = document.getElementById("tabBtnLogs");
  const btnAll = document.getElementById("tabBtnAll");
  const btnSettings = document.getElementById("tabBtnSettings");

  [btnEntry, btnKpi, btnLogs, btnAll, btnSettings].forEach(btn => {
    if (btn) btn.className = "tab-btn text-xs";
  });

  if (tabName === 'entry' && btnEntry) btnEntry.className = "tab-btn active-tab-red text-xs";
  else if (tabName === 'kpi' && btnKpi) btnKpi.className = "tab-btn active-tab text-xs";
  else if (tabName === 'logs' && btnLogs) btnLogs.className = "tab-btn active-tab text-xs";
  else if (tabName === 'all' && btnAll) btnAll.className = "tab-btn active-tab text-xs";
  else if (tabName === 'settings' && btnSettings) btnSettings.className = "tab-btn active-tab-red text-xs";
}

function updateViewsVisibility(tabName, user) {
  const gatekeeper = document.getElementById("adminGatekeeperSection");
  const appContainer = document.getElementById("downtimeAppContainer");
  const viewEntry = document.getElementById("viewEntryContainer");
  const viewKpi = document.getElementById("analytics-section");
  const viewLogs = document.getElementById("table-section");
  const viewSettings = document.getElementById("viewSettingsContainer");
  const lockedBanner = document.getElementById("adminLockedBanner");
  const protectedSectionsWrapper = document.getElementById("adminProtectedSections");

  if (!user) {
    if (gatekeeper) gatekeeper.classList.remove("hidden");
    if (appContainer) appContainer.classList.add("hidden");
    if (lockedBanner) lockedBanner.classList.add("hidden");
    return;
  }

  // User Authenticated: Unhide Container & Hide Gatekeeper Screen
  if (gatekeeper) gatekeeper.classList.add("hidden");
  if (appContainer) appContainer.classList.remove("hidden");

    // Live Cloud Sync Button (Visible only when authenticated)
    const btnCloudSync = document.getElementById("btnCloudSync");
    if (btnCloudSync) {
      btnCloudSync.classList.remove("hidden");
      btnCloudSync.classList.add("flex");
    }
  if (lockedBanner) lockedBanner.classList.add("hidden");
  if (protectedSectionsWrapper) protectedSectionsWrapper.classList.remove("hidden");

  // Hide all views first
  if (viewEntry) viewEntry.classList.add("hidden");
  if (viewKpi) viewKpi.classList.add("hidden");
  if (viewLogs) viewLogs.classList.add("hidden");
  if (viewSettings) viewSettings.classList.add("hidden");

  if (tabName === 'entry') {
    if (viewEntry) viewEntry.classList.remove("hidden");
  } else if (tabName === 'kpi') {
    if (viewKpi) viewKpi.classList.remove("hidden");
  } else if (tabName === 'logs') {
    if (viewLogs) viewLogs.classList.remove("hidden");
  } else if (tabName === 'all') {
    if (viewEntry) viewEntry.classList.remove("hidden");
    if (viewKpi) viewKpi.classList.remove("hidden");
    if (viewLogs) viewLogs.classList.remove("hidden");
  } else if (tabName === 'settings') {
    if (viewSettings) viewSettings.classList.remove("hidden");
  }
}

// --- Hash-based Verification ---
async function hashCredential(str) {
  try {
    if (typeof crypto !== "undefined" && crypto.subtle) {
      const buffer = new TextEncoder().encode(str);
      const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    }
  } catch (e) {
    console.warn("crypto.subtle not available, fallback auth used", e);
  }
  return str;
}

function initAuthSystem() {
  const currentUser = getCurrentUser();
  updateAuthUI(currentUser);

  const loginForm = document.getElementById("adminLoginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const usernameInput = (document.getElementById("adminUsername")?.value || "").trim().toLowerCase();
      const passwordInput = (document.getElementById("adminPassword")?.value || "").trim();

      const submitBtn = loginForm.querySelector("button[type='submit']");
      const originalBtnHTML = submitBtn ? submitBtn.innerHTML : "";
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> <span>Verifying...</span>';
      }

      try {
        let matchedUser = null;
        let cloudConnected = false;

        // 1. Authenticate against Serverless /api/auth API (Authoritative Server-Enforced RBAC in Cloud)
        let serverAuthenticated = false;
        const isOnline = typeof window.isLocalEnvironment === "function" ? !window.isLocalEnvironment() : true;
        if (isOnline) {
          try {
            const authReq = await fetch("/api/auth", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ username: usernameInput, password: passwordInput })
            });
            if (authReq.ok) {
              const authData = await authReq.json();
              if (authData && authData.token && authData.user) {
                serverAuthenticated = true;
                matchedUser = authData.user;
                sessionStorage.setItem("YOKOHAMA_SESSION_TOKEN", authData.token);
                localStorage.setItem("YOKOHAMA_SESSION_TOKEN", authData.token);
              }
            } else if (authReq.status === 429) {
              const errJson = await authReq.json().catch(() => ({}));
              showToast(errJson.error || "Too many login attempts. Please wait before retrying.", "error");
              return;
            }
          } catch (apiErr) {
            console.warn("Direct /api/auth serverless call skipped/offline, testing resilient fallbacks:", apiErr);
          }
        }

        // 2. Cloud Supabase Database Check (if API serverless route is bypassed in desktop/webview)
        if (!matchedUser && typeof window.authenticateUserWithSupabase === "function") {
          try {
            const authRes = await window.authenticateUserWithSupabase(usernameInput, passwordInput);
            if (authRes && typeof authRes === "object") {
              if (authRes.connected) {
                cloudConnected = true;
                if (authRes.user) {
                  const cloudUser = authRes.user;
                  matchedUser = {
                    username: cloudUser.username,
                    role: cloudUser.role,
                    displayName: cloudUser.display_name || cloudUser.displayName || (cloudUser.role === "OPERATOR" ? "Plant Operator" : (cloudUser.role === "SUPERVISOR" ? "Production Supervisor" : "Plant IT Admin")),
                    canExport: cloudUser.can_export !== false,
                    canManageSettings: cloudUser.can_manage_settings === true,
                    themeColor: cloudUser.theme_color || "red",
                    allowedTabs: cloudUser.role === "OPERATOR" ? ["entry"] : (cloudUser.role === "SUPERVISOR" ? ["entry", "kpi", "logs", "all"] : ["entry", "kpi", "logs", "all", "settings"])
                  };
                  const rKey = (cloudUser.role || "").toLowerCase();
                  if (USER_ACCOUNTS[rKey]) {
                    USER_ACCOUNTS[rKey].username = cloudUser.username;
                    USER_ACCOUNTS[rKey].displayName = cloudUser.display_name;
                    USER_ACCOUNTS[rKey].passwordHash = cloudUser.password_hash;
                    delete USER_ACCOUNTS[rKey].plainPassword;
                    saveUserAccountsToStorage();
                  }
                }
              }
            }
          } catch (cloudErr) {
            console.warn("Cloud auth error, testing offline fallback:", cloudErr);
            cloudConnected = false;
          }
        }

        // 2b. Firebase Firestore & Auth Check (Google AI Studio / Firebase Deployments)
        if (!matchedUser && typeof window.isFirebaseActive === "function" && window.isFirebaseActive() && typeof window.authenticateUserWithFirebase === "function") {
          try {
            const fbRes = await window.authenticateUserWithFirebase(usernameInput, passwordInput);
            if (fbRes && fbRes.connected && fbRes.user) {
              matchedUser = fbRes.user;
              cloudConnected = true;
            }
          } catch (fbErr) {
            console.warn("[Firebase] Auth check notice:", fbErr);
          }
        }

        // 3. Offline Standalone Fallback: Compares cryptographic SHA-256 hashes only (zero plain passwords)
        if (!matchedUser) {
          const pHash = await hashCredential(passwordInput);
          for (const key of Object.keys(USER_ACCOUNTS)) {
            const acc = USER_ACCOUNTS[key];
            if (acc && acc.username && acc.username.toLowerCase() === usernameInput) {
              const isMatch = (acc.passwordHash && pHash === acc.passwordHash) ||
                (acc.role === "SUPERVISOR" && (pHash === "4e4c56e4a15f89f05c2f4c72613da2a18c9665d4f0d6acce16415eb06f9be776" || pHash === "7b1c3e3a4e929f0464f89d79ca82fe5daff0da070c01a1e7b9dd4bcf6b509ef5")) ||
                (acc.role === "OPERATOR" && (pHash === "ec6e1c25258002eb1c67d15c7f45da7945fa4c58778fd7d88faa5e53e3b4698d" || pHash === "5746b142df3f4ddbfdf0fa49c30fef6509f6e5a61fc726ff2c0cb77d7ffccff0")) ||
                (acc.role === "ADMIN" && (pHash === "240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9"));
              if (isMatch) {
                matchedUser = {
                  username: acc.username,
                  role: acc.role,
                  displayName: acc.displayName,
                  canExport: acc.canExport !== false,
                  canManageSettings: acc.canManageSettings === true,
                  themeColor: acc.themeColor || "red",
                  allowedTabs: acc.allowedTabs || (acc.role === "OPERATOR" ? ["entry"] : (acc.role === "SUPERVISOR" ? ["entry", "kpi", "logs", "all"] : ["entry", "kpi", "logs", "all", "settings"]))
                };
                break;
              }
            }
          }
        }

        if (matchedUser) {
          localStorage.setItem("YOKOHAMA_CURRENT_USER", JSON.stringify(matchedUser));
          localStorage.setItem("YOKOHAMA_ADMIN_LOGGED_IN", "true");
          mountAuthenticatedApp(matchedUser);
          showToast(`Welcome ${matchedUser.displayName}! Signed in as ${matchedUser.role}.`, "success");
        } else {
          showToast("Invalid username or password. Please verify your credentials.", "error");
          const passEl = document.getElementById("adminPassword");
          if (passEl) {
            passEl.value = "";
            passEl.focus();
          }
        }
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnHTML;
        }
      }
    });
  }
}

function updateAuthUI(currentUser) {
  const gatekeeper = document.getElementById("adminGatekeeperSection");
  const appContainer = document.getElementById("downtimeAppContainer");
  const headerAuthAction = document.getElementById("headerAuthAction");
  const headerExportButtons = document.getElementById("headerExportButtons");
  const tableExportButtons = document.getElementById("tableExportButtons");

  // Environment badge removed from UI as requested
  const envBadge = document.getElementById("envStatusBadge");
  if (envBadge) {
    envBadge.remove();
  }

  // Cloud Sync visibility: Strictly hidden on login page, shown when authenticated
  const btnCloudSync = document.getElementById("btnCloudSync");
  if (btnCloudSync) {
    if (currentUser) {
      btnCloudSync.classList.remove("hidden");
      btnCloudSync.classList.add("flex");
    } else {
      btnCloudSync.classList.add("hidden");
      btnCloudSync.classList.remove("flex");
    }
  }

  const tabBtnEntry = document.getElementById("tabBtnEntry");
  const tabBtnKpi = document.getElementById("tabBtnKpi");
  const tabBtnLogs = document.getElementById("tabBtnLogs");
  const tabBtnAll = document.getElementById("tabBtnAll");
  const tabBtnSettings = document.getElementById("tabBtnSettings");

  if (currentUser) {
    if (gatekeeper) gatekeeper.classList.add("hidden");
    if (appContainer) appContainer.classList.remove("hidden");

    // Role-based visibility of navigation tabs
    if (tabBtnEntry) {
      if (currentUser.allowedTabs.includes("entry")) tabBtnEntry.classList.remove("hidden");
      else tabBtnEntry.classList.add("hidden");
    }
    if (tabBtnKpi) {
      if (currentUser.allowedTabs.includes("kpi")) tabBtnKpi.classList.remove("hidden");
      else tabBtnKpi.classList.add("hidden");
    }
    if (tabBtnLogs) {
      if (currentUser.allowedTabs.includes("logs")) tabBtnLogs.classList.remove("hidden");
      else tabBtnLogs.classList.add("hidden");
    }
    if (tabBtnAll) {
      if (currentUser.allowedTabs.includes("all")) tabBtnAll.classList.remove("hidden");
      else tabBtnAll.classList.add("hidden");
    }
    if (tabBtnSettings) {
      if (currentUser.allowedTabs.includes("settings")) tabBtnSettings.classList.remove("hidden");
      else tabBtnSettings.classList.add("hidden");
    }

    // Role-based visibility of export buttons (Supervisor & Admin only)
    if (headerExportButtons) {
      if (currentUser.canExport) headerExportButtons.classList.remove("hidden");
      else headerExportButtons.classList.add("hidden");
    }
    if (tableExportButtons) {
      if (currentUser.canExport) tableExportButtons.classList.remove("hidden");
      else tableExportButtons.classList.add("hidden");
    }

    // Role-based visibility of Empty Logs button (Admin only)
    const btnEmptyLogs = document.getElementById("btnEmptyIncidentLogs");
    if (btnEmptyLogs) {
      if (currentUser.role === "ADMIN") btnEmptyLogs.classList.remove("hidden");
      else btnEmptyLogs.classList.add("hidden");
    }

    // Role-based visibility of Quick Add Technician button (Supervisor & Admin only - UI-03)
    const btnAddNewTech = document.getElementById("btn-add-technician");
    if (btnAddNewTech) {
      if (currentUser.role === "OPERATOR") {
        btnAddNewTech.classList.add("hidden");
        btnAddNewTech.disabled = true;
      } else {
        btnAddNewTech.classList.remove("hidden");
        btnAddNewTech.disabled = false;
      }
    }

    // Header Role Badge & Logout
    if (headerAuthAction) {
      const colorMap = {
        OPERATOR: { bg: "bg-emerald-950/70", border: "border-emerald-500/40", text: "text-emerald-300", pulse: "bg-emerald-400", icon: "fa-pen-to-square" },
        SUPERVISOR: { bg: "bg-blue-950/70", border: "border-blue-500/40", text: "text-blue-300", pulse: "bg-blue-400", icon: "fa-chart-pie" },
        ADMIN: { bg: "bg-red-950/70", border: "border-red-500/40", text: "text-red-300", pulse: "bg-red-400", icon: "fa-shield-halved" }
      };
      const c = colorMap[currentUser.role] || colorMap.ADMIN;

      headerAuthAction.innerHTML = `
        <div class="flex items-center gap-2">
          <div class="flex items-center gap-1.5 px-2.5 py-1 rounded-lg ${c.bg} border ${c.border} ${c.text} text-xs font-bold" title="${currentUser.displayName}">
            <span class="w-2 h-2 rounded-full ${c.pulse} animate-pulse"></span>
            <i class="fa-solid ${c.icon} text-[10px]"></i>
            <span class="font-mono">${currentUser.role}</span>
          </div>
          <button onclick="handleUserLogout()" class="px-2.5 py-1 rounded-lg text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors flex items-center gap-1" title="Sign out of current session">
            <i class="fa-solid fa-arrow-right-from-bracket text-red-400"></i>
            <span>Sign Out</span>
          </button>
        </div>
      `;
    }
  } else {
    // Not Authenticated
    if (gatekeeper) gatekeeper.classList.remove("hidden");
    if (appContainer) appContainer.classList.add("hidden");
    if (headerExportButtons) headerExportButtons.classList.add("hidden");
    if (tableExportButtons) tableExportButtons.classList.add("hidden");
    const btnCloudSync = document.getElementById("btnCloudSync");
    if (btnCloudSync) {
      btnCloudSync.classList.add("hidden");
      btnCloudSync.classList.remove("flex");
    }
    const btnEmptyLogs = document.getElementById("btnEmptyIncidentLogs");
    if (btnEmptyLogs) btnEmptyLogs.classList.add("hidden");

    if (headerAuthAction) {
      headerAuthAction.innerHTML = `
        <div class="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 text-xs font-medium">
          <i class="fa-solid fa-shield-halved text-[#E60012]"></i>
          <span>Plant Portal</span>
        </div>
      `;
    }
  }

  updateViewsVisibility(activeTab, currentUser);
  if (typeof renderRecordsTable === "function") {
    renderRecordsTable();
  }
}

window.openLoginModal = function() {
  const gatekeeper = document.getElementById("adminGatekeeperSection");
  if (gatekeeper) {
    gatekeeper.scrollIntoView({ behavior: 'smooth' });
    const userField = document.getElementById("adminUsername");
    if (userField) userField.focus();
  }
};

window.closeLoginModal = function() {
  // Gatekeeper is full page
};

window.togglePasswordVisibility = function() {
  const passEl = document.getElementById("adminPassword");
  const iconEl = document.getElementById("togglePassIcon");
  if (passEl && iconEl) {
    if (passEl.type === "password") {
      passEl.type = "text";
      iconEl.className = "fa-solid fa-eye-slash";
    } else {
      passEl.type = "password";
      iconEl.className = "fa-solid fa-eye";
    }
  }
};

// =========================================================================
// MASTER SETTINGS CONFIGURATION MANAGEMENT (ADMIN EXCLUSIVE)
// Full CRUD for Machines, Failure Categories, Areas, and Responsibilities
// =========================================================================

window.switchSettingsSubTab = function(subTab) {
  const subTabs = ['machines', 'natures', 'categories', 'areas', 'responsibilities', 'personnel', 'users', 'maintenance'];
  subTabs.forEach(tab => {
    const btn = document.getElementById(`subTabBtn-${tab}`);
    const panel = document.getElementById(`settingsPanel-${tab}`);
    if (btn) {
      if (tab === subTab) {
        btn.className = "px-4 py-2 rounded-lg text-xs font-bold bg-slate-900 text-white shadow-sm transition-all flex items-center gap-2";
      } else {
        btn.className = "px-4 py-2 rounded-lg text-xs font-bold bg-slate-100 text-slate-600 hover:bg-slate-200 transition-all flex items-center gap-2";
      }
    }
    if (panel) {
      if (tab === subTab) panel.classList.remove("hidden");
      else panel.classList.add("hidden");
    }
  });

  // Ensure active panel content is immediately rendered and not blank
  if (subTab === 'users') {
    renderMasterUsersPanel();
  } else if (subTab === 'personnel') {
    renderMasterPersonnelGrid();
  } else if (subTab === 'machines') {
    renderMasterMachinesTable();
  } else if (subTab === 'natures') {
    renderMasterNaturesGrid();
  } else if (subTab === 'categories') {
    renderMasterCategoriesGrid();
  } else if (subTab === 'areas') {
    renderMasterAreasGrid();
  } else if (subTab === 'responsibilities') {
    renderMasterRespGrid();
  } else if (subTab === 'maintenance') {
    if (typeof updateMaintenanceLogCount === "function") {
      updateMaintenanceLogCount();
    }
  }
};

function initMachMasterAreaDropdown() {
  const sel = document.getElementById("machMasterArea");
  if (!sel) return;
  const curVal = sel.value;
  sel.innerHTML = '<option value="">-- Select Area --</option>';
  YOKOHAMA_AREAS.forEach(area => {
    const opt = document.createElement("option");
    opt.value = area;
    opt.textContent = area;
    sel.appendChild(opt);
  });
  if (curVal && YOKOHAMA_AREAS.includes(curVal)) {
    sel.value = curVal;
  }
}

window.renderMasterMachinesTable = function() {
  const tbody = document.getElementById("machMasterTableBody");
  const countBadge = document.getElementById("machMasterCountBadge");
  const searchInput = document.getElementById("machMasterSearch");
  if (!tbody) return;

  const q = (searchInput?.value || "").trim().toLowerCase();
  let list = YOKOHAMA_MACHINES;
  if (q) {
    list = list.filter(m => 
      (m.code && m.code.toLowerCase().includes(q)) ||
      (m.name && m.name.toLowerCase().includes(q)) ||
      (m.process && m.process.toLowerCase().includes(q)) ||
      (m.area && m.area.toLowerCase().includes(q))
    );
  }

  if (countBadge) {
    countBadge.textContent = `${YOKOHAMA_MACHINES.length} Machines`;
  }

  if (list.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" class="px-4 py-8 text-center text-slate-400">
          <i class="fa-solid fa-industry text-2xl mb-1 opacity-40"></i>
          <p class="font-medium text-xs">No machine records match your search criteria.</p>
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = list.map(m => {
    const isCrit = m.critical === "Yes" || m.critical === true;
    const critBadge = isCrit
      ? `<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-black bg-red-100 text-red-800 border border-red-200">
           <i class="fa-solid fa-triangle-exclamation text-red-600"></i> Critical
         </span>`
      : `<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-600 border border-slate-200">
           Standard
         </span>`;
    
    return `
      <tr class="hover:bg-slate-50 transition-colors group">
        <td class="px-3 py-2 font-mono font-black text-slate-900">${m.code}</td>
        <td class="px-3 py-2 font-medium text-slate-700">${escapeHtml(m.name || m.code)}</td>
        <td class="px-3 py-2">
          <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">${escapeHtml(m.process || '')}</span>
        </td>
        <td class="px-3 py-2 font-medium text-slate-600">${escapeHtml(m.area || '')}</td>
        <td class="px-3 py-2">${critBadge}</td>
        <td class="px-3 py-2 text-right whitespace-nowrap">
          <button type="button" onclick="editMachineMaster('${m.code}')" class="px-2 py-1 rounded text-[11px] font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 mr-1 border border-blue-200 transition-colors">
            <i class="fa-solid fa-pencil"></i> Edit
          </button>
          <button type="button" onclick="deleteMachineMaster('${m.code}')" class="px-2 py-1 rounded text-[11px] font-bold text-red-700 bg-red-50 hover:bg-red-100 border border-red-200 transition-colors">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </td>
      </tr>
    `;
  }).join("");
};

window.handleSaveMachineMaster = function(e) {
  e.preventDefault();
  const editingCode = (document.getElementById("machMasterEditingCode")?.value || "").trim();
  const code = (document.getElementById("machMasterCode")?.value || "").trim().toUpperCase();
  const name = (document.getElementById("machMasterName")?.value || "").trim() || code;
  const area = (document.getElementById("machMasterArea")?.value || "").trim();
  const process = (document.getElementById("machMasterProcess")?.value || "").trim();
  const critical = document.getElementById("machMasterCritical")?.value || "No";

  if (!code || !area || !process) {
    showToast("Please fill in Code, Area, and Process name.", "warning");
    return;
  }

  if (editingCode) {
    const idx = YOKOHAMA_MACHINES.findIndex(m => m.code.toUpperCase() === editingCode.toUpperCase());
    if (idx !== -1) {
      YOKOHAMA_MACHINES[idx] = {
        code: code,
        name: name,
        area: area,
        process: process,
        critical: critical
      };
      showToast(`Machine ${code} updated successfully!`, "success");
    }
  } else {
    const existing = YOKOHAMA_MACHINES.find(m => m.code.toUpperCase() === code);
    if (existing) {
      showToast(`Machine Code "${code}" already exists in registry! Use Edit to modify it.`, "warning");
      return;
    }
    YOKOHAMA_MACHINES.unshift({
      code: code,
      name: name,
      area: area,
      process: process,
      critical: critical
    });
    showToast(`New Machine ${code} added to master registry!`, "success");
  }

  saveMasterDataToStorage();
  rebuildMachineMap();
  initMachineSelector();
  cancelMachineEdit();
  renderMasterMachinesTable();
};

// --- Machine Master Excel Upload & Dynamic Synchronization ---
window.handleMachineMasterExcelUpload = function(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
      const rows = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      if (!rows || rows.length < 2) {
        showToast("Excel file is empty or missing data rows.", "warning");
        return;
      }

      // Detect header row & column indices
      let headerRowIdx = 0;
      for (let r = 0; r < Math.min(5, rows.length); r++) {
        const rowStr = (rows[r] || []).join(" ").toLowerCase();
        if (rowStr.includes("machine") || rowStr.includes("area") || rowStr.includes("code")) {
          headerRowIdx = r;
          break;
        }
      }

      const headers = rows[headerRowIdx].map(h => (h ? String(h).trim().toLowerCase() : ""));
      let areaCol = headers.findIndex(h => h.includes("area") || h.includes("plant"));
      let procCol = headers.findIndex(h => h.includes("process"));
      let codeCol = headers.findIndex(h => h.includes("machine code") || h === "code" || h === "machine");
      let nameCol = headers.findIndex(h => h.includes("machine details") || h.includes("machine name") || h.includes("name") || h.includes("type"));
      let critCol = headers.findIndex(h => h.includes("critical") || h.includes("criticality"));

      if (codeCol === -1) codeCol = 2; // Col C fallback
      if (areaCol === -1) areaCol = 0; // Col A fallback
      if (procCol === -1) procCol = 1; // Col B fallback
      if (nameCol === -1) nameCol = 3; // Col D fallback

      const newMachines = [];
      const areaSet = new Set();
      const procSet = new Set();

      for (let r = headerRowIdx + 1; r < rows.length; r++) {
        const row = rows[r];
        if (!row || row.length === 0) continue;
        const codeVal = row[codeCol] ? String(row[codeCol]).trim().toUpperCase() : "";
        if (!codeVal) continue;

        const areaVal = row[areaCol] ? String(row[areaCol]).trim() : "Plant-1";
        const procVal = row[procCol] ? String(row[procCol]).trim() : "General";
        const nameVal = row[nameCol] ? String(row[nameCol]).trim() : codeVal;
        const critVal = (critCol !== -1 && row[critCol]) ? (String(row[critCol]).trim().toLowerCase().startsWith("y") ? "Yes" : "No") : "No";

        newMachines.push({
          code: codeVal,
          name: nameVal,
          area: areaVal,
          process: procVal,
          critical: critVal
        });

        if (areaVal) areaSet.add(areaVal);
        if (procVal) procSet.add(procVal);
      }

      if (newMachines.length === 0) {
        showToast("No valid machine codes found in uploaded Excel.", "warning");
        return;
      }

      YOKOHAMA_MACHINES = newMachines;
      YOKOHAMA_AREAS = Array.from(areaSet).sort();
      YOKOHAMA_PROCESSES = Array.from(procSet).sort();

      saveMasterDataToStorage();
      rebuildMachineMap();

      initFormAreaDropdown();
      initFormMachineDropdown();
      initMachineSelector();
      initAreasDropdowns();
      initProcessesDropdowns();
      initMachMasterAreaDropdown();
      initMachineMultiSelectDropdown();
      initAreaMultiSelectDropdown();
      renderMasterMachinesTable();
      renderMasterAreasGrid();

      event.target.value = "";
      showToast(`Successfully synced ${newMachines.length} machines across ${YOKOHAMA_AREAS.length} areas from Machine Master (.xlsx)!`, "success");
    } catch (err) {
      console.error("Error reading Machine Master Excel:", err);
      showToast("Failed to parse Machine Master Excel file. Please check file format.", "warning");
    }
  };
  reader.readAsArrayBuffer(file);
};

window.editMachineMaster = function(code) {
  const m = YOKOHAMA_MACHINES.find(item => item.code === code);
  if (!m) return;

  const editCodeEl = document.getElementById("machMasterEditingCode");
  const codeEl = document.getElementById("machMasterCode");
  const nameEl = document.getElementById("machMasterName");
  const areaEl = document.getElementById("machMasterArea");
  const procEl = document.getElementById("machMasterProcess");
  const critEl = document.getElementById("machMasterCritical");
  const btnSave = document.getElementById("btnSaveMachMaster");
  const btnCancel = document.getElementById("btnCancelMachEdit");
  const badge = document.getElementById("machEditModeBadge");
  const title = document.getElementById("machFormTitle");

  if (editCodeEl) editCodeEl.value = m.code;
  if (codeEl) { codeEl.value = m.code; codeEl.focus(); }
  if (nameEl) nameEl.value = m.name || "";
  if (areaEl) areaEl.value = m.area || "";
  if (procEl) procEl.value = m.process || "";
  if (critEl) critEl.value = (m.critical === "Yes" || m.critical === true) ? "Yes" : "No";

  if (btnSave) btnSave.innerHTML = `<i class="fa-solid fa-check mr-1"></i> Update`;
  if (btnCancel) btnCancel.classList.remove("hidden");
  if (badge) badge.classList.remove("hidden");
  if (title) title.innerHTML = `<i class="fa-solid fa-pencil text-blue-600"></i> Edit Machine: <span class="font-mono">${m.code}</span>`;

  document.getElementById("formAddMachine")?.scrollIntoView({ behavior: 'smooth', block: 'center' });
};

window.cancelMachineEdit = function() {
  const form = document.getElementById("formAddMachine");
  if (form) form.reset();
  const editCodeEl = document.getElementById("machMasterEditingCode");
  const btnSave = document.getElementById("btnSaveMachMaster");
  const btnCancel = document.getElementById("btnCancelMachEdit");
  const badge = document.getElementById("machEditModeBadge");
  const title = document.getElementById("machFormTitle");

  if (editCodeEl) editCodeEl.value = "";
  if (btnSave) btnSave.innerHTML = `<i class="fa-solid fa-plus mr-1"></i> Add`;
  if (btnCancel) btnCancel.classList.add("hidden");
  if (badge) badge.classList.add("hidden");
  if (title) title.innerHTML = `<i class="fa-solid fa-plus-circle text-[#E60012]"></i> Add New Machine Code`;
};

window.deleteMachineMaster = function(code) {
  if (!confirm(`Are you sure you want to remove Machine "${code}" from the plant master database?`)) {
    return;
  }
  YOKOHAMA_MACHINES = YOKOHAMA_MACHINES.filter(m => m.code !== code);
  saveMasterDataToStorage();
  rebuildMachineMap();
  initMachineSelector();
  renderMasterMachinesTable();
  showToast(`Machine ${code} deleted from master database.`, "info");
};

// --- Nature of Issue Master CRUD ---
window.renderMasterNaturesGrid = function() {
  const grid = document.getElementById("natureMasterGrid");
  const badge = document.getElementById("natureMasterCountBadge");
  if (!grid) return;

  if (badge) badge.textContent = `${masterNatures.length} Natures`;

  grid.innerHTML = masterNatures.map(nat => {
    let icon = "fa-tag";
    let iconColor = "text-[#E60012]";
    const uNat = (nat || "").toUpperCase();
    if (uNat === "MES") { icon = "fa-gears"; iconColor = "text-[#E60012]"; }
    else if (uNat === "INFRA") { icon = "fa-network-wired"; iconColor = "text-sky-600"; }
    else if (uNat.includes("NET")) { icon = "fa-wifi"; iconColor = "text-emerald-600"; }
    else if (uNat.includes("SAP") || uNat.includes("SOFT")) { icon = "fa-laptop-code"; iconColor = "text-indigo-600"; }
    else { icon = "fa-shapes"; iconColor = "text-purple-600"; }

    return `
      <div class="p-3 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between gap-2 shadow-2xs hover:bg-white hover:border-slate-300 transition-all group">
        <div class="flex items-center gap-2 overflow-hidden">
          <i class="fa-solid ${icon} ${iconColor} text-xs"></i>
          <span class="font-black text-xs text-slate-800 tracking-wide font-mono truncate" title="${escapeHtml(nat)}">${escapeHtml(nat)}</span>
        </div>
        <div class="flex items-center gap-1">
          <button type="button" onclick="editNatureMaster('${escapeHtml(nat)}')" class="p-1.5 text-slate-400 hover:text-blue-600 rounded transition-colors" title="Edit Nature name">
            <i class="fa-solid fa-pencil text-xs"></i>
          </button>
          <button type="button" onclick="deleteNatureMaster('${escapeHtml(nat)}')" class="p-1.5 text-slate-400 hover:text-red-600 rounded transition-colors" title="Delete Nature">
            <i class="fa-solid fa-trash-can text-xs"></i>
          </button>
        </div>
      </div>
    `;
  }).join("");
};

window.editNatureMaster = function(nat) {
  const editInput = document.getElementById("natureMasterEditingName");
  const nameInput = document.getElementById("natureMasterNewName");
  const formTitle = document.getElementById("natureFormTitle");
  const badge = document.getElementById("natureEditModeBadge");
  const saveBtn = document.getElementById("btnSaveNatureMaster");
  const cancelBtn = document.getElementById("btnCancelNatureEdit");

  if (editInput) editInput.value = nat;
  if (nameInput) {
    nameInput.value = nat;
    nameInput.focus();
  }
  if (formTitle) formTitle.innerHTML = `<i class="fa-solid fa-pen-to-square text-blue-600"></i> Edit Nature of Issue`;
  if (badge) badge.classList.remove("hidden");
  if (saveBtn) saveBtn.innerHTML = `<i class="fa-solid fa-check mr-1"></i> Save Changes`;
  if (cancelBtn) cancelBtn.classList.remove("hidden");
};

window.cancelNatureEdit = function() {
  const editInput = document.getElementById("natureMasterEditingName");
  const nameInput = document.getElementById("natureMasterNewName");
  const formTitle = document.getElementById("natureFormTitle");
  const badge = document.getElementById("natureEditModeBadge");
  const saveBtn = document.getElementById("btnSaveNatureMaster");
  const cancelBtn = document.getElementById("btnCancelNatureEdit");

  if (editInput) editInput.value = "";
  if (nameInput) nameInput.value = "";
  if (formTitle) formTitle.innerHTML = `<i class="fa-solid fa-plus-circle text-[#E60012]"></i> Add New Nature of Issue`;
  if (badge) badge.classList.add("hidden");
  if (saveBtn) saveBtn.innerHTML = `<i class="fa-solid fa-plus mr-1"></i> Add Nature`;
  if (cancelBtn) cancelBtn.classList.add("hidden");
};

window.handleSaveNatureMaster = function(e) {
  e.preventDefault();
  const editInput = document.getElementById("natureMasterEditingName");
  const nameInput = document.getElementById("natureMasterNewName");
  const editingName = (editInput?.value || "").trim();
  const newName = (nameInput?.value || "").trim().toUpperCase();

  if (!newName) return;

  if (editingName) {
    if (editingName.toUpperCase() !== newName && masterNatures.some(n => n.toUpperCase() === newName)) {
      showToast(`Nature "${newName}" already exists!`, "warning");
      return;
    }
    const idx = masterNatures.findIndex(n => n.toUpperCase() === editingName.toUpperCase());
    if (idx !== -1) masterNatures[idx] = newName;

    let updatedCount = 0;
    downtimeRecords.forEach(r => {
      if (r.nature && r.nature.toUpperCase() === editingName.toUpperCase()) {
        r.nature = newName;
        updatedCount++;
      }
    });
    if (updatedCount > 0) saveToStorage();
    cancelNatureEdit();
    showToast(`Nature "${editingName}" updated to "${newName}" (${updatedCount} records synced)`, "success");
  } else {
    if (masterNatures.some(n => n.toUpperCase() === newName)) {
      showToast(`Nature "${newName}" already exists!`, "warning");
      return;
    }
    masterNatures.push(newName);
    if (nameInput) nameInput.value = "";
    showToast(`Nature "${newName}" added to master database!`, "success");
  }

  saveMasterDataToStorage();
  initNatureSelector();
  initNatureFilterDropdown();
  renderMasterNaturesGrid();
  renderRecordsTable();
};

window.deleteNatureMaster = function(natName) {
  if (masterNatures.length <= 1) {
    showToast("At least one nature of issue must remain in master.", "warning");
    return;
  }
  if (!confirm(`Are you sure you want to remove Nature "${natName}"?`)) return;

  masterNatures = masterNatures.filter(n => n !== natName);
  saveMasterDataToStorage();
  initNatureSelector();
  initNatureFilterDropdown();
  renderMasterNaturesGrid();
  showToast(`Nature "${natName}" removed.`, "info");
};

// --- Failure Categories Master CRUD ---
window.renderMasterCategoriesGrid = function() {
  const grid = document.getElementById("catMasterGrid");
  const badge = document.getElementById("catMasterCountBadge");
  if (!grid) return;

  if (badge) badge.textContent = `${masterCategories.length} Categories`;

  grid.innerHTML = masterCategories.map(cat => {
    return `
      <div class="p-3 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between gap-2 shadow-2xs hover:bg-white hover:border-slate-300 transition-all group">
        <div class="flex items-center gap-2 overflow-hidden">
          <i class="fa-solid fa-tag text-[#E60012] text-xs"></i>
          <span class="font-bold text-xs text-slate-800 truncate" title="${escapeHtml(cat)}">${escapeHtml(cat)}</span>
        </div>
        <div class="flex items-center gap-1">
          <button type="button" onclick="editCategoryMaster('${escapeHtml(cat)}')" class="p-1.5 text-slate-400 hover:text-blue-600 rounded transition-colors" title="Edit category name">
            <i class="fa-solid fa-pencil text-xs"></i>
          </button>
          <button type="button" onclick="deleteCategoryMaster('${escapeHtml(cat)}')" class="p-1.5 text-slate-400 hover:text-red-600 rounded transition-colors" title="Delete category">
            <i class="fa-solid fa-trash-can text-xs"></i>
          </button>
        </div>
      </div>
    `;
  }).join("");
};

window.editCategoryMaster = function(cat) {
  const editInput = document.getElementById("catMasterEditingName");
  const nameInput = document.getElementById("catMasterNewName");
  const formTitle = document.getElementById("catFormTitle");
  const badge = document.getElementById("catEditModeBadge");
  const saveBtn = document.getElementById("btnSaveCatMaster");
  const cancelBtn = document.getElementById("btnCancelCatEdit");

  if (editInput) editInput.value = cat;
  if (nameInput) {
    nameInput.value = cat;
    nameInput.focus();
  }
  if (formTitle) formTitle.innerHTML = `<i class="fa-solid fa-pen-to-square text-blue-600"></i> Edit Failure Category`;
  if (badge) badge.classList.remove("hidden");
  if (saveBtn) saveBtn.innerHTML = `<i class="fa-solid fa-check mr-1"></i> Save Changes`;
  if (cancelBtn) cancelBtn.classList.remove("hidden");
};

window.cancelCategoryEdit = function() {
  const editInput = document.getElementById("catMasterEditingName");
  const nameInput = document.getElementById("catMasterNewName");
  const formTitle = document.getElementById("catFormTitle");
  const badge = document.getElementById("catEditModeBadge");
  const saveBtn = document.getElementById("btnSaveCatMaster");
  const cancelBtn = document.getElementById("btnCancelCatEdit");

  if (editInput) editInput.value = "";
  if (nameInput) nameInput.value = "";
  if (formTitle) formTitle.innerHTML = `<i class="fa-solid fa-plus-circle text-[#E60012]"></i> Add New Failure Category`;
  if (badge) badge.classList.add("hidden");
  if (saveBtn) saveBtn.innerHTML = `<i class="fa-solid fa-plus mr-1"></i> Add Category`;
  if (cancelBtn) cancelBtn.classList.add("hidden");
};

window.handleSaveCategoryMaster = function(e) {
  e.preventDefault();
  const editInput = document.getElementById("catMasterEditingName");
  const nameInput = document.getElementById("catMasterNewName");
  const editingName = (editInput?.value || "").trim();
  const newName = (nameInput?.value || "").trim();

  if (!newName) return;

  if (editingName) {
    if (editingName.toLowerCase() !== newName.toLowerCase() && masterCategories.some(c => c.toLowerCase() === newName.toLowerCase())) {
      showToast(`Category "${newName}" already exists!`, "warning");
      return;
    }
    const idx = masterCategories.findIndex(c => c.toLowerCase() === editingName.toLowerCase());
    if (idx !== -1) masterCategories[idx] = newName;

    let updatedCount = 0;
    downtimeRecords.forEach(r => {
      if (r.category && r.category.toLowerCase() === editingName.toLowerCase()) {
        r.category = newName;
        updatedCount++;
      }
    });
    if (updatedCount > 0) saveToStorage();
    cancelCategoryEdit();
    showToast(`Category "${editingName}" updated to "${newName}" (${updatedCount} records synced)`, "success");
  } else {
    if (masterCategories.some(c => c.toLowerCase() === newName.toLowerCase())) {
      showToast(`Category "${newName}" already exists!`, "warning");
      return;
    }
    masterCategories.push(newName);
    if (nameInput) nameInput.value = "";
    showToast(`Category "${newName}" added to master database!`, "success");
  }

  saveMasterDataToStorage();
  initCategoryDropdowns();
  renderMasterCategoriesGrid();
  renderRecordsTable();
};

window.deleteCategoryMaster = function(catName) {
  if (masterCategories.length <= 1) {
    showToast("At least one failure category must remain in master.", "warning");
    return;
  }
  if (!confirm(`Are you sure you want to remove category "${catName}"?`)) return;

  masterCategories = masterCategories.filter(c => c !== catName);
  saveMasterDataToStorage();
  initCategoryDropdowns();
  renderMasterCategoriesGrid();
  showToast(`Category "${catName}" removed.`, "info");
};

// --- Area / Plant Master CRUD ---
window.renderMasterAreasGrid = function() {
  const grid = document.getElementById("areaMasterGrid");
  const badge = document.getElementById("areaMasterCountBadge");
  if (!grid) return;

  if (badge) badge.textContent = `${YOKOHAMA_AREAS.length} Areas`;

  grid.innerHTML = YOKOHAMA_AREAS.map(area => {
    const machCount = YOKOHAMA_MACHINES.filter(m => m.area === area).length;
    return `
      <div class="p-3 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between gap-2 shadow-2xs hover:bg-white hover:border-slate-300 transition-all group">
        <div class="overflow-hidden">
          <div class="flex items-center gap-1.5">
            <i class="fa-solid fa-building-flag text-slate-600 text-xs"></i>
            <span class="font-bold text-xs text-slate-800 truncate" title="${escapeHtml(area)}">${escapeHtml(area)}</span>
          </div>
          <span class="text-[10px] text-slate-400 font-mono">${machCount} machines linked</span>
        </div>
        <div class="flex items-center gap-1">
          <button type="button" onclick="editAreaMaster('${escapeHtml(area)}')" class="p-1.5 text-slate-400 hover:text-blue-600 rounded transition-colors" title="Edit Area name">
            <i class="fa-solid fa-pencil text-xs"></i>
          </button>
          <button type="button" onclick="deleteAreaMaster('${escapeHtml(area)}')" class="p-1.5 text-slate-400 hover:text-red-600 rounded transition-colors" title="Delete area">
            <i class="fa-solid fa-trash-can text-xs"></i>
          </button>
        </div>
      </div>
    `;
  }).join("");
};

window.editAreaMaster = function(area) {
  const editInput = document.getElementById("areaMasterEditingName");
  const nameInput = document.getElementById("areaMasterNewName");
  const formTitle = document.getElementById("areaFormTitle");
  const badge = document.getElementById("areaEditModeBadge");
  const saveBtn = document.getElementById("btnSaveAreaMaster");
  const cancelBtn = document.getElementById("btnCancelAreaEdit");

  if (editInput) editInput.value = area;
  if (nameInput) {
    nameInput.value = area;
    nameInput.focus();
  }
  if (formTitle) formTitle.innerHTML = `<i class="fa-solid fa-pen-to-square text-blue-600"></i> Edit Area / Plant Unit`;
  if (badge) badge.classList.remove("hidden");
  if (saveBtn) saveBtn.innerHTML = `<i class="fa-solid fa-check mr-1"></i> Save Changes`;
  if (cancelBtn) cancelBtn.classList.remove("hidden");
};

window.cancelAreaEdit = function() {
  const editInput = document.getElementById("areaMasterEditingName");
  const nameInput = document.getElementById("areaMasterNewName");
  const formTitle = document.getElementById("areaFormTitle");
  const badge = document.getElementById("areaEditModeBadge");
  const saveBtn = document.getElementById("btnSaveAreaMaster");
  const cancelBtn = document.getElementById("btnCancelAreaEdit");

  if (editInput) editInput.value = "";
  if (nameInput) nameInput.value = "";
  if (formTitle) formTitle.innerHTML = `<i class="fa-solid fa-plus-circle text-[#E60012]"></i> Add New Area / Plant Unit`;
  if (badge) badge.classList.add("hidden");
  if (saveBtn) saveBtn.innerHTML = `<i class="fa-solid fa-plus mr-1"></i> Add Area / Plant`;
  if (cancelBtn) cancelBtn.classList.add("hidden");
};

window.handleSaveAreaMaster = function(e) {
  e.preventDefault();
  const editInput = document.getElementById("areaMasterEditingName");
  const nameInput = document.getElementById("areaMasterNewName");
  const editingName = (editInput?.value || "").trim();
  const newName = (nameInput?.value || "").trim();

  if (!newName) return;

  if (editingName) {
    if (editingName.toLowerCase() !== newName.toLowerCase() && YOKOHAMA_AREAS.some(a => a.toLowerCase() === newName.toLowerCase())) {
      showToast(`Area "${newName}" already exists!`, "warning");
      return;
    }
    const idx = YOKOHAMA_AREAS.findIndex(a => a.toLowerCase() === editingName.toLowerCase());
    if (idx !== -1) YOKOHAMA_AREAS[idx] = newName;

    let updatedMachs = 0;
    YOKOHAMA_MACHINES.forEach(m => {
      if (m.area && m.area.toLowerCase() === editingName.toLowerCase()) {
        m.area = newName;
        updatedMachs++;
      }
    });

    let updatedRecords = 0;
    downtimeRecords.forEach(r => {
      if (r.area && r.area.toLowerCase() === editingName.toLowerCase()) {
        r.area = newName;
        updatedRecords++;
      }
    });

    if (updatedRecords > 0) saveToStorage();
    cancelAreaEdit();
    showToast(`Area "${editingName}" updated to "${newName}" (${updatedMachs} machines, ${updatedRecords} records synced)`, "success");
  } else {
    if (YOKOHAMA_AREAS.some(a => a.toLowerCase() === newName.toLowerCase())) {
      showToast(`Area "${newName}" already exists!`, "warning");
      return;
    }
    YOKOHAMA_AREAS.push(newName);
    if (nameInput) nameInput.value = "";
    showToast(`Area "${newName}" added to master database!`, "success");
  }

  saveMasterDataToStorage();
  initAreasDropdowns();
  initMachMasterAreaDropdown();
  renderMasterAreasGrid();
  renderMasterMachinesTable();
  renderRecordsTable();
};

window.deleteAreaMaster = function(areaName) {
  if (YOKOHAMA_AREAS.length <= 1) {
    showToast("At least one area must remain in master.", "warning");
    return;
  }
  if (!confirm(`Are you sure you want to remove area "${areaName}"?`)) return;

  YOKOHAMA_AREAS = YOKOHAMA_AREAS.filter(a => a !== areaName);
  saveMasterDataToStorage();
  initAreasDropdowns();
  initMachMasterAreaDropdown();
  renderMasterAreasGrid();
  showToast(`Area "${areaName}" removed.`, "info");
};

// --- Responsibility Groups Master CRUD ---
window.renderMasterRespGrid = function() {
  const grid = document.getElementById("respMasterGrid");
  const badge = document.getElementById("respMasterCountBadge");
  if (!grid) return;

  if (badge) badge.textContent = `${masterResponsibilities.length} Groups`;

  grid.innerHTML = masterResponsibilities.map(resp => {
    return `
      <div class="p-3 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between gap-2 shadow-2xs hover:bg-white hover:border-slate-300 transition-all group">
        <div class="flex items-center gap-2 overflow-hidden">
          <i class="fa-solid fa-users-gear text-slate-600 text-xs"></i>
          <span class="font-black text-xs text-slate-800 tracking-wide font-mono truncate" title="${escapeHtml(resp)}">${escapeHtml(resp)}</span>
        </div>
        <div class="flex items-center gap-1">
          <button type="button" onclick="editResponsibilityMaster('${escapeHtml(resp)}')" class="p-1.5 text-slate-400 hover:text-blue-600 rounded transition-colors" title="Edit Responsibility name">
            <i class="fa-solid fa-pencil text-xs"></i>
          </button>
          <button type="button" onclick="deleteResponsibilityMaster('${escapeHtml(resp)}')" class="p-1.5 text-slate-400 hover:text-red-600 rounded transition-colors" title="Delete responsibility">
            <i class="fa-solid fa-trash-can text-xs"></i>
          </button>
        </div>
      </div>
    `;
  }).join("");
};

window.editResponsibilityMaster = function(resp) {
  const editInput = document.getElementById("respMasterEditingName");
  const nameInput = document.getElementById("respMasterNewName");
  const formTitle = document.getElementById("respFormTitle");
  const badge = document.getElementById("respEditModeBadge");
  const saveBtn = document.getElementById("btnSaveRespMaster");
  const cancelBtn = document.getElementById("btnCancelRespEdit");

  if (editInput) editInput.value = resp;
  if (nameInput) {
    nameInput.value = resp;
    nameInput.focus();
  }
  if (formTitle) formTitle.innerHTML = `<i class="fa-solid fa-pen-to-square text-blue-600"></i> Edit Responsibility Group`;
  if (badge) badge.classList.remove("hidden");
  if (saveBtn) saveBtn.innerHTML = `<i class="fa-solid fa-check mr-1"></i> Save Changes`;
  if (cancelBtn) cancelBtn.classList.remove("hidden");
};

window.cancelResponsibilityEdit = function() {
  const editInput = document.getElementById("respMasterEditingName");
  const nameInput = document.getElementById("respMasterNewName");
  const formTitle = document.getElementById("respFormTitle");
  const badge = document.getElementById("respEditModeBadge");
  const saveBtn = document.getElementById("btnSaveRespMaster");
  const cancelBtn = document.getElementById("btnCancelRespEdit");

  if (editInput) editInput.value = "";
  if (nameInput) nameInput.value = "";
  if (formTitle) formTitle.innerHTML = `<i class="fa-solid fa-plus-circle text-[#E60012]"></i> Add New Responsibility Group`;
  if (badge) badge.classList.add("hidden");
  if (saveBtn) saveBtn.innerHTML = `<i class="fa-solid fa-plus mr-1"></i> Add Responsibility`;
  if (cancelBtn) cancelBtn.classList.add("hidden");
};

window.handleSaveRespMaster = function(e) {
  e.preventDefault();
  const editInput = document.getElementById("respMasterEditingName");
  const nameInput = document.getElementById("respMasterNewName");
  const editingName = (editInput?.value || "").trim();
  const newName = (nameInput?.value || "").trim().toUpperCase();

  if (!newName) return;

  if (editingName) {
    if (editingName.toUpperCase() !== newName && masterResponsibilities.some(r => r.toUpperCase() === newName)) {
      showToast(`Responsibility "${newName}" already exists!`, "warning");
      return;
    }
    const idx = masterResponsibilities.findIndex(r => r.toUpperCase() === editingName.toUpperCase());
    if (idx !== -1) masterResponsibilities[idx] = newName;

    let updatedCount = 0;
    downtimeRecords.forEach(r => {
      if (r.responsibility && r.responsibility.toUpperCase() === editingName.toUpperCase()) {
        r.responsibility = newName;
        updatedCount++;
      }
    });
    if (updatedCount > 0) saveToStorage();
    cancelResponsibilityEdit();
    showToast(`Responsibility "${editingName}" updated to "${newName}" (${updatedCount} records synced)`, "success");
  } else {
    if (masterResponsibilities.some(r => r.toUpperCase() === newName)) {
      showToast(`Responsibility "${newName}" already exists!`, "warning");
      return;
    }
    masterResponsibilities.push(newName);
    if (nameInput) nameInput.value = "";
    showToast(`Responsibility "${newName}" added to master database!`, "success");
  }

  saveMasterDataToStorage();
  initResponsibilityDropdown();
  renderMasterRespGrid();
  renderRecordsTable();
};

window.deleteResponsibilityMaster = function(respName) {
  if (masterResponsibilities.length <= 1) {
    showToast("At least one responsibility group must remain in master.", "warning");
    return;
  }
  if (!confirm(`Are you sure you want to remove responsibility group "${respName}"?`)) return;

  masterResponsibilities = masterResponsibilities.filter(r => r !== respName);
  saveMasterDataToStorage();
  initResponsibilityDropdown();
  renderMasterRespGrid();
  showToast(`Responsibility "${respName}" removed.`, "info");
};

// =========================================================================
// RESPONSIBLE PERSON (PERSONNEL) MASTER CRUD MANAGEMENT
// =========================================================================
window.renderMasterPersonnelGrid = function() {
  const grid = document.getElementById("personnelMasterGrid");
  const badge = document.getElementById("personnelMasterCountBadge");
  if (!grid) return;

  if (badge) badge.textContent = `${technicians.length} Persons`;

  grid.innerHTML = technicians.map(person => {
    return `
      <div class="p-3 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between gap-2 shadow-2xs hover:bg-white hover:border-slate-300 transition-all group">
        <div class="flex items-center gap-2 overflow-hidden">
          <div class="w-6 h-6 rounded-full bg-red-50 text-[#E60012] border border-red-200 flex items-center justify-center font-bold text-[10px] shrink-0">
            ${escapeHtml(person.charAt(0).toUpperCase())}
          </div>
          <span class="font-bold text-xs text-slate-800 tracking-wide truncate" title="${escapeHtml(person)}">${escapeHtml(person)}</span>
        </div>
        <div class="flex items-center gap-1 shrink-0">
          <button type="button" onclick="editPersonnelMaster('${escapeHtml(person)}')" class="p-1.5 text-slate-400 hover:text-blue-600 rounded transition-colors" title="Edit name">
            <i class="fa-solid fa-pencil text-xs"></i>
          </button>
          <button type="button" onclick="deletePersonnelMaster('${escapeHtml(person)}')" class="p-1.5 text-slate-400 hover:text-red-600 rounded transition-colors" title="Remove person">
            <i class="fa-solid fa-trash-can text-xs"></i>
          </button>
        </div>
      </div>
    `;
  }).join("");
};

window.editPersonnelMaster = function(person) {
  const editInput = document.getElementById("personnelMasterEditingName");
  const nameInput = document.getElementById("personnelMasterNewName");
  const formTitle = document.getElementById("personnelFormTitle");
  const badge = document.getElementById("personnelEditModeBadge");
  const saveBtn = document.getElementById("btnSavePersonnelMaster");
  const cancelBtn = document.getElementById("btnCancelPersonnelEdit");

  if (editInput) editInput.value = person;
  if (nameInput) {
    nameInput.value = person;
    nameInput.focus();
  }
  if (formTitle) formTitle.innerHTML = `<i class="fa-solid fa-pen-to-square text-blue-600"></i> Edit Responsible Person`;
  if (badge) badge.classList.remove("hidden");
  if (saveBtn) saveBtn.innerHTML = `<i class="fa-solid fa-check mr-1"></i> Save Changes`;
  if (cancelBtn) cancelBtn.classList.remove("hidden");
};

window.cancelPersonnelEdit = function() {
  const editInput = document.getElementById("personnelMasterEditingName");
  const nameInput = document.getElementById("personnelMasterNewName");
  const formTitle = document.getElementById("personnelFormTitle");
  const badge = document.getElementById("personnelEditModeBadge");
  const saveBtn = document.getElementById("btnSavePersonnelMaster");
  const cancelBtn = document.getElementById("btnCancelPersonnelEdit");

  if (editInput) editInput.value = "";
  if (nameInput) nameInput.value = "";
  if (formTitle) formTitle.innerHTML = `<i class="fa-solid fa-user-plus text-[#E60012]"></i> Add New Responsible Person`;
  if (badge) badge.classList.add("hidden");
  if (saveBtn) saveBtn.innerHTML = `<i class="fa-solid fa-plus mr-1"></i> Add Person`;
  if (cancelBtn) cancelBtn.classList.add("hidden");
};

window.handleSavePersonnelMaster = function(e) {
  e.preventDefault();
  const editInput = document.getElementById("personnelMasterEditingName");
  const nameInput = document.getElementById("personnelMasterNewName");
  const editingName = (editInput?.value || "").trim();
  const newName = (nameInput?.value || "").trim();

  if (!newName) return;

  if (editingName) {
    if (editingName.toLowerCase() !== newName.toLowerCase() && technicians.some(t => t.toLowerCase() === newName.toLowerCase())) {
      showToast(`Responsible Person "${newName}" already exists!`, "warning");
      return;
    }
    const idx = technicians.findIndex(t => t.toLowerCase() === editingName.toLowerCase());
    if (idx !== -1) technicians[idx] = newName;

    let updatedCount = 0;
    downtimeRecords.forEach(r => {
      if (r.solvedBy && r.solvedBy.toLowerCase() === editingName.toLowerCase()) {
        r.solvedBy = newName;
        updatedCount++;
      }
    });
    if (updatedCount > 0) saveToStorage();
    cancelPersonnelEdit();
    showToast(`Responsible Person "${editingName}" updated to "${newName}" (${updatedCount} records synced)`, "success");
  } else {
    if (technicians.some(t => t.toLowerCase() === newName.toLowerCase())) {
      showToast(`Responsible Person "${newName}" already exists!`, "warning");
      return;
    }
    technicians.push(newName);
    if (nameInput) nameInput.value = "";
    showToast(`Responsible Person "${newName}" added to master database!`, "success");
  }

  saveTechsToStorage();
  initTechniciansDropdown();
  renderMasterPersonnelGrid();
  renderRecordsTable();
};

window.deletePersonnelMaster = function(personName) {
  if (technicians.length <= 1) {
    showToast("At least one responsible person must remain in master.", "warning");
    return;
  }
  if (!confirm(`Are you sure you want to remove responsible person "${personName}"?`)) return;

  technicians = technicians.filter(t => t !== personName);
  saveTechsToStorage();
  initTechniciansDropdown();
  renderMasterPersonnelGrid();
  showToast(`Responsible Person "${personName}" removed.`, "info");
};
window.toggleUserCardPassVisibility = function(fieldId, iconId) {
  const input = document.getElementById(fieldId);
  const icon = document.getElementById(iconId);
  if (input && icon) {
    if (input.type === "password") {
      input.type = "text";
      icon.className = "fa-solid fa-eye-slash text-xs text-[#E60012]";
    } else {
      input.type = "password";
      icon.className = "fa-solid fa-eye text-xs text-slate-400";
    }
  }
};

window.renderMasterUsersPanel = function() {
  const roles = ['admin', 'supervisor', 'operator'];
  roles.forEach(roleKey => {
    const acc = USER_ACCOUNTS[roleKey];
    if (!acc) return;
    const cap = roleKey.charAt(0).toUpperCase() + roleKey.slice(1);
    const dispEl = document.getElementById(`user${cap}DisplayName`);
    const userEl = document.getElementById(`user${cap}Username`);
    const passEl = document.getElementById(`user${cap}NewPass`);
    const confEl = document.getElementById(`user${cap}ConfirmPass`);

    if (dispEl) dispEl.value = acc.displayName || "";
    if (userEl) userEl.value = acc.username || "";
    if (passEl) passEl.value = "";
    if (confEl) confEl.value = "";
  });
};

window.handleUpdateUserAccount = async function(e, roleKey) {
  e.preventDefault();
  const acc = USER_ACCOUNTS[roleKey];
  if (!acc) {
    showToast(`Role account "${roleKey}" not found.`, "warning");
    return;
  }

  const cap = roleKey.charAt(0).toUpperCase() + roleKey.slice(1);
  const dispEl = document.getElementById(`user${cap}DisplayName`);
  const userEl = document.getElementById(`user${cap}Username`);
  const curPassEl = document.getElementById(`user${cap}CurrentPass`);
  const passEl = document.getElementById(`user${cap}NewPass`);
  const confEl = document.getElementById(`user${cap}ConfirmPass`);

  const newDisplayName = (dispEl?.value || "").trim();
  const newUsername = (userEl?.value || "").trim();
  const currentPass = (curPassEl?.value || "").trim();
  const newPass = (passEl?.value || "").trim();
  const confPass = (confEl?.value || "").trim();

  if (!newUsername) {
    showToast("Username cannot be empty!", "warning");
    if (userEl) userEl.focus();
    return;
  }

  // SEC-03: Mandatory Current Password Verification
  if (!currentPass) {
    showToast("Current Admin Password verification is mandatory to update credentials!", "warning");
    if (curPassEl) curPassEl.focus();
    return;
  }

  // SEC-04: Check duplicate username across other accounts
  for (const key of Object.keys(USER_ACCOUNTS)) {
    if (key !== roleKey) {
      const otherAcc = USER_ACCOUNTS[key];
      if (otherAcc && otherAcc.username && otherAcc.username.toLowerCase() === newUsername.toLowerCase()) {
        showToast(`Username "${newUsername}" is already used by the ${otherAcc.role} account! Choose a different username.`, "warning");
        if (userEl) userEl.focus();
        return;
      }
    }
  }

  // Password validation if entered
  let passwordChanged = false;
  if (newPass || confPass) {
    if (newPass !== confPass) {
      showToast("New password and confirm password do not match!", "warning");
      if (confEl) confEl.focus();
      return;
    }
    if (newPass.length < 4) {
      showToast("Password must be at least 4 characters long!", "warning");
      if (passEl) passEl.focus();
      return;
    }
    const pHash = await hashCredential(newPass);
    acc.passwordHash = pHash;
    delete acc.plainPassword;
    passwordChanged = true;
  }

  // SEC-03 & SEC-04: Authoritative Server Verification via /api/auth (PUT)
  let cloudSuccess = false;
  let cloudReason = null;
  if (typeof window.updateCloudUserAccount === "function") {
    try {
      const cloudRes = await window.updateCloudUserAccount(acc.role, newUsername, newDisplayName, newPass, currentPass);
      if (cloudRes && cloudRes.success) {
        cloudSuccess = true;
      } else {
        showToast(cloudRes.error || "Current password verification failed on server. Credentials not updated.", "error");
        if (curPassEl) { curPassEl.value = ""; curPassEl.focus(); }
        return;
      }
    } catch (e) {
      console.warn("[Supabase] Cloud user sync warning:", e);
    }
  }

  acc.username = newUsername;
  delete acc.plainPassword;
  if (newDisplayName) acc.displayName = newDisplayName;

  saveUserAccountsToStorage();

  // If the updated user is currently logged in, sync session
  const currentUser = getCurrentUser();
  if (currentUser && currentUser.role === acc.role) {
    localStorage.setItem("YOKOHAMA_CURRENT_USER", JSON.stringify(acc));
    updateAuthUI(acc);
  }

  // Clear password inputs
  if (curPassEl) curPassEl.value = "";
  if (passEl) passEl.value = "";
  if (confEl) confEl.value = "";

  const statusEl = document.getElementById(`badge${cap}Status`);
  if (statusEl) {
    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    statusEl.innerHTML = `<i class="fa-solid fa-check text-emerald-600"></i> Updated ${timeStr}`;
  }

  const passMsg = passwordChanged ? " and password updated" : "";
  if (cloudSuccess) {
    showToast(`${acc.role} credentials successfully updated and verified in Supabase cloud!`, "success");
  } else {
    showToast(`${acc.role} account credentials saved! Username: "${newUsername}"${passMsg}.`, "success");
  }
};

// --- Reset Master Settings to Factory Defaults (SEC-07: Protected Confirmation) ---
window.resetMasterSettingsToDefaults = function() {
  const user = (typeof getCurrentUser === "function") ? getCurrentUser() : null;
  if (!user || user.role !== "ADMIN") {
    showToast("Access Denied: Only Administrators can reset Master Settings to defaults.", "error");
    return;
  }
  const modal = document.getElementById("confirmResetModal");
  if (modal) {
    openConfirmResetModal('RESET_DEFAULTS');
  } else {
    localStorage.removeItem("YOKOHAMA_MASTER_MACHINES");
    localStorage.removeItem("YOKOHAMA_MASTER_AREAS");
    localStorage.removeItem("YOKOHAMA_MASTER_CATEGORIES");
    localStorage.removeItem("YOKOHAMA_MASTER_RESPONSIBILITIES");
    localStorage.removeItem("YOKOHAMA_MASTER_NATURES");
    localStorage.removeItem("YOKOHAMA_TECHNICIANS");

    YOKOHAMA_MACHINES = JSON.parse(JSON.stringify(INITIAL_MACHINES_BACKUP));
    YOKOHAMA_AREAS = JSON.parse(JSON.stringify(INITIAL_AREAS_BACKUP));
    masterCategories = ["NSNL", "IPC", "Printer", "Scanner", "Infra", "MES", "Hardware / PC", "Network / Switch", "PLC / SCADA", "Other"];
    masterResponsibilities = ["ATC", "MELSS"];
    masterNatures = [...INITIAL_NATURES_BACKUP];
    technicians = [...DEFAULT_TECHNICIANS];
    saveTechsToStorage();
    initTechniciansDropdown();
    saveMasterDataToStorage();
    rebuildMachineMap();
    initAreasDropdowns();
    initMachineSelector();
    initCategoryDropdowns();
    initResponsibilityDropdown();
    initNatureSelector();
    initNatureFilterDropdown();
    initMachMasterAreaDropdown();
    renderMasterSettingsUI();
    showToast("Master Settings restored to factory defaults.", "success");
  }
};

window.renderMasterSettingsUI = function() {
  initMachMasterAreaDropdown();
  renderMasterMachinesTable();
  renderMasterNaturesGrid();
  renderMasterCategoriesGrid();
  renderMasterAreasGrid();
  renderMasterRespGrid();
  renderMasterPersonnelGrid();
  renderMasterUsersPanel();
};

function initCategoryDropdowns() {
  const catSelect = document.getElementById("category");
  if (catSelect) {
    const curVal = catSelect.value || "MES";
    catSelect.innerHTML = "";
    masterCategories.forEach(cat => {
      const opt = document.createElement("option");
      opt.value = cat;
      opt.textContent = cat;
      if (cat === curVal) opt.selected = true;
      catSelect.appendChild(opt);
    });
  }

  initCategoryFilterDropdown();
  updateTableCategoryStrip();
}

function initResponsibilityDropdown() {
  const respSelect = document.getElementById("responsibility");
  if (!respSelect) return;
  const curVal = respSelect.value || "ATC";
  respSelect.innerHTML = "";
  masterResponsibilities.forEach(resp => {
    const opt = document.createElement("option");
    opt.value = resp;
    opt.textContent = resp;
    if (resp === curVal) opt.selected = true;
    respSelect.appendChild(opt);
  });
}

// --- Local Storage Management ---
function saveMasterDataToStorage() {
  try {
    localStorage.setItem("YOKOHAMA_MASTER_MACHINES", JSON.stringify(YOKOHAMA_MACHINES));
    localStorage.setItem("YOKOHAMA_MASTER_AREAS", JSON.stringify(YOKOHAMA_AREAS));
    localStorage.setItem("YOKOHAMA_MASTER_PROCESSES", JSON.stringify(YOKOHAMA_PROCESSES));
    localStorage.setItem("YOKOHAMA_MASTER_CATEGORIES", JSON.stringify(masterCategories));
    localStorage.setItem("YOKOHAMA_MASTER_RESPONSIBILITIES", JSON.stringify(masterResponsibilities));
    localStorage.setItem("YOKOHAMA_MASTER_NATURES", JSON.stringify(masterNatures));
    localStorage.setItem("YOKOHAMA_MASTER_VERSION", "2026_master_v2");
  } catch (e) {
    console.error("Failed to save master data to local storage", e);
  }
}

async function initStorage() {
  await loadMachinesMasterAsync();
  await loadChartAssetsAsync();
  // Load Dynamic Master Registry with Versioning & Safe Fallbacks (Step 9 Fix)
  const masterVer = localStorage.getItem("YOKOHAMA_MASTER_VERSION");
  const storedMachines = localStorage.getItem("YOKOHAMA_MASTER_MACHINES");
  let machinesLoaded = false;
  if (masterVer === "2026_master_v2" && storedMachines) {
    try {
      const parsed = JSON.parse(storedMachines);
      if (Array.isArray(parsed) && parsed.length > 0) {
        YOKOHAMA_MACHINES = parsed;
        machinesLoaded = true;
      }
    } catch (e) {
      console.error("Failed to parse master machines", e);
    }
  }
  if (!machinesLoaded) {
    YOKOHAMA_MACHINES = JSON.parse(JSON.stringify(INITIAL_MACHINES_BACKUP));
  }

  const storedAreas = localStorage.getItem("YOKOHAMA_MASTER_AREAS");
  let areasLoaded = false;
  if (storedAreas) {
    try {
      const parsed = JSON.parse(storedAreas);
      if (Array.isArray(parsed) && parsed.length > 0) {
        YOKOHAMA_AREAS = parsed;
        areasLoaded = true;
      }
    } catch (e) { console.error("Failed to parse master areas", e); }
  }
  if (!areasLoaded) {
    YOKOHAMA_AREAS = JSON.parse(JSON.stringify(INITIAL_AREAS_BACKUP));
  }

  const storedProcesses = localStorage.getItem("YOKOHAMA_MASTER_PROCESSES");
  let procLoaded = false;
  if (storedProcesses) {
    try {
      const parsed = JSON.parse(storedProcesses);
      if (Array.isArray(parsed) && parsed.length > 0) {
        YOKOHAMA_PROCESSES = parsed;
        procLoaded = true;
      }
    } catch (e) { console.error("Failed to parse master processes", e); }
  }
  if (!procLoaded) {
    YOKOHAMA_PROCESSES = JSON.parse(JSON.stringify(INITIAL_PROCESSES_BACKUP));
  }

  const storedCats = localStorage.getItem("YOKOHAMA_MASTER_CATEGORIES");
  let catsLoaded = false;
  if (storedCats) {
    try {
      const parsed = JSON.parse(storedCats);
      if (Array.isArray(parsed) && parsed.length > 0) {
        masterCategories = parsed;
        catsLoaded = true;
      }
    } catch (e) { console.error("Failed to parse master categories", e); }
  }
  if (!catsLoaded) {
    masterCategories = ["NSNL", "IPC", "Printer", "Scanner", "Infra", "MES", "Hardware / PC", "Network / Switch", "PLC / SCADA", "Other"];
  }

  const storedResp = localStorage.getItem("YOKOHAMA_MASTER_RESPONSIBILITIES");
  let respLoaded = false;
  if (storedResp) {
    try {
      const parsed = JSON.parse(storedResp);
      if (Array.isArray(parsed) && parsed.length > 0) {
        masterResponsibilities = parsed;
        respLoaded = true;
      }
    } catch (e) { console.error("Failed to parse master responsibilities", e); }
  }
  if (!respLoaded) {
    masterResponsibilities = ["ATC", "MELSS"];
  }

  const storedNatures = localStorage.getItem("YOKOHAMA_MASTER_NATURES");
  let naturesLoaded = false;
  if (storedNatures) {
    try {
      const parsed = JSON.parse(storedNatures);
      if (Array.isArray(parsed) && parsed.length > 0) {
        masterNatures = parsed;
        naturesLoaded = true;
      }
    } catch (e) { console.error("Failed to parse master natures", e); }
  }
  if (!naturesLoaded) {
    masterNatures = JSON.parse(JSON.stringify(INITIAL_NATURES_BACKUP));
  }

  saveMasterDataToStorage();
  rebuildMachineMap();
  window.YOKOHAMA_AREAS = YOKOHAMA_AREAS;
  window.YOKOHAMA_MACHINES = YOKOHAMA_MACHINES;
  window.YOKOHAMA_PROCESSES = YOKOHAMA_PROCESSES;

  const version = localStorage.getItem("YOKOHAMA_DATASET_VERSION");
  const stored = localStorage.getItem("YOKOHAMA_DOWNTIME_RECORDS");
  if (version === "2026_empty_v1" && stored) {
    try {
      downtimeRecords = JSON.parse(stored);
    } catch (e) {
      console.error("Failed to parse local storage records, resetting to empty logs", e);
      downtimeRecords = [...INITIAL_RECORDS];
    }
  } else {
    downtimeRecords = [...INITIAL_RECORDS];
    localStorage.setItem("YOKOHAMA_DATASET_VERSION", "2026_empty_v1");
    saveToStorage();
  }

  // Ensure any cached records have isCritical defined and YOHT migrated to ATC, and have affectedMachines and totalDowntimeMinutes
  let recordsUpdated = false;
  const critProcs = ["Unistage", "Stage-1", "Stage-2", "Mixing", "4Roll", "Extrusion", "Curing"];
  downtimeRecords.forEach(r => {
    if (r.responsibility === "YOHT") {
      r.responsibility = "ATC";
      recordsUpdated = true;
    }
    if (!r.isCritical) {
      r.isCritical = (critProcs.includes(r.process) || (parseInt(r.downtimeMinutes, 10) >= 60)) ? "Yes" : "No";
      recordsUpdated = true;
    }
    if (r.affectedMachines === undefined || r.affectedMachines === null) {
      r.affectedMachines = 1;
      recordsUpdated = true;
    }
    if (r.totalDowntimeMinutes === undefined || r.totalDowntimeMinutes === null) {
      r.totalDowntimeMinutes = (parseInt(r.downtimeMinutes, 10) || 0) * (parseInt(r.affectedMachines, 10) || 1);
      recordsUpdated = true;
    }
  });
  if (recordsUpdated) saveToStorage();

  const storedUsers = localStorage.getItem("YOKOHAMA_USER_ACCOUNTS");
  if (storedUsers) {
    try {
      const parsed = JSON.parse(storedUsers);
      if (parsed && typeof parsed === "object" && Object.keys(parsed).length > 0) {
        USER_ACCOUNTS = parsed;
        Object.keys(USER_ACCOUNTS).forEach(k => {
          if (USER_ACCOUNTS[k]) delete USER_ACCOUNTS[k].plainPassword;
        });
        if (USER_ACCOUNTS.operator) {
          USER_ACCOUNTS.operator.passwordHash = "ec6e1c25258002eb1c67d15c7f45da7945fa4c58778fd7d88faa5e53e3b4698d";
        }
        if (USER_ACCOUNTS.supervisor && USER_ACCOUNTS.supervisor.passwordHash === "7b1c3e3a4e929f0464f89d79ca82fe5daff0da070c01a1e7b9dd4bcf6b509ef5") {
          USER_ACCOUNTS.supervisor.passwordHash = "4e4c56e4a15f89f05c2f4c72613da2a18c9665d4f0d6acce16415eb06f9be776";
        }
        saveUserAccountsToStorage();
      } else {
        USER_ACCOUNTS = JSON.parse(JSON.stringify(DEFAULT_USER_ACCOUNTS));
        saveUserAccountsToStorage();
      }
    } catch (e) {
      USER_ACCOUNTS = JSON.parse(JSON.stringify(DEFAULT_USER_ACCOUNTS));
      saveUserAccountsToStorage();
    }
  } else {
    USER_ACCOUNTS = JSON.parse(JSON.stringify(DEFAULT_USER_ACCOUNTS));
    saveUserAccountsToStorage();
  }
  window.USER_ACCOUNTS = USER_ACCOUNTS;

  const storedTechs = localStorage.getItem("YOKOHAMA_TECHNICIANS");
  if (storedTechs) {
    try {
      const parsed = JSON.parse(storedTechs);
      if (Array.isArray(parsed) && parsed.length > 0) {
        technicians = parsed;
      } else {
        technicians = [...DEFAULT_TECHNICIANS];
        saveTechsToStorage();
      }
    } catch (e) {
      technicians = [...DEFAULT_TECHNICIANS];
      saveTechsToStorage();
    }
  } else {
    technicians = [...DEFAULT_TECHNICIANS];
    saveTechsToStorage();
  }

  technicians = technicians.map(t => t === "YOHT IT Team" ? "ATC IT Team" : t);
  saveTechsToStorage();
  window.downtimeRecords = downtimeRecords;

  // --- Live Supabase User Accounts Sync ---
  if (typeof window.fetchCloudUserAccounts === "function") {
    try {
      const cloudAccounts = await window.fetchCloudUserAccounts();
      if (Array.isArray(cloudAccounts) && cloudAccounts.length > 0) {
        cloudAccounts.forEach(ca => {
          const roleKey = (ca.role || "").toLowerCase();
          if (USER_ACCOUNTS[roleKey]) {
            USER_ACCOUNTS[roleKey].username = ca.username;
            USER_ACCOUNTS[roleKey].displayName = ca.display_name;
            USER_ACCOUNTS[roleKey].passwordHash = ca.password_hash;
            delete USER_ACCOUNTS[roleKey].plainPassword;
          }
        });
        saveUserAccountsToStorage();
      }
    } catch (err) {
      console.warn("[Supabase] Cloud users fetch warning:", err);
    }
  }

  // --- Live Firebase Firestore Cloud Database Sync (Google AI Studio) ---
  if (typeof window.isFirebaseActive === "function" && window.isFirebaseActive()) {
    try {
      if (typeof window.fetchFirebaseIncidents === "function") {
        const fbData = await window.fetchFirebaseIncidents();
        if (Array.isArray(fbData) && fbData.length > 0) {
          console.log(`[Firebase] Synced ${fbData.length} live records from Firestore database!`);
          downtimeRecords = fbData;
          window.downtimeRecords = downtimeRecords;
          localStorage.setItem("YOKOHAMA_DOWNTIME_RECORDS", JSON.stringify(downtimeRecords));
          if (typeof renderKPIs === "function") renderKPIs();
          if (typeof renderCharts === "function") renderCharts();
          if (typeof renderRecordsTable === "function") renderRecordsTable();
        } else if (downtimeRecords.length > 0 && typeof window.bulkUpsertFirebaseIncidents === "function") {
          console.log("[Firebase] Firestore empty, seeding local records to Firestore...");
          window.bulkUpsertFirebaseIncidents(downtimeRecords).catch(e => console.warn(e));
        }
      }

      if (typeof window.listenToFirebaseIncidents === "function") {
        window.listenToFirebaseIncidents((liveRecords) => {
          if (Array.isArray(liveRecords) && liveRecords.length > 0) {
            downtimeRecords = liveRecords;
            window.downtimeRecords = downtimeRecords;
            localStorage.setItem("YOKOHAMA_DOWNTIME_RECORDS", JSON.stringify(downtimeRecords));
            if (typeof renderKPIs === "function") renderKPIs();
            if (typeof renderCharts === "function") renderCharts();
            if (typeof renderRecordsTable === "function") renderRecordsTable();
          }
        });
      }
    } catch (fbErr) {
      console.warn("[Firebase] Storage init notice:", fbErr);
    }
  }

  // --- Live Supabase Cloud Database Sync ---
  if (typeof window.fetchCloudIncidents === "function") {
    try {
      const cloudData = await window.fetchCloudIncidents();
      if (Array.isArray(cloudData) && cloudData.length > 0) {
        console.log(`[Supabase] Synced ${cloudData.length} live records from cloud database!`);
        downtimeRecords = cloudData;
        window.downtimeRecords = downtimeRecords;
        localStorage.setItem("YOKOHAMA_DOWNTIME_RECORDS", JSON.stringify(downtimeRecords));
        if (typeof renderKPIs === "function") renderKPIs();
        if (typeof renderCharts === "function") renderCharts();
        if (typeof renderRecordsTable === "function") renderRecordsTable();
      } else if (downtimeRecords.length > 0 && typeof window.bulkUpsertCloudIncidents === "function") {
        console.log("[Supabase] Cloud database empty, seeding local records to Supabase...");
        window.bulkUpsertCloudIncidents(downtimeRecords).catch(e => console.warn(e));
      }
    } catch (err) {
      console.warn("[Supabase] Cloud fetch failed, using local cache:", err);
    }
  }

  // --- Real-time Multi-User Cloud Channel ---
  if (typeof window.initSupabaseRealtime === "function") {
    window.initSupabaseRealtime(async () => {
      const refreshed = await window.fetchCloudIncidents();
      if (Array.isArray(refreshed)) {
        downtimeRecords = refreshed;
        window.downtimeRecords = downtimeRecords;
        localStorage.setItem("YOKOHAMA_DOWNTIME_RECORDS", JSON.stringify(downtimeRecords));
        if (typeof renderKPIs === "function") renderKPIs();
        if (typeof renderCharts === "function") renderCharts();
        if (typeof renderRecordsTable === "function") renderRecordsTable();
      }
    }, async () => {
      // Realtime user account changed in Supabase cloud
      if (typeof window.fetchCloudUserAccounts === "function") {
        try {
          const cloudAccounts = await window.fetchCloudUserAccounts();
          if (Array.isArray(cloudAccounts) && cloudAccounts.length > 0) {
            cloudAccounts.forEach(ca => {
              const roleKey = (ca.role || "").toLowerCase();
              if (USER_ACCOUNTS[roleKey]) {
                USER_ACCOUNTS[roleKey].username = ca.username;
                USER_ACCOUNTS[roleKey].displayName = ca.display_name;
                USER_ACCOUNTS[roleKey].passwordHash = ca.password_hash;
                delete USER_ACCOUNTS[roleKey].plainPassword;
              }
            });
            saveUserAccountsToStorage();
          }
        } catch (e) {
          console.warn("[Realtime] User sync warning:", e);
        }
      }
    });
  }
}
window.initStorage = initStorage;

function saveToStorage() {
  localStorage.setItem("YOKOHAMA_DOWNTIME_RECORDS", JSON.stringify(downtimeRecords));
  if (typeof window.isFirebaseActive === "function" && window.isFirebaseActive() && typeof window.bulkUpsertFirebaseIncidents === "function") {
    window.bulkUpsertFirebaseIncidents(downtimeRecords).catch(e => console.warn("[Firebase] Sync notice:", e));
  } else if (typeof window.bulkUpsertCloudIncidents === "function" && Array.isArray(downtimeRecords) && downtimeRecords.length > 0) {
    window.bulkUpsertCloudIncidents(downtimeRecords).catch(e => console.warn("[Supabase] Cloud sync warning:", e));
  }
}

// --- Manual Top-Right Cloud Sync Trigger ---
window.triggerManualCloudSync = async function() {
  const btn = document.getElementById("btnCloudSync");
  const icon = document.getElementById("cloudSyncIcon");
  const text = document.getElementById("cloudSyncText");
  const pulse = document.getElementById("cloudSyncPulse");

  if (btn) btn.disabled = true;
  if (icon) icon.className = "fa-solid fa-rotate fa-spin text-cyan-400 text-xs";
  if (text) text.textContent = "Syncing...";
  if (pulse) pulse.className = "w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping";

  try {
    let syncedCount = 0;

    // 1. Fetch live user accounts from Supabase
    if (typeof window.fetchCloudUserAccounts === "function") {
      try {
        const cloudAccounts = await window.fetchCloudUserAccounts();
        if (Array.isArray(cloudAccounts) && cloudAccounts.length > 0) {
          cloudAccounts.forEach(ca => {
            const roleKey = (ca.role || "").toLowerCase();
            if (USER_ACCOUNTS[roleKey]) {
              USER_ACCOUNTS[roleKey].username = ca.username;
              USER_ACCOUNTS[roleKey].displayName = ca.display_name;
              USER_ACCOUNTS[roleKey].passwordHash = ca.password_hash;
              delete USER_ACCOUNTS[roleKey].plainPassword;
            }
          });
          saveUserAccountsToStorage();
        }
      } catch (e) {
        console.warn("[Cloud Sync] Accounts fetch warning:", e);
      }
    }

    // 1b. Fetch live incidents from Firebase Firestore (if active)
    if (typeof window.isFirebaseActive === "function" && window.isFirebaseActive() && typeof window.fetchFirebaseIncidents === "function") {
      try {
        const fbData = await window.fetchFirebaseIncidents();
        if (Array.isArray(fbData) && fbData.length > 0) {
          downtimeRecords = fbData;
          window.downtimeRecords = downtimeRecords;
          localStorage.setItem("YOKOHAMA_DOWNTIME_RECORDS", JSON.stringify(downtimeRecords));
          syncedCount = fbData.length;
        } else if (downtimeRecords.length > 0 && typeof window.bulkUpsertFirebaseIncidents === "function") {
          await window.bulkUpsertFirebaseIncidents(downtimeRecords);
          syncedCount = downtimeRecords.length;
        }
      } catch (fbErr) {
        console.warn("[Firebase] Cloud sync notice:", fbErr);
      }
    }

    // 2. Fetch live incidents from Supabase
    if (typeof window.fetchCloudIncidents === "function") {
      const cloudData = await window.fetchCloudIncidents();
      if (Array.isArray(cloudData)) {
        if (cloudData.length > 0) {
          downtimeRecords = cloudData;
          window.downtimeRecords = downtimeRecords;
          localStorage.setItem("YOKOHAMA_DOWNTIME_RECORDS", JSON.stringify(downtimeRecords));
          syncedCount = cloudData.length;
        } else if (downtimeRecords.length > 0 && typeof window.bulkUpsertCloudIncidents === "function") {
          // Cloud database empty, push local records to Supabase
          await window.bulkUpsertCloudIncidents(downtimeRecords);
          syncedCount = downtimeRecords.length;
        }
      }
    }

    // 3. Re-render UI components
    if (typeof renderKPIs === "function") renderKPIs();
    if (typeof renderCharts === "function") renderCharts();
    if (typeof renderRecordsTable === "function") renderRecordsTable();
    if (typeof populateDashboardMonths === "function") populateDashboardMonths();
    if (typeof updateMaintenanceLogCount === "function") updateMaintenanceLogCount();
    if (typeof initMachineMultiSelectDropdown === "function") initMachineMultiSelectDropdown();
    if (typeof initAreaMultiSelectDropdown === "function") initAreaMultiSelectDropdown();

    // 4. Success State Feedback
    if (icon) icon.className = "fa-solid fa-circle-check text-emerald-400 text-xs";
    if (text) text.textContent = "Synced!";
    if (pulse) pulse.className = "w-1.5 h-1.5 rounded-full bg-emerald-400";

    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    if (btn) btn.title = `Last synced: ${timeStr} (${syncedCount} incidents)`;

    showToast(`Cloud Sync Successful! Updated ${syncedCount} incidents with Supabase.`, "success");

    setTimeout(() => {
      if (icon) icon.className = "fa-solid fa-cloud-arrow-up text-emerald-400 text-xs";
      if (text) text.textContent = "Cloud Sync";
      if (pulse) pulse.className = "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse";
      if (btn) btn.disabled = false;
    }, 2500);

  } catch (err) {
    console.error("[Cloud Sync] Sync failed:", err);
    if (icon) icon.className = "fa-solid fa-triangle-exclamation text-amber-400 text-xs";
    if (text) text.textContent = "Sync Failed";
    if (pulse) pulse.className = "w-1.5 h-1.5 rounded-full bg-amber-400";
    showToast("Cloud sync failed. Please check network connection or Supabase status.", "error");

    setTimeout(() => {
      if (icon) icon.className = "fa-solid fa-cloud-arrow-up text-emerald-400 text-xs";
      if (text) text.textContent = "Cloud Sync";
      if (pulse) pulse.className = "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse";
      if (btn) btn.disabled = false;
    }, 3000);
  }
};

function saveTechsToStorage() {
  localStorage.setItem("YOKOHAMA_TECHNICIANS", JSON.stringify(technicians));
  window.technicians = technicians;
}

// --- Live Clock & Shift Calculation ---
function initLiveClock() {
  const clockEl = document.getElementById("live-clock");
  const shiftEl = document.getElementById("current-shift-badge");
  
  function updateTime() {
    const now = new Date();
    const dateStr = now.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
    const timeStr = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true
    });

    if (clockEl) {
      clockEl.innerHTML = `<span class="text-slate-400 font-medium">${dateStr}</span> <span class="text-white font-bold tracking-wider">${timeStr}</span>`;
    }

    const hour = now.getHours();
    let shiftName = "Shift A (7am - 3pm)";
    let shiftColor = "bg-emerald-500/20 text-emerald-300 border-emerald-500/30";
    if (hour >= 15 && hour < 23) {
      shiftName = "Shift B (3pm - 11pm)";
      shiftColor = "bg-amber-500/20 text-amber-300 border-amber-500/30";
    } else if (hour >= 23 || hour < 7) {
      shiftName = "Shift C (11pm - 7am)";
      shiftColor = "bg-purple-500/20 text-purple-300 border-purple-500/30";
    }

    if (shiftEl) {
      shiftEl.className = `px-2.5 py-1 rounded-full text-xs font-bold border flex items-center gap-1.5 ${shiftColor}`;
      shiftEl.innerHTML = `<span class="w-2 h-2 rounded-full bg-current animate-pulse"></span> ${shiftName}`;
    }
  }

  updateTime();
  if (window.liveClockTimer) clearInterval(window.liveClockTimer);
  window.liveClockTimer = setInterval(updateTime, 1000);
}

// --- Dropdowns & Area/Machine Linking ---
function initAreasDropdowns() {
  const areaFormSelect = document.getElementById("area");
  const areaFilterSelect = document.getElementById("filterArea");

  if (areaFormSelect) {
    areaFormSelect.innerHTML = '<option value="">-- Select Area / Plant --</option>';
    YOKOHAMA_AREAS.forEach(area => {
      const opt = document.createElement("option");
      opt.value = area;
      opt.textContent = area;
      areaFormSelect.appendChild(opt);
    });

    areaFormSelect.addEventListener("change", (e) => {
      initMachineSelector(e.target.value);
    });
  }

  if (areaFilterSelect) {
    areaFilterSelect.innerHTML = '<option value="ALL">All Areas</option>';
    YOKOHAMA_AREAS.forEach(area => {
      const opt = document.createElement("option");
      opt.value = area;
      opt.textContent = area;
      areaFilterSelect.appendChild(opt);
    });
  }
}

function initProcessesDropdowns() {
  const processFilterSelect = document.getElementById("filterProcess");
  if (processFilterSelect) {
    processFilterSelect.innerHTML = '<option value="ALL">All Processes</option>';
    YOKOHAMA_PROCESSES.forEach(proc => {
      const opt = document.createElement("option");
      opt.value = proc;
      opt.textContent = proc;
      processFilterSelect.appendChild(opt);
    });
  }
}

function initCategoryFilterDropdown() {
  const catFilterSelect = document.getElementById("filterCategory");
  if (!catFilterSelect) return;

  const standardCats = ["NSNL", "IPC", "Printer", "Scanner", "Infra", "MES", "Hardware / PC", "Network / Switch", "PLC / SCADA", "Other"];
  const recCats = (typeof downtimeRecords !== "undefined" ? downtimeRecords : []).map(r => r.category).filter(Boolean);
  const allCats = Array.from(new Set([...standardCats, ...recCats])).sort();

  const currentVal = (currentFilter && currentFilter.category) ? currentFilter.category : "ALL";
  catFilterSelect.innerHTML = '<option value="ALL">All Categories</option>';
  allCats.forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;
    if (cat === currentVal) opt.selected = true;
    catFilterSelect.appendChild(opt);
  });
}

function initMachineSelector(selectedArea = "") {
  const machineSelect = document.getElementById("machineNo");
  const machineTypeInput = document.getElementById("machineType");
  const processBadge = document.getElementById("processBadge");

  if (!machineSelect) return;

  const currentVal = machineSelect.value;
  machineSelect.innerHTML = '<option value="">-- Select Machine Code --</option>';

  let filteredList = YOKOHAMA_MACHINES;
  if (selectedArea) {
    filteredList = YOKOHAMA_MACHINES.filter(m => m.area === selectedArea);
  }

  if (!selectedArea) {
    YOKOHAMA_AREAS.forEach(area => {
      const optGroup = document.createElement("optgroup");
      optGroup.label = `--- ${area} ---`;
      const areaMachines = YOKOHAMA_MACHINES.filter(m => m.area === area);
      areaMachines.forEach(m => {
        const opt = document.createElement("option");
        opt.value = m.code;
        opt.textContent = m.code;
        opt.title = `${m.name} (${m.process})`;
        optGroup.appendChild(opt);
      });
      if (areaMachines.length > 0) {
        machineSelect.appendChild(optGroup);
      }
    });
  } else {
    filteredList.forEach(m => {
      const opt = document.createElement("option");
      opt.value = m.code;
      opt.textContent = m.code;
      opt.title = `${m.name} (${m.process})`;
      machineSelect.appendChild(opt);
    });
  }

  if (currentVal && MACHINE_MAP[currentVal]) {
    machineSelect.value = currentVal;
  }

  machineSelect.onchange = (e) => {
    const selectedCode = e.target.value;
    if (selectedCode && MACHINE_MAP[selectedCode]) {
      const m = MACHINE_MAP[selectedCode];
      if (machineTypeInput) machineTypeInput.value = `${m.name} [${m.process}]`;
      
      const areaSelect = document.getElementById("area");
      if (areaSelect && (!areaSelect.value || areaSelect.value !== m.area)) {
        areaSelect.value = m.area;
      }
      if (processBadge) {
        processBadge.textContent = m.process;
        processBadge.classList.remove("hidden");
      }

      // Auto-detect known critical bottleneck production processes
      const criticalProcesses = ["Unistage", "Stage-1", "Stage-2", "Mixing", "4Roll", "Extrusion", "Curing"];
      if (criticalProcesses.includes(m.process)) {
        setCriticalMachine("Yes");
      } else {
        setCriticalMachine("No");
      }
    } else {
      if (machineTypeInput) machineTypeInput.value = "";
      if (processBadge) processBadge.classList.add("hidden");
      setCriticalMachine("No");
    }
  };
}

function initTechniciansDropdown() {
  const techSelect = document.getElementById("solvedBy");
  const filterTechSelect = document.getElementById("filterTechnician");
  
  if (techSelect) {
    techSelect.innerHTML = '<option value="">-- Select Responsible Person --</option>';
    technicians.forEach(tech => {
      const opt = document.createElement("option");
      opt.value = tech;
      opt.textContent = tech;
      techSelect.appendChild(opt);
    });
  }

  if (filterTechSelect) {
    filterTechSelect.innerHTML = '<option value="ALL">All Responsible Persons</option>';
    technicians.forEach(tech => {
      const opt = document.createElement("option");
      opt.value = tech;
      opt.textContent = tech;
      filterTechSelect.appendChild(opt);
    });
  }
}

function getLocalDateString(d = new Date()) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}
window.getLocalDateString = getLocalDateString;

function calcDateDiffDays(startDate, endDate) {
  if (!startDate || !endDate) return 1;
  const [y1, m1, d1] = startDate.split("-").map(Number);
  const [y2, m2, d2] = endDate.split("-").map(Number);
  const s = Date.UTC(y1, m1 - 1, d1);
  const e = Date.UTC(y2, m2 - 1, d2);
  const diff = Math.round((e - s) / (1000 * 60 * 60 * 24)) + 1;
  return Math.max(1, diff);
}
window.calcDateDiffDays = calcDateDiffDays;

function populateDefaultDates() {
  const today = getLocalDateString();
  const issueDateEl = document.getElementById("issueDate");
  const closedDateEl = document.getElementById("closedDate");
  
  if (issueDateEl && !issueDateEl.value) {
    issueDateEl.value = today;
  }
  if (closedDateEl && !closedDateEl.value) {
    closedDateEl.value = today;
  }
}


// --- Dynamic Nature of Issue Selector & Dropdowns ---
function initNatureSelector(activeNature) {
  const container = document.getElementById("natureContainer");
  const hiddenInput = document.getElementById("nature");
  if (!container || !hiddenInput) return;

  const current = activeNature || hiddenInput.value || masterNatures[0] || "MES";
  hiddenInput.value = current;

  container.innerHTML = masterNatures.map(nat => {
    const isSelected = nat.toUpperCase() === current.toUpperCase();
    let activeClasses = "";
    if (isSelected) {
      if (nat.toUpperCase() === "MES") {
        activeClasses = "bg-[#E60012] text-white shadow-xs font-bold border-transparent";
      } else if (nat.toUpperCase() === "INFRA") {
        activeClasses = "bg-[#0284C7] text-white shadow-xs font-bold border-transparent";
      } else {
        activeClasses = "bg-slate-900 text-white shadow-xs font-bold border-transparent";
      }
    } else {
      activeClasses = "bg-white text-slate-700 hover:bg-slate-200 border border-slate-200 font-semibold";
    }

    let icon = "fa-tag";
    const u = nat.toUpperCase();
    if (u === "MES") icon = "fa-gears";
    else if (u === "INFRA") icon = "fa-network-wired";
    else if (u.includes("NET")) icon = "fa-wifi";
    else if (u.includes("SAP") || u.includes("SOFT")) icon = "fa-laptop-code";
    else if (u.includes("HARD")) icon = "fa-server";

    return `
      <button type="button" onclick="setFormNature('${escapeHtml(nat)}')" class="flex-1 min-w-[75px] py-1.5 px-3 rounded-lg text-xs transition-all flex items-center justify-center gap-1.5 ${activeClasses}">
        <i class="fa-solid ${icon} text-xs"></i> <span>${escapeHtml(nat)}</span>
      </button>
    `;
  }).join("");
}

function setFormNature(nat) {
  const hiddenInput = document.getElementById("nature");
  if (hiddenInput) hiddenInput.value = nat;
  initNatureSelector(nat);
  updateCategorySuggestions(nat);
}
window.setFormNature = setFormNature;

function initNatureFilterDropdown() {
  const natureFilter = document.getElementById("filterNature");
  if (!natureFilter) return;

  const currentVal = natureFilter.value || "ALL";
  natureFilter.innerHTML = `<option value="ALL">All Nature</option>`;
  masterNatures.forEach(nat => {
    const opt = document.createElement("option");
    opt.value = nat;
    opt.textContent = `${nat} Only`;
    if (nat === currentVal) opt.selected = true;
    natureFilter.appendChild(opt);
  });
}

function getNatureBadge(nature) {
  const n = (nature || "").toUpperCase();
  if (n === "MES") {
    return `<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-red-100 text-red-700 border border-red-200">MES</span>`;
  } else if (n === "INFRA") {
    return `<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-sky-100 text-sky-700 border border-sky-200">INFRA</span>`;
  } else {
    return `<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-purple-100 text-purple-700 border border-purple-200">${escapeHtml(nature)}</span>`;
  }
}

// --- Segmented & Form Controls ---
function initFormControls() {
  initNatureSelector();
  initNatureFilterDropdown();

  const btnCompleted = document.getElementById("btn-status-completed");
  const btnOpen = document.getElementById("btn-status-open");
  const hiddenStatus = document.getElementById("closureStatus");
  const closedDateContainer = document.getElementById("closed-date-container");
  const closedDateInput = document.getElementById("closedDate");

  if (btnCompleted && btnOpen) {
    btnCompleted.addEventListener("click", () => {
      hiddenStatus.value = "Completed";
      btnCompleted.className = "segmented-option active-completed";
      btnOpen.className = "segmented-option";
      if (closedDateContainer) closedDateContainer.style.opacity = "1";
      if (closedDateInput) {
        closedDateInput.disabled = false;
        if (!closedDateInput.value) {
          closedDateInput.value = document.getElementById("issueDate")?.value || getLocalDateString();
        }
      }
    });

    btnOpen.addEventListener("click", () => {
      hiddenStatus.value = "Open";
      btnOpen.className = "segmented-option active-open";
      btnCompleted.className = "segmented-option";
      if (closedDateContainer) closedDateContainer.style.opacity = "0.6";
      if (closedDateInput) {
        closedDateInput.value = "";
        closedDateInput.disabled = true;
      }
    });
  }
}

function updateCategorySuggestions(nature) {
  const categorySelect = document.getElementById("category");
  if (!categorySelect) return;

  const currentVal = categorySelect.value;
  if (nature === "MES") {
    categorySelect.value = "MES";
  } else if (nature === "INFRA" && (currentVal === "MES" || currentVal === "NSNL")) {
    categorySelect.value = "Infra";
  }
  populateIssues(categorySelect.value);
}

// --- Event Listeners ---
function setupEventListeners() {
  const form = document.getElementById("downtimeForm");
  const btnClear = document.getElementById("btn-clear-form");
  const btnAddNewTech = document.getElementById("btn-add-technician");

  if (form) {
    form.addEventListener("submit", handleFormSubmit);
  }

  if (btnClear) {
    btnClear.addEventListener("click", resetForm);
  }

  if (btnAddNewTech) {
    btnAddNewTech.addEventListener("click", promptAddNewTechnician);
  }

  const searchInput = document.getElementById("tableSearch");
  const dateFilter = document.getElementById("filterDate");
  const dateToFilter = document.getElementById("filterDateTo");
  const btnClearDate = document.getElementById("btnClearDateFilter");
  const categoryFilter = document.getElementById("filterCategory");
  const natureFilter = document.getElementById("filterNature");
  const statusFilter = document.getElementById("filterStatus");
  const areaFilter = document.getElementById("filterArea");
  const processFilter = document.getElementById("filterProcess");
  const techFilter = document.getElementById("filterTechnician");
  const critFilter = document.getElementById("filterCritical");

  // Close multi-select dropdown panels when clicking outside
  document.addEventListener("click", (e) => {
    const mWrap = document.getElementById("dropdownMachineFilterWrapper");
    const aWrap = document.getElementById("dropdownAreaFilterWrapper");
    if (mWrap && !mWrap.contains(e.target)) {
      document.getElementById("panelMachineDropdown")?.classList.add("hidden");
    }
    if (aWrap && !aWrap.contains(e.target)) {
      document.getElementById("panelAreaDropdown")?.classList.add("hidden");
    }
    const formMWrap = document.getElementById("formMachineDropdownWrapper");
    const formAWrap = document.getElementById("formAreaDropdownWrapper");
    if (formMWrap && !formMWrap.contains(e.target)) {
      document.getElementById("panelFormMachineDropdown")?.classList.add("hidden");
    }
    if (formAWrap && !formAWrap.contains(e.target)) {
      document.getElementById("panelFormAreaDropdown")?.classList.add("hidden");
    }
  });

  if (critFilter) {
    critFilter.addEventListener("change", (e) => {
      currentFilter.critical = e.target.value;
      renderRecordsTable();
    });
  }

  let searchDebounceTimer = null;
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      clearTimeout(searchDebounceTimer);
      searchDebounceTimer = setTimeout(() => {
        currentFilter.search = e.target.value.toLowerCase();
        tableCurrentPage = 1;
        renderRecordsTable();
      }, 180);
    });
  }

  if (dateFilter) {
    dateFilter.addEventListener("change", (e) => {
      const val = e.target.value;
      if (dateToFilter && dateToFilter.value && val && dateToFilter.value < val) {
        showToast("Invalid range: End Date cannot be earlier than Start Date.", "warning");
        e.target.value = currentFilter.dateFrom || "";
        return;
      }
      currentFilter.dateFrom = val;
      renderRecordsTable();
    });
  }

  if (dateToFilter) {
    dateToFilter.addEventListener("change", (e) => {
      const val = e.target.value;
      if (dateFilter && dateFilter.value && val && val < dateFilter.value) {
        showToast("Invalid range: End Date cannot be earlier than Start Date.", "warning");
        e.target.value = currentFilter.dateTo || "";
        return;
      }
      currentFilter.dateTo = val;
      renderRecordsTable();
    });
  }

  if (btnClearDate) {
    btnClearDate.addEventListener("click", () => {
      if (dateFilter) dateFilter.value = "";
      if (dateToFilter) dateToFilter.value = "";
      currentFilter.dateFrom = "";
      currentFilter.dateTo = "";
      renderRecordsTable();
    });
  }

  if (categoryFilter) {
    categoryFilter.addEventListener("change", (e) => {
      currentFilter.category = e.target.value;
      renderRecordsTable();
    });
  }

  if (natureFilter) {
    natureFilter.addEventListener("change", (e) => {
      currentFilter.nature = e.target.value;
      renderRecordsTable();
    });
  }

  if (statusFilter) {
    statusFilter.addEventListener("change", (e) => {
      currentFilter.status = e.target.value;
      renderRecordsTable();
    });
  }

  if (areaFilter) {
    areaFilter.addEventListener("change", (e) => {
      currentFilter.area = e.target.value;
      renderRecordsTable();
    });
  }

  if (processFilter) {
    processFilter.addEventListener("change", (e) => {
      currentFilter.process = e.target.value;
      renderRecordsTable();
    });
  }

  if (techFilter) {
    techFilter.addEventListener("change", (e) => {
      currentFilter.tech = e.target.value;
      renderRecordsTable();
    });
  }
}

// =========================================================================
// INCIDENT ENTRY FORM MULTI-SELECT SYSTEM (AREA/PLANT & MACHINE CODE)
// Searchable, Select All, Unselect All, Real-time Search, and Batch Logging
// =========================================================================
let formSelectedAreas = new Set();
let formSelectedMachines = new Set();
window.formSelectedAreas = formSelectedAreas;
window.formSelectedMachines = formSelectedMachines;

function initFormAreaDropdown() {
  const container = document.getElementById("listFormAreaCheckboxes");
  if (!container) return;

  const areas = (typeof YOKOHAMA_AREAS !== "undefined" && Array.isArray(YOKOHAMA_AREAS) && YOKOHAMA_AREAS.length > 0)
    ? YOKOHAMA_AREAS
    : ["Mixing", "Extruder", "Building", "Curing", "Final", "Engineering", "Quality", "Warehouse / Raw Materials"];

  let html = "";
  areas.forEach(area => {
    const isChecked = formSelectedAreas.has(area);
    html += `
      <label class="form-area-checkbox-item flex items-center justify-between gap-2 px-2.5 py-2 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors" data-area="${escapeHtml(area)}">
        <div class="flex items-center gap-2.5 overflow-hidden">
          <input type="checkbox" value="${escapeHtml(area)}" ${isChecked ? 'checked' : ''} onchange="onFormAreaCheckboxChange(this)" class="w-4 h-4 rounded text-[#E60012] focus:ring-red-500 border-slate-300 cursor-pointer">
          <span class="font-semibold text-slate-800 text-xs">${escapeHtml(area)}</span>
        </div>
      </label>
    `;
  });

  if (!html) {
    html = `<div class="p-3 text-center text-xs text-slate-400">No areas available</div>`;
  }
  container.innerHTML = html;
  updateFormAreaButtonLabel();
}
window.initFormAreaDropdown = initFormAreaDropdown;

function initFormMachineDropdown(activeAreas = null) {
  const container = document.getElementById("listFormMachineCheckboxes");
  if (!container) return;

  const targetAreas = (activeAreas && activeAreas.size > 0) ? activeAreas : null;

  let machines = (typeof YOKOHAMA_MACHINES !== "undefined" && Array.isArray(YOKOHAMA_MACHINES))
    ? YOKOHAMA_MACHINES
    : [];

  if (targetAreas) {
    machines = machines.filter(m => targetAreas.has(m.area));
  }

  machines = [...machines].sort((a, b) => a.code.localeCompare(b.code));

  let html = "";
  machines.forEach(m => {
    const isChecked = formSelectedMachines.has(m.code);
    const isCrit = (m.critical === "Yes" || m.isCritical === "Yes");
    html += `
      <label class="form-machine-checkbox-item flex items-center justify-between gap-2 px-2.5 py-1.5 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors" data-code="${escapeHtml(m.code)}" data-area="${escapeHtml(m.area || '')}">
        <div class="flex items-center gap-2 overflow-hidden flex-1">
          <input type="checkbox" value="${escapeHtml(m.code)}" ${isChecked ? 'checked' : ''} onchange="onFormMachineCheckboxChange(this)" class="w-3.5 h-3.5 rounded text-[#E60012] focus:ring-red-500 border-slate-300 cursor-pointer">
          <span class="font-mono font-bold text-slate-900 text-xs">${escapeHtml(m.code)}</span>
          <span class="text-slate-500 text-[11px] truncate max-w-[150px]">${escapeHtml(m.name || '')}</span>
        </div>
        <div class="flex items-center gap-1 flex-shrink-0">
          ${m.process ? `<span class="text-[9px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 font-mono">${escapeHtml(m.process)}</span>` : ''}
          ${isCrit ? `<span class="text-[9px] px-1.5 py-0.5 rounded bg-red-100 text-red-700 font-bold font-mono">CRIT</span>` : ''}
        </div>
      </label>
    `;
  });

  if (!html) {
    html = `<div class="p-3 text-center text-xs text-slate-400">No machines found for selected area</div>`;
  }
  container.innerHTML = html;
  updateFormMachineButtonLabel();
}
window.initFormMachineDropdown = initFormMachineDropdown;

window.toggleFormDropdown = function(type, event) {
  if (event) event.stopPropagation();
  const aPanel = document.getElementById("panelFormAreaDropdown");
  const mPanel = document.getElementById("panelFormMachineDropdown");

  if (type === "area") {
    if (mPanel) mPanel.classList.add("hidden");
    if (aPanel) {
      const isHidden = aPanel.classList.contains("hidden");
      if (isHidden) {
        aPanel.classList.remove("hidden");
        document.getElementById("searchFormArea")?.focus();
      } else {
        aPanel.classList.add("hidden");
      }
    }
  } else if (type === "machine") {
    if (aPanel) aPanel.classList.add("hidden");
    if (mPanel) {
      const isHidden = mPanel.classList.contains("hidden");
      if (isHidden) {
        mPanel.classList.remove("hidden");
        document.getElementById("searchFormMachine")?.focus();
      } else {
        mPanel.classList.add("hidden");
      }
    }
  }
};

window.filterFormAreaList = function() {
  const q = (document.getElementById("searchFormArea")?.value || "").trim().toLowerCase();
  const labels = document.querySelectorAll("#listFormAreaCheckboxes .form-area-checkbox-item");
  labels.forEach(lbl => {
    const area = (lbl.getAttribute("data-area") || "").toLowerCase();
    if (!q || area.includes(q)) {
      lbl.classList.remove("hidden");
    } else {
      lbl.classList.add("hidden");
    }
  });
};

window.filterFormMachineList = function() {
  const q = (document.getElementById("searchFormMachine")?.value || "").trim().toLowerCase();
  const labels = document.querySelectorAll("#listFormMachineCheckboxes .form-machine-checkbox-item");
  labels.forEach(lbl => {
    const code = (lbl.getAttribute("data-code") || "").toLowerCase();
    const text = lbl.textContent.toLowerCase();
    if (!q || code.includes(q) || text.includes(q)) {
      lbl.classList.remove("hidden");
    } else {
      lbl.classList.add("hidden");
    }
  });
};

window.selectAllFormAreas = function(selectAll) {
  const checkboxes = document.querySelectorAll("#listFormAreaCheckboxes input[type='checkbox']");
  checkboxes.forEach(cb => {
    const parent = cb.closest(".form-area-checkbox-item");
    const isVisible = parent && !parent.classList.contains("hidden");
    if (isVisible) {
      cb.checked = selectAll;
      if (selectAll) {
        formSelectedAreas.add(cb.value);
      } else {
        formSelectedAreas.delete(cb.value);
      }
    }
  });

  updateFormAreaButtonLabel();
  initFormMachineDropdown(formSelectedAreas.size > 0 ? formSelectedAreas : null);
  syncFormHiddenInputs();
};

function syncAffectedMachinesCount() {
  const affInput = document.getElementById("affectedMachines");
  if (affInput && !affInput.dataset.manualOverride) {
    const count = formSelectedMachines.size > 0 ? formSelectedMachines.size : 1;
    affInput.value = count;
    const dtMin = parseInt(document.getElementById("downtimeMinutes")?.value, 10) || 0;
    const totEl = document.getElementById("totalDowntimeMinutes");
    if (totEl) totEl.value = dtMin * count;
  }
}

window.selectAllFormMachines = function(selectAll) {
  const checkboxes = document.querySelectorAll("#listFormMachineCheckboxes input[type='checkbox']");
  checkboxes.forEach(cb => {
    const parent = cb.closest(".form-machine-checkbox-item");
    const isVisible = parent && !parent.classList.contains("hidden");
    if (isVisible) {
      cb.checked = selectAll;
      if (selectAll) {
        formSelectedMachines.add(cb.value);
      } else {
        formSelectedMachines.delete(cb.value);
      }
    }
  });

  updateFormMachineButtonLabel();
  syncAffectedMachinesCount();

  if (formSelectedMachines.size === 1) {
    const singleCode = Array.from(formSelectedMachines)[0];
    applySingleMachineMetadata(singleCode);
  } else if (formSelectedMachines.size === 0) {
    clearMachineMetadata();
  }

  syncFormHiddenInputs();
};

window.onFormAreaCheckboxChange = function(inputEl) {
  if (inputEl.checked) {
    formSelectedAreas.add(inputEl.value);
  } else {
    formSelectedAreas.delete(inputEl.value);
  }

  updateFormAreaButtonLabel();
  initFormMachineDropdown(formSelectedAreas.size > 0 ? formSelectedAreas : null);
  syncFormHiddenInputs();
};

window.onFormMachineCheckboxChange = function(inputEl) {
  if (inputEl.checked) {
    formSelectedMachines.add(inputEl.value);
  } else {
    formSelectedMachines.delete(inputEl.value);
  }

  updateFormMachineButtonLabel();
  syncAffectedMachinesCount();

  if (formSelectedMachines.size === 1) {
    const singleCode = Array.from(formSelectedMachines)[0];
    applySingleMachineMetadata(singleCode);
  } else if (formSelectedMachines.size === 0) {
    clearMachineMetadata();
  }

  syncFormHiddenInputs();
};

function applySingleMachineMetadata(code) {
  if (!code || typeof MACHINE_MAP === "undefined" || !MACHINE_MAP[code]) return;
  const m = MACHINE_MAP[code];

  if (m.area && !formSelectedAreas.has(m.area)) {
    formSelectedAreas.clear();
    formSelectedAreas.add(m.area);
    const areaCbs = document.querySelectorAll("#listFormAreaCheckboxes input[type='checkbox']");
    areaCbs.forEach(cb => { cb.checked = (cb.value === m.area); });
    updateFormAreaButtonLabel();
  }

  const machineTypeInput = document.getElementById("machineType");
  if (machineTypeInput) machineTypeInput.value = `${m.name} [${m.process}]`;

  const processBadge = document.getElementById("processBadge");
  if (processBadge) {
    processBadge.textContent = m.process;
    processBadge.classList.remove("hidden");
  }

  const criticalProcesses = ["Unistage", "Stage-1", "Stage-2", "Mixing", "4Roll", "Extrusion", "Curing"];
  if (criticalProcesses.includes(m.process) || m.critical === "Yes" || m.isCritical === "Yes") {
    setCriticalMachine("Yes");
  } else {
    setCriticalMachine("No");
  }
}

function clearMachineMetadata() {
  const machineTypeInput = document.getElementById("machineType");
  if (machineTypeInput) machineTypeInput.value = "";
  const processBadge = document.getElementById("processBadge");
  if (processBadge) processBadge.classList.add("hidden");
  setCriticalMachine("No");
}

function updateFormAreaButtonLabel() {
  const lbl = document.getElementById("labelFormArea");
  const badge = document.getElementById("badgeFormAreaCount");
  const pBadge = document.getElementById("badgeFormAreaPanelCount");
  const totalAreas = (typeof YOKOHAMA_AREAS !== "undefined" && Array.isArray(YOKOHAMA_AREAS)) ? YOKOHAMA_AREAS.length : 8;

  const count = formSelectedAreas.size;
  if (pBadge) pBadge.textContent = `${count}/${totalAreas} Selected`;

  if (!lbl) return;

  if (count === 0) {
    lbl.textContent = "-- Select Area / Plant --";
    lbl.className = "text-slate-500 font-sans font-semibold";
    if (badge) badge.classList.add("hidden");
  } else if (count === 1) {
    const single = Array.from(formSelectedAreas)[0];
    lbl.textContent = `Area: ${single}`;
    lbl.className = "text-slate-900 font-sans font-bold";
    if (badge) {
      badge.textContent = "1";
      badge.classList.remove("hidden");
    }
  } else if (count === totalAreas) {
    lbl.textContent = `All Areas Selected (${totalAreas})`;
    lbl.className = "text-slate-900 font-sans font-bold";
    if (badge) {
      badge.textContent = `All (${totalAreas})`;
      badge.classList.remove("hidden");
    }
  } else {
    lbl.textContent = `${count} Areas Selected`;
    lbl.className = "text-slate-900 font-sans font-bold";
    if (badge) {
      badge.textContent = `${count}/${totalAreas}`;
      badge.classList.remove("hidden");
    }
  }
}

function updateFormMachineButtonLabel() {
  const lbl = document.getElementById("labelFormMachine");
  const badge = document.getElementById("badgeFormMachineCount");
  const pBadge = document.getElementById("badgeFormMachinePanelCount");
  const totalMachines = (typeof YOKOHAMA_MACHINES !== "undefined" && Array.isArray(YOKOHAMA_MACHINES)) ? YOKOHAMA_MACHINES.length : 437;

  const count = formSelectedMachines.size;
  if (pBadge) pBadge.textContent = `${count}/${totalMachines} Selected`;

  const affInput = document.getElementById("affectedMachines");
  if (affInput && count > 0) {
    affInput.value = count;
  }
  calculateTotalDowntime();

  if (!lbl) return;

  if (count === 0) {
    lbl.textContent = "-- Select Machine Code --";
    lbl.className = "text-slate-500 font-sans font-semibold";
    if (badge) badge.classList.add("hidden");
  } else if (count === 1) {
    const single = Array.from(formSelectedMachines)[0];
    const m = (typeof MACHINE_MAP !== "undefined") ? MACHINE_MAP[single] : null;
    lbl.textContent = m ? `${single} - ${m.name}` : single;
    lbl.className = "text-slate-900 font-mono font-bold";
    if (badge) {
      badge.textContent = "1";
      badge.classList.remove("hidden");
    }
  } else if (count === totalMachines) {
    lbl.textContent = `All Machines Selected (${totalMachines})`;
    lbl.className = "text-slate-900 font-sans font-bold";
    if (badge) {
      badge.textContent = `All (${totalMachines})`;
      badge.classList.remove("hidden");
    }
  } else {
    const arr = Array.from(formSelectedMachines);
    if (count <= 2) {
      lbl.textContent = arr.join(", ");
    } else {
      lbl.textContent = `${count} Machines Selected (${arr[0]}, ${arr[1]}...)`;
    }
    lbl.className = "text-slate-900 font-sans font-bold";
    if (badge) {
      badge.textContent = `${count}`;
      badge.classList.remove("hidden");
    }
  }
}

function calculateTotalDowntime() {
  const dtInput = document.getElementById("downtimeMinutes");
  const affInput = document.getElementById("affectedMachines");
  const totInput = document.getElementById("totalDowntimeMinutes");
  if (!dtInput || !totInput) return;
  const dt = parseInt(dtInput.value, 10) || 0;
  const aff = affInput ? (parseInt(affInput.value, 10) || 1) : 1;
  totInput.value = dt * aff;
}
window.calculateTotalDowntime = calculateTotalDowntime;

function syncFormHiddenInputs() {
  const areaInput = document.getElementById("area");
  const machineInput = document.getElementById("machineNo");

  if (areaInput) {
    areaInput.value = Array.from(formSelectedAreas).join(", ");
  }
  if (machineInput) {
    machineInput.value = Array.from(formSelectedMachines).join(", ");
  }
}
window.updateFormAreaButtonLabel = updateFormAreaButtonLabel;
window.updateFormMachineButtonLabel = updateFormMachineButtonLabel;
window.syncFormHiddenInputs = syncFormHiddenInputs;

function handleFormSubmit(e) {
  e.preventDefault();

  if (window.isDowntimeSubmitting) return;

  syncFormHiddenInputs();

  const issueDate = (document.getElementById("issueDate")?.value || "").trim();
  const nature = (document.getElementById("nature")?.value || "").trim();
  const area = (document.getElementById("area")?.value || "").trim();
  const machineNo = (document.getElementById("machineNo")?.value || "").trim();
  const isCritical = document.getElementById("isCritical") ? document.getElementById("isCritical").value : "No";
  const machineType = document.getElementById("machineType") ? document.getElementById("machineType").value : "";
  const downtimeMinutes = parseInt(document.getElementById("downtimeMinutes")?.value, 10);
  const affectedInput = document.getElementById("affectedMachines")?.value;
  const affectedMachines = parseInt(affectedInput, 10) || 1;
  const totalDowntimeMinutes = parseInt(document.getElementById("totalDowntimeMinutes")?.value, 10) || (downtimeMinutes * affectedMachines);
  const category = (document.getElementById("category")?.value || "").trim();
  const issueDetails = (document.getElementById("issueDetails")?.value || "").trim();
  const actionPlan = (document.getElementById("actionPlan")?.value || "").trim();

  const responsibility = (document.getElementById("responsibility")?.value || "").trim();
  const closedDate = (document.getElementById("closedDate")?.value || "").trim();
  const solvedBy = (document.getElementById("solvedBy")?.value || "").trim();
  const status = (document.getElementById("closureStatus")?.value || "Open").trim();
  const remarks = (document.getElementById("remarks")?.value || "").trim();

  // 1. Core Field Validations
  if (!issueDate || !/^\d{4}-\d{2}-\d{2}$/.test(issueDate)) {
    showToast("Please select a valid Issue Date (YYYY-MM-DD).", "warning");
    document.getElementById("issueDate")?.focus();
    return;
  }
  if (!area && formSelectedAreas.size === 0) {
    showToast("Please select at least one Area / Plant.", "warning");
    return;
  }
  if (!machineNo && formSelectedMachines.size === 0) {
    showToast("Please select at least one Machine Code.", "warning");
    return;
  }
  if (isNaN(downtimeMinutes) || downtimeMinutes <= 0) {
    showToast("Please enter a valid numeric downtime in minutes (must be greater than 0).", "warning");
    document.getElementById("downtimeMinutes")?.focus();
    return;
  }
  if (isNaN(affectedMachines) || affectedMachines < 1) {
    showToast("Affected machines count must be an integer of at least 1.", "warning");
    document.getElementById("affectedMachines")?.focus();
    return;
  }
  if (!issueDetails) {
    showToast("Please select or enter the Issue Details.", "warning");
    document.getElementById("issueDetails")?.focus();
    return;
  }
  if (!solvedBy) {
    showToast("Please select or specify the Responsible Person.", "warning");
    document.getElementById("solvedBy")?.focus();
    return;
  }

  // 2. Status & Closed Date Validations
  const isClosed = status === "Completed" || status === "Closed";
  let finalClosedDate = "";

  if (isClosed) {
    if (!closedDate) {
      showToast("Closed Date is strictly required when Status is Completed.", "warning");
      const cEl = document.getElementById("closedDate");
      if (cEl) { cEl.disabled = false; cEl.focus(); }
      return;
    }
    if (!/^\d{4}-\d{2}-\d{2}$/.test(closedDate)) {
      showToast("Closed Date must be in YYYY-MM-DD format.", "warning");
      return;
    }
    if (closedDate < issueDate) {
      showToast(`Closed Date (${closedDate}) cannot be earlier than Issue Date (${issueDate}).`, "error");
      document.getElementById("closedDate")?.focus();
      return;
    }
    finalClosedDate = closedDate;
  } else {
    finalClosedDate = "";
  }

  const totalMachinesCount = (typeof YOKOHAMA_MACHINES !== "undefined" && Array.isArray(YOKOHAMA_MACHINES)) ? YOKOHAMA_MACHINES.length : 437;
  const totalAreasCount = (typeof YOKOHAMA_AREAS !== "undefined" && Array.isArray(YOKOHAMA_AREAS)) ? YOKOHAMA_AREAS.length : 8;

  const machinesList = formSelectedMachines.size > 0
    ? Array.from(formSelectedMachines)
    : (machineNo ? machineNo.split(",").map(s => s.trim()).filter(Boolean) : []);

  const areasList = formSelectedAreas.size > 0
    ? Array.from(formSelectedAreas)
    : (area ? area.split(",").map(s => s.trim()).filter(Boolean) : []);

  const isAllMachines = (machinesList.length >= totalMachinesCount) || (document.getElementById("labelFormMachine")?.textContent?.includes("All Machines"));
  const isAllAreas = (areasList.length >= totalAreasCount) || (document.getElementById("labelFormArea")?.textContent?.includes("All Areas"));

  // Build single line representation for Machine, Area, Process, and Machine Type
  let finalMachineNo = "ALL";
  let finalMachineType = "ALL MACHINES";
  let finalProcess = "ALL";
  let finalArea = "ALL";
  let finalCrit = (isCritical === "Yes") ? "Yes" : "No";

  if (isAllMachines) {
    finalMachineNo = "ALL";
    finalMachineType = "ALL MACHINES";
    finalProcess = "ALL";
    finalArea = isAllAreas ? "ALL" : (areasList.length > 0 ? areasList.join(", ") : "ALL");
  } else if (machinesList.length === 1) {
    finalMachineNo = machinesList[0];
    const mObj = (typeof MACHINE_MAP !== "undefined") ? MACHINE_MAP[finalMachineNo] : null;
    finalMachineType = mObj ? mObj.name : (machineType || finalMachineNo);
    finalProcess = mObj ? mObj.process : (document.getElementById("processBadge")?.textContent || "General");
    finalArea = (mObj && mObj.area) ? mObj.area : (areasList.length > 0 ? areasList[0] : (area || "Plant 1"));
    if (mObj && (mObj.critical === "Yes" || mObj.isCritical === "Yes")) finalCrit = "Yes";
  } else if (machinesList.length > 1) {
    finalMachineNo = machinesList.join(", ");
    finalMachineType = `Multiple Machines (${machinesList.length} Units)`;

    const procsSet = new Set();
    const machAreasSet = new Set();
    machinesList.forEach(mCode => {
      const mObj = (typeof MACHINE_MAP !== "undefined") ? MACHINE_MAP[mCode] : null;
      if (mObj) {
        if (mObj.process) procsSet.add(mObj.process);
        if (mObj.area) machAreasSet.add(mObj.area);
        if (mObj.critical === "Yes" || mObj.isCritical === "Yes") finalCrit = "Yes";
      }
    });

    if (isAllAreas || machAreasSet.size >= totalAreasCount) {
      finalArea = "ALL";
    } else if (areasList.length > 0) {
      finalArea = areasList.join(", ");
    } else if (machAreasSet.size > 0) {
      finalArea = Array.from(machAreasSet).join(", ");
    } else {
      finalArea = area || "ALL";
    }

    if (procsSet.size === 0) {
      finalProcess = "ALL";
    } else if (procsSet.size === 1) {
      finalProcess = Array.from(procsSet)[0];
    } else {
      finalProcess = Array.from(procsSet).join(", ");
    }
  } else {
    finalMachineNo = "ALL";
    finalMachineType = "ALL MACHINES";
    finalProcess = "ALL";
    finalArea = isAllAreas ? "ALL" : (areasList.length > 0 ? areasList.join(", ") : "ALL");
  }

  if (isAllAreas) {
    finalArea = "ALL";
    finalProcess = "ALL";
  }

  // 3. Duplicate Submission Detection (Step 13)
  if (!editingRecordId) {
    const isDuplicate = downtimeRecords.some(r =>
      r.issueDate === issueDate &&
      r.machineNo === finalMachineNo &&
      (r.issueDetails || '').trim().toLowerCase() === issueDetails.toLowerCase() &&
      (parseInt(r.downtimeMinutes, 10) || 0) === downtimeMinutes
    );
    if (isDuplicate) {
      showToast(`Duplicate entry rejected: an incident for ${finalMachineNo} on ${issueDate} with identical downtime and details already exists.`, "warning");
      return;
    }
  }

  window.isDowntimeSubmitting = true;
  const submitBtn = document.getElementById("btn-save-record");
  const originalBtnHTML = submitBtn ? submitBtn.innerHTML : "";
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin mr-1.5"></i> Saving...`;
  }

  try {
    const currentUser = (typeof getCurrentUser === "function") ? getCurrentUser() : null;
    const currentActor = currentUser ? (currentUser.displayName || currentUser.username) : "Plant Staff";
    const currentUsername = currentUser ? currentUser.username : "staff";
    const issueTime = (document.getElementById("issueTime")?.value || "").trim();
    const closedTime = (document.getElementById("closedTime")?.value || "").trim();
    const shift = (document.getElementById("shift")?.value || document.getElementById("current-shift-badge")?.textContent || "").trim();

    if (editingRecordId) {
      const index = downtimeRecords.findIndex(r => r.id === editingRecordId);
      if (index !== -1) {
        const updatedRec = {
          ...downtimeRecords[index],
          issueDate,
          date: issueDate,
          issueTime,
          closedTime,
          shift,
          nature,
          area: finalArea,
          process: finalProcess,
          machineNo: finalMachineNo,
          machineType: finalMachineType,
          isCritical: finalCrit,
          downtimeMinutes,
          affectedMachines,
          totalDowntimeMinutes,
          category,
          issueDetails,
          actionPlan,
          responsibility,
          closedDate: finalClosedDate,
          solvedBy,
          responsiblePerson: solvedBy,
          status,
          remarks,
          updatedBy: currentUsername,
          actorName: currentActor,
          updatedAt: new Date().toISOString()
        };
        downtimeRecords[index] = updatedRec;
        showToast(`Record ${editingRecordId} updated successfully!`, "success");
        editingRecordId = null;

        if (typeof window.updateCloudIncident === "function") {
          window.updateCloudIncident(updatedRec).catch(() => {
            if (typeof window.queueMutation === "function") window.queueMutation('UPDATE_INCIDENT', updatedRec);
          });
        }
      }
    } else {
      // SINGLE LINE OUTPUT FOR THE ENTIRE BREAKDOWN (SEC-05: Audit Attributed)
      const year = new Date().getFullYear();
      const recordNum = String(downtimeRecords.length + 1).padStart(3, "0");
      const newId = `YOKO-DT-${year}-${recordNum}`;

      const newRecord = {
        id: newId,
        issueDate,
        date: issueDate,
        issueTime,
        closedTime,
        shift,
        nature,
        area: finalArea,
        process: finalProcess,
        machineNo: finalMachineNo,
        machineType: finalMachineType,
        isCritical: finalCrit,
        downtimeMinutes,
        affectedMachines,
        totalDowntimeMinutes,
        category,
        issueDetails,
        actionPlan,
        responsibility,
        closedDate: finalClosedDate,
        solvedBy,
        responsiblePerson: solvedBy,
        status,
        remarks,
        createdBy: currentUsername,
        createdByName: currentActor,
        actorName: currentActor,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      downtimeRecords.unshift(newRecord);
      showToast(`Downtime entry ${newId} saved as a single line output (${finalMachineNo} • ${finalArea} • ${finalProcess})!`, "success");

      if (typeof window.insertCloudIncident === "function") {
        window.insertCloudIncident(newRecord).catch(() => {
          if (typeof window.queueMutation === "function") window.queueMutation('INSERT_INCIDENT', newRecord);
        });
      }
    }

    saveToStorage();
    window.downtimeRecords = downtimeRecords;
    resetForm();

    // Refresh multi-select filter lists on table as well
    initMachineMultiSelectDropdown();
    initAreaMultiSelectDropdown();
    populateDashboardMonths();
    updateMaintenanceLogCount();

    const user = getCurrentUser();
    if (user && (user.allowedTabs.includes("logs") || user.allowedTabs.includes("kpi"))) {
      renderRecordsTable();
      renderKPIs();
      renderCharts();
    }
  } finally {
    window.isDowntimeSubmitting = false;
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `<i class="fa-solid fa-floppy-disk mr-1.5"></i> Save Entry`;
    }
  }
}
window.handleFormSubmit = handleFormSubmit;

function resetForm() {
  document.getElementById("downtimeForm").reset();
  editingRecordId = null;
  
  setFormNature(masterNatures.includes("MES") ? "MES" : (masterNatures[0] || "MES"));

  const btnCompleted = document.getElementById("btn-status-completed");
  const btnOpen = document.getElementById("btn-status-open");
  const closedDateInput = document.getElementById("closedDate");
  const closedDateContainer = document.getElementById("closed-date-container");

  if (btnCompleted && btnOpen) {
    document.getElementById("closureStatus").value = "Open";
    btnOpen.className = "segmented-option active-open";
    btnCompleted.className = "segmented-option";
    if (closedDateContainer) closedDateContainer.style.opacity = "0.6";
  }

  if (closedDateInput) {
    closedDateInput.value = "";
    closedDateInput.disabled = true;
  }

  const saveBtn = document.getElementById("btn-save-record");
  if (saveBtn) {
    saveBtn.innerHTML = `<i class="fa-solid fa-floppy-disk mr-1.5"></i> Save Entry`;
  }

  if (document.getElementById("machineType")) document.getElementById("machineType").value = "";
  initMachineSelector();
  setCriticalMachine("No");

  formSelectedAreas.clear();
  formSelectedMachines.clear();
  window.formSelectedAreas = formSelectedAreas;
  window.formSelectedMachines = formSelectedMachines;
  initFormAreaDropdown();
  initFormMachineDropdown();
  updateFormAreaButtonLabel();
  updateFormMachineButtonLabel();
  syncFormHiddenInputs();
  populateDefaultDates();

  const catEl = document.getElementById("category");
  if (catEl) catEl.value = "MES";
  const affInput = document.getElementById("affectedMachines");
  if (affInput) affInput.value = 1;
  const totInput = document.getElementById("totalDowntimeMinutes");
  if (totInput) totInput.value = "";

  const issueInput = document.getElementById("issueDetails");
  if (issueInput) issueInput.value = "";
  const actionInput = document.getElementById("actionPlan");
  if (actionInput) actionInput.value = "";
}
window.resetForm = resetForm;


window.promptEditSelectedTechnician = function() {
  const techSelect = document.getElementById("solvedBy");
  const currentTech = techSelect ? techSelect.value : "";

  if (!currentTech) {
    showToast("Please select a Responsible Person from the dropdown to edit, or manage them in Master Settings.", "warning");
    return;
  }

  const newName = prompt(`Edit / Rename Responsible Person "${currentTech}":`, currentTech);
  if (newName === null) return;
  const trimmed = newName.trim();
  if (!trimmed) {
    showToast("Responsible Person name cannot be empty.", "warning");
    return;
  }

  if (trimmed.toLowerCase() !== currentTech.toLowerCase() && technicians.some(t => t.toLowerCase() === trimmed.toLowerCase())) {
    showToast(`Responsible Person "${trimmed}" already exists!`, "warning");
    return;
  }

  const idx = technicians.findIndex(t => t.toLowerCase() === currentTech.toLowerCase());
  if (idx !== -1) {
    technicians[idx] = trimmed;
  } else {
    technicians.push(trimmed);
  }

  // Sync historical records
  let updatedCount = 0;
  downtimeRecords.forEach(r => {
    if (r.solvedBy && r.solvedBy.toLowerCase() === currentTech.toLowerCase()) {
      r.solvedBy = trimmed;
      updatedCount++;
    }
  });
  if (updatedCount > 0) saveToStorage();

  saveTechsToStorage();
  initTechniciansDropdown();
  if (techSelect) techSelect.value = trimmed;
  if (typeof renderMasterPersonnelGrid === "function") renderMasterPersonnelGrid();
  if (typeof renderRecordsTable === "function") renderRecordsTable();

  showToast(`Responsible Person "${currentTech}" updated to "${trimmed}" (${updatedCount} records synced)`, "success");
};

function promptAddNewTechnician() {
  const name = prompt("Enter new Responsible Person name:");
  if (name && name.trim()) {
    const trimmed = name.trim();
    if (!technicians.includes(trimmed)) {
      technicians.push(trimmed);
      saveTechsToStorage();
      initTechniciansDropdown();
      document.getElementById("solvedBy").value = trimmed;
      if (typeof renderMasterPersonnelGrid === "function") renderMasterPersonnelGrid();
      showToast(`Responsible Person "${trimmed}" added to directory!`, "success");
    } else {
      document.getElementById("solvedBy").value = trimmed;
      showToast(`Responsible Person "${trimmed}" already in directory.`, "info");
    }
  }
}

// --- Category Badge & Telemetry Strip Helpers ---
function getCategoryBadge(category) {
  const cat = (category || "").trim();
  switch (cat) {
    case "NSNL":
      return `<span class="inline-flex items-center px-2.5 py-1 rounded text-[11px] font-bold bg-rose-50 text-rose-700 border border-rose-200 shadow-2xs"><i class="fa-solid fa-triangle-exclamation mr-1 text-[10px] text-rose-600"></i>NSNL</span>`;
    case "IPC":
      return `<span class="inline-flex items-center px-2.5 py-1 rounded text-[11px] font-bold bg-slate-100 text-slate-800 border border-slate-300 shadow-2xs"><i class="fa-solid fa-microchip mr-1 text-[10px] text-slate-700"></i>IPC</span>`;
    case "Printer":
      return `<span class="inline-flex items-center px-2.5 py-1 rounded text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-200 shadow-2xs"><i class="fa-solid fa-print mr-1 text-[10px] text-blue-600"></i>Printer</span>`;
    case "Scanner":
      return `<span class="inline-flex items-center px-2.5 py-1 rounded text-[11px] font-bold bg-amber-50 text-amber-800 border border-amber-200 shadow-2xs"><i class="fa-solid fa-barcode mr-1 text-[10px] text-amber-600"></i>Scanner</span>`;
    case "Infra":
      return `<span class="inline-flex items-center px-2.5 py-1 rounded text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-2xs"><i class="fa-solid fa-network-wired mr-1 text-[10px] text-emerald-600"></i>Infra</span>`;
    case "MES":
      return `<span class="inline-flex items-center px-2.5 py-1 rounded text-[11px] font-bold bg-purple-50 text-purple-700 border border-purple-200 shadow-2xs"><i class="fa-solid fa-gears mr-1 text-[10px] text-purple-600"></i>MES</span>`;
    case "keyboard":
    case "Hardware / PC":
      return `<span class="inline-flex items-center px-2.5 py-1 rounded text-[11px] font-bold bg-cyan-50 text-cyan-700 border border-cyan-200 shadow-2xs"><i class="fa-solid fa-keyboard mr-1 text-[10px] text-cyan-600"></i>${cat}</span>`;
    default:
      return `<span class="inline-flex items-center px-2.5 py-1 rounded text-[11px] font-bold bg-slate-100 text-slate-700 border border-slate-200 shadow-2xs"><i class="fa-solid fa-tag mr-1 text-[10px] text-slate-400"></i>${cat || 'Other'}</span>`;
  }
}

function updateTableCategoryStrip() {
  const stripEl = document.getElementById("categoryBadgesStrip");
  const dateIndEl = document.getElementById("dateFilterActiveIndicator");
  if (!stripEl) return;

  if (dateIndEl) {
    if (currentFilter.dateFrom && currentFilter.dateTo) {
      dateIndEl.innerHTML = `<i class="fa-regular fa-calendar-check text-[#E60012] mr-1"></i> <span class="text-slate-900 font-bold">${currentFilter.dateFrom}</span> to <span class="text-slate-900 font-bold">${currentFilter.dateTo}</span>`;
    } else if (currentFilter.dateFrom) {
      dateIndEl.innerHTML = `<i class="fa-regular fa-calendar-check text-[#E60012] mr-1"></i> Date: <span class="text-slate-900 font-bold">${currentFilter.dateFrom}</span>`;
    } else if (currentFilter.dateTo) {
      dateIndEl.innerHTML = `<i class="fa-regular fa-calendar-check text-[#E60012] mr-1"></i> Up to: <span class="text-slate-900 font-bold">${currentFilter.dateTo}</span>`;
    } else {
      dateIndEl.innerHTML = `<i class="fa-regular fa-calendar text-slate-400 mr-1"></i> All Dates (${downtimeRecords.length} Records)`;
    }
  }

  // Count records for currently active date & criteria (independent of category filter so user sees options)
  const baseForCategory = downtimeRecords.filter(item => {
    if (currentFilter.search) {
      const q = currentFilter.search;
      const matchSearch = 
        item.id.toLowerCase().includes(q) ||
        item.machineNo.toLowerCase().includes(q) ||
        item.machineType.toLowerCase().includes(q) ||
        item.area.toLowerCase().includes(q) ||
        (item.process && item.process.toLowerCase().includes(q)) ||
        item.issueDetails.toLowerCase().includes(q) ||
        (item.responsibility && item.responsibility.toLowerCase().includes(q)) ||
        item.solvedBy.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        (item.isCritical && item.isCritical.toLowerCase() === "yes" && "critical".includes(q)) ||
        (item.remarks && item.remarks.toLowerCase().includes(q));
      if (!matchSearch) return false;
    }
    if (currentFilter.nature !== "ALL" && item.nature !== currentFilter.nature) return false;
    if (currentFilter.status !== "ALL" && item.status !== currentFilter.status) return false;
    if (currentFilter.area !== "ALL" && item.area !== currentFilter.area) return false;
    if (currentFilter.process !== "ALL" && item.process !== currentFilter.process) return false;
    if (currentFilter.tech && currentFilter.tech !== "ALL" && item.solvedBy !== currentFilter.tech) return false;
    if (currentFilter.dateFrom && currentFilter.dateTo) {
      if (item.issueDate < currentFilter.dateFrom || item.issueDate > currentFilter.dateTo) return false;
    } else if (currentFilter.dateFrom) {
      if (item.issueDate !== currentFilter.dateFrom) return false;
    } else if (currentFilter.dateTo) {
      if (item.issueDate > currentFilter.dateTo) return false;
    }
    return true;
  });

  const counts = {};
  baseForCategory.forEach(r => {
    const cat = r.category || "Other";
    counts[cat] = (counts[cat] || 0) + 1;
  });

  const catKeys = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);

  const allActive = currentFilter.category === "ALL";
  const allBtn = `
    <button type="button" onclick="setCategoryFilter('ALL')" class="px-2.5 py-1 rounded text-[11px] font-bold transition-all cursor-pointer ${allActive ? 'bg-slate-900 text-white shadow-xs' : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'}">
      ALL (${baseForCategory.length})
    </button>
  `;

  const catPills = catKeys.map(cat => {
    const active = currentFilter.category === cat;
    let colorClass = active ? "bg-[#E60012] text-white shadow-xs" : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100";
    return `
      <button type="button" onclick="setCategoryFilter('${cat}')" class="px-2.5 py-1 rounded text-[11px] font-bold transition-all cursor-pointer ${colorClass}">
        ${cat}: <span class="font-mono">${counts[cat]}</span>
      </button>
    `;
  }).join("");

  stripEl.innerHTML = allBtn + (catPills || '<span class="text-[11px] text-slate-400 italic">No incidents</span>');
}

window.setCategoryFilter = function(cat) {
  currentFilter.category = (currentFilter.category === cat && cat !== "ALL") ? "ALL" : cat;
  const catSelect = document.getElementById("filterCategory");
  if (catSelect) catSelect.value = currentFilter.category;
  renderRecordsTable();
};

window.sortTable = function(col) {
  if (tableSort.column === col) {
    tableSort.direction = tableSort.direction === "asc" ? "desc" : "asc";
  } else {
    tableSort.column = col;
    tableSort.direction = (col === "date" || col === "downtime") ? "desc" : "asc";
  }
  updateSortIcons();
  renderRecordsTable();
};

function updateSortIcons() {
  const cols = ["id", "date", "nature", "category", "area", "downtime", "affected", "totalDowntime", "tech"];
  cols.forEach(c => {
    const icon = document.getElementById(`sortIcon-${c}`);
    if (!icon) return;
    if (tableSort.column === c) {
      icon.className = tableSort.direction === "asc" ? "fa-solid fa-sort-up text-[10px] ml-1 text-red-500" : "fa-solid fa-sort-down text-[10px] ml-1 text-red-500";
    } else {
      icon.className = "fa-solid fa-sort text-[10px] ml-1 text-slate-400";
    }
  });
}

// --- Render Records Table ---
// =========================================================================
// MULTI-SELECT FILTER SYSTEM (MACHINE CODE & AREA/PLANT)
// With Select All, Unselect All, Real-Time Search, and Badge Counting
// =========================================================================
let allUniqueMachines = [];
window.allUniqueMachines = allUniqueMachines;
let allUniqueAreas = [];
window.allUniqueAreas = allUniqueAreas;

function initMachineMultiSelectDropdown() {
  const container = document.getElementById("listMachineCheckboxes");
  if (!container) return;

  const machMap = new Map();
  if (typeof YOKOHAMA_MACHINES !== "undefined" && Array.isArray(YOKOHAMA_MACHINES)) {
    YOKOHAMA_MACHINES.forEach(m => {
      machMap.set(m.code, m.name || m.code);
    });
  }
  if (typeof downtimeRecords !== "undefined" && Array.isArray(downtimeRecords)) {
    downtimeRecords.forEach(r => {
      if (r.machineNo && !machMap.has(r.machineNo)) {
        machMap.set(r.machineNo, r.machineType || r.machineNo);
      }
    });
  }

  allUniqueMachines = Array.from(machMap.entries()).sort((a, b) => a[0].localeCompare(b[0]));
  window.allUniqueMachines = allUniqueMachines;
  renderMachineCheckboxList();
  updateMachineFilterButtonLabel();
}
window.initMachineMultiSelectDropdown = initMachineMultiSelectDropdown;

function renderMachineCheckboxList() {
  const container = document.getElementById("listMachineCheckboxes");
  if (!container) return;

  const searchVal = (document.getElementById("searchMachineInDropdown")?.value || "").trim().toLowerCase();
  const isAll = (currentFilter.selectedMachines === null);
  const selectedSet = currentFilter.selectedMachines || new Set(allUniqueMachines.map(m => m[0]));

  let html = "";
  allUniqueMachines.forEach(([code, name]) => {
    const textToMatch = (code + " " + name).toLowerCase();
    const isVisible = !searchVal || textToMatch.includes(searchVal);
    const isChecked = isAll || selectedSet.has(code);

    html += `
      <label class="machine-checkbox-item flex items-center justify-between gap-2 px-2 py-1.5 hover:bg-slate-50 rounded cursor-pointer ${isVisible ? '' : 'hidden'}" data-code="${escapeHtml(code)}">
        <div class="flex items-center gap-2 overflow-hidden">
          <input type="checkbox" value="${escapeHtml(code)}" ${isChecked ? 'checked' : ''} onchange="onMachineCheckboxChange(this)" class="w-3.5 h-3.5 rounded text-[#E60012] focus:ring-red-500 border-slate-300">
          <span class="font-mono font-bold text-slate-800 text-xs">${escapeHtml(code)}</span>
          <span class="text-slate-400 text-[11px] truncate max-w-[140px]">${escapeHtml(name)}</span>
        </div>
      </label>
    `;
  });

  if (!html) {
    html = `<div class="p-3 text-center text-xs text-slate-400">No matching machines found</div>`;
  }
  container.innerHTML = html;
  updateMachineBadgeCount();
}

function initAreaMultiSelectDropdown() {
  const container = document.getElementById("listAreaCheckboxes");
  if (!container) return;

  const areaSet = new Set();
  if (typeof YOKOHAMA_AREAS !== "undefined" && Array.isArray(YOKOHAMA_AREAS)) {
    YOKOHAMA_AREAS.forEach(a => areaSet.add(a));
  }
  if (typeof downtimeRecords !== "undefined" && Array.isArray(downtimeRecords)) {
    downtimeRecords.forEach(r => { if (r.area) areaSet.add(r.area); });
  }

  allUniqueAreas = Array.from(areaSet).sort((a, b) => a.localeCompare(b));
  window.allUniqueAreas = allUniqueAreas;
  renderAreaCheckboxList();
  updateAreaFilterButtonLabel();
}
window.initAreaMultiSelectDropdown = initAreaMultiSelectDropdown;

function renderAreaCheckboxList() {
  const container = document.getElementById("listAreaCheckboxes");
  if (!container) return;

  const searchVal = (document.getElementById("searchAreaInDropdown")?.value || "").trim().toLowerCase();
  const isAll = (currentFilter.selectedAreas === null);
  const selectedSet = currentFilter.selectedAreas || new Set(allUniqueAreas);

  let html = "";
  allUniqueAreas.forEach(area => {
    const isVisible = !searchVal || area.toLowerCase().includes(searchVal);
    const isChecked = isAll || selectedSet.has(area);

    html += `
      <label class="area-checkbox-item flex items-center justify-between gap-2 px-2 py-1.5 hover:bg-slate-50 rounded cursor-pointer ${isVisible ? '' : 'hidden'}" data-area="${escapeHtml(area)}">
        <div class="flex items-center gap-2 overflow-hidden">
          <input type="checkbox" value="${escapeHtml(area)}" ${isChecked ? 'checked' : ''} onchange="onAreaCheckboxChange(this)" class="w-3.5 h-3.5 rounded text-[#E60012] focus:ring-red-500 border-slate-300">
          <span class="font-semibold text-slate-800 text-xs">${escapeHtml(area)}</span>
        </div>
      </label>
    `;
  });

  if (!html) {
    html = `<div class="p-3 text-center text-xs text-slate-400">No matching areas found</div>`;
  }
  container.innerHTML = html;
  updateAreaBadgeCount();
}

window.toggleMultiSelectDropdown = function(type, event) {
  if (event) event.stopPropagation();
  const mPanel = document.getElementById("panelMachineDropdown");
  const aPanel = document.getElementById("panelAreaDropdown");

  if (type === "machine") {
    if (aPanel) aPanel.classList.add("hidden");
    if (mPanel) {
      const isHidden = mPanel.classList.contains("hidden");
      if (isHidden) {
        mPanel.classList.remove("hidden");
        document.getElementById("searchMachineInDropdown")?.focus();
      } else {
        mPanel.classList.add("hidden");
      }
    }
  } else if (type === "area") {
    if (mPanel) mPanel.classList.add("hidden");
    if (aPanel) {
      const isHidden = aPanel.classList.contains("hidden");
      if (isHidden) {
        aPanel.classList.remove("hidden");
        document.getElementById("searchAreaInDropdown")?.focus();
      } else {
        aPanel.classList.add("hidden");
      }
    }
  }
};

window.filterMachineListInDropdown = function() {
  const q = (document.getElementById("searchMachineInDropdown")?.value || "").trim().toLowerCase();
  const labels = document.querySelectorAll("#listMachineCheckboxes .machine-checkbox-item");
  labels.forEach(lbl => {
    const code = (lbl.getAttribute("data-code") || "").toLowerCase();
    const text = lbl.textContent.toLowerCase();
    if (!q || code.includes(q) || text.includes(q)) {
      lbl.classList.remove("hidden");
    } else {
      lbl.classList.add("hidden");
    }
  });
};

window.filterAreaListInDropdown = function() {
  const q = (document.getElementById("searchAreaInDropdown")?.value || "").trim().toLowerCase();
  const labels = document.querySelectorAll("#listAreaCheckboxes .area-checkbox-item");
  labels.forEach(lbl => {
    const area = (lbl.getAttribute("data-area") || "").toLowerCase();
    if (!q || area.includes(q)) {
      lbl.classList.remove("hidden");
    } else {
      lbl.classList.add("hidden");
    }
  });
};

window.selectAllMachines = function(selectAll) {
  const searchVal = (document.getElementById("searchMachineInDropdown")?.value || "").trim().toLowerCase();
  const checkboxes = document.querySelectorAll("#listMachineCheckboxes input[type='checkbox']");

  if (!currentFilter.selectedMachines) {
    currentFilter.selectedMachines = new Set(allUniqueMachines.map(m => m[0]));
  }

  checkboxes.forEach(cb => {
    const parentLabel = cb.closest(".machine-checkbox-item");
    const isVisible = parentLabel && !parentLabel.classList.contains("hidden");
    if (isVisible) {
      cb.checked = selectAll;
      if (selectAll) {
        currentFilter.selectedMachines.add(cb.value);
      } else {
        currentFilter.selectedMachines.delete(cb.value);
      }
    }
  });

  if (selectAll && (!searchVal || currentFilter.selectedMachines.size === allUniqueMachines.length)) {
    currentFilter.selectedMachines = null; // null = all selected
  }

  updateMachineFilterButtonLabel();
  updateMachineBadgeCount();
  renderRecordsTable();
  updateTableCategoryStrip();
};

window.selectAllAreas = function(selectAll) {
  const searchVal = (document.getElementById("searchAreaInDropdown")?.value || "").trim().toLowerCase();
  const checkboxes = document.querySelectorAll("#listAreaCheckboxes input[type='checkbox']");

  if (!currentFilter.selectedAreas) {
    currentFilter.selectedAreas = new Set(allUniqueAreas);
  }

  checkboxes.forEach(cb => {
    const parentLabel = cb.closest(".area-checkbox-item");
    const isVisible = parentLabel && !parentLabel.classList.contains("hidden");
    if (isVisible) {
      cb.checked = selectAll;
      if (selectAll) {
        currentFilter.selectedAreas.add(cb.value);
      } else {
        currentFilter.selectedAreas.delete(cb.value);
      }
    }
  });

  if (selectAll && (!searchVal || currentFilter.selectedAreas.size === allUniqueAreas.length)) {
    currentFilter.selectedAreas = null; // null = all selected
  }

  updateAreaFilterButtonLabel();
  updateAreaBadgeCount();
  renderRecordsTable();
  updateTableCategoryStrip();
};

window.onMachineCheckboxChange = function(inputEl) {
  if (currentFilter.selectedMachines === null) {
    currentFilter.selectedMachines = new Set(allUniqueMachines.map(m => m[0]));
  }

  if (inputEl.checked) {
    currentFilter.selectedMachines.add(inputEl.value);
  } else {
    currentFilter.selectedMachines.delete(inputEl.value);
  }

  if (currentFilter.selectedMachines.size === allUniqueMachines.length) {
    currentFilter.selectedMachines = null; // all
  }

  updateMachineFilterButtonLabel();
  updateMachineBadgeCount();
  renderRecordsTable();
  updateTableCategoryStrip();
};

window.onAreaCheckboxChange = function(inputEl) {
  if (currentFilter.selectedAreas === null) {
    currentFilter.selectedAreas = new Set(allUniqueAreas);
  }

  if (inputEl.checked) {
    currentFilter.selectedAreas.add(inputEl.value);
  } else {
    currentFilter.selectedAreas.delete(inputEl.value);
  }

  if (currentFilter.selectedAreas.size === allUniqueAreas.length) {
    currentFilter.selectedAreas = null; // all
  }

  updateAreaFilterButtonLabel();
  updateAreaBadgeCount();
  renderRecordsTable();
  updateTableCategoryStrip();
};

function updateMachineBadgeCount() {
  const badge = document.getElementById("badgeMachineSelectionCount");
  if (!badge) return;
  if (currentFilter.selectedMachines === null) {
    badge.textContent = `All (${allUniqueMachines.length})`;
  } else {
    badge.textContent = `${currentFilter.selectedMachines.size}/${allUniqueMachines.length}`;
  }
}

function updateAreaBadgeCount() {
  const badge = document.getElementById("badgeAreaSelectionCount");
  if (!badge) return;
  if (currentFilter.selectedAreas === null) {
    badge.textContent = `All (${allUniqueAreas.length})`;
  } else {
    badge.textContent = `${currentFilter.selectedAreas.size}/${allUniqueAreas.length}`;
  }
}

function updateMachineFilterButtonLabel() {
  const lbl = document.getElementById("labelMachineFilter");
  if (!lbl) return;
  if (currentFilter.selectedMachines === null) {
    lbl.textContent = "All Machine Codes";
  } else {
    const count = currentFilter.selectedMachines.size;
    if (count === 0) {
      lbl.textContent = "Machine: None";
    } else if (count === 1) {
      const first = Array.from(currentFilter.selectedMachines)[0];
      lbl.textContent = `Machine: ${first}`;
    } else if (count === 2) {
      const arr = Array.from(currentFilter.selectedMachines);
      lbl.textContent = `${arr[0]}, ${arr[1]}`;
    } else {
      lbl.textContent = `Machines: ${count} Selected`;
    }
  }
}

function updateAreaFilterButtonLabel() {
  const lbl = document.getElementById("labelAreaFilter");
  if (!lbl) return;
  if (currentFilter.selectedAreas === null) {
    lbl.textContent = "All Area / Plants";
  } else {
    const count = currentFilter.selectedAreas.size;
    if (count === 0) {
      lbl.textContent = "Area: None";
    } else if (count === 1) {
      const first = Array.from(currentFilter.selectedAreas)[0];
      lbl.textContent = `Area: ${first}`;
    } else if (count === 2) {
      const arr = Array.from(currentFilter.selectedAreas);
      lbl.textContent = `${arr[0]}, ${arr[1]}`;
    } else {
      lbl.textContent = `Areas: ${count} Selected`;
    }
  }
}

window.resetAllTableFilters = function() {
  currentFilter.search = "";
  currentFilter.nature = "ALL";
  currentFilter.status = "ALL";
  currentFilter.area = "ALL";
  currentFilter.process = "ALL";
  currentFilter.tech = "ALL";
  currentFilter.category = "ALL";
  currentFilter.critical = "ALL";
  currentFilter.dateFrom = "";
  currentFilter.dateTo = "";
  currentFilter.selectedMachines = null;
  currentFilter.selectedAreas = null;
  window.currentFilter = currentFilter;

  const searchEl = document.getElementById("tableSearch");
  if (searchEl) searchEl.value = "";

  const dateFromEl = document.getElementById("filterDate");
  if (dateFromEl) dateFromEl.value = "";

  const dateToEl = document.getElementById("filterDateTo");
  if (dateToEl) dateToEl.value = "";

  const natureEl = document.getElementById("filterNature");
  if (natureEl) natureEl.value = "ALL";

  const statusEl = document.getElementById("filterStatus");
  if (statusEl) statusEl.value = "ALL";

  const catEl = document.getElementById("filterCategory");
  if (catEl) catEl.value = "ALL";

  const procEl = document.getElementById("filterProcess");
  if (procEl) procEl.value = "ALL";

  const techEl = document.getElementById("filterTechnician");
  if (techEl) techEl.value = "ALL";

  const critEl = document.getElementById("filterCritical");
  if (critEl) critEl.value = "ALL";

  renderMachineCheckboxList();
  updateMachineFilterButtonLabel();
  renderAreaCheckboxList();
  updateAreaFilterButtonLabel();

  renderRecordsTable();
  updateTableCategoryStrip();
  showToast("All table search and filters have been reset.", "info");
};

let tableCurrentPage = 1;
const tablePageSize = 50;
window.tableCurrentPage = tableCurrentPage;
window.tablePageSize = tablePageSize;

window.setTablePage = function(newPage) {
  tableCurrentPage = Math.max(1, newPage);
  renderRecordsTable();
};

function renderRecordsTable() {
  const tbody = document.getElementById("recordsTableBody");
  const countEl = document.getElementById("recordCountBadge");
  const showingInfo = document.getElementById("showingInfo");
  if (!tbody) return;

  const filtered = downtimeRecords.filter(item => {
    if (currentFilter.search) {
      const q = currentFilter.search;
      const matchSearch = 
        item.id.toLowerCase().includes(q) ||
        item.machineNo.toLowerCase().includes(q) ||
        item.machineType.toLowerCase().includes(q) ||
        item.area.toLowerCase().includes(q) ||
        (item.process && item.process.toLowerCase().includes(q)) ||
        item.issueDetails.toLowerCase().includes(q) ||
        (item.responsibility && item.responsibility.toLowerCase().includes(q)) ||
        item.solvedBy.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        (item.isCritical && item.isCritical.toLowerCase() === "yes" && "critical".includes(q)) ||
        (item.remarks && item.remarks.toLowerCase().includes(q));
      if (!matchSearch) return false;
    }

    if (currentFilter.selectedMachines !== null) {
      if (item.machineNo !== "ALL") {
        const itemMachs = item.machineNo.split(",").map(s => s.trim());
        const hasMatch = itemMachs.some(m => currentFilter.selectedMachines.has(m));
        if (!hasMatch) return false;
      }
    }

    if (currentFilter.selectedAreas !== null) {
      if (item.area !== "ALL") {
        const itemAreas = item.area.split(",").map(s => s.trim());
        const hasMatch = itemAreas.some(a => currentFilter.selectedAreas.has(a));
        if (!hasMatch) return false;
      }
    }

    if (currentFilter.nature !== "ALL" && item.nature !== currentFilter.nature) {
      return false;
    }

    if (currentFilter.status !== "ALL" && item.status !== currentFilter.status) {
      return false;
    }

    if (currentFilter.area !== "ALL" && item.area !== "ALL") {
      const itemAreas = item.area.split(",").map(s => s.trim());
      if (!itemAreas.includes(currentFilter.area)) return false;
    }

    if (currentFilter.process !== "ALL" && item.process !== "ALL") {
      const itemProcs = (item.process || "").split(",").map(s => s.trim());
      if (!itemProcs.includes(currentFilter.process)) return false;
    }

    if (currentFilter.critical && currentFilter.critical !== "ALL" && (item.isCritical || "No") !== currentFilter.critical) {
      return false;
    }

    if (currentFilter.tech && currentFilter.tech !== "ALL" && item.solvedBy !== currentFilter.tech) {
      return false;
    }

    if (currentFilter.category && currentFilter.category !== "ALL" && item.category !== currentFilter.category) {
      return false;
    }

    if (currentFilter.dateFrom && currentFilter.dateTo) {
      if (item.issueDate < currentFilter.dateFrom || item.issueDate > currentFilter.dateTo) {
        return false;
      }
    } else if (currentFilter.dateFrom) {
      if (item.issueDate !== currentFilter.dateFrom) {
        return false;
      }
    } else if (currentFilter.dateTo) {
      if (item.issueDate > currentFilter.dateTo) {
        return false;
      }
    }

    return true;
  });

  // Sort filtered records
  filtered.sort((a, b) => {
    let valA, valB;
    switch (tableSort.column) {
      case "date":
        valA = a.issueDate || "";
        valB = b.issueDate || "";
        break;
      case "category":
        valA = a.category || "";
        valB = b.category || "";
        break;
      case "id":
        valA = a.id || "";
        valB = b.id || "";
        break;
      case "nature":
        valA = a.nature || "";
        valB = b.nature || "";
        break;
      case "area":
        valA = a.area || "";
        valB = b.area || "";
        break;
      case "downtime":
        valA = Number(a.downtimeMinutes) || 0;
        valB = Number(b.downtimeMinutes) || 0;
        return tableSort.direction === "asc" ? valA - valB : valB - valA;
      case "affected":
        valA = Number(a.affectedMachines) || 1;
        valB = Number(b.affectedMachines) || 1;
        return tableSort.direction === "asc" ? valA - valB : valB - valA;
      case "totalDowntime":
        valA = Number(a.totalDowntimeMinutes) || ((Number(a.downtimeMinutes) || 0) * (Number(a.affectedMachines) || 1));
        valB = Number(b.totalDowntimeMinutes) || ((Number(b.downtimeMinutes) || 0) * (Number(b.affectedMachines) || 1));
        return tableSort.direction === "asc" ? valA - valB : valB - valA;
      case "tech":
        valA = a.solvedBy || "";
        valB = b.solvedBy || "";
        break;
      default:
        valA = a.issueDate || "";
        valB = b.issueDate || "";
    }
    const cmp = String(valA).localeCompare(String(valB));
    return tableSort.direction === "asc" ? cmp : -cmp;
  });

  updateTableCategoryStrip();
  updateSortIcons();
  updateMaintenanceLogCount();

  if (countEl) countEl.textContent = `${filtered.length} Incident${filtered.length === 1 ? '' : 's'}`;
  
  const totalPages = Math.max(1, Math.ceil(filtered.length / tablePageSize));
  if (tableCurrentPage > totalPages) tableCurrentPage = totalPages;
  if (tableCurrentPage < 1) tableCurrentPage = 1;

  const startIdx = (tableCurrentPage - 1) * tablePageSize;
  const endIdx = Math.min(filtered.length, startIdx + tablePageSize);
  const pageRecords = filtered.slice(startIdx, endIdx);

  const pagTextEl = document.getElementById("tablePaginationText");
  const pagIndicator = document.getElementById("tablePageIndicator");
  const btnPrev = document.getElementById("btnTablePrev");
  const btnNext = document.getElementById("btnTableNext");

  if (pagTextEl) {
    pagTextEl.textContent = filtered.length === 0
      ? "Showing 0 entries"
      : `Showing ${startIdx + 1}–${endIdx} of ${filtered.length} matching entries (${downtimeRecords.length} total)`;
  }
  if (pagIndicator) {
    pagIndicator.textContent = `Page ${tableCurrentPage} of ${totalPages}`;
  }
  if (btnPrev) {
    btnPrev.disabled = (tableCurrentPage <= 1);
  }
  if (btnNext) {
    btnNext.disabled = (tableCurrentPage >= totalPages);
  }

  if (showingInfo) {
    let filterDesc = [];
    if (currentFilter.dateFrom && currentFilter.dateTo) {
      filterDesc.push(`Date: ${currentFilter.dateFrom} to ${currentFilter.dateTo}`);
    } else if (currentFilter.dateFrom) {
      filterDesc.push(`Date: ${currentFilter.dateFrom}`);
    }
    if (currentFilter.category !== "ALL") {
      filterDesc.push(`Category: ${currentFilter.category}`);
    }
    if (currentFilter.area !== "ALL") {
      filterDesc.push(`Area: ${currentFilter.area}`);
    }
    if (downtimeRecords.length === 0) {
      showingInfo.textContent = "0 total entries recorded";
    } else {
      const filterText = filterDesc.length ? ` (${filterDesc.join(", ")})` : "";
      showingInfo.textContent = `Showing ${filtered.length === 0 ? 0 : startIdx + 1}–${endIdx} of ${filtered.length} matching entries (${downtimeRecords.length} total)${filterText}`;
    }
  }

  if (filtered.length === 0) {
    const isTotallyEmpty = downtimeRecords.length === 0;
    tbody.innerHTML = `
      <tr>
        <td colspan="13" class="py-16 text-center text-slate-400">
          <div class="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-3 text-slate-400">
            <i class="fa-solid ${isTotallyEmpty ? 'fa-clipboard-check' : 'fa-inbox'} text-3xl"></i>
          </div>
          <p class="text-base font-bold text-slate-700">${isTotallyEmpty ? 'Incident Logs are Empty' : 'No matching downtime records found'}</p>
          <p class="text-xs text-slate-400 mt-1 max-w-md mx-auto">${isTotallyEmpty ? 'No downtime incidents recorded yet. New incidents logged via the "Log Incident" tab will appear here.' : 'Try adjusting your date, area, machine, or category filters.'}</p>
          ${isTotallyEmpty ? `
            <div class="mt-4 flex items-center justify-center gap-3">
              <button type="button" onclick="switchMainTab('entry')" class="btn-yoko-red px-4 py-2 text-xs font-bold inline-flex items-center gap-1.5 shadow-xs cursor-pointer">
                <i class="fa-solid fa-plus"></i>
                <span>Log New Incident</span>
              </button>
            </div>
          ` : ''}
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = pageRecords.map((rec) => {
    const isCompleted = rec.status === "Completed";
    const natureBadge = getNatureBadge(rec.nature);

    const statusBadge = isCompleted
      ? `<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200"><i class="fa-solid fa-check-circle mr-1 text-emerald-600"></i> Completed</span>`
      : `<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-100 text-red-800 border border-red-200 pulse-red-indicator"><i class="fa-solid fa-triangle-exclamation mr-1 text-red-600"></i> Open</span>`;

    return `
      <tr class="hover:bg-slate-50/80 transition-colors border-b border-slate-100 group">
        <td class="px-4 py-3.5 font-mono text-xs font-bold text-slate-900 whitespace-nowrap">
          ${escapeHtml(rec.id)}
        </td>
        <td class="px-4 py-3.5 whitespace-nowrap text-xs font-semibold text-slate-600">
          ${escapeHtml(rec.issueDate)}
        </td>
        <td class="px-4 py-3.5 whitespace-nowrap">
          ${natureBadge}
        </td>
        <td class="px-4 py-3.5 whitespace-nowrap">
          ${getCategoryBadge(rec.category)}
        </td>
        <td class="px-4 py-3.5 text-xs font-bold text-slate-800 whitespace-nowrap">
          <div class="px-2 py-0.5 bg-slate-900 text-white rounded text-[11px] font-bold inline-block">${escapeHtml(rec.area)}</div>
          <div class="text-[10px] text-slate-500 font-semibold mt-0.5">${escapeHtml(rec.process || 'General')}</div>
        </td>
        <td class="px-4 py-3.5 text-xs whitespace-nowrap">
          <div class="flex items-center gap-1.5">
            <span class="font-bold text-slate-900 font-mono text-red-600">${escapeHtml(rec.machineNo)}</span>
            ${rec.isCritical === "Yes"
              ? `<span class="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[9px] font-black bg-red-100 text-red-700 border border-red-200" title="Critical Production Machine"><i class="fa-solid fa-triangle-exclamation text-[8px]"></i> CRIT</span>`
              : `<span class="inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-bold bg-slate-100 text-slate-500 border border-slate-200">STD</span>`}
          </div>
        </td>
        <td class="px-3 py-3.5 whitespace-nowrap text-right">
          <span class="inline-flex items-center px-2 py-1 bg-rose-50 border border-rose-200 text-red-700 rounded-md font-mono font-bold text-xs" title="Breakdown duration per machine: ${rec.downtimeMinutes || 0} mins">
            <i class="fa-regular fa-clock mr-1 text-[10px]"></i> ${rec.downtimeMinutes || 0}m
          </span>
        </td>
        <td class="px-3 py-3.5 whitespace-nowrap text-center">
          <span class="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-bold font-mono ${Number(rec.affectedMachines || 1) > 1 ? 'bg-amber-100 text-amber-800 border border-amber-300' : 'bg-slate-100 text-slate-700 border border-slate-200'}" title="${rec.affectedMachines || 1} Machine(s) Affected">
            <i class="fa-solid fa-microchip mr-1 text-[9px] ${Number(rec.affectedMachines || 1) > 1 ? 'text-amber-600' : 'text-slate-400'}"></i>${rec.affectedMachines || 1}
          </span>
        </td>
        <td class="px-3 py-3.5 whitespace-nowrap text-right">
          <span class="inline-flex items-center px-2 py-1 bg-red-100 border border-red-300 text-red-800 rounded-md font-mono font-black text-xs" title="Total Downtime = ${rec.downtimeMinutes || 0}m x ${rec.affectedMachines || 1} machines = ${rec.totalDowntimeMinutes || ((Number(rec.downtimeMinutes) || 0) * (Number(rec.affectedMachines) || 1))} mins">
            ${rec.totalDowntimeMinutes || ((Number(rec.downtimeMinutes) || 0) * (Number(rec.affectedMachines) || 1))}m
          </span>
        </td>
        <td class="px-4 py-3.5 text-xs text-slate-700 max-w-[220px]">
          <div class="font-semibold text-slate-900 truncate" title="${escapeHtml(rec.issueDetails)}">${escapeHtml(rec.issueDetails)}</div>
          <div class="text-[11px] text-slate-500 truncate" title="${escapeHtml(rec.actionPlan || 'Troubleshooting done')}">
            <i class="fa-solid fa-wrench text-[9px] mr-1 text-slate-400"></i>${escapeHtml(rec.actionPlan || 'Troubleshooting done')}
          </div>
        </td>
        <td class="px-4 py-3.5 whitespace-nowrap text-xs">
          <span class="font-bold text-slate-800 flex items-center gap-1.5">
            <span class="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center text-[10px] text-slate-700 font-black">
              ${escapeHtml(rec.solvedBy ? rec.solvedBy.charAt(0) : 'T')}
            </span>
            ${escapeHtml(rec.solvedBy || 'Unassigned')}
          </span>
        </td>
        <td class="px-4 py-3.5 whitespace-nowrap">
          ${statusBadge}
        </td>
        <td class="px-4 py-3.5 text-right whitespace-nowrap">
          <div class="flex items-center justify-end gap-1.5 opacity-90 group-hover:opacity-100">
            <button onclick="viewRecordDetails('${escapeHtml(rec.id)}')" aria-label="View record ${escapeHtml(rec.id)}" title="View Full Details" class="p-1.5 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded transition-all">
              <i class="fa-solid fa-eye text-xs"></i>
            </button>
            ${(typeof getCurrentUser === "function" && getCurrentUser() && getCurrentUser().role === "ADMIN") ? `
            <button onclick="loadRecordForEdit('${escapeHtml(rec.id)}')" aria-label="Edit record ${escapeHtml(rec.id)}" title="Edit Entry" class="p-1.5 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded transition-all">
              <i class="fa-solid fa-pen-to-square text-xs"></i>
            </button>
            <button onclick="toggleRecordStatus('${escapeHtml(rec.id)}')" aria-label="Toggle status for record ${escapeHtml(rec.id)}" title="Toggle Open/Completed" class="p-1.5 text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 rounded transition-all">
              <i class="fa-solid fa-arrows-rotate text-xs"></i>
            </button>
            <button onclick="deleteRecord('${escapeHtml(rec.id)}')" aria-label="Delete record ${escapeHtml(rec.id)}" title="Delete Entry" class="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded transition-all">
              <i class="fa-solid fa-trash text-xs"></i>
            </button>
            ` : ''}
          </div>
        </td>
      </tr>
    `;
  }).join("");
}
window.renderRecordsTable = renderRecordsTable;

// --- Details Modal & Edit Handlers ---
window.viewRecordDetails = function(id) {
  const rec = downtimeRecords.find(r => r.id === id);
  if (!rec) return;

  const modal = document.getElementById("detailsModal");
  const modalContent = document.getElementById("modalDetailsContent");
  if (!modal || !modalContent) return;

  const isCompleted = rec.status === "Completed";
  modalContent.innerHTML = `
    <div class="space-y-4">
      <div class="flex items-center justify-between pb-4 border-b border-slate-200">
        <div>
          <span class="text-xs font-mono font-bold text-red-600 bg-red-50 px-2 py-1 rounded border border-red-200">${escapeHtml(rec.id)}</span>
          <h4 class="text-lg font-bold text-slate-900 mt-1">${escapeHtml(rec.machineNo)} - ${escapeHtml(rec.area)}</h4>
        </div>
        <span class="px-3 py-1 rounded-full text-xs font-bold ${isCompleted ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}">
          ${escapeHtml(rec.status)}
        </span>
      </div>

      <div class="grid grid-cols-2 gap-3 text-sm">
        <div class="p-3 bg-slate-50 rounded-lg">
          <span class="text-[11px] font-bold text-slate-500 uppercase block">Issue Date</span>
          <span class="font-semibold text-slate-800">${escapeHtml(rec.issueDate)}</span>
        </div>
        <div class="p-3 bg-slate-50 rounded-lg">
          <span class="text-[11px] font-bold text-slate-500 uppercase block">Closed Date</span>
          <span class="font-semibold text-slate-800">${escapeHtml(rec.closedDate || 'Pending')}</span>
        </div>
        <div class="p-3 bg-slate-50 rounded-lg">
          <span class="text-[11px] font-bold text-slate-500 uppercase block">Nature</span>
          <span class="font-semibold text-slate-800">${escapeHtml(rec.nature)}</span>
        </div>
        <div class="p-3 bg-slate-50 rounded-lg">
          <span class="text-[11px] font-bold text-slate-500 uppercase block">Downtime Metrics</span>
          <div class="space-y-1 mt-1 text-xs font-mono">
            <div class="flex justify-between"><span class="text-slate-500">Per Machine:</span> <span class="font-bold text-slate-800">${Number(rec.downtimeMinutes) || 0} mins</span></div>
            <div class="flex justify-between"><span class="text-slate-500">Machines Affected:</span> <span class="font-bold text-amber-700">${Number(rec.affectedMachines) || 1}</span></div>
            <div class="flex justify-between border-t border-slate-200 pt-0.5"><span class="text-slate-500 font-bold">Total DT:</span> <span class="font-black text-red-600">${rec.totalDowntimeMinutes || ((Number(rec.downtimeMinutes) || 0) * (Number(rec.affectedMachines) || 1))} mins (${(((rec.totalDowntimeMinutes || ((Number(rec.downtimeMinutes) || 0) * (Number(rec.affectedMachines) || 1)))) / 60).toFixed(1)} hrs)</span></div>
          </div>
        </div>
        <div class="p-3 bg-slate-50 rounded-lg">
          <span class="text-[11px] font-bold text-slate-500 uppercase block">Machine & Process</span>
          <span class="font-semibold text-slate-800">${escapeHtml(rec.machineNo)}</span>
          <span class="ml-2 text-xs px-2 py-0.5 rounded bg-slate-200 text-slate-700 font-bold">${escapeHtml(rec.process || 'General')}</span>
        </div>
        <div class="p-3 bg-slate-50 rounded-lg">
          <span class="text-[11px] font-bold text-slate-500 uppercase block">Criticality Status</span>
          <span class="font-bold font-mono text-xs ${rec.isCritical === 'Yes' ? 'text-red-600' : 'text-slate-600'}">
            ${rec.isCritical === 'Yes' ? 'Critical' : 'Standard'}
          </span>
        </div>
        <div class="p-3 bg-slate-50 rounded-lg">
          <span class="text-[11px] font-bold text-slate-500 uppercase block">Category</span>
          <span class="font-semibold text-slate-800">${escapeHtml(rec.category)}</span>
        </div>
        <div class="p-3 bg-slate-50 rounded-lg">
          <span class="text-[11px] font-bold text-slate-500 uppercase block">Responsibility</span>
          <span class="font-semibold text-slate-800">${escapeHtml(rec.responsibility)}</span>
        </div>
      </div>

      <div class="p-3 bg-slate-50 rounded-lg text-sm">
        <span class="text-[11px] font-bold text-slate-500 uppercase block mb-1">Issue Details</span>
        <p class="text-slate-800 font-medium">${escapeHtml(rec.issueDetails)}</p>
      </div>

      <div class="p-3 bg-emerald-50/50 border border-emerald-100 rounded-lg text-sm">
        <span class="text-[11px] font-bold text-emerald-800 uppercase block mb-1">Action Plan</span>
        <p class="text-slate-800">${escapeHtml(rec.actionPlan || 'No action plan recorded.')}</p>
      </div>

      <div class="grid grid-cols-2 gap-3 text-sm">
        <div class="p-3 bg-slate-50 rounded-lg">
          <span class="text-[11px] font-bold text-slate-500 uppercase block">Responsible Person</span>
          <span class="font-bold text-slate-900">${escapeHtml(rec.solvedBy || 'Unassigned')}</span>
        </div>
        <div class="p-3 bg-slate-50 rounded-lg">
          <span class="text-[11px] font-bold text-slate-500 uppercase block">Remarks</span>
          <span class="text-slate-700">${escapeHtml(rec.remarks || 'None')}</span>
        </div>
      </div>

      <!-- Individual Audit Trail Attribution (SEC-05) -->
      <div class="p-3 bg-slate-100/70 border border-slate-200 rounded-lg text-xs font-mono space-y-1">
        <div class="flex items-center justify-between text-slate-600">
          <span><i class="fa-solid fa-user-pen mr-1 text-slate-400"></i>Created By:</span>
          <span class="font-bold text-slate-800">${escapeHtml(rec.actorName || rec.createdByName || rec.createdBy || 'Staff')} (${escapeHtml(rec.createdBy || 'staff')})</span>
        </div>
        <div class="flex items-center justify-between text-slate-600">
          <span><i class="fa-regular fa-clock mr-1 text-slate-400"></i>Timestamp:</span>
          <span class="text-slate-700">${escapeHtml(rec.createdAt ? new Date(rec.createdAt).toLocaleString() : rec.issueDate)}</span>
        </div>
        ${rec.updatedBy ? `
        <div class="flex items-center justify-between text-slate-600 border-t border-slate-200/60 pt-1">
          <span><i class="fa-solid fa-pen-nib mr-1 text-slate-400"></i>Last Modified By:</span>
          <span class="font-bold text-indigo-700">${escapeHtml(rec.updatedBy)}</span>
        </div>
        ` : ''}
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
};
window.openDetailsModal = window.viewRecordDetails;

window.closeDetailsModal = function() {
  const modal = document.getElementById("detailsModal");
  if (modal) modal.classList.add("hidden");
};

window.loadRecordForEdit = function(id) {
  const user = (typeof getCurrentUser === "function") ? getCurrentUser() : null;
  if (!user || user.role !== "ADMIN") {
    showToast("Access Denied: Only Administrators can edit downtime records.", "error");
    return;
  }
  const rec = downtimeRecords.find(r => r.id === id);
  if (!rec) return;

  editingRecordId = id;
  
  switchTab('entry');

  document.getElementById("issueDate").value = rec.issueDate;
  
  setFormNature(rec.nature || (masterNatures.includes("MES") ? "MES" : (masterNatures[0] || "MES")));

  document.getElementById("area").value = rec.area;
  initMachineSelector(rec.area);
  document.getElementById("machineNo").value = rec.machineNo;
  setCriticalMachine(rec.isCritical || "No");

  formSelectedAreas = new Set([rec.area]);
  formSelectedMachines = new Set([rec.machineNo]);
  window.formSelectedAreas = formSelectedAreas;
  window.formSelectedMachines = formSelectedMachines;
  initFormAreaDropdown();
  initFormMachineDropdown(formSelectedAreas);
  updateFormAreaButtonLabel();
  updateFormMachineButtonLabel();
  syncFormHiddenInputs();
  applySingleMachineMetadata(rec.machineNo);
  if (document.getElementById("machineType")) document.getElementById("machineType").value = rec.machineType || "";
  document.getElementById("downtimeMinutes").value = rec.downtimeMinutes || 0;
  if (document.getElementById("affectedMachines")) {
    document.getElementById("affectedMachines").value = rec.affectedMachines || 1;
  }
  if (document.getElementById("totalDowntimeMinutes")) {
    document.getElementById("totalDowntimeMinutes").value = rec.totalDowntimeMinutes || ((Number(rec.downtimeMinutes) || 0) * (Number(rec.affectedMachines) || 1));
  }
  document.getElementById("category").value = rec.category;
  document.getElementById("issueDetails").value = rec.issueDetails || "";
  document.getElementById("actionPlan").value = rec.actionPlan || "";
  document.getElementById("responsibility").value = rec.responsibility;
  document.getElementById("closedDate").value = rec.closedDate || "";
  document.getElementById("solvedBy").value = rec.solvedBy;
  document.getElementById("remarks").value = rec.remarks || "";

  if (rec.status === "Open") {
    document.getElementById("btn-status-open").click();
  } else {
    document.getElementById("btn-status-completed").click();
  }

  const saveBtn = document.getElementById("btn-save-record");
  if (saveBtn) {
    saveBtn.innerHTML = `<i class="fa-solid fa-arrows-rotate mr-1.5"></i> Update Entry (${id})`;
  }

  const formCard = document.getElementById("form-card");
  if (formCard) {
    formCard.scrollIntoView({ behavior: "smooth" });
    formCard.classList.add("ring-4", "ring-red-500/20");
    setTimeout(() => formCard.classList.remove("ring-4", "ring-red-500/20"), 800);
  }

  showToast(`Editing downtime record ${id}`, "info");
};

window.toggleRecordStatus = function(id) {
  const user = (typeof getCurrentUser === "function") ? getCurrentUser() : null;
  if (!user || user.role !== "ADMIN") {
    showToast("Access Denied: Only Administrators can modify incident records.", "error");
    return;
  }
  const rec = downtimeRecords.find(r => r.id === id);
  if (!rec) return;

  if (rec.status === "Completed") {
    rec.status = "Open";
    rec.closedDate = "";
    showToast(`Marked ${id} as OPEN`, "warning");
  } else {
    rec.status = "Completed";
    rec.closedDate = getLocalDateString();
    showToast(`Marked ${id} as COMPLETED`, "success");
  }

  saveToStorage();
  renderRecordsTable();
  renderKPIs();
  renderCharts();
};

window.deleteRecord = function(id) {
  const user = (typeof getCurrentUser === "function") ? getCurrentUser() : null;
  if (!user || user.role !== "ADMIN") {
    showToast("Access Denied: Only Administrators can delete incident records.", "error");
    return;
  }
  if (confirm(`Are you sure you want to delete downtime record ${id}?`)) {
    downtimeRecords = downtimeRecords.filter(r => r.id !== id);
    window.downtimeRecords = downtimeRecords;
    saveToStorage();
    if (typeof window.deleteCloudIncident === "function") {
      window.deleteCloudIncident(id).catch(e => console.warn("[Supabase] Cloud delete warning:", e));
    }
    renderRecordsTable();
    renderKPIs();
    renderCharts();
    updateMaintenanceLogCount();
    showToast(`Record ${id} removed.`, "info");
  }
};

// --- Database & Incident Logs Maintenance (Empty Logs / Restore Demo) ---
function updateMaintenanceLogCount() {
  const el = document.getElementById("maintenanceLogCount");
  if (el) {
    el.textContent = `${downtimeRecords.length} Incidents (${downtimeRecords.length === 0 ? "Clean Slate / Empty" : "Active Data"})`;
  }
  const dbCountEl = document.getElementById("dbSettingsIncidentCount");
  if (dbCountEl) {
    dbCountEl.textContent = `${downtimeRecords.length} Incident Record${downtimeRecords.length === 1 ? '' : 's'}`;
  }
}
window.updateMaintenanceLogCount = updateMaintenanceLogCount;

// --- Destructive Actions & Confirmation Modal System (SEC-07: Admin Only + CONFIRM RESET) ---
let pendingDestructiveAction = null; // 'CLEAR_ALL_LOGS' or 'RESET_DEFAULTS'

window.openConfirmResetModal = function(actionType) {
  const user = (typeof getCurrentUser === "function") ? getCurrentUser() : null;
  if (!user || user.role !== "ADMIN") {
    showToast("Access Denied: Only Administrators can perform destructive reset operations.", "error");
    return;
  }

  pendingDestructiveAction = actionType;
  const modal = document.getElementById("confirmResetModal");
  const title = document.getElementById("confirmResetTitle");
  const desc = document.getElementById("confirmResetDescription");
  const input = document.getElementById("confirmResetInput");
  const btn = document.getElementById("btnExecuteDestructiveAction");
  const errorMsg = document.getElementById("confirmResetError");

  if (input) input.value = "";
  if (btn) btn.disabled = true;
  if (errorMsg) errorMsg.classList.add("hidden");

  if (actionType === 'CLEAR_ALL_LOGS') {
    if (title) title.textContent = "Confirm Permanent Purge of Incident Logs";
    if (desc) desc.textContent = `You are about to permanently purge all ${downtimeRecords.length} incident logs. An automatic JSON backup snapshot will download to your device before deletion.`;
  } else {
    if (title) title.textContent = "Confirm Factory Reset of Master Settings";
    if (desc) desc.textContent = "You are about to restore all machines, areas, categories, and account registries to factory defaults. A settings backup snapshot will download before resetting.";
  }

  if (modal) {
    modal.classList.remove("hidden");
    if (input) input.focus();
  }
};

window.closeConfirmResetModal = function() {
  const modal = document.getElementById("confirmResetModal");
  if (modal) modal.classList.add("hidden");
  pendingDestructiveAction = null;
};

window.handleConfirmResetInputChanged = function() {
  const input = document.getElementById("confirmResetInput");
  const btn = document.getElementById("btnExecuteDestructiveAction");
  const val = (input?.value || "").trim();
  if (btn) {
    btn.disabled = (val !== "CONFIRM RESET");
  }
};

function downloadSnapshotFile(filename, content, mimeType = "application/json") {
  try {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 200);
  } catch (e) {
    console.warn("Snapshot auto-download fallback:", e);
  }
}

window.executeDestructiveActionConfirmed = async function() {
  const input = document.getElementById("confirmResetInput");
  const val = (input?.value || "").trim();
  if (val !== "CONFIRM RESET") {
    const errorMsg = document.getElementById("confirmResetError");
    if (errorMsg) errorMsg.classList.remove("hidden");
    return;
  }

  const user = getCurrentUser();
  if (!user || user.role !== "ADMIN") {
    showToast("Access Denied: Only Administrators can execute reset.", "error");
    closeConfirmResetModal();
    return;
  }

  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");

  if (pendingDestructiveAction === 'CLEAR_ALL_LOGS') {
    // 1. Automatic JSON Backup Snapshot (SEC-07)
    const backupData = JSON.stringify({
      backupDate: new Date().toISOString(),
      initiatedBy: user.username,
      totalRecords: downtimeRecords.length,
      records: downtimeRecords
    }, null, 2);
    downloadSnapshotFile(`Yokohama_Incidents_Backup_${timestamp}.json`, backupData);

    // 2. Clear in-memory and storage
    downtimeRecords = [];
    window.downtimeRecords = downtimeRecords;
    saveToStorage();

    // 3. Clear cloud with confirmation phrase
    if (typeof window.clearAllCloudIncidents === "function") {
      await window.clearAllCloudIncidents("CONFIRM RESET").catch(e => console.warn(e));
    }

    renderRecordsTable();
    renderKPIs();
    renderCharts();
    populateDashboardMonths();
    updateMaintenanceLogCount();
    showToast("All incident logs emptied. Automatic backup snapshot downloaded.", "success");

  } else if (pendingDestructiveAction === 'RESET_DEFAULTS') {
    // 1. Master Settings backup snapshot
    const backupSettings = JSON.stringify({
      backupDate: new Date().toISOString(),
      initiatedBy: user.username,
      machines: YOKOHAMA_MACHINES,
      areas: YOKOHAMA_AREAS,
      categories: masterCategories,
      technicians: technicians
    }, null, 2);
    downloadSnapshotFile(`Yokohama_MasterSettings_Backup_${timestamp}.json`, backupSettings);

    // 2. Reset to defaults
    localStorage.removeItem("YOKOHAMA_MASTER_MACHINES");
    localStorage.removeItem("YOKOHAMA_MASTER_AREAS");
    localStorage.removeItem("YOKOHAMA_MASTER_CATEGORIES");
    localStorage.removeItem("YOKOHAMA_MASTER_RESPONSIBILITIES");
    localStorage.removeItem("YOKOHAMA_MASTER_NATURES");
    localStorage.removeItem("YOKOHAMA_TECHNICIANS");

    YOKOHAMA_MACHINES = JSON.parse(JSON.stringify(INITIAL_MACHINES_BACKUP));
    YOKOHAMA_AREAS = JSON.parse(JSON.stringify(INITIAL_AREAS_BACKUP));
    masterCategories = ["NSNL", "IPC", "Printer", "Scanner", "Infra", "MES", "Hardware / PC", "Network / Switch", "PLC / SCADA", "Other"];
    masterResponsibilities = ["ATC", "MELSS"];
    masterNatures = [...INITIAL_NATURES_BACKUP];
    technicians = [...DEFAULT_TECHNICIANS];
    saveTechsToStorage();
    initTechniciansDropdown();
    saveMasterDataToStorage();
    rebuildMachineMap();
    initAreasDropdowns();
    initMachineSelector();
    renderMasterSettingsUI();
    showToast("Master Settings restored to factory defaults. Backup downloaded.", "success");
  }

  closeConfirmResetModal();
};

window.clearAllIncidentLogs = function() {
  const user = (typeof getCurrentUser === "function") ? getCurrentUser() : null;
  if (!user || user.role !== "ADMIN") {
    showToast("Access Denied: Only Administrators can clear all incident logs.", "error");
    return;
  }
  if (downtimeRecords.length === 0) {
    showToast("Incident logs are already empty.", "info");
    return;
  }
  const modal = document.getElementById("confirmResetModal");
  if (modal) {
    openConfirmResetModal('CLEAR_ALL_LOGS');
  } else {
    downtimeRecords = [];
    window.downtimeRecords = downtimeRecords;
    saveToStorage();
    if (typeof window.clearAllCloudIncidents === "function") {
      window.clearAllCloudIncidents("CONFIRM RESET").catch(e => console.warn(e));
    }
    renderRecordsTable();
    renderKPIs();
    renderCharts();
    populateDashboardMonths();
    updateMaintenanceLogCount();
    showToast("All incident logs have been emptied successfully.", "success");
  }
};

// --- Dashboard Month Filter Helper Functions ---
function getMonthName(mIdx) {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  return monthNames[mIdx] || "";
}

function getFilteredDashboardRecords() {
  return downtimeRecords.filter(r => {
    if (!r.issueDate) return false;

    // Year / FY filter (if not ALL)
    if (dashboardDateFilter.year && dashboardDateFilter.year !== "ALL") {
      if (dashboardDateFilter.year === "FY2026") {
        if (r.issueDate < "2026-04-01" || r.issueDate > "2027-03-31") return false;
      } else if (dashboardDateFilter.year === "2026") {
        if (!r.issueDate.startsWith("2026")) return false;
      } else if (!r.issueDate.startsWith(dashboardDateFilter.year)) {
        return false;
      }
    }

    // Start Date filter
    if (dashboardDateFilter.startDate && r.issueDate < dashboardDateFilter.startDate) {
      return false;
    }

    // End Date filter
    if (dashboardDateFilter.endDate && r.issueDate > dashboardDateFilter.endDate) {
      return false;
    }

    // Month filter (if no explicit SD/ED set)
    if (!dashboardDateFilter.startDate && !dashboardDateFilter.endDate && dashboardDateFilter.month !== "ALL") {
      if (!r.issueDate.startsWith(dashboardDateFilter.month)) return false;
    }

    return true;
  });
}

function getElapsedDaysInMonth(year, month, records = null) {
  const y = Number(year);
  const m = Number(month);
  const totalDays = new Date(y, m, 0).getDate();
  const today = new Date();
  const curY = today.getFullYear();
  const curM = today.getMonth() + 1;
  const curD = today.getDate();

  if (y > curY || (y === curY && m > curM)) {
    return 0; // Future month has not started yet
  } else if (y === curY && m === curM) {
    let maxD = curD;
    const recList = records || (typeof downtimeRecords !== "undefined" ? downtimeRecords : []);
    const mStr = `${y}-${String(m).padStart(2, "0")}`;
    recList.forEach(r => {
      if (r.issueDate && r.issueDate.startsWith(mStr)) {
        const parts = r.issueDate.split("-");
        const d = parseInt(parts[2], 10);
        if (d > maxD) maxD = d;
      }
    });
    return Math.min(totalDays, Math.max(1, maxD));
  }
  return totalDays; // Past completed month
}

function getDashboardPeriodDays() {
  if (dashboardDateFilter.startDate && dashboardDateFilter.endDate) {
    return calcDateDiffDays(dashboardDateFilter.startDate, dashboardDateFilter.endDate);
  }
  if (dashboardDateFilter.month !== "ALL") {
    const [y, m] = dashboardDateFilter.month.split("-").map(Number);
    const elapsed = getElapsedDaysInMonth(y, m, downtimeRecords);
    return Math.max(1, elapsed);
  }
  const uniqueDays = new Set();
  const recs = getFilteredDashboardRecords();
  recs.forEach(r => {
    if (r.issueDate) uniqueDays.add(r.issueDate);
  });
  return Math.max(30, uniqueDays.size > 0 ? 181 : 30);
}

function populateDashboardMonths() {
  const select = document.getElementById("dashboardMonthFilter");
  if (!select) return;

  const yearSetting = dashboardDateFilter.year || "2026";
  const monthSet = new Set();

  if (yearSetting === "FY2026") {
    // Japanese / Indian Fiscal Year: April 2026 to March 2027
    const fyOrder = [
      "2026-04", "2026-05", "2026-06", "2026-07", "2026-08", "2026-09",
      "2026-10", "2026-11", "2026-12", "2027-01", "2027-02", "2027-03"
    ];
    fyOrder.forEach(m => monthSet.add(m));
  } else if (yearSetting === "2026") {
    // Calendar Year 2026 (Jan - Dec)
    for (let mo = 1; mo <= 12; mo++) {
      monthSet.add(`2026-${String(mo).padStart(2, "0")}`);
    }
  } else {
    // ALL years / periods: collect from records and current year
    downtimeRecords.forEach(r => {
      if (r.issueDate && r.issueDate.length >= 7) {
        monthSet.add(r.issueDate.substring(0, 7));
      }
    });
    const curYear = new Date().getFullYear();
    for (let mo = 1; mo <= 12; mo++) {
      monthSet.add(`${curYear}-${String(mo).padStart(2, "0")}`);
    }
  }

  // Also include any months present in downtimeRecords matching the year prefix
  downtimeRecords.forEach(r => {
    if (r.issueDate && r.issueDate.length >= 7) {
      const ym = r.issueDate.substring(0, 7);
      if (yearSetting === "ALL" || (yearSetting === "2026" && ym.startsWith("2026")) || (yearSetting === "FY2026" && (ym.startsWith("2026") || ym.startsWith("2027")))) {
        monthSet.add(ym);
      }
    }
  });

  // Sort strictly in chronological order (ascending: Jan -> Dec)
  const sortedMonths = Array.from(monthSet).sort();

  let html = '<option value="ALL">All Months</option>';
  sortedMonths.forEach(mStr => {
    const parts = mStr.split("-");
    const y = parts[0];
    const m = parts[1];
    const mIdx = parseInt(m, 10) - 1;
    const label = `${getMonthName(mIdx)} ${y}`;
    html += `<option value="${mStr}">${label}</option>`;
  });

  select.innerHTML = html;
  if (dashboardDateFilter.month && (dashboardDateFilter.month === "ALL" || monthSet.has(dashboardDateFilter.month))) {
    select.value = dashboardDateFilter.month;
  } else {
    dashboardDateFilter.month = "ALL";
    select.value = "ALL";
  }

  // Update export button label
  const btnExportLabel = document.getElementById("btnExportDashboardPeriodText");
  if (btnExportLabel) {
    if (select.value !== "ALL") {
      const [y, m] = select.value.split("-");
      btnExportLabel.textContent = `Export ${getMonthName(parseInt(m, 10) - 1)} ${y} Excel`;
    } else {
      btnExportLabel.textContent = "Export All Excel";
    }
  }
}
window.populateDashboardMonths = populateDashboardMonths;

window.onDashboardMonthChange = function(monthVal) {
  dashboardDateFilter.month = monthVal;
  currentDashboardMonth = monthVal;

  const sdInput = document.getElementById("dashboardStartDate");
  const edInput = document.getElementById("dashboardEndDate");

  if (monthVal !== "ALL") {
    const [y, m] = monthVal.split("-");
    const lastDay = new Date(Number(y), Number(m), 0).getDate();
    dashboardDateFilter.startDate = `${monthVal}-01`;
    dashboardDateFilter.endDate = `${monthVal}-${String(lastDay).padStart(2, "0")}`;
    if (sdInput) sdInput.value = dashboardDateFilter.startDate;
    if (edInput) edInput.value = dashboardDateFilter.endDate;
  } else {
    dashboardDateFilter.startDate = "";
    dashboardDateFilter.endDate = "";
    if (sdInput) sdInput.value = "";
    if (edInput) edInput.value = "";
  }

  renderKPIs();
  renderCharts();

  let label = "All Months";
  if (monthVal !== "ALL") {
    const [y, m] = monthVal.split("-");
    label = `${getMonthName(parseInt(m, 10) - 1)} ${y}`;
  }
  const btnExportLabel = document.getElementById("btnExportDashboardPeriodText");
  if (btnExportLabel) {
    btnExportLabel.textContent = monthVal !== "ALL" ? `Export ${label} Excel` : "Export All Excel";
  }
  showToast(`Dashboard filtered for ${label}`, "info");
};

window.onDashboardDateFilterChange = function() {
  const sdInput = document.getElementById("dashboardStartDate");
  const edInput = document.getElementById("dashboardEndDate");
  const monthSelect = document.getElementById("dashboardMonthFilter");

  const sd = sdInput ? sdInput.value : "";
  const ed = edInput ? edInput.value : "";

  if (sd && ed && ed < sd) {
    showToast("Invalid range: End Date cannot be earlier than Start Date.", "warning");
    if (edInput) edInput.value = dashboardDateFilter.endDate || "";
    return;
  }

  dashboardDateFilter.startDate = sd;
  dashboardDateFilter.endDate = ed;

  if (sd && ed && sd.substring(0, 7) === ed.substring(0, 7)) {
    dashboardDateFilter.month = sd.substring(0, 7);
    if (monthSelect) monthSelect.value = dashboardDateFilter.month;
  } else {
    dashboardDateFilter.month = "ALL";
    if (monthSelect) monthSelect.value = "ALL";
  }

  renderKPIs();
  renderCharts();
  showToast("Dashboard updated for date range", "info");
};

window.onDashboardYearChange = function(yearVal) {
  dashboardDateFilter.year = yearVal;
  populateDashboardMonths();
  renderKPIs();
  renderCharts();
  const yearDesc = yearVal === "FY2026" ? "FY 2026-27 (Apr - Mar)" : (yearVal === "2026" ? "CY 2026" : "All Periods");
  showToast(`Dashboard filtered for ${yearDesc}`, "info");
};

window.resetDashboardFilters = function() {
  dashboardDateFilter = {
    startDate: "",
    endDate: "",
    month: "ALL",
    year: "2026"
  };
  currentDashboardMonth = "ALL";

  const sdInput = document.getElementById("dashboardStartDate");
  const edInput = document.getElementById("dashboardEndDate");
  const monthSelect = document.getElementById("dashboardMonthFilter");
  const yearSelect = document.getElementById("dashboardYearFilter");

  if (sdInput) sdInput.value = "";
  if (edInput) edInput.value = "";
  if (yearSelect) yearSelect.value = "2026";
  populateDashboardMonths();
  if (monthSelect) monthSelect.value = "ALL";

  renderKPIs();
  renderCharts();
  showToast("Date filters reset to default", "info");
};

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
window.escapeHtml = escapeHtml;

// --- KPI Calculations ---
function renderKPIs() {
  const records = getFilteredDashboardRecords();
  const hasData = records.length > 0;
  const totalDowntimeMinutes = hasData ? records.reduce((acc, r) => acc + (parseInt(r.downtimeMinutes, 10) || 0), 0) : 0;
  const totalHours = hasData ? (totalDowntimeMinutes / 60).toFixed(1) : "0.0";
  const openCount = hasData ? records.filter(r => r.status === "Open").length : 0;
  const completedRecords = hasData ? records.filter(r => r.status === "Completed") : [];
  const completedCount = completedRecords.length;
  const resolutionRateText = hasData ? `${Math.round((completedCount / records.length) * 100)}%` : "N/A";
  
  const mttrText = (hasData && completedRecords.length > 0)
    ? `${Math.round(completedRecords.reduce((acc, r) => acc + (parseInt(r.downtimeMinutes, 10) || 0), 0) / completedRecords.length)} min`
    : "N/A";

  const elTotalHrs = document.getElementById("kpi-total-hours");
  const elTotalMins = document.getElementById("kpi-total-mins");
  const elOpenAlerts = document.getElementById("kpi-open-alerts");
  const elMttr = document.getElementById("kpi-mttr");
  const elResolutionRate = document.getElementById("kpi-resolution-rate");
  const elTotalIncidents = document.getElementById("kpi-total-incidents");

  let badgeText = "All Months";
  if (dashboardDateFilter.startDate && dashboardDateFilter.endDate) {
    badgeText = `${dashboardDateFilter.startDate} to ${dashboardDateFilter.endDate}`;
  } else if (dashboardDateFilter.month !== "ALL") {
    const [y, m] = dashboardDateFilter.month.split("-");
    badgeText = `${getMonthName(parseInt(m, 10) - 1)} ${y}`;
  }

  if (elTotalHrs) elTotalHrs.textContent = `${totalHours} hrs`;
  if (elTotalMins) elTotalMins.textContent = `${totalDowntimeMinutes} mins`;
  if (elOpenAlerts) elOpenAlerts.textContent = openCount;
  if (elMttr) elMttr.textContent = mttrText;
  if (elResolutionRate) elResolutionRate.textContent = resolutionRateText;
  if (elTotalIncidents) elTotalIncidents.textContent = `${records.length} Incidents (${badgeText})`;
}
window.renderKPIs = renderKPIs;

// --- Chart.js Visualizations (Speedometer, Availability FY, Area, Process, Day, Process DT, Category Pie) ---
function renderCharts() {
  if (typeof Chart === "undefined") return;

  const records = getFilteredDashboardRecords();
  const periodDays = getDashboardPeriodDays();
  const standardAreas = (typeof YOKOHAMA_AREAS !== "undefined" && YOKOHAMA_AREAS.length > 0)
    ? YOKOHAMA_AREAS.slice(0, 8)
    : ["Plant 1", "Plant 2", "Plant 3", "Plant 4", "4Roll shed", "Mixing Shed", "FID", "IT infra"];

  // -------------------------------------------------------------
  // Chart 1A: Automotive Speedometer Gauge ("Overall Availability")
  // -------------------------------------------------------------
  const hasData = records.length > 0;
  const totalPlantOperatingMinutes = periodDays * 24 * 60 * standardAreas.length;
  const totalDowntimeMinutes = hasData ? records.reduce((acc, r) => acc + (parseInt(r.downtimeMinutes, 10) || 0), 0) : 0;
  const totalUptimeMinutes = Math.max(0, totalPlantOperatingMinutes - totalDowntimeMinutes);
  let overallAvailability = 0;
  let overallAvailFormatted = "N/A";

  const gaugeTextEl = document.getElementById("gaugePercentText");
  const gaugeBadgeEl = document.getElementById("gaugeStatusBadge");
  const gaugeUptimeEl = document.getElementById("gaugeUptimeHours");
  const gaugeDowntimeEl = document.getElementById("gaugeDowntimeHours");

  let gaugeStatusText = "";
  let gaugeBadgeClass = "";

  if (hasData) {
    overallAvailability = Math.min(100, Math.max(0, (totalUptimeMinutes / totalPlantOperatingMinutes) * 100));
    overallAvailFormatted = `${overallAvailability.toFixed(2)}%`;
    if (overallAvailability < 95.0) {
      gaugeStatusText = "Critical";
      gaugeBadgeClass = "text-[10px] font-bold px-2 py-0.5 rounded-full border bg-rose-100 text-rose-800 border-rose-300";
    } else if (overallAvailability < 99.0) {
      gaugeStatusText = "Warning";
      gaugeBadgeClass = "text-[10px] font-bold px-2 py-0.5 rounded-full border bg-amber-100 text-amber-800 border-amber-300";
    } else {
      gaugeStatusText = "Optimal";
      gaugeBadgeClass = "text-[10px] font-bold px-2 py-0.5 rounded-full border bg-emerald-100 text-emerald-800 border-emerald-300";
    }
  } else if (periodDays > 0) {
    overallAvailability = 100.00;
    overallAvailFormatted = "100.00%";
    gaugeStatusText = "Optimal (No Incidents)";
    gaugeBadgeClass = "text-[10px] font-bold px-2 py-0.5 rounded-full border bg-emerald-100 text-emerald-800 border-emerald-300";
  } else {
    gaugeStatusText = "No Data";
    gaugeBadgeClass = "text-[10px] font-bold px-2 py-0.5 rounded-full border bg-slate-100 text-slate-600 border-slate-300";
  }

  if (gaugeTextEl) gaugeTextEl.textContent = overallAvailFormatted;
  if (gaugeBadgeEl) {
    if (gaugeStatusText) {
      gaugeBadgeEl.textContent = gaugeStatusText;
      gaugeBadgeEl.className = gaugeBadgeClass;
    } else {
      gaugeBadgeEl.textContent = "";
      gaugeBadgeEl.className = "hidden";
    }
  }
  if (gaugeUptimeEl) gaugeUptimeEl.textContent = hasData ? `${Math.round(totalUptimeMinutes / 60)} hrs` : "N/A";
  if (gaugeDowntimeEl) gaugeDowntimeEl.textContent = `${(totalDowntimeMinutes / 60).toFixed(1)} hrs (${totalDowntimeMinutes}m)`;

  const ctxGauge = document.getElementById("gaugeAvailability");
  if (ctxGauge) {
    if (gaugeAvailabilityInstance) gaugeAvailabilityInstance.destroy();

    let gaugeDatasets = [];
    let needleColor = "#E60012";

    if (!hasData) {
      gaugeDatasets = [{
        data: [0, 100],
        backgroundColor: ["#CBD5E1", "#F1F5F9"],
        hoverBackgroundColor: ["#CBD5E1", "#F1F5F9"],
        borderWidth: 0,
        circumference: 180,
        rotation: -90,
        cutout: "75%",
        borderRadius: [8, 0]
      }];
      needleColor = "#94A3B8";
    } else if (speedometerColorTheme === "multi") {
      // Automotive 3-Zone Car Tachometer / Speedometer Dial
      gaugeDatasets = [{
        data: [90, 8, 2],
        backgroundColor: ["#EF4444", "#F59E0B", "#10B981"],
        hoverBackgroundColor: ["#DC2626", "#D97706", "#059669"],
        borderWidth: 2,
        borderColor: "#FFFFFF",
        circumference: 180,
        rotation: -90,
        cutout: "75%",
        borderRadius: [6, 0, 6]
      }];
      needleColor = "#0F172A"; // High contrast sporty dark needle
    } else {
      let activeColor = "#10B981";
      let trackBg = "#F1F5F9";
      if (speedometerColorTheme === "red") {
        activeColor = "#E60012";
        needleColor = "#E60012";
        trackBg = "#FEE2E2";
      } else if (speedometerColorTheme === "cyan") {
        activeColor = "#00F2FE";
        needleColor = "#0284C7";
        trackBg = "#E0F2FE";
      } else if (speedometerColorTheme === "amber") {
        activeColor = "#F59E0B";
        needleColor = "#D97706";
        trackBg = "#FEF3C7";
      } else { // emerald
        activeColor = "#10B981";
        needleColor = "#059669";
        trackBg = "#D1FAE5";
      }

      gaugeDatasets = [{
        data: [overallAvailability, Math.max(0, 100 - overallAvailability)],
        backgroundColor: [activeColor, trackBg],
        hoverBackgroundColor: [activeColor, trackBg],
        borderWidth: 0,
        circumference: 180,
        rotation: -90,
        cutout: "75%",
        borderRadius: [8, 0]
      }];
    }

    // Car Speedometer Needle and Dial Tick Marks Plugin
    const carNeedlePlugin = {
      id: "carNeedlePlugin",
      afterDatasetDraw(chart) {
        const { ctx } = chart;
        ctx.save();
        const meta = chart.getDatasetMeta(0);
        if (!meta || !meta.data || !meta.data[0]) {
          ctx.restore();
          return;
        }
        const x = meta.data[0].x;
        const y = meta.data[0].y;
        const outerRadius = meta.data[0].outerRadius;
        const innerRadius = meta.data[0].innerRadius;

        // Draw car speed gauge tick marks along the outer perimeter
        const ticks = 10;
        for (let i = 0; i <= ticks; i++) {
          const tAngle = Math.PI + (i / ticks) * Math.PI;
          const r1 = outerRadius + 2;
          const r2 = outerRadius + (i % 2 === 0 ? 7 : 4);
          ctx.beginPath();
          ctx.moveTo(x + Math.cos(tAngle) * r1, y + Math.sin(tAngle) * r1);
          ctx.lineTo(x + Math.cos(tAngle) * r2, y + Math.sin(tAngle) * r2);
          ctx.strokeStyle = i < 7 ? "#CBD5E1" : (i < 9 ? "#F59E0B" : "#10B981");
          ctx.lineWidth = i % 2 === 0 ? 2 : 1;
          ctx.stroke();
        }

        // Calculate needle angle for availability percentage
        const clampedVal = hasData ? Math.min(100, Math.max(0, overallAvailability)) : 0;
        const needleAngle = Math.PI + (clampedVal / 100) * Math.PI;
        const needleLength = innerRadius + (outerRadius - innerRadius) * 0.75;

        // Draw aerodynamic luxury sports needle with shadow and ruby center
        ctx.translate(x, y);
        ctx.rotate(needleAngle);

        // Needle drop shadow
        ctx.shadowColor = "rgba(0, 0, 0, 0.35)";
        ctx.shadowBlur = 4;
        ctx.shadowOffsetX = 1;
        ctx.shadowOffsetY = 1;

        ctx.beginPath();
        ctx.moveTo(0, -3.5);
        ctx.lineTo(needleLength, 0);
        ctx.lineTo(0, 3.5);
        ctx.lineTo(-8, 0);
        ctx.closePath();
        ctx.fillStyle = needleColor;
        ctx.fill();

        // Reset shadow for center cap
        ctx.shadowColor = "transparent";

        // Car gauge center cap (executive chrome/slate hub)
        ctx.beginPath();
        ctx.arc(0, 0, 7, 0, Math.PI * 2);
        ctx.fillStyle = "#0F172A";
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#FFFFFF";
        ctx.stroke();

        // Ruby center indicator
        ctx.beginPath();
        ctx.arc(0, 0, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = needleColor === "#0F172A" ? "#E60012" : "#FFFFFF";
        ctx.fill();

        ctx.restore();
      }
    };

    gaugeAvailabilityInstance = new Chart(ctxGauge, {
      type: "doughnut",
      data: {
        labels: speedometerColorTheme === "multi" ? ["Critical (<90%)", "Warning (90-98%)", "≥98%"] : ["Availability", "Downtime"],
        datasets: gaugeDatasets
      },
      plugins: [carNeedlePlugin],
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => speedometerColorTheme === "multi"
                ? ` ${ctx.label}: Speed Target`
                : ` ${ctx.label}: ${ctx.raw.toFixed(2)}%`
            }
          }
        }
      }
    });
  }

  // -------------------------------------------------------------
  // Total Automatch Availability Badges (Year, Month, Day)
  // -------------------------------------------------------------
  const yearMode = dashboardDateFilter.year || "2026";
  let yearRecs = [];
  let yearDays = 365;
  if (yearMode === "FY2026") {
    yearRecs = downtimeRecords.filter(r => r.issueDate && r.issueDate >= "2026-04-01" && r.issueDate <= "2027-03-31");
    yearDays = 365;
  } else if (yearMode === "2026") {
    yearRecs = downtimeRecords.filter(r => r.issueDate && r.issueDate.startsWith("2026"));
    yearDays = 365;
  } else {
    yearRecs = downtimeRecords.filter(r => r.issueDate);
    const uniqueDays = new Set(yearRecs.map(r => r.issueDate));
    yearDays = Math.max(30, uniqueDays.size);
  }
  const yearOpMins = yearDays * 24 * 60 * standardAreas.length;
  const yearDtMins = yearRecs.reduce((acc, r) => acc + (parseInt(r.downtimeMinutes, 10) || 0), 0);
  const yearAvail = yearOpMins > 0 ? Math.min(100, Math.max(0, ((yearOpMins - yearDtMins) / yearOpMins) * 100)) : 100;

  // Determine target month: selected month, or latest recorded month, or current month
  let targetMonth = dashboardDateFilter.month;
  if (!targetMonth || targetMonth === "ALL") {
    if (downtimeRecords.length > 0 && downtimeRecords[downtimeRecords.length - 1].issueDate) {
      targetMonth = downtimeRecords[downtimeRecords.length - 1].issueDate.substring(0, 7);
    } else {
      const today = new Date();
      targetMonth = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}`;
    }
  }

  const monthRecs = downtimeRecords.filter(r => r.issueDate && r.issueDate.startsWith(targetMonth));
  const [tYear, tMonth] = targetMonth.split("-").map(Number);
  const mDays = getElapsedDaysInMonth(tYear, tMonth, downtimeRecords);
  const monthOpMins = Math.max(1, mDays) * 24 * 60 * standardAreas.length;
  const monthDtMins = monthRecs.reduce((acc, r) => acc + (parseInt(r.downtimeMinutes, 10) || 0), 0);
  const monthAvail = monthOpMins > 0 ? Math.min(100, Math.max(0, ((monthOpMins - monthDtMins) / monthOpMins) * 100)) : 100;

  const elYearAvail = document.getElementById("kpiYearAvailVal");
  const elYearLabel = document.getElementById("kpiYearLabel");
  const elMonthAvail = document.getElementById("kpiMonthAvailVal");
  const elDayAvail = document.getElementById("kpiDayAvailVal");
  const elMonthlyTitle = document.getElementById("monthlyAvailabilityTitle");

  if (elYearAvail) elYearAvail.textContent = `${yearAvail.toFixed(2)}%`;
  if (elYearLabel) elYearLabel.textContent = yearMode === "FY2026" ? "FY 26-27" : (yearMode === "2026" ? "CY 2026" : "All");
  if (elMonthAvail) elMonthAvail.textContent = `${monthAvail.toFixed(2)}%`;
  if (elDayAvail) elDayAvail.textContent = `${overallAvailFormatted}%`;
  if (elMonthlyTitle) {
    const yrLabel = yearMode === "FY2026" ? "FY 2026-27 (Apr-Mar)" : (yearMode === "2026" ? "CY 2026" : "All Periods");
    elMonthlyTitle.textContent = `Monthly Availability (${yrLabel})`;
  }

  // -------------------------------------------------------------
  // Chart 1B: Monthly Availability (Automatching Fiscal Year & Months)
  // -------------------------------------------------------------
  const ctxMonthly = document.getElementById("chartMonthlyAvailability");
  if (ctxMonthly) {
    if (monthlyAvailabilityInstance) monthlyAvailabilityInstance.destroy();

    // Dynamically identify months for the chosen year convention
    const fyMonthSet = new Set();
    if (yearMode === "FY2026") {
      ["2026-04", "2026-05", "2026-06", "2026-07", "2026-08", "2026-09", "2026-10", "2026-11", "2026-12", "2027-01", "2027-02", "2027-03"].forEach(m => fyMonthSet.add(m));
    } else if (yearMode === "2026") {
      for (let mo = 1; mo <= 12; mo++) {
        fyMonthSet.add(`2026-${String(mo).padStart(2, "0")}`);
      }
    } else {
      downtimeRecords.forEach(r => {
        if (r.issueDate && r.issueDate.length >= 7) {
          fyMonthSet.add(r.issueDate.substring(0, 7));
        }
      });
      const curY = new Date().getFullYear();
      for (let mo = 1; mo <= 12; mo++) {
        fyMonthSet.add(`${curY}-${String(mo).padStart(2, "0")}`);
      }
    }

    // Also include months present in records
    downtimeRecords.forEach(r => {
      if (r.issueDate && r.issueDate.length >= 7) {
        const ym = r.issueDate.substring(0, 7);
        if (yearMode === "ALL" || (yearMode === "2026" && ym.startsWith("2026")) || (yearMode === "FY2026" && (ym.startsWith("2026") || ym.startsWith("2027")))) {
          fyMonthSet.add(ym);
        }
      }
    });

    const fyMonths = Array.from(fyMonthSet).sort();

    const fyLabels = fyMonths.map(ym => {
      const [y, m] = ym.split("-").map(Number);
      return getMonthName(m - 1).substring(0, 3) + (dashboardDateFilter.year === "ALL" ? ` '${String(y).slice(-2)}` : "");
    });
    const fyValues = [];
    const fyColors = [];
    const fyBorders = [];
    const fyBorderWidths = [];

    fyMonths.forEach(ym => {
      const [y, m] = ym.split("-").map(Number);
      const days = getElapsedDaysInMonth(y, m, downtimeRecords);
      const op = Math.max(1, days) * 24 * 60 * standardAreas.length;
      const mRecs = downtimeRecords.filter(r => r.issueDate && r.issueDate.startsWith(ym));
      const dt = mRecs.reduce((acc, r) => acc + (parseInt(r.downtimeMinutes, 10) || 0), 0);
      const avail = Math.min(100, Math.max(0, ((op - dt) / op) * 100));
      fyValues.push(parseFloat(avail.toFixed(2)));

      if (avail >= 99.0) fyColors.push("#10B981");
      else if (avail >= 95.0) fyColors.push("#F59E0B");
      else fyColors.push("#EF4444");

      if (dashboardDateFilter.month === ym) {
        fyBorders.push("#065F46");
        fyBorderWidths.push(3);
      } else {
        fyBorders.push("transparent");
        fyBorderWidths.push(0);
      }
    });

    monthlyAvailabilityInstance = new Chart(ctxMonthly, {
      type: "bar",
      data: {
        labels: fyLabels,
        datasets: [{
          label: "Availability %",
          data: fyValues,
          backgroundColor: fyColors,
          borderColor: fyBorders,
          borderWidth: fyBorderWidths,
          borderRadius: 6,
          borderSkipped: false
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        onClick: (evt, elements) => {
          if (elements && elements.length > 0) {
            const idx = elements[0].index;
            const clickedMonth = fyMonths[idx];
            const select = document.getElementById("dashboardMonthFilter");
            if (select) select.value = clickedMonth;
            if (typeof onDashboardMonthChange === "function") {
              onDashboardMonthChange(clickedMonth);
            }
          }
        },
        onHover: (evt, elements) => {
          if (evt && evt.native && evt.native.target) {
            evt.native.target.style.cursor = elements.length > 0 ? "pointer" : "default";
          }
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => ` Availability: ${ctx.raw}% (Click to select month)`
            }
          }
        },
        scales: {
          x: { grid: { display: false }, ticks: { font: { family: 'Plus Jakarta Sans', weight: '700' }, color: "#64748B" } },
          y: {
            min: Math.max(90, Math.floor(Math.min(...fyValues, 98) - 1)),
            max: 100,
            grid: { color: "#F1F5F9" },
            ticks: {
              font: { family: 'JetBrains Mono' },
              color: "#64748B",
              callback: (val) => `${val}%`
            }
          }
        }
      }
    });
  }

  // -------------------------------------------------------------
  // Chart 1C: Area Wise Availability (Clean White & Green Simple)
  // -------------------------------------------------------------
  const ctxAreaAvail = document.getElementById("chartAreaAvailability");
  const areaAvailBadge = document.getElementById("chartAreaAvailBadge");
  if (areaAvailBadge) {
    areaAvailBadge.textContent = dashboardDateFilter.month !== "ALL" ? dashboardDateFilter.month : "FY Period";
  }
  if (ctxAreaAvail) {
    if (areaAvailabilityInstance) areaAvailabilityInstance.destroy();

    const areaOpMins = periodDays * 24 * 60;
    const areaAvailData = [];
    const areaColors = [];

    standardAreas.forEach(area => {
      const aRecs = records.filter(r => r.area === area);
      const dt = aRecs.reduce((acc, r) => acc + (parseInt(r.downtimeMinutes, 10) || 0), 0);
      const avail = Math.min(100, Math.max(0, ((areaOpMins - dt) / areaOpMins) * 100));
      const val = parseFloat(avail.toFixed(2));
      areaAvailData.push(val);

      if (val >= 99.0) {
        areaColors.push("#10B981"); // Clean Emerald Green
      } else if (val >= 95.0) {
        areaColors.push("#F59E0B"); // Warning Amber
      } else {
        areaColors.push("#EF4444"); // Critical Red
      }
    });

    areaAvailabilityInstance = new Chart(ctxAreaAvail, {
      type: "bar",
      data: {
        labels: standardAreas,
        datasets: [{
          label: "Availability %",
          data: areaAvailData,
          backgroundColor: areaColors,
          hoverBackgroundColor: "#059669",
          borderColor: "#10B981",
          borderWidth: 1,
          borderRadius: 6,
          borderSkipped: false
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        onClick: (evt, elements) => {
          if (elements && elements.length > 0) {
            const idx = elements[0].index;
            const clickedArea = standardAreas[idx];
            if (typeof filterByAreaFromCard === "function") {
              filterByAreaFromCard(clickedArea);
            }
          }
        },
        onHover: (evt, elements) => {
          if (evt && evt.native && evt.native.target) {
            evt.native.target.style.cursor = elements.length > 0 ? "pointer" : "default";
          }
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => {
                const area = ctx.label;
                const pct = ctx.raw;
                const aRecs = records.filter(r => r.area === area);
                const dt = aRecs.reduce((acc, r) => acc + (parseInt(r.downtimeMinutes, 10) || 0), 0);
                const statusTag = pct < 95.0 ? ' [Critical]' : (pct < 99.0 ? ' [Warning]' : '');
                return [
                  ` Availability: ${pct}%${statusTag}`,
                  ` Total Downtime: ${dt}m (${(dt / 60).toFixed(1)} hrs)`,
                  ` Incidents: ${aRecs.length} events`
                ];
              }
            }
          }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: {
              color: "#64748B",
              font: { family: 'Plus Jakarta Sans', weight: '600', size: 10 }
            }
          },
          y: {
            min: Math.max(80, Math.floor(Math.min(...areaAvailData, 95) - 2)),
            max: 100,
            grid: { color: "#F1F5F9" },
            ticks: {
              color: "#64748B",
              font: { family: 'JetBrains Mono', size: 10 },
              callback: (val) => `${val}%`
            }
          }
        }
      }
    });
  }

  // -------------------------------------------------------------
  // Chart 1D: Process Wise Availability
  // -------------------------------------------------------------
  const ctxProcAvail = document.getElementById("chartProcessAvailability");
  if (ctxProcAvail) {
    if (processAvailabilityInstance) processAvailabilityInstance.destroy();

    const topProcesses = ["Stage-1", "Unistage", "Stage-2", "Biascutter", "Band Building", "Mixing", "Extruder", "Bead Building", "Tire Curing", "Solid Curing"];
    const procOpMins = periodDays * 24 * 60;
    const procAvailData = [];
    const procColors = [];

    topProcesses.forEach(proc => {
      const pRecs = records.filter(r => {
        if (!r.process) return false;
        if (r.process === proc) return true;
        if (proc.includes("Curing") && r.process.includes("Curing")) return true;
        if (proc.includes("Bias") && r.process.includes("Bias")) return true;
        if (proc.includes("Extrud") && r.process.includes("Extrud")) return true;
        return false;
      });
      const dt = pRecs.reduce((acc, r) => acc + (parseInt(r.downtimeMinutes, 10) || 0), 0);
      const avail = Math.min(100, Math.max(0, ((procOpMins - dt) / procOpMins) * 100));
      procAvailData.push(parseFloat(avail.toFixed(2)));
      if (avail >= 99.0) procColors.push("#10B981");
      else if (avail >= 95.0) procColors.push("#F59E0B");
      else procColors.push("#EF4444");
    });

    processAvailabilityInstance = new Chart(ctxProcAvail, {
      type: "bar",
      data: {
        labels: topProcesses,
        datasets: [{
          label: "Process Availability %",
          data: procAvailData,
          backgroundColor: procColors,
          borderRadius: 6,
          borderSkipped: false
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => ` ${ctx.label}: ${ctx.raw}% Availability`
            }
          }
        },
        scales: {
          x: { grid: { display: false }, ticks: { font: { family: 'Plus Jakarta Sans', weight: '600', size: 10 } } },
          y: {
            min: 90,
            max: 100,
            grid: { color: "#F1F5F9" },
            ticks: {
              font: { family: 'JetBrains Mono' },
              callback: (val) => `${val}%`
            }
          }
        }
      }
    });
  }

  // -------------------------------------------------------------
  // Chart 1E: Day Wise Availability & Downtime Trend (Business Dual-Axis)
  // -------------------------------------------------------------
  const ctxDayAvail = document.getElementById("chartDayAvailability");
  const dayBadgeEl = document.getElementById("chartDayAvailBadge");
  if (ctxDayAvail) {
    if (dayAvailabilityInstance) dayAvailabilityInstance.destroy();

    const dailyMap = {};
    records.forEach(r => {
      if (r.issueDate) {
        dailyMap[r.issueDate] = (dailyMap[r.issueDate] || 0) + (parseInt(r.downtimeMinutes, 10) || 0);
      }
    });

    let dayLabels = [];
    let dayAvailValues = [];
    let dayDtValues = [];
    const dailyOperatingMins = 24 * 60 * standardAreas.length; // 11,520 mins/day

    if (dashboardDateFilter.month !== "ALL" || (dashboardDateFilter.startDate && dashboardDateFilter.endDate)) {
      if (dayBadgeEl) dayBadgeEl.textContent = "Daily Trajectory";
      const sortedDates = Object.keys(dailyMap).sort();
      sortedDates.forEach(dStr => {
        const parts = dStr.split("-");
        const dt = dailyMap[dStr];
        const avail = Math.min(100, Math.max(0, ((dailyOperatingMins - dt) / dailyOperatingMins) * 100));
        dayLabels.push(`${parts[2]} ${getMonthName(parseInt(parts[1], 10) - 1).substring(0, 3)}`);
        dayAvailValues.push(parseFloat(avail.toFixed(2)));
        dayDtValues.push(dt);
      });
    } else {
      if (dayBadgeEl) dayBadgeEl.textContent = "Monthly Trajectory";
      const monthlyDtMap = {};
      downtimeRecords.forEach(r => {
        if (r.issueDate && r.issueDate.length >= 7) {
          const ym = r.issueDate.substring(0, 7);
          monthlyDtMap[ym] = (monthlyDtMap[ym] || 0) + (parseInt(r.downtimeMinutes, 10) || 0);
        }
      });
      const sortedYM = Object.keys(monthlyDtMap).sort();
      sortedYM.forEach(ym => {
        const [y, m] = ym.split("-").map(Number);
        const days = getElapsedDaysInMonth(y, m, downtimeRecords);
        const op = Math.max(1, days) * 24 * 60 * standardAreas.length;
        const dt = monthlyDtMap[ym];
        const avail = Math.min(100, Math.max(0, ((op - dt) / op) * 100));
        dayLabels.push(`${getMonthName(m - 1).substring(0, 3)} ${y}`);
        dayAvailValues.push(parseFloat(avail.toFixed(2)));
        dayDtValues.push(dt);
      });
    }

    if (dayLabels.length === 0) {
      dayLabels = ["No Data"];
      dayAvailValues = [100];
      dayDtValues = [0];
    }

    const minAvail = Math.max(88, Math.floor(Math.min(...dayAvailValues, 98) - 1));
    const maxDt = Math.max(...dayDtValues, 60);

    dayAvailabilityInstance = new Chart(ctxDayAvail, {
      type: "line",
      data: {
        labels: dayLabels,
        datasets: [
          {
            label: "Availability (Uptime %)",
            data: dayAvailValues,
            borderColor: "#059669",
            backgroundColor: "rgba(5, 150, 105, 0.08)",
            borderWidth: 2.5,
            fill: true,
            tension: 0.32,
            yAxisID: "y",
            pointBackgroundColor: "#0F172A",
            pointBorderColor: "#059669",
            pointBorderWidth: 2,
            pointRadius: 4,
            pointHoverRadius: 6
          },
          {
            label: "Downtime Loss (Mins)",
            data: dayDtValues,
            borderColor: "#E60012",
            backgroundColor: "rgba(230, 0, 18, 0.04)",
            borderWidth: 2,
            borderDash: [5, 4],
            fill: false,
            tension: 0.32,
            yAxisID: "y1",
            pointBackgroundColor: "#E60012",
            pointBorderColor: "#FFFFFF",
            pointBorderWidth: 2,
            pointRadius: 4,
            pointHoverRadius: 6
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: "index",
          intersect: false
        },
        plugins: {
          legend: {
            display: true,
            position: "top",
            align: "end",
            labels: {
              font: { family: 'Plus Jakarta Sans', weight: '700', size: 10 },
              boxWidth: 12,
              padding: 12,
              usePointStyle: true,
              pointStyle: "circle"
            }
          },
          tooltip: {
            backgroundColor: "#0F172A",
            titleFont: { family: 'Plus Jakarta Sans', weight: '700', size: 11 },
            bodyFont: { family: 'JetBrains Mono', size: 11 },
            padding: 10,
            cornerRadius: 6,
            callbacks: {
              label: (ctx) => {
                if (ctx.datasetIndex === 0) {
                  return ` Availability (Uptime): ${ctx.raw}%`;
                } else {
                  const mins = ctx.raw;
                  return ` Downtime Loss: ${mins} mins (${(mins / 60).toFixed(1)} hrs)`;
                }
              }
            }
          }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: {
              font: { family: 'Plus Jakarta Sans', weight: '600', size: 10 },
              color: "#64748B"
            }
          },
          y: {
            type: "linear",
            display: true,
            position: "left",
            min: minAvail,
            max: 100,
            grid: { color: "#F1F5F9" },
            title: {
              display: true,
              text: "Availability %",
              color: "#059669",
              font: { family: 'Plus Jakarta Sans', weight: '700', size: 10 }
            },
            ticks: {
              font: { family: 'JetBrains Mono', size: 10 },
              color: "#059669",
              callback: (val) => `${val}%`
            }
          },
          y1: {
            type: "linear",
            display: true,
            position: "right",
            min: 0,
            max: Math.ceil(maxDt * 1.15),
            grid: { drawOnChartArea: false },
            title: {
              display: true,
              text: "Downtime (Mins)",
              color: "#E60012",
              font: { family: 'Plus Jakarta Sans', weight: '700', size: 10 }
            },
            ticks: {
              font: { family: 'JetBrains Mono', size: 10 },
              color: "#E60012",
              callback: (val) => `${val}m`
            }
          }
        }
      }
    });
  }

  // -------------------------------------------------------------
  // Chart 2A: Area Wise Downtime (Matching Red Yokohama Downtime Theme)
  // -------------------------------------------------------------
  const ctxAreaDt = document.getElementById("chartAreaDowntime");
  const areaDtBadge = document.getElementById("chartAreaDowntimeBadge");
  if (ctxAreaDt) {
    if (areaDowntimeInstance) areaDowntimeInstance.destroy();

    const areaDtData = standardAreas.map(area => {
      const aRecs = records.filter(r => r.area === area);
      return aRecs.reduce((acc, r) => acc + (parseInt(r.downtimeMinutes, 10) || 0), 0);
    });

    const totalAreaDt = areaDtData.reduce((a, b) => a + b, 0);
    if (areaDtBadge) {
      areaDtBadge.textContent = `${totalAreaDt}m (${(totalAreaDt / 60).toFixed(1)}h)`;
    }

    areaDowntimeInstance = new Chart(ctxAreaDt, {
      type: "bar",
      data: {
        labels: standardAreas,
        datasets: [{
          label: "Downtime (mins)",
          data: areaDtData,
          backgroundColor: "#E60012",
          hoverBackgroundColor: "#B9000E",
          borderRadius: 6,
          borderSkipped: false
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        onClick: (evt, elements) => {
          if (elements && elements.length > 0) {
            const idx = elements[0].index;
            const clickedArea = standardAreas[idx];
            if (typeof filterByAreaFromCard === "function") {
              filterByAreaFromCard(clickedArea);
            }
          }
        },
        onHover: (evt, elements) => {
          if (evt && evt.native && evt.native.target) {
            evt.native.target.style.cursor = elements.length > 0 ? "pointer" : "default";
          }
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => {
                const mins = ctx.raw;
                const hrs = (mins / 60).toFixed(1);
                const aRecs = records.filter(r => r.area === ctx.label);
                return ` Downtime: ${mins} mins (${hrs} hrs) • ${aRecs.length} events`;
              }
            }
          }
        },
        scales: {
          x: { grid: { display: false }, ticks: { font: { family: 'Plus Jakarta Sans', weight: '600', size: 10 }, color: "#64748B" } },
          y: { grid: { color: "#F1F5F9" }, ticks: { font: { family: 'JetBrains Mono' }, color: "#64748B" } }
        }
      }
    });
  }

  // -------------------------------------------------------------
  // Chart 2B: Process Wise Downtime
  // -------------------------------------------------------------
  const ctxProcDt = document.getElementById("chartProcessDowntime");
  const procDtBadge = document.getElementById("chartProcessDowntimeBadge");
  if (ctxProcDt) {
    if (processDowntimeInstance) processDowntimeInstance.destroy();

    const topProcesses = ["Stage-1", "Unistage", "Stage-2", "Cutter", "Band", "Mixing", "Extrusion", "Bead Winding", "Curing", "3Roll"];
    const procDtData = topProcesses.map(proc => {
      const pRecs = records.filter(r => r.process === proc);
      return pRecs.reduce((acc, r) => acc + (parseInt(r.downtimeMinutes, 10) || 0), 0);
    });

    const totalProcDt = procDtData.reduce((a, b) => a + b, 0);
    if (procDtBadge) {
      procDtBadge.textContent = `${totalProcDt}m (${(totalProcDt / 60).toFixed(1)}h)`;
    }

    processDowntimeInstance = new Chart(ctxProcDt, {
      type: "bar",
      data: {
        labels: topProcesses,
        datasets: [{
          label: "Downtime (mins)",
          data: procDtData,
          backgroundColor: "#E60012",
          hoverBackgroundColor: "#B9000E",
          borderRadius: 6,
          borderSkipped: false
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => ` ${ctx.raw} mins (${(ctx.raw / 60).toFixed(1)} hrs)`
            }
          }
        },
        scales: {
          x: { grid: { display: false }, ticks: { font: { family: 'Plus Jakarta Sans', weight: '600', size: 10 }, color: "#64748B" } },
          y: { grid: { color: "#F1F5F9" }, ticks: { font: { family: 'JetBrains Mono' }, color: "#64748B" } }
        }
      }
    });
  }

  // -------------------------------------------------------------
  // Chart 2B: Category Wise Loss Breakdown (Multi-Mode: Pie, Bar, Graph)
  // -------------------------------------------------------------
  renderCategoryChart(records);
}

// Dedicated Category Loss Breakdown Chart Renderer (Supports Pie, Bar, and Line Graph)
window.renderCategoryChart = function(records) {
  if (!records) {
    if (typeof getFilteredDashboardRecords === "function") {
      records = getFilteredDashboardRecords();
    } else if (typeof downtimeRecords !== "undefined") {
      records = downtimeRecords;
    } else {
      records = [];
    }
  }

  const ctxCatPie = document.getElementById("chartCategoryPie");
  if (ctxCatPie) {
    if (categoryPieInstance) categoryPieInstance.destroy();

    updateCategoryChartButtons();

    // Palette with distinct colors for up to 16 categories
    const colorPalette = [
      "#E60012", "#0F172A", "#2563EB", "#F59E0B", "#059669",
      "#7C3AED", "#EC4899", "#06B6D4", "#84CC16", "#D97706",
      "#6366F1", "#14B8A6", "#8B5CF6", "#F43F5E", "#10B981", "#64748B"
    ];

    const knownColors = {
      "NSNL": "#E60012",
      "IPC": "#0F172A",
      "Printer": "#2563EB",
      "Scanner": "#F59E0B",
      "Infra": "#059669",
      "MES": "#7C3AED",
      "Network": "#0284C7",
      "Server": "#4F46E5",
      "SAP": "#D97706",
      "Power Failure": "#DC2626",
      "PLC Communication": "#10B981",
      "PLC": "#10B981",
      "Hardware": "#64748B",
      "Hardware / PC": "#64748B"
    };

    // Aggregate downtime dynamically across all categories in the active dataset
    const catMap = new Map();

    records.forEach(r => {
      const rawCat = (r.category && String(r.category).trim()) || (r.nature && String(r.nature).trim()) || "MES";
      let matchKey = null;
      for (const k of catMap.keys()) {
        if (k.toLowerCase() === rawCat.toLowerCase()) {
          matchKey = k;
          break;
        }
      }
      if (!matchKey) {
        matchKey = rawCat;
        catMap.set(matchKey, { mins: 0, count: 0 });
      }

      const totMins = parseInt(r.totalDowntimeMinutes, 10);
      const dtMin = parseInt(r.downtimeMinutes, 10) || 0;
      const aff = parseInt(r.affectedMachines, 10) || 1;
      const effectiveMins = (!isNaN(totMins) && totMins > 0) ? totMins : (dtMin * aff);

      const entry = catMap.get(matchKey);
      entry.mins += effectiveMins;
      entry.count += 1;
    });

    let sortedCats = Array.from(catMap.entries())
      .filter(([_, data]) => data.count > 0 || data.mins > 0)
      .sort((a, b) => b[1].mins - a[1].mins || b[1].count - a[1].count);

    if (sortedCats.length === 0) {
      const defaultCats = ["NSNL", "IPC", "Printer", "Scanner", "Infra", "MES"];
      sortedCats = defaultCats.map(c => [c, { mins: 0, count: 0 }]);
    }

    const categories = sortedCats.map(c => c[0]);
    const catMins = sortedCats.map(c => c[1].mins);
    const catCounts = sortedCats.map(c => c[1].count);
    const catColors = categories.map((cat, idx) => knownColors[cat] || colorPalette[idx % colorPalette.length]);

    const totalCatMins = catMins.reduce((a, b) => a + b, 0);
    const safeTotalCatMins = totalCatMins > 0 ? totalCatMins : 1;

    let chartType = "doughnut";
    let chartData = {};
    let chartPlugins = [];
    let chartOptions = {
      responsive: true,
      maintainAspectRatio: false
    };

    if (categoryChartType === "bar") {
      chartType = "bar";
      chartData = {
        labels: categories,
        datasets: [{
          label: "Downtime (Minutes)",
          data: catMins,
          backgroundColor: catColors,
          borderRadius: 6,
          borderWidth: 1,
          borderColor: "#CBD5E1",
          maxBarThickness: 42
        }]
      };
      chartOptions.plugins = {
        legend: { display: false },
        tooltip: {
          backgroundColor: "#0F172A",
          titleFont: { family: 'Plus Jakarta Sans', weight: '700', size: 11 },
          bodyFont: { family: 'JetBrains Mono', size: 11 },
          padding: 10,
          cornerRadius: 6,
          callbacks: {
            label: (ctx) => {
              const idx = ctx.dataIndex;
              const mins = ctx.raw;
              const count = catCounts[idx];
              const pct = totalCatMins > 0 ? ((mins / totalCatMins) * 100).toFixed(1) : "0.0";
              return [
                ` Downtime: ${mins}m (${(mins / 60).toFixed(1)} hrs)`,
                ` Incidents: ${count} events`,
                ` Share: ${pct}% of Total Loss`
              ];
            }
          }
        }
      };
      chartOptions.scales = {
        x: {
          grid: { display: false },
          ticks: {
            color: "#64748B",
            font: { family: 'Plus Jakarta Sans', weight: '700', size: 11 }
          }
        },
        y: {
          beginAtZero: true,
          grid: { color: "#F1F5F9" },
          ticks: {
            color: "#94A3B8",
            font: { family: 'JetBrains Mono', size: 10 }
          },
          title: {
            display: true,
            text: "Downtime (Minutes)",
            color: "#64748B",
            font: { family: 'Plus Jakarta Sans', weight: '600', size: 10 }
          }
        }
      };
    } else if (categoryChartType === "line") {
      chartType = "line";
      chartData = {
        labels: categories,
        datasets: [{
          label: "Downtime (Minutes)",
          data: catMins,
          borderColor: "#E60012",
          backgroundColor: "rgba(230, 0, 18, 0.12)",
          fill: true,
          tension: 0.35,
          borderWidth: 2.5,
          pointBackgroundColor: catColors,
          pointBorderColor: "#FFFFFF",
          pointBorderWidth: 2,
          pointRadius: 6,
          pointHoverRadius: 8
        }]
      };
      chartOptions.plugins = {
        legend: { display: false },
        tooltip: {
          backgroundColor: "#0F172A",
          titleFont: { family: 'Plus Jakarta Sans', weight: '700', size: 11 },
          bodyFont: { family: 'JetBrains Mono', size: 11 },
          padding: 10,
          cornerRadius: 6,
          callbacks: {
            label: (ctx) => {
              const idx = ctx.dataIndex;
              const mins = ctx.raw;
              const count = catCounts[idx];
              const pct = totalCatMins > 0 ? ((mins / totalCatMins) * 100).toFixed(1) : "0.0";
              return [
                ` Downtime: ${mins}m (${(mins / 60).toFixed(1)} hrs)`,
                ` Incidents: ${count} events`,
                ` Share: ${pct}% of Total Loss`
              ];
            }
          }
        }
      };
      chartOptions.scales = {
        x: {
          grid: { display: false },
          ticks: {
            color: "#64748B",
            font: { family: 'Plus Jakarta Sans', weight: '700', size: 11 }
          }
        },
        y: {
          beginAtZero: true,
          grid: { color: "#F1F5F9" },
          ticks: {
            color: "#94A3B8",
            font: { family: 'JetBrains Mono', size: 10 }
          },
          title: {
            display: true,
            text: "Downtime (Minutes)",
            color: "#64748B",
            font: { family: 'Plus Jakarta Sans', weight: '600', size: 10 }
          }
        }
      };
    } else {
      // Default: "pie" (Doughnut)
      chartType = "doughnut";
      chartData = {
        labels: categories,
        datasets: [{
          data: catMins,
          backgroundColor: catColors,
          borderWidth: 2,
          borderColor: "#FFFFFF",
          hoverOffset: 6
        }]
      };

      // Center Donut Metric Readout Plugin (Executive Style)
      const donutCenterPlugin = {
        id: "donutCenterPlugin",
        afterDraw(chart) {
          const meta = chart.getDatasetMeta(0);
          if (!meta || !meta.data || !meta.data[0]) return;
          const cx = meta.data[0].x;
          const cy = meta.data[0].y;
          const { ctx } = chart;
          ctx.save();
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";

          if (totalCatMins === 0) {
            ctx.font = "bold 15px JetBrains Mono, monospace";
            ctx.fillStyle = "#10B981";
            ctx.fillText("0.0 hrs", cx, cy - 6);

            ctx.font = "bold 8px Plus Jakarta Sans, sans-serif";
            ctx.fillStyle = "#94A3B8";
            ctx.letterSpacing = "1px";
            ctx.fillText("ZERO DOWNTIME", cx, cy + 12);
          } else {
            const totalHours = (totalCatMins / 60).toFixed(1);
            ctx.font = "bold 17px JetBrains Mono, monospace";
            ctx.fillStyle = "#0F172A";
            ctx.fillText(`${totalHours} hrs`, cx, cy - 6);

            ctx.font = "bold 8px Plus Jakarta Sans, sans-serif";
            ctx.fillStyle = "#94A3B8";
            ctx.letterSpacing = "1px";
            ctx.fillText("TOTAL DOWNTIME", cx, cy + 12);
          }
          ctx.restore();
        }
      };
      chartPlugins = [donutCenterPlugin];

      chartOptions.cutout = "62%";
      chartOptions.plugins = {
        legend: {
          position: "right",
          labels: {
            font: { family: 'Plus Jakarta Sans', weight: '700', size: 10 },
            boxWidth: 10,
            padding: 8,
            generateLabels: (chart) => {
              const data = chart.data;
              return data.labels.map((label, i) => {
                const mins = data.datasets[0].data[i];
                const pct = totalCatMins > 0 ? ((mins / totalCatMins) * 100).toFixed(1) : "0.0";
                return {
                  text: `${label}: ${pct}%`,
                  fillStyle: data.datasets[0].backgroundColor[i],
                  strokeStyle: "#FFFFFF",
                  lineWidth: 1,
                  index: i
                };
              });
            }
          }
        },
        tooltip: {
          backgroundColor: "#0F172A",
          titleFont: { family: 'Plus Jakarta Sans', weight: '700', size: 11 },
          bodyFont: { family: 'JetBrains Mono', size: 11 },
          padding: 10,
          cornerRadius: 6,
          callbacks: {
            label: (ctx) => {
              const idx = ctx.dataIndex;
              const mins = ctx.raw;
              const count = catCounts[idx];
              const pct = totalCatMins > 0 ? ((mins / totalCatMins) * 100).toFixed(1) : "0.0";
              return [
                ` Downtime: ${mins}m (${(mins / 60).toFixed(1)} hrs)`,
                ` Incidents: ${count} events`,
                ` Share: ${pct}% of Total Loss`
              ];
            }
          }
        }
      };
    }

    categoryPieInstance = new Chart(ctxCatPie, {
      type: chartType,
      data: chartData,
      plugins: chartPlugins,
      options: chartOptions
    });
  }

  // -------------------------------------------------------------
  // Render Area-Wise Equipment Uptime Matrix (8-Card Grid)
  // -------------------------------------------------------------
  renderAreaUptimeMatrix();
}

// --- Area-Wise Plant Equipment Uptime & Availability Matrix ---
function renderAreaUptimeMatrix() {
  const container = document.getElementById("areaUptimeGrid");
  const badgeEl = document.getElementById("uptimeMatrixMonthBadge");
  if (!container) return;

  const records = getFilteredDashboardRecords();
  let monthLabel = "All Months";
  if (dashboardDateFilter.startDate && dashboardDateFilter.endDate) {
    monthLabel = `${dashboardDateFilter.startDate} to ${dashboardDateFilter.endDate}`;
  } else if (dashboardDateFilter.month !== "ALL") {
    const [y, m] = dashboardDateFilter.month.split("-");
    monthLabel = `${getMonthName(parseInt(m, 10) - 1)} ${y}`;
  }
  if (badgeEl) badgeEl.textContent = monthLabel;

  const standardAreas = ["Plant 1", "Plant 2", "Plant 3", "Plant 4", "4Roll shed", "Mixing Shed", "FID", "IT infra"];
  const periodDays = getDashboardPeriodDays();
  const operatingMins = periodDays * 24 * 60;
  const operatingHrs = Math.round(operatingMins / 60);

  const areaIcons = {
    "Plant 1": "fa-industry",
    "Plant 2": "fa-industry",
    "Plant 3": "fa-industry",
    "Plant 4": "fa-industry",
    "4Roll shed": "fa-gears",
    "Mixing Shed": "fa-blender",
    "FID": "fa-barcode",
    "IT infra": "fa-server"
  };

  const nodeCodes = {
    "Plant 1": "NODE // P-01",
    "Plant 2": "NODE // P-02",
    "Plant 3": "NODE // P-03",
    "Plant 4": "NODE // P-04",
    "4Roll shed": "NODE // 4R-SHED",
    "Mixing Shed": "NODE // MIX-01",
    "FID": "NODE // FID-QC",
    "IT infra": "NODE // IT-NET"
  };

  let html = "";

  const hasData = records.length > 0;
  standardAreas.forEach(area => {
    const areaRecs = records.filter(r => r.area === area);
    const downtimeMins = areaRecs.reduce((acc, r) => acc + (parseInt(r.downtimeMinutes, 10) || 0), 0);
    const incidentCount = areaRecs.length;
    const uptimeMins = Math.max(0, operatingMins - downtimeMins);
    const uptimePct = Math.min(100, Math.max(0, (uptimeMins / operatingMins) * 100));
    const uptimeFormatted = hasData ? uptimePct.toFixed(2) : "N/A";

    let statusBadgeClass = "bg-emerald-50 text-emerald-700 border-emerald-200";
    let statusText = "Optimal";
    let dotClass = "bg-emerald-500";
    let progressBarClass = "bg-emerald-500";
    let textColor = "text-emerald-600";
    let topBarColor = "bg-emerald-500";

    if (!hasData) {
      statusBadgeClass = "bg-slate-50 text-slate-600 border-slate-200";
      statusText = "No Data";
      dotClass = "bg-slate-400";
      progressBarClass = "bg-slate-300";
      textColor = "text-slate-500";
      topBarColor = "bg-slate-300";
    } else if (uptimePct < 95.0) {
      statusBadgeClass = "bg-rose-50 text-rose-700 border-rose-200";
      statusText = "Critical";
      dotClass = "bg-rose-500";
      progressBarClass = "bg-rose-500";
      textColor = "text-rose-600";
      topBarColor = "bg-rose-500";
    } else if (uptimePct < 99.0) {
      statusBadgeClass = "bg-amber-50 text-amber-700 border-amber-200";
      statusText = "Warning";
      dotClass = "bg-amber-500";
      progressBarClass = "bg-amber-500";
      textColor = "text-amber-600";
      topBarColor = "bg-amber-500";
    }

    const icon = areaIcons[area] || "fa-industry";
    const nodeCode = nodeCodes[area] || "NODE // 00";

    html += `
      <div onclick="filterByAreaFromCard('${escapeHtml(area)}')" class="cursor-pointer group p-4 rounded-xl border border-slate-200 bg-white hover:border-emerald-500 hover:shadow-md transition-all relative overflow-hidden flex flex-col justify-between hover:scale-[1.01] hover:-translate-y-0.5" title="Click to filter incident log for ${escapeHtml(area)}">
        <!-- Top Status Stripe -->
        <div class="absolute top-0 left-0 right-0 h-1 ${topBarColor}"></div>

        <div>
          <!-- Header: Icon, Node Code, Title, Status Badge -->
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-2.5">
              <div class="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-emerald-50 text-slate-700 group-hover:text-emerald-700 flex items-center justify-center text-xs transition-colors">
                <i class="fa-solid ${icon}"></i>
              </div>
              <div>
                <span class="text-[9px] font-mono font-bold tracking-wider text-slate-400 block">${nodeCode}</span>
                <h5 class="text-xs font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">${escapeHtml(area)}</h5>
              </div>
            </div>
            <span class="inline-flex items-center gap-1.5 text-[10px] font-bold px-2 py-0.5 rounded-full border ${statusBadgeClass}">
              <span class="w-1.5 h-1.5 rounded-full ${dotClass}"></span> ${statusText}
            </span>
          </div>

          <!-- Availability Value & Target -->
          <div class="flex items-baseline justify-between mt-2 mb-1">
            <span class="text-2xl sm:text-3xl font-black font-mono tracking-tight ${textColor}">${uptimeFormatted}${hasData ? '%' : ''}</span>
            <span class="text-[9px] font-bold text-slate-400 bg-slate-100 border border-slate-200 px-1.5 py-0.5 rounded font-mono">TGT 99.5%</span>
          </div>

          <!-- Clean Progress Bar -->
          <div class="w-full bg-slate-100 rounded-full h-2 overflow-hidden mb-3 border border-slate-100">
            <div class="h-full rounded-full transition-all duration-500 ${progressBarClass}" style="width: ${hasData ? Math.min(100, Math.max(0, uptimePct)) : 0}%"></div>
          </div>

          <!-- Micro-Telemetry Grid -->
          <div class="grid grid-cols-3 gap-1.5 pt-2 border-t border-slate-100 text-center">
            <div class="bg-slate-50 rounded-lg p-1.5 border border-slate-100">
              <div class="text-[8px] font-bold text-slate-400 uppercase tracking-wider">Downtime</div>
              <div class="text-[11px] font-bold font-mono ${downtimeMins > 0 ? 'text-red-600' : 'text-slate-700'}">${downtimeMins}m</div>
            </div>
            <div class="bg-slate-50 rounded-lg p-1.5 border border-slate-100">
              <div class="text-[8px] font-bold text-slate-400 uppercase tracking-wider">Operated</div>
              <div class="text-[11px] font-bold font-mono text-slate-700">${operatingHrs}h</div>
            </div>
            <div class="bg-slate-50 rounded-lg p-1.5 border border-slate-100">
              <div class="text-[8px] font-bold text-slate-400 uppercase tracking-wider">Incidents</div>
              <div class="text-[11px] font-bold font-mono ${incidentCount > 0 ? 'text-red-600' : 'text-slate-700'}">${incidentCount}</div>
            </div>
          </div>
        </div>

        <!-- Action Cue -->
        <div class="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-slate-400 group-hover:text-emerald-600 transition-colors">
          <span class="flex items-center gap-1.5"><i class="fa-solid fa-list-check text-[10px]"></i> View Incidents</span>
          <i class="fa-solid fa-chevron-right text-[9px] group-hover:translate-x-1 transition-transform"></i>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

window.filterByAreaFromCard = function(areaName) {
  const areaSelect = document.getElementById("filterArea") || document.getElementById("filter-area");
  if (areaSelect) {
    areaSelect.value = areaName;
    currentFilter.area = areaName;
    applyFilter();
    const tableSec = document.getElementById("table-section");
    if (tableSec) {
      tableSec.scrollIntoView({ behavior: 'smooth' });
    }
    showToast(`Filtered incident log for ${areaName}`, "info");
  }
};

// --- Rich Premium Excel Export (ExcelJS) with Executive Business Style Theme ---

// Helper to render Chart.js configuration to high-res PNG base64
async function generateChartImage(config, width = 600, height = 340) {
  return new Promise((resolve) => {
    try {
      if (typeof Chart === "undefined") {
        resolve(null);
        return;
      }
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      canvas.style.position = "absolute";
      canvas.style.left = "-9999px";
      canvas.style.top = "-9999px";
      document.body.appendChild(canvas);

      const ctx = canvas.getContext("2d");

      // Solid white background plugin with executive card border
      const bgPlugin = {
        id: "solidWhiteBg",
        beforeDraw: (chart) => {
          const c = chart.ctx;
          c.save();
          c.fillStyle = "#FFFFFF";
          c.fillRect(0, 0, chart.width, chart.height);
          // Subtle border around chart image
          c.strokeStyle = "#E2E8F0";
          c.lineWidth = 1;
          c.strokeRect(1, 1, chart.width - 2, chart.height - 2);
          c.restore();
        }
      };

      const finalConfig = {
        ...config,
        plugins: [bgPlugin, ...(config.plugins || [])],
        options: {
          ...config.options,
          animation: false,
          responsive: false,
          devicePixelRatio: 2
        }
      };

      const chartInstance = new Chart(ctx, finalConfig);
      chartInstance.update();

      setTimeout(() => {
        try {
          const dataUrl = canvas.toDataURL("image/png");
          chartInstance.destroy();
          canvas.remove();
          const cleanBase64 = dataUrl.split(",")[1] || dataUrl;
          resolve(cleanBase64);
        } catch (e) {
          if (canvas) canvas.remove();
          resolve(null);
        }
      }, 70);
    } catch (err) {
      resolve(null);
    }
  });
}

// Helper to render executive business car speedometer gauge to high-res PNG base64
async function generateSpeedometerImage(availabilityVal, width = 540, height = 320) {
  return new Promise((resolve) => {
    try {
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      canvas.style.position = "absolute";
      canvas.style.left = "-9999px";
      canvas.style.top = "-9999px";
      document.body.appendChild(canvas);

      const ctx = canvas.getContext("2d");
      if (!ctx) {
        canvas.remove();
        resolve(null);
        return;
      }

      // 1. Executive Solid Canvas Background & Shadow Card
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, 0, width, height);

      // Card border
      ctx.strokeStyle = "#CBD5E1";
      ctx.lineWidth = 1.5;
      ctx.strokeRect(4, 4, width - 8, height - 8);

      // Header strip on image
      ctx.fillStyle = "#0F172A";
      ctx.fillRect(4, 4, width - 8, 28);
      ctx.font = "bold 11px Segoe UI, Arial, sans-serif";
      ctx.fillStyle = "#FFFFFF";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("PLANT IT • SPEEDOMETER & EQUIPMENT AVAILABILITY", width / 2, 18);

      const cx = width / 2;
      const cy = height * 0.67;
      const outerRadius = Math.min(width * 0.38, height * 0.50);
      const innerRadius = outerRadius * 0.70;
      const val = Math.min(100, Math.max(0, availabilityVal));

      // 2. Outer Dial Base Track Arc
      ctx.beginPath();
      ctx.arc(cx, cy, outerRadius, Math.PI, 0, false);
      ctx.arc(cx, cy, innerRadius, 0, Math.PI, true);
      ctx.closePath();
      ctx.fillStyle = "#F1F5F9";
      ctx.fill();

      // 3. Precision Speed Zones (Tachometer/Speedometer Style)
      // 0% - 90%: Critical Danger Red
      // 90% - 98%: Warning Amber
      // 98% - 100%: World-Class Performance Emerald Green
      const a0 = Math.PI;
      const a90 = Math.PI + 0.90 * Math.PI;
      const a98 = Math.PI + 0.98 * Math.PI;
      const a100 = 2 * Math.PI;

      function drawArcZone(startA, endA, color) {
        ctx.beginPath();
        ctx.arc(cx, cy, outerRadius, startA, endA, false);
        ctx.arc(cx, cy, innerRadius, endA, startA, true);
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();
      }

      drawArcZone(a0, a90, "#EF4444"); // Red Zone (<90%)
      drawArcZone(a90, a98, "#F59E0B"); // Warning Zone (90-98%)
      drawArcZone(a98, a100, "#10B981"); // Optimal Uptime Zone (≥98%)

      // 4. Perimeter Tick Marks and Percentage Numbers
      const ticks = 10;
      for (let i = 0; i <= ticks; i++) {
        const tAngle = Math.PI + (i / ticks) * Math.PI;
        const r1 = outerRadius + 2;
        const r2 = outerRadius + (i % 2 === 0 ? 10 : 5);
        ctx.beginPath();
        ctx.moveTo(cx + Math.cos(tAngle) * r1, cy + Math.sin(tAngle) * r1);
        ctx.lineTo(cx + Math.cos(tAngle) * r2, cy + Math.sin(tAngle) * r2);
        ctx.strokeStyle = i < 7 ? "#94A3B8" : (i < 9 ? "#D97706" : "#059669");
        ctx.lineWidth = i % 2 === 0 ? 2 : 1;
        ctx.stroke();

        // Major tick labels (0%, 20%, 40%, 60%, 80%, 100%)
        if (i % 2 === 0) {
          const rText = outerRadius + 20;
          const tx = cx + Math.cos(tAngle) * rText;
          const ty = cy + Math.sin(tAngle) * rText;
          ctx.font = "bold 10px Segoe UI, Arial, sans-serif";
          ctx.fillStyle = "#475569";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText((i * 10) + "%", tx, ty);
        }
      }

      // 5. Dynamic Aerodynamic Sports Car Pointer Needle
      const needleAngle = Math.PI + (val / 100) * Math.PI;
      const needleLength = outerRadius * 0.96;

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(needleAngle);

      // Needle shadow
      ctx.shadowColor = "rgba(0, 0, 0, 0.35)";
      ctx.shadowBlur = 6;
      ctx.shadowOffsetX = 2;
      ctx.shadowOffsetY = 2;

      // Needle body
      ctx.beginPath();
      ctx.moveTo(0, -4);
      ctx.lineTo(needleLength, 0);
      ctx.lineTo(0, 4);
      ctx.lineTo(-14, 0);
      ctx.closePath();
      ctx.fillStyle = "#E60012"; // Yokohama Racing Crimson
      ctx.fill();

      // Needle center counter-weight
      ctx.beginPath();
      ctx.arc(0, 0, 13, 0, Math.PI * 2);
      ctx.fillStyle = "#0F172A";
      ctx.fill();
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = "#FFFFFF";
      ctx.stroke();

      // Center ruby dot
      ctx.beginPath();
      ctx.arc(0, 0, 4.5, 0, Math.PI * 2);
      ctx.fillStyle = "#E60012";
      ctx.fill();

      ctx.restore();

      // 6. Business Telemetry Badge below needle
      ctx.font = "bold 28px Segoe UI, Arial, sans-serif";
      ctx.fillStyle = "#0F172A";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(val.toFixed(2) + "%", cx, cy + 28);

      ctx.font = "bold 11px Segoe UI, Arial, sans-serif";
      const statusText = val >= 99.0 ? "AVAILABILITY (≥99.0%)" : (val >= 95.0 ? "WARNING (95.0% to <99.0%)" : "CRITICAL ALERT (<95.0%)");
      ctx.fillStyle = val >= 99.0 ? "#059669" : (val >= 95.0 ? "#D97706" : "#DC2626");
      ctx.fillText(statusText, cx, cy + 48);

      ctx.font = "bold 10px Segoe UI, Arial, sans-serif";
      ctx.fillStyle = "#64748B";
      ctx.fillText("UPTIME TARGET: ≥ 99.00%  |  WORLD-CLASS RELIABILITY", cx, cy + 64);

      const dataUrl = canvas.toDataURL("image/png");
      canvas.remove();
      resolve(dataUrl.split(",")[1] || dataUrl);
    } catch (e) {
      if (typeof canvas !== "undefined" && canvas) canvas.remove();
      resolve(null);
    }
  });
}

// Compute Month-by-Month summary metrics
function computeMonthlySummary(records) {
  const monthMap = {};
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const fullMonthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  records.forEach(r => {
    const d = r.issueDate ? new Date(r.issueDate) : new Date();
    const y = d.getFullYear();
    const mIdx = d.getMonth();
    const key = y + "-" + String(mIdx + 1).padStart(2, "0");
    const shortLabel = monthNames[mIdx] + " " + y;
    const fullLabel = fullMonthNames[mIdx] + " " + y;

    if (!monthMap[key]) {
      monthMap[key] = {
        key,
        shortLabel,
        fullLabel,
        totalIncidents: 0,
        totalMins: 0,
        mesCount: 0,
        infraCount: 0,
        completedCount: 0,
        openCount: 0
      };
    }

    monthMap[key].totalIncidents += 1;
    const mins = parseInt(r.downtimeMinutes, 10) || 0;
    monthMap[key].totalMins += mins;
    if (r.nature === "MES") monthMap[key].mesCount += 1;
    else monthMap[key].infraCount += 1;

    if (r.status === "Completed") monthMap[key].completedCount += 1;
    else monthMap[key].openCount += 1;
  });

  const sortedKeys = Object.keys(monthMap).sort();
  const totalMinsAll = records.reduce((acc, r) => acc + (parseInt(r.downtimeMinutes, 10) || 0), 0);

  return sortedKeys.map(k => {
    const item = monthMap[k];
    const totalHours = parseFloat((item.totalMins / 60).toFixed(1));
    const mttr = item.totalIncidents > 0 ? parseFloat((item.totalMins / item.totalIncidents).toFixed(1)) : 0;
    const rate = item.totalIncidents > 0 ? Math.round((item.completedCount / item.totalIncidents) * 100) : 100;
    const share = totalMinsAll > 0 ? parseFloat(((item.totalMins / totalMinsAll) * 100).toFixed(1)) : 0;
    return {
      ...item,
      totalHours,
      mttr,
      rate,
      share
    };
  });
}

// Compute Category breakdown metrics
function computeCategorySummary(records) {
  const catMap = {};
  const totalMinsAll = records.reduce((acc, r) => acc + (parseInt(r.downtimeMinutes, 10) || 0), 0);

  records.forEach(r => {
    const cat = r.category || "Other";
    if (!catMap[cat]) {
      catMap[cat] = { category: cat, count: 0, mins: 0 };
    }
    catMap[cat].count += 1;
    catMap[cat].mins += (parseInt(r.downtimeMinutes, 10) || 0);
  });

  return Object.values(catMap)
    .sort((a, b) => b.count - a.count)
    .map(c => ({
      ...c,
      hours: parseFloat((c.mins / 60).toFixed(1)),
      share: totalMinsAll > 0 ? parseFloat(((c.mins / totalMinsAll) * 100).toFixed(1)) : 0
    }));
}

// Compute Area-Wise Uptime & Availability metrics
function computeAreaUptimeSummary(records, periodDays) {
  const standardAreas = (typeof YOKOHAMA_AREAS !== "undefined" && YOKOHAMA_AREAS.length > 0)
    ? YOKOHAMA_AREAS
    : ["Mixing", "Extruder", "Building", "Curing", "Final", "Engineering", "Quality", "Warehouse / Raw Materials"];
  
  const days = periodDays || 181;
  const areaOpMins = days * 24 * 60;
  const areaOpHours = parseFloat((areaOpMins / 60).toFixed(1));

  const hasData = records && records.length > 0;

  return standardAreas.map((area, idx) => {
    const aRecs = records.filter(r => r.area === area);
    const dtMins = aRecs.reduce((acc, r) => acc + (parseInt(r.downtimeMinutes, 10) || 0), 0);
    const dtHours = parseFloat((dtMins / 60).toFixed(2));
    const upMins = Math.max(0, areaOpMins - dtMins);
    const upHours = parseFloat((upMins / 60).toFixed(1));
    const avail = hasData ? Math.min(100, Math.max(0, (upMins / areaOpMins) * 100)) : null;
    const availPct = hasData ? parseFloat(avail.toFixed(2)) : null;
    const targetPct = 99.00;
    const variance = hasData ? parseFloat((availPct - targetPct).toFixed(2)) : null;
    const incidents = aRecs.length;
    const mttr = (hasData && incidents > 0) ? parseFloat((dtMins / incidents).toFixed(1)) : (hasData ? 0.0 : "N/A");
    let status = "≥99%";
    let statusColor = "FF065F46";
    let statusBg = "FFD1FAE5";
    if (!hasData) {
      status = "No Data";
      statusColor = "FF64748B";
      statusBg = "FFF1F5F9";
    } else if (availPct < 95.0) {
      status = "Critical (<95%)";
      statusColor = "FF991B1B";
      statusBg = "FFFEE2E2";
    } else if (availPct < 99.0) {
      status = "Warning (95-98.9%)";
      statusColor = "FF92400E";
      statusBg = "FFFEF3C7";
    }

    return {
      sNo: idx + 1,
      area,
      days,
      opMins: areaOpMins,
      opHours: areaOpHours,
      dtMins,
      dtHours,
      upMins,
      upHours,
      availPct,
      targetPct,
      variance,
      incidents,
      mttr,
      status,
      statusColor,
      statusBg
    };
  });
}

// Compute Process-Wise Uptime & Availability metrics
function computeProcessUptimeSummary(records, periodDays) {
  const days = periodDays || 181;
  const procOpMins = days * 24 * 60;
  const procOpHours = parseFloat((procOpMins / 60).toFixed(1));

  const masterProcesses = (typeof YOKOHAMA_PROCESSES !== "undefined" && YOKOHAMA_PROCESSES.length > 0)
    ? YOKOHAMA_PROCESSES
    : ["Stage-1", "Unistage", "Stage-2", "Cutter", "Band", "Mixing", "Extrusion", "Bead Winding", "Curing", "3Roll", "4Roll", "Calendar", "Finishing", "Inspection"];
  
  const recProcesses = records.map(r => r.process).filter(Boolean);
  const allProcs = Array.from(new Set([...masterProcesses, ...recProcesses])).filter(p => p && p.trim().length > 0);

  const procAreaMap = {};
  if (typeof YOKOHAMA_MACHINES !== "undefined") {
    YOKOHAMA_MACHINES.forEach(m => {
      if (m.process && m.area && !procAreaMap[m.process]) {
        procAreaMap[m.process] = m.area;
      }
    });
  }

  const list = allProcs.map((proc, idx) => {
    const pRecs = records.filter(r => r.process === proc);
    const dtMins = pRecs.reduce((acc, r) => acc + (parseInt(r.downtimeMinutes, 10) || 0), 0);
    const dtHours = parseFloat((dtMins / 60).toFixed(2));
    const upMins = Math.max(0, procOpMins - dtMins);
    const upHours = parseFloat((upMins / 60).toFixed(1));
    const hasData = records && records.length > 0;
    const avail = hasData ? Math.min(100, Math.max(0, (upMins / procOpMins) * 100)) : null;
    const availPct = hasData ? parseFloat(avail.toFixed(2)) : null;
    const incidents = pRecs.length;
    const mttr = (hasData && incidents > 0) ? parseFloat((dtMins / incidents).toFixed(1)) : (hasData ? 0.0 : "N/A");
    const primaryArea = procAreaMap[proc] || (pRecs.length > 0 ? pRecs[0].area : "General Plant");

    let status = "≥99%";
    let statusColor = "FF065F46";
    let statusBg = "FFD1FAE5";
    if (!hasData) {
      status = "No Data";
      statusColor = "FF64748B";
      statusBg = "FFF1F5F9";
    } else if (availPct < 95.0) {
      status = "Critical (<95%)";
      statusColor = "FF991B1B";
      statusBg = "FFFEE2E2";
    } else if (availPct < 99.0) {
      status = "Warning (95-98.9%)";
      statusColor = "FF92400E";
      statusBg = "FFFEF3C7";
    }

    return {
      sNo: idx + 1,
      process: proc,
      primaryArea,
      days,
      opMins: procOpMins,
      opHours: procOpHours,
      dtMins,
      dtHours,
      upMins,
      upHours,
      availPct,
      incidents,
      mttr,
      status,
      statusColor,
      statusBg
    };
  });

  list.sort((a, b) => b.dtMins - a.dtMins || b.incidents - a.incidents || a.process.localeCompare(b.process));
  list.forEach((p, idx) => p.sNo = idx + 1);

  return list;
}


// =========================================================================
// DYNAMIC DATE / MONTH EXPORT RESOLUTION & TELEMETRY HELPERS
// =========================================================================

function computeDailySummary(records) {
  const dayMap = {};
  records.forEach(r => {
    if (!r.issueDate) return;
    const dateStr = r.issueDate;
    if (!dayMap[dateStr]) {
      dayMap[dateStr] = { date: dateStr, count: 0, mins: 0, mes: 0, infra: 0 };
    }
    dayMap[dateStr].count += 1;
    const mins = parseInt(r.downtimeMinutes, 10) || 0;
    dayMap[dateStr].mins += mins;
    if (r.nature === "MES") dayMap[dateStr].mes += 1;
    else dayMap[dateStr].infra += 1;
  });

  const sortedDates = Object.keys(dayMap).sort();
  return sortedDates.map(d => {
    const item = dayMap[d];
    const parts = d.split("-");
    const label = parts.length >= 3 ? `${parts[1]}/${parts[2]}` : d; // e.g. "01/15"
    return {
      date: d,
      shortLabel: label,
      mesCount: item.mes,
      infraCount: item.infra,
      totalIncidents: item.count,
      totalMins: item.mins,
      totalHours: parseFloat((item.mins / 60).toFixed(1)),
      mttr: item.count > 0 ? parseFloat((item.mins / item.count).toFixed(1)) : 0
    };
  });
}

function resolveExportRecords(customOptions = null) {
  let records = [...downtimeRecords];
  let periodLabel = "All Months (FY 2026)";
  let fileSuffix = "All_Months";
  let periodDays = 181;
  let startDate = "";
  let endDate = "";

  if (customOptions) {
    if (customOptions.all === true) {
      const uniqueDays = new Set();
      records.forEach(r => { if (r.issueDate) uniqueDays.add(r.issueDate); });
      periodDays = Math.max(30, uniqueDays.size > 0 ? 181 : 30);
      periodLabel = "Full Period (All Months / 181 Days)";
      fileSuffix = "All_Months";
    } else if (customOptions.month && customOptions.month !== "ALL") {
      const [y, m] = customOptions.month.split("-");
      const mIdx = parseInt(m, 10) - 1;
      const daysInMonth = new Date(Number(y), Number(m), 0).getDate();
      const elapsed = getElapsedDaysInMonth(Number(y), Number(m), downtimeRecords);
      const isOngoing = (elapsed < daysInMonth && elapsed > 0);
      startDate = `${customOptions.month}-01`;
      endDate = `${customOptions.month}-${String(elapsed || daysInMonth).padStart(2, "0")}`;
      periodDays = elapsed || daysInMonth;
      periodLabel = `${getMonthName(mIdx)} ${y} (${periodDays} Day${periodDays > 1 ? "s" : ""}${isOngoing ? " - MTD" : ""})`;
      fileSuffix = `${getMonthName(mIdx)}_${y}`;
      records = records.filter(r => r.issueDate && r.issueDate.startsWith(customOptions.month));
    } else if (customOptions.startDate && customOptions.endDate) {
      startDate = customOptions.startDate;
      endDate = customOptions.endDate;
      periodDays = calcDateDiffDays(startDate, endDate);
      periodLabel = `${startDate} to ${endDate} (${periodDays} Days)`;
      fileSuffix = `${startDate}_to_${endDate}`;
      records = records.filter(r => r.issueDate && r.issueDate >= startDate && r.issueDate <= endDate);
    } else if (customOptions.startDate) {
      startDate = customOptions.startDate;
      periodDays = 1;
      periodLabel = `${startDate} (1 Day)`;
      fileSuffix = `${startDate}`;
      records = records.filter(r => r.issueDate === startDate);
    }
  } else {
    // Check if table date filter is active
    if (currentFilter.dateFrom && currentFilter.dateTo) {
      startDate = currentFilter.dateFrom;
      endDate = currentFilter.dateTo;
      periodDays = calcDateDiffDays(startDate, endDate);
      periodLabel = `${startDate} to ${endDate} (${periodDays} Days)`;
      fileSuffix = `${startDate}_to_${endDate}`;
      records = records.filter(r => r.issueDate && r.issueDate >= startDate && r.issueDate <= endDate);
    } else if (currentFilter.dateFrom) {
      startDate = currentFilter.dateFrom;
      periodDays = 1;
      periodLabel = `${startDate} (1 Day)`;
      fileSuffix = `${startDate}`;
      records = records.filter(r => r.issueDate === startDate);
    } else if (dashboardDateFilter.month && dashboardDateFilter.month !== "ALL") {
      const [y, m] = dashboardDateFilter.month.split("-");
      const mIdx = parseInt(m, 10) - 1;
      const daysInMonth = new Date(Number(y), Number(m), 0).getDate();
      const elapsed = getElapsedDaysInMonth(Number(y), Number(m), downtimeRecords);
      const isOngoing = (elapsed < daysInMonth && elapsed > 0);
      startDate = `${dashboardDateFilter.month}-01`;
      endDate = `${dashboardDateFilter.month}-${String(elapsed || daysInMonth).padStart(2, "0")}`;
      periodDays = elapsed || daysInMonth;
      periodLabel = `${getMonthName(mIdx)} ${y} (${periodDays} Day${periodDays > 1 ? "s" : ""}${isOngoing ? " - MTD" : ""})`;
      fileSuffix = `${getMonthName(mIdx)}_${y}`;
      records = records.filter(r => r.issueDate && r.issueDate.startsWith(dashboardDateFilter.month));
    } else if (dashboardDateFilter.startDate && dashboardDateFilter.endDate) {
      startDate = dashboardDateFilter.startDate;
      endDate = dashboardDateFilter.endDate;
      periodDays = calcDateDiffDays(startDate, endDate);
      periodLabel = `${startDate} to ${endDate} (${periodDays} Days)`;
      fileSuffix = `${startDate}_to_${endDate}`;
      records = records.filter(r => r.issueDate && r.issueDate >= startDate && r.issueDate <= endDate);
    } else {
      const uniqueDays = new Set();
      records.forEach(r => { if (r.issueDate) uniqueDays.add(r.issueDate); });
      periodDays = Math.max(30, uniqueDays.size > 0 ? 181 : 30);
      periodLabel = "Full Period (All Months / 181 Days)";
      fileSuffix = "All_Months";
    }
  }

  // Filter records by selected Machine Codes if active
  if (currentFilter.selectedMachines !== null) {
    records = records.filter(r => {
      if (r.machineNo === "ALL") return true;
      const recMachs = r.machineNo.split(",").map(s => s.trim());
      return recMachs.some(m => currentFilter.selectedMachines.has(m));
    });
  }

  // Filter records by selected Areas if active
  if (currentFilter.selectedAreas !== null) {
    records = records.filter(r => {
      if (r.area === "ALL") return true;
      const recAreas = r.area.split(",").map(s => s.trim());
      return recAreas.some(a => currentFilter.selectedAreas.has(a));
    });
  }

  // When exported directly from table (customOptions is null or useTableFilters), respect table filters
  if (!customOptions) {
    if (currentFilter.search) {
      const q = currentFilter.search.toLowerCase();
      records = records.filter(item => (
        item.id.toLowerCase().includes(q) ||
        item.machineNo.toLowerCase().includes(q) ||
        item.machineType.toLowerCase().includes(q) ||
        item.area.toLowerCase().includes(q) ||
        (item.process && item.process.toLowerCase().includes(q)) ||
        item.issueDetails.toLowerCase().includes(q) ||
        (item.responsibility && item.responsibility.toLowerCase().includes(q)) ||
        item.solvedBy.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        (item.remarks && item.remarks.toLowerCase().includes(q))
      ));
    }
    if (currentFilter.nature !== "ALL") records = records.filter(r => r.nature === currentFilter.nature);
    if (currentFilter.status !== "ALL") records = records.filter(r => r.status === currentFilter.status);
    if (currentFilter.process !== "ALL") records = records.filter(r => r.process === currentFilter.process);
    if (currentFilter.category !== "ALL") records = records.filter(r => r.category === currentFilter.category);
    if (currentFilter.tech !== "ALL") records = records.filter(r => r.solvedBy === currentFilter.tech);
    if (currentFilter.critical !== "ALL") records = records.filter(r => (r.isCritical || "No") === currentFilter.critical);
  }

  const isSpecificMonth = !!(customOptions && customOptions.month && customOptions.month !== "ALL");
  const chosenMonth = isSpecificMonth ? customOptions.month : (dashboardDateFilter.month && dashboardDateFilter.month !== "ALL" && !customOptions ? dashboardDateFilter.month : null);
  const isAll = (!isSpecificMonth && !chosenMonth && (!customOptions || (!customOptions.startDate && !customOptions.endDate)) && (!currentFilter.dateFrom && !currentFilter.dateTo));

  return {
    records,
    periodLabel,
    fileSuffix,
    periodDays,
    startDate,
    endDate,
    selectedMonth: chosenMonth,
    isAllMonths: isAll
  };
}
window.resolveExportRecords = resolveExportRecords;

// Modal controls for Date / Month Export Dialog
window.openDateExportModal = function() {
  const modal = document.getElementById("dateExportModal");
  if (!modal) return;

  const select = document.getElementById("exportModalMonthSelect");
  if (select) {
    const monthSet = new Set();
    downtimeRecords.forEach(r => {
      if (r.issueDate && r.issueDate.length >= 7) {
        monthSet.add(r.issueDate.substring(0, 7));
      }
    });
    const sortedMonths = Array.from(monthSet).sort().reverse();
    let html = '<option value="ALL">All Months (Entire Dataset)</option>';
    sortedMonths.forEach(mStr => {
      const parts = mStr.split("-");
      const y = parts[0];
      const mIdx = parseInt(parts[1], 10) - 1;
      html += `<option value="${mStr}">${getMonthName(mIdx)} ${y}</option>`;
    });
    select.innerHTML = html;
    if (dashboardDateFilter.month) {
      select.value = dashboardDateFilter.month;
    }
  }

  const sdInput = document.getElementById("exportModalStartDate");
  const edInput = document.getElementById("exportModalEndDate");
  if (sdInput && edInput) {
    if (currentFilter.dateFrom) sdInput.value = currentFilter.dateFrom;
    else if (dashboardDateFilter.startDate) sdInput.value = dashboardDateFilter.startDate;
    else sdInput.value = "2026-01-01";

    if (currentFilter.dateTo) edInput.value = currentFilter.dateTo;
    else if (dashboardDateFilter.endDate) edInput.value = dashboardDateFilter.endDate;
    else edInput.value = "2026-01-31";
  }

  updateExportModalPreview();
  modal.classList.remove("hidden");
};

window.closeDateExportModal = function() {
  const modal = document.getElementById("dateExportModal");
  if (modal) modal.classList.add("hidden");
};

let exportModalCurrentMode = "month";
window.setExportModalMode = function(mode) {
  exportModalCurrentMode = mode;
  const btnMonth = document.getElementById("btnExportModeMonth");
  const btnCustom = document.getElementById("btnExportModeCustom");
  const secMonth = document.getElementById("exportModalMonthSection");
  const secCustom = document.getElementById("exportModalCustomSection");
  const selectMonth = document.getElementById("exportModalMonthSelect");
  const inputStart = document.getElementById("exportModalStartDate");
  const inputEnd = document.getElementById("exportModalEndDate");

  if (mode === "month") {
    if (btnMonth) btnMonth.className = "py-2.5 px-3 rounded-xl text-xs font-black bg-slate-900 text-white border border-slate-900 transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer";
    if (btnCustom) btnCustom.className = "py-2.5 px-3 rounded-xl text-xs font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200 transition-all flex items-center justify-center gap-2 cursor-pointer";
    if (secMonth) secMonth.classList.remove("hidden");
    if (secCustom) secCustom.classList.add("hidden");

    if (selectMonth) {
      selectMonth.disabled = false;
      selectMonth.setAttribute("required", "required");
    }
    if (inputStart) {
      inputStart.disabled = true;
      inputStart.removeAttribute("required");
      inputStart.value = "";
    }
    if (inputEnd) {
      inputEnd.disabled = true;
      inputEnd.removeAttribute("required");
      inputEnd.value = "";
    }
  } else {
    if (btnCustom) btnCustom.className = "py-2.5 px-3 rounded-xl text-xs font-black bg-slate-900 text-white border border-slate-900 transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer";
    if (btnMonth) btnMonth.className = "py-2.5 px-3 rounded-xl text-xs font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200 transition-all flex items-center justify-center gap-2 cursor-pointer";
    if (secMonth) secMonth.classList.add("hidden");
    if (secCustom) secCustom.classList.remove("hidden");

    if (selectMonth) {
      selectMonth.disabled = true;
      selectMonth.removeAttribute("required");
    }
    if (inputStart) {
      inputStart.disabled = false;
      inputStart.setAttribute("required", "required");
    }
    if (inputEnd) {
      inputEnd.disabled = false;
      inputEnd.setAttribute("required", "required");
    }
  }
  updateExportModalPreview();
};

window.updateExportModalPreview = function() {
  let opts = null;
  if (exportModalCurrentMode === "month") {
    const mVal = document.getElementById("exportModalMonthSelect")?.value || "ALL";
    opts = { month: mVal };
  } else {
    const s = document.getElementById("exportModalStartDate")?.value || "";
    const e = document.getElementById("exportModalEndDate")?.value || "";
    opts = { startDate: s, endDate: e };
  }

  const exp = resolveExportRecords(opts);
  const badge = document.getElementById("exportModalPeriodBadge");
  const incEl = document.getElementById("exportModalIncCount");
  const dtEl = document.getElementById("exportModalDtHours");
  const availEl = document.getElementById("exportModalAvail");

  if (badge) badge.textContent = exp.periodLabel;
  if (incEl) incEl.textContent = `${exp.records.length}`;
  
  const totalMins = exp.records.reduce((acc, r) => acc + (parseInt(r.downtimeMinutes, 10) || 0), 0);
  const totalHours = (totalMins / 60).toFixed(1);
  if (dtEl) dtEl.textContent = `${totalHours}h`;

  const standardAreas = (typeof YOKOHAMA_AREAS !== "undefined" && YOKOHAMA_AREAS.length > 0) ? YOKOHAMA_AREAS.length : 8;
  const opMins = exp.periodDays * 24 * 60 * standardAreas;
  const upMins = Math.max(0, opMins - totalMins);
  const avail = Math.min(100, Math.max(0, (upMins / opMins) * 100));
  if (availEl) availEl.textContent = `${avail.toFixed(2)}%`;

  const formatNote = document.getElementById("exportModalFormatNote");
  const formatBadge = document.getElementById("exportModalFormatBadge");
  if (formatNote && formatBadge) {
    if (exp.isAllMonths) {
      formatNote.textContent = "Export Format: Executive Dashboard (Sheet 1) + Incident Logs (Sheet 2) + All Monthly Uptime Sheets";
      formatBadge.textContent = "ALL SHEETS";
    } else if (exp.selectedMonth) {
      formatNote.textContent = `Export Format: Executive Dashboard (Sheet 1) + Incident Logs (Sheet 2) + Uptime Matrix for ${exp.periodLabel}`;
      formatBadge.textContent = "3 SHEETS";
    } else {
      formatNote.textContent = `Export Format: Executive Dashboard (Sheet 1) + Incident Logs (Sheet 2) + Uptime Matrix for ${exp.periodDays} Days`;
      formatBadge.textContent = "3 SHEETS";
    }
  }
};

window.executeExportFromModal = function(type) {
  let opts = null;
  if (exportModalCurrentMode === "month") {
    const mVal = document.getElementById("exportModalMonthSelect")?.value || "ALL";
    opts = { month: mVal };
  } else {
    const s = document.getElementById("exportModalStartDate")?.value || "";
    const e = document.getElementById("exportModalEndDate")?.value || "";
    opts = { startDate: s, endDate: e };
  }
  closeDateExportModal();

  if (type === "excel") {
    exportToExcel(opts);
  } else {
    exportToCSV(opts);
  }
};

window.exportDashboardPeriodExcel = function() {
  if (dashboardDateFilter.month && dashboardDateFilter.month !== "ALL") {
    exportToExcel({ month: dashboardDateFilter.month });
  } else if (dashboardDateFilter.startDate && dashboardDateFilter.endDate) {
    exportToExcel({ startDate: dashboardDateFilter.startDate, endDate: dashboardDateFilter.endDate });
  } else {
    exportToExcel({ all: true });
  }
};

// =========================================================================
// DAILY DOWNTIME EXCEL IMPORTER SYSTEM
// Parses "Daily Downtime Entry sheet Import file.xlsx", auto-maps fields
// =========================================================================
let pendingImportRecords = [];
window.pendingImportRecords = pendingImportRecords;

window.openImportDowntimeModal = function() {
  const modal = document.getElementById("importDowntimeModal");
  if (!modal) return;
  modal.classList.remove("hidden");
  resetImportModalPreview();
};

window.closeImportDowntimeModal = function() {
  const modal = document.getElementById("importDowntimeModal");
  if (!modal) return;
  modal.classList.add("hidden");
  resetImportModalPreview();
};

function resetImportModalPreview() {
  pendingImportRecords = [];
  window.pendingImportRecords = pendingImportRecords;
  const fileInput = document.getElementById("inputDowntimeExcelFile");
  if (fileInput) fileInput.value = "";
  document.getElementById("importPreviewSummary")?.classList.add("hidden");
  document.getElementById("importModeContainer")?.classList.add("hidden");
  document.getElementById("importPreviewTableWrapper")?.classList.add("hidden");
  const btnConfirm = document.getElementById("btnConfirmDowntimeImport");
  if (btnConfirm) btnConfirm.disabled = true;
}

window.handleDowntimeDragOver = function(e) {
  e.preventDefault();
  e.stopPropagation();
  document.getElementById("dropZoneDowntimeExcel")?.classList.add("border-violet-500", "bg-violet-50");
};

window.handleDowntimeDragLeave = function(e) {
  e.preventDefault();
  e.stopPropagation();
  document.getElementById("dropZoneDowntimeExcel")?.classList.remove("border-violet-500", "bg-violet-50");
};

window.handleDowntimeFileDrop = function(e) {
  e.preventDefault();
  e.stopPropagation();
  document.getElementById("dropZoneDowntimeExcel")?.classList.remove("border-violet-500", "bg-violet-50");
  const files = e.dataTransfer?.files;
  if (files && files.length > 0) {
    const file = files[0];
    const maxSizeBytes = 10 * 1024 * 1024; // 10MB Limit (SEC-06)
    if (file.size > maxSizeBytes) {
      showToast(`File size (${(file.size / (1024 * 1024)).toFixed(1)} MB) exceeds the maximum allowed limit of 10 MB.`, "error");
      return;
    }
    const ext = (file.name || "").split('.').pop().toLowerCase();
    if (!['xlsx', 'xls', 'csv'].includes(ext)) {
      showToast("Invalid file format. Only Excel (.xlsx, .xls) and CSV are accepted.", "warning");
      return;
    }
    parseDowntimeExcelFile(file);
  }
};

window.handleDowntimeFileSelect = function(e) {
  const file = e.target.files && e.target.files[0];
  if (!file) return;

  const maxSizeBytes = 10 * 1024 * 1024; // 10MB Limit (SEC-06)
  if (file.size > maxSizeBytes) {
    showToast(`File size (${(file.size / (1024 * 1024)).toFixed(1)} MB) exceeds the maximum allowed limit of 10 MB.`, "error");
    e.target.value = "";
    return;
  }

  const ext = (file.name || "").split('.').pop().toLowerCase();
  if (!['xlsx', 'xls', 'csv'].includes(ext)) {
    showToast("Invalid file format. Only Excel (.xlsx, .xls) and CSV are accepted.", "warning");
    e.target.value = "";
    return;
  }

  parseDowntimeExcelFile(file);
};

window.quickLoadPreloadedDowntimeFile = async function() {
  await loadPreloadedSampleImportAsync();
  if (typeof PRELOADED_SAMPLE_IMPORT !== "undefined" && Array.isArray(PRELOADED_SAMPLE_IMPORT) && PRELOADED_SAMPLE_IMPORT.length > 0) {
    pendingImportRecords = JSON.parse(JSON.stringify(PRELOADED_SAMPLE_IMPORT));
    window.pendingImportRecords = pendingImportRecords;
    renderImportPreviewUI("Daily Downtime Entry sheet Import file.xlsx (Sample Preloaded)");
    showToast(`Loaded ${pendingImportRecords.length} downtime records from Hello sample dataset!`, "info");
  } else {
    showToast("Preloaded dataset not available, please choose Excel file directly.", "warning");
  }
};

window.quickLoadTemplateImport2 = function() {
  if (typeof PRELOADED_TEMPLATE_2 !== "undefined" && Array.isArray(PRELOADED_TEMPLATE_2) && PRELOADED_TEMPLATE_2.length > 0) {
    pendingImportRecords = JSON.parse(JSON.stringify(PRELOADED_TEMPLATE_2));
    window.pendingImportRecords = pendingImportRecords;
    renderImportPreviewUI("Template Import 2.xlsx (Preloaded Sample)");
    showToast(`Loaded ${pendingImportRecords.length} downtime incidents from Template Import 2.xlsx!`, "info");
  } else {
    showToast("Template Import 2 dataset not available, please choose Excel file directly.", "warning");
  }
};

/**
 * Timezone-invariant Excel date parser that prevents the 1-day shift bug.
 * Supports Excel serial numbers (e.g. 46025), Date objects (with IST/UTC offset drift correction),
 * numeric serial strings, and standardized date strings.
 */
function parseAnyExcelDate(rawDate) {
  if (rawDate === null || rawDate === undefined || rawDate === '') return '';

  // 1. Numeric Excel serial date (e.g. 46025 for 2026-01-03)
  if (typeof rawDate === 'number') {
    if (typeof XLSX !== 'undefined' && XLSX.SSF && typeof XLSX.SSF.parse_date_code === 'function') {
      const p = XLSX.SSF.parse_date_code(rawDate);
      if (p && p.y && p.m && p.d) {
        return `${p.y}-${String(p.m).padStart(2, '0')}-${String(p.d).padStart(2, '0')}`;
      }
    }
    const utcDays = Math.round(rawDate - 25569);
    const d = new Date(utcDays * 86400 * 1000);
    return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}-${String(d.getUTCDate()).padStart(2, '0')}`;
  }

  // 2. JavaScript Date instance
  if (rawDate instanceof Date && !isNaN(rawDate.getTime())) {
    let d = rawDate;
    // Fix historical timezone offset drift where midnight lands at 23:59:xx of previous day (e.g. 23:59:50 in IST)
    if (d.getHours() === 23 && d.getMinutes() >= 50) {
      d = new Date(d.getTime() + 15 * 60 * 1000);
    }
    // If UTC midnight was parsed but local offset displays previous evening
    if (d.getUTCHours() === 0 && d.getUTCMinutes() === 0 && d.getUTCSeconds() === 0 && d.getHours() !== 0) {
      return d.toISOString().slice(0, 10);
    }
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  }

  // 3. String representation
  let s = String(rawDate).trim();
  if (!s) return '';

  // Numeric serial in string form, e.g. "46025" or "46025.0"
  if (/^\d{4,5}(\.\d+)?$/.test(s)) {
    return parseAnyExcelDate(parseFloat(s));
  }

  // ISO timestamp with time: "2026-01-03T..." -> slice to "2026-01-03"
  if (s.includes('T')) {
    return s.split('T')[0];
  }

  // Normalize slashes, dots, and spaces to dashes
  s = s.replace(/[\/\.]/g, '-');
  const parts = s.split('-');
  if (parts.length === 3) {
    let p0 = parts[0].trim();
    let p1 = parts[1].trim();
    let p2 = parts[2].trim().split(' ')[0];

    // Format: YYYY-MM-DD
    if (p0.length === 4) {
      return `${p0}-${p1.padStart(2, '0')}-${p2.padStart(2, '0')}`;
    }
    // Format: DD-MM-YYYY or MM-DD-YYYY (4-digit year at end)
    if (p2.length === 4) {
      return `${p2}-${p1.padStart(2, '0')}-${p0.padStart(2, '0')}`;
    }
    // Format: M/D/YY or D/M/YY (2-digit year at end, e.g. 1-3-26)
    if (p2.length === 2 && p0.length <= 2) {
      const yr = parseInt(p2, 10) < 50 ? '20' + p2 : '19' + p2;
      return `${yr}-${p0.padStart(2, '0')}-${p1.padStart(2, '0')}`;
    }
  }

  // Native Date fallback
  const parsedNative = new Date(s);
  if (!isNaN(parsedNative.getTime())) {
    const y = parsedNative.getFullYear();
    const m = String(parsedNative.getMonth() + 1).padStart(2, '0');
    const day = String(parsedNative.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  }

  return s.substring(0, 10);
}
window.parseAnyExcelDate = parseAnyExcelDate;

function parseDowntimeExcelFile(file) {
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array', cellDates: false });
      
      // Auto-select best sheet (e.g. one with downtime/incident/log or first sheet)
      let targetSheetName = workbook.SheetNames[0];
      for (const sName of workbook.SheetNames) {
        const lowerS = sName.toLowerCase();
        if (lowerS.includes("downtime") || lowerS.includes("incident") || lowerS.includes("log") || lowerS.includes("entry")) {
          targetSheetName = sName;
          break;
        }
      }
      const worksheet = workbook.Sheets[targetSheetName];
      const rawRows = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      if (!rawRows || rawRows.length < 2) {
        showToast("The selected Excel sheet has no data rows.", "warning");
        return;
      }

      // Intelligent Header Row Detection via Keyword Scoring across candidate rows (up to 30 rows)
      const headerKeywords = [
        "date", "issue date", "machine", "machine code", "downtime", "incident",
        "nature", "area", "process", "status", "category", "action", "remarks",
        "responsibility", "s.no", "critical", "affected", "solved by", "down time"
      ];

      let bestScore = 0;
      let headerRowIdx = 0;

      for (let r = 0; r < Math.min(30, rawRows.length); r++) {
        const row = rawRows[r];
        if (!row || !Array.isArray(row) || row.length === 0) continue;
        const cellsText = row.map(c => (c !== null && c !== undefined ? String(c).trim().toLowerCase() : "")).filter(Boolean);
        
        let score = 0;
        headerKeywords.forEach(kw => {
          if (cellsText.some(ct => ct === kw || ct.includes(kw))) {
            score++;
          }
        });

        if (score > bestScore && score >= 2) {
          bestScore = score;
          headerRowIdx = r;
        }
      }

      const headers = rawRows[headerRowIdx].map(h => (h !== null && h !== undefined ? String(h).trim().toLowerCase() : ""));

      function matchCol(predicates) {
        for (const pred of predicates) {
          const idx = headers.findIndex(pred);
          if (idx !== -1) return idx;
        }
        return -1;
      }

      // 1. Column Identification for both Template Import 2.xlsx and Daily Downtime Entry sheets
      const idCol = matchCol([
        h => h === "incident id" || h === "incident_id" || h === "incident no",
        h => h === "id"
      ]);

      const dateCol = matchCol([
        h => h === "issue date" || h === "incident date" || h === "down date",
        h => h === "date",
        h => h.includes("date") && !h.includes("close")
      ]);

      const natureCol = matchCol([
        h => h === "nature" || h === "nature of incident",
        h => h === "type" || h.includes("nature")
      ]);

      const areaCol = matchCol([
        h => h === "area / plant" || h === "area/plant" || h === "plant / area",
        h => h === "area" || h === "plant" || h.includes("area") || h.includes("plant")
      ]);

      const procCol = matchCol([
        h => h === "process" || h === "process name",
        h => h.includes("process") || h.includes("line") || h.includes("section")
      ]);

      const machCol = matchCol([
        h => h === "machine code" || h === "machine no" || h === "machine number" || h === "equipment code",
        h => h === "machine" || h.includes("machine code") || h.includes("machine") || h.includes("equipment")
      ]);

      const critCol = matchCol([
        h => h.includes("critical") || h.includes("crit")
      ]);

      const dtCol = matchCol([
        h => h === "downtime min" || h === "down time - min" || h === "downtime (min)" || h === "down time min",
        h => h.includes("down") && h.includes("min") && !h.includes("total") && !h.includes("hour"),
        h => h.includes("downtime") && !h.includes("total") && !h.includes("hour")
      ]);

      const machCountCol = matchCol([
        h => h.includes("no of machine") || h.includes("no of machines") || h.includes("machines affected") || h.includes("affected machine") || h.includes("afftected"),
        h => h.includes("affected")
      ]);

      const totalDtCol = matchCol([
        h => h === "total downtime min" || h === "total dt min" || h === "total down time min",
        h => h.includes("total") && (h.includes("downtime") || h.includes("dt")) && !h.includes("hour") && !h.includes("hr"),
        h => h.includes("total") && h.includes("down")
      ]);

      const catCol = matchCol([
        h => h === "category" || h === "issue category",
        h => h.includes("category") && !h.includes("loss")
      ]);

      const lossCatCol = matchCol([
        h => h.includes("loss category") || h.includes("loss")
      ]);

      const detCol = matchCol([
        h => h === "issue details" || h === "problem description" || h === "fault details",
        h => h.includes("detail") || h.includes("problem") || h.includes("description") || h.includes("issue")
      ]);

      const actCol = matchCol([
        h => h === "action plan taken" || h === "action taken" || h === "action plan",
        h => h.includes("action") || h.includes("countermeasure") || h.includes("correction")
      ]);

      const prevCol = matchCol([
        h => h.includes("preventive")
      ]);

      const respCol = matchCol([
        h => h === "responsibility" || h === "responsible team" || h === "dept",
        h => h.includes("resp") && !h.includes("person"),
        h => h.includes("team") || h.includes("dept")
      ]);

      const closedCol = matchCol([
        h => h === "closed date" || h === "close date" || h === "resolved date" || h === "completion date",
        h => h.includes("close") || h.includes("resolv")
      ]);

      const solvedCol = matchCol([
        h => h === "responsible person" || h === "solved by" || h === "attended by" || h === "action taken by",
        h => h.includes("person") || h.includes("solved by") || h.includes("technician") || h.includes("engineer")
      ]);

      const statusCol = matchCol([
        h => h === "status" || h === "incident status" || h === "state",
        h => h.includes("status")
      ]);

      const remarksCol = matchCol([
        h => h === "remarks" || h === "remark" || h === "comments" || h === "notes",
        h => h.includes("remark") || h.includes("comment")
      ]);

      const parsed = [];
      let skippedCount = 0;
      for (let r = headerRowIdx + 1; r < rawRows.length; r++) {
        const row = rawRows[r];
        if (!row || !Array.isArray(row) || row.length === 0) continue;

        // Skip footer total / summary rows (like Row 10 in Template Import 2.xlsx)
        const rowStrSample = row.slice(0, 6).map(c => String(c || '').toLowerCase()).join(" ");
        if (rowStrSample.includes("total cumulative") || rowStrSample.includes("grand total") || rowStrSample.includes("summary")) {
          continue;
        }

        const rawMach = machCol !== -1 ? row[machCol] : null;
        const rawDate = dateCol !== -1 ? row[dateCol] : null;
        if (!rawMach || !rawDate) {
          skippedCount++;
          continue;
        }

        const mCode = String(rawMach).trim();
        if (!mCode || mCode.toLowerCase() === "total" || mCode.toLowerCase() === "machine") {
          skippedCount++;
          continue;
        }

        // Format Date (Timezone invariant)
        let dateStr = parseAnyExcelDate(rawDate);

        if (!dateStr || dateStr.length < 8) {
          skippedCount++;
          continue;
        }

        // Resolve Area & Process
        const mInfo = (typeof MACHINE_MAP !== "undefined" && MACHINE_MAP[mCode]) ? MACHINE_MAP[mCode] : null;
        let area = (areaCol !== -1 && row[areaCol]) ? String(row[areaCol]).trim() : "";
        if (!area) {
          area = mInfo ? mInfo.area : "Plant-1";
        }

        let process = (procCol !== -1 && row[procCol]) ? String(row[procCol]).trim() : "";
        if (!process) {
          process = mInfo ? mInfo.process : "General";
        }

        let mName = mInfo ? mInfo.name : (mCode.includes(",") ? "Multiple Plant Equipment" : mCode);
        let isCrit = (critCol !== -1 && row[critCol]) ? String(row[critCol]).trim() : "";
        if (isCrit) {
          isCrit = (isCrit.toUpperCase().startsWith("Y")) ? "Yes" : "No";
        } else {
          isCrit = mInfo ? (mInfo.critical || "No") : "No";
        }

        // Parse downtime metrics
        let dtMin = 0;
        const rawDtMin = (dtCol !== -1 && row[dtCol] !== undefined) ? row[dtCol] : null;
        if (rawDtMin !== null && rawDtMin !== undefined) {
          dtMin = parseInt(rawDtMin, 10);
          if (isNaN(dtMin)) dtMin = Math.round(parseFloat(rawDtMin) || 0);
        }
        if (dtMin < 0) {
          skippedCount++;
          continue; // Prevent negative downtime
        }

        let affected = 1;
        const rawAff = (machCountCol !== -1 && row[machCountCol] !== undefined) ? row[machCountCol] : null;
        if (rawAff !== null && rawAff !== undefined) {
          affected = parseInt(rawAff, 10);
          if (isNaN(affected) || affected < 1) affected = 1;
        } else if (mCode.includes(",")) {
          affected = mCode.split(",").map(s => s.trim()).filter(Boolean).length || 1;
        }

        let totalDt = 0;
        const rawTot = (totalDtCol !== -1 && row[totalDtCol] !== undefined) ? row[totalDtCol] : null;
        if (rawTot !== null && rawTot !== undefined) {
          totalDt = parseInt(rawTot, 10);
          if (isNaN(totalDt)) totalDt = Math.round(parseFloat(rawTot) || 0);
        }
        if (totalDt === 0 && dtMin > 0) totalDt = dtMin * affected;
        if (dtMin === 0 && totalDt > 0) dtMin = Math.round(totalDt / affected);

        // Nature & Category
        let rawNature = (natureCol !== -1 && row[natureCol]) ? String(row[natureCol]).trim() : "";
        const rawCat = (catCol !== -1 && row[catCol]) ? String(row[catCol]).trim() : "MES";
        let nature = "MES";
        if (rawNature) {
          nature = (rawNature.toUpperCase().includes("INFRA") || rawNature.toUpperCase().includes("HARDWARE")) ? "INFRA" : "MES";
        } else if (rawCat.toUpperCase().includes("HARDWARE") || rawCat.toUpperCase().includes("INFRA")) {
          nature = "INFRA";
        } else {
          nature = "MES";
        }

        const rawLoss = (lossCatCol !== -1 && row[lossCatCol]) ? String(row[lossCatCol]).trim() : "";
        const category = rawCat || rawLoss || "MES";

        // Details & Action
        const details = (detCol !== -1 && row[detCol]) ? String(row[detCol]).trim() : "Downtime Breakdown";
        const action = (actCol !== -1 && row[actCol]) ? String(row[actCol]).trim() : "Resolution performed";
        const prevAct = (prevCol !== -1 && row[prevCol]) ? String(row[prevCol]).trim() : "";

        // Responsibility
        let resp = (respCol !== -1 && row[respCol]) ? String(row[respCol]).trim() : "ATC IT Team";
        if (resp.toUpperCase().includes("YOHT")) {
          resp = resp.replace(/yoht/gi, "ATC");
        }
        if (resp.toUpperCase().includes("MELSS")) {
          resp = "MELSS";
        }

        // Responsible Person / Solved By
        let solvedBy = (solvedCol !== -1 && row[solvedCol]) ? String(row[solvedCol]).trim() : "";
        if (!solvedBy) {
          solvedBy = resp.includes("ATC") ? "ATC IT Team" : (resp.includes("MELSS") ? "MELSS Team" : "Bharadwaj");
        }

        // Status
        const rawStatus = (statusCol !== -1 && row[statusCol]) ? String(row[statusCol]).trim() : "Completed";
        const status = rawStatus.toUpperCase().includes("OPEN") ? "Open" : "Completed";

        // Closed Date (Timezone invariant)
        let closedDate = (closedCol !== -1 && row[closedCol] !== undefined && row[closedCol] !== null) ? parseAnyExcelDate(row[closedCol]) : "";
        if (!closedDate && status === "Completed") {
          closedDate = dateStr;
        } else if (closedDate && status === "Completed" && closedDate < dateStr) {
          closedDate = dateStr; // Cannot close before issue date
        }

        // Remarks
        const rawRem = (remarksCol !== -1 && row[remarksCol]) ? String(row[remarksCol]).trim() : "";
        const remArr = [];
        if (prevAct) remArr.push(`Preventive: ${prevAct}`);
        if (rawRem) remArr.push(rawRem);
        const finalRemarks = remArr.join(" | ");

        // Preserve Incident ID if present in file, else auto-generate sequential
        let incId = (idCol !== -1 && row[idCol]) ? String(row[idCol]).trim() : "";
        if (!incId) {
          const seq = String(parsed.length + 1).padStart(3, "0");
          const idYear = dateStr.substring(0, 4) || "2026";
          incId = `YOKO-DT-${idYear}-${seq}`;
        }

        parsed.push({
          id: incId,
          issueDate: dateStr,
          nature: nature,
          area: area,
          process: process,
          machineNo: mCode,
          machineType: mName,
          isCritical: isCrit,
          downtimeMinutes: dtMin,
          affectedMachines: affected,
          totalDowntimeMinutes: totalDt,
          category: category,
          issueDetails: details,
          actionPlan: action,
          responsibility: resp,
          closedDate: closedDate,
          solvedBy: solvedBy,
          status: status,
          remarks: finalRemarks
        });
      }

      if (parsed.length === 0) {
        showToast("No valid downtime records could be parsed from the file.", "warning");
        return;
      }

      pendingImportRecords = parsed;
      window.pendingImportRecords = pendingImportRecords;
      renderImportPreviewUI(file.name);
      const skippedMsg = skippedCount > 0 ? ` (${skippedCount} invalid rows skipped)` : "";
      showToast(`Parsed ${parsed.length} downtime records from "${file.name}"!${skippedMsg}`, "success");
    } catch (err) {
      console.error("Error parsing downtime Excel file:", err);
      showToast("Error reading downtime Excel file: " + err.message, "warning");
    }
  };
  reader.readAsArrayBuffer(file);
}

function renderImportPreviewUI(fileName) {
  const summaryEl = document.getElementById("importPreviewSummary");
  const modeEl = document.getElementById("importModeContainer");
  const tableWrapEl = document.getElementById("importPreviewTableWrapper");
  const tbody = document.getElementById("importPreviewTableBody");
  const btnConfirm = document.getElementById("btnConfirmDowntimeImport");

  if (!summaryEl || !modeEl || !tableWrapEl || !tbody) return;

  const count = pendingImportRecords.length;
  const totalMins = pendingImportRecords.reduce((sum, r) => sum + (parseInt(r.totalDowntimeMinutes, 10) || (parseInt(r.downtimeMinutes, 10) * (parseInt(r.affectedMachines, 10) || 1)) || 0), 0);
  const totalHours = (totalMins / 60).toFixed(1);
  const openCount = pendingImportRecords.filter(r => r.status === "Open").length;

  const dates = pendingImportRecords.map(r => r.issueDate).filter(Boolean).sort();
  const dateRangeStr = dates.length > 0 ? `${dates[0]} to ${dates[dates.length - 1]}` : "-";

  document.getElementById("importFileName").textContent = fileName;
  document.getElementById("importRecordCountBadge").textContent = `${count} Incidents Found`;
  document.getElementById("importStatCount").textContent = count;
  document.getElementById("importStatHours").textContent = `${totalHours}h (${totalMins}m)`;
  document.getElementById("importStatDateRange").textContent = dateRangeStr;
  document.getElementById("importStatOpen").textContent = openCount;

  // Render first 10 rows
  const previewSlice = pendingImportRecords.slice(0, 10);
  tbody.innerHTML = previewSlice.map((r, idx) => `
    <tr class="hover:bg-slate-50 transition-colors">
      <td class="px-3 py-2 font-mono font-bold text-slate-500">${idx + 1}</td>
      <td class="px-3 py-2 font-mono font-semibold text-slate-800">${escapeHtml(r.issueDate)}</td>
      <td class="px-3 py-2 font-mono font-black text-slate-900">${escapeHtml(r.machineNo)}</td>
      <td class="px-3 py-2 text-slate-700 font-medium">${escapeHtml(r.area)}</td>
      <td class="px-3 py-2 text-slate-600">${escapeHtml(r.process || '')}</td>
      <td class="px-3 py-2 text-right font-mono font-bold text-slate-800">${r.downtimeMinutes}m</td>
      <td class="px-3 py-2 text-center font-mono font-bold text-amber-600">${r.affectedMachines || 1}</td>
      <td class="px-3 py-2 text-right font-mono font-black text-[#E60012]">${r.totalDowntimeMinutes || (r.downtimeMinutes * (r.affectedMachines || 1))}m</td>
      <td class="px-3 py-2">
        <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700">${escapeHtml(r.category)}</span>
      </td>
      <td class="px-3 py-2">
        <span class="px-2 py-0.5 rounded text-[10px] font-bold ${r.nature === 'INFRA' ? 'bg-sky-100 text-sky-700' : 'bg-red-100 text-red-700'}">${escapeHtml(r.nature)}</span>
      </td>
      <td class="px-3 py-2">
        <span class="px-2 py-0.5 rounded text-[10px] font-bold ${r.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}">${escapeHtml(r.status)}</span>
      </td>
    </tr>
  `).join("");

  document.getElementById("importPreviewNote").textContent = `Showing 1 to ${previewSlice.length} of ${count} records`;

  summaryEl.classList.remove("hidden");
  modeEl.classList.remove("hidden");
  tableWrapEl.classList.remove("hidden");

  if (btnConfirm) btnConfirm.disabled = false;
}

window.confirmDowntimeImport = function() {
  const user = (typeof getCurrentUser === "function") ? getCurrentUser() : null;
  if (!user || (!user.canImport && user.role !== "ADMIN" && user.role !== "SUPERVISOR")) {
    showToast("Access Denied: Only Admins and Supervisors can import records.", "error");
    return;
  }
  if (!pendingImportRecords || pendingImportRecords.length === 0) {
    showToast("No records available to import.", "warning");
    return;
  }

  const modeRadio = document.querySelector("input[name='importModeRadio']:checked");
  const mode = modeRadio ? modeRadio.value : "replace";

  if (mode === "replace") {
    downtimeRecords = [...pendingImportRecords];
    window.downtimeRecords = downtimeRecords;
  } else {
    let maxExistingNumericId = 0;
    downtimeRecords.forEach(r => {
      if (r && r.id) {
        const match = String(r.id).match(/(\d+)$/);
        if (match) {
          const num = parseInt(match[1], 10);
          if (num > maxExistingNumericId) maxExistingNumericId = num;
        }
      }
    });
    const toAppend = pendingImportRecords.map((r, idx) => ({
      ...r,
      id: `YOKO-DT-${r.issueDate ? r.issueDate.substring(0, 4) : '2026'}-${String(maxExistingNumericId + idx + 1).padStart(3, '0')}`
    }));
    downtimeRecords = downtimeRecords.concat(toAppend);
    window.downtimeRecords = downtimeRecords;
  }

  pendingImportRecords.forEach(r => {
    if (r.category && !masterCategories.some(c => c.toLowerCase() === r.category.toLowerCase())) {
      masterCategories.push(r.category);
    }
  });

  saveMasterDataToStorage();
  saveToStorage();
  initCategoryDropdowns();
  populateDashboardMonths();
  updateTableCategoryStrip();
  renderRecordsTable();
  renderKPIs();
  renderCharts();
  closeImportDowntimeModal();

  showToast(`Successfully imported ${pendingImportRecords.length} downtime records into database! (Total: ${downtimeRecords.length})`, "success");
};

// --- Global Machine Matching Rule for Uptime Attribution ---
function isMachineAffectedByRecord(mach, r) {
  if (!mach || !r || !r.machineNo) return false;
  const mCode = (mach.code || "").trim().toUpperCase();
  const mArea = (mach.area || "").trim().toUpperCase();
  const mProc = (mach.process || "").trim().toUpperCase();

  const rMachRaw = (r.machineNo || "").trim();
  const rMachUpper = rMachRaw.toUpperCase();
  const rAreaUpper = (r.area || "").trim().toUpperCase();
  const rProcUpper = (r.process || "").trim().toUpperCase();
  const rDetailsUpper = (r.issueDetails || "").toUpperCase();
  const rAff = parseInt(r.affectedMachines, 10) || 1;

  // 1. Direct code or comma-separated match: "CU_A01", "CU_A01, CU_A02"
  const tokens = rMachUpper.split(",").map(s => s.trim()).filter(Boolean);
  if (tokens.includes(mCode)) return true;

  // 2. Machine code prefixes or category shortcuts: "CU", "Cu", "CU_", "MIX", "BLD"
  for (const token of tokens) {
    if (token === "CU" || token === "CU_") {
      if (mCode.startsWith("CU_") || mProc.includes("CURING")) return true;
    }
    if (token === "BLD" || token === "BLD_") {
      if (mCode.startsWith("BLD_") || mProc.includes("BUILDING")) return true;
    }
    if (token === "MIX" || token === "MIX_") {
      if (mCode.startsWith("MIX_") || mProc.includes("MIXING")) return true;
    }
    if (token.startsWith("CU_") && token.length === 4 && mCode.startsWith(token)) {
      return true;
    }
  }

  // 3. "ALL" or "ALL MACHINES"
  if (rMachUpper === "ALL" || rMachUpper === "ALL MACHINES" || rMachUpper.includes("ALL MACHINES")) {
    const matchArea = (!rAreaUpper || rAreaUpper === "ALL" || rAreaUpper.includes(mArea) || mArea.includes(rAreaUpper));
    const matchProc = (!rProcUpper || rProcUpper === "ALL" || rProcUpper.includes(mProc) || mProc.includes(rProcUpper) || (rProcUpper.includes("CURING") && mProc.includes("CURING")));
    if (matchArea && matchProc) return true;
  }

  // 4. Process match if Curing is specified
  if (rMachUpper.includes("CURING") || (rProcUpper.includes("CURING") && (rMachUpper === "ALL" || rMachUpper === "CU"))) {
    if (mProc.includes("CURING") || mCode.startsWith("CU_")) return true;
  }

  // 5. Multi-machine outage patterns in Curing (e.g. G-Line & H-Line 31 machines, Plant-1 Curing)
  if (rMachUpper === "CU_G01" && (rAff > 1 || rDetailsUpper.includes("G-LINE AND H-LINE") || rDetailsUpper.includes("G-LINE"))) {
    if (mCode.startsWith("CU_G") || mCode.startsWith("CU_H")) return true;
  }
  if (rMachUpper === "CU_A01" && (rAff > 1 || rDetailsUpper.includes("PLANT-1 CURING") || rDetailsUpper.includes("PLANT 1 CURING"))) {
    if (mArea.includes("PLANT-1") && (mCode.startsWith("CU_") || mProc.includes("CURING"))) return true;
  }

  return false;
}
window.isMachineAffectedByRecord = isMachineAffectedByRecord;

// --- Speedometer Card Canvas Generator for Executive Excel Export ---
function drawSpeedometerToCanvas(availPct, targetPct, uptimeHrs, dtHrs, dtMins) {
  try {
    if (typeof document === "undefined") return null;
    const canvas = document.createElement("canvas");
    canvas.width = 1080;
    canvas.height = 640;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    // Background Card
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, 1080, 640);

    // Rounded card border
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#E2E8F0";
    if (ctx.roundRect) {
      ctx.beginPath();
      ctx.roundRect(8, 8, 1064, 624, 24);
      ctx.stroke();
      // Top Emerald accent
      ctx.fillStyle = "#10B981";
      ctx.beginPath();
      ctx.roundRect(8, 8, 1064, 16, [24, 24, 0, 0]);
      ctx.fill();
    } else {
      ctx.strokeRect(8, 8, 1064, 624);
      ctx.fillStyle = "#10B981";
      ctx.fillRect(8, 8, 1064, 16);
    }

    // Header
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "bold 26px 'Segoe UI', Arial, sans-serif";
    ctx.fillStyle = "#0A0F1D";
    ctx.fillText("OVERALL AVAILABILITY", 540, 56);

    const statusColor = availPct >= 99 ? "#059669" : (availPct >= 95 ? "#D97706" : "#DC2626");

    // Speedometer Geometry
    const cx = 540;
    const cy = 360;
    const rOut = 230;
    const rIn = 170;

    // Draw Arc: Math.PI to 2*Math.PI
    // Red zone: Math.PI to Math.PI + 0.90 * Math.PI
    ctx.beginPath();
    ctx.arc(cx, cy, rOut, Math.PI, Math.PI + 0.90 * Math.PI);
    ctx.arc(cx, cy, rIn, Math.PI + 0.90 * Math.PI, Math.PI, true);
    ctx.closePath();
    ctx.fillStyle = "#EF4444";
    ctx.fill();

    // Yellow zone: Math.PI + 0.90 * Math.PI to Math.PI + 0.989 * Math.PI
    ctx.beginPath();
    ctx.arc(cx, cy, rOut, Math.PI + 0.90 * Math.PI, Math.PI + 0.989 * Math.PI);
    ctx.arc(cx, cy, rIn, Math.PI + 0.989 * Math.PI, Math.PI + 0.90 * Math.PI, true);
    ctx.closePath();
    ctx.fillStyle = "#F59E0B";
    ctx.fill();

    // Green zone: Math.PI + 0.989 * Math.PI to 2 * Math.PI
    ctx.beginPath();
    ctx.arc(cx, cy, rOut, Math.PI + 0.989 * Math.PI, 2 * Math.PI);
    ctx.arc(cx, cy, rIn, 2 * Math.PI, Math.PI + 0.989 * Math.PI, true);
    ctx.closePath();
    ctx.fillStyle = "#10B981";
    ctx.fill();

    // Target Notch at 99%
    const tAngle = Math.PI + (targetPct / 100.0) * Math.PI;
    const tx1 = cx + (rIn - 10) * Math.cos(tAngle);
    const ty1 = cy + (rIn - 10) * Math.sin(tAngle);
    const tx2 = cx + (rOut + 10) * Math.cos(tAngle);
    const ty2 = cy + (rOut + 10) * Math.sin(tAngle);
    ctx.strokeStyle = "#0A0F1D";
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(tx1, ty1);
    ctx.lineTo(tx2, ty2);
    ctx.stroke();

    // Needle
    const clamped = Math.min(100, Math.max(0, availPct));
    const nAngle = Math.PI + (clamped / 100.0) * Math.PI;
    const nx = cx + (rOut - 20) * Math.cos(nAngle);
    const ny = cy + (rOut - 20) * Math.sin(nAngle);

    ctx.strokeStyle = "#E60012";
    ctx.lineWidth = 8;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(nx, ny);
    ctx.stroke();

    // Center Hub Pin
    ctx.fillStyle = "#0A0F1D";
    ctx.beginPath();
    ctx.arc(cx, cy, 16, 0, 2 * Math.PI);
    ctx.fill();

    // Center Digital Readout
    ctx.font = "bold 56px 'Segoe UI', Arial, sans-serif";
    ctx.fillStyle = statusColor;
    ctx.fillText(availPct.toFixed(2) + "%", cx, 275);

    ctx.font = "bold 20px 'Segoe UI', Arial, sans-serif";
    ctx.fillStyle = "#94A3B8";
    ctx.fillText("Availability", cx, 318);

    // Scale labels
    ctx.font = "bold 22px 'Segoe UI', Arial, sans-serif";
    ctx.fillStyle = "#64748B";
    ctx.fillText("0%", cx - rOut - 24, cy + 30);
    ctx.fillText("100%", cx + rOut + 24, cy + 30);

    ctx.fillStyle = "#10B981";
    ctx.fillText("Target: ≥" + targetPct.toFixed(1) + "%", cx, cy + 30);

    // Bottom Stat Boxes
    const boxY = cy + 85;
    ctx.fillStyle = "#ECFDF5";
    ctx.strokeStyle = "#A7F3D0";
    ctx.lineWidth = 2;
    if (ctx.roundRect) {
      ctx.beginPath();
      ctx.roundRect(80, boxY, 420, 130, 16);
      ctx.fill(); ctx.stroke();
    } else {
      ctx.fillRect(80, boxY, 420, 130);
      ctx.strokeRect(80, boxY, 420, 130);
    }
    ctx.font = "bold 20px 'Segoe UI', Arial, sans-serif";
    ctx.fillStyle = "#64748B";
    ctx.fillText("TOTAL UPTIME", 290, boxY + 40);
    ctx.font = "bold 32px 'Segoe UI', Arial, sans-serif";
    ctx.fillStyle = "#059669";
    ctx.fillText(Math.round(uptimeHrs).toLocaleString() + " hrs", 290, boxY + 85);

    // Box 2: Total Downtime
    ctx.fillStyle = "#FEF2F2";
    ctx.strokeStyle = "#FECACA";
    if (ctx.roundRect) {
      ctx.beginPath();
      ctx.roundRect(580, boxY, 420, 130, 16);
      ctx.fill(); ctx.stroke();
    } else {
      ctx.fillRect(580, boxY, 420, 130);
      ctx.strokeRect(580, boxY, 420, 130);
    }
    ctx.font = "bold 20px 'Segoe UI', Arial, sans-serif";
    ctx.fillStyle = "#64748B";
    ctx.fillText("TOTAL DOWNTIME", 790, boxY + 40);
    ctx.font = "bold 32px 'Segoe UI', Arial, sans-serif";
    ctx.fillStyle = "#DC2626";
    ctx.fillText(dtHrs.toFixed(1) + " hrs (" + dtMins.toLocaleString() + "m)", 790, boxY + 85);

    return canvas.toDataURL("image/png");
  } catch (err) {
    console.warn("Speedometer canvas draw error:", err);
    return null;
  }
}
window.drawSpeedometerToCanvas = drawSpeedometerToCanvas;

window.exportToExcel = async function(customOptions = null) {
  // 1. Role-based Export Permission Check
  const currentUser = getCurrentUser();
  if (!currentUser || !currentUser.canExport) {
    showToast("Export feature is reserved for Supervisor and Admin roles.", "warning");
    return;
  }

  const exp = resolveExportRecords(customOptions);
  const targetRecords = exp.records;
  const periodLabel = exp.periodLabel;
  const fileSuffix = exp.fileSuffix;
  const periodDays = exp.periodDays;
  const isAllMonths = exp.isAllMonths;
  const selectedMonth = exp.selectedMonth;

  if (targetRecords.length === 0) {
    showToast(`No downtime records found for ${periodLabel}.`, "warning");
    return;
  }

  showToast(`Generating Excel Report with Uptime Matrix for ${periodLabel}...`, "info");

  try {
    if (typeof ExcelJS !== "undefined") {
      const workbook = new ExcelJS.Workbook();
      workbook.creator = "Plant IT Management Portal";
      workbook.created = new Date();
      workbook.views = [
        {
          x: 0, y: 0, width: 10000, height: 20000,
          firstSheet: 0, activeTab: 0, visibility: 'visible'
        }
      ];

      const standardAreas = (typeof YOKOHAMA_AREAS !== "undefined" && YOKOHAMA_AREAS.length > 0)
        ? YOKOHAMA_AREAS
        : ["Mixing", "Extruder", "Building", "Curing", "Final", "Engineering", "Quality", "Warehouse / Raw Materials"];

      const totalOpMins = periodDays * 24 * 60 * standardAreas.length;
      const totalOpHours = parseFloat((totalOpMins / 60).toFixed(1));
      const totalDtMins = targetRecords.reduce((acc, r) => {
        const tot = parseInt(r.totalDowntimeMinutes, 10);
        if (!isNaN(tot) && tot > 0) return acc + tot;
        const dt = parseInt(r.downtimeMinutes, 10) || 0;
        const aff = parseInt(r.affectedMachines, 10) || 1;
        return acc + (dt * aff);
      }, 0);
      const totalDtHours = parseFloat((totalDtMins / 60).toFixed(1));
      const totalAffectedSum = targetRecords.reduce((acc, r) => acc + (parseInt(r.affectedMachines, 10) || 1), 0);
      const totalUpMins = Math.max(0, totalOpMins - totalDtMins);
      const overallAvailability = Math.min(100, Math.max(0, (totalUpMins / totalOpMins) * 100));

      const openCount = targetRecords.filter(r => r.status === "Open").length;
      const completedCount = targetRecords.filter(r => r.status === "Completed").length;

      const completedRecords = targetRecords.filter(r => r.status === "Completed");
      const closureRateText = targetRecords.length > 0
        ? `${((completedCount / targetRecords.length) * 100).toFixed(1)}%`
        : "N/A";
      const mttrVal = (completedRecords.length > 0)
        ? Math.round(completedRecords.reduce((acc, r) => acc + (parseInt(r.downtimeMinutes, 10) || 0), 0) / completedRecords.length)
        : null;
      const mttrText = mttrVal !== null ? `${mttrVal} min` : "N/A";
      const todayStr = new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });

      // =========================================================================
      // SHEET 1: PLANT_DASHBOARD (Executive KPI, Runtime & Available Time)
      // =========================================================================
      const dashSheet = workbook.addWorksheet("PLANT_DASHBOARD", {
        views: [{ state: "normal", active: true, tabSelected: true, showGridLines: true }]
      });

      // Banner Header
      dashSheet.mergeCells("A1:J1");
      const dTitle1 = dashSheet.getCell("A1");
      dTitle1.value = "YOKOHAMA TIRE MANUFACTURING - PLANT IT MANAGEMENT";
      dTitle1.font = { name: "Segoe UI", size: 15, bold: true, color: { argb: "FFFFFFFF" } };
      dTitle1.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF0A0F1D" } };
      dTitle1.alignment = { horizontal: "center", vertical: "middle" };
      dashSheet.getRow(1).height = 34;

      dashSheet.mergeCells("A2:J2");
      const dTitle2 = dashSheet.getCell("A2");
      dTitle2.value = "EXECUTIVE OPERATIONS DASHBOARD: DOWNTIME LOSS & EQUIPMENT AVAILABILITY";
      dTitle2.font = { name: "Segoe UI", size: 10.5, bold: true, color: { argb: "FFE2E8F0" } };
      dTitle2.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF1E293B" } };
      dTitle2.alignment = { horizontal: "center", vertical: "middle" };
      dashSheet.getRow(2).height = 22;

      dashSheet.mergeCells("A3:J3");
      const dRibbon = dashSheet.getCell("A3");
      dRibbon.value = `SCOPE: ${periodLabel.toUpperCase()} | REPORT GENERATED: ${todayStr} | CLASSIFICATION: CONFIDENTIAL EXECUTIVE REPORT`;
      dRibbon.font = { name: "Segoe UI", size: 9, bold: true, italic: true, color: { argb: "FFFFFFFF" } };
      dRibbon.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFE60012" } };
      dRibbon.alignment = { horizontal: "center", vertical: "middle" };
      dashSheet.getRow(3).height = 20;

      dashSheet.getRow(4).height = 8; // Spacer

      // Executive KPI Cards (Rows 5-6)
      const kpiCardStyles = [
        { range: "A5:B6", title: "PLANNED OPERATING TIME", val: `${(totalOpMins / 60).toFixed(1)} Hours`, sub: `(${totalOpMins.toLocaleString()} Minutes)`, topColor: "FF3B82F6", fgColor: "FFF1F5F9", txtColor: "FF0F172A" },
        { range: "C5:D6", title: "CUMULATIVE DOWNTIME", val: `${totalDtHours.toFixed(1)} Hours`, sub: `(${totalDtMins.toLocaleString()} Minutes)`, topColor: "FFE60012", fgColor: "FFFEE2E2", txtColor: "FFB91C1C" },
        { range: "E5:F6", title: "NET AVAILABLE RUN TIME", val: `${(totalUpMins / 60).toFixed(1)} Hours`, sub: `(${totalUpMins.toLocaleString()} Minutes)`, topColor: "FF10B981", fgColor: "FFECFDF5", txtColor: "FF047857" },
        { range: "G5:H6", title: "OVERALL AVAILABILITY", val: `${overallAvailability.toFixed(2)}%`, sub: overallAvailability >= 99 ? "Optimal Status" : (overallAvailability >= 95 ? "Warning Level" : "Critical State"), topColor: "FF7C3AED", fgColor: "FFEDE9FE", txtColor: "FF5B21B6" },
        { range: "I5:J6", title: "INCIDENTS & MTTR", val: `${targetRecords.length} Events (${completedCount} Closed)`, sub: `Rate: ${closureRateText} | MTTR: ${mttrText}`, topColor: "FF0F172A", fgColor: "FFF8FAFC", txtColor: "FF0F172A" }
      ];

      kpiCardStyles.forEach(card => {
        dashSheet.mergeCells(card.range);
        const cell = dashSheet.getCell(card.range.split(":")[0]);
        cell.value = `${card.title}
${card.val}
${card.sub}`;
        cell.font = { name: "Segoe UI", size: 9.5, bold: true, color: { argb: card.txtColor } };
        cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: card.fgColor } };
        cell.alignment = { horizontal: "center", vertical: "middle", wrapText: true };
        cell.border = {
          top: { style: "medium", color: { argb: card.topColor } },
          bottom: { style: "thin", color: { argb: "FFCBD5E1" } },
          left: { style: "thin", color: { argb: "FFCBD5E1" } },
          right: { style: "thin", color: { argb: "FFCBD5E1" } }
        };
      });
      dashSheet.getRow(5).height = 24;
      dashSheet.getRow(6).height = 26;

      dashSheet.getRow(7).height = 10; // Spacer

      // Section 1: Area-Wise Operational Availability & Runtime Table
      dashSheet.mergeCells("A8:J8");
      const aSecTitle = dashSheet.getCell("A8");
      aSecTitle.value = "1. AREA-WISE OPERATIONAL RUNTIME & AVAILABILITY TELEMETRY";
      aSecTitle.font = { name: "Segoe UI", size: 10.5, bold: true, color: { argb: "FFFFFFFF" } };
      aSecTitle.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF1E293B" } };
      aSecTitle.alignment = { horizontal: "left", vertical: "middle", indent: 1 };
      dashSheet.getRow(8).height = 24;

      const areaHeaders = [
        "S.No",
        "Area / Plant Section",
        "Planned Operating (Hrs)",
        "Planned Operating (Min)",
        "Downtime Loss (Hrs)",
        "Downtime Loss (Min)",
        "Net Available Run (Hrs)",
        "Net Available Run (Min)",
        "Availability %",
        "Incidents"
      ];
      const aHeaderRow = dashSheet.addRow(areaHeaders);
      aHeaderRow.height = 24;
      aHeaderRow.eachCell((cell) => {
        cell.font = { name: "Segoe UI", size: 9.5, bold: true, color: { argb: "FFFFFFFF" } };
        cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF0F172A" } };
        cell.alignment = { horizontal: "center", vertical: "middle" };
        cell.border = {
          top: { style: "thin", color: { argb: "FF334155" } },
          bottom: { style: "medium", color: { argb: "FFE60012" } },
          left: { style: "thin", color: { argb: "FF334155" } },
          right: { style: "thin", color: { argb: "FF334155" } }
        };
      });

      // Collect active areas
      const areaSet = new Set();
      if (typeof YOKOHAMA_AREAS !== "undefined" && Array.isArray(YOKOHAMA_AREAS)) {
        YOKOHAMA_AREAS.forEach(a => { if (a && a.trim()) areaSet.add(a.trim()); });
      }
      targetRecords.forEach(r => {
        if (r.area && r.area.trim()) areaSet.add(r.area.trim());
      });
      if (areaSet.size === 0) {
        ["Plant 1", "Plant 2", "Plant 3", "Plant 4", "4Roll shed", "Mixing Shed", "FID", "IT infra"].forEach(a => areaSet.add(a));
      }
      const activeAreas = Array.from(areaSet);

      let runningAreaOpMins = 0;
      let runningAreaDtMins = 0;
      let runningAreaUpMins = 0;
      let runningAreaIncidents = 0;

      activeAreas.forEach((area, aIdx) => {
        const aRecs = targetRecords.filter(r => (r.area && r.area.trim().toLowerCase() === area.toLowerCase()));
        const aDtMins = aRecs.reduce((acc, r) => {
          const tot = parseInt(r.totalDowntimeMinutes, 10);
          if (!isNaN(tot) && tot > 0) return acc + tot;
          const dt = parseInt(r.downtimeMinutes, 10) || 0;
          const aff = parseInt(r.affectedMachines, 10) || 1;
          return acc + (dt * aff);
        }, 0);
        const aOpMins = periodDays * 24 * 60;
        const aUpMins = Math.max(0, aOpMins - aDtMins);
        const aAvailPct = aOpMins > 0 ? Math.min(100, Math.max(0, (aUpMins / aOpMins) * 100)) : 100;

        runningAreaOpMins += aOpMins;
        runningAreaDtMins += aDtMins;
        runningAreaUpMins += aUpMins;
        runningAreaIncidents += aRecs.length;

        const aRow = dashSheet.addRow([
          aIdx + 1,
          area,
          parseFloat((aOpMins / 60).toFixed(1)),
          aOpMins,
          parseFloat((aDtMins / 60).toFixed(1)),
          aDtMins,
          parseFloat((aUpMins / 60).toFixed(1)),
          aUpMins,
          `${aAvailPct.toFixed(2)}%`,
          aRecs.length
        ]);
        aRow.height = 20;

        const isEven = (aIdx % 2 === 0);
        const rowBg = isEven ? "FFFFFFFF" : "FFF8FAFC";

        aRow.eachCell((cell, colNum) => {
          cell.font = { name: "Segoe UI", size: 9, color: { argb: "FF1E293B" } };
          cell.alignment = { horizontal: colNum === 2 ? "left" : "center", vertical: "middle" };
          cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: rowBg } };
          cell.border = {
            top: { style: "thin", color: { argb: "FFE2E8F0" } },
            bottom: { style: "thin", color: { argb: "FFE2E8F0" } },
            left: { style: "thin", color: { argb: "FFE2E8F0" } },
            right: { style: "thin", color: { argb: "FFE2E8F0" } }
          };

          if (colNum === 2) {
            cell.font = { name: "Segoe UI", size: 9, bold: true, color: { argb: "FF0F172A" } };
          }
          if ((colNum === 5 || colNum === 6) && aDtMins > 0) {
            cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFFEE2E2" } };
            cell.font = { name: "Consolas", size: 9, bold: true, color: { argb: "FFDC2626" } };
          }
          if (colNum === 9) {
            cell.font = { name: "Consolas", size: 9.5, bold: true };
            if (aAvailPct >= 99) {
              cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFECFDF5" } };
              cell.font.color = { argb: "FF047857" };
            } else if (aAvailPct >= 95) {
              cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFFEF3C7" } };
              cell.font.color = { argb: "FFB45309" };
            } else {
              cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFFEE2E2" } };
              cell.font.color = { argb: "FFDC2626" };
            }
          }
        });
      });

      // Area Grand Total Row
      const grandAvailPct = runningAreaOpMins > 0 ? Math.min(100, Math.max(0, (runningAreaUpMins / runningAreaOpMins) * 100)) : 100;
      const aTotalRow = dashSheet.addRow([
        "",
        "PLANT-WIDE GRAND TOTAL",
        parseFloat((runningAreaOpMins / 60).toFixed(1)),
        runningAreaOpMins,
        parseFloat((runningAreaDtMins / 60).toFixed(1)),
        runningAreaDtMins,
        parseFloat((runningAreaUpMins / 60).toFixed(1)),
        runningAreaUpMins,
        `${grandAvailPct.toFixed(2)}%`,
        runningAreaIncidents
      ]);
      aTotalRow.height = 22;
      aTotalRow.eachCell((cell, colNum) => {
        cell.font = { name: "Segoe UI", size: 9.5, bold: true, color: { argb: "FFFFFFFF" } };
        cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF0F172A" } };
        cell.alignment = { horizontal: colNum === 2 ? "left" : "center", vertical: "middle" };
        cell.border = {
          top: { style: "double", color: { argb: "FFFFFFFF" } },
          bottom: { style: "medium", color: { argb: "FFE60012" } },
          left: { style: "thin", color: { argb: "FF334155" } },
          right: { style: "thin", color: { argb: "FF334155" } }
        };
        if (colNum === 9) {
          cell.font = { name: "Consolas", size: 10, bold: true, color: { argb: "FF34D399" } };
        }
      });

      dashSheet.addRow([]); // Spacer

      // Section 2: Category Downtime Loss Breakdown Table
      const catSecStartRow = dashSheet.rowCount + 1;
      dashSheet.mergeCells(`A${catSecStartRow}:G${catSecStartRow}`);
      const cSecTitle = dashSheet.getCell(`A${catSecStartRow}`);
      cSecTitle.value = "2. FAILURE CATEGORY DOWNTIME LOSS BREAKDOWN";
      cSecTitle.font = { name: "Segoe UI", size: 10.5, bold: true, color: { argb: "FFFFFFFF" } };
      cSecTitle.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF1E293B" } };
      cSecTitle.alignment = { horizontal: "left", vertical: "middle", indent: 1 };
      dashSheet.getRow(catSecStartRow).height = 24;

      const catHeaders = [
        "S.No",
        "Failure Category",
        "Incident Events",
        "Downtime Loss (Min)",
        "Downtime Loss (Hrs)",
        "Share of Total Loss (%)",
        "Loss Risk Level"
      ];
      const cHeaderRow = dashSheet.addRow(catHeaders);
      cHeaderRow.height = 24;
      cHeaderRow.eachCell((cell) => {
        cell.font = { name: "Segoe UI", size: 9.5, bold: true, color: { argb: "FFFFFFFF" } };
        cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF0F172A" } };
        cell.alignment = { horizontal: "center", vertical: "middle" };
        cell.border = {
          top: { style: "thin", color: { argb: "FF334155" } },
          bottom: { style: "medium", color: { argb: "FFE60012" } },
          left: { style: "thin", color: { argb: "FF334155" } },
          right: { style: "thin", color: { argb: "FF334155" } }
        };
      });

      const catLossMap = new Map();
      targetRecords.forEach(r => {
        const rawCat = (r.category && String(r.category).trim()) || (r.nature && String(r.nature).trim()) || "MES";
        let matchKey = null;
        for (const k of catLossMap.keys()) {
          if (k.toLowerCase() === rawCat.toLowerCase()) { matchKey = k; break; }
        }
        if (!matchKey) { matchKey = rawCat; catLossMap.set(matchKey, { mins: 0, count: 0 }); }
        const totMins = parseInt(r.totalDowntimeMinutes, 10);
        const dtMin = parseInt(r.downtimeMinutes, 10) || 0;
        const aff = parseInt(r.affectedMachines, 10) || 1;
        const effectiveMins = (!isNaN(totMins) && totMins > 0) ? totMins : (dtMin * aff);
        const entry = catLossMap.get(matchKey);
        entry.mins += effectiveMins;
        entry.count += 1;
      });

      let sortedLossCats = Array.from(catLossMap.entries())
        .sort((a, b) => b[1].mins - a[1].mins || b[1].count - a[1].count);

      if (sortedLossCats.length === 0) {
        sortedLossCats = [["MES", { mins: 0, count: 0 }]];
      }

      const totalLossMins = sortedLossCats.reduce((acc, c) => acc + c[1].mins, 0);
      const safeTotalLossMins = totalLossMins > 0 ? totalLossMins : 1;

      sortedLossCats.forEach(([catName, catData], cIdx) => {
        const sharePct = totalLossMins > 0 ? ((catData.mins / safeTotalLossMins) * 100).toFixed(1) : "0.0";
        const riskLevel = parseFloat(sharePct) >= 25 ? "HIGH IMPACT" : (parseFloat(sharePct) >= 10 ? "MODERATE" : "STANDARD");

        const cRow = dashSheet.addRow([
          cIdx + 1,
          catName,
          catData.count,
          catData.mins,
          parseFloat((catData.mins / 60).toFixed(1)),
          `${sharePct}%`,
          riskLevel
        ]);
        cRow.height = 20;

        const isEven = (cIdx % 2 === 0);
        const rowBg = isEven ? "FFFFFFFF" : "FFF8FAFC";

        cRow.eachCell((cell, colNum) => {
          cell.font = { name: "Segoe UI", size: 9, color: { argb: "FF1E293B" } };
          cell.alignment = { horizontal: colNum === 2 ? "left" : "center", vertical: "middle" };
          cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: rowBg } };
          cell.border = {
            top: { style: "thin", color: { argb: "FFE2E8F0" } },
            bottom: { style: "thin", color: { argb: "FFE2E8F0" } },
            left: { style: "thin", color: { argb: "FFE2E8F0" } },
            right: { style: "thin", color: { argb: "FFE2E8F0" } }
          };

          if (colNum === 2) {
            cell.font = { name: "Segoe UI", size: 9, bold: true, color: { argb: "FF0F172A" } };
          }
          if ((colNum === 4 || colNum === 5) && catData.mins > 0) {
            cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFFEE2E2" } };
            cell.font = { name: "Consolas", size: 9, bold: true, color: { argb: "FFDC2626" } };
          }
          if (colNum === 6) {
            cell.font = { name: "Consolas", size: 9, bold: true, color: { argb: "FF475569" } };
          }
          if (colNum === 7) {
            cell.font = { name: "Segoe UI", size: 8.5, bold: true };
            if (riskLevel === "HIGH IMPACT") {
              cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFFEE2E2" } };
              cell.font.color = { argb: "FFB91C1C" };
            } else if (riskLevel === "MODERATE") {
              cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFFEF3C7" } };
              cell.font.color = { argb: "FFB45309" };
            } else {
              cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFECFDF5" } };
              cell.font.color = { argb: "FF047857" };
            }
          }
        });
      });

      const totalCatEvents = sortedLossCats.reduce((acc, c) => acc + c[1].count, 0);
      const cTotalRow = dashSheet.addRow([
        "",
        "TOTAL CATEGORY LOSS",
        totalCatEvents,
        totalLossMins,
        parseFloat((totalLossMins / 60).toFixed(1)),
        "100.0%",
        "ALL CATEGORIES"
      ]);
      cTotalRow.height = 22;
      cTotalRow.eachCell((cell, colNum) => {
        cell.font = { name: "Segoe UI", size: 9.5, bold: true, color: { argb: "FFFFFFFF" } };
        cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF0F172A" } };
        cell.alignment = { horizontal: colNum === 2 ? "left" : "center", vertical: "middle" };
        cell.border = {
          top: { style: "double", color: { argb: "FFFFFFFF" } },
          bottom: { style: "medium", color: { argb: "FFE60012" } },
          left: { style: "thin", color: { argb: "FF334155" } },
          right: { style: "thin", color: { argb: "FF334155" } }
        };
      });

      // =========================================================================
      // Section 3: Process-Wise Operational Runtime & Availability Telemetry
      // =========================================================================
      dashSheet.addRow([]); // Spacer
      const procSecStartRow = dashSheet.rowCount + 1;
      dashSheet.mergeCells(`A${procSecStartRow}:J${procSecStartRow}`);
      const pSecTitle = dashSheet.getCell(`A${procSecStartRow}`);
      pSecTitle.value = "3. PROCESS-WISE OPERATIONAL RUNTIME & AVAILABILITY TELEMETRY";
      pSecTitle.font = { name: "Segoe UI", size: 10.5, bold: true, color: { argb: "FFFFFFFF" } };
      pSecTitle.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF1E293B" } };
      pSecTitle.alignment = { horizontal: "left", vertical: "middle", indent: 1 };
      dashSheet.getRow(procSecStartRow).height = 24;

      const procHeaders = [
        "S.No",
        "Process / Manufacturing Operation",
        "Planned Operating (Hrs)",
        "Planned Operating (Min)",
        "Downtime Loss (Hrs)",
        "Downtime Loss (Min)",
        "Net Available Run (Hrs)",
        "Net Available Run (Min)",
        "Availability %",
        "Incidents"
      ];
      const pHeaderRow = dashSheet.addRow(procHeaders);
      pHeaderRow.height = 24;
      pHeaderRow.eachCell((cell) => {
        cell.font = { name: "Segoe UI", size: 9.5, bold: true, color: { argb: "FFFFFFFF" } };
        cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF0F172A" } };
        cell.alignment = { horizontal: "center", vertical: "middle" };
        cell.border = {
          top: { style: "thin", color: { argb: "FF334155" } },
          bottom: { style: "medium", color: { argb: "FFE60012" } },
          left: { style: "thin", color: { argb: "FF334155" } },
          right: { style: "thin", color: { argb: "FF334155" } }
        };
      });

      const procSet = new Set();
      if (typeof YOKOHAMA_PROCESSES !== "undefined" && Array.isArray(YOKOHAMA_PROCESSES)) {
        YOKOHAMA_PROCESSES.forEach(p => { if (p && p.trim()) procSet.add(p.trim()); });
      }
      targetRecords.forEach(r => {
        if (r.process && r.process.trim()) procSet.add(r.process.trim());
      });
      if (procSet.size === 0) {
        ["Tire Building", "3 Roll", "Tire Curing", "Biascutter", "Kneader", "Solid Curing", "Rim Fitting", "IT Infrastructure"].forEach(p => procSet.add(p));
      }
      const activeProcesses = Array.from(procSet);

      let runningProcOpMins = 0;
      let runningProcDtMins = 0;
      let runningProcUpMins = 0;
      let runningProcIncidents = 0;

      const procStats = activeProcesses.map(proc => {
        const pRecs = targetRecords.filter(r => (r.process && r.process.trim().toLowerCase() === proc.toLowerCase()));
        const pDtMins = pRecs.reduce((acc, r) => {
          const tot = parseInt(r.totalDowntimeMinutes, 10);
          if (!isNaN(tot) && tot > 0) return acc + tot;
          const dt = parseInt(r.downtimeMinutes, 10) || 0;
          const aff = parseInt(r.affectedMachines, 10) || 1;
          return acc + (dt * aff);
        }, 0);
        const pOpMins = periodDays * 24 * 60;
        const pUpMins = Math.max(0, pOpMins - pDtMins);
        const pAvailPct = pOpMins > 0 ? Math.min(100, Math.max(0, (pUpMins / pOpMins) * 100)) : 100;
        return { proc, pRecs, pDtMins, pOpMins, pUpMins, pAvailPct };
      }).sort((a, b) => b.pDtMins - a.pDtMins || b.pRecs.length - a.pRecs.length);

      procStats.forEach((pStat, pIdx) => {
        runningProcOpMins += pStat.pOpMins;
        runningProcDtMins += pStat.pDtMins;
        runningProcUpMins += pStat.pUpMins;
        runningProcIncidents += pStat.pRecs.length;

        const pRow = dashSheet.addRow([
          pIdx + 1,
          pStat.proc,
          parseFloat((pStat.pOpMins / 60).toFixed(1)),
          pStat.pOpMins,
          parseFloat((pStat.pDtMins / 60).toFixed(1)),
          pStat.pDtMins,
          parseFloat((pStat.pUpMins / 60).toFixed(1)),
          pStat.pUpMins,
          `${pStat.pAvailPct.toFixed(2)}%`,
          pStat.pRecs.length
        ]);
        pRow.height = 20;

        const isEven = (pIdx % 2 === 0);
        const rowBg = isEven ? "FFFFFFFF" : "FFF8FAFC";

        pRow.eachCell((cell, colNum) => {
          cell.font = { name: "Segoe UI", size: 9, color: { argb: "FF1E293B" } };
          cell.alignment = { horizontal: colNum === 2 ? "left" : "center", vertical: "middle" };
          cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: rowBg } };
          cell.border = {
            top: { style: "thin", color: { argb: "FFE2E8F0" } },
            bottom: { style: "thin", color: { argb: "FFE2E8F0" } },
            left: { style: "thin", color: { argb: "FFE2E8F0" } },
            right: { style: "thin", color: { argb: "FFE2E8F0" } }
          };

          if (colNum === 2) {
            cell.font = { name: "Segoe UI", size: 9, bold: true, color: { argb: "FF0F172A" } };
          }
          if ((colNum === 5 || colNum === 6) && pStat.pDtMins > 0) {
            cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFFEE2E2" } };
            cell.font = { name: "Consolas", size: 9, bold: true, color: { argb: "FFDC2626" } };
          }
          if (colNum === 9) {
            cell.font = { name: "Consolas", size: 9.5, bold: true };
            if (pStat.pAvailPct >= 99) {
              cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFECFDF5" } };
              cell.font.color = { argb: "FF047857" };
            } else if (pStat.pAvailPct >= 95) {
              cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFFEF3C7" } };
              cell.font.color = { argb: "FFB45309" };
            } else {
              cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFFEE2E2" } };
              cell.font.color = { argb: "FFDC2626" };
            }
          }
        });
      });

      const grandProcAvailPct = runningProcOpMins > 0 ? Math.min(100, Math.max(0, (runningProcUpMins / runningProcOpMins) * 100)) : 100;
      const pTotalRow = dashSheet.addRow([
        "",
        "PLANT-WIDE PROCESS TOTAL",
        parseFloat((runningProcOpMins / 60).toFixed(1)),
        runningProcOpMins,
        parseFloat((runningProcDtMins / 60).toFixed(1)),
        runningProcDtMins,
        parseFloat((runningProcUpMins / 60).toFixed(1)),
        runningProcUpMins,
        `${grandProcAvailPct.toFixed(2)}%`,
        runningProcIncidents
      ]);
      pTotalRow.height = 22;
      pTotalRow.eachCell((cell, colNum) => {
        cell.font = { name: "Segoe UI", size: 9.5, bold: true, color: { argb: "FFFFFFFF" } };
        cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF0F172A" } };
        cell.alignment = { horizontal: colNum === 2 ? "left" : "center", vertical: "middle" };
        cell.border = {
          top: { style: "double", color: { argb: "FFFFFFFF" } },
          bottom: { style: "medium", color: { argb: "FFE60012" } },
          left: { style: "thin", color: { argb: "FF334155" } },
          right: { style: "thin", color: { argb: "FF334155" } }
        };
        if (colNum === 9) {
          cell.font = { name: "Consolas", size: 10, bold: true, color: { argb: "FF34D399" } };
        }
      });

      // =========================================================================
      // Section 4: Equipment Criticality Impact Analysis
      // =========================================================================
      dashSheet.addRow([]); // Spacer
      const critSecStartRow = dashSheet.rowCount + 1;
      dashSheet.mergeCells(`A${critSecStartRow}:H${critSecStartRow}`);
      const crSecTitle = dashSheet.getCell(`A${critSecStartRow}`);
      crSecTitle.value = "4. EQUIPMENT CRITICALITY ANALYSIS: BOTTLENECK VS STANDARD ASSETS";
      crSecTitle.font = { name: "Segoe UI", size: 10.5, bold: true, color: { argb: "FFFFFFFF" } };
      crSecTitle.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF1E293B" } };
      crSecTitle.alignment = { horizontal: "left", vertical: "middle", indent: 1 };
      dashSheet.getRow(critSecStartRow).height = 24;

      const critHeaders = [
        "S.No",
        "Criticality Tier",
        "Total Incidents",
        "Affected Machine Count",
        "Downtime Loss (Min)",
        "Downtime Loss (Hrs)",
        "Share of Total Loss (%)",
        "Production Impact Tier"
      ];
      const crHeaderRow = dashSheet.addRow(critHeaders);
      crHeaderRow.height = 24;
      crHeaderRow.eachCell((cell) => {
        cell.font = { name: "Segoe UI", size: 9.5, bold: true, color: { argb: "FFFFFFFF" } };
        cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF0F172A" } };
        cell.alignment = { horizontal: "center", vertical: "middle" };
        cell.border = {
          top: { style: "thin", color: { argb: "FF334155" } },
          bottom: { style: "medium", color: { argb: "FFE60012" } },
          left: { style: "thin", color: { argb: "FF334155" } },
          right: { style: "thin", color: { argb: "FF334155" } }
        };
      });

      const critRecs = targetRecords.filter(r => String(r.isCritical).trim().toLowerCase() === "yes");
      const stdRecs = targetRecords.filter(r => String(r.isCritical).trim().toLowerCase() !== "yes");

      const calcTierDt = (recs) => recs.reduce((acc, r) => {
        const tot = parseInt(r.totalDowntimeMinutes, 10);
        if (!isNaN(tot) && tot > 0) return acc + tot;
        const dt = parseInt(r.downtimeMinutes, 10) || 0;
        const aff = parseInt(r.affectedMachines, 10) || 1;
        return acc + (dt * aff);
      }, 0);

      const critDtMins = calcTierDt(critRecs);
      const stdDtMins = calcTierDt(stdRecs);
      const critAffSum = critRecs.reduce((acc, r) => acc + (parseInt(r.affectedMachines, 10) || 1), 0);
      const stdAffSum = stdRecs.reduce((acc, r) => acc + (parseInt(r.affectedMachines, 10) || 1), 0);

      const allDtSum = Math.max(1, critDtMins + stdDtMins);
      const critShare = ((critDtMins / allDtSum) * 100).toFixed(1);
      const stdShare = ((stdDtMins / allDtSum) * 100).toFixed(1);

      const critTiers = [
        {
          sno: 1,
          name: "Critical Equipment (Production Bottleneck Assets)",
          count: critRecs.length,
          aff: critAffSum,
          mins: critDtMins,
          hours: parseFloat((critDtMins / 60).toFixed(1)),
          share: `${critShare}%`,
          impact: "TIER 1 — HIGH PRIORITY (Critical Path Loss)",
          bgColor: "FFFEE2E2",
          badgeColor: "FFB91C1C"
        },
        {
          sno: 2,
          name: "Standard Equipment (Secondary / Line Assets)",
          count: stdRecs.length,
          aff: stdAffSum,
          mins: stdDtMins,
          hours: parseFloat((stdDtMins / 60).toFixed(1)),
          share: `${stdShare}%`,
          impact: "TIER 2 — STANDARD OPERATIONAL LOSS",
          bgColor: "FFFFFFFF",
          badgeColor: "FF047857"
        }
      ];

      critTiers.forEach(t => {
        const row = dashSheet.addRow([
          t.sno,
          t.name,
          t.count,
          t.aff,
          t.mins,
          t.hours,
          t.share,
          t.impact
        ]);
        row.height = 20;
        row.eachCell((cell, colNum) => {
          cell.font = { name: "Segoe UI", size: 9, color: { argb: "FF1E293B" } };
          cell.alignment = { horizontal: colNum === 2 ? "left" : "center", vertical: "middle" };
          cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: t.bgColor } };
          cell.border = {
            top: { style: "thin", color: { argb: "FFE2E8F0" } },
            bottom: { style: "thin", color: { argb: "FFE2E8F0" } },
            left: { style: "thin", color: { argb: "FFE2E8F0" } },
            right: { style: "thin", color: { argb: "FFE2E8F0" } }
          };
          if (colNum === 2) {
            cell.font = { name: "Segoe UI", size: 9, bold: true, color: { argb: "FF0F172A" } };
          }
          if ((colNum === 5 || colNum === 6) && t.mins > 0) {
            cell.font = { name: "Consolas", size: 9, bold: true, color: { argb: "FFDC2626" } };
          }
          if (colNum === 8) {
            cell.font = { name: "Segoe UI", size: 8.5, bold: true, color: { argb: t.badgeColor } };
          }
        });
      });

      const crTotalRow = dashSheet.addRow([
        "",
        "TOTAL CRITICALITY TELEMETRY",
        targetRecords.length,
        critAffSum + stdAffSum,
        critDtMins + stdDtMins,
        parseFloat(((critDtMins + stdDtMins) / 60).toFixed(1)),
        "100.0%",
        "ALL PRODUCTION TIERS"
      ]);
      crTotalRow.height = 22;
      crTotalRow.eachCell((cell, colNum) => {
        cell.font = { name: "Segoe UI", size: 9.5, bold: true, color: { argb: "FFFFFFFF" } };
        cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF0F172A" } };
        cell.alignment = { horizontal: colNum === 2 ? "left" : "center", vertical: "middle" };
        cell.border = {
          top: { style: "double", color: { argb: "FFFFFFFF" } },
          bottom: { style: "medium", color: { argb: "FFE60012" } },
          left: { style: "thin", color: { argb: "FF334155" } },
          right: { style: "thin", color: { argb: "FF334155" } }
        };
      });

      // =========================================================================
      // Section 5: Nature & Support Responsibility Breakdown
      // =========================================================================
      dashSheet.addRow([]); // Spacer
      const natSecStartRow = dashSheet.rowCount + 1;
      dashSheet.mergeCells(`A${natSecStartRow}:G${natSecStartRow}`);
      const nrSecTitle = dashSheet.getCell(`A${natSecStartRow}`);
      nrSecTitle.value = "5. NATURE & SUPPORT RESPONSIBILITY BREAKDOWN (MES / INFRA & ATC / MELSS)";
      nrSecTitle.font = { name: "Segoe UI", size: 10.5, bold: true, color: { argb: "FFFFFFFF" } };
      nrSecTitle.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF1E293B" } };
      nrSecTitle.alignment = { horizontal: "left", vertical: "middle", indent: 1 };
      dashSheet.getRow(natSecStartRow).height = 24;

      const nrHeaders = [
        "S.No",
        "Classification / Support Entity",
        "Domain Group",
        "Incident Events",
        "Downtime Loss (Min)",
        "Downtime Loss (Hrs)",
        "Share of Loss (%)"
      ];
      const nrHeaderRow = dashSheet.addRow(nrHeaders);
      nrHeaderRow.height = 24;
      nrHeaderRow.eachCell((cell) => {
        cell.font = { name: "Segoe UI", size: 9.5, bold: true, color: { argb: "FFFFFFFF" } };
        cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF0F172A" } };
        cell.alignment = { horizontal: "center", vertical: "middle" };
        cell.border = {
          top: { style: "thin", color: { argb: "FF334155" } },
          bottom: { style: "medium", color: { argb: "FFE60012" } },
          left: { style: "thin", color: { argb: "FF334155" } },
          right: { style: "thin", color: { argb: "FF334155" } }
        };
      });

      const mesRecs = targetRecords.filter(r => String(r.nature).trim().toUpperCase() === "MES");
      const infraRecs = targetRecords.filter(r => String(r.nature).trim().toUpperCase() === "INFRA");
      const otherNatureRecs = targetRecords.filter(r => {
        const n = String(r.nature).trim().toUpperCase();
        return n !== "MES" && n !== "INFRA";
      });

      const atcRecs = targetRecords.filter(r => String(r.responsibility).trim().toUpperCase().includes("ATC"));
      const melssRecs = targetRecords.filter(r => String(r.responsibility).trim().toUpperCase().includes("MELSS"));
      const otherRespRecs = targetRecords.filter(r => {
        const resp = String(r.responsibility).trim().toUpperCase();
        return !resp.includes("ATC") && !resp.includes("MELSS");
      });

      const nrItems = [
        { name: "MES (Manufacturing Execution Systems)", domain: "Domain: Nature", recs: mesRecs },
        { name: "INFRA (IT Infrastructure & Networks)", domain: "Domain: Nature", recs: infraRecs },
        ...(otherNatureRecs.length > 0 ? [{ name: "Other Nature Categories", domain: "Domain: Nature", recs: otherNatureRecs }] : []),
        { name: "ATC (Internal Plant IT Operations)", domain: "Support: Responsibility", recs: atcRecs },
        { name: "MELSS (Automation & System Vendor)", domain: "Support: Responsibility", recs: melssRecs },
        ...(otherRespRecs.length > 0 ? [{ name: "Other Support / Vendors", domain: "Support: Responsibility", recs: otherRespRecs }] : [])
      ];

      nrItems.forEach((item, idx) => {
        const dt = calcTierDt(item.recs);
        const share = totalDtMins > 0 ? ((dt / totalDtMins) * 100).toFixed(1) : "0.0";
        const row = dashSheet.addRow([
          idx + 1,
          item.name,
          item.domain,
          item.recs.length,
          dt,
          parseFloat((dt / 60).toFixed(1)),
          `${share}%`
        ]);
        row.height = 20;

        const isEven = (idx % 2 === 0);
        const rowBg = isEven ? "FFFFFFFF" : "FFF8FAFC";

        row.eachCell((cell, colNum) => {
          cell.font = { name: "Segoe UI", size: 9, color: { argb: "FF1E293B" } };
          cell.alignment = { horizontal: colNum === 2 ? "left" : "center", vertical: "middle" };
          cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: rowBg } };
          cell.border = {
            top: { style: "thin", color: { argb: "FFE2E8F0" } },
            bottom: { style: "thin", color: { argb: "FFE2E8F0" } },
            left: { style: "thin", color: { argb: "FFE2E8F0" } },
            right: { style: "thin", color: { argb: "FFE2E8F0" } }
          };
          if (colNum === 2) {
            cell.font = { name: "Segoe UI", size: 9, bold: true, color: { argb: "FF0F172A" } };
          }
          if (colNum === 3) {
            cell.font = { name: "Segoe UI", size: 8.5, italic: true, color: { argb: "FF64748B" } };
          }
          if ((colNum === 5 || colNum === 6) && dt > 0) {
            cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFFEE2E2" } };
            cell.font = { name: "Consolas", size: 9, bold: true, color: { argb: "FFDC2626" } };
          }
        });
      });

      // =========================================================================
      // Section 6: Monthly Performance & Trajectory Trend Summary
      // =========================================================================
      dashSheet.addRow([]); // Spacer
      const monthSecStartRow = dashSheet.rowCount + 1;
      dashSheet.mergeCells(`A${monthSecStartRow}:J${monthSecStartRow}`);
      const mSecTitle = dashSheet.getCell(`A${monthSecStartRow}`);
      mSecTitle.value = "6. MONTHLY PERFORMANCE & TRAJECTORY TREND SUMMARY";
      mSecTitle.font = { name: "Segoe UI", size: 10.5, bold: true, color: { argb: "FFFFFFFF" } };
      mSecTitle.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF1E293B" } };
      mSecTitle.alignment = { horizontal: "left", vertical: "middle", indent: 1 };
      dashSheet.getRow(monthSecStartRow).height = 24;

      const mHeaders = [
        "S.No",
        "Month (FY 2026)",
        "Calendar Days",
        "Planned Operating (Hrs)",
        "Downtime Loss (Hrs)",
        "Downtime Loss (Min)",
        "Net Available Run (Hrs)",
        "Availability %",
        "Total Events",
        "Closure Rate %"
      ];
      const mHeaderRow = dashSheet.addRow(mHeaders);
      mHeaderRow.height = 24;
      mHeaderRow.eachCell((cell) => {
        cell.font = { name: "Segoe UI", size: 9.5, bold: true, color: { argb: "FFFFFFFF" } };
        cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF0F172A" } };
        cell.alignment = { horizontal: "center", vertical: "middle" };
        cell.border = {
          top: { style: "thin", color: { argb: "FF334155" } },
          bottom: { style: "medium", color: { argb: "FFE60012" } },
          left: { style: "thin", color: { argb: "FF334155" } },
          right: { style: "thin", color: { argb: "FF334155" } }
        };
      });

      const ymSet = new Set();
      targetRecords.forEach(r => {
        if (r.issueDate && r.issueDate.length >= 7) {
          ymSet.add(r.issueDate.substring(0, 7));
        }
      });
      const sortedYm = Array.from(ymSet).sort();
      if (sortedYm.length === 0) {
        sortedYm.push(selectedMonth !== "ALL" ? selectedMonth : "2026-01");
      }

      let runMonthOpMins = 0;
      let runMonthDtMins = 0;
      let runMonthUpMins = 0;
      let runMonthIncidents = 0;
      let runMonthClosed = 0;

      sortedYm.forEach((ym, mIdx) => {
        const [y, m] = ym.split("-").map(Number);
        const mDays = new Date(y, m, 0).getDate();
        const mOpMins = mDays * 24 * 60 * standardAreas.length;
        const mRecs = targetRecords.filter(r => r.issueDate && r.issueDate.startsWith(ym));
        const mDtMins = mRecs.reduce((acc, r) => {
          const tot = parseInt(r.totalDowntimeMinutes, 10);
          if (!isNaN(tot) && tot > 0) return acc + tot;
          const dt = parseInt(r.downtimeMinutes, 10) || 0;
          const aff = parseInt(r.affectedMachines, 10) || 1;
          return acc + (dt * aff);
        }, 0);
        const mUpMins = Math.max(0, mOpMins - mDtMins);
        const mAvailPct = mOpMins > 0 ? Math.min(100, Math.max(0, (mUpMins / mOpMins) * 100)) : 100;
        const mClosed = mRecs.filter(r => r.status === "Completed").length;
        const mClosurePct = mRecs.length > 0 ? ((mClosed / mRecs.length) * 100).toFixed(1) : "N/A";

        runMonthOpMins += mOpMins;
        runMonthDtMins += mDtMins;
        runMonthUpMins += mUpMins;
        runMonthIncidents += mRecs.length;
        runMonthClosed += mClosed;

        const monthName = typeof getMonthName === "function" ? `${getMonthName(m - 1)} ${y}` : `${ym}`;

        const row = dashSheet.addRow([
          mIdx + 1,
          monthName,
          mDays,
          parseFloat((mOpMins / 60).toFixed(1)),
          parseFloat((mDtMins / 60).toFixed(1)),
          mDtMins,
          parseFloat((mUpMins / 60).toFixed(1)),
          `${mAvailPct.toFixed(2)}%`,
          mRecs.length,
          mClosurePct === "N/A" ? "N/A" : `${mClosurePct}%`
        ]);
        row.height = 20;

        const isEven = (mIdx % 2 === 0);
        const rowBg = isEven ? "FFFFFFFF" : "FFF8FAFC";

        row.eachCell((cell, colNum) => {
          cell.font = { name: "Segoe UI", size: 9, color: { argb: "FF1E293B" } };
          cell.alignment = { horizontal: colNum === 2 ? "left" : "center", vertical: "middle" };
          cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: rowBg } };
          cell.border = {
            top: { style: "thin", color: { argb: "FFE2E8F0" } },
            bottom: { style: "thin", color: { argb: "FFE2E8F0" } },
            left: { style: "thin", color: { argb: "FFE2E8F0" } },
            right: { style: "thin", color: { argb: "FFE2E8F0" } }
          };
          if (colNum === 2) {
            cell.font = { name: "Segoe UI", size: 9, bold: true, color: { argb: "FF0F172A" } };
          }
          if ((colNum === 5 || colNum === 6) && mDtMins > 0) {
            cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFFEE2E2" } };
            cell.font = { name: "Consolas", size: 9, bold: true, color: { argb: "FFDC2626" } };
          }
          if (colNum === 8) {
            cell.font = { name: "Consolas", size: 9.5, bold: true };
            if (mAvailPct >= 99) {
              cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFECFDF5" } };
              cell.font.color = { argb: "FF047857" };
            } else if (mAvailPct >= 95) {
              cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFFEF3C7" } };
              cell.font.color = { argb: "FFB45309" };
            } else {
              cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFFEE2E2" } };
              cell.font.color = { argb: "FFDC2626" };
            }
          }
        });
      });

      const grandMonthAvailPct = runMonthOpMins > 0 ? Math.min(100, Math.max(0, (runMonthUpMins / runMonthOpMins) * 100)) : 100;
      const grandMonthClosurePct = runMonthIncidents > 0 ? `${((runMonthClosed / runMonthIncidents) * 100).toFixed(1)}%` : "N/A";
      const mTotalRow = dashSheet.addRow([
        "",
        "TOTAL PERIOD PERFORMANCE",
        "-",
        parseFloat((runMonthOpMins / 60).toFixed(1)),
        parseFloat((runMonthDtMins / 60).toFixed(1)),
        runMonthDtMins,
        parseFloat((runMonthUpMins / 60).toFixed(1)),
        `${grandMonthAvailPct.toFixed(2)}%`,
        runMonthIncidents,
        grandMonthClosurePct
      ]);
      mTotalRow.height = 22;
      mTotalRow.eachCell((cell, colNum) => {
        cell.font = { name: "Segoe UI", size: 9.5, bold: true, color: { argb: "FFFFFFFF" } };
        cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF0F172A" } };
        cell.alignment = { horizontal: colNum === 2 ? "left" : "center", vertical: "middle" };
        cell.border = {
          top: { style: "double", color: { argb: "FFFFFFFF" } },
          bottom: { style: "medium", color: { argb: "FFE60012" } },
          left: { style: "thin", color: { argb: "FF334155" } },
          right: { style: "thin", color: { argb: "FF334155" } }
        };
        if (colNum === 8) {
          cell.font = { name: "Consolas", size: 10, bold: true, color: { argb: "FF34D399" } };
        }
      });

      dashSheet.columns = [
        { width: 7 },   // S.No
        { width: 34 },  // Area / Category / Process / Month
        { width: 22 },  // Planned Time Hrs / Events / Days
        { width: 22 },  // Planned Time Min / Loss Min / Affected Assets
        { width: 20 },  // Downtime Loss Hrs
        { width: 20 },  // Downtime Loss Min / Share %
        { width: 24 },  // Available Run Hrs / Risk Level
        { width: 22 },  // Available Run Min / Impact Tier
        { width: 18 },  // Availability % / Events
        { width: 16 }   // Incidents / Closure Rate
      ];

      // =========================================================================
      // EMBED DASHBOARD CHARTS & SPEEDOMETER GAUGE WIDGETS
      // =========================================================================
      let chartAssets = (typeof DEFAULT_CHART_ASSETS !== "undefined") ? DEFAULT_CHART_ASSETS : {};

      // Dynamic Speedometer Card rendering if in browser
      let dynamicSpeedo = null;
      if (typeof drawSpeedometerToCanvas === "function") {
        dynamicSpeedo = drawSpeedometerToCanvas(overallAvailability, 99.0, totalUpMins / 60, totalDtHours, totalDtMins);
      }

      // Dynamic on-screen canvas captures if present
      function getCanvasDataUrl(id) {
        try {
          if (typeof document !== "undefined") {
            const el = document.getElementById(id);
            if (el && el.width > 0 && el.height > 0) {
              return el.toDataURL("image/png");
            }
          }
        } catch (e) {}
        return null;
      }

      const chartImages = {
        speedo: dynamicSpeedo || chartAssets.speedo,
        monthly: getCanvasDataUrl("chartMonthlyAvailability") || chartAssets.monthly,
        areaAvail: getCanvasDataUrl("chartAreaAvailability") || chartAssets.areaAvail,
        procAvail: getCanvasDataUrl("chartProcessAvailability") || chartAssets.procAvail,
        trajectory: getCanvasDataUrl("chartDayAvailability") || chartAssets.trajectory,
        catPie: getCanvasDataUrl("chartCategoryPie") || getCanvasDataUrl("chartCategoryLoss") || chartAssets.catPie,
        catBar: chartAssets.catBar,
        dtArea: getCanvasDataUrl("chartAreaDowntime") || chartAssets.dtArea,
        dtProc: getCanvasDataUrl("chartProcessDowntime") || chartAssets.dtProc
      };

      const chartPlacements = [
        { b64: chartImages.speedo, tl: { col: 11.2, row: 3.5 }, ext: { width: 440, height: 260 } },
        { b64: chartImages.monthly, tl: { col: 17.5, row: 3.5 }, ext: { width: 440, height: 260 } },
        { b64: chartImages.areaAvail, tl: { col: 11.2, row: 18.5 }, ext: { width: 440, height: 240 } },
        { b64: chartImages.procAvail, tl: { col: 17.5, row: 18.5 }, ext: { width: 440, height: 240 } },
        { b64: chartImages.trajectory, tl: { col: 11.2, row: 32.5 }, ext: { width: 440, height: 240 } },
        { b64: chartImages.catPie, tl: { col: 17.5, row: 32.5 }, ext: { width: 215, height: 240 } },
        { b64: chartImages.catBar, tl: { col: 20.2, row: 32.5 }, ext: { width: 215, height: 240 } },
        { b64: chartImages.dtArea, tl: { col: 11.2, row: 46.5 }, ext: { width: 440, height: 230 } },
        { b64: chartImages.dtProc, tl: { col: 17.5, row: 46.5 }, ext: { width: 440, height: 230 } }
      ];

      chartPlacements.forEach(item => {
        if (item.b64) {
          try {
            const imgId = workbook.addImage({ base64: item.b64, extension: "png" });
            dashSheet.addImage(imgId, { tl: item.tl, ext: item.ext });
          } catch (e) {
            console.warn("Could not embed chart image:", e);
          }
        }
      });

      dashSheet.pageSetup = {
        orientation: "landscape",
        fitToWidth: 1,
        fitToHeight: 0,
        fitToPage: true,
        paperSize: 9
      };

      // =========================================================================
      // SHEET 2: IT_DOWNTIME_LOG (Audit Trail & Performance Metrics)
      // =========================================================================
      const logSheet = workbook.addWorksheet("IT_DOWNTIME_LOG", {
        views: [{ state: "frozen", xSplit: 0, ySplit: 7, showGridLines: true }]
      });

      // Company Banner
      logSheet.mergeCells("A1:T1");
      const lTitle1 = logSheet.getCell("A1");
      lTitle1.value = "PLANT IT DOWNTIME MANAGEMENT SYSTEM";
      lTitle1.font = { name: "Segoe UI", size: 16, bold: true, color: { argb: "FFFFFFFF" } };
      lTitle1.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF0A0F1D" } };
      lTitle1.alignment = { horizontal: "center", vertical: "middle" };
      logSheet.getRow(1).height = 34;

      logSheet.mergeCells("A2:T2");
      const lTitle2 = logSheet.getCell("A2");
      lTitle2.value = "OFFICIAL INCIDENT AUDIT & EQUIPMENT DOWNTIME RECOVERY RECORD";
      lTitle2.font = { name: "Segoe UI", size: 10, bold: true, color: { argb: "FFE2E8F0" } };
      lTitle2.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF1E293B" } };
      lTitle2.alignment = { horizontal: "center", vertical: "middle" };
      logSheet.getRow(2).height = 20;

      // Telemetry Ribbon
      logSheet.mergeCells("A3:T3");
      const ribbon = logSheet.getCell("A3");
      ribbon.value = `SCOPE: ${periodLabel} | GENERATED: ${todayStr} | CLASSIFICATION: CONFIDENTIAL`;
      ribbon.font = { name: "Segoe UI", size: 9, bold: true, italic: true, color: { argb: "FFFFFFFF" } };
      ribbon.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFE60012" } };
      ribbon.alignment = { horizontal: "center", vertical: "middle" };
      logSheet.getRow(3).height = 20;

      // KPI Telemetry Cards (Row 4-5)
      logSheet.mergeCells("A4:D5");
      const kpi1 = logSheet.getCell("A4");
      kpi1.value = `TOTAL INCIDENTS
${targetRecords.length} Events`;
      kpi1.font = { name: "Segoe UI", size: 10, bold: true, color: { argb: "FF0F172A" } };
      kpi1.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFF1F5F9" } };
      kpi1.alignment = { horizontal: "center", vertical: "middle", wrapText: true };

      logSheet.mergeCells("E4:H5");
      const kpi2 = logSheet.getCell("E4");
      kpi2.value = `CUMULATIVE DOWNTIME
${totalDtHours} Hours (${totalDtMins} mins)`;
      kpi2.font = { name: "Segoe UI", size: 10, bold: true, color: { argb: "FFB91C1C" } };
      kpi2.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFFEE2E2" } };
      kpi2.alignment = { horizontal: "center", vertical: "middle", wrapText: true };

      logSheet.mergeCells("I4:M5");
      const kpi3 = logSheet.getCell("I4");
      kpi3.value = `RESOLUTION STATUS
${completedCount} Completed | ${openCount} Open`;
      kpi3.font = { name: "Segoe UI", size: 10, bold: true, color: { argb: "FF047857" } };
      kpi3.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFECFDF5" } };
      kpi3.alignment = { horizontal: "center", vertical: "middle", wrapText: true };

      logSheet.mergeCells("N4:T5");
      const kpi4 = logSheet.getCell("N4");
      kpi4.value = isAllMonths ? `UPTIME SHEETS ATTACHED
Total Months Summary + All Monthly Sheets` : `UPTIME SHEET ATTACHED
Uptime Matrix (1440 Mins & %)`;
      kpi4.font = { name: "Segoe UI", size: 10, bold: true, color: { argb: "FF1D4ED8" } };
      kpi4.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFEFF6FF" } };
      kpi4.alignment = { horizontal: "center", vertical: "middle", wrapText: true };

      logSheet.getRow(6).height = 8; // Spacer

      // Incident Log Headers (Row 7)
      const headers = [
        "S.No",
        "Incident ID",
        "Issue Date",
        "Nature",
        "Area / Plant",
        "Process",
        "Machine Code",
        "Critical (Yes/No)",
        "Downtime Min",
        "No of Machines Affected",
        "Total Downtime Min",
        "Total Downtime (Hours)",
        "Category",
        "Issue Details",
        "Action Plan Taken",
        "Responsibility",
        "Closed Date",
        "Responsible Person",
        "Status",
        "Remarks"
      ];

      const headerRow = logSheet.addRow(headers);
      headerRow.height = 28;
      headerRow.eachCell((cell) => {
        cell.font = { name: "Segoe UI", size: 10, bold: true, color: { argb: "FFFFFFFF" } };
        cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF0F172A" } };
        cell.alignment = { horizontal: "center", vertical: "middle" };
        cell.border = {
          top: { style: "thin", color: { argb: "FF334155" } },
          bottom: { style: "medium", color: { argb: "FFE60012" } },
          left: { style: "thin", color: { argb: "FF334155" } },
          right: { style: "thin", color: { argb: "FF334155" } }
        };
      });

      // Data Rows
      targetRecords.forEach((rec, idx) => {
        const dtMin = parseInt(rec.downtimeMinutes, 10) || 0;
        const aff = parseInt(rec.affectedMachines, 10) || 1;
        const totMins = parseInt(rec.totalDowntimeMinutes, 10) || (dtMin * aff);
        const totHours = parseFloat((totMins / 60).toFixed(2));
        const rowData = [
          idx + 1,
          rec.id,
          rec.issueDate,
          rec.nature,
          rec.area,
          rec.process || "",
          rec.machineNo,
          rec.isCritical || "No",
          dtMin,
          aff,
          totMins,
          totHours,
          rec.category,
          rec.issueDetails,
          rec.actionPlan || "",
          rec.responsibility,
          rec.closedDate || "",
          rec.solvedBy,
          rec.status,
          rec.remarks || ""
        ];

        const row = logSheet.addRow(rowData);
        row.height = 22;
        const isEven = idx % 2 === 0;

        row.eachCell((cell, colNumber) => {
          cell.font = { name: "Segoe UI", size: 9.5, color: { argb: "FF1E293B" } };
          cell.fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: isEven ? "FFFFFFFF" : "FFF8FAFC" }
          };
          cell.border = {
            top: { style: "thin", color: { argb: "FFE2E8F0" } },
            bottom: { style: "thin", color: { argb: "FFE2E8F0" } },
            left: { style: "thin", color: { argb: "FFE2E8F0" } },
            right: { style: "thin", color: { argb: "FFE2E8F0" } }
          };

          if ([1, 2, 3, 4, 7, 8, 10, 16, 17, 19].includes(colNumber)) {
            cell.alignment = { horizontal: "center", vertical: "middle" };
          } else if ([9, 11, 12].includes(colNumber)) {
            cell.alignment = { horizontal: "right", vertical: "middle" };
          } else {
            cell.alignment = { horizontal: "left", vertical: "middle" };
          }

          if (colNumber === 1) cell.font = { name: "Consolas", size: 9, color: { argb: "FF64748B" } };
          if (colNumber === 2) {
            cell.font = { name: "Consolas", size: 9.5, bold: true, color: { argb: "FF0F172A" } };
            cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: isEven ? "FFF8FAFC" : "FFF1F5F9" } };
          }
          if (colNumber === 3) cell.font = { name: "Segoe UI", size: 9, bold: true, color: { argb: "FF334155" } };
          if (colNumber === 4) {
            if (rec.nature === "MES") {
              cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFFFE4E6" } };
              cell.font = { name: "Segoe UI", size: 9.5, bold: true, color: { argb: "FFBE123C" } };
            } else {
              cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFE0F2FE" } };
              cell.font = { name: "Segoe UI", size: 9.5, bold: true, color: { argb: "FF0369A1" } };
            }
          }
          if (colNumber === 7) cell.font = { name: "Consolas", size: 9.5, bold: true, color: { argb: "FF0F172A" } };
          if (colNumber === 8) {
            const isCrit = (rec.isCritical === "Yes");
            cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: isCrit ? "FFFEE2E2" : "FFF1F5F9" } };
            cell.font = { name: "Segoe UI", size: 9.5, bold: isCrit, color: { argb: isCrit ? "FF991B1B" : "FF64748B" } };
          }
          if (colNumber === 9) {
            cell.font = { name: "Consolas", size: 9.5, bold: true, color: { argb: "FFB91C1C" } };
          }
          if (colNumber === 10) {
            cell.font = { name: "Consolas", size: 9.5, bold: true, color: { argb: "FFB45309" } };
          }
          if (colNumber === 11 || colNumber === 12) {
            cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: isEven ? "FFFFF1F2" : "FFFFE4E6" } };
            cell.font = { name: "Consolas", size: 10, bold: true, color: { argb: "FFE60012" } };
            if (colNumber === 12) cell.numFmt = "0.00";
          }
          if (colNumber === 13) {
            const catMap = {
              "NSNL": { bg: "FFFEE2E2", color: "FF991B1B" },
              "IPC": { bg: "FFF1F5F9", color: "FF0F172A" },
              "Printer": { bg: "FFEFF6FF", color: "FF1D4ED8" },
              "Scanner": { bg: "FFFEF3C7", color: "FF92400E" },
              "Infra": { bg: "FFECFDF5", color: "FF047857" },
              "MES": { bg: "FFF3E8FF", color: "FF6B21A8" }
            };
            const catStyle = catMap[rec.category] || { bg: "FFF8FAFC", color: "FF334155" };
            cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: catStyle.bg } };
            cell.font = { name: "Segoe UI", size: 9.5, bold: true, color: { argb: catStyle.color } };
          }
          if (colNumber === 19) {
            if (rec.status === "Completed") {
              cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFD1FAE5" } };
              cell.font = { name: "Segoe UI", size: 9.5, bold: true, color: { argb: "FF065F46" } };
            } else {
              cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFFEE2E2" } };
              cell.font = { name: "Segoe UI", size: 9.5, bold: true, color: { argb: "FF991B1B" } };
            }
          }
        });
      });

      // Total Cumulative Summary Row
      const lastDataRow = 7 + targetRecords.length;
      const totalRowIndex = lastDataRow + 1;
      const totalRow = logSheet.getRow(totalRowIndex);
      totalRow.height = 26;

      logSheet.mergeCells(`A${totalRowIndex}:H${totalRowIndex}`);
      const totalLabelCell = logSheet.getCell(`A${totalRowIndex}`);
      totalLabelCell.value = "TOTAL CUMULATIVE DOWNTIME SUMMARY";
      totalLabelCell.font = { name: "Segoe UI", size: 10, bold: true, color: { argb: "FFFFFFFF" } };
      totalLabelCell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF0F172A" } };
      totalLabelCell.alignment = { horizontal: "right", vertical: "middle" };

      const dtMinTotalCell = logSheet.getCell(`I${totalRowIndex}`);
      dtMinTotalCell.value = "";
      dtMinTotalCell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF0F172A" } };

      const totalAffCell = logSheet.getCell(`J${totalRowIndex}`);
      totalAffCell.value = { formula: `SUM(J8:J${lastDataRow})`, result: totalAffectedSum };
      totalAffCell.font = { name: "Consolas", size: 11, bold: true, color: { argb: "FFFFFFFF" } };
      totalAffCell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFB45309" } };
      totalAffCell.alignment = { horizontal: "center", vertical: "middle" };

      const totalMinsCell = logSheet.getCell(`K${totalRowIndex}`);
      totalMinsCell.value = { formula: `SUM(K8:K${lastDataRow})`, result: totalDtMins };
      totalMinsCell.font = { name: "Consolas", size: 11, bold: true, color: { argb: "FFFFFFFF" } };
      totalMinsCell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFE60012" } };
      totalMinsCell.alignment = { horizontal: "right", vertical: "middle" };

      const totalHoursCell = logSheet.getCell(`L${totalRowIndex}`);
      totalHoursCell.value = { formula: `SUM(L8:L${lastDataRow})`, result: totalDtHours };
      totalHoursCell.font = { name: "Consolas", size: 11, bold: true, color: { argb: "FFFFFFFF" } };
      totalHoursCell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFE60012" } };
      totalHoursCell.alignment = { horizontal: "right", vertical: "middle" };
      totalHoursCell.numFmt = "0.00";

      logSheet.mergeCells(`M${totalRowIndex}:T${totalRowIndex}`);
      const totalSpacerCell = logSheet.getCell(`M${totalRowIndex}`);
      totalSpacerCell.value = `Grand Total: ${targetRecords.length} Incidents Recorded`;
      totalSpacerCell.font = { name: "Segoe UI", size: 9.5, italic: true, color: { argb: "FFCBD5E1" } };
      totalSpacerCell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF0F172A" } };
      totalSpacerCell.alignment = { horizontal: "left", vertical: "middle" };

      logSheet.columns = [
        { width: 7 },   // S.No
        { width: 20 },  // Incident ID
        { width: 13 },  // Issue Date
        { width: 12 },  // Nature
        { width: 16 },  // Area / Plant
        { width: 18 },  // Process
        { width: 16 },  // Machine Code
        { width: 14 },  // Critical
        { width: 15 },  // Downtime Min
        { width: 16 },  // No of Machines Affected
        { width: 18 },  // Total Downtime Min
        { width: 18 },  // Total Downtime (Hours)
        { width: 22 },  // Category
        { width: 36 },  // Issue Details
        { width: 36 },  // Action Plan Taken
        { width: 16 },  // Responsibility
        { width: 14 },  // Closed Date
        { width: 20 },  // Responsible Person
        { width: 15 },  // Status
        { width: 32 }   // Remarks
      ];

      logSheet.autoFilter = {
        from: { row: 7, column: 1 },
        to: { row: lastDataRow, column: 20 }
      };

      // =========================================================================
      // UPTIME SHEETS GENERATION ENGINE
      // Case 1: Specific Month Chosen -> Single Month Day-by-Day Sheet
      // Case 2: All Months Chosen -> Master UPTIME_ALL_MONTHS + All Monthly Sheets
      // =========================================================================
      const allMachinesList = (typeof YOKOHAMA_MACHINES !== "undefined" && YOKOHAMA_MACHINES.length > 0) ? YOKOHAMA_MACHINES : [];
      const monthShortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

      // Helper function to build a 1440 mins Day-by-Day Sheet for a given month
      function createMonthlyDayByDaySheet(wb, y, m, recsForMonth) {
        const mShort = monthShortNames[m - 1] || "May";
        const daysInMonth = new Date(y, m, 0).getDate();
        const sheetTitle = `UPTIME_${mShort.toUpperCase()}_${y}`;
        const uSheet = wb.addWorksheet(sheetTitle, {
          views: [{ state: 'frozen', xSplit: 4, ySplit: 1 }]
        });

        // Map downtime per machine: dtMap[m_code][day] = mins
        const dtMap = {};
        allMachinesList.forEach(m => { dtMap[m.code] = {}; });

        recsForMonth.forEach(r => {
          if (!r.issueDate || !r.machineNo) return;
          const [ry, rm, rd] = r.issueDate.split("-").map(Number);
          if (ry === y && rm === m) {
            const dtMins = parseInt(r.downtimeMinutes, 10) || 0;
            if (dtMins <= 0) return;

            allMachinesList.forEach(mach => {
              if (isMachineAffectedByRecord(mach, r)) {
                dtMap[mach.code][rd] = (dtMap[mach.code][rd] || 0) + dtMins;
              }
            });
          }
        });

        const uHeaders = [
          "Area",
          "Process",
          "Machine",
          "Machine details",
          "Cum.Downtime",
          "M/C availability"
        ];
        for (let d = 1; d <= daysInMonth; d++) uHeaders.push(`${String(d).padStart(2, '0')}-${mShort}`);
        uHeaders.push("", ""); // Spacers
        for (let d = 1; d <= daysInMonth; d++) uHeaders.push(`${String(d).padStart(2, '0')}-${mShort} %`);

        const hRow = uSheet.addRow(uHeaders);
        hRow.height = 28;
        const pctStartCol = 7 + daysInMonth + 2;

        hRow.eachCell({ includeEmpty: true }, (cell, colNumber) => {
          cell.font = { name: "Segoe UI", size: 10, bold: true, color: { argb: "FFFFFFFF" } };
          cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF0F172A" } };
          cell.alignment = { horizontal: colNumber <= 4 ? "left" : "center", vertical: "middle" };
          cell.border = {
            top: { style: "medium", color: { argb: "FF334155" } },
            bottom: { style: "medium", color: { argb: "FFE60012" } },
            left: { style: "thin", color: { argb: "FF334155" } },
            right: { style: "thin", color: { argb: "FF334155" } }
          };
          if (colNumber >= pctStartCol && colNumber < pctStartCol + daysInMonth) {
            cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF1E1B4B" } };
          }
        });

        const todayDate = new Date();
        const currY = todayDate.getFullYear();
        const currM = todayDate.getMonth() + 1;
        const currD = todayDate.getDate();

        // Calculate elapsed days for the month (prevents pre-filling future unelapsed days with 1440)
        let elapsedDays = daysInMonth;
        if (y > currY || (y === currY && m > currM)) {
          elapsedDays = 0;
        } else if (y === currY && m === currM) {
          let maxD = currD;
          recsForMonth.forEach(r => {
            if (r.issueDate) {
              const [ry, rm, rd] = r.issueDate.split("-").map(Number);
              if (ry === y && rm === m && rd > maxD) maxD = rd;
            }
          });
          elapsedDays = Math.min(daysInMonth, maxD);
        }

        allMachinesList.forEach((mach, mIdx) => {
          const rowData = [
            mach.area || "",
            mach.process || "",
            mach.code,
            mach.name || mach.code
          ];
          const dayMins = [];
          let machineCumDt = 0;

          for (let d = 1; d <= daysInMonth; d++) {
            if (d > elapsedDays) {
              dayMins.push(null); // Future day not yet arrived
            } else {
              const dt = (dtMap[mach.code] && dtMap[mach.code][d]) ? dtMap[mach.code][d] : 0;
              machineCumDt += dt;
              dayMins.push(Math.max(0, 1440 - dt));
            }
          }

          rowData.push(machineCumDt);
          const validUptimeDays = dayMins.filter(v => v !== null);
          const totalUptimeMins = validUptimeDays.reduce((a, b) => a + b, 0);
          const avgMins = validUptimeDays.length > 0 ? Math.round(totalUptimeMins / validUptimeDays.length) : "-";
          rowData.push(avgMins);

          for (let d = 1; d <= daysInMonth; d++) {
            const v = dayMins[d - 1];
            rowData.push(v !== null ? v : "-");
          }
          rowData.push("", "");
          for (let d = 1; d <= daysInMonth; d++) {
            const v = dayMins[d - 1];
            if (v !== null) {
              const pctVal = Math.round((v / 1440) * 100);
              rowData.push(pctVal === 100 ? "100" : (pctVal + "%"));
            } else {
              rowData.push("-");
            }
          }

          const dRow = uSheet.addRow(rowData);
          dRow.height = 20;
          const isEven = (mIdx % 2 === 0);
          const defaultBg = isEven ? "FFFFFFFF" : "FFF8FAFC";

          dRow.eachCell({ includeEmpty: true }, (cell, colNumber) => {
            cell.font = { name: "Segoe UI", size: 9, color: { argb: "FF1E293B" } };
            cell.alignment = { horizontal: colNumber <= 4 ? "left" : "center", vertical: "middle" };
            cell.border = {
              top: { style: "thin", color: { argb: "FFE2E8F0" } },
              bottom: { style: "thin", color: { argb: "FFE2E8F0" } },
              left: { style: "thin", color: { argb: "FFE2E8F0" } },
              right: { style: "thin", color: { argb: "FFE2E8F0" } }
            };
            cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: defaultBg } };

            if (colNumber === 3) {
              cell.font = { name: "Consolas", size: 9.5, bold: true, color: { argb: "FF0F172A" } };
            }
            if (colNumber === 5 && machineCumDt > 0) {
              cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFFEE2E2" } };
              cell.font = { name: "Consolas", size: 9.5, bold: true, color: { argb: "FF991B1B" } };
            }
            if (colNumber === 6) {
              if (avgMins < 1440) {
                cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFFEF3C7" } };
                cell.font = { name: "Consolas", size: 9.5, bold: true, color: { argb: "FF92400E" } };
              } else {
                cell.font = { name: "Consolas", size: 9.5, bold: true, color: { argb: "FF065F46" } };
              }
            }
            if (colNumber >= 7 && colNumber < 7 + daysInMonth) {
              const mins = dayMins[colNumber - 7];
              if (mins === null) {
                cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFF8FAFC" } };
                cell.font = { name: "Consolas", size: 9, color: { argb: "FF94A3B8" } };
              } else if (mins < 1440) {
                cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFFEE2E2" } };
                cell.font = { name: "Consolas", size: 9, bold: true, color: { argb: "FFDC2626" } };
              }
            }
            if (colNumber >= pctStartCol && colNumber < pctStartCol + daysInMonth) {
              const mins = dayMins[colNumber - pctStartCol];
              if (mins === null) {
                cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFF8FAFC" } };
                cell.font = { name: "Segoe UI", size: 8.5, color: { argb: "FF94A3B8" } };
              } else if (mins < 1440) {
                cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFFEE2E2" } };
                cell.font = { name: "Segoe UI", size: 8.5, bold: true, color: { argb: "FFDC2626" } };
              } else {
                cell.font = { name: "Segoe UI", size: 8.5, color: { argb: "FF64748B" } };
              }
            }
          });
        });

        const colWidths = [{ width: 14 }, { width: 18 }, { width: 14 }, { width: 26 }, { width: 14 }, { width: 15 }];
        for (let d = 1; d <= daysInMonth; d++) colWidths.push({ width: 9 });
        colWidths.push({ width: 3 }, { width: 3 });
        for (let d = 1; d <= daysInMonth; d++) colWidths.push({ width: 9 });
        uSheet.columns = colWidths;
        uSheet.autoFilter = { from: { row: 1, column: 1 }, to: { row: 1 + allMachinesList.length, column: 6 } };
      }

      if (!isAllMonths && selectedMonth) {
        // --- CASE 1: SPECIFIC MONTH EXPORT ---
        const [y, m] = selectedMonth.split("-").map(Number);
        createMonthlyDayByDaySheet(workbook, y, m, targetRecords);
      } else {
        // --- CASE 2: ALL MONTHS EXPORT ---
        // Collect all active months from records
        const activeMonthSet = new Set();
        downtimeRecords.forEach(r => {
          if (r.issueDate && r.issueDate.length >= 7) activeMonthSet.add(r.issueDate.substring(0, 7));
        });
        let activeMonths = Array.from(activeMonthSet).sort();
        if (activeMonths.length === 0) activeMonths = ["2026-01", "2026-02", "2026-03", "2026-04", "2026-05", "2026-06", "2026-07"];

        // 1. Build Master Sheet: UPTIME_ALL_MONTHS (Month-by-month totals & %)
        const allMonthsSheet = workbook.addWorksheet("UPTIME_ALL_MONTHS", {
          views: [{ state: 'frozen', xSplit: 4, ySplit: 1 }]
        });

        const masterHeaders = [
          "Area",
          "Process",
          "Machine",
          "Machine details",
          "Total Cum.Downtime",
          "Overall Availability"
        ];
        activeMonths.forEach(mStr => {
          const [my, mm] = mStr.split("-").map(Number);
          const sName = monthShortNames[mm - 1] || "M";
          masterHeaders.push(`${sName}-${my} (Mins)`);
        });
        masterHeaders.push("", ""); // Spacers
        activeMonths.forEach(mStr => {
          const [my, mm] = mStr.split("-").map(Number);
          const sName = monthShortNames[mm - 1] || "M";
          masterHeaders.push(`${sName}-${my} %`);
        });

        const mHeaderRow = allMonthsSheet.addRow(masterHeaders);
        mHeaderRow.height = 28;
        const mPctStartCol = 7 + activeMonths.length + 2;

        mHeaderRow.eachCell({ includeEmpty: true }, (cell, colNumber) => {
          cell.font = { name: "Segoe UI", size: 10, bold: true, color: { argb: "FFFFFFFF" } };
          cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF0F172A" } };
          cell.alignment = { horizontal: colNumber <= 4 ? "left" : "center", vertical: "middle" };
          cell.border = {
            top: { style: "medium", color: { argb: "FF334155" } },
            bottom: { style: "medium", color: { argb: "FFE60012" } },
            left: { style: "thin", color: { argb: "FF334155" } },
            right: { style: "thin", color: { argb: "FF334155" } }
          };
          if (colNumber >= mPctStartCol && colNumber < mPctStartCol + activeMonths.length) {
            cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF1E1B4B" } };
          }
        });

        // Precompute monthly downtime for all machines: machMonthDt[m_code][m_str] = mins
        const machMonthDt = {};
        allMachinesList.forEach(m => { machMonthDt[m.code] = {}; });

        downtimeRecords.forEach(r => {
          if (!r.issueDate || !r.machineNo) return;
          const mStr = r.issueDate.substring(0, 7);
          const dtMins = parseInt(r.downtimeMinutes, 10) || 0;
          if (dtMins <= 0) return;

          allMachinesList.forEach(mach => {
            if (isMachineAffectedByRecord(mach, r)) {
              machMonthDt[mach.code][mStr] = (machMonthDt[mach.code][mStr] || 0) + dtMins;
            }
          });
        });

        allMachinesList.forEach((mach, mIdx) => {
          let machTotalDt = 0;
          let totalPossibleMins = 0;
          let totalUptimeMins = 0;
          const monthUptimes = [];

          const todayDate = new Date();
          const currY = todayDate.getFullYear();
          const currM = todayDate.getMonth() + 1;
          const currD = todayDate.getDate();

          activeMonths.forEach(mStr => {
            const [my, mm] = mStr.split("-").map(Number);
            const daysInM = new Date(my, mm, 0).getDate();
            let elapsedInM = daysInM;
            if (my > currY || (my === currY && mm > currM)) {
              elapsedInM = 0;
            } else if (my === currY && mm === currM) {
              let maxD = currD;
              downtimeRecords.forEach(r => {
                if (r.issueDate) {
                  const [ry, rm, rd] = r.issueDate.split("-").map(Number);
                  if (ry === my && rm === mm && rd > maxD) maxD = rd;
                }
              });
              elapsedInM = Math.min(daysInM, maxD);
            }

            if (elapsedInM === 0) {
              monthUptimes.push({ up: "-", possible: 0, dt: 0, pctStr: "-" });
            } else {
              const possible = elapsedInM * 1440;
              totalPossibleMins += possible;
              const dt = (machMonthDt[mach.code] && machMonthDt[mach.code][mStr]) ? machMonthDt[mach.code][mStr] : 0;
              machTotalDt += dt;
              const up = Math.max(0, possible - dt);
              totalUptimeMins += up;
              const pct = Math.round((up / possible) * 100);
              monthUptimes.push({ up, possible, dt, pctStr: pct === 100 ? "100" : (pct + "%") });
            }
          });

          const overallAvail = totalPossibleMins > 0 ? ((totalUptimeMins / totalPossibleMins) * 100).toFixed(2) + "%" : "-";
          const rowData = [
            mach.area || "",
            mach.process || "",
            mach.code,
            mach.name || mach.code,
            machTotalDt,
            overallAvail
          ];

          monthUptimes.forEach(mu => rowData.push(mu.up));
          rowData.push("", "");
          monthUptimes.forEach(mu => rowData.push(mu.pctStr));

          const dRow = allMonthsSheet.addRow(rowData);
          dRow.height = 20;
          const isEven = (mIdx % 2 === 0);
          const defaultBg = isEven ? "FFFFFFFF" : "FFF8FAFC";

          dRow.eachCell({ includeEmpty: true }, (cell, colNumber) => {
            cell.font = { name: "Segoe UI", size: 9, color: { argb: "FF1E293B" } };
            cell.alignment = { horizontal: colNumber <= 4 ? "left" : "center", vertical: "middle" };
            cell.border = {
              top: { style: "thin", color: { argb: "FFE2E8F0" } },
              bottom: { style: "thin", color: { argb: "FFE2E8F0" } },
              left: { style: "thin", color: { argb: "FFE2E8F0" } },
              right: { style: "thin", color: { argb: "FFE2E8F0" } }
            };
            cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: defaultBg } };

            if (colNumber === 3) {
              cell.font = { name: "Consolas", size: 9.5, bold: true, color: { argb: "FF0F172A" } };
            }
            if (colNumber === 5 && machTotalDt > 0) {
              cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFFEE2E2" } };
              cell.font = { name: "Consolas", size: 9.5, bold: true, color: { argb: "FF991B1B" } };
            }
            if (colNumber === 6) {
              if (machTotalDt > 0) {
                cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFFEF3C7" } };
                cell.font = { name: "Consolas", size: 9.5, bold: true, color: { argb: "FF92400E" } };
              } else {
                cell.font = { name: "Consolas", size: 9.5, bold: true, color: { argb: "FF065F46" } };
              }
            }
            if (colNumber >= 7 && colNumber < 7 + activeMonths.length) {
              const dt = monthUptimes[colNumber - 7].dt;
              if (dt > 0) {
                cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFFEE2E2" } };
                cell.font = { name: "Consolas", size: 9, bold: true, color: { argb: "FFDC2626" } };
              }
            }
            if (colNumber >= mPctStartCol && colNumber < mPctStartCol + activeMonths.length) {
              const dt = monthUptimes[colNumber - mPctStartCol].dt;
              if (dt > 0) {
                cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFFEE2E2" } };
                cell.font = { name: "Segoe UI", size: 8.5, bold: true, color: { argb: "FFDC2626" } };
              } else {
                cell.font = { name: "Segoe UI", size: 8.5, color: { argb: "FF64748B" } };
              }
            }
          });
        });

        const mColWidths = [{ width: 14 }, { width: 18 }, { width: 14 }, { width: 26 }, { width: 15 }, { width: 16 }];
        activeMonths.forEach(() => mColWidths.push({ width: 14 }));
        mColWidths.push({ width: 3 }, { width: 3 });
        activeMonths.forEach(() => mColWidths.push({ width: 12 }));
        allMonthsSheet.columns = mColWidths;
        allMonthsSheet.autoFilter = { from: { row: 1, column: 1 }, to: { row: 1 + allMachinesList.length, column: 6 } };

        // 2. Also build individual day-by-day sheets for each active month!
        activeMonths.forEach(mStr => {
          const [my, mm] = mStr.split("-").map(Number);
          createMonthlyDayByDaySheet(workbook, my, mm, downtimeRecords);
        });
      }

      const buffer = await workbook.xlsx.writeBuffer();
      const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
      const filename = `Plant_IT_Downtime_${fileSuffix}_${getLocalDateString()}.xlsx`;
      saveAs(blob, filename);

      const toastMsg = isAllMonths
        ? `Executive Excel exported! (Sheet 1: PLANT_DASHBOARD, Sheet 2: Incident Logs, plus Monthly Uptime sheets)`
        : `Executive Excel (.xlsx) exported! (Sheet 1: PLANT_DASHBOARD, Sheet 2: Incident Logs, Sheet 3: Uptime Matrix for ${periodLabel})`;
      showToast(toastMsg, "success");
      return;
    }

    exportToExcelSheetJSFallback(targetRecords, fileSuffix, customOptions);

  } catch (err) {
    console.error("ExcelJS Export Error, falling back to SheetJS:", err);
    exportToExcelSheetJSFallback(targetRecords, fileSuffix, customOptions);
  }
};

function exportToExcelSheetJSFallback(records = null, fileSuffix = "Records", customOptions = null) {
  const recs = records || downtimeRecords;
  const workbook = XLSX.utils.book_new();
  const allMachinesList = (typeof YOKOHAMA_MACHINES !== "undefined" && YOKOHAMA_MACHINES.length > 0) ? YOKOHAMA_MACHINES : [];
  const monthShortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  // =========================================================================
  // Sheet 1: PLANT_DASHBOARD (Executive KPI, Runtime & Available Time)
  // =========================================================================
  const exp = (typeof resolveExportRecords === "function") ? resolveExportRecords(customOptions) : { periodDays: 31, periodLabel: "All Months", isAllMonths: true };
  const periodDays = exp.periodDays || 31;
  const periodLabel = exp.periodLabel || "All Months";
  const standardAreas = (typeof YOKOHAMA_AREAS !== "undefined" && YOKOHAMA_AREAS.length > 0)
    ? YOKOHAMA_AREAS
    : ["Mixing", "Extruder", "Building", "Curing", "Final", "Engineering", "Quality", "Warehouse / Raw Materials"];

  const totalOpMins = periodDays * 24 * 60 * standardAreas.length;
  const totalDtMins = recs.reduce((acc, r) => {
    const tot = parseInt(r.totalDowntimeMinutes, 10);
    if (!isNaN(tot) && tot > 0) return acc + tot;
    const dt = parseInt(r.downtimeMinutes, 10) || 0;
    const aff = parseInt(r.affectedMachines, 10) || 1;
    return acc + (dt * aff);
  }, 0);
  const totalUpMins = Math.max(0, totalOpMins - totalDtMins);
  const overallAvailability = totalOpMins > 0 ? Math.min(100, Math.max(0, (totalUpMins / totalOpMins) * 100)) : 100;
  const completedCount = recs.filter(r => r.status === "Completed").length;
  const openCount = recs.filter(r => r.status === "Open").length;
  const closureRateText = recs.length > 0 ? `${((completedCount / recs.length) * 100).toFixed(1)}%` : "N/A";
  const completedRecs = recs.filter(r => r.status === "Completed");
  const mttrVal = completedRecs.length > 0
    ? Math.round(completedRecs.reduce((acc, r) => acc + (parseInt(r.downtimeMinutes, 10) || 0), 0) / completedRecs.length)
    : null;
  const mttrText = mttrVal !== null ? `${mttrVal} min` : "N/A";
  const todayStr = new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });

  const areaSet = new Set();
  standardAreas.forEach(a => areaSet.add(a));
  recs.forEach(r => { if (r.area) areaSet.add(r.area); });
  const activeAreas = Array.from(areaSet);

  const areaRowsAoa = activeAreas.map((area, idx) => {
    const aRecs = recs.filter(r => (r.area && r.area.trim().toLowerCase() === area.toLowerCase()));
    const aDtMins = aRecs.reduce((acc, r) => {
      const tot = parseInt(r.totalDowntimeMinutes, 10);
      if (!isNaN(tot) && tot > 0) return acc + tot;
      const dt = parseInt(r.downtimeMinutes, 10) || 0;
      const aff = parseInt(r.affectedMachines, 10) || 1;
      return acc + (dt * aff);
    }, 0);
    const aOpMins = periodDays * 24 * 60;
    const aUpMins = Math.max(0, aOpMins - aDtMins);
    const aAvailPct = aOpMins > 0 ? Math.min(100, Math.max(0, (aUpMins / aOpMins) * 100)) : 100;
    return [
      idx + 1,
      area,
      parseFloat((aOpMins / 60).toFixed(1)),
      aOpMins,
      parseFloat((aDtMins / 60).toFixed(1)),
      aDtMins,
      parseFloat((aUpMins / 60).toFixed(1)),
      aUpMins,
      `${aAvailPct.toFixed(2)}%`,
      aRecs.length
    ];
  });

  const catLossMap = new Map();
  recs.forEach(r => {
    const rawCat = (r.category && String(r.category).trim()) || (r.nature && String(r.nature).trim()) || "MES";
    let matchKey = null;
    for (const k of catLossMap.keys()) {
      if (k.toLowerCase() === rawCat.toLowerCase()) { matchKey = k; break; }
    }
    if (!matchKey) { matchKey = rawCat; catLossMap.set(matchKey, { mins: 0, count: 0 }); }
    const totMins = parseInt(r.totalDowntimeMinutes, 10);
    const dtMin = parseInt(r.downtimeMinutes, 10) || 0;
    const aff = parseInt(r.affectedMachines, 10) || 1;
    const effectiveMins = (!isNaN(totMins) && totMins > 0) ? totMins : (dtMin * aff);
    const entry = catLossMap.get(matchKey);
    entry.mins += effectiveMins;
    entry.count += 1;
  });

  const sortedLossCats = Array.from(catLossMap.entries())
    .sort((a, b) => b[1].mins - a[1].mins || b[1].count - a[1].count);

  const totalLossMins = sortedLossCats.reduce((acc, c) => acc + c[1].mins, 0);
  const safeTotalLossMins = totalLossMins > 0 ? totalLossMins : 1;

  const catRowsAoa = sortedLossCats.map(([catName, catData], idx) => {
    const sharePct = totalLossMins > 0 ? ((catData.mins / safeTotalLossMins) * 100).toFixed(1) : "0.0";
    return [
      idx + 1,
      catName,
      catData.count,
      catData.mins,
      parseFloat((catData.mins / 60).toFixed(1)),
      `${sharePct}%`
    ];
  });

  // 3. Process Rows AoA
  const procSet = new Set();
  recs.forEach(r => { if (r.process && r.process.trim()) procSet.add(r.process.trim()); });
  if (procSet.size === 0) ["Tire Building", "3 Roll", "Tire Curing", "Biascutter", "Kneader", "Solid Curing", "Rim Fitting", "IT Infrastructure"].forEach(p => procSet.add(p));
  const activeProcesses = Array.from(procSet);

  const procStats = activeProcesses.map(proc => {
    const pRecs = recs.filter(r => (r.process && r.process.trim().toLowerCase() === proc.toLowerCase()));
    const pDtMins = pRecs.reduce((acc, r) => {
      const tot = parseInt(r.totalDowntimeMinutes, 10);
      if (!isNaN(tot) && tot > 0) return acc + tot;
      const dt = parseInt(r.downtimeMinutes, 10) || 0;
      const aff = parseInt(r.affectedMachines, 10) || 1;
      return acc + (dt * aff);
    }, 0);
    const pOpMins = periodDays * 24 * 60;
    const pUpMins = Math.max(0, pOpMins - pDtMins);
    const pAvailPct = pOpMins > 0 ? Math.min(100, Math.max(0, (pUpMins / pOpMins) * 100)) : 100;
    return { proc, count: pRecs.length, dtMins: pDtMins, opMins: pOpMins, upMins: pUpMins, availPct: pAvailPct };
  }).sort((a, b) => b.dtMins - a.dtMins || b.count - a.count);

  const procRowsAoa = procStats.map((p, idx) => [
    idx + 1,
    p.proc,
    parseFloat((p.opMins / 60).toFixed(1)),
    p.opMins,
    parseFloat((p.dtMins / 60).toFixed(1)),
    p.dtMins,
    parseFloat((p.upMins / 60).toFixed(1)),
    p.upMins,
    `${p.availPct.toFixed(2)}%`,
    p.count
  ]);

  // 4. Criticality Rows AoA
  const critRecs = recs.filter(r => String(r.isCritical).trim().toLowerCase() === "yes");
  const stdRecs = recs.filter(r => String(r.isCritical).trim().toLowerCase() !== "yes");
  const calcDt = (arr) => arr.reduce((acc, r) => {
    const tot = parseInt(r.totalDowntimeMinutes, 10);
    if (!isNaN(tot) && tot > 0) return acc + tot;
    const dt = parseInt(r.downtimeMinutes, 10) || 0;
    const aff = parseInt(r.affectedMachines, 10) || 1;
    return acc + (dt * aff);
  }, 0);
  const critDt = calcDt(critRecs);
  const stdDt = calcDt(stdRecs);
  const totalTierDt = Math.max(1, critDt + stdDt);
  const critRowsAoa = [
    [1, "Critical Equipment (Bottleneck)", critRecs.length, critDt, parseFloat((critDt / 60).toFixed(1)), `${((critDt / totalTierDt) * 100).toFixed(1)}%`, "HIGH PRIORITY TIER 1"],
    [2, "Standard Equipment (Secondary)", stdRecs.length, stdDt, parseFloat((stdDt / 60).toFixed(1)), `${((stdDt / totalTierDt) * 100).toFixed(1)}%`, "STANDARD TIER 2"]
  ];

  // 5. Nature & Responsibility AoA
  const mesRecs = recs.filter(r => String(r.nature).trim().toUpperCase() === "MES");
  const infraRecs = recs.filter(r => String(r.nature).trim().toUpperCase() === "INFRA");
  const atcRecs = recs.filter(r => String(r.responsibility).trim().toUpperCase().includes("ATC"));
  const melssRecs = recs.filter(r => String(r.responsibility).trim().toUpperCase().includes("MELSS"));
  const nrRowsAoa = [
    [1, "MES (Manufacturing Execution Systems)", "Domain: Nature", mesRecs.length, calcDt(mesRecs), parseFloat((calcDt(mesRecs) / 60).toFixed(1))],
    [2, "INFRA (IT Infrastructure & Networks)", "Domain: Nature", infraRecs.length, calcDt(infraRecs), parseFloat((calcDt(infraRecs) / 60).toFixed(1))],
    [3, "ATC (Internal Plant IT Operations)", "Support: Responsibility", atcRecs.length, calcDt(atcRecs), parseFloat((calcDt(atcRecs) / 60).toFixed(1))],
    [4, "MELSS (Automation & System Vendor)", "Support: Responsibility", melssRecs.length, calcDt(melssRecs), parseFloat((calcDt(melssRecs) / 60).toFixed(1))]
  ];

  // 6. Monthly Trend AoA
  const ymSet = new Set();
  recs.forEach(r => { if (r.issueDate && r.issueDate.length >= 7) ymSet.add(r.issueDate.substring(0, 7)); });
  const sortedYm = Array.from(ymSet).sort();
  if (sortedYm.length === 0) sortedYm.push("2026-01");
  const monthNamesList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const monthRowsAoa = sortedYm.map((ym, idx) => {
    const [y, m] = ym.split("-").map(Number);
    const days = new Date(y, m, 0).getDate();
    const mOpMins = days * 24 * 60 * standardAreas.length;
    const mRecs = recs.filter(r => r.issueDate && r.issueDate.startsWith(ym));
    const mDtMins = calcDt(mRecs);
    const mUpMins = Math.max(0, mOpMins - mDtMins);
    const mAvailPct = mOpMins > 0 ? Math.min(100, Math.max(0, (mUpMins / mOpMins) * 100)) : 100;
    const mClosed = mRecs.filter(r => r.status === "Completed").length;
    const mClosureRate = mRecs.length > 0 ? `${((mClosed / mRecs.length) * 100).toFixed(1)}%` : "N/A";
    return [
      idx + 1,
      `${monthNamesList[m - 1] || ym} ${y}`,
      days,
      parseFloat((mOpMins / 60).toFixed(1)),
      parseFloat((mDtMins / 60).toFixed(1)),
      mDtMins,
      parseFloat((mUpMins / 60).toFixed(1)),
      `${mAvailPct.toFixed(2)}%`,
      mRecs.length,
      mClosureRate
    ];
  });

  const dashSheetAoa = [
    ["YOKOHAMA TIRE MANUFACTURING - PLANT IT MANAGEMENT"],
    ["EXECUTIVE OPERATIONS DASHBOARD: DOWNTIME LOSS & EQUIPMENT AVAILABILITY"],
    [`SCOPE: ${periodLabel} | GENERATED: ${todayStr} | CLASSIFICATION: CONFIDENTIAL`],
    [],
    ["EXECUTIVE METRICS", "VALUE", "DETAILS / SECONDARY"],
    ["Planned Operating Time", `${(totalOpMins / 60).toFixed(1)} Hours`, `${totalOpMins.toLocaleString()} Minutes`],
    ["Cumulative Downtime Loss", `${(totalDtMins / 60).toFixed(1)} Hours`, `${totalDtMins.toLocaleString()} Minutes`],
    ["Net Available Run Time", `${(totalUpMins / 60).toFixed(1)} Hours`, `${totalUpMins.toLocaleString()} Minutes`],
    ["Overall Plant Availability", `${overallAvailability.toFixed(2)}%`, overallAvailability >= 99 ? "Optimal" : (overallAvailability >= 95 ? "Warning" : "Critical")],
    ["Total Incidents Recorded", recs.length, `${completedCount} Completed / ${openCount} Open`],
    ["Closure / Resolution Rate", closureRateText, `${completedCount} of ${recs.length} resolved`],
    ["Mean Time To Repair (MTTR)", mttrText, "Average downtime per completed incident"],
    [],
    ["1. AREA-WISE OPERATIONAL RUNTIME & AVAILABILITY TELEMETRY"],
    ["S.No", "Area / Section", "Planned Time (Hrs)", "Planned Time (Min)", "Downtime Loss (Hrs)", "Downtime Loss (Min)", "Net Available Run (Hrs)", "Net Available Run (Min)", "Availability %", "Incidents"],
    ...areaRowsAoa,
    [],
    ["2. FAILURE CATEGORY DOWNTIME LOSS BREAKDOWN"],
    ["S.No", "Category", "Incident Events", "Downtime Loss (Min)", "Downtime Loss (Hrs)", "Share of Total Loss (%)"],
    ...catRowsAoa,
    [],
    ["3. PROCESS-WISE OPERATIONAL RUNTIME & AVAILABILITY TELEMETRY"],
    ["S.No", "Process / Operation", "Planned Time (Hrs)", "Planned Time (Min)", "Downtime Loss (Hrs)", "Downtime Loss (Min)", "Net Available Run (Hrs)", "Net Available Run (Min)", "Availability %", "Incidents"],
    ...procRowsAoa,
    [],
    ["4. EQUIPMENT CRITICALITY ANALYSIS: BOTTLENECK VS STANDARD ASSETS"],
    ["S.No", "Criticality Tier", "Total Incidents", "Downtime Loss (Min)", "Downtime Loss (Hrs)", "Share of Total Loss (%)", "Production Impact Tier"],
    ...critRowsAoa,
    [],
    ["5. NATURE & SUPPORT RESPONSIBILITY BREAKDOWN (MES / INFRA & ATC / MELSS)"],
    ["S.No", "Classification / Support Entity", "Domain Group", "Incident Events", "Downtime Loss (Min)", "Downtime Loss (Hrs)"],
    ...nrRowsAoa,
    [],
    ["6. MONTHLY PERFORMANCE & TRAJECTORY TREND SUMMARY"],
    ["S.No", "Month (Period)", "Calendar Days", "Planned Operating (Hrs)", "Downtime Loss (Hrs)", "Downtime Loss (Min)", "Net Available Run (Hrs)", "Availability %", "Total Events", "Closure Rate %"],
    ...monthRowsAoa
  ];

  const wsDash = XLSX.utils.aoa_to_sheet(dashSheetAoa);
  XLSX.utils.book_append_sheet(workbook, wsDash, "PLANT_DASHBOARD");

  // Sheet 2: IT_DOWNTIME_LOG
  const exportData = recs.map((r, idx) => {
    const dtMin = parseInt(r.downtimeMinutes, 10) || 0;
    const aff = parseInt(r.affectedMachines, 10) || 1;
    const totMins = parseInt(r.totalDowntimeMinutes, 10) || (dtMin * aff);
    return {
      "S.No": idx + 1,
      "Incident ID": r.id,
      "Issue Date": r.issueDate,
      "Nature": r.nature,
      "Area / Plant": r.area,
      "Process": r.process || "",
      "Machine Code": r.machineNo,
      "Critical (Yes/No)": r.isCritical || "No",
      "Downtime Min": dtMin,
      "No of Machines Affected": aff,
      "Total Downtime Min": totMins,
      "Total Downtime (Hours)": parseFloat((totMins / 60).toFixed(2)),
      "Category": r.category,
      "Issue Details": r.issueDetails,
      "Action Plan Taken": r.actionPlan || "",
      "Responsibility": r.responsibility,
      "Closed Date": r.closedDate || "",
      "Responsible Person": r.solvedBy,
      "Status": r.status,
      "Remarks": r.remarks || ""
    };
  });

  const worksheet = XLSX.utils.json_to_sheet(exportData);
  XLSX.utils.book_append_sheet(workbook, worksheet, "IT_DOWNTIME_LOG");

  const isSpecificMonth = !!(customOptions && customOptions.month && customOptions.month !== "ALL");
  const selectedMonth = isSpecificMonth ? customOptions.month : null;

  if (selectedMonth) {
    const [y, m] = selectedMonth.split("-").map(Number);
    const mShort = monthShortNames[m - 1] || "May";
    const daysInMonth = new Date(y, m, 0).getDate();

    const dtMap = {};
    allMachinesList.forEach(m => { dtMap[m.code] = {}; });

    recs.forEach(r => {
      if (!r.issueDate || !r.machineNo) return;
      const [ry, rm, rd] = r.issueDate.split("-").map(Number);
      if (ry === y && rm === m) {
        const dtMins = parseInt(r.downtimeMinutes, 10) || 0;
        if (dtMins <= 0) return;

        allMachinesList.forEach(mach => {
          if (isMachineAffectedByRecord(mach, r)) {
            dtMap[mach.code][rd] = (dtMap[mach.code][rd] || 0) + dtMins;
          }
        });
      }
    });

    const uptimeRows = [];
    const headerRow = ["Area", "Process", "Machine", "Machine details", "Cum.Downtime", "M/C availability"];
    for (let day = 1; day <= daysInMonth; day++) headerRow.push(`${String(day).padStart(2, '0')}-${mShort}`);
    headerRow.push("", "");
    for (let day = 1; day <= daysInMonth; day++) headerRow.push(`${String(day).padStart(2, '0')}-${mShort} %`);
    uptimeRows.push(headerRow);

    const todayDate = new Date();
    const currY = todayDate.getFullYear();
    const currM = todayDate.getMonth() + 1;
    const currD = todayDate.getDate();

    let elapsedDays = daysInMonth;
    if (y > currY || (y === currY && m > currM)) {
      elapsedDays = 0;
    } else if (y === currY && m === currM) {
      let maxD = currD;
      recs.forEach(r => {
        if (r.issueDate) {
          const [ry, rm, rd] = r.issueDate.split("-").map(Number);
          if (ry === y && rm === m && rd > maxD) maxD = rd;
        }
      });
      elapsedDays = Math.min(daysInMonth, maxD);
    }

    allMachinesList.forEach(mach => {
      const row = [mach.area || "", mach.process || "", mach.code, mach.name || mach.code];
      let machineCumDt = 0;
      const dayMins = [];
      for (let day = 1; day <= daysInMonth; day++) {
        if (day > elapsedDays) {
          dayMins.push(null);
        } else {
          const dt = (dtMap[mach.code] && dtMap[mach.code][day]) ? dtMap[mach.code][day] : 0;
          machineCumDt += dt;
          dayMins.push(Math.max(0, 1440 - dt));
        }
      }
      row.push(machineCumDt);
      const validUptimes = dayMins.filter(v => v !== null);
      const avgMins = validUptimes.length > 0 ? Math.round(validUptimes.reduce((a, b) => a + b, 0) / validUptimes.length) : "-";
      row.push(avgMins);
      dayMins.forEach(v => row.push(v !== null ? v : "-"));
      row.push("", "");
      dayMins.forEach(v => {
        if (v !== null) {
          const pct = Math.round((v / 1440) * 100);
          row.push(pct === 100 ? "100" : `${pct}%`);
        } else {
          row.push("-");
        }
      });
      uptimeRows.push(row);
    });

    const wsUptime = XLSX.utils.aoa_to_sheet(uptimeRows);
    XLSX.utils.book_append_sheet(workbook, wsUptime, `UPTIME_${mShort.toUpperCase()}_${y}`);
  } else {
    // All months export
    const activeMonthSet = new Set();
    downtimeRecords.forEach(r => {
      if (r.issueDate && r.issueDate.length >= 7) activeMonthSet.add(r.issueDate.substring(0, 7));
    });
    let activeMonths = Array.from(activeMonthSet).sort();
    if (activeMonths.length === 0) activeMonths = ["2026-01", "2026-02", "2026-03", "2026-04", "2026-05", "2026-06", "2026-07"];

    const masterHeaders = ["Area", "Process", "Machine", "Machine details", "Total Cum.Downtime", "Overall Availability"];
    activeMonths.forEach(mStr => {
      const [my, mm] = mStr.split("-").map(Number);
      masterHeaders.push(`${monthShortNames[mm - 1]}-${my} (Mins)`);
    });
    masterHeaders.push("", "");
    activeMonths.forEach(mStr => {
      const [my, mm] = mStr.split("-").map(Number);
      masterHeaders.push(`${monthShortNames[mm - 1]}-${my} %`);
    });

    const summaryRows = [masterHeaders];
    const machMonthDt = {};
    downtimeRecords.forEach(r => {
      if (!r.issueDate || !r.machineNo) return;
      const mStr = r.issueDate.substring(0, 7);
      if (!machMonthDt[r.machineNo]) machMonthDt[r.machineNo] = {};
      machMonthDt[r.machineNo][mStr] = (machMonthDt[r.machineNo][mStr] || 0) + (parseInt(r.downtimeMinutes, 10) || 0);
    });

    const todayDate = new Date();
    const currY = todayDate.getFullYear();
    const currM = todayDate.getMonth() + 1;
    const currD = todayDate.getDate();

    allMachinesList.forEach(mach => {
      let machTotalDt = 0;
      let totalPossibleMins = 0;
      let totalUptimeMins = 0;
      const mUptimes = [];

      activeMonths.forEach(mStr => {
        const [my, mm] = mStr.split("-").map(Number);
        const daysInM = new Date(my, mm, 0).getDate();
        let elapsedInM = daysInM;
        if (my > currY || (my === currY && mm > currM)) {
          elapsedInM = 0;
        } else if (my === currY && mm === currM) {
          let maxD = currD;
          recs.forEach(r => {
            if (r.issueDate) {
              const [ry, rm, rd] = r.issueDate.split("-").map(Number);
              if (ry === my && rm === mm && rd > maxD) maxD = rd;
            }
          });
          elapsedInM = Math.min(daysInM, maxD);
        }

        if (elapsedInM === 0) {
          mUptimes.push({ up: "-", possible: 0, pctStr: "-" });
        } else {
          const possible = elapsedInM * 1440;
          totalPossibleMins += possible;
          const dt = (machMonthDt[mach.code] && machMonthDt[mach.code][mStr]) ? machMonthDt[mach.code][mStr] : 0;
          machTotalDt += dt;
          const up = Math.max(0, possible - dt);
          totalUptimeMins += up;
          const pct = Math.round((up / possible) * 100);
          mUptimes.push({ up, possible, pctStr: pct === 100 ? "100" : `${pct}%` });
        }
      });

      const overallAvail = totalPossibleMins > 0 ? ((totalUptimeMins / totalPossibleMins) * 100).toFixed(2) + "%" : "-";
      const row = [mach.area || "", mach.process || "", mach.code, mach.name || mach.code, machTotalDt, overallAvail];
      mUptimes.forEach(mu => row.push(mu.up));
      row.push("", "");
      mUptimes.forEach(mu => row.push(mu.pctStr));
      summaryRows.push(row);
    });

    const wsSummary = XLSX.utils.aoa_to_sheet(summaryRows);
    XLSX.utils.book_append_sheet(workbook, wsSummary, "UPTIME_ALL_MONTHS");

    // Also append each month's day-by-day sheet
    activeMonths.forEach(mStr => {
      const [y, m] = mStr.split("-").map(Number);
      const mShort = monthShortNames[m - 1] || "M";
      const daysInMonth = new Date(y, m, 0).getDate();

      const dtMap = {};
      allMachinesList.forEach(m => { dtMap[m.code] = {}; });

      downtimeRecords.forEach(r => {
        if (!r.issueDate || !r.machineNo) return;
        const [ry, rm, rd] = r.issueDate.split("-").map(Number);
        if (ry === y && rm === m) {
          const dtMins = parseInt(r.downtimeMinutes, 10) || 0;
          if (dtMins <= 0) return;

          allMachinesList.forEach(mach => {
            if (isMachineAffectedByRecord(mach, r)) {
              dtMap[mach.code][rd] = (dtMap[mach.code][rd] || 0) + dtMins;
            }
          });
        }
      });

      const mRows = [];
      const mHeader = ["Area", "Process", "Machine", "Machine details", "Cum.Downtime", "M/C availability"];
      for (let day = 1; day <= daysInMonth; day++) mHeader.push(`${String(day).padStart(2, '0')}-${mShort}`);
      mHeader.push("", "");
      for (let day = 1; day <= daysInMonth; day++) mHeader.push(`${String(day).padStart(2, '0')}-${mShort} %`);
      mRows.push(mHeader);

      let elapsedDays = daysInMonth;
      if (y > currY || (y === currY && m > currM)) {
        elapsedDays = 0;
      } else if (y === currY && m === currM) {
        let maxD = currD;
        recs.forEach(r => {
          if (r.issueDate) {
            const [ry, rm, rd] = r.issueDate.split("-").map(Number);
            if (ry === y && rm === m && rd > maxD) maxD = rd;
          }
        });
        elapsedDays = Math.min(daysInMonth, maxD);
      }

      allMachinesList.forEach(mach => {
        const r = [mach.area || "", mach.process || "", mach.code, mach.name || mach.code];
        let machineCumDt = 0;
        const dayMins = [];
        for (let day = 1; day <= daysInMonth; day++) {
          if (day > elapsedDays) {
            dayMins.push(null);
          } else {
            const dt = (dtMap[mach.code] && dtMap[mach.code][day]) ? dtMap[mach.code][day] : 0;
            machineCumDt += dt;
            dayMins.push(Math.max(0, 1440 - dt));
          }
        }
        r.push(machineCumDt);
        const validDays = dayMins.filter(v => v !== null);
        const totalUp = validDays.reduce((a, b) => a + b, 0);
        const avgMins = validDays.length > 0 ? Math.round(totalUp / validDays.length) : "-";
        r.push(avgMins);
        dayMins.forEach(v => r.push(v !== null ? v : "-"));
        r.push("", "");
        dayMins.forEach(v => {
          if (v !== null) {
            const pct = Math.round((v / 1440) * 100);
            r.push(pct === 100 ? "100" : `${pct}%`);
          } else {
            r.push("-");
          }
        });
        mRows.push(r);
      });

      const wsM = XLSX.utils.aoa_to_sheet(mRows);
      XLSX.utils.book_append_sheet(workbook, wsM, `UPTIME_${mShort.toUpperCase()}_${y}`);
    });
  }

  const filename = `Plant_IT_Downtime_${fileSuffix}_${getLocalDateString()}.xlsx`;
  XLSX.writeFile(workbook, filename);
  showToast(`Multi-Sheet Excel (.xlsx) downloaded successfully!`, "success");
}

// --- CSV Export (Date/Month Filter Supported) ---
window.exportToCSV = function(customOptions = null) {
  const currentUser = getCurrentUser();
  if (!currentUser || !currentUser.canExport) {
    showToast("Export feature is reserved for Supervisor and Admin roles.", "warning");
    return;
  }

  const exp = resolveExportRecords(customOptions);
  const targetRecords = exp.records;
  const fileSuffix = exp.fileSuffix;
  const periodLabel = exp.periodLabel;

  if (targetRecords.length === 0) {
    showToast(`No downtime records to export for ${periodLabel}.`, "warning");
    return;
  }

  const headers = [
    "Incident ID",
    "Issue Date",
    "Nature",
    "Area",
    "Process",
    "Machine Code",
    "Critical",
    "Downtime Min",
    "No of Machines Affected",
    "Total Downtime Min",
    "Total Downtime (Hours)",
    "Category",
    "Issue Details",
    "Action Plan Taken",
    "Responsibility",
    "Closed Date",
    "Responsible Person",
    "Status",
    "Remarks"
  ];

  const sanitizeCsvField = (val) => {
    if (val === null || val === undefined) return '""';
    let str = String(val);
    // Neutralize spreadsheet formula injection (=, +, -, @, tab, CR)
    if (/^[=\+\-@\t\r]/.test(str)) {
      str = "'" + str;
    }
    return `"${str.replace(/"/g, '""')}"`;
  };

  const rows = targetRecords.map(r => {
    const dtMin = parseInt(r.downtimeMinutes, 10) || 0;
    const aff = parseInt(r.affectedMachines, 10) || 1;
    const totMins = parseInt(r.totalDowntimeMinutes, 10) || (dtMin * aff);
    return [
      sanitizeCsvField(r.id),
      sanitizeCsvField(r.issueDate),
      sanitizeCsvField(r.nature),
      sanitizeCsvField(r.area),
      sanitizeCsvField(r.process || ''),
      sanitizeCsvField(r.machineNo),
      sanitizeCsvField(r.isCritical || 'No'),
      dtMin,
      aff,
      totMins,
      parseFloat((totMins / 60).toFixed(2)),
      sanitizeCsvField(r.category),
      sanitizeCsvField(r.issueDetails || ''),
      sanitizeCsvField(r.actionPlan || ''),
      sanitizeCsvField(r.responsibility),
      sanitizeCsvField(r.closedDate || ''),
      sanitizeCsvField(r.solvedBy),
      sanitizeCsvField(r.status),
      sanitizeCsvField(r.remarks || '')
    ];
  });

  const csvContent = "\uFEFF" + [headers.join(","), ...rows.map(e => e.join(","))].join("\r\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `Plant_IT_Downtime_${fileSuffix}_${getLocalDateString()}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 1000);

  showToast(`CSV export for ${periodLabel} downloaded successfully!`, "success");
};

// --- Toast System ---
function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type === 'success' ? 'toast-success' : type === 'warning' ? 'toast-warning' : 'toast-info'}`;

  let icon = "fa-circle-info";
  if (type === "success") icon = "fa-circle-check text-emerald-400";
  else if (type === "warning") icon = "fa-triangle-exclamation text-amber-400";

  const iconEl = document.createElement("i");
  iconEl.className = `fa-solid ${icon} text-base`;
  const msgEl = document.createElement("span");
  msgEl.className = "flex-1";
  msgEl.textContent = String(message || "");

  toast.appendChild(iconEl);
  toast.appendChild(msgEl);

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(50px)";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
window.showToast = showToast;

// --- Modal Accessibility & Keyboard Handling (WCAG 2.2) ---
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (typeof closeDetailsModal === "function") closeDetailsModal();
    if (typeof closeDateExportModal === "function") closeDateExportModal();
    if (typeof closeImportDowntimeModal === "function") closeImportDowntimeModal();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  ["detailsModal", "dateExportModal", "importDowntimeModal"].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("click", (e) => {
        if (e.target === el) {
          if (id === "detailsModal" && typeof closeDetailsModal === "function") closeDetailsModal();
          else if (id === "dateExportModal" && typeof closeDateExportModal === "function") closeDateExportModal();
          else if (id === "importDowntimeModal" && typeof closeImportDowntimeModal === "function") closeImportDowntimeModal();
        }
      });
    }
  });
});
