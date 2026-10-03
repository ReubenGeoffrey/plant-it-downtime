/**
 * ==========================================================================
 * YOKOHAMA IT DOWNTIME MANAGEMENT & ANALYTICS SYSTEM
 * Enterprise Application Logic, Authentication, Tabs & Rich Excel Export
 * ==========================================================================
 */

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
const INITIAL_MACHINES_BACKUP = [
  {
    "code": "BLD_A01",
    "name": "Tire Building Stage-1",
    "area": "Plant-1",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BLD_A05",
    "name": "Tire Building Stage-1",
    "area": "Plant-1",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BLD_A06",
    "name": "Tire Building Stage-1",
    "area": "Plant-1",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BLD_A07",
    "name": "Tire Building Stage-1",
    "area": "Plant-1",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BLD_A08",
    "name": "Tire Building Stage-1",
    "area": "Plant-1",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BLD_A10",
    "name": "Tire Building Stage-1",
    "area": "Plant-1",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BLD_A11",
    "name": "Tire Building Stage-1",
    "area": "Plant-1",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BLD_F05",
    "name": "Tire Building Stage-1",
    "area": "Plant-1",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BLD_F06",
    "name": "Tire Building Stage-1",
    "area": "Plant-1",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BLD_F08",
    "name": "Tire Building Stage-1",
    "area": "Plant-1",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BLD_F14",
    "name": "Tire Building Stage-1",
    "area": "Plant-1",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BLD_F17",
    "name": "Tire Building Stage-1",
    "area": "Plant-1",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BLD_F18",
    "name": "Tire Building Stage-1",
    "area": "Plant-1",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BLD_B01",
    "name": "Tire Building Stage-1",
    "area": "Plant-2",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BLD_B02",
    "name": "Tire Building Stage-1",
    "area": "Plant-2",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BLD_B03",
    "name": "Tire Building Stage-1",
    "area": "Plant-2",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BLD_B04",
    "name": "Tire Building Stage-1",
    "area": "Plant-2",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BLD_B05",
    "name": "Tire Building Stage-1",
    "area": "Plant-2",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BLD_B06",
    "name": "Tire Building Stage-1",
    "area": "Plant-2",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BLD_B09",
    "name": "Tire Building Stage-1",
    "area": "Plant-2",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BLD_B10",
    "name": "Tire Building Stage-1",
    "area": "Plant-2",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BLD_B11",
    "name": "Tire Building Stage-1",
    "area": "Plant-2",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BLD_B13",
    "name": "Tire Building Stage-1",
    "area": "Plant-2",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BLD_F01",
    "name": "Tire Building Stage-1",
    "area": "Plant-2",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BLD_F02",
    "name": "Tire Building Stage-1",
    "area": "Plant-2",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BLD_F03",
    "name": "Tire Building Stage-1",
    "area": "Plant-2",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BLD_F10",
    "name": "Tire Building Stage-1",
    "area": "Plant-2",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BLD_F11",
    "name": "Tire Building Stage-1",
    "area": "Plant-2",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BLD_F13",
    "name": "Tire Building Stage-1",
    "area": "Plant-2",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BLD_F16",
    "name": "Tire Building Stage-1",
    "area": "Plant-2",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BLD_B07",
    "name": "Tire Building Stage-1",
    "area": "Plant-3",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BLD_C07",
    "name": "Tire Building Stage-1",
    "area": "Plant-3",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BLD_C08",
    "name": "Tire Building Stage-1",
    "area": "Plant-3",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BLD_C09",
    "name": "Tire Building Stage-1",
    "area": "Plant-3",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BLD_C10",
    "name": "Tire Building Stage-1",
    "area": "Plant-3",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BLD_D06",
    "name": "Tire Building Stage-1",
    "area": "Plant-3",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BLD_D07",
    "name": "Tire Building Stage-1",
    "area": "Plant-3",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BLD_D08",
    "name": "Tire Building Stage-1",
    "area": "Plant-3",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BLD_E01",
    "name": "Tire Building Stage-1",
    "area": "Plant-3",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BLD_E02",
    "name": "Tire Building Stage-1",
    "area": "Plant-3",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BLD_E03",
    "name": "Tire Building Stage-1",
    "area": "Plant-3",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BLD_E04",
    "name": "Tire Building Stage-1",
    "area": "Plant-3",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BLD_F04",
    "name": "Tire Building Stage-1",
    "area": "Plant-3",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BLD_F09",
    "name": "Tire Building Stage-1",
    "area": "Plant-3",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BLD_F12",
    "name": "Tire Building Stage-1",
    "area": "Plant-3",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BLD_F15",
    "name": "Tire Building Stage-1",
    "area": "Plant-3",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BLD_G01",
    "name": "Tire Building Stage-1",
    "area": "Plant-3",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BLD_G02",
    "name": "Tire Building Stage-1",
    "area": "Plant-3",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BLD_G03",
    "name": "Tire Building Stage-1",
    "area": "Plant-3",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BLD_G04",
    "name": "Tire Building Stage-1",
    "area": "Plant-3",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BLD_G05",
    "name": "Tire Building Stage-1",
    "area": "Plant-3",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BLD_G06",
    "name": "Tire Building Stage-1",
    "area": "Plant-3",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BLD_G07",
    "name": "Tire Building Stage-1",
    "area": "Plant-3",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BLD_G08",
    "name": "Tire Building Stage-1",
    "area": "Plant-3",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BLD_G09",
    "name": "Tire Building Stage-1",
    "area": "Plant-3",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BLD_H01",
    "name": "Tire Building Stage-1",
    "area": "Plant-3",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BLD_H02",
    "name": "Tire Building Stage-1",
    "area": "Plant-3",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BLD_H03",
    "name": "Tire Building Stage-1",
    "area": "Plant-3",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BST_001",
    "name": "Tire Building Stage-2",
    "area": "Plant-3",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BST_002",
    "name": "Tire Building Stage-2",
    "area": "Plant-2",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "BST_003",
    "name": "Tire Building Stage-2",
    "area": "Plant-1",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "FMC_004",
    "name": "Tire Building Stage-2",
    "area": "Plant-1",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "FMC_003",
    "name": "Tire Building Stage-2",
    "area": "Plant-1",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "FMC_001",
    "name": "Tire Building Stage-2",
    "area": "Plant-2",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "FMC_002",
    "name": "Tire Building Stage-2",
    "area": "Plant-2",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "MAR_001",
    "name": "Tire Building Stage-2",
    "area": "Plant-2",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "MAR_002",
    "name": "Tire Building Stage-2",
    "area": "Plant-2",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "MAR_004",
    "name": "Tire Building Stage-2",
    "area": "Plant-1",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "MAR_005",
    "name": "Tire Building Stage-2",
    "area": "Plant-1",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "YAN_001",
    "name": "Tire Building Stage-2",
    "area": "Plant-3",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "YAN_002",
    "name": "Tire Building Stage-2",
    "area": "Plant-3",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "YAN_003",
    "name": "Tire Building Stage-2",
    "area": "Plant-3",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "FUJ_004",
    "name": "Tire Building Stage-2",
    "area": "Plant-3",
    "process": "Tire Building",
    "critical": "No"
  },
  {
    "code": "STL_001",
    "name": "Steelastic",
    "area": "Plant-1",
    "process": "Steelastic",
    "critical": "No"
  },
  {
    "code": "CAL_01",
    "name": "4 Roll Calander",
    "area": "4 Roll Shed",
    "process": "4 Roll",
    "critical": "No"
  },
  {
    "code": "SQC_01",
    "name": "3 Roll Calander",
    "area": "4 Roll Shed",
    "process": "3 Roll",
    "critical": "No"
  },
  {
    "code": "SQC_02",
    "name": "3 Roll Calander",
    "area": "4 Roll Shed",
    "process": "3 Roll",
    "critical": "No"
  },
  {
    "code": "BED_001",
    "name": "Bead Winding",
    "area": "4 Roll Shed",
    "process": "Bead Building",
    "critical": "No"
  },
  {
    "code": "BED_002",
    "name": "Bead Winding",
    "area": "4 Roll Shed",
    "process": "Bead Building",
    "critical": "No"
  },
  {
    "code": "FLP_001",
    "name": "Fillering & Flipping",
    "area": "4 Roll Shed",
    "process": "Bead Building",
    "critical": "No"
  },
  {
    "code": "FLP_002",
    "name": "Fillering & Flipping",
    "area": "4 Roll Shed",
    "process": "Bead Building",
    "critical": "No"
  },
  {
    "code": "FLP_003",
    "name": "Fillering & Flipping",
    "area": "4 Roll Shed",
    "process": "Bead Building",
    "critical": "No"
  },
  {
    "code": "BAS_001",
    "name": "Biascutter1",
    "area": "Plant-1",
    "process": "Biascutter",
    "critical": "No"
  },
  {
    "code": "BAS_002",
    "name": "Biascutter2",
    "area": "Plant-1",
    "process": "Biascutter",
    "critical": "No"
  },
  {
    "code": "BAS_003",
    "name": "Biascutter3",
    "area": "Plant-1",
    "process": "Biascutter",
    "critical": "No"
  },
  {
    "code": "BAS_004",
    "name": "Biascutter4",
    "area": "Plant-2",
    "process": "Biascutter",
    "critical": "No"
  },
  {
    "code": "BAS_005",
    "name": "Biascutter5",
    "area": "Plant-3",
    "process": "Biascutter",
    "critical": "No"
  },
  {
    "code": "BAS_007",
    "name": "Steel Bias cutter",
    "area": "4 Roll Shed",
    "process": "Biascutter",
    "critical": "No"
  },
  {
    "code": "BAS_008",
    "name": "Auto Bias cutter",
    "area": "4 Roll Shed",
    "process": "Biascutter",
    "critical": "No"
  },
  {
    "code": "BAS_009",
    "name": "Auto Bias cutter",
    "area": "4 Roll Shed",
    "process": "Biascutter",
    "critical": "No"
  },
  {
    "code": "BND_001",
    "name": "Band Building",
    "area": "Plant-2",
    "process": "Band Building",
    "critical": "No"
  },
  {
    "code": "BND_002",
    "name": "Band Building",
    "area": "Plant-2",
    "process": "Band Building",
    "critical": "No"
  },
  {
    "code": "BND_003",
    "name": "Band Building",
    "area": "Plant-2",
    "process": "Band Building",
    "critical": "No"
  },
  {
    "code": "BND_004",
    "name": "Band Building",
    "area": "Plant-2",
    "process": "Band Building",
    "critical": "No"
  },
  {
    "code": "BND_005",
    "name": "Band Building",
    "area": "Plant-2",
    "process": "Band Building",
    "critical": "No"
  },
  {
    "code": "BND_006",
    "name": "Band Building",
    "area": "Plant-3",
    "process": "Band Building",
    "critical": "No"
  },
  {
    "code": "BND_007",
    "name": "Band Building",
    "area": "Plant-3",
    "process": "Band Building",
    "critical": "No"
  },
  {
    "code": "BND_008",
    "name": "Band Building",
    "area": "Plant-3",
    "process": "Band Building",
    "critical": "No"
  },
  {
    "code": "BND_009",
    "name": "Band Building",
    "area": "Plant-3",
    "process": "Band Building",
    "critical": "No"
  },
  {
    "code": "BND_010",
    "name": "Band Building",
    "area": "Plant-3",
    "process": "Band Building",
    "critical": "No"
  },
  {
    "code": "BND_020",
    "name": "Band Building",
    "area": "Plant-1",
    "process": "Band Building",
    "critical": "No"
  },
  {
    "code": "BND_021",
    "name": "Band Building",
    "area": "Plant-1",
    "process": "Band Building",
    "critical": "No"
  },
  {
    "code": "BND_022",
    "name": "Band Building",
    "area": "Plant-4",
    "process": "Band Building",
    "critical": "No"
  },
  {
    "code": "BND_023",
    "name": "Band Building",
    "area": "Plant-4",
    "process": "Band Building",
    "critical": "No"
  },
  {
    "code": "EXT_001",
    "name": "Extruder",
    "area": "Plant-2",
    "process": "Extruder",
    "critical": "No"
  },
  {
    "code": "EXT_003",
    "name": "Extruder",
    "area": "Plant-3",
    "process": "Extruder",
    "critical": "No"
  },
  {
    "code": "EXT_005",
    "name": "Extruder",
    "area": "Plant-2",
    "process": "Extruder",
    "critical": "No"
  },
  {
    "code": "CU_A01",
    "name": "Tire Curing Press",
    "area": "Plant-1",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_A02",
    "name": "Tire Curing Press",
    "area": "Plant-1",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_A03",
    "name": "Tire Curing Press",
    "area": "Plant-1",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_A04",
    "name": "Tire Curing Press",
    "area": "Plant-1",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_A05",
    "name": "Tire Curing Press",
    "area": "Plant-1",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_A06",
    "name": "Tire Curing Press",
    "area": "Plant-1",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_A07",
    "name": "Tire Curing Press",
    "area": "Plant-1",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_A08",
    "name": "Tire Curing Press",
    "area": "Plant-1",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_A09",
    "name": "Tire Curing Press",
    "area": "Plant-1",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_A10",
    "name": "Tire Curing Press",
    "area": "Plant-1",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_A11",
    "name": "Tire Curing Press",
    "area": "Plant-1",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_A12",
    "name": "Tire Curing Press",
    "area": "Plant-1",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_A13",
    "name": "Tire Curing Press",
    "area": "Plant-1",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_B01",
    "name": "Tire Curing Press",
    "area": "Plant-1",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_B02",
    "name": "Tire Curing Press",
    "area": "Plant-1",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_B03",
    "name": "Tire Curing Press",
    "area": "Plant-1",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_B04",
    "name": "Tire Curing Press",
    "area": "Plant-1",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_B05",
    "name": "Tire Curing Press",
    "area": "Plant-1",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_B06",
    "name": "Tire Curing Press",
    "area": "Plant-1",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_B07",
    "name": "Tire Curing Press",
    "area": "Plant-1",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_B08",
    "name": "Tire Curing Press",
    "area": "Plant-1",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_B09",
    "name": "Tire Curing Press",
    "area": "Plant-1",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_B10",
    "name": "Tire Curing Press",
    "area": "Plant-1",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_B11",
    "name": "Tire Curing Press",
    "area": "Plant-1",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_B12",
    "name": "Tire Curing Press",
    "area": "Plant-1",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_C01",
    "name": "Tire Curing Press",
    "area": "Plant-1",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_C02",
    "name": "Tire Curing Press",
    "area": "Plant-1",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_C03",
    "name": "Tire Curing Press",
    "area": "Plant-1",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_C04",
    "name": "Tire Curing Press",
    "area": "Plant-1",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_C05",
    "name": "Tire Curing Press",
    "area": "Plant-1",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_C06",
    "name": "Tire Curing Press",
    "area": "Plant-1",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_C07",
    "name": "Tire Curing Press",
    "area": "Plant-1",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_C08",
    "name": "Tire Curing Press",
    "area": "Plant-1",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_C09",
    "name": "Tire Curing Press",
    "area": "Plant-1",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_C10",
    "name": "Tire Curing Press",
    "area": "Plant-1",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_C11",
    "name": "Tire Curing Press",
    "area": "Plant-1",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_D01",
    "name": "Tire Curing Press",
    "area": "Plant-1",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_D02",
    "name": "Tire Curing Press",
    "area": "Plant-1",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_D03",
    "name": "Tire Curing Press",
    "area": "Plant-1",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_D04",
    "name": "Tire Curing Press",
    "area": "Plant-1",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_D05",
    "name": "Tire Curing Press",
    "area": "Plant-1",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_D06",
    "name": "Tire Curing Press",
    "area": "Plant-1",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_D07",
    "name": "Tire Curing Press",
    "area": "Plant-1",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_D08",
    "name": "Tire Curing Press",
    "area": "Plant-1",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_D09",
    "name": "Tire Curing Press",
    "area": "Plant-1",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_D10",
    "name": "Tire Curing Press",
    "area": "Plant-1",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_D11",
    "name": "Tire Curing Press",
    "area": "Plant-1",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_D12",
    "name": "Tire Curing Press",
    "area": "Plant-1",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_D13",
    "name": "Tire Curing Press",
    "area": "Plant-1",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_E01",
    "name": "Tire Curing Press",
    "area": "Plant-2",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_E02",
    "name": "Tire Curing Press",
    "area": "Plant-2",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_E03",
    "name": "Tire Curing Press",
    "area": "Plant-2",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_E04",
    "name": "Tire Curing Press",
    "area": "Plant-2",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_E05",
    "name": "Tire Curing Press",
    "area": "Plant-2",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_E06",
    "name": "Tire Curing Press",
    "area": "Plant-2",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_E07",
    "name": "Tire Curing Press",
    "area": "Plant-2",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_E08",
    "name": "Tire Curing Press",
    "area": "Plant-2",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_E09",
    "name": "Tire Curing Press",
    "area": "Plant-2",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_E10",
    "name": "Tire Curing Press",
    "area": "Plant-2",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_E11",
    "name": "Tire Curing Press",
    "area": "Plant-2",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_E12",
    "name": "Tire Curing Press",
    "area": "Plant-2",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_E13",
    "name": "Tire Curing Press",
    "area": "Plant-2",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_F01",
    "name": "Tire Curing Press",
    "area": "Plant-2",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_F02",
    "name": "Tire Curing Press",
    "area": "Plant-2",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_F03",
    "name": "Tire Curing Press",
    "area": "Plant-2",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_F04",
    "name": "Tire Curing Press",
    "area": "Plant-2",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_F05",
    "name": "Tire Curing Press",
    "area": "Plant-2",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_F06",
    "name": "Tire Curing Press",
    "area": "Plant-2",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_F07",
    "name": "Tire Curing Press",
    "area": "Plant-2",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_F08",
    "name": "Tire Curing Press",
    "area": "Plant-2",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_F09",
    "name": "Tire Curing Press",
    "area": "Plant-2",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_F10",
    "name": "Tire Curing Press",
    "area": "Plant-2",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_F11",
    "name": "Tire Curing Press",
    "area": "Plant-2",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_F12",
    "name": "Tire Curing Press",
    "area": "Plant-2",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_F13",
    "name": "Tire Curing Press",
    "area": "Plant-2",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_G01",
    "name": "Tire Curing Press",
    "area": "Plant-2",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_G02",
    "name": "Tire Curing Press",
    "area": "Plant-2",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_G03",
    "name": "Tire Curing Press",
    "area": "Plant-2",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_G04",
    "name": "Tire Curing Press",
    "area": "Plant-2",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_G05",
    "name": "Tire Curing Press",
    "area": "Plant-2",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_G07",
    "name": "Tire Curing Press",
    "area": "Plant-2",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_G08",
    "name": "Tire Curing Press",
    "area": "Plant-2",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_G09",
    "name": "Tire Curing Press",
    "area": "Plant-2",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_G10",
    "name": "Tire Curing Press",
    "area": "Plant-2",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_G11",
    "name": "Tire Curing Press",
    "area": "Plant-2",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_G12",
    "name": "Tire Curing Press",
    "area": "Plant-2",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_G13",
    "name": "Tire Curing Press",
    "area": "Plant-2",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_G14",
    "name": "Tire Curing Press",
    "area": "Plant-2",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_G15",
    "name": "Tire Curing Press",
    "area": "Plant-2",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_G16",
    "name": "Tire Curing Press",
    "area": "Plant-2",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_H01",
    "name": "Tire Curing Press",
    "area": "Plant-2",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_H02",
    "name": "Tire Curing Press",
    "area": "Plant-2",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_H03",
    "name": "Tire Curing Press",
    "area": "Plant-2",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_H04",
    "name": "Tire Curing Press",
    "area": "Plant-2",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_H05",
    "name": "Tire Curing Press",
    "area": "Plant-2",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_H06",
    "name": "Tire Curing Press",
    "area": "Plant-2",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_H07",
    "name": "Tire Curing Press",
    "area": "Plant-2",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_H08",
    "name": "Tire Curing Press",
    "area": "Plant-2",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_H09",
    "name": "Tire Curing Press",
    "area": "Plant-2",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_H10",
    "name": "Tire Curing Press",
    "area": "Plant-2",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_H11",
    "name": "Tire Curing Press",
    "area": "Plant-2",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_H12",
    "name": "Tire Curing Press",
    "area": "Plant-2",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_H13",
    "name": "Tire Curing Press",
    "area": "Plant-2",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_H14",
    "name": "Tire Curing Press",
    "area": "Plant-2",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_H15",
    "name": "Tire Curing Press",
    "area": "Plant-2",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_H16",
    "name": "Tire Curing Press",
    "area": "Plant-2",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_I01",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_I02",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_I03",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_I04",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_I05",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_I06",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_I07",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_I08",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_I09",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_I10",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_I11",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_J04",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_J05",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_J06",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_J07",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_J08",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_J09",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_J10",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_J1A",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_J2A",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_J3A",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_K01",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_K02",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_K03",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_K04",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_K05",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_K06",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_K07",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_K08",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_K09",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_K10",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_K11",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_K12",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_K13",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_K14",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_K15",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_L01",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_L02",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_L03",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_L04",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_L05",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_L06",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_L07",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_L08",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_L09",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_L10",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_L11",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_L12",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_L13",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_L14",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_L15",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_M01",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_M02",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_M03",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_M04",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_M05",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_M06",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_M07",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_M08",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_M09",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_M10",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_N01",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "CU_N02",
    "name": "Tire Curing Press",
    "area": "Plant-3",
    "process": "Tire Curing",
    "critical": "No"
  },
  {
    "code": "MIX_001",
    "name": "Mixer",
    "area": "Mixing Shed",
    "process": "Mixing",
    "critical": "No"
  },
  {
    "code": "MIX_002",
    "name": "Mixer",
    "area": "Mixing Shed",
    "process": "Mixing",
    "critical": "No"
  },
  {
    "code": "MIX_003",
    "name": "Mixer",
    "area": "Mixing Shed",
    "process": "Mixing",
    "critical": "No"
  },
  {
    "code": "MIX_004",
    "name": "Mixer",
    "area": "Mixing Shed",
    "process": "Mixing",
    "critical": "No"
  },
  {
    "code": "MIX_005",
    "name": "Mixer",
    "area": "Mixing Shed",
    "process": "Mixing",
    "critical": "No"
  },
  {
    "code": "MIX_006",
    "name": "Mixer",
    "area": "Mixing Shed",
    "process": "Mixing",
    "critical": "No"
  },
  {
    "code": "SAL_001",
    "name": "Salvage",
    "area": "Plant-3",
    "process": "Salvage",
    "critical": "No"
  },
  {
    "code": "CL",
    "name": "Carbon Loading",
    "area": "Mixing Shed",
    "process": "Carbon Loading",
    "critical": "No"
  },
  {
    "code": "MCL",
    "name": "Master Chemical Loading",
    "area": "Mixing Shed",
    "process": "Chemical Loading",
    "critical": "No"
  },
  {
    "code": "FCL",
    "name": "Final Chemical Loading",
    "area": "Mixing Shed",
    "process": "Chemical Loading",
    "critical": "No"
  },
  {
    "code": "KNDR_001",
    "name": "Kneader",
    "area": "Plant 4",
    "process": "Kneader",
    "critical": "No"
  },
  {
    "code": "STP_TBM_1",
    "name": "Solid Tire Building stage 1",
    "area": "Plant 4",
    "process": "Solid Tire Building",
    "critical": "No"
  },
  {
    "code": "STP_TBM_2",
    "name": "Solid Tire Building stage 2",
    "area": "Plant 4",
    "process": "Solid Tire Building",
    "critical": "No"
  },
  {
    "code": "STP_TBM_3",
    "name": "Solid Tire Building stage 3",
    "area": "Plant 4",
    "process": "Solid Tire Building",
    "critical": "No"
  },
  {
    "code": "STP_TBM_4",
    "name": "Solid Tire Building stage 4",
    "area": "Plant 4",
    "process": "Solid Tire Building",
    "critical": "No"
  },
  {
    "code": "STB_002",
    "name": "Solid Tire Building Old",
    "area": "Plant 4",
    "process": "Solid Tire Building",
    "critical": "No"
  },
  {
    "code": "S_SC01",
    "name": "Solid Tire Curing Press",
    "area": "Plant 4",
    "process": "Solid Curing",
    "critical": "No"
  },
  {
    "code": "S_SC02",
    "name": "Solid Tire Curing Press",
    "area": "Plant 4",
    "process": "Solid Curing",
    "critical": "No"
  },
  {
    "code": "S_SC03",
    "name": "Solid Tire Curing Press",
    "area": "Plant 4",
    "process": "Solid Curing",
    "critical": "No"
  },
  {
    "code": "S_SC04",
    "name": "Solid Tire Curing Press",
    "area": "Plant 4",
    "process": "Solid Curing",
    "critical": "No"
  },
  {
    "code": "S_SC05",
    "name": "Solid Tire Curing Press",
    "area": "Plant 4",
    "process": "Solid Curing",
    "critical": "No"
  },
  {
    "code": "S_SC06",
    "name": "Solid Tire Curing Press",
    "area": "Plant 4",
    "process": "Solid Curing",
    "critical": "No"
  },
  {
    "code": "S_SC07",
    "name": "Solid Tire Curing Press",
    "area": "Plant 4",
    "process": "Solid Curing",
    "critical": "No"
  },
  {
    "code": "S_SC08",
    "name": "Solid Tire Curing Press",
    "area": "Plant 4",
    "process": "Solid Curing",
    "critical": "No"
  },
  {
    "code": "S_SC09",
    "name": "Solid Tire Curing Press",
    "area": "Plant 4",
    "process": "Solid Curing",
    "critical": "No"
  },
  {
    "code": "S_SC10",
    "name": "Solid Tire Curing Press",
    "area": "Plant 4",
    "process": "Solid Curing",
    "critical": "No"
  },
  {
    "code": "S_SC11",
    "name": "Solid Tire Curing Press",
    "area": "Plant 4",
    "process": "Solid Curing",
    "critical": "No"
  },
  {
    "code": "S_SC12",
    "name": "Solid Tire Curing Press",
    "area": "Plant 4",
    "process": "Solid Curing",
    "critical": "No"
  },
  {
    "code": "S_SC13",
    "name": "Solid Tire Curing Press",
    "area": "Plant 4",
    "process": "Solid Curing",
    "critical": "No"
  },
  {
    "code": "S_SC14",
    "name": "Solid Tire Curing Press",
    "area": "Plant 4",
    "process": "Solid Curing",
    "critical": "No"
  },
  {
    "code": "S_SC15",
    "name": "Solid Tire Curing Press",
    "area": "Plant 4",
    "process": "Solid Curing",
    "critical": "No"
  },
  {
    "code": "S_SC16",
    "name": "Solid Tire Curing Press",
    "area": "Plant 4",
    "process": "Solid Curing",
    "critical": "No"
  },
  {
    "code": "S_SC17",
    "name": "Solid Tire Curing Press",
    "area": "Plant 4",
    "process": "Solid Curing",
    "critical": "No"
  },
  {
    "code": "S_SC18",
    "name": "Solid Tire Curing Press",
    "area": "Plant 4",
    "process": "Solid Curing",
    "critical": "No"
  },
  {
    "code": "S_SC19",
    "name": "Solid Tire Curing Press",
    "area": "Plant 4",
    "process": "Solid Curing",
    "critical": "No"
  },
  {
    "code": "S_SC20",
    "name": "Solid Tire Curing Press",
    "area": "Plant 4",
    "process": "Solid Curing",
    "critical": "No"
  },
  {
    "code": "S_SC21",
    "name": "Solid Tire Curing Press",
    "area": "Plant 4",
    "process": "Solid Curing",
    "critical": "No"
  },
  {
    "code": "S_SC22",
    "name": "Solid Tire Curing Press",
    "area": "Plant 4",
    "process": "Solid Curing",
    "critical": "No"
  },
  {
    "code": "SC_S01",
    "name": "Solid Tire Curing Press",
    "area": "Plant 4",
    "process": "Solid Curing",
    "critical": "No"
  },
  {
    "code": "SC_S02",
    "name": "Solid Tire Curing Press",
    "area": "Plant 4",
    "process": "Solid Curing",
    "critical": "No"
  },
  {
    "code": "SC_S03",
    "name": "Solid Tire Curing Press",
    "area": "Plant 4",
    "process": "Solid Curing",
    "critical": "No"
  },
  {
    "code": "SC_S04",
    "name": "Solid Tire Curing Press",
    "area": "Plant 4",
    "process": "Solid Curing",
    "critical": "No"
  },
  {
    "code": "SC_S05",
    "name": "Solid Tire Curing Press",
    "area": "Plant 4",
    "process": "Solid Curing",
    "critical": "No"
  },
  {
    "code": "SC_S06",
    "name": "Solid Tire Curing Press",
    "area": "Plant 4",
    "process": "Solid Curing",
    "critical": "No"
  },
  {
    "code": "SC_S07",
    "name": "Solid Tire Curing Press",
    "area": "Plant 4",
    "process": "Solid Curing",
    "critical": "No"
  },
  {
    "code": "SC_S08",
    "name": "Solid Tire Curing Press",
    "area": "Plant 4",
    "process": "Solid Curing",
    "critical": "No"
  },
  {
    "code": "SC_S09",
    "name": "Solid Tire Curing Press",
    "area": "Plant 4",
    "process": "Solid Curing",
    "critical": "No"
  },
  {
    "code": "SC_S10",
    "name": "Solid Tire Curing Press",
    "area": "Plant 4",
    "process": "Solid Curing",
    "critical": "No"
  },
  {
    "code": "SC_S11",
    "name": "Solid Tire Curing Press",
    "area": "Plant 4",
    "process": "Solid Curing",
    "critical": "No"
  },
  {
    "code": "SC_S12",
    "name": "Solid Tire Curing Press",
    "area": "Plant 4",
    "process": "Solid Curing",
    "critical": "No"
  },
  {
    "code": "SC_S13",
    "name": "Solid Tire Curing Press",
    "area": "Plant 4",
    "process": "Solid Curing",
    "critical": "No"
  },
  {
    "code": "SC_S14",
    "name": "Solid Tire Curing Press",
    "area": "Plant 4",
    "process": "Solid Curing",
    "critical": "No"
  },
  {
    "code": "FID_01",
    "name": "Rim Fitting Machine",
    "area": "Plant 4",
    "process": "Rim Fitting",
    "critical": "No"
  },
  {
    "code": "FID_02",
    "name": "Rim Fitting Machine",
    "area": "Plant 4",
    "process": "Rim Fitting",
    "critical": "No"
  },
  {
    "code": "FID_03",
    "name": "Rim Fitting Machine",
    "area": "Plant 4",
    "process": "Rim Fitting",
    "critical": "No"
  },
  {
    "code": "FID",
    "name": "FID",
    "area": "FID",
    "process": "FID",
    "critical": "No"
  },
  {
    "code": "MES_SERVER",
    "name": "MES / Application Server",
    "area": "IT Infra",
    "process": "IT Infrastructure",
    "critical": "Yes"
  },
  {
    "code": "BAS_006",
    "name": "Steel Bias cutter",
    "area": "4 Roll Shed",
    "process": "Biascutter",
    "critical": "No"
  },
  {
    "code": "KNDR_002",
    "name": "Kneader",
    "area": "Plant 4",
    "process": "Kneader",
    "critical": "No"
  },
  {
    "code": "SC_S15",
    "name": "Solid Tire Curing Press",
    "area": "Plant 4",
    "process": "Solid Curing",
    "critical": "No"
  },
  {
    "code": "SC_S16",
    "name": "Solid Tire Curing Press",
    "area": "Plant 4",
    "process": "Solid Curing",
    "critical": "No"
  }
];

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

// --- Yokohama Plant IT Downtime Incident Dataset (Preserved backup for 1-click restore) ---
const DEMO_INCIDENTS_BACKUP = [
  {
    "id": "YOKO-DT-2026-001",
    "issueDate": "2026-01-01",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T02",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-01-01",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-01-01T08:01:00Z"
  },
  {
    "id": "YOKO-DT-2026-002",
    "issueDate": "2026-01-02",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y13",
    "machineType": "YANTAI",
    "downtimeMinutes": 20,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-01-02",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-01-02T08:02:00Z"
  },
  {
    "id": "YOKO-DT-2026-003",
    "issueDate": "2026-01-03",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US3",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-01-03",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-01-03T08:03:00Z"
  },
  {
    "id": "YOKO-DT-2026-004",
    "issueDate": "2026-01-09",
    "nature": "MES",
    "area": "4Roll shed",
    "process": "4Roll",
    "machineNo": "4ROLL_01",
    "machineType": "4-Roll and IL Cal  650*1900",
    "downtimeMinutes": 15,
    "category": "Printer",
    "issueDetails": "Poor quality tag printing",
    "actionPlan": "Head cleaning done",
    "responsibility": "ATC",
    "closedDate": "2026-01-09",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-01-09T08:04:00Z"
  },
  {
    "id": "YOKO-DT-2026-005",
    "issueDate": "2026-01-05",
    "nature": "INFRA",
    "area": "Plant 2",
    "process": "Flipper",
    "machineNo": "FLP_03",
    "machineType": "Bead Flipping Machine 32\"-46\"",
    "downtimeMinutes": 25,
    "category": "IPC",
    "issueDetails": "Delay access or response",
    "actionPlan": "Cache cleared and restart done",
    "responsibility": "ATC",
    "closedDate": "2026-01-05",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-01-05T08:05:00Z"
  },
  {
    "id": "YOKO-DT-2026-006",
    "issueDate": "2026-01-06",
    "nature": "MES",
    "area": "4Roll shed",
    "process": "4Roll",
    "machineNo": "4ROLL_01",
    "machineType": "4-Roll and IL Cal  650*1900",
    "downtimeMinutes": 25,
    "category": "Printer",
    "issueDetails": "Poor quality tag printing",
    "actionPlan": "Head cleaning done",
    "responsibility": "ATC",
    "closedDate": "2026-01-06",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-01-06T08:06:00Z"
  },
  {
    "id": "YOKO-DT-2026-007",
    "issueDate": "2026-01-07",
    "nature": "INFRA",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 50,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN removed and connected through WIFI",
    "responsibility": "ATC",
    "closedDate": "2026-01-07",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "Power issue at switch Rack",
    "createdAt": "2026-01-07T08:07:00Z"
  },
  {
    "id": "YOKO-DT-2026-008",
    "issueDate": "2026-01-09",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y02",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Delay access or response",
    "actionPlan": "Cache cleared and restart done",
    "responsibility": "ATC",
    "closedDate": "2026-01-09",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-01-09T08:08:00Z"
  },
  {
    "id": "YOKO-DT-2026-009",
    "issueDate": "2026-01-09",
    "nature": "MES",
    "area": "Plant 4",
    "process": "Curing",
    "machineNo": "CU_H06",
    "machineType": "H-Line",
    "downtimeMinutes": 40,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "New scanner changed",
    "responsibility": "ATC",
    "closedDate": "2026-01-09",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-01-09T08:09:00Z"
  },
  {
    "id": "YOKO-DT-2026-010",
    "issueDate": "2026-01-08",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC-01",
    "machineType": "Biascutter 20-90 deg",
    "downtimeMinutes": 15,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "New battery replaced",
    "responsibility": "ATC",
    "closedDate": "2026-01-08",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-01-08T08:10:00Z"
  },
  {
    "id": "YOKO-DT-2026-011",
    "issueDate": "2026-01-09",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y05",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Settings re-confgiruation done",
    "responsibility": "ATC",
    "closedDate": "2026-01-09",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-01-09T08:11:00Z"
  },
  {
    "id": "YOKO-DT-2026-012",
    "issueDate": "2026-01-09",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y02",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-01-09",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-01-09T08:12:00Z"
  },
  {
    "id": "YOKO-DT-2026-013",
    "issueDate": "2026-01-10",
    "nature": "INFRA",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWFMF_01",
    "machineType": "Finemac",
    "downtimeMinutes": 30,
    "category": "IPC",
    "issueDetails": "Delay access or response",
    "actionPlan": "Cache cleared and restart done",
    "responsibility": "ATC",
    "closedDate": "2026-01-10",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-01-10T08:13:00Z"
  },
  {
    "id": "YOKO-DT-2026-014",
    "issueDate": "2026-01-10",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "F09",
    "machineType": "Fujion",
    "downtimeMinutes": 13,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-01-10",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-01-10T08:14:00Z"
  },
  {
    "id": "YOKO-DT-2026-015",
    "issueDate": "2026-01-10",
    "nature": "INFRA",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWFMF_01",
    "machineType": "Finemac",
    "downtimeMinutes": 25,
    "category": "IPC",
    "issueDetails": "Delay access or response",
    "actionPlan": "Cache cleared and restart done",
    "responsibility": "ATC",
    "closedDate": "2026-01-10",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-01-10T08:15:00Z"
  },
  {
    "id": "YOKO-DT-2026-016",
    "issueDate": "2026-01-10",
    "nature": "INFRA",
    "area": "4Roll shed",
    "process": "3Roll",
    "machineNo": "3ROLL_01",
    "machineType": "3-Roll Calendar Dia 560*1650",
    "downtimeMinutes": 15,
    "category": "IPC",
    "issueDetails": "Delay access or response",
    "actionPlan": "Cache cleared and restart done",
    "responsibility": "ATC",
    "closedDate": "2026-01-10",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-01-10T08:16:00Z"
  },
  {
    "id": "YOKO-DT-2026-017",
    "issueDate": "2026-01-11",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y16",
    "machineType": "YANTAI",
    "downtimeMinutes": 15,
    "category": "NSNL",
    "issueDetails": "Tag values not write in PLC",
    "actionPlan": "Manually reset done",
    "responsibility": "MELSS",
    "closedDate": "2026-01-11",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "NSNL error and Tags not getting automatically",
    "createdAt": "2026-01-11T08:17:00Z"
  },
  {
    "id": "YOKO-DT-2026-018",
    "issueDate": "2026-01-11",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US3",
    "machineType": "Unistage",
    "downtimeMinutes": 10,
    "category": "NSNL",
    "issueDetails": "Tag values not write in PLC",
    "actionPlan": "Manually reset done",
    "responsibility": "MELSS",
    "closedDate": "2026-01-11",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "Tags not generated automatically for GT",
    "createdAt": "2026-01-11T08:18:00Z"
  },
  {
    "id": "YOKO-DT-2026-019",
    "issueDate": "2026-01-11",
    "nature": "MES",
    "area": "4Roll shed",
    "process": "4Roll",
    "machineNo": "SCL_01",
    "machineType": "FISHER CUTTER",
    "downtimeMinutes": 20,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "New battery replaced",
    "responsibility": "ATC",
    "closedDate": "2026-01-11",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-01-11T08:19:00Z"
  },
  {
    "id": "YOKO-DT-2026-020",
    "issueDate": "2026-01-11",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "F01",
    "machineType": "Fujion",
    "downtimeMinutes": 10,
    "category": "IPC",
    "issueDetails": "Delay access or response",
    "actionPlan": "Cache cleared and restart done",
    "responsibility": "ATC",
    "closedDate": "2026-01-11",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-01-11T08:20:00Z"
  },
  {
    "id": "YOKO-DT-2026-021",
    "issueDate": "2026-01-11",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y11",
    "machineType": "YANTAI",
    "downtimeMinutes": 20,
    "category": "IPC",
    "issueDetails": "Auto update delay",
    "actionPlan": "Manually restarted",
    "responsibility": "ATC",
    "closedDate": "2026-01-11",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-01-11T08:21:00Z"
  },
  {
    "id": "YOKO-DT-2026-022",
    "issueDate": "2026-01-11",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y11",
    "machineType": "YANTAI",
    "downtimeMinutes": 15,
    "category": "IPC",
    "issueDetails": "Continues restrat",
    "actionPlan": "Manually restarted",
    "responsibility": "ATC",
    "closedDate": "2026-01-11",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-01-11T08:22:00Z"
  },
  {
    "id": "YOKO-DT-2026-023",
    "issueDate": "2026-01-11",
    "nature": "MES",
    "area": "Plant 4",
    "process": "Extrusion",
    "machineNo": "CFE_01",
    "machineType": "Duplex 10*8 Ext with 100mtr cooling line",
    "downtimeMinutes": 3,
    "category": "Printer",
    "issueDetails": "Poor quality tag printing",
    "actionPlan": "New Label changed",
    "responsibility": "ATC",
    "closedDate": "2026-01-11",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "Just Given the Label reprint",
    "createdAt": "2026-01-11T08:23:00Z"
  },
  {
    "id": "YOKO-DT-2026-024",
    "issueDate": "2026-01-11",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y10",
    "machineType": "YANTAI",
    "downtimeMinutes": 25,
    "category": "IPC",
    "issueDetails": "Hardware issue",
    "actionPlan": "HDMI cable Replced",
    "responsibility": "ATC",
    "closedDate": "2026-01-11",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "HDMI Cable Not working",
    "createdAt": "2026-01-11T08:24:00Z"
  },
  {
    "id": "YOKO-DT-2026-025",
    "issueDate": "2026-01-11",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y11",
    "machineType": "YANTAI",
    "downtimeMinutes": 10,
    "category": "IPC",
    "issueDetails": "Continues restrat",
    "actionPlan": "Manually restarted",
    "responsibility": "ATC",
    "closedDate": "2026-01-11",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-01-11T08:25:00Z"
  },
  {
    "id": "YOKO-DT-2026-026",
    "issueDate": "2026-01-12",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y11",
    "machineType": "YANTAI",
    "downtimeMinutes": 15,
    "category": "NSNL",
    "issueDetails": "Tag values not write in PLC",
    "actionPlan": "Manually reset done",
    "responsibility": "MELSS",
    "closedDate": "2026-01-12",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "PLC Bad Condition Error",
    "createdAt": "2026-01-12T08:26:00Z"
  },
  {
    "id": "YOKO-DT-2026-027",
    "issueDate": "2026-01-12",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T04",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-01-12",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-01-12T08:27:00Z"
  },
  {
    "id": "YOKO-DT-2026-028",
    "issueDate": "2026-01-12",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y04",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Auto update delay",
    "actionPlan": "Manually restarted",
    "responsibility": "ATC",
    "closedDate": "2026-01-12",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "Keyboard issue, Replace with another keyboard",
    "createdAt": "2026-01-12T08:28:00Z"
  },
  {
    "id": "YOKO-DT-2026-029",
    "issueDate": "2026-01-12",
    "nature": "INFRA",
    "area": "Mixing Shed",
    "process": "Mixing",
    "machineNo": "MIX_01",
    "machineType": "Mixer-1 (430 LTR) Master",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Printer restart done",
    "responsibility": "ATC",
    "closedDate": "2026-01-12",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-01-12T08:29:00Z"
  },
  {
    "id": "YOKO-DT-2026-030",
    "issueDate": "2026-01-12",
    "nature": "INFRA",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US4",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-01-12",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-01-12T08:30:00Z"
  },
  {
    "id": "YOKO-DT-2026-031",
    "issueDate": "2026-01-13",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T04",
    "machineType": "Taku TBM",
    "downtimeMinutes": 3,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-01-13",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-01-13T08:31:00Z"
  },
  {
    "id": "YOKO-DT-2026-032",
    "issueDate": "2026-01-13",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y10",
    "machineType": "YANTAI",
    "downtimeMinutes": 10,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN removed and connected through WIFI",
    "responsibility": "ATC",
    "closedDate": "2026-01-13",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-01-13T08:32:00Z"
  },
  {
    "id": "YOKO-DT-2026-033",
    "issueDate": "2026-01-17",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y08",
    "machineType": "YANTAI",
    "downtimeMinutes": 6,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-01-17",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "Disconnected the SPEC and again reconnect the spec",
    "createdAt": "2026-01-17T08:33:00Z"
  },
  {
    "id": "YOKO-DT-2026-034",
    "issueDate": "2026-01-17",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC-01",
    "machineType": "Biascutter 20-90 deg",
    "downtimeMinutes": 18,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "New battery replaced",
    "responsibility": "ATC",
    "closedDate": "2026-01-17",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-01-17T08:34:00Z"
  },
  {
    "id": "YOKO-DT-2026-035",
    "issueDate": "2026-01-17",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "SBC_01",
    "machineType": "Steel belt cutter - Old",
    "downtimeMinutes": 14,
    "category": "IPC",
    "issueDetails": "Delay access or response",
    "actionPlan": "Cache cleared and restart done",
    "responsibility": "ATC",
    "closedDate": "2026-01-17",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "Given the reprint",
    "createdAt": "2026-01-17T08:35:00Z"
  },
  {
    "id": "YOKO-DT-2026-036",
    "issueDate": "2026-01-18",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y08",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-01-18",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-01-18T08:36:00Z"
  },
  {
    "id": "YOKO-DT-2026-037",
    "issueDate": "2026-01-18",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y10",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Delay access or response",
    "actionPlan": "Cache cleared and restart done",
    "responsibility": "ATC",
    "closedDate": "2026-01-18",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "Keyboard Not working, Replaced with another keyboard",
    "createdAt": "2026-01-18T08:37:00Z"
  },
  {
    "id": "YOKO-DT-2026-038",
    "issueDate": "2026-01-08",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US1",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-01-08",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "NSNL ON error, Bit value changed",
    "createdAt": "2026-01-08T08:38:00Z"
  },
  {
    "id": "YOKO-DT-2026-039",
    "issueDate": "2026-01-06",
    "nature": "INFRA",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWFMF_01",
    "machineType": "Finemac",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "Printer restart done",
    "responsibility": "ATC",
    "closedDate": "2026-01-06",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-01-06T08:39:00Z"
  },
  {
    "id": "YOKO-DT-2026-040",
    "issueDate": "2026-01-05",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWFMF_02",
    "machineType": "Radial Finemac",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-01-05",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-01-05T08:40:00Z"
  },
  {
    "id": "YOKO-DT-2026-041",
    "issueDate": "2026-01-05",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T03",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-01-05",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-01-05T08:41:00Z"
  },
  {
    "id": "YOKO-DT-2026-042",
    "issueDate": "2026-01-02",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWFMF_02",
    "machineType": "Radial Finemac",
    "downtimeMinutes": 15,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-01-02",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-01-02T08:42:00Z"
  },
  {
    "id": "YOKO-DT-2026-043",
    "issueDate": "2026-01-19",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y14",
    "machineType": "YANTAI",
    "downtimeMinutes": 10,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-01-19",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-01-19T08:43:00Z"
  },
  {
    "id": "YOKO-DT-2026-044",
    "issueDate": "2026-01-20",
    "nature": "INFRA",
    "area": "Plant 3",
    "process": "Bead Winding",
    "machineNo": "BW_01",
    "machineType": "Bead Winding # 1 (8\"-38\")",
    "downtimeMinutes": 10,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Configuration done",
    "responsibility": "ATC",
    "closedDate": "2026-01-20",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-01-20T08:44:00Z"
  },
  {
    "id": "YOKO-DT-2026-045",
    "issueDate": "2026-01-21",
    "nature": "INFRA",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US1",
    "machineType": "Unistage",
    "downtimeMinutes": 15,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Settings re-confgiruation done",
    "responsibility": "ATC",
    "closedDate": "2026-01-21",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-01-21T08:45:00Z"
  },
  {
    "id": "YOKO-DT-2026-046",
    "issueDate": "2026-01-22",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Band",
    "machineNo": "BBONL_01",
    "machineType": "Online Band Building 56\"",
    "downtimeMinutes": 10,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Configuration done",
    "responsibility": "ATC",
    "closedDate": "2026-01-22",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-01-22T08:46:00Z"
  },
  {
    "id": "YOKO-DT-2026-047",
    "issueDate": "2026-01-23",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y03",
    "machineType": "YANTAI",
    "downtimeMinutes": 15,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-01-23",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-01-23T08:47:00Z"
  },
  {
    "id": "YOKO-DT-2026-048",
    "issueDate": "2026-01-23",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "F01",
    "machineType": "Fujion",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-01-23",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-01-23T08:48:00Z"
  },
  {
    "id": "YOKO-DT-2026-049",
    "issueDate": "2026-01-24",
    "nature": "INFRA",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 4,
    "category": "Printer",
    "issueDetails": "Poor quality tag printing",
    "actionPlan": "Head cleaning done",
    "responsibility": "ATC",
    "closedDate": "2026-01-24",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-01-24T08:49:00Z"
  },
  {
    "id": "YOKO-DT-2026-050",
    "issueDate": "2026-01-25",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T01",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Configuration done",
    "responsibility": "ATC",
    "closedDate": "2026-01-25",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-01-25T08:50:00Z"
  },
  {
    "id": "YOKO-DT-2026-051",
    "issueDate": "2026-01-27",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Band",
    "machineNo": "BBONL_02",
    "machineType": "Online Band Building 76\"",
    "downtimeMinutes": 10,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN removed and connected through WIFI",
    "responsibility": "ATC",
    "closedDate": "2026-01-27",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-01-27T08:51:00Z"
  },
  {
    "id": "YOKO-DT-2026-052",
    "issueDate": "2026-01-27",
    "nature": "INFRA",
    "area": "FID",
    "process": "FID",
    "machineNo": "FID",
    "machineType": "FID",
    "downtimeMinutes": 30,
    "category": "Infra",
    "issueDetails": "Network not available",
    "actionPlan": "Switch hanging and restart done",
    "responsibility": "ATC",
    "closedDate": "2026-01-27",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-01-27T08:52:00Z"
  },
  {
    "id": "YOKO-DT-2026-053",
    "issueDate": "2026-01-27",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T04",
    "machineType": "Taku TBM",
    "downtimeMinutes": 10,
    "category": "IPC",
    "issueDetails": "Delay access or response",
    "actionPlan": "Cache cleared and restart done",
    "responsibility": "ATC",
    "closedDate": "2026-01-27",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-01-27T08:53:00Z"
  },
  {
    "id": "YOKO-DT-2026-054",
    "issueDate": "2026-01-28",
    "nature": "INFRA",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWMRG_03",
    "machineType": "Marangoni",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Poor quality tag printing",
    "actionPlan": "Darkness increased",
    "responsibility": "ATC",
    "closedDate": "2026-01-28",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-01-28T08:54:00Z"
  },
  {
    "id": "YOKO-DT-2026-055",
    "issueDate": "2026-01-28",
    "nature": "INFRA",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWMRG_03",
    "machineType": "Marangoni",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-01-28",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-01-28T08:55:00Z"
  },
  {
    "id": "YOKO-DT-2026-056",
    "issueDate": "2026-01-29",
    "nature": "INFRA",
    "area": "4Roll shed",
    "process": "3Roll",
    "machineNo": "3ROLL_01",
    "machineType": "3-Roll Calendar Dia 560*1650",
    "downtimeMinutes": 15,
    "category": "IPC",
    "issueDetails": "Continues restrat",
    "actionPlan": "Manually restarted",
    "responsibility": "ATC",
    "closedDate": "2026-01-29",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-01-29T08:56:00Z"
  },
  {
    "id": "YOKO-DT-2026-057",
    "issueDate": "2026-01-29",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Band",
    "machineNo": "BBONL_04",
    "machineType": "Online Band Building 132\"",
    "downtimeMinutes": 30,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Settings re-confgiruation done",
    "responsibility": "ATC",
    "closedDate": "2026-01-29",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-01-29T08:57:00Z"
  },
  {
    "id": "YOKO-DT-2026-058",
    "issueDate": "2026-01-29",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-01-29",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-01-29T08:58:00Z"
  },
  {
    "id": "YOKO-DT-2026-059",
    "issueDate": "2026-01-30",
    "nature": "INFRA",
    "area": "4Roll shed",
    "process": "3Roll",
    "machineNo": "3ROLL_01",
    "machineType": "3-Roll Calendar Dia 560*1650",
    "downtimeMinutes": 45,
    "category": "IPC",
    "issueDetails": "Hardware issue",
    "actionPlan": "New IPC replaced",
    "responsibility": "ATC",
    "closedDate": "2026-01-30",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-01-30T08:59:00Z"
  },
  {
    "id": "YOKO-DT-2026-060",
    "issueDate": "2026-02-01",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y13",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Callibration",
    "responsibility": "ATC",
    "closedDate": "2026-02-01",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-01T08:00:00Z"
  },
  {
    "id": "YOKO-DT-2026-061",
    "issueDate": "2026-02-01",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y10",
    "machineType": "YANTAI",
    "downtimeMinutes": 10,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Settings re-confgiruation done",
    "responsibility": "ATC",
    "closedDate": "2026-02-01",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-01T08:01:00Z"
  },
  {
    "id": "YOKO-DT-2026-062",
    "issueDate": "2026-02-01",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y11",
    "machineType": "YANTAI",
    "downtimeMinutes": 60,
    "category": "IPC",
    "issueDetails": "Hardware issue",
    "actionPlan": "New IPC replaced",
    "responsibility": "ATC",
    "closedDate": "2026-02-01",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-01T08:02:00Z"
  },
  {
    "id": "YOKO-DT-2026-063",
    "issueDate": "2026-02-01",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Band",
    "machineNo": "BBONL_01",
    "machineType": "Online Band Building 56\"",
    "downtimeMinutes": 10,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Reinsert the Cabel",
    "responsibility": "ATC",
    "closedDate": "2026-02-01",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-01T08:03:00Z"
  },
  {
    "id": "YOKO-DT-2026-064",
    "issueDate": "2026-02-03",
    "nature": "MES",
    "area": "Plant 4",
    "process": "Curing",
    "machineNo": "GEN_CURING",
    "machineType": "GEN_CURING",
    "downtimeMinutes": 35,
    "category": "Printer",
    "issueDetails": "Poor quality tag printing",
    "actionPlan": "New Head replaced",
    "responsibility": "ATC",
    "closedDate": "2026-02-03",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "Maping another Priner",
    "createdAt": "2026-02-03T08:04:00Z"
  },
  {
    "id": "YOKO-DT-2026-065",
    "issueDate": "2026-02-04",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y16",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Hardware issue",
    "actionPlan": "",
    "responsibility": "ATC",
    "closedDate": "2026-02-04",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "Power Issue",
    "createdAt": "2026-02-04T08:05:00Z"
  },
  {
    "id": "YOKO-DT-2026-066",
    "issueDate": "2026-02-04",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Band",
    "machineNo": "BBONL_01",
    "machineType": "Online Band Building 56\"",
    "downtimeMinutes": 15,
    "category": "Printer",
    "issueDetails": "Poor quality tag printing",
    "actionPlan": "Head cleaning done",
    "responsibility": "ATC",
    "closedDate": "2026-02-04",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-04T08:06:00Z"
  },
  {
    "id": "YOKO-DT-2026-067",
    "issueDate": "2026-02-05",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Band",
    "machineNo": "BBONL_01",
    "machineType": "Online Band Building 56\"",
    "downtimeMinutes": 20,
    "category": "Printer",
    "issueDetails": "Poor quality tag printing",
    "actionPlan": "Head cleaning done",
    "responsibility": "ATC",
    "closedDate": "2026-02-05",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-05T08:07:00Z"
  },
  {
    "id": "YOKO-DT-2026-068",
    "issueDate": "2026-02-05",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y12",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Unable to login",
    "actionPlan": "Restart Done",
    "responsibility": "ATC",
    "closedDate": "2026-02-05",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-05T08:08:00Z"
  },
  {
    "id": "YOKO-DT-2026-069",
    "issueDate": "2026-02-06",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y08",
    "machineType": "YANTAI",
    "downtimeMinutes": 10,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-02-06",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-06T08:09:00Z"
  },
  {
    "id": "YOKO-DT-2026-070",
    "issueDate": "2026-02-06",
    "nature": "INFRA",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 95,
    "category": "Infra",
    "issueDetails": "Network not available",
    "actionPlan": "New switch replaced",
    "responsibility": "ATC",
    "closedDate": "2026-02-06",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "switch end no power replaced switch working fine",
    "createdAt": "2026-02-06T08:10:00Z"
  },
  {
    "id": "YOKO-DT-2026-071",
    "issueDate": "2026-02-06",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "F08",
    "machineType": "Fujion",
    "downtimeMinutes": 5,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-02-06",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-06T08:11:00Z"
  },
  {
    "id": "YOKO-DT-2026-072",
    "issueDate": "2026-02-06",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y06",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-02-06",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-06T08:12:00Z"
  },
  {
    "id": "YOKO-DT-2026-073",
    "issueDate": "2026-02-07",
    "nature": "INFRA",
    "area": "Plant 4",
    "process": "Extrusion",
    "machineNo": "CFE_01",
    "machineType": "Duplex 10*8 Ext with 100mtr cooling line",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Delay access or response",
    "actionPlan": "Cache cleared and restart done",
    "responsibility": "ATC",
    "closedDate": "2026-02-07",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-07T08:13:00Z"
  },
  {
    "id": "YOKO-DT-2026-074",
    "issueDate": "2026-02-07",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "F05",
    "machineType": "Fujion",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Delay access or response",
    "actionPlan": "MELSS side troubleshooting done",
    "responsibility": "ATC",
    "closedDate": "2026-02-07",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-07T08:14:00Z"
  },
  {
    "id": "YOKO-DT-2026-075",
    "issueDate": "2026-02-07",
    "nature": "INFRA",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWMRG_02",
    "machineType": "Marangoni",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-02-07",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-07T08:15:00Z"
  },
  {
    "id": "YOKO-DT-2026-076",
    "issueDate": "2026-02-07",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Slitter",
    "machineNo": "SLIT_01",
    "machineType": "Fabric Chafer Slitter",
    "downtimeMinutes": 15,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Settings re-confgiruation done",
    "responsibility": "ATC",
    "closedDate": "2026-02-07",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-07T08:16:00Z"
  },
  {
    "id": "YOKO-DT-2026-077",
    "issueDate": "2026-02-07",
    "nature": "INFRA",
    "area": "Plant 4",
    "process": "Extrusion",
    "machineNo": "CFE_01",
    "machineType": "Duplex 10*8 Ext with 100mtr cooling line",
    "downtimeMinutes": 15,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-02-07",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-07T08:17:00Z"
  },
  {
    "id": "YOKO-DT-2026-078",
    "issueDate": "2026-02-08",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Band",
    "machineNo": "BBONL_02",
    "machineType": "Online Band Building 76\"",
    "downtimeMinutes": 25,
    "category": "IPC",
    "issueDetails": "Continues restrat",
    "actionPlan": "Manually restarted",
    "responsibility": "ATC",
    "closedDate": "2026-02-08",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-08T08:18:00Z"
  },
  {
    "id": "YOKO-DT-2026-079",
    "issueDate": "2026-02-08",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T06",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-02-08",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-08T08:19:00Z"
  },
  {
    "id": "YOKO-DT-2026-080",
    "issueDate": "2026-02-09",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US3",
    "machineType": "Unistage",
    "downtimeMinutes": 10,
    "category": "MES",
    "issueDetails": "RM-QR code data not coming to MES",
    "actionPlan": "Manually inserted",
    "responsibility": "MELSS",
    "closedDate": "2026-02-09",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-09T08:20:00Z"
  },
  {
    "id": "YOKO-DT-2026-081",
    "issueDate": "2026-02-09",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y05",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "MES",
    "issueDetails": "RM-QR code data not coming to MES",
    "actionPlan": "Manually inserted",
    "responsibility": "MELSS",
    "closedDate": "2026-02-09",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-09T08:21:00Z"
  },
  {
    "id": "YOKO-DT-2026-082",
    "issueDate": "2026-02-09",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC-03",
    "machineType": "Biascutter 20-90 deg",
    "downtimeMinutes": 15,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "New battery replaced",
    "responsibility": "ATC",
    "closedDate": "2026-02-09",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "SCANNER BATTERY REPLACED NOW WORKING FINE",
    "createdAt": "2026-02-09T08:22:00Z"
  },
  {
    "id": "YOKO-DT-2026-083",
    "issueDate": "2026-02-11",
    "nature": "INFRA",
    "area": "Plant 4",
    "process": "Extrusion",
    "machineNo": "CFE_01",
    "machineType": "Duplex 10*8 Ext with 100mtr cooling line",
    "downtimeMinutes": 15,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-02-11",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-11T08:23:00Z"
  },
  {
    "id": "YOKO-DT-2026-084",
    "issueDate": "2026-02-11",
    "nature": "INFRA",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US4",
    "machineType": "Unistage",
    "downtimeMinutes": 10,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-02-11",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-11T08:24:00Z"
  },
  {
    "id": "YOKO-DT-2026-085",
    "issueDate": "2026-02-11",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC-01",
    "machineType": "Biascutter 20-90 deg",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Auto update delay",
    "actionPlan": "Manually restarted",
    "responsibility": "ATC",
    "closedDate": "2026-02-11",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-11T08:25:00Z"
  },
  {
    "id": "YOKO-DT-2026-086",
    "issueDate": "2026-02-12",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWFMF_01",
    "machineType": "Finemac",
    "downtimeMinutes": 10,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Callibration",
    "responsibility": "ATC",
    "closedDate": "2026-02-12",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-12T08:26:00Z"
  },
  {
    "id": "YOKO-DT-2026-087",
    "issueDate": "2026-02-12",
    "nature": "INFRA",
    "area": "Plant 3",
    "process": "Slitter",
    "machineNo": "SLIT_01",
    "machineType": "Fabric Chafer Slitter",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-02-12",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-12T08:27:00Z"
  },
  {
    "id": "YOKO-DT-2026-088",
    "issueDate": "2026-02-12",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y01",
    "machineType": "YANTAI",
    "downtimeMinutes": 20,
    "category": "Printer",
    "issueDetails": "Poor quality tag printing",
    "actionPlan": "New Head replaced",
    "responsibility": "ATC",
    "closedDate": "2026-02-12",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-12T08:28:00Z"
  },
  {
    "id": "YOKO-DT-2026-089",
    "issueDate": "2026-02-13",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y14",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Unable to login",
    "actionPlan": "Restart Done",
    "responsibility": "ATC",
    "closedDate": "2026-02-13",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-13T08:29:00Z"
  },
  {
    "id": "YOKO-DT-2026-090",
    "issueDate": "2026-02-13",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US1",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Poor quality tag printing",
    "actionPlan": "Head cleaning done",
    "responsibility": "ATC",
    "closedDate": "2026-02-13",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-13T08:30:00Z"
  },
  {
    "id": "YOKO-DT-2026-091",
    "issueDate": "2026-02-14",
    "nature": "INFRA",
    "area": "Mixing Shed",
    "process": "Mixing",
    "machineNo": "MC_01",
    "machineType": "Master Chemical",
    "downtimeMinutes": 10,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-02-14",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-14T08:31:00Z"
  },
  {
    "id": "YOKO-DT-2026-092",
    "issueDate": "2026-02-15",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "F05",
    "machineType": "Fujion",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-02-15",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-15T08:32:00Z"
  },
  {
    "id": "YOKO-DT-2026-093",
    "issueDate": "2026-02-15",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y07",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Callibration",
    "responsibility": "ATC",
    "closedDate": "2026-02-15",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-15T08:33:00Z"
  },
  {
    "id": "YOKO-DT-2026-094",
    "issueDate": "2026-02-15",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "F05",
    "machineType": "Fujion",
    "downtimeMinutes": 10,
    "category": "IPC",
    "issueDetails": "Delay access or response",
    "actionPlan": "Cache cleared and restart done",
    "responsibility": "ATC",
    "closedDate": "2026-02-15",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-15T08:34:00Z"
  },
  {
    "id": "YOKO-DT-2026-095",
    "issueDate": "2026-02-15",
    "nature": "INFRA",
    "area": "Plant 4",
    "process": "Extrusion",
    "machineNo": "CFE_01",
    "machineType": "Duplex 10*8 Ext with 100mtr cooling line",
    "downtimeMinutes": 15,
    "category": "IPC",
    "issueDetails": "Delay access or response",
    "actionPlan": "Cache cleared and restart done",
    "responsibility": "ATC",
    "closedDate": "2026-02-15",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-15T08:35:00Z"
  },
  {
    "id": "YOKO-DT-2026-096",
    "issueDate": "2026-02-16",
    "nature": "INFRA",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US4",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "Printer restart done",
    "responsibility": "ATC",
    "closedDate": "2026-02-16",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-16T08:36:00Z"
  },
  {
    "id": "YOKO-DT-2026-097",
    "issueDate": "2026-02-16",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWMRG_02",
    "machineType": "Marangoni",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Tag values not write in PLC",
    "actionPlan": "Manually reset done",
    "responsibility": "MELSS",
    "closedDate": "2026-02-16",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-16T08:37:00Z"
  },
  {
    "id": "YOKO-DT-2026-098",
    "issueDate": "2026-02-16",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y08",
    "machineType": "YANTAI",
    "downtimeMinutes": 30,
    "category": "IPC",
    "issueDetails": "Delay access or response",
    "actionPlan": "Cache cleared and restart done",
    "responsibility": "ATC",
    "closedDate": "2026-02-16",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "IPC LAN port Disabled and Port not working, Configured to another LAN port.",
    "createdAt": "2026-02-16T08:38:00Z"
  },
  {
    "id": "YOKO-DT-2026-099",
    "issueDate": "2026-02-16",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "F02",
    "machineType": "Fujion",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Settings re-confgiruation done",
    "responsibility": "ATC",
    "closedDate": "2026-02-16",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-16T08:39:00Z"
  },
  {
    "id": "YOKO-DT-2026-100",
    "issueDate": "2026-02-16",
    "nature": "INFRA",
    "area": "Plant 4",
    "process": "Extrusion",
    "machineNo": "CFE_01",
    "machineType": "Duplex 10*8 Ext with 100mtr cooling line",
    "downtimeMinutes": 15,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-02-16",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "LAN Port Hanging, PC restarted and LAN cable disconnected and connected.",
    "createdAt": "2026-02-16T08:40:00Z"
  },
  {
    "id": "YOKO-DT-2026-101",
    "issueDate": "2026-02-18",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWFMD_01",
    "machineType": "Finemac",
    "downtimeMinutes": 10,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Callibration",
    "responsibility": "ATC",
    "closedDate": "2026-02-18",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-18T08:41:00Z"
  },
  {
    "id": "YOKO-DT-2026-102",
    "issueDate": "2026-02-19",
    "nature": "INFRA",
    "area": "Plant 3",
    "process": "Slitter",
    "machineNo": "SLIT_01",
    "machineType": "Fabric Chafer Slitter",
    "downtimeMinutes": 15,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "Wifi disabled and connected through LAN",
    "responsibility": "MELSS",
    "closedDate": "2026-02-19",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-19T08:42:00Z"
  },
  {
    "id": "YOKO-DT-2026-103",
    "issueDate": "2026-02-20",
    "nature": "INFRA",
    "area": "Plant 4",
    "process": "Extrusion",
    "machineNo": "CFE_01",
    "machineType": "Duplex 10*8 Ext with 100mtr cooling line",
    "downtimeMinutes": 10,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-02-20",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-20T08:43:00Z"
  },
  {
    "id": "YOKO-DT-2026-104",
    "issueDate": "2026-02-20",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Band",
    "machineNo": "BBONL_02",
    "machineType": "Online Band Building 76\"",
    "downtimeMinutes": 10,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Callibration",
    "responsibility": "ATC",
    "closedDate": "2026-02-20",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-20T08:44:00Z"
  },
  {
    "id": "YOKO-DT-2026-105",
    "issueDate": "2026-02-21",
    "nature": "INFRA",
    "area": "Plant 2",
    "process": "Flipper",
    "machineNo": "FLP_01",
    "machineType": "Bead Flipping Machine 12\"-20\"",
    "downtimeMinutes": 60,
    "category": "IPC",
    "issueDetails": "Hardware issue",
    "actionPlan": "New IPC replaced",
    "responsibility": "ATC",
    "closedDate": "2026-02-21",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-21T08:45:00Z"
  },
  {
    "id": "YOKO-DT-2026-106",
    "issueDate": "2026-02-21",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y05",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "mouse not working",
    "actionPlan": "replaced the mouse",
    "responsibility": "ATC",
    "closedDate": "2026-02-21",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-21T08:46:00Z"
  },
  {
    "id": "YOKO-DT-2026-107",
    "issueDate": "2026-02-21",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US1",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "Infra",
    "issueDetails": "mouse not working",
    "actionPlan": "replaced the mouse",
    "responsibility": "ATC",
    "closedDate": "2026-02-21",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-21T08:47:00Z"
  },
  {
    "id": "YOKO-DT-2026-108",
    "issueDate": "2026-02-21",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y05",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Hardware issue",
    "actionPlan": "plug out and plug in the mouse cable",
    "responsibility": "ATC",
    "closedDate": "2026-02-21",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-21T08:48:00Z"
  },
  {
    "id": "YOKO-DT-2026-109",
    "issueDate": "2026-02-21",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "24-Dec",
    "machineType": "Taku TBM",
    "downtimeMinutes": 10,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-02-21",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-21T08:49:00Z"
  },
  {
    "id": "YOKO-DT-2026-110",
    "issueDate": "2026-02-21",
    "nature": "INFRA",
    "area": "Plant 4",
    "process": "Extrusion",
    "machineNo": "CFE_01",
    "machineType": "Duplex 10*8 Ext with 100mtr cooling line",
    "downtimeMinutes": 10,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-02-21",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-21T08:50:00Z"
  },
  {
    "id": "YOKO-DT-2026-111",
    "issueDate": "2026-02-22",
    "nature": "INFRA",
    "area": "Mixing Shed",
    "process": "Mixing",
    "machineNo": "MC_01",
    "machineType": "Master Chemical",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-02-22",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-22T08:51:00Z"
  },
  {
    "id": "YOKO-DT-2026-112",
    "issueDate": "2026-02-22",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y09",
    "machineType": "YANTAI",
    "downtimeMinutes": 10,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-02-22",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-22T08:52:00Z"
  },
  {
    "id": "YOKO-DT-2026-113",
    "issueDate": "2026-02-22",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Band",
    "machineNo": "BBONL_02",
    "machineType": "Online Band Building 76\"",
    "downtimeMinutes": 15,
    "category": "IPC",
    "issueDetails": "Delay access or response",
    "actionPlan": "Cache cleared and restart done",
    "responsibility": "ATC",
    "closedDate": "2026-02-22",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-22T08:53:00Z"
  },
  {
    "id": "YOKO-DT-2026-114",
    "issueDate": "2026-02-22",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Band",
    "machineNo": "BBOFL_01",
    "machineType": "76\"  Band Building Machine",
    "downtimeMinutes": 10,
    "category": "IPC",
    "issueDetails": "Unable to login",
    "actionPlan": "Restart Done",
    "responsibility": "ATC",
    "closedDate": "2026-02-22",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-22T08:54:00Z"
  },
  {
    "id": "YOKO-DT-2026-115",
    "issueDate": "2026-02-23",
    "nature": "INFRA",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWMRG_02",
    "machineType": "Marangoni",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-02-23",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-23T08:55:00Z"
  },
  {
    "id": "YOKO-DT-2026-116",
    "issueDate": "2026-02-23",
    "nature": "INFRA",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWFMF_01",
    "machineType": "Finemac",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Delay access or response",
    "actionPlan": "Cache cleared and restart done",
    "responsibility": "ATC",
    "closedDate": "2026-02-23",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-23T08:56:00Z"
  },
  {
    "id": "YOKO-DT-2026-117",
    "issueDate": "2026-02-23",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y04",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-02-23",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-23T08:57:00Z"
  },
  {
    "id": "YOKO-DT-2026-118",
    "issueDate": "2026-02-24",
    "nature": "INFRA",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWMRG_06",
    "machineType": "Marangoni",
    "downtimeMinutes": 15,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-02-24",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-24T08:58:00Z"
  },
  {
    "id": "YOKO-DT-2026-119",
    "issueDate": "2026-02-25",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T02",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Continues restrat",
    "actionPlan": "Manually restarted",
    "responsibility": "ATC",
    "closedDate": "2026-02-25",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-25T08:59:00Z"
  },
  {
    "id": "YOKO-DT-2026-120",
    "issueDate": "2026-02-25",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Band",
    "machineNo": "BBONL_01",
    "machineType": "Online Band Building 56\"",
    "downtimeMinutes": 15,
    "category": "IPC",
    "issueDetails": "Auto update delay",
    "actionPlan": "Manually restarted",
    "responsibility": "ATC",
    "closedDate": "2026-02-25",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-25T08:00:00Z"
  },
  {
    "id": "YOKO-DT-2026-121",
    "issueDate": "2026-02-26",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y07",
    "machineType": "YANTAI",
    "downtimeMinutes": 10,
    "category": "Printer",
    "issueDetails": "Poor quality tag printing",
    "actionPlan": "Head cleaning done",
    "responsibility": "ATC",
    "closedDate": "2026-02-26",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-26T08:01:00Z"
  },
  {
    "id": "YOKO-DT-2026-122",
    "issueDate": "2026-02-26",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y14",
    "machineType": "YANTAI",
    "downtimeMinutes": 10,
    "category": "IPC",
    "issueDetails": "Delay access or response",
    "actionPlan": "Cache cleared and restart done",
    "responsibility": "ATC",
    "closedDate": "2026-02-26",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-26T08:02:00Z"
  },
  {
    "id": "YOKO-DT-2026-123",
    "issueDate": "2026-02-27",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWYFR_02",
    "machineType": "Yantai II Stage-16 - 20 inch - 1",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-02-27",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-27T08:03:00Z"
  },
  {
    "id": "YOKO-DT-2026-124",
    "issueDate": "2026-02-27",
    "nature": "INFRA",
    "area": "Plant 4",
    "process": "Extrusion",
    "machineNo": "CFE_02",
    "machineType": "Simplex 6\" Ext with 75mtr cooling line",
    "downtimeMinutes": 10,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Printer restart done",
    "responsibility": "ATC",
    "closedDate": "2026-02-27",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-27T08:04:00Z"
  },
  {
    "id": "YOKO-DT-2026-125",
    "issueDate": "2026-02-28",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y08",
    "machineType": "YANTAI",
    "downtimeMinutes": 10,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-02-28",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-28T08:05:00Z"
  },
  {
    "id": "YOKO-DT-2026-126",
    "issueDate": "2026-02-28",
    "nature": "INFRA",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWMRG_05",
    "machineType": "Marangoni",
    "downtimeMinutes": 120,
    "category": "IPC",
    "issueDetails": "hardware issue",
    "actionPlan": "Eletrical issue",
    "responsibility": "ATC",
    "closedDate": "2026-02-28",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-28T08:06:00Z"
  },
  {
    "id": "YOKO-DT-2026-127",
    "issueDate": "2026-02-28",
    "nature": "INFRA",
    "area": "Mixing Shed",
    "process": "Mixing",
    "machineNo": "MIX_01",
    "machineType": "Mixer-1 (430 LTR) Master",
    "downtimeMinutes": 10,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Reinsert the Cabel",
    "responsibility": "ATC",
    "closedDate": "2026-02-28",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-28T08:07:00Z"
  },
  {
    "id": "YOKO-DT-2026-128",
    "issueDate": "2026-02-28",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y09",
    "machineType": "YANTAI",
    "downtimeMinutes": 30,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Settings re-confgiruation done",
    "responsibility": "ATC",
    "closedDate": "2026-02-28",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-28T08:08:00Z"
  },
  {
    "id": "YOKO-DT-2026-129",
    "issueDate": "2026-02-28",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y10",
    "machineType": "YANTAI",
    "downtimeMinutes": 10,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-02-28",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-28T08:09:00Z"
  },
  {
    "id": "YOKO-DT-2026-130",
    "issueDate": "2026-02-28",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC-01",
    "machineType": "Biascutter 45-90 deg",
    "downtimeMinutes": 10,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Settings re-confgiruation done",
    "responsibility": "ATC",
    "closedDate": "2026-02-28",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-28T08:10:00Z"
  },
  {
    "id": "YOKO-DT-2026-131",
    "issueDate": "2026-02-28",
    "nature": "INFRA",
    "area": "Plant 3",
    "process": "Bead Winding",
    "machineNo": "BW_01",
    "machineType": "Bead Winding # 1 (8\"-38\")",
    "downtimeMinutes": 10,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Callibration",
    "responsibility": "ATC",
    "closedDate": "2026-02-28",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-02-28T08:11:00Z"
  },
  {
    "id": "YOKO-DT-2026-132",
    "issueDate": "2026-03-01",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T05",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-03-01",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-01T08:12:00Z"
  },
  {
    "id": "YOKO-DT-2026-133",
    "issueDate": "2026-03-01",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Band",
    "machineNo": "BBONL_01",
    "machineType": "Online Band Building 56\"",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Callibration",
    "responsibility": "ATC",
    "closedDate": "2026-03-01",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-01T08:13:00Z"
  },
  {
    "id": "YOKO-DT-2026-134",
    "issueDate": "2026-03-02",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y08",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-03-02",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-02T08:14:00Z"
  },
  {
    "id": "YOKO-DT-2026-135",
    "issueDate": "2026-03-02",
    "nature": "INFRA",
    "area": "Plant 4",
    "process": "Extrusion",
    "machineNo": "CFE_01",
    "machineType": "Duplex 10*8 Ext with 100mtr cooling line",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Continues restrat",
    "actionPlan": "Manually restarted",
    "responsibility": "ATC",
    "closedDate": "2026-03-02",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-02T08:15:00Z"
  },
  {
    "id": "YOKO-DT-2026-136",
    "issueDate": "2026-03-03",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T05",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-03-03",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-03T08:16:00Z"
  },
  {
    "id": "YOKO-DT-2026-137",
    "issueDate": "2026-03-03",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T06",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-03-03",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-03T08:17:00Z"
  },
  {
    "id": "YOKO-DT-2026-138",
    "issueDate": "2026-03-03",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Slitter",
    "machineNo": "SLIT_02",
    "machineType": "Gum Slitter",
    "downtimeMinutes": 15,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "New scanner changed",
    "responsibility": "ATC",
    "closedDate": "2026-03-03",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-03T08:18:00Z"
  },
  {
    "id": "YOKO-DT-2026-139",
    "issueDate": "2026-03-04",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC-02",
    "machineType": "Biascutter 45-90 deg",
    "downtimeMinutes": 10,
    "category": "Infra",
    "issueDetails": "Network not available",
    "actionPlan": "Switch side power down and make up with help of engg",
    "responsibility": "ATC",
    "closedDate": "2026-03-04",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-04T08:19:00Z"
  },
  {
    "id": "YOKO-DT-2026-140",
    "issueDate": "2026-03-05",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y02",
    "machineType": "YANTAI",
    "downtimeMinutes": 10,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Reinsert the Cabel",
    "responsibility": "ATC",
    "closedDate": "2026-03-05",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-05T08:20:00Z"
  },
  {
    "id": "YOKO-DT-2026-141",
    "issueDate": "2026-03-06",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y08",
    "machineType": "YANTAI",
    "downtimeMinutes": 10,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-03-06",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-06T08:21:00Z"
  },
  {
    "id": "YOKO-DT-2026-142",
    "issueDate": "2026-03-07",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US3",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-03-07",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-07T08:22:00Z"
  },
  {
    "id": "YOKO-DT-2026-143",
    "issueDate": "2026-03-07",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y02",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-03-07",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-07T08:23:00Z"
  },
  {
    "id": "YOKO-DT-2026-144",
    "issueDate": "2026-03-07",
    "nature": "INFRA",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWMRG_02",
    "machineType": "Marangoni",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-03-07",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-07T08:24:00Z"
  },
  {
    "id": "YOKO-DT-2026-145",
    "issueDate": "2026-03-07",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Band",
    "machineNo": "BBOFL_02",
    "machineType": "56\"  Band Building Machine",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-03-07",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-07T08:25:00Z"
  },
  {
    "id": "YOKO-DT-2026-146",
    "issueDate": "2026-03-08",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y18",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Settings re-confgiruation done",
    "responsibility": "ATC",
    "closedDate": "2026-03-08",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-08T08:26:00Z"
  },
  {
    "id": "YOKO-DT-2026-147",
    "issueDate": "2026-03-08",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y08",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-03-08",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-08T08:27:00Z"
  },
  {
    "id": "YOKO-DT-2026-148",
    "issueDate": "2026-03-08",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y07",
    "machineType": "YANTAI",
    "downtimeMinutes": 10,
    "category": "Printer",
    "issueDetails": "Poor quality tag printing",
    "actionPlan": "Head cleaning done",
    "responsibility": "ATC",
    "closedDate": "2026-03-08",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-08T08:28:00Z"
  },
  {
    "id": "YOKO-DT-2026-149",
    "issueDate": "2026-03-10",
    "nature": "INFRA",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US4",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-03-10",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-10T08:29:00Z"
  },
  {
    "id": "YOKO-DT-2026-150",
    "issueDate": "2026-03-10",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "15",
    "machineType": "YANTAI",
    "downtimeMinutes": 15,
    "category": "Printer",
    "issueDetails": "Poor quality tag printing",
    "actionPlan": "New Head replaced",
    "responsibility": "ATC",
    "closedDate": "2026-03-10",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-10T08:30:00Z"
  },
  {
    "id": "YOKO-DT-2026-151",
    "issueDate": "2026-03-11",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y15",
    "machineType": "YANTAI",
    "downtimeMinutes": 10,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-03-11",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-11T08:31:00Z"
  },
  {
    "id": "YOKO-DT-2026-152",
    "issueDate": "2026-03-12",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y08",
    "machineType": "YANTAI",
    "downtimeMinutes": 15,
    "category": "IPC",
    "issueDetails": "Delay access or response",
    "actionPlan": "Cache cleared and restart done",
    "responsibility": "ATC",
    "closedDate": "2026-03-12",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-12T08:32:00Z"
  },
  {
    "id": "YOKO-DT-2026-153",
    "issueDate": "2026-03-13",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y08",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Delay access or response",
    "actionPlan": "Cache cleared and restart done",
    "responsibility": "ATC",
    "closedDate": "2026-03-13",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-13T08:33:00Z"
  },
  {
    "id": "YOKO-DT-2026-154",
    "issueDate": "2026-03-12",
    "nature": "INFRA",
    "area": "Mixing Shed",
    "process": "Mixing",
    "machineNo": "MIX_04",
    "machineType": "Mixer-4 (430 LTR) Master / Final",
    "downtimeMinutes": 15,
    "category": "Infra",
    "issueDetails": "Network not available",
    "actionPlan": "",
    "responsibility": "ATC",
    "closedDate": "2026-03-12",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "ReCrimping done",
    "createdAt": "2026-03-12T08:34:00Z"
  },
  {
    "id": "YOKO-DT-2026-155",
    "issueDate": "2026-03-13",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWFMF_02",
    "machineType": "Radial Finemac",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-03-13",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-13T08:35:00Z"
  },
  {
    "id": "YOKO-DT-2026-156",
    "issueDate": "2026-03-12",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Band",
    "machineNo": "BBONL_01",
    "machineType": "Online Band Building 56\"",
    "downtimeMinutes": 10,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "New battery replaced",
    "responsibility": "ATC",
    "closedDate": "",
    "solvedBy": "Srinivas",
    "status": "Open",
    "remarks": "",
    "createdAt": "2026-03-12T08:36:00Z"
  },
  {
    "id": "YOKO-DT-2026-157",
    "issueDate": "2026-03-12",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y11",
    "machineType": "YANTAI",
    "downtimeMinutes": 10,
    "category": "NSNL",
    "issueDetails": "Tag values not write in PLC",
    "actionPlan": "Manually reset done",
    "responsibility": "ATC",
    "closedDate": "2026-03-12",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-12T08:37:00Z"
  },
  {
    "id": "YOKO-DT-2026-158",
    "issueDate": "2026-03-08",
    "nature": "MES",
    "area": "Plant 4",
    "process": "Painting",
    "machineNo": "PTAUT_01",
    "machineType": "Auto paint booth",
    "downtimeMinutes": 10,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "New battery replaced",
    "responsibility": "ATC",
    "closedDate": "2026-03-08",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-08T08:38:00Z"
  },
  {
    "id": "YOKO-DT-2026-159",
    "issueDate": "2026-03-06",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y15",
    "machineType": "YANTAI",
    "downtimeMinutes": 15,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-03-06",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-06T08:39:00Z"
  },
  {
    "id": "YOKO-DT-2026-160",
    "issueDate": "2026-03-14",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US1",
    "machineType": "Unistage",
    "downtimeMinutes": 20,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-03-14",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-14T08:40:00Z"
  },
  {
    "id": "YOKO-DT-2026-161",
    "issueDate": "2026-03-14",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y11",
    "machineType": "YANTAI",
    "downtimeMinutes": 10,
    "category": "Printer",
    "issueDetails": "Poor quality tag printing",
    "actionPlan": "Darkness increased",
    "responsibility": "ATC",
    "closedDate": "2026-03-14",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-14T08:41:00Z"
  },
  {
    "id": "YOKO-DT-2026-162",
    "issueDate": "2026-03-16",
    "nature": "INFRA",
    "area": "Plant 4",
    "process": "Curing",
    "machineNo": "CU_A06",
    "machineType": "A-Line",
    "downtimeMinutes": 8,
    "category": "Infra",
    "issueDetails": "Network not available",
    "actionPlan": "Switch hanging and restart done",
    "responsibility": "ATC",
    "closedDate": "2026-03-16",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "Need to be lay the LAN cable for C6 Machine and 8 Port HUB switch need to be raplace.",
    "createdAt": "2026-03-16T08:42:00Z"
  },
  {
    "id": "YOKO-DT-2026-163",
    "issueDate": "2026-03-15",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T05",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-03-15",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "PLC Bad Condition error",
    "createdAt": "2026-03-15T08:43:00Z"
  },
  {
    "id": "YOKO-DT-2026-164",
    "issueDate": "2026-03-15",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "F02",
    "machineType": "Fujion",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-03-15",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "SPEC File not open",
    "createdAt": "2026-03-15T08:44:00Z"
  },
  {
    "id": "YOKO-DT-2026-165",
    "issueDate": "2026-03-14",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y16",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-03-14",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-14T08:45:00Z"
  },
  {
    "id": "YOKO-DT-2026-166",
    "issueDate": "2026-03-16",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y08",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-03-16",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-16T08:46:00Z"
  },
  {
    "id": "YOKO-DT-2026-167",
    "issueDate": "2026-03-16",
    "nature": "INFRA",
    "area": "Plant 4",
    "process": "Curing",
    "machineNo": "CU_C06_1",
    "machineType": "C-Line",
    "downtimeMinutes": 10,
    "category": "Infra",
    "issueDetails": "Network not available",
    "actionPlan": "Switch hanging and restart done",
    "responsibility": "ATC",
    "closedDate": "2026-03-16",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-16T08:47:00Z"
  },
  {
    "id": "YOKO-DT-2026-168",
    "issueDate": "2026-03-17",
    "nature": "INFRA",
    "area": "Mixing Shed",
    "process": "Mixing",
    "machineNo": "MIX_01",
    "machineType": "Mixer-1 (430 LTR) Master",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-03-17",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-17T08:48:00Z"
  },
  {
    "id": "YOKO-DT-2026-169",
    "issueDate": "2026-03-17",
    "nature": "INFRA",
    "area": "Mixing Shed",
    "process": "Mixing",
    "machineNo": "MIX_03",
    "machineType": "Mixer-1 (430 LTR) Master",
    "downtimeMinutes": 10,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-03-17",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-17T08:49:00Z"
  },
  {
    "id": "YOKO-DT-2026-170",
    "issueDate": "2026-03-17",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y14",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-03-17",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-17T08:50:00Z"
  },
  {
    "id": "YOKO-DT-2026-171",
    "issueDate": "2026-03-18",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y01",
    "machineType": "YANTAI",
    "downtimeMinutes": 10,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-03-18",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-18T08:51:00Z"
  },
  {
    "id": "YOKO-DT-2026-172",
    "issueDate": "2026-03-18",
    "nature": "MES",
    "area": "Plant 4",
    "process": "Curing",
    "machineNo": "CU_A05",
    "machineType": "A-Line",
    "downtimeMinutes": 5,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Configuration done",
    "responsibility": "ATC",
    "closedDate": "2026-03-18",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-18T08:52:00Z"
  },
  {
    "id": "YOKO-DT-2026-173",
    "issueDate": "2026-03-20",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y11",
    "machineType": "YANTAI",
    "downtimeMinutes": 60,
    "category": "Infra",
    "issueDetails": "Network not available",
    "actionPlan": "New switch replaced",
    "responsibility": "ATC",
    "closedDate": "2026-03-20",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-20T08:53:00Z"
  },
  {
    "id": "YOKO-DT-2026-174",
    "issueDate": "2026-03-20",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y12",
    "machineType": "YANTAI",
    "downtimeMinutes": 60,
    "category": "Infra",
    "issueDetails": "Network not available",
    "actionPlan": "New switch replaced",
    "responsibility": "ATC",
    "closedDate": "2026-03-20",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-20T08:54:00Z"
  },
  {
    "id": "YOKO-DT-2026-175",
    "issueDate": "2026-03-20",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y13",
    "machineType": "YANTAI",
    "downtimeMinutes": 60,
    "category": "Infra",
    "issueDetails": "Network not available",
    "actionPlan": "New switch replaced",
    "responsibility": "ATC",
    "closedDate": "2026-03-20",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-20T08:55:00Z"
  },
  {
    "id": "YOKO-DT-2026-176",
    "issueDate": "2026-03-20",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y14",
    "machineType": "YANTAI",
    "downtimeMinutes": 60,
    "category": "Infra",
    "issueDetails": "Network not available",
    "actionPlan": "New switch replaced",
    "responsibility": "ATC",
    "closedDate": "2026-03-20",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-20T08:56:00Z"
  },
  {
    "id": "YOKO-DT-2026-177",
    "issueDate": "2026-03-20",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "F01",
    "machineType": "Fujion",
    "downtimeMinutes": 60,
    "category": "Infra",
    "issueDetails": "Network not available",
    "actionPlan": "New switch replaced",
    "responsibility": "ATC",
    "closedDate": "2026-03-20",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-20T08:57:00Z"
  },
  {
    "id": "YOKO-DT-2026-178",
    "issueDate": "2026-03-20",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "F02",
    "machineType": "Fujion",
    "downtimeMinutes": 60,
    "category": "Infra",
    "issueDetails": "Network not available",
    "actionPlan": "New switch replaced",
    "responsibility": "ATC",
    "closedDate": "2026-03-20",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-20T08:58:00Z"
  },
  {
    "id": "YOKO-DT-2026-179",
    "issueDate": "2026-03-20",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "F03",
    "machineType": "Fujion",
    "downtimeMinutes": 60,
    "category": "Infra",
    "issueDetails": "Network not available",
    "actionPlan": "New switch replaced",
    "responsibility": "ATC",
    "closedDate": "2026-03-20",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-20T08:59:00Z"
  },
  {
    "id": "YOKO-DT-2026-180",
    "issueDate": "2026-03-20",
    "nature": "INFRA",
    "area": "4Roll shed",
    "process": "3Roll",
    "machineNo": "3ROLL_01",
    "machineType": "3-Roll Calendar Dia 560*1650",
    "downtimeMinutes": 10,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-03-20",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-20T08:00:00Z"
  },
  {
    "id": "YOKO-DT-2026-181",
    "issueDate": "2026-03-20",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y18",
    "machineType": "YANTAI",
    "downtimeMinutes": 15,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-03-20",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-20T08:01:00Z"
  },
  {
    "id": "YOKO-DT-2026-182",
    "issueDate": "2026-03-21",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "F03",
    "machineType": "Fujion",
    "downtimeMinutes": 10,
    "category": "IPC",
    "issueDetails": "Auto update delay",
    "actionPlan": "Manually restarted",
    "responsibility": "ATC",
    "closedDate": "2026-03-21",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-21T08:02:00Z"
  },
  {
    "id": "YOKO-DT-2026-183",
    "issueDate": "2026-03-21",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y14",
    "machineType": "YANTAI",
    "downtimeMinutes": 11,
    "category": "IPC",
    "issueDetails": "Continues restrat",
    "actionPlan": "Manually restarted",
    "responsibility": "ATC",
    "closedDate": "2026-03-21",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-21T08:03:00Z"
  },
  {
    "id": "YOKO-DT-2026-184",
    "issueDate": "2026-03-22",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Band",
    "machineNo": "BBONL_01",
    "machineType": "Online Band Building 56\"",
    "downtimeMinutes": 12,
    "category": "IPC",
    "issueDetails": "Unable to login",
    "actionPlan": "Restart Done",
    "responsibility": "ATC",
    "closedDate": "2026-03-22",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-22T08:04:00Z"
  },
  {
    "id": "YOKO-DT-2026-185",
    "issueDate": "2026-03-22",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T08",
    "machineType": "Taku TBM",
    "downtimeMinutes": 8,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-03-22",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-22T08:05:00Z"
  },
  {
    "id": "YOKO-DT-2026-186",
    "issueDate": "2026-03-22",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y23",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-03-22",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-22T08:06:00Z"
  },
  {
    "id": "YOKO-DT-2026-187",
    "issueDate": "2026-03-26",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "F03",
    "machineType": "Fujion",
    "downtimeMinutes": 15,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-03-26",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-26T08:07:00Z"
  },
  {
    "id": "YOKO-DT-2026-188",
    "issueDate": "2026-03-27",
    "nature": "MES",
    "area": "4Roll shed",
    "process": "3Roll",
    "machineNo": "3ROLL_01",
    "machineType": "3-Roll Calendar Dia 560*1650",
    "downtimeMinutes": 10,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "New battery replaced",
    "responsibility": "ATC",
    "closedDate": "2026-03-27",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-27T08:08:00Z"
  },
  {
    "id": "YOKO-DT-2026-189",
    "issueDate": "2026-03-26",
    "nature": "MES",
    "area": "FID",
    "process": "FID",
    "machineNo": "FID",
    "machineType": "FID",
    "downtimeMinutes": 10,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Scanner was set to accessability mode on which reads screen",
    "responsibility": "ATC",
    "closedDate": "2026-03-26",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "should make sure that operators don't turn on screen reading or accessability on",
    "createdAt": "2026-03-26T08:09:00Z"
  },
  {
    "id": "YOKO-DT-2026-190",
    "issueDate": "2026-03-27",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Flipper",
    "machineNo": "FLP_03",
    "machineType": "Bead Flipping Machine 32\"-46\"",
    "downtimeMinutes": 10,
    "category": "keyboard",
    "issueDetails": "Keyboard not working",
    "actionPlan": "Replaced with another  keyboard",
    "responsibility": "ATC",
    "closedDate": "2026-03-27",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-27T08:10:00Z"
  },
  {
    "id": "YOKO-DT-2026-191",
    "issueDate": "2026-03-27",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "F03",
    "machineType": "Fujion",
    "downtimeMinutes": 5,
    "category": "MES",
    "issueDetails": "Slowness or stopped",
    "actionPlan": "Manually restarted apache",
    "responsibility": "ATC",
    "closedDate": "2026-03-27",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-27T08:11:00Z"
  },
  {
    "id": "YOKO-DT-2026-192",
    "issueDate": "2026-03-27",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y21",
    "machineType": "YANTAI",
    "downtimeMinutes": 10,
    "category": "Infra",
    "issueDetails": "Network not available",
    "actionPlan": "Turned on power for rack",
    "responsibility": "ATC",
    "closedDate": "2026-03-27",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-27T08:12:00Z"
  },
  {
    "id": "YOKO-DT-2026-193",
    "issueDate": "2026-03-18",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y15",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-03-18",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-18T08:13:00Z"
  },
  {
    "id": "YOKO-DT-2026-194",
    "issueDate": "2026-03-18",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y03",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-03-18",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-18T08:14:00Z"
  },
  {
    "id": "YOKO-DT-2026-195",
    "issueDate": "2026-03-18",
    "nature": "INFRA",
    "area": "Plant 3",
    "process": "Slitter",
    "machineNo": "SLIT_02",
    "machineType": "Gum Slitter",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-03-18",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-18T08:15:00Z"
  },
  {
    "id": "YOKO-DT-2026-196",
    "issueDate": "2026-03-21",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y23",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-03-21",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-21T08:16:00Z"
  },
  {
    "id": "YOKO-DT-2026-197",
    "issueDate": "2026-03-22",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y23",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-03-22",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-22T08:17:00Z"
  },
  {
    "id": "YOKO-DT-2026-198",
    "issueDate": "2026-03-22",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y15",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-03-22",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-22T08:18:00Z"
  },
  {
    "id": "YOKO-DT-2026-199",
    "issueDate": "2026-03-25",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T06",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-03-25",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-25T08:19:00Z"
  },
  {
    "id": "YOKO-DT-2026-200",
    "issueDate": "2026-03-25",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T03",
    "machineType": "Taku TBM",
    "downtimeMinutes": 10,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Settings re-confgiruation done",
    "responsibility": "ATC",
    "closedDate": "2026-03-25",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-25T08:20:00Z"
  },
  {
    "id": "YOKO-DT-2026-201",
    "issueDate": "2026-03-27",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Band",
    "machineNo": "BBOFL_01",
    "machineType": "76\"  Band Building Machine",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-03-27",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-27T08:21:00Z"
  },
  {
    "id": "YOKO-DT-2026-202",
    "issueDate": "2026-03-29",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Band",
    "machineNo": "BBONL_03",
    "machineType": "Online Band Building 96\"",
    "downtimeMinutes": 15,
    "category": "NSNL",
    "issueDetails": "Tag values not write in PLC",
    "actionPlan": "Manually reset done",
    "responsibility": "ATC",
    "closedDate": "2026-03-29",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-29T08:22:00Z"
  },
  {
    "id": "YOKO-DT-2026-203",
    "issueDate": "2026-03-29",
    "nature": "INFRA",
    "area": "Plant 4",
    "process": "Extrusion",
    "machineNo": "CFE_01",
    "machineType": "Duplex 10*8 Ext with 100mtr cooling line",
    "downtimeMinutes": 15,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-03-29",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-29T08:23:00Z"
  },
  {
    "id": "YOKO-DT-2026-204",
    "issueDate": "2026-03-29",
    "nature": "INFRA",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWFMF_01",
    "machineType": "Finemac",
    "downtimeMinutes": 10,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-03-29",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-29T08:24:00Z"
  },
  {
    "id": "YOKO-DT-2026-205",
    "issueDate": "2026-03-23",
    "nature": "MES",
    "area": "Plant 4",
    "process": "Painting",
    "machineNo": "PTAUT_01",
    "machineType": "Auto paint booth",
    "downtimeMinutes": 30,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "New battery replaced",
    "responsibility": "ATC",
    "closedDate": "2026-03-23",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-23T08:25:00Z"
  },
  {
    "id": "YOKO-DT-2026-206",
    "issueDate": "2026-03-30",
    "nature": "INFRA",
    "area": "Plant 4",
    "process": "Extrusion",
    "machineNo": "CFE_01",
    "machineType": "Duplex 10*8 Ext with 100mtr cooling line",
    "downtimeMinutes": 30,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN removed and connected through WIFI",
    "responsibility": "ATC",
    "closedDate": "2026-03-30",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-30T08:26:00Z"
  },
  {
    "id": "YOKO-DT-2026-207",
    "issueDate": "2026-03-30",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Band",
    "machineNo": "BBONL_03",
    "machineType": "Online Band Building 96\"",
    "downtimeMinutes": 15,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-03-30",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-30T08:27:00Z"
  },
  {
    "id": "YOKO-DT-2026-208",
    "issueDate": "2026-03-30",
    "nature": "INFRA",
    "area": "Plant 3",
    "process": "Slitter",
    "machineNo": "SLIT_02",
    "machineType": "Gum Slitter",
    "downtimeMinutes": 10,
    "category": "IPC",
    "issueDetails": "Delay access or response",
    "actionPlan": "Cache cleared and restart done",
    "responsibility": "ATC",
    "closedDate": "2026-03-30",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-30T08:28:00Z"
  },
  {
    "id": "YOKO-DT-2026-209",
    "issueDate": "2026-03-28",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y01",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "MELSS",
    "closedDate": "2026-03-28",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-28T08:29:00Z"
  },
  {
    "id": "YOKO-DT-2026-210",
    "issueDate": "2026-03-30",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Band",
    "machineNo": "BBONL_01",
    "machineType": "Online Band Building 56\"",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Callibration",
    "responsibility": "ATC",
    "closedDate": "2026-03-30",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-30T08:30:00Z"
  },
  {
    "id": "YOKO-DT-2026-211",
    "issueDate": "2026-03-31",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T04",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Tag values not write in PLC",
    "actionPlan": "Manually reset done",
    "responsibility": "ATC",
    "closedDate": "2026-03-31",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-31T08:31:00Z"
  },
  {
    "id": "YOKO-DT-2026-212",
    "issueDate": "2026-03-28",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y10",
    "machineType": "YANTAI",
    "downtimeMinutes": 30,
    "category": "Infra",
    "issueDetails": "Network not available",
    "actionPlan": "Switch side power down and make up with help of engg",
    "responsibility": "ATC",
    "closedDate": "2026-03-28",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-28T08:32:00Z"
  },
  {
    "id": "YOKO-DT-2026-213",
    "issueDate": "2026-03-28",
    "nature": "INFRA",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWMRG_02",
    "machineType": "Marangoni",
    "downtimeMinutes": 30,
    "category": "Infra",
    "issueDetails": "Network not available",
    "actionPlan": "Switch side power down and make up with help of engg",
    "responsibility": "ATC",
    "closedDate": "2026-03-28",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-28T08:33:00Z"
  },
  {
    "id": "YOKO-DT-2026-214",
    "issueDate": "2026-03-28",
    "nature": "INFRA",
    "area": "Plant 4",
    "process": "Extrusion",
    "machineNo": "CFE_01",
    "machineType": "Duplex 10*8 Ext with 100mtr cooling line",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-03-28",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-28T08:34:00Z"
  },
  {
    "id": "YOKO-DT-2026-215",
    "issueDate": "2026-03-29",
    "nature": "INFRA",
    "area": "Plant 4",
    "process": "Extrusion",
    "machineNo": "CFE_01",
    "machineType": "Duplex 10*8 Ext with 100mtr cooling line",
    "downtimeMinutes": 15,
    "category": "IPC",
    "issueDetails": "Delay access or response",
    "actionPlan": "Cache cleared and restart done",
    "responsibility": "ATC",
    "closedDate": "2026-03-29",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-29T08:35:00Z"
  },
  {
    "id": "YOKO-DT-2026-216",
    "issueDate": "2026-03-31",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y12",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "MES",
    "issueDetails": "RM-QR code data not coming to MES",
    "actionPlan": "Manually inserted",
    "responsibility": "MELSS",
    "closedDate": "2026-03-31",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-31T08:36:00Z"
  },
  {
    "id": "YOKO-DT-2026-217",
    "issueDate": "2026-03-31",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T04",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-03-31",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-31T08:37:00Z"
  },
  {
    "id": "YOKO-DT-2026-218",
    "issueDate": "2026-03-31",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Settings re-confgiruation done",
    "responsibility": "ATC",
    "closedDate": "2026-03-31",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-31T08:38:00Z"
  },
  {
    "id": "YOKO-DT-2026-219",
    "issueDate": "2026-03-31",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Band",
    "machineNo": "BBONL_01",
    "machineType": "Online Band Building 56\"",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-03-31",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-31T08:39:00Z"
  },
  {
    "id": "YOKO-DT-2026-220",
    "issueDate": "2026-04-01",
    "nature": "MES",
    "area": "Mixing Shed",
    "process": "Mixing",
    "machineNo": "MIX_04",
    "machineType": "Mixer-4 (430 LTR) Master / Final",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Tag values not write in PLC",
    "actionPlan": "Manually reset done",
    "responsibility": "MELSS",
    "closedDate": "2026-04-01",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-01T08:40:00Z"
  },
  {
    "id": "YOKO-DT-2026-221",
    "issueDate": "2026-04-01",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWMRG_01",
    "machineType": "Marangoni",
    "downtimeMinutes": 5,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "New battery replaced",
    "responsibility": "ATC",
    "closedDate": "2026-04-01",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-01T08:41:00Z"
  },
  {
    "id": "YOKO-DT-2026-222",
    "issueDate": "2026-04-01",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T06",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-04-01",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-01T08:42:00Z"
  },
  {
    "id": "YOKO-DT-2026-223",
    "issueDate": "2026-04-01",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Band",
    "machineNo": "BBONL_02",
    "machineType": "Online Band Building 76\"",
    "downtimeMinutes": 10,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Callibration",
    "responsibility": "ATC",
    "closedDate": "2026-04-01",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-01T08:43:00Z"
  },
  {
    "id": "YOKO-DT-2026-224",
    "issueDate": "2026-04-01",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T08",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "MES",
    "issueDetails": "RM-QR code data not coming to MES",
    "actionPlan": "Manually inserted",
    "responsibility": "ATC",
    "closedDate": "2026-04-01",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-01T08:44:00Z"
  },
  {
    "id": "YOKO-DT-2026-225",
    "issueDate": "2026-03-01",
    "nature": "INFRA",
    "area": "Plant 4",
    "process": "Extrusion",
    "machineNo": "CFE_01",
    "machineType": "Duplex 10*8 Ext with 100mtr cooling line",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-03-01",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-03-01T08:45:00Z"
  },
  {
    "id": "YOKO-DT-2026-226",
    "issueDate": "2026-04-01",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y12",
    "machineType": "YANTAI",
    "downtimeMinutes": 10,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-04-01",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-01T08:46:00Z"
  },
  {
    "id": "YOKO-DT-2026-227",
    "issueDate": "2026-04-02",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWMRG_05",
    "machineType": "Marangoni",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Callibration",
    "responsibility": "ATC",
    "closedDate": "2026-04-02",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-02T08:47:00Z"
  },
  {
    "id": "YOKO-DT-2026-228",
    "issueDate": "2026-04-02",
    "nature": "INFRA",
    "area": "Mixing Shed",
    "process": "Mixing",
    "machineNo": "MIX_05",
    "machineType": "Mixer-5 (430 LTR) Final",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Delay access or response",
    "actionPlan": "Cache cleared and restart done",
    "responsibility": "ATC",
    "closedDate": "2026-04-02",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-02T08:48:00Z"
  },
  {
    "id": "YOKO-DT-2026-229",
    "issueDate": "2026-04-02",
    "nature": "INFRA",
    "area": "Plant 4",
    "process": "Extrusion",
    "machineNo": "CFE_03",
    "machineType": "Duplex 8*6 extruder",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Delay access or response",
    "actionPlan": "Cache cleared and restart done",
    "responsibility": "ATC",
    "closedDate": "2026-04-02",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-02T08:49:00Z"
  },
  {
    "id": "YOKO-DT-2026-230",
    "issueDate": "2026-04-02",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T02",
    "machineType": "Taku TBM",
    "downtimeMinutes": 10,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-04-02",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-02T08:50:00Z"
  },
  {
    "id": "YOKO-DT-2026-231",
    "issueDate": "2026-04-02",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y15",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-04-02",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-02T08:51:00Z"
  },
  {
    "id": "YOKO-DT-2026-232",
    "issueDate": "2026-04-02",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC-03",
    "machineType": "Biascutter 20-90 deg",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Delay access or response",
    "actionPlan": "Cache cleared and restart done",
    "responsibility": "ATC",
    "closedDate": "2026-04-02",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-02T08:52:00Z"
  },
  {
    "id": "YOKO-DT-2026-233",
    "issueDate": "2026-04-02",
    "nature": "INFRA",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US3",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Continues restrat",
    "actionPlan": "Manually restarted",
    "responsibility": "ATC",
    "closedDate": "2026-04-02",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-02T08:53:00Z"
  },
  {
    "id": "YOKO-DT-2026-234",
    "issueDate": "2026-04-03",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWMRG_05",
    "machineType": "Marangoni",
    "downtimeMinutes": 10,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-04-03",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-03T08:54:00Z"
  },
  {
    "id": "YOKO-DT-2026-235",
    "issueDate": "2026-04-03",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 10,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Callibration",
    "responsibility": "ATC",
    "closedDate": "2026-04-03",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-03T08:55:00Z"
  },
  {
    "id": "YOKO-DT-2026-236",
    "issueDate": "2026-04-03",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-04-03",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-03T08:56:00Z"
  },
  {
    "id": "YOKO-DT-2026-237",
    "issueDate": "2026-04-03",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "F01",
    "machineType": "Fujion",
    "downtimeMinutes": 15,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "New battery replaced",
    "responsibility": "ATC",
    "closedDate": "2026-04-03",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-03T08:57:00Z"
  },
  {
    "id": "YOKO-DT-2026-238",
    "issueDate": "2026-04-03",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWMRG_05",
    "machineType": "Marangoni",
    "downtimeMinutes": 5,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-04-03",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-03T08:58:00Z"
  },
  {
    "id": "YOKO-DT-2026-239",
    "issueDate": "2026-04-03",
    "nature": "MES",
    "area": "Mixing Shed",
    "process": "Mixing",
    "machineNo": "MIX_05",
    "machineType": "Mixer-5 (430 LTR) Final",
    "downtimeMinutes": 10,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "Printer restart done",
    "responsibility": "ATC",
    "closedDate": "2026-04-03",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-03T08:59:00Z"
  },
  {
    "id": "YOKO-DT-2026-240",
    "issueDate": "2026-04-03",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWMRG_06",
    "machineType": "Marangoni",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-04-03",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-03T08:00:00Z"
  },
  {
    "id": "YOKO-DT-2026-241",
    "issueDate": "2026-04-03",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWFMF_01",
    "machineType": "Finemac",
    "downtimeMinutes": 5,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "New battery replaced",
    "responsibility": "ATC",
    "closedDate": "2026-04-03",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-03T08:01:00Z"
  },
  {
    "id": "YOKO-DT-2026-242",
    "issueDate": "2026-04-03",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y08",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-04-03",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-03T08:02:00Z"
  },
  {
    "id": "YOKO-DT-2026-243",
    "issueDate": "2026-04-04",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-04-04",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-04T08:03:00Z"
  },
  {
    "id": "YOKO-DT-2026-244",
    "issueDate": "2026-04-04",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-04-04",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-04T08:04:00Z"
  },
  {
    "id": "YOKO-DT-2026-245",
    "issueDate": "2026-04-04",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US1",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-04-04",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-04T08:05:00Z"
  },
  {
    "id": "YOKO-DT-2026-246",
    "issueDate": "2026-04-04",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Band",
    "machineNo": "BBONL_04",
    "machineType": "Online Band Building 132\"",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Unable to login",
    "actionPlan": "Restart Done",
    "responsibility": "ATC",
    "closedDate": "2026-04-04",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-04T08:06:00Z"
  },
  {
    "id": "YOKO-DT-2026-247",
    "issueDate": "2026-04-04",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y06",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-04-04",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-04T08:07:00Z"
  },
  {
    "id": "YOKO-DT-2026-248",
    "issueDate": "2026-04-04",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Band",
    "machineNo": "BBOFL_02",
    "machineType": "56\"  Band Building Machine",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-04-04",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-04T08:08:00Z"
  },
  {
    "id": "YOKO-DT-2026-249",
    "issueDate": "2026-04-05",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWFMF_01",
    "machineType": "Finemac",
    "downtimeMinutes": 5,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "New scanner changed",
    "responsibility": "ATC",
    "closedDate": "2026-04-05",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-05T08:09:00Z"
  },
  {
    "id": "YOKO-DT-2026-250",
    "issueDate": "2026-04-05",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T06",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-04-05",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-05T08:10:00Z"
  },
  {
    "id": "YOKO-DT-2026-251",
    "issueDate": "2026-04-05",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y02",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-04-05",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-05T08:11:00Z"
  },
  {
    "id": "YOKO-DT-2026-252",
    "issueDate": "2026-04-05",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "F09",
    "machineType": "Fujion",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "Printer restart done",
    "responsibility": "ATC",
    "closedDate": "2026-04-05",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-05T08:12:00Z"
  },
  {
    "id": "YOKO-DT-2026-253",
    "issueDate": "2026-04-05",
    "nature": "INFRA",
    "area": "Plant 4",
    "process": "Extrusion",
    "machineNo": "CFE_01",
    "machineType": "Duplex 10*8 Ext with 100mtr cooling line",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-04-05",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-05T08:13:00Z"
  },
  {
    "id": "YOKO-DT-2026-254",
    "issueDate": "2026-04-05",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y15",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Delay access or response",
    "actionPlan": "Cache cleared and restart done",
    "responsibility": "ATC",
    "closedDate": "2026-04-05",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-05T08:14:00Z"
  },
  {
    "id": "YOKO-DT-2026-255",
    "issueDate": "2026-04-05",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y02",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-04-05",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-05T08:15:00Z"
  },
  {
    "id": "YOKO-DT-2026-256",
    "issueDate": "2026-04-05",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y10",
    "machineType": "YANTAI",
    "downtimeMinutes": 15,
    "category": "Infra",
    "issueDetails": "Network not available",
    "actionPlan": "Switch side power down and make up with help of engg",
    "responsibility": "ATC",
    "closedDate": "2026-04-05",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-05T08:16:00Z"
  },
  {
    "id": "YOKO-DT-2026-257",
    "issueDate": "2026-04-05",
    "nature": "INFRA",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWMRG_02",
    "machineType": "Marangoni",
    "downtimeMinutes": 15,
    "category": "Infra",
    "issueDetails": "Network not available",
    "actionPlan": "Switch side power down and make up with help of engg",
    "responsibility": "ATC",
    "closedDate": "2026-04-05",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-05T08:17:00Z"
  },
  {
    "id": "YOKO-DT-2026-258",
    "issueDate": "2026-04-05",
    "nature": "INFRA",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWMRG_02",
    "machineType": "Marangoni",
    "downtimeMinutes": 5,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-04-05",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-05T08:18:00Z"
  },
  {
    "id": "YOKO-DT-2026-259",
    "issueDate": "2026-04-06",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWFMF_02",
    "machineType": "Radial Finemac",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-04-06",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-06T08:19:00Z"
  },
  {
    "id": "YOKO-DT-2026-260",
    "issueDate": "2026-04-06",
    "nature": "MES",
    "area": "Mixing Shed",
    "process": "Mixing",
    "machineNo": "MIX_01",
    "machineType": "Mixer-1 (430 LTR) Master",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Callibration",
    "responsibility": "MELSS",
    "closedDate": "2026-04-06",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-06T08:20:00Z"
  },
  {
    "id": "YOKO-DT-2026-261",
    "issueDate": "2026-04-06",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-04-06",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-06T08:21:00Z"
  },
  {
    "id": "YOKO-DT-2026-262",
    "issueDate": "2026-04-06",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "F08",
    "machineType": "Fujion",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-04-06",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-06T08:22:00Z"
  },
  {
    "id": "YOKO-DT-2026-263",
    "issueDate": "2026-04-06",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y05",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-04-06",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-06T08:23:00Z"
  },
  {
    "id": "YOKO-DT-2026-264",
    "issueDate": "2026-04-07",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWMRG_02",
    "machineType": "Marangoni",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-04-07",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-07T08:24:00Z"
  },
  {
    "id": "YOKO-DT-2026-265",
    "issueDate": "2026-04-07",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US3",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-04-07",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-07T08:25:00Z"
  },
  {
    "id": "YOKO-DT-2026-266",
    "issueDate": "2026-04-07",
    "nature": "INFRA",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US4",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-04-07",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-07T08:26:00Z"
  },
  {
    "id": "YOKO-DT-2026-267",
    "issueDate": "2026-04-07",
    "nature": "INFRA",
    "area": "Plant 3",
    "process": "Bead Winding",
    "machineNo": "BW_02",
    "machineType": "Bead Winding # 2 (15\"-58\")",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Callibration",
    "responsibility": "ATC",
    "closedDate": "2026-04-07",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-07T08:27:00Z"
  },
  {
    "id": "YOKO-DT-2026-268",
    "issueDate": "2026-04-07",
    "nature": "INFRA",
    "area": "IT infra",
    "process": "All",
    "machineNo": "All",
    "machineType": "All",
    "downtimeMinutes": 30,
    "category": "Infra",
    "issueDetails": "Network not available",
    "actionPlan": "Switch side power down and make up with help of engg",
    "responsibility": "ATC",
    "closedDate": "2026-04-07",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-07T08:28:00Z"
  },
  {
    "id": "YOKO-DT-2026-269",
    "issueDate": "2026-04-08",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T05",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-04-08",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-08T08:29:00Z"
  },
  {
    "id": "YOKO-DT-2026-270",
    "issueDate": "2026-04-08",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y08",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-04-08",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-08T08:30:00Z"
  },
  {
    "id": "YOKO-DT-2026-271",
    "issueDate": "2026-04-08",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y08",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-04-08",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-08T08:31:00Z"
  },
  {
    "id": "YOKO-DT-2026-272",
    "issueDate": "2026-04-08",
    "nature": "INFRA",
    "area": "Mixing Shed",
    "process": "Mixing",
    "machineNo": "MIX_04",
    "machineType": "Mixer-4 (430 LTR) Master / Final",
    "downtimeMinutes": 10,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "New battery replaced",
    "responsibility": "ATC",
    "closedDate": "2026-04-08",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-08T08:32:00Z"
  },
  {
    "id": "YOKO-DT-2026-273",
    "issueDate": "2026-04-08",
    "nature": "INFRA",
    "area": "Plant 4",
    "process": "Extrusion",
    "machineNo": "CFE_01",
    "machineType": "Duplex 10*8 Ext with 100mtr cooling line",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Callibration",
    "responsibility": "ATC",
    "closedDate": "2026-04-08",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-08T08:33:00Z"
  },
  {
    "id": "YOKO-DT-2026-274",
    "issueDate": "2026-04-09",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWFMF_01",
    "machineType": "Finemac",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-04-09",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-09T08:34:00Z"
  },
  {
    "id": "YOKO-DT-2026-275",
    "issueDate": "2026-04-09",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC-01",
    "machineType": "Biascutter 20-90 deg",
    "downtimeMinutes": 10,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Program corrected by engg",
    "responsibility": "MELSS",
    "closedDate": "2026-04-09",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-09T08:35:00Z"
  },
  {
    "id": "YOKO-DT-2026-276",
    "issueDate": "2026-04-09",
    "nature": "MES",
    "area": "Mixing Shed",
    "process": "Mixing",
    "machineNo": "FC_01",
    "machineType": "Final Chemical",
    "downtimeMinutes": 15,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "New scanner changed",
    "responsibility": "ATC",
    "closedDate": "2026-04-09",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-09T08:36:00Z"
  },
  {
    "id": "YOKO-DT-2026-277",
    "issueDate": "2026-04-09",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y08",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-04-09",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-09T08:37:00Z"
  },
  {
    "id": "YOKO-DT-2026-278",
    "issueDate": "2026-04-09",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y11",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-04-09",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-09T08:38:00Z"
  },
  {
    "id": "YOKO-DT-2026-279",
    "issueDate": "2026-04-09",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y08",
    "machineType": "YANTAI",
    "downtimeMinutes": 15,
    "category": "IPC",
    "issueDetails": "Hardware issue",
    "actionPlan": "New IPC replaced",
    "responsibility": "ATC",
    "closedDate": "2026-04-09",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-09T08:39:00Z"
  },
  {
    "id": "YOKO-DT-2026-280",
    "issueDate": "2026-04-09",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y11",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-04-09",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-09T08:40:00Z"
  },
  {
    "id": "YOKO-DT-2026-281",
    "issueDate": "2026-04-10",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T08",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "New battery replaced",
    "responsibility": "ATC",
    "closedDate": "2026-04-10",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-10T08:41:00Z"
  },
  {
    "id": "YOKO-DT-2026-282",
    "issueDate": "2026-04-10",
    "nature": "INFRA",
    "area": "Mixing Shed",
    "process": "Mixing",
    "machineNo": "MIX_02",
    "machineType": "Mixer-2 (430 LTR) Master",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "Printer restart done",
    "responsibility": "ATC",
    "closedDate": "2026-04-10",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-10T08:42:00Z"
  },
  {
    "id": "YOKO-DT-2026-283",
    "issueDate": "2026-04-10",
    "nature": "INFRA",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWFMD_01",
    "machineType": "Finemac",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-04-10",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-10T08:43:00Z"
  },
  {
    "id": "YOKO-DT-2026-284",
    "issueDate": "2026-04-11",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US3",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-04-11",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-11T08:44:00Z"
  },
  {
    "id": "YOKO-DT-2026-285",
    "issueDate": "2026-04-11",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T08",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-04-11",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-11T08:45:00Z"
  },
  {
    "id": "YOKO-DT-2026-286",
    "issueDate": "2026-04-11",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y06",
    "machineType": "YANTAI",
    "downtimeMinutes": 30,
    "category": "IPC",
    "issueDetails": "Hardware issue",
    "actionPlan": "New IPC replaced",
    "responsibility": "ATC",
    "closedDate": "2026-04-11",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-11T08:46:00Z"
  },
  {
    "id": "YOKO-DT-2026-287",
    "issueDate": "2026-04-12",
    "nature": "INFRA",
    "area": "Plant 4",
    "process": "Extrusion",
    "machineNo": "CFE_01",
    "machineType": "Duplex 10*8 Ext with 100mtr cooling line",
    "downtimeMinutes": 30,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-04-12",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "Spec not working",
    "createdAt": "2026-04-12T08:47:00Z"
  },
  {
    "id": "YOKO-DT-2026-288",
    "issueDate": "2026-04-12",
    "nature": "INFRA",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWFMF_01",
    "machineType": "Finemac",
    "downtimeMinutes": 10,
    "category": "IPC",
    "issueDetails": "Delay access or response",
    "actionPlan": "Cache cleared and restart done",
    "responsibility": "ATC",
    "closedDate": "2026-04-12",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-12T08:48:00Z"
  },
  {
    "id": "YOKO-DT-2026-289",
    "issueDate": "2026-04-12",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y15",
    "machineType": "YANTAI",
    "downtimeMinutes": 10,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-04-12",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-12T08:49:00Z"
  },
  {
    "id": "YOKO-DT-2026-290",
    "issueDate": "2026-04-12",
    "nature": "INFRA",
    "area": "Mixing Shed",
    "process": "Mixing",
    "machineNo": "MC_01",
    "machineType": "Master Chemical",
    "downtimeMinutes": 20,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "New battery replaced",
    "responsibility": "ATC",
    "closedDate": "2026-04-12",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-12T08:50:00Z"
  },
  {
    "id": "YOKO-DT-2026-291",
    "issueDate": "2026-04-15",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Band",
    "machineNo": "BBONL_01",
    "machineType": "Online Band Building 56\"",
    "downtimeMinutes": 15,
    "category": "IPC",
    "issueDetails": "Hardware issue",
    "actionPlan": "",
    "responsibility": "ATC",
    "closedDate": "2026-04-15",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-15T08:51:00Z"
  },
  {
    "id": "YOKO-DT-2026-292",
    "issueDate": "2026-04-15",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T05",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-04-15",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-15T08:52:00Z"
  },
  {
    "id": "YOKO-DT-2026-293",
    "issueDate": "2026-04-15",
    "nature": "MES",
    "area": "Plant 4",
    "process": "Extrusion",
    "machineNo": "CFE_01",
    "machineType": "Duplex 10*8 Ext with 100mtr cooling line",
    "downtimeMinutes": 15,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "battery replaced",
    "responsibility": "ATC",
    "closedDate": "2026-04-15",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-15T08:53:00Z"
  },
  {
    "id": "YOKO-DT-2026-294",
    "issueDate": "2026-04-15",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T08",
    "machineType": "Taku TBM",
    "downtimeMinutes": 15,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Reinsert the Cabel",
    "responsibility": "ATC",
    "closedDate": "2026-04-15",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-15T08:54:00Z"
  },
  {
    "id": "YOKO-DT-2026-295",
    "issueDate": "2026-04-15",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y23",
    "machineType": "YANTAI",
    "downtimeMinutes": 10,
    "category": "IPC",
    "issueDetails": "Delay access or response",
    "actionPlan": "Cache cleared and restart done",
    "responsibility": "ATC",
    "closedDate": "2026-04-15",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-15T08:55:00Z"
  },
  {
    "id": "YOKO-DT-2026-296",
    "issueDate": "2026-04-16",
    "nature": "INFRA",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWMRG_02",
    "machineType": "Marangoni",
    "downtimeMinutes": 20,
    "category": "IPC",
    "issueDetails": "Network not available",
    "actionPlan": "Switch side power down and make up with help of engg",
    "responsibility": "ATC",
    "closedDate": "",
    "solvedBy": "Srinivas",
    "status": "Open",
    "remarks": "Power Issue",
    "createdAt": "2026-04-16T08:56:00Z"
  },
  {
    "id": "YOKO-DT-2026-297",
    "issueDate": "2026-04-16",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y10",
    "machineType": "YANTAI",
    "downtimeMinutes": 20,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "Switch side power down and make up with help of engg",
    "responsibility": "ATC",
    "closedDate": "",
    "solvedBy": "Narayana",
    "status": "Open",
    "remarks": "Power Issue",
    "createdAt": "2026-04-16T08:57:00Z"
  },
  {
    "id": "YOKO-DT-2026-298",
    "issueDate": "2026-04-16",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y08",
    "machineType": "YANTAI",
    "downtimeMinutes": 20,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "Switch side power down and make up with help of engg",
    "responsibility": "ATC",
    "closedDate": "2026-04-16",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "Power Issue",
    "createdAt": "2026-04-16T08:58:00Z"
  },
  {
    "id": "YOKO-DT-2026-299",
    "issueDate": "2026-04-16",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T06",
    "machineType": "Taku TBM",
    "downtimeMinutes": 20,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "Switch side power down and make up with help of engg",
    "responsibility": "ATC",
    "closedDate": "2026-04-16",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "Power Issue",
    "createdAt": "2026-04-16T08:59:00Z"
  },
  {
    "id": "YOKO-DT-2026-300",
    "issueDate": "2026-04-16",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T04",
    "machineType": "Taku TBM",
    "downtimeMinutes": 20,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "Switch side power down and make up with help of engg",
    "responsibility": "ATC",
    "closedDate": "2026-04-16",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "Power Issue",
    "createdAt": "2026-04-16T08:00:00Z"
  },
  {
    "id": "YOKO-DT-2026-301",
    "issueDate": "2026-04-16",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T03",
    "machineType": "Taku TBM",
    "downtimeMinutes": 20,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "Switch side power down and make up with help of engg",
    "responsibility": "ATC",
    "closedDate": "",
    "solvedBy": "Bharadwaj",
    "status": "Open",
    "remarks": "Power Issue",
    "createdAt": "2026-04-16T08:01:00Z"
  },
  {
    "id": "YOKO-DT-2026-302",
    "issueDate": "2026-04-16",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Band",
    "machineNo": "BBOFL_02",
    "machineType": "56\"  Band Building Machine",
    "downtimeMinutes": 15,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-04-16",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-16T08:02:00Z"
  },
  {
    "id": "YOKO-DT-2026-303",
    "issueDate": "2026-04-16",
    "nature": "INFRA",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWFMD_01",
    "machineType": "Finemac",
    "downtimeMinutes": 10,
    "category": "IPC",
    "issueDetails": "Delay access or response",
    "actionPlan": "Cache cleared and restart done",
    "responsibility": "ATC",
    "closedDate": "2026-04-16",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-16T08:03:00Z"
  },
  {
    "id": "YOKO-DT-2026-304",
    "issueDate": "2026-04-16",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y04",
    "machineType": "YANTAI",
    "downtimeMinutes": 30,
    "category": "IPC",
    "issueDetails": "Hardware issue",
    "actionPlan": "New IPC replaced",
    "responsibility": "ATC",
    "closedDate": "2026-04-16",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-16T08:04:00Z"
  },
  {
    "id": "YOKO-DT-2026-305",
    "issueDate": "2026-04-17",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC-01",
    "machineType": "Biascutter 20-90 deg",
    "downtimeMinutes": 5,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-04-17",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-17T08:05:00Z"
  },
  {
    "id": "YOKO-DT-2026-306",
    "issueDate": "2026-04-17",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y14",
    "machineType": "YANTAI",
    "downtimeMinutes": 30,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-04-17",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-17T08:06:00Z"
  },
  {
    "id": "YOKO-DT-2026-307",
    "issueDate": "2026-04-17",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T05",
    "machineType": "Taku TBM",
    "downtimeMinutes": 15,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-04-17",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-17T08:07:00Z"
  },
  {
    "id": "YOKO-DT-2026-308",
    "issueDate": "2026-04-17",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y01",
    "machineType": "YANTAI",
    "downtimeMinutes": 15,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Configuration done",
    "responsibility": "ATC",
    "closedDate": "2026-04-17",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-17T08:08:00Z"
  },
  {
    "id": "YOKO-DT-2026-309",
    "issueDate": "2026-04-17",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T04",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-04-17",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-17T08:09:00Z"
  },
  {
    "id": "YOKO-DT-2026-310",
    "issueDate": "2026-04-17",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y04",
    "machineType": "YANTAI",
    "downtimeMinutes": 10,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "",
    "solvedBy": "Srinivas",
    "status": "Open",
    "remarks": "",
    "createdAt": "2026-04-17T08:10:00Z"
  },
  {
    "id": "YOKO-DT-2026-311",
    "issueDate": "2026-04-17",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Band",
    "machineNo": "BBONL_02",
    "machineType": "Online Band Building 76\"",
    "downtimeMinutes": 30,
    "category": "IPC",
    "issueDetails": "Hardware issue",
    "actionPlan": "New IPC replaced",
    "responsibility": "ATC",
    "closedDate": "2026-04-17",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-17T08:11:00Z"
  },
  {
    "id": "YOKO-DT-2026-312",
    "issueDate": "2026-04-17",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Band",
    "machineNo": "BBONL_01",
    "machineType": "Online Band Building 56\"",
    "downtimeMinutes": 5,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-04-17",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-17T08:12:00Z"
  },
  {
    "id": "YOKO-DT-2026-313",
    "issueDate": "2026-04-17",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Band",
    "machineNo": "BBOFL_01",
    "machineType": "70   Band Building Machine",
    "downtimeMinutes": 25,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "Wifi disabled and connected through LAN",
    "responsibility": "ATC",
    "closedDate": "2026-04-17",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-17T08:13:00Z"
  },
  {
    "id": "YOKO-DT-2026-314",
    "issueDate": "2026-04-17",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y03",
    "machineType": "YANTAI",
    "downtimeMinutes": 15,
    "category": "Infra",
    "issueDetails": "Laptop/Desktop",
    "actionPlan": "M365",
    "responsibility": "ATC",
    "closedDate": "2026-04-17",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-17T08:14:00Z"
  },
  {
    "id": "YOKO-DT-2026-315",
    "issueDate": "2026-04-17",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T05",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-04-17",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-17T08:15:00Z"
  },
  {
    "id": "YOKO-DT-2026-316",
    "issueDate": "2026-04-18",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Band",
    "machineNo": "BBONL_01",
    "machineType": "Online Band Building 56\"",
    "downtimeMinutes": 10,
    "category": "MES",
    "issueDetails": "Previous tag not scanned",
    "actionPlan": "new label taken",
    "responsibility": "ATC",
    "closedDate": "2026-04-18",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-18T08:16:00Z"
  },
  {
    "id": "YOKO-DT-2026-317",
    "issueDate": "2026-04-18",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-04-18",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-18T08:17:00Z"
  },
  {
    "id": "YOKO-DT-2026-318",
    "issueDate": "2026-04-18",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y13",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-04-18",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-18T08:18:00Z"
  },
  {
    "id": "YOKO-DT-2026-319",
    "issueDate": "2026-04-18",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y13",
    "machineType": "YANTAI",
    "downtimeMinutes": 20,
    "category": "Printer",
    "issueDetails": "Poor quality tag printing",
    "actionPlan": "Head cleaning done",
    "responsibility": "ATC",
    "closedDate": "2026-04-18",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-18T08:19:00Z"
  },
  {
    "id": "YOKO-DT-2026-320",
    "issueDate": "2026-04-19",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-04-19",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-19T08:20:00Z"
  },
  {
    "id": "YOKO-DT-2026-321",
    "issueDate": "2026-04-19",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y08",
    "machineType": "YANTAI",
    "downtimeMinutes": 10,
    "category": "MES",
    "issueDetails": "Spec not opening",
    "actionPlan": "connected spec again",
    "responsibility": "ATC",
    "closedDate": "2026-04-19",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-19T08:21:00Z"
  },
  {
    "id": "YOKO-DT-2026-322",
    "issueDate": "2026-04-19",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T03",
    "machineType": "Taku TBM",
    "downtimeMinutes": 10,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-04-19",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-19T08:22:00Z"
  },
  {
    "id": "YOKO-DT-2026-323",
    "issueDate": "2026-04-19",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y04",
    "machineType": "YANTAI",
    "downtimeMinutes": 15,
    "category": "IPC",
    "issueDetails": "Hardware issue",
    "actionPlan": "New IPC replaced",
    "responsibility": "ATC",
    "closedDate": "2026-04-19",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-19T08:23:00Z"
  },
  {
    "id": "YOKO-DT-2026-324",
    "issueDate": "2026-04-19",
    "nature": "INFRA",
    "area": "Plant 4",
    "process": "Painting",
    "machineNo": "PTMAN_01",
    "machineType": "Manual Paint booth",
    "downtimeMinutes": 10,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "New battery replaced",
    "responsibility": "ATC",
    "closedDate": "2026-04-19",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-19T08:24:00Z"
  },
  {
    "id": "YOKO-DT-2026-325",
    "issueDate": "2026-04-19",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y09",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "Printer restart done",
    "responsibility": "ATC",
    "closedDate": "2026-04-19",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-19T08:25:00Z"
  },
  {
    "id": "YOKO-DT-2026-326",
    "issueDate": "2026-04-19",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC_05",
    "machineType": "Bias Cutter 45\u00b0-90\u00b0 With Auto Splicer",
    "downtimeMinutes": 10,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-04-19",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-19T08:26:00Z"
  },
  {
    "id": "YOKO-DT-2026-327",
    "issueDate": "2026-04-19",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y08",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-04-19",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-19T08:27:00Z"
  },
  {
    "id": "YOKO-DT-2026-328",
    "issueDate": "2026-04-19",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC-01",
    "machineType": "Biascutter 20-90 deg",
    "downtimeMinutes": 10,
    "category": "IPC",
    "issueDetails": "Unable to login",
    "actionPlan": "keyboard layout changed",
    "responsibility": "ATC",
    "closedDate": "2026-04-19",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-19T08:28:00Z"
  },
  {
    "id": "YOKO-DT-2026-329",
    "issueDate": "2026-04-19",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "GEN_STAGE_1",
    "machineType": "GEN_STAGE_1",
    "downtimeMinutes": 30,
    "category": "Infra",
    "issueDetails": "Network not available",
    "actionPlan": "Switch side power down and make up with help of engg",
    "responsibility": "ATC",
    "closedDate": "2026-04-19",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-19T08:29:00Z"
  },
  {
    "id": "YOKO-DT-2026-330",
    "issueDate": "2026-04-19",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y04",
    "machineType": "YANTAI",
    "downtimeMinutes": 10,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "Printer restart done",
    "responsibility": "ATC",
    "closedDate": "2026-04-19",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-19T08:30:00Z"
  },
  {
    "id": "YOKO-DT-2026-331",
    "issueDate": "2026-04-19",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y10",
    "machineType": "YANTAI",
    "downtimeMinutes": 10,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-04-19",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-19T08:31:00Z"
  },
  {
    "id": "YOKO-DT-2026-332",
    "issueDate": "2026-04-19",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T03",
    "machineType": "Taku TBM",
    "downtimeMinutes": 10,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-04-19",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-19T08:32:00Z"
  },
  {
    "id": "YOKO-DT-2026-333",
    "issueDate": "2026-04-19",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y05",
    "machineType": "YANTAI",
    "downtimeMinutes": 10,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-04-19",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-19T08:33:00Z"
  },
  {
    "id": "YOKO-DT-2026-334",
    "issueDate": "2026-04-19",
    "nature": "INFRA",
    "area": "Plant 2",
    "process": "Flipper",
    "machineNo": "FLP_03",
    "machineType": "Bead Flipping Machine 32\"-46\"",
    "downtimeMinutes": 10,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Configuration done",
    "responsibility": "ATC",
    "closedDate": "2026-04-19",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-19T08:34:00Z"
  },
  {
    "id": "YOKO-DT-2026-335",
    "issueDate": "2026-04-19",
    "nature": "INFRA",
    "area": "Plant 2",
    "process": "Flipper",
    "machineNo": "FLP_02",
    "machineType": "Bead Flipping Machine 18\"-32\"",
    "downtimeMinutes": 15,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "Printer restart done",
    "responsibility": "ATC",
    "closedDate": "2026-04-19",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-19T08:35:00Z"
  },
  {
    "id": "YOKO-DT-2026-336",
    "issueDate": "2026-04-19",
    "nature": "INFRA",
    "area": "Plant 3",
    "process": "Bead Winding",
    "machineNo": "BW_02",
    "machineType": "Bead Winding # 2 (15\"-58\")",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-04-19",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-19T08:36:00Z"
  },
  {
    "id": "YOKO-DT-2026-337",
    "issueDate": "2026-04-20",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T05",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-04-20",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-20T08:37:00Z"
  },
  {
    "id": "YOKO-DT-2026-338",
    "issueDate": "2026-04-20",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T04",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-04-20",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-20T08:38:00Z"
  },
  {
    "id": "YOKO-DT-2026-339",
    "issueDate": "2026-04-20",
    "nature": "INFRA",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWFMF_02",
    "machineType": "Radial Finemac",
    "downtimeMinutes": 5,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-04-20",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-20T08:39:00Z"
  },
  {
    "id": "YOKO-DT-2026-340",
    "issueDate": "2026-04-20",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y09",
    "machineType": "YANTAI",
    "downtimeMinutes": 2,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-04-20",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-20T08:40:00Z"
  },
  {
    "id": "YOKO-DT-2026-341",
    "issueDate": "2026-04-21",
    "nature": "INFRA",
    "area": "Plant 2",
    "process": "Flipper",
    "machineNo": "FLP_01",
    "machineType": "Bead Flipping Machine 12\"-20\"",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "Printer restart done",
    "responsibility": "ATC",
    "closedDate": "2026-04-21",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-21T08:41:00Z"
  },
  {
    "id": "YOKO-DT-2026-342",
    "issueDate": "2026-04-21",
    "nature": "INFRA",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US1",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "Printer restart done",
    "responsibility": "ATC",
    "closedDate": "2026-04-21",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-21T08:42:00Z"
  },
  {
    "id": "YOKO-DT-2026-343",
    "issueDate": "2026-04-21",
    "nature": "INFRA",
    "area": "Plant 2",
    "process": "Flipper",
    "machineNo": "FLP_01",
    "machineType": "Bead Flipping Machine 12\"-20\"",
    "downtimeMinutes": 25,
    "category": "Infra",
    "issueDetails": "Network not available",
    "actionPlan": "Switch side power down and make up with help of engg",
    "responsibility": "ATC",
    "closedDate": "2026-04-21",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-21T08:43:00Z"
  },
  {
    "id": "YOKO-DT-2026-344",
    "issueDate": "2026-04-21",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y04",
    "machineType": "YANTAI",
    "downtimeMinutes": 25,
    "category": "Infra",
    "issueDetails": "Network not available",
    "actionPlan": "Switch side power down and make up with help of engg",
    "responsibility": "ATC",
    "closedDate": "2026-04-21",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-21T08:44:00Z"
  },
  {
    "id": "YOKO-DT-2026-345",
    "issueDate": "2026-04-21",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y08",
    "machineType": "YANTAI",
    "downtimeMinutes": 25,
    "category": "Infra",
    "issueDetails": "Network not available",
    "actionPlan": "Switch side power down and make up with help of engg",
    "responsibility": "ATC",
    "closedDate": "2026-04-21",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-21T08:45:00Z"
  },
  {
    "id": "YOKO-DT-2026-346",
    "issueDate": "2026-04-21",
    "nature": "INFRA",
    "area": "Plant 2",
    "process": "Flipper",
    "machineNo": "FLP_02",
    "machineType": "Bead Flipping Machine 18\"-32\"",
    "downtimeMinutes": 25,
    "category": "Infra",
    "issueDetails": "Network not available",
    "actionPlan": "Switch side power down and make up with help of engg",
    "responsibility": "ATC",
    "closedDate": "2026-04-21",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-21T08:46:00Z"
  },
  {
    "id": "YOKO-DT-2026-347",
    "issueDate": "2026-04-21",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y10",
    "machineType": "YANTAI",
    "downtimeMinutes": 25,
    "category": "Infra",
    "issueDetails": "Network not available",
    "actionPlan": "Switch side power down and make up with help of engg",
    "responsibility": "ATC",
    "closedDate": "2026-04-21",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-21T08:47:00Z"
  },
  {
    "id": "YOKO-DT-2026-348",
    "issueDate": "2026-04-21",
    "nature": "INFRA",
    "area": "Mixing Shed",
    "process": "Mixing",
    "machineNo": "FC_01",
    "machineType": "Final Chemical",
    "downtimeMinutes": 30,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "New scanner changed",
    "responsibility": "ATC",
    "closedDate": "2026-04-21",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-21T08:48:00Z"
  },
  {
    "id": "YOKO-DT-2026-349",
    "issueDate": "2026-04-21",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC-03",
    "machineType": "Biascutter 20-90 deg",
    "downtimeMinutes": 25,
    "category": "Infra",
    "issueDetails": "Network not available",
    "actionPlan": "Switch side power down and make up with help of engg",
    "responsibility": "ATC",
    "closedDate": "2026-04-21",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-21T08:49:00Z"
  },
  {
    "id": "YOKO-DT-2026-350",
    "issueDate": "2026-04-21",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-04-21",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-21T08:50:00Z"
  },
  {
    "id": "YOKO-DT-2026-351",
    "issueDate": "2026-04-21",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y16",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-04-21",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-21T08:51:00Z"
  },
  {
    "id": "YOKO-DT-2026-352",
    "issueDate": "2026-04-21",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T05",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Printer restart done",
    "responsibility": "ATC",
    "closedDate": "2026-04-21",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-21T08:52:00Z"
  },
  {
    "id": "YOKO-DT-2026-353",
    "issueDate": "2026-04-21",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T03",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-04-21",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-21T08:53:00Z"
  },
  {
    "id": "YOKO-DT-2026-354",
    "issueDate": "2026-04-21",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC-03",
    "machineType": "Biascutter 20-90 deg",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-04-21",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-21T08:54:00Z"
  },
  {
    "id": "YOKO-DT-2026-355",
    "issueDate": "2026-04-22",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Band",
    "machineNo": "BBONL_01",
    "machineType": "Online Band Building 56\"",
    "downtimeMinutes": 15,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Configuration done",
    "responsibility": "ATC",
    "closedDate": "2026-04-22",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-22T08:55:00Z"
  },
  {
    "id": "YOKO-DT-2026-356",
    "issueDate": "2026-04-22",
    "nature": "INFRA",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 15,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-04-22",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-22T08:56:00Z"
  },
  {
    "id": "YOKO-DT-2026-357",
    "issueDate": "2026-04-22",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "F01",
    "machineType": "RADIA FIN-MAC 20-46",
    "downtimeMinutes": 30,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "New printer replaced",
    "responsibility": "ATC",
    "closedDate": "2026-04-22",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-22T08:57:00Z"
  },
  {
    "id": "YOKO-DT-2026-358",
    "issueDate": "2026-04-22",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWFMF_03",
    "machineType": "Radial Finemac",
    "downtimeMinutes": 10,
    "category": "NSNL",
    "issueDetails": "Tag values not write in PLC",
    "actionPlan": "Manually reset done",
    "responsibility": "MELSS",
    "closedDate": "2026-04-22",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-22T08:58:00Z"
  },
  {
    "id": "YOKO-DT-2026-359",
    "issueDate": "2026-04-22",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y16",
    "machineType": "YANTAI",
    "downtimeMinutes": 10,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN removed and connected through WIFI",
    "responsibility": "ATC",
    "closedDate": "2026-04-22",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-22T08:59:00Z"
  },
  {
    "id": "YOKO-DT-2026-360",
    "issueDate": "2026-04-22",
    "nature": "INFRA",
    "area": "Mixing Shed",
    "process": "Mixing",
    "machineNo": "MIX_01",
    "machineType": "Mixer-1 (430 LTR) Master",
    "downtimeMinutes": 15,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "New battery replaced",
    "responsibility": "ATC",
    "closedDate": "2026-04-22",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-22T08:00:00Z"
  },
  {
    "id": "YOKO-DT-2026-361",
    "issueDate": "2026-04-22",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 10,
    "category": "NSNL",
    "issueDetails": "Tag values not write in PLC",
    "actionPlan": "Manually reset done",
    "responsibility": "MELSS",
    "closedDate": "2026-04-22",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-22T08:01:00Z"
  },
  {
    "id": "YOKO-DT-2026-362",
    "issueDate": "2026-04-22",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y07",
    "machineType": "YANTAI",
    "downtimeMinutes": 15,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "Printer restart done",
    "responsibility": "ATC",
    "closedDate": "2026-04-22",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-22T08:02:00Z"
  },
  {
    "id": "YOKO-DT-2026-363",
    "issueDate": "2026-04-22",
    "nature": "INFRA",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 15,
    "category": "NSNL",
    "issueDetails": "Tag values not write in PLC",
    "actionPlan": "Manually reset done",
    "responsibility": "MELSS",
    "closedDate": "2026-04-22",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-22T08:03:00Z"
  },
  {
    "id": "YOKO-DT-2026-364",
    "issueDate": "2026-04-22",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T02",
    "machineType": "Taku TBM",
    "downtimeMinutes": 30,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-04-22",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-22T08:04:00Z"
  },
  {
    "id": "YOKO-DT-2026-365",
    "issueDate": "2026-04-23",
    "nature": "INFRA",
    "area": "Plant 3",
    "process": "Bead Winding",
    "machineNo": "BW_01",
    "machineType": "Bead Winding # 1 (8\"-38\")",
    "downtimeMinutes": 15,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Callibration",
    "responsibility": "ATC",
    "closedDate": "2026-04-23",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-23T08:05:00Z"
  },
  {
    "id": "YOKO-DT-2026-366",
    "issueDate": "2026-04-23",
    "nature": "INFRA",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US3",
    "machineType": "Unistage",
    "downtimeMinutes": 15,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-04-23",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-23T08:06:00Z"
  },
  {
    "id": "YOKO-DT-2026-367",
    "issueDate": "2026-04-23",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Band",
    "machineNo": "BBONL_03",
    "machineType": "Online Band Building 96\"",
    "downtimeMinutes": 10,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Settings re-confgiruation done",
    "responsibility": "ATC",
    "closedDate": "2026-04-23",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-23T08:07:00Z"
  },
  {
    "id": "YOKO-DT-2026-368",
    "issueDate": "2026-04-23",
    "nature": "INFRA",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWMRG_01",
    "machineType": "Marangoni",
    "downtimeMinutes": 10,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "New battery replaced",
    "responsibility": "ATC",
    "closedDate": "2026-04-23",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-23T08:08:00Z"
  },
  {
    "id": "YOKO-DT-2026-369",
    "issueDate": "2026-04-23",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Tag values not write in PLC",
    "actionPlan": "Manually reset done",
    "responsibility": "MELSS",
    "closedDate": "2026-04-23",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-23T08:09:00Z"
  },
  {
    "id": "YOKO-DT-2026-370",
    "issueDate": "2026-04-23",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T02",
    "machineType": "Taku TBM",
    "downtimeMinutes": 8,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-04-23",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-23T08:10:00Z"
  },
  {
    "id": "YOKO-DT-2026-371",
    "issueDate": "2026-04-23",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y05",
    "machineType": "YANTAI",
    "downtimeMinutes": 10,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "Given the Reprint",
    "responsibility": "ATC",
    "closedDate": "2026-04-23",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-23T08:11:00Z"
  },
  {
    "id": "YOKO-DT-2026-372",
    "issueDate": "2026-04-23",
    "nature": "INFRA",
    "area": "Plant 3",
    "process": "Hex Bead",
    "machineNo": "BW_03",
    "machineType": "Hexa machine",
    "downtimeMinutes": 15,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "Black ribbon properly arranged which is in reverse",
    "responsibility": "ATC",
    "closedDate": "2026-04-23",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-23T08:12:00Z"
  },
  {
    "id": "YOKO-DT-2026-373",
    "issueDate": "2026-04-23",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T03",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-04-23",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-23T08:13:00Z"
  },
  {
    "id": "YOKO-DT-2026-374",
    "issueDate": "2026-04-24",
    "nature": "INFRA",
    "area": "Mixing Shed",
    "process": "Mixing",
    "machineNo": "MIX_05",
    "machineType": "Mixer-5 (430 LTR) Final",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Unable to login",
    "actionPlan": "Restart Done",
    "responsibility": "ATC",
    "closedDate": "2026-04-24",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-24T08:14:00Z"
  },
  {
    "id": "YOKO-DT-2026-375",
    "issueDate": "2026-04-25",
    "nature": "INFRA",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWMRG_03",
    "machineType": "Marangoni",
    "downtimeMinutes": 10,
    "category": "NSNL",
    "issueDetails": "Tag values not write in PLC",
    "actionPlan": "Manually reset done",
    "responsibility": "ATC",
    "closedDate": "2026-04-25",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-25T08:15:00Z"
  },
  {
    "id": "YOKO-DT-2026-376",
    "issueDate": "2026-04-25",
    "nature": "INFRA",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-04-25",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-25T08:16:00Z"
  },
  {
    "id": "YOKO-DT-2026-377",
    "issueDate": "2026-04-24",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T05",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-04-24",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-24T08:17:00Z"
  },
  {
    "id": "YOKO-DT-2026-378",
    "issueDate": "2026-04-24",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T03",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "New scanner changed",
    "responsibility": "ATC",
    "closedDate": "2026-04-24",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-24T08:18:00Z"
  },
  {
    "id": "YOKO-DT-2026-379",
    "issueDate": "2026-04-24",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC-03",
    "machineType": "Biascutter 20-90 deg",
    "downtimeMinutes": 10,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-04-24",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "Domin Rejoin and Network configuration done.",
    "createdAt": "2026-04-24T08:19:00Z"
  },
  {
    "id": "YOKO-DT-2026-380",
    "issueDate": "2026-04-24",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y07",
    "machineType": "YANTAI",
    "downtimeMinutes": 30,
    "category": "IPC",
    "issueDetails": "Hardware issue",
    "actionPlan": "New IPC replaced",
    "responsibility": "ATC",
    "closedDate": "2026-04-24",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-24T08:20:00Z"
  },
  {
    "id": "YOKO-DT-2026-381",
    "issueDate": "2026-04-24",
    "nature": "INFRA",
    "area": "Plant 4",
    "process": "Curing",
    "machineNo": "CU_A01",
    "machineType": "A-Line",
    "downtimeMinutes": 5,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Configuration done",
    "responsibility": "ATC",
    "closedDate": "2026-04-24",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-24T08:21:00Z"
  },
  {
    "id": "YOKO-DT-2026-382",
    "issueDate": "2026-04-24",
    "nature": "INFRA",
    "area": "4Roll shed",
    "process": "4Roll",
    "machineNo": "4ROLL_01",
    "machineType": "4-Roll and IL Cal  650*1900",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "Printer restart done",
    "responsibility": "ATC",
    "closedDate": "2026-04-24",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-24T08:22:00Z"
  },
  {
    "id": "YOKO-DT-2026-383",
    "issueDate": "2026-04-24",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Band",
    "machineNo": "BBONL_03",
    "machineType": "Online Band Building 96\"",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Tag values not write in PLC",
    "actionPlan": "Manually reset done",
    "responsibility": "MELSS",
    "closedDate": "2026-04-24",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-24T08:23:00Z"
  },
  {
    "id": "YOKO-DT-2026-384",
    "issueDate": "2026-04-25",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y07",
    "machineType": "YANTAI",
    "downtimeMinutes": 10,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Configuration done",
    "responsibility": "MELSS",
    "closedDate": "2026-04-25",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "MAC Addres Remaped",
    "createdAt": "2026-04-25T08:24:00Z"
  },
  {
    "id": "YOKO-DT-2026-385",
    "issueDate": "2026-04-25",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "F08",
    "machineType": "Fujion",
    "downtimeMinutes": 15,
    "category": "Infra",
    "issueDetails": "Keyboard Issue",
    "actionPlan": "Replaced Keyboard",
    "responsibility": "ATC",
    "closedDate": "2026-04-25",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "Keyboard Replaced",
    "createdAt": "2026-04-25T08:25:00Z"
  },
  {
    "id": "YOKO-DT-2026-386",
    "issueDate": "2026-04-25",
    "nature": "INFRA",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWYFR_03",
    "machineType": "Yantai II Stage-16 - 20 inch - 2",
    "downtimeMinutes": 10,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-04-25",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-25T08:26:00Z"
  },
  {
    "id": "YOKO-DT-2026-387",
    "issueDate": "2026-04-25",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "F01",
    "machineType": "Fujion",
    "downtimeMinutes": 15,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-04-25",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-25T08:27:00Z"
  },
  {
    "id": "YOKO-DT-2026-388",
    "issueDate": "2026-04-25",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T08",
    "machineType": "Taku TBM",
    "downtimeMinutes": 35,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-04-25",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-25T08:28:00Z"
  },
  {
    "id": "YOKO-DT-2026-389",
    "issueDate": "2026-04-26",
    "nature": "INFRA",
    "area": "Mixing Shed",
    "process": "Mixing",
    "machineNo": "MIX_05",
    "machineType": "Mixer-5 (430 LTR) Final",
    "downtimeMinutes": 10,
    "category": "Infra",
    "issueDetails": "Laptop/Desktop",
    "actionPlan": "M365",
    "responsibility": "ATC",
    "closedDate": "2026-04-26",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "replaced keyboard",
    "createdAt": "2026-04-26T08:29:00Z"
  },
  {
    "id": "YOKO-DT-2026-390",
    "issueDate": "2026-04-26",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWFMF_02",
    "machineType": "Radial Finemac",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-04-26",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-26T08:30:00Z"
  },
  {
    "id": "YOKO-DT-2026-391",
    "issueDate": "2026-04-26",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y07",
    "machineType": "YANTAI",
    "downtimeMinutes": 10,
    "category": "MES",
    "issueDetails": "Spec not opening",
    "actionPlan": "Drive mapped again for spec",
    "responsibility": "ATC",
    "closedDate": "2026-04-26",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-26T08:31:00Z"
  },
  {
    "id": "YOKO-DT-2026-392",
    "issueDate": "2026-04-26",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y06",
    "machineType": "YANTAI",
    "downtimeMinutes": 30,
    "category": "IPC",
    "issueDetails": "Hardware issue",
    "actionPlan": "New IPC replaced",
    "responsibility": "ATC",
    "closedDate": "2026-04-26",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-26T08:32:00Z"
  },
  {
    "id": "YOKO-DT-2026-393",
    "issueDate": "2026-04-26",
    "nature": "MES",
    "area": "Plant 4",
    "process": "Curing",
    "machineNo": "CU_C02_1",
    "machineType": "C-Line",
    "downtimeMinutes": 10,
    "category": "MES",
    "issueDetails": "Slowness or stopped",
    "actionPlan": "IO crimping done",
    "responsibility": "ATC",
    "closedDate": "2026-04-26",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-26T08:33:00Z"
  },
  {
    "id": "YOKO-DT-2026-394",
    "issueDate": "2026-04-26",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWMRG_01",
    "machineType": "Marangoni",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-04-26",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "Marangoni1-M1",
    "createdAt": "2026-04-26T08:34:00Z"
  },
  {
    "id": "YOKO-DT-2026-395",
    "issueDate": "2026-04-26",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWMRG_01",
    "machineType": "Marangoni",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-04-26",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-26T08:35:00Z"
  },
  {
    "id": "YOKO-DT-2026-396",
    "issueDate": "2026-04-27",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-04-27",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-27T08:36:00Z"
  },
  {
    "id": "YOKO-DT-2026-397",
    "issueDate": "2026-04-27",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y03",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-04-27",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-27T08:37:00Z"
  },
  {
    "id": "YOKO-DT-2026-398",
    "issueDate": "2026-04-27",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-04-27",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-27T08:38:00Z"
  },
  {
    "id": "YOKO-DT-2026-399",
    "issueDate": "2026-04-27",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWMRG_01",
    "machineType": "Marangoni",
    "downtimeMinutes": 20,
    "category": "MES",
    "issueDetails": "No Data Found, Contact PPC Team",
    "actionPlan": "Delay in Response",
    "responsibility": "MELSS",
    "closedDate": "2026-04-27",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-27T08:39:00Z"
  },
  {
    "id": "YOKO-DT-2026-400",
    "issueDate": "2026-04-27",
    "nature": "MES",
    "area": "Plant 4",
    "process": "Extrusion",
    "machineNo": "CFE_01",
    "machineType": "Duplex 10*8 Ext with 100mtr cooling line",
    "downtimeMinutes": 5,
    "category": "MES",
    "issueDetails": "One size Tag not comming",
    "actionPlan": "Manually corrected",
    "responsibility": "MELSS",
    "closedDate": "2026-04-27",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-27T08:40:00Z"
  },
  {
    "id": "YOKO-DT-2026-401",
    "issueDate": "2026-04-27",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T09",
    "machineType": "Taku TBM",
    "downtimeMinutes": 20,
    "category": "Infra",
    "issueDetails": "Network not available",
    "actionPlan": "Switch side power down and make up with help of engg",
    "responsibility": "ATC",
    "closedDate": "2026-04-27",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-27T08:41:00Z"
  },
  {
    "id": "YOKO-DT-2026-402",
    "issueDate": "2026-04-27",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y23",
    "machineType": "YANTAI",
    "downtimeMinutes": 20,
    "category": "Infra",
    "issueDetails": "Network not available",
    "actionPlan": "Switch side power down and make up with help of engg",
    "responsibility": "ATC",
    "closedDate": "2026-04-27",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-27T08:42:00Z"
  },
  {
    "id": "YOKO-DT-2026-403",
    "issueDate": "2026-04-27",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y15",
    "machineType": "YANTAI",
    "downtimeMinutes": 10,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-04-27",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-27T08:43:00Z"
  },
  {
    "id": "YOKO-DT-2026-404",
    "issueDate": "2026-04-27",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y21",
    "machineType": "YANTAI",
    "downtimeMinutes": 20,
    "category": "Infra",
    "issueDetails": "Network not available",
    "actionPlan": "Switch side power down and make up with help of engg",
    "responsibility": "ATC",
    "closedDate": "2026-04-27",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-27T08:44:00Z"
  },
  {
    "id": "YOKO-DT-2026-405",
    "issueDate": "2026-04-27",
    "nature": "INFRA",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-04-27",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-27T08:45:00Z"
  },
  {
    "id": "YOKO-DT-2026-406",
    "issueDate": "2026-04-27",
    "nature": "INFRA",
    "area": "Plant 2",
    "process": "Flipper",
    "machineNo": "FLP_01",
    "machineType": "Bead Flipping Machine 12\"-20\"",
    "downtimeMinutes": 10,
    "category": "Infra",
    "issueDetails": "Spec Not Open",
    "actionPlan": "Remap Spec",
    "responsibility": "ATC",
    "closedDate": "2026-04-27",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "Spec Remap",
    "createdAt": "2026-04-27T08:46:00Z"
  },
  {
    "id": "YOKO-DT-2026-407",
    "issueDate": "2026-04-27",
    "nature": "INFRA",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWMRG_01",
    "machineType": "Marangoni",
    "downtimeMinutes": 10,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-04-27",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-27T08:47:00Z"
  },
  {
    "id": "YOKO-DT-2026-408",
    "issueDate": "2026-04-27",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "F02",
    "machineType": "Fujion",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "Printer restart done",
    "responsibility": "ATC",
    "closedDate": "2026-04-27",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-27T08:48:00Z"
  },
  {
    "id": "YOKO-DT-2026-409",
    "issueDate": "2026-04-28",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US1",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-04-28",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-28T08:49:00Z"
  },
  {
    "id": "YOKO-DT-2026-410",
    "issueDate": "2026-04-28",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-04-28",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-28T08:50:00Z"
  },
  {
    "id": "YOKO-DT-2026-411",
    "issueDate": "2026-04-28",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T01",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-04-28",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-28T08:51:00Z"
  },
  {
    "id": "YOKO-DT-2026-412",
    "issueDate": "2026-04-28",
    "nature": "MES",
    "area": "Plant 4",
    "process": "Curing",
    "machineNo": "CU_B05",
    "machineType": "B-Line",
    "downtimeMinutes": 30,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-04-28",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-28T08:52:00Z"
  },
  {
    "id": "YOKO-DT-2026-413",
    "issueDate": "2026-04-28",
    "nature": "INFRA",
    "area": "Mixing Shed",
    "process": "Mixing",
    "machineNo": "MIX_01",
    "machineType": "Mixer-1 (430 LTR) Master",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Printer restart done",
    "responsibility": "ATC",
    "closedDate": "2026-04-28",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-28T08:53:00Z"
  },
  {
    "id": "YOKO-DT-2026-414",
    "issueDate": "2026-04-28",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T01",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-04-28",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-28T08:54:00Z"
  },
  {
    "id": "YOKO-DT-2026-415",
    "issueDate": "2026-04-28",
    "nature": "INFRA",
    "area": "Plant 4",
    "process": "Extrusion",
    "machineNo": "CFE_01",
    "machineType": "Duplex 10*8 Ext with 100mtr cooling line",
    "downtimeMinutes": 5,
    "category": "Infra",
    "issueDetails": "Mouse&Keyboard",
    "actionPlan": "Keyboard Replacement",
    "responsibility": "ATC",
    "closedDate": "2026-04-28",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-28T08:55:00Z"
  },
  {
    "id": "YOKO-DT-2026-416",
    "issueDate": "2026-04-28",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y16",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-04-28",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-28T08:56:00Z"
  },
  {
    "id": "YOKO-DT-2026-417",
    "issueDate": "2026-04-28",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-04-28",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-28T08:57:00Z"
  },
  {
    "id": "YOKO-DT-2026-418",
    "issueDate": "2026-04-28",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWFMF_03",
    "machineType": "Radial Finemac",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-04-28",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-28T08:58:00Z"
  },
  {
    "id": "YOKO-DT-2026-419",
    "issueDate": "2026-04-29",
    "nature": "INFRA",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US1",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Printer restart done",
    "responsibility": "ATC",
    "closedDate": "2026-04-29",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-29T08:59:00Z"
  },
  {
    "id": "YOKO-DT-2026-420",
    "issueDate": "2026-04-29",
    "nature": "INFRA",
    "area": "Plant 2",
    "process": "Flipper",
    "machineNo": "FLP_01",
    "machineType": "Bead Flipping Machine 12\"-20\"",
    "downtimeMinutes": 5,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-04-29",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-29T08:00:00Z"
  },
  {
    "id": "YOKO-DT-2026-421",
    "issueDate": "2026-04-29",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWMRG_05",
    "machineType": "Marangoni",
    "downtimeMinutes": 10,
    "category": "NSNL",
    "issueDetails": "Tag values not write in PLC",
    "actionPlan": "",
    "responsibility": "MELSS",
    "closedDate": "2026-04-29",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-29T08:01:00Z"
  },
  {
    "id": "YOKO-DT-2026-422",
    "issueDate": "2026-04-29",
    "nature": "INFRA",
    "area": "Plant 3",
    "process": "Bead Winding",
    "machineNo": "BW_02",
    "machineType": "Bead Winding # 2 (15\"-58\")",
    "downtimeMinutes": 15,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-04-29",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-29T08:02:00Z"
  },
  {
    "id": "YOKO-DT-2026-423",
    "issueDate": "2026-04-30",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC-02",
    "machineType": "Biascutter 45-90 deg",
    "downtimeMinutes": 15,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-04-30",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-30T08:03:00Z"
  },
  {
    "id": "YOKO-DT-2026-424",
    "issueDate": "2026-04-30",
    "nature": "INFRA",
    "area": "Plant 4",
    "process": "Painting",
    "machineNo": "PTMAN_01",
    "machineType": "Manual Paint booth",
    "downtimeMinutes": 10,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Configuration done",
    "responsibility": "ATC",
    "closedDate": "2026-04-30",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-30T08:04:00Z"
  },
  {
    "id": "YOKO-DT-2026-425",
    "issueDate": "2026-04-30",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-04-30",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-30T08:05:00Z"
  },
  {
    "id": "YOKO-DT-2026-426",
    "issueDate": "2026-04-30",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T05",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-04-30",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-30T08:06:00Z"
  },
  {
    "id": "YOKO-DT-2026-427",
    "issueDate": "2026-04-30",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Band",
    "machineNo": "BBONL_01",
    "machineType": "Online Band Building 56\"",
    "downtimeMinutes": 10,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-04-30",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-04-30T08:07:00Z"
  },
  {
    "id": "YOKO-DT-2026-428",
    "issueDate": "2026-05-01",
    "nature": "INFRA",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWMRG_01",
    "machineType": "Marangoni",
    "downtimeMinutes": 15,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-05-01",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-01T08:08:00Z"
  },
  {
    "id": "YOKO-DT-2026-429",
    "issueDate": "2026-05-01",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWMRG_01",
    "machineType": "Marangoni",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-05-01",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-01T08:09:00Z"
  },
  {
    "id": "YOKO-DT-2026-430",
    "issueDate": "2026-05-01",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y23",
    "machineType": "YANTAI",
    "downtimeMinutes": 15,
    "category": "Infra",
    "issueDetails": "Network not available",
    "actionPlan": "Switch side power down and make up with help of engg",
    "responsibility": "ATC",
    "closedDate": "2026-05-01",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-01T08:10:00Z"
  },
  {
    "id": "YOKO-DT-2026-431",
    "issueDate": "2026-05-02",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T08",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Printer restart done",
    "responsibility": "ATC",
    "closedDate": "2026-05-02",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-02T08:11:00Z"
  },
  {
    "id": "YOKO-DT-2026-432",
    "issueDate": "2026-05-02",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "F02",
    "machineType": "Fujion",
    "downtimeMinutes": 10,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Settings re-confgiruation done",
    "responsibility": "ATC",
    "closedDate": "2026-05-02",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-02T08:12:00Z"
  },
  {
    "id": "YOKO-DT-2026-433",
    "issueDate": "2026-05-02",
    "nature": "INFRA",
    "area": "Plant 4",
    "process": "Extrusion",
    "machineNo": "CFE_02",
    "machineType": "Simplex 6\" Ext with 75mtr cooling line",
    "downtimeMinutes": 5,
    "category": "Infra",
    "issueDetails": "Spec issue",
    "actionPlan": "Spec Remaped",
    "responsibility": "ATC",
    "closedDate": "2026-05-02",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-02T08:13:00Z"
  },
  {
    "id": "YOKO-DT-2026-434",
    "issueDate": "2026-05-02",
    "nature": "INFRA",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWMRG_01",
    "machineType": "Marangoni",
    "downtimeMinutes": 10,
    "category": "IPC",
    "issueDetails": "Delay access or response",
    "actionPlan": "Cache cleared and restart done",
    "responsibility": "ATC",
    "closedDate": "2026-05-02",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-02T08:14:00Z"
  },
  {
    "id": "YOKO-DT-2026-435",
    "issueDate": "2026-05-02",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Band",
    "machineNo": "BBONL_01",
    "machineType": "Online Band Building 56\"",
    "downtimeMinutes": 10,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-05-02",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-02T08:15:00Z"
  },
  {
    "id": "YOKO-DT-2026-436",
    "issueDate": "2026-05-02",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWMRG_01",
    "machineType": "Marangoni",
    "downtimeMinutes": 5,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-05-02",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-02T08:16:00Z"
  },
  {
    "id": "YOKO-DT-2026-437",
    "issueDate": "2026-05-03",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "F05",
    "machineType": "Fujion",
    "downtimeMinutes": 15,
    "category": "Infra",
    "issueDetails": "Mouse&Keyboard",
    "actionPlan": "Keyboard Replacement",
    "responsibility": "ATC",
    "closedDate": "2026-05-03",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-03T08:17:00Z"
  },
  {
    "id": "YOKO-DT-2026-438",
    "issueDate": "2026-05-03",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Bead Winding",
    "machineNo": "BW_02",
    "machineType": "Bead Winding # 2 (15\"-58\")",
    "downtimeMinutes": 10,
    "category": "Printer",
    "issueDetails": "Poor quality tag printing",
    "actionPlan": "Head cleaning done",
    "responsibility": "ATC",
    "closedDate": "2026-05-03",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-03T08:18:00Z"
  },
  {
    "id": "YOKO-DT-2026-439",
    "issueDate": "2026-05-03",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y13",
    "machineType": "YANTAI",
    "downtimeMinutes": 20,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "New printer replaced",
    "responsibility": "ATC",
    "closedDate": "2026-05-03",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-03T08:19:00Z"
  },
  {
    "id": "YOKO-DT-2026-440",
    "issueDate": "2026-05-03",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T01",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-05-03",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-03T08:20:00Z"
  },
  {
    "id": "YOKO-DT-2026-441",
    "issueDate": "2026-05-03",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y14",
    "machineType": "YANTAI",
    "downtimeMinutes": 10,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-05-03",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-03T08:21:00Z"
  },
  {
    "id": "YOKO-DT-2026-442",
    "issueDate": "2026-05-03",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-05-03",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-03T08:22:00Z"
  },
  {
    "id": "YOKO-DT-2026-443",
    "issueDate": "2026-05-03",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T07",
    "machineType": "Taku TBM",
    "downtimeMinutes": 10,
    "category": "Infra",
    "issueDetails": "Mouse&Keyboard",
    "actionPlan": "Keyboard Replacement",
    "responsibility": "ATC",
    "closedDate": "2026-05-03",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-03T08:23:00Z"
  },
  {
    "id": "YOKO-DT-2026-444",
    "issueDate": "2026-05-03",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y08",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "Infra",
    "issueDetails": "Mouse&Keyboard",
    "actionPlan": "Mouse Replacement",
    "responsibility": "ATC",
    "closedDate": "2026-05-03",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-03T08:24:00Z"
  },
  {
    "id": "YOKO-DT-2026-445",
    "issueDate": "2026-05-03",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T05",
    "machineType": "Taku TBM",
    "downtimeMinutes": 10,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-05-03",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-03T08:25:00Z"
  },
  {
    "id": "YOKO-DT-2026-446",
    "issueDate": "2026-05-03",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC-03",
    "machineType": "Biascutter 20-90 deg",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-05-03",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-03T08:26:00Z"
  },
  {
    "id": "YOKO-DT-2026-447",
    "issueDate": "2026-05-04",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC-03",
    "machineType": "Biascutter 20-90 deg",
    "downtimeMinutes": 5,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Reinsert the Cabel",
    "responsibility": "ATC",
    "closedDate": "2026-05-04",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-04T08:27:00Z"
  },
  {
    "id": "YOKO-DT-2026-448",
    "issueDate": "2026-05-04",
    "nature": "INFRA",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 10,
    "category": "IPC",
    "issueDetails": "Unable to login",
    "actionPlan": "Restart Done",
    "responsibility": "ATC",
    "closedDate": "2026-05-04",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "Type Wrong Password",
    "createdAt": "2026-05-04T08:28:00Z"
  },
  {
    "id": "YOKO-DT-2026-449",
    "issueDate": "2026-05-04",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-05-04",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-04T08:29:00Z"
  },
  {
    "id": "YOKO-DT-2026-450",
    "issueDate": "2026-05-04",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Flipper",
    "machineNo": "FLP_03",
    "machineType": "Bead Flipping Machine 32\"-46\"",
    "downtimeMinutes": 10,
    "category": "Printer",
    "issueDetails": "Poor quality tag printing",
    "actionPlan": "Head cleaning done",
    "responsibility": "ATC",
    "closedDate": "2026-05-04",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-04T08:30:00Z"
  },
  {
    "id": "YOKO-DT-2026-451",
    "issueDate": "2026-05-04",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T03",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-05-04",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-04T08:31:00Z"
  },
  {
    "id": "YOKO-DT-2026-452",
    "issueDate": "2026-05-04",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T02",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Printer restart done",
    "responsibility": "ATC",
    "closedDate": "2026-05-04",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-04T08:32:00Z"
  },
  {
    "id": "YOKO-DT-2026-453",
    "issueDate": "2026-05-04",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US1",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-05-04",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-04T08:33:00Z"
  },
  {
    "id": "YOKO-DT-2026-454",
    "issueDate": "2026-05-04",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWFMF_02",
    "machineType": "Radial Finemac",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-05-04",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-04T08:34:00Z"
  },
  {
    "id": "YOKO-DT-2026-455",
    "issueDate": "2026-05-05",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y17",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-05-05",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-05T08:35:00Z"
  },
  {
    "id": "YOKO-DT-2026-456",
    "issueDate": "2026-05-05",
    "nature": "MES",
    "area": "Plant 4",
    "process": "Curing",
    "machineNo": "CU_K03",
    "machineType": "K-Line",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-05-05",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-05T08:36:00Z"
  },
  {
    "id": "YOKO-DT-2026-457",
    "issueDate": "2026-05-05",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC-02",
    "machineType": "Biascutter 45-90 deg",
    "downtimeMinutes": 50,
    "category": "Infra",
    "issueDetails": "Network not available",
    "actionPlan": "Input from other switch vlans has been changed and switch position has been slightly changed inside the enclosure",
    "responsibility": "ATC",
    "closedDate": "2026-05-05",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-05T08:37:00Z"
  },
  {
    "id": "YOKO-DT-2026-458",
    "issueDate": "2026-05-05",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y15",
    "machineType": "YANTAI",
    "downtimeMinutes": 30,
    "category": "Infra",
    "issueDetails": "Network not available",
    "actionPlan": "vlans changed for input switch",
    "responsibility": "ATC",
    "closedDate": "2026-05-05",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-05T08:38:00Z"
  },
  {
    "id": "YOKO-DT-2026-459",
    "issueDate": "2026-05-05",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y16",
    "machineType": "YANTAI",
    "downtimeMinutes": 30,
    "category": "Infra",
    "issueDetails": "Network not available",
    "actionPlan": "Vlan changed for input switch",
    "responsibility": "ATC",
    "closedDate": "2026-05-05",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-05T08:39:00Z"
  },
  {
    "id": "YOKO-DT-2026-460",
    "issueDate": "2026-05-05",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC-02",
    "machineType": "Biascutter 45-90 deg",
    "downtimeMinutes": 4,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-05-05",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-05T08:40:00Z"
  },
  {
    "id": "YOKO-DT-2026-461",
    "issueDate": "2026-05-05",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Band",
    "machineNo": "BBONL_01",
    "machineType": "Online Band Building 56\"",
    "downtimeMinutes": 5,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Configuration done",
    "responsibility": "ATC",
    "closedDate": "2026-05-05",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-05T08:41:00Z"
  },
  {
    "id": "YOKO-DT-2026-462",
    "issueDate": "2026-05-05",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "12_24",
    "machineType": "12\\24",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Settings re-confgiruation done",
    "responsibility": "ATC",
    "closedDate": "2026-05-05",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-05T08:42:00Z"
  },
  {
    "id": "YOKO-DT-2026-463",
    "issueDate": "2026-05-05",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T05",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-05-05",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-05T08:43:00Z"
  },
  {
    "id": "YOKO-DT-2026-464",
    "issueDate": "2026-05-06",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-05-06",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-06T08:44:00Z"
  },
  {
    "id": "YOKO-DT-2026-465",
    "issueDate": "2026-05-06",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWMRG_05",
    "machineType": "Marangoni",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-05-06",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-06T08:45:00Z"
  },
  {
    "id": "YOKO-DT-2026-466",
    "issueDate": "2026-05-06",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-05-06",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-06T08:46:00Z"
  },
  {
    "id": "YOKO-DT-2026-467",
    "issueDate": "2026-05-06",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T08",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-05-06",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-06T08:47:00Z"
  },
  {
    "id": "YOKO-DT-2026-468",
    "issueDate": "2026-05-06",
    "nature": "INFRA",
    "area": "Plant 4",
    "process": "Extrusion",
    "machineNo": "CFE_01",
    "machineType": "Duplex 10*8 Ext with 100mtr cooling line",
    "downtimeMinutes": 10,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Settings re-confgiruation done",
    "responsibility": "ATC",
    "closedDate": "2026-05-06",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-06T08:48:00Z"
  },
  {
    "id": "YOKO-DT-2026-469",
    "issueDate": "2026-05-06",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-05-06",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-06T08:49:00Z"
  },
  {
    "id": "YOKO-DT-2026-470",
    "issueDate": "2026-05-07",
    "nature": "MES",
    "area": "Plant 4",
    "process": "Extrusion",
    "machineNo": "CFE_01",
    "machineType": "Duplex 10*8 Ext with 100mtr cooling line",
    "downtimeMinutes": 10,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Callibration",
    "responsibility": "ATC",
    "closedDate": "2026-05-07",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-07T08:50:00Z"
  },
  {
    "id": "YOKO-DT-2026-471",
    "issueDate": "2026-05-07",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y23",
    "machineType": "YANTAI",
    "downtimeMinutes": 10,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-05-07",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-07T08:51:00Z"
  },
  {
    "id": "YOKO-DT-2026-472",
    "issueDate": "2026-05-07",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y08",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Printer restart done",
    "responsibility": "ATC",
    "closedDate": "2026-05-07",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-07T08:52:00Z"
  },
  {
    "id": "YOKO-DT-2026-473",
    "issueDate": "2026-05-07",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US1",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-05-07",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-07T08:53:00Z"
  },
  {
    "id": "YOKO-DT-2026-474",
    "issueDate": "2026-05-07",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWMRG_04",
    "machineType": "Marangoni",
    "downtimeMinutes": 5,
    "category": "Infra",
    "issueDetails": "Weight Auto Capturing",
    "actionPlan": "Weigh Scale Device restarted",
    "responsibility": "ATC",
    "closedDate": "2026-05-07",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-07T08:54:00Z"
  },
  {
    "id": "YOKO-DT-2026-475",
    "issueDate": "2026-05-07",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWMRG_02",
    "machineType": "Marangoni",
    "downtimeMinutes": 5,
    "category": "Infra",
    "issueDetails": "Weight Auto Capturing",
    "actionPlan": "Weigh Scale Device restarted",
    "responsibility": "ATC",
    "closedDate": "2026-05-07",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-07T08:55:00Z"
  },
  {
    "id": "YOKO-DT-2026-476",
    "issueDate": "2026-05-07",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC-01",
    "machineType": "Biascutter 20-90 deg",
    "downtimeMinutes": 10,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-05-07",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-07T08:56:00Z"
  },
  {
    "id": "YOKO-DT-2026-477",
    "issueDate": "2026-05-07",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Bead Winding",
    "machineNo": "BW_01",
    "machineType": "Bead Winding # 1 (8\"-38\")",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Printer restart done",
    "responsibility": "ATC",
    "closedDate": "2026-05-07",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-07T08:57:00Z"
  },
  {
    "id": "YOKO-DT-2026-478",
    "issueDate": "2026-05-08",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US4",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-05-08",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-08T08:58:00Z"
  },
  {
    "id": "YOKO-DT-2026-479",
    "issueDate": "2026-05-08",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T06",
    "machineType": "Taku TBM",
    "downtimeMinutes": 10,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-05-08",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-08T08:59:00Z"
  },
  {
    "id": "YOKO-DT-2026-480",
    "issueDate": "2026-05-08",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y01",
    "machineType": "YANTAI",
    "downtimeMinutes": 30,
    "category": "IPC",
    "issueDetails": "Hardware issue",
    "actionPlan": "New IPC replaced",
    "responsibility": "ATC",
    "closedDate": "2026-05-08",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-08T08:00:00Z"
  },
  {
    "id": "YOKO-DT-2026-481",
    "issueDate": "2026-05-09",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T06",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-05-09",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-09T08:01:00Z"
  },
  {
    "id": "YOKO-DT-2026-482",
    "issueDate": "2026-05-09",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T06",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-05-09",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-09T08:02:00Z"
  },
  {
    "id": "YOKO-DT-2026-483",
    "issueDate": "2026-05-09",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Band",
    "machineNo": "BBOFL_02",
    "machineType": "56\"  Band Building Machine",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "Printer restart done",
    "responsibility": "ATC",
    "closedDate": "2026-05-09",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-09T08:03:00Z"
  },
  {
    "id": "YOKO-DT-2026-484",
    "issueDate": "2026-05-09",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-05-09",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-09T08:04:00Z"
  },
  {
    "id": "YOKO-DT-2026-485",
    "issueDate": "2026-05-10",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y01",
    "machineType": "YANTAI",
    "downtimeMinutes": 10,
    "category": "IPC",
    "issueDetails": "Auto update delay",
    "actionPlan": "Manually restarted",
    "responsibility": "ATC",
    "closedDate": "2026-05-10",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-10T08:05:00Z"
  },
  {
    "id": "YOKO-DT-2026-486",
    "issueDate": "2026-05-10",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T09",
    "machineType": "Taku TBM",
    "downtimeMinutes": 15,
    "category": "Infra",
    "issueDetails": "Network not available",
    "actionPlan": "Switch side power down and make up with help of engg",
    "responsibility": "ATC",
    "closedDate": "2026-05-10",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-10T08:06:00Z"
  },
  {
    "id": "YOKO-DT-2026-487",
    "issueDate": "2026-05-10",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y23",
    "machineType": "YANTAI",
    "downtimeMinutes": 15,
    "category": "Infra",
    "issueDetails": "Network not available",
    "actionPlan": "Switch side power down and make up with help of engg",
    "responsibility": "ATC",
    "closedDate": "2026-05-10",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-10T08:07:00Z"
  },
  {
    "id": "YOKO-DT-2026-488",
    "issueDate": "2026-05-10",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "16/30",
    "machineType": "YANTAI",
    "downtimeMinutes": 15,
    "category": "Infra",
    "issueDetails": "Network not available",
    "actionPlan": "Switch side power down and make up with help of engg",
    "responsibility": "ATC",
    "closedDate": "2026-05-10",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-10T08:08:00Z"
  },
  {
    "id": "YOKO-DT-2026-489",
    "issueDate": "2026-05-10",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T01",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-05-10",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-10T08:09:00Z"
  },
  {
    "id": "YOKO-DT-2026-490",
    "issueDate": "2026-05-10",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWMRG_01",
    "machineType": "Marangoni",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-05-10",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-10T08:10:00Z"
  },
  {
    "id": "YOKO-DT-2026-491",
    "issueDate": "2026-05-10",
    "nature": "MES",
    "area": "4Roll shed",
    "process": "4Roll",
    "machineNo": "4ROLL_01",
    "machineType": "4-Roll and IL Cal  650*1900",
    "downtimeMinutes": 10,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Settings re-confgiruation done",
    "responsibility": "ATC",
    "closedDate": "2026-05-10",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-10T08:11:00Z"
  },
  {
    "id": "YOKO-DT-2026-492",
    "issueDate": "2026-05-10",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC-03",
    "machineType": "Biascutter 20-90 deg",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-05-10",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-10T08:12:00Z"
  },
  {
    "id": "YOKO-DT-2026-493",
    "issueDate": "2026-05-10",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC-03",
    "machineType": "Biascutter 20-90 deg",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Callibration",
    "responsibility": "ATC",
    "closedDate": "2026-05-10",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-10T08:13:00Z"
  },
  {
    "id": "YOKO-DT-2026-494",
    "issueDate": "2026-05-10",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC_05",
    "machineType": "Bias Cutter 45\u00b0-90\u00b0 With Auto Splicer",
    "downtimeMinutes": 5,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-05-10",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-10T08:14:00Z"
  },
  {
    "id": "YOKO-DT-2026-495",
    "issueDate": "2026-05-10",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y08",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-05-10",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-10T08:15:00Z"
  },
  {
    "id": "YOKO-DT-2026-496",
    "issueDate": "2026-05-10",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y01",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-05-10",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-10T08:16:00Z"
  },
  {
    "id": "YOKO-DT-2026-497",
    "issueDate": "2026-05-10",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "F07",
    "machineType": "Fujion",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-05-10",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-10T08:17:00Z"
  },
  {
    "id": "YOKO-DT-2026-498",
    "issueDate": "2026-05-11",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T06",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-05-11",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-11T08:18:00Z"
  },
  {
    "id": "YOKO-DT-2026-499",
    "issueDate": "2026-05-11",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC-02",
    "machineType": "Biascutter 45-90 deg",
    "downtimeMinutes": 10,
    "category": "Printer",
    "issueDetails": "Poor quality tag printing",
    "actionPlan": "Darkness increased",
    "responsibility": "ATC",
    "closedDate": "2026-05-11",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-11T08:19:00Z"
  },
  {
    "id": "YOKO-DT-2026-500",
    "issueDate": "2026-05-11",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-05-11",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-11T08:20:00Z"
  },
  {
    "id": "YOKO-DT-2026-501",
    "issueDate": "2026-05-11",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T06",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-05-11",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-11T08:21:00Z"
  },
  {
    "id": "YOKO-DT-2026-502",
    "issueDate": "2026-05-11",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T01",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Callibration",
    "responsibility": "ATC",
    "closedDate": "2026-05-11",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-11T08:22:00Z"
  },
  {
    "id": "YOKO-DT-2026-503",
    "issueDate": "2026-05-11",
    "nature": "MES",
    "area": "4Roll shed",
    "process": "3Roll",
    "machineNo": "3ROLL_02",
    "machineType": "3-Roll Calendar phase 2",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Callibration",
    "responsibility": "ATC",
    "closedDate": "2026-05-11",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-11T08:23:00Z"
  },
  {
    "id": "YOKO-DT-2026-504",
    "issueDate": "2026-05-12",
    "nature": "MES",
    "area": "4Roll shed",
    "process": "3Roll",
    "machineNo": "3ROLL_01",
    "machineType": "3-Roll Calendar Dia 560*1650",
    "downtimeMinutes": 5,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "New battery replaced",
    "responsibility": "MELSS",
    "closedDate": "2026-05-12",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-12T08:24:00Z"
  },
  {
    "id": "YOKO-DT-2026-505",
    "issueDate": "2026-05-12",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y15",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-05-12",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-12T08:25:00Z"
  },
  {
    "id": "YOKO-DT-2026-506",
    "issueDate": "2026-05-12",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y18",
    "machineType": "YANTAI",
    "downtimeMinutes": 15,
    "category": "IPC",
    "issueDetails": "Unable to login",
    "actionPlan": "Restart Done",
    "responsibility": "ATC",
    "closedDate": "2026-05-12",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-12T08:26:00Z"
  },
  {
    "id": "YOKO-DT-2026-507",
    "issueDate": "2026-05-12",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y01",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-05-12",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-12T08:27:00Z"
  },
  {
    "id": "YOKO-DT-2026-508",
    "issueDate": "2026-05-12",
    "nature": "INFRA",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWMRG_02",
    "machineType": "Marangoni",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-05-12",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-12T08:28:00Z"
  },
  {
    "id": "YOKO-DT-2026-509",
    "issueDate": "2026-05-12",
    "nature": "INFRA",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWMRG_01",
    "machineType": "Marangoni",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "Printer restart done",
    "responsibility": "ATC",
    "closedDate": "2026-05-12",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-12T08:29:00Z"
  },
  {
    "id": "YOKO-DT-2026-510",
    "issueDate": "2026-05-12",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T06",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Printer restart done",
    "responsibility": "ATC",
    "closedDate": "2026-05-12",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-12T08:30:00Z"
  },
  {
    "id": "YOKO-DT-2026-511",
    "issueDate": "2026-05-13",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Flipper",
    "machineNo": "FLP_01",
    "machineType": "Bead Flipping Machine 12\"-20\"",
    "downtimeMinutes": 10,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Callibration",
    "responsibility": "ATC",
    "closedDate": "2026-05-13",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-13T08:31:00Z"
  },
  {
    "id": "YOKO-DT-2026-512",
    "issueDate": "2026-05-13",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "F05",
    "machineType": "Fujion",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-05-13",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-13T08:32:00Z"
  },
  {
    "id": "YOKO-DT-2026-513",
    "issueDate": "2026-05-13",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y09",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-05-13",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-13T08:33:00Z"
  },
  {
    "id": "YOKO-DT-2026-514",
    "issueDate": "2026-05-13",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC-01",
    "machineType": "Biascutter 20-90 deg",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-05-13",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-13T08:34:00Z"
  },
  {
    "id": "YOKO-DT-2026-515",
    "issueDate": "2026-05-13",
    "nature": "MES",
    "area": "Plant 4",
    "process": "Extrusion",
    "machineNo": "CFE_01",
    "machineType": "Duplex 10*8 Ext with 100mtr cooling line",
    "downtimeMinutes": 15,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Settings re-confgiruation done",
    "responsibility": "ATC",
    "closedDate": "2026-05-13",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-13T08:35:00Z"
  },
  {
    "id": "YOKO-DT-2026-516",
    "issueDate": "2026-05-13",
    "nature": "INFRA",
    "area": "Plant 3",
    "process": "Slitter",
    "machineNo": "SLIT_01",
    "machineType": "Fabric Chafer Slitter",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-05-13",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-13T08:36:00Z"
  },
  {
    "id": "YOKO-DT-2026-517",
    "issueDate": "2026-05-13",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y14",
    "machineType": "YANTAI",
    "downtimeMinutes": 10,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-05-13",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-13T08:37:00Z"
  },
  {
    "id": "YOKO-DT-2026-518",
    "issueDate": "2026-05-13",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y07",
    "machineType": "YANTAI",
    "downtimeMinutes": 10,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "Printer restart done",
    "responsibility": "ATC",
    "closedDate": "2026-05-13",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-13T08:38:00Z"
  },
  {
    "id": "YOKO-DT-2026-519",
    "issueDate": "2026-05-13",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US4",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-05-13",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-13T08:39:00Z"
  },
  {
    "id": "YOKO-DT-2026-520",
    "issueDate": "2026-05-13",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "SBC_02",
    "machineType": "Steel fisher cutter",
    "downtimeMinutes": 10,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-05-13",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-13T08:40:00Z"
  },
  {
    "id": "YOKO-DT-2026-521",
    "issueDate": "2026-05-14",
    "nature": "INFRA",
    "area": "Mixing Shed",
    "process": "Mixing",
    "machineNo": "FC_01",
    "machineType": "Final Chemical",
    "downtimeMinutes": 15,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "New scanner changed",
    "responsibility": "ATC",
    "closedDate": "2026-05-14",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-14T08:41:00Z"
  },
  {
    "id": "YOKO-DT-2026-522",
    "issueDate": "2026-05-14",
    "nature": "INFRA",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US1",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Settings re-confgiruation done",
    "responsibility": "ATC",
    "closedDate": "2026-05-14",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-14T08:42:00Z"
  },
  {
    "id": "YOKO-DT-2026-523",
    "issueDate": "2026-05-14",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y09",
    "machineType": "YANTAI",
    "downtimeMinutes": 10,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-05-14",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-14T08:43:00Z"
  },
  {
    "id": "YOKO-DT-2026-524",
    "issueDate": "2026-05-14",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-05-14",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-14T08:44:00Z"
  },
  {
    "id": "YOKO-DT-2026-525",
    "issueDate": "2026-05-14",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y09",
    "machineType": "YANTAI",
    "downtimeMinutes": 10,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "Printer restart done",
    "responsibility": "ATC",
    "closedDate": "2026-05-14",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-14T08:45:00Z"
  },
  {
    "id": "YOKO-DT-2026-526",
    "issueDate": "2026-05-14",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC-01",
    "machineType": "Biascutter 20-90 deg",
    "downtimeMinutes": 10,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-05-14",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-14T08:46:00Z"
  },
  {
    "id": "YOKO-DT-2026-527",
    "issueDate": "2026-05-14",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWFMF_03",
    "machineType": "Radial Finemac",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-05-14",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-14T08:47:00Z"
  },
  {
    "id": "YOKO-DT-2026-528",
    "issueDate": "2026-05-14",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC-02",
    "machineType": "Biascutter 45-90 deg",
    "downtimeMinutes": 6,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-05-14",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-14T08:48:00Z"
  },
  {
    "id": "YOKO-DT-2026-529",
    "issueDate": "2026-05-15",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC-01",
    "machineType": "Biascutter 20-90 deg",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Printer restart done",
    "responsibility": "ATC",
    "closedDate": "2026-05-15",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-15T08:49:00Z"
  },
  {
    "id": "YOKO-DT-2026-530",
    "issueDate": "2026-05-15",
    "nature": "INFRA",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Printer restart done",
    "responsibility": "ATC",
    "closedDate": "2026-05-15",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-15T08:50:00Z"
  },
  {
    "id": "YOKO-DT-2026-531",
    "issueDate": "2026-05-16",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC-02",
    "machineType": "Biascutter 45-90 deg",
    "downtimeMinutes": 20,
    "category": "MES",
    "issueDetails": "No Data Found",
    "actionPlan": "Delay in Response",
    "responsibility": "MELSS",
    "closedDate": "2026-05-16",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-16T08:51:00Z"
  },
  {
    "id": "YOKO-DT-2026-532",
    "issueDate": "2026-05-09",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y09",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "Printer restart done",
    "responsibility": "ATC",
    "closedDate": "2026-05-09",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-09T08:52:00Z"
  },
  {
    "id": "YOKO-DT-2026-533",
    "issueDate": "2026-05-15",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y17",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Unable to login",
    "actionPlan": "Restart Done",
    "responsibility": "ATC",
    "closedDate": "2026-05-15",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-15T08:53:00Z"
  },
  {
    "id": "YOKO-DT-2026-534",
    "issueDate": "2026-05-15",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC-01",
    "machineType": "Biascutter 20-90 deg",
    "downtimeMinutes": 10,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-05-15",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-15T08:54:00Z"
  },
  {
    "id": "YOKO-DT-2026-535",
    "issueDate": "2026-05-15",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWFMF_03",
    "machineType": "Radial Finemac",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-05-15",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-15T08:55:00Z"
  },
  {
    "id": "YOKO-DT-2026-536",
    "issueDate": "2026-05-16",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T07",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-05-16",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-16T08:56:00Z"
  },
  {
    "id": "YOKO-DT-2026-537",
    "issueDate": "2026-05-16",
    "nature": "INFRA",
    "area": "Plant 3",
    "process": "Bead Winding",
    "machineNo": "BW_01",
    "machineType": "Bead Winding # 1 (8\"-38\")",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Printer restart done",
    "responsibility": "ATC",
    "closedDate": "2026-05-16",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-16T08:57:00Z"
  },
  {
    "id": "YOKO-DT-2026-538",
    "issueDate": "2026-05-16",
    "nature": "INFRA",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US1",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-05-16",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-16T08:58:00Z"
  },
  {
    "id": "YOKO-DT-2026-539",
    "issueDate": "2026-05-16",
    "nature": "INFRA",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US4",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-05-16",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-16T08:59:00Z"
  },
  {
    "id": "YOKO-DT-2026-540",
    "issueDate": "2026-05-17",
    "nature": "MES",
    "area": "Mixing Shed",
    "process": "Mixing",
    "machineNo": "MIX_05",
    "machineType": "Mixer-5 (430 LTR) Final",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-05-17",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-17T08:00:00Z"
  },
  {
    "id": "YOKO-DT-2026-541",
    "issueDate": "2026-05-16",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T03",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-05-16",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-16T08:01:00Z"
  },
  {
    "id": "YOKO-DT-2026-542",
    "issueDate": "2026-05-16",
    "nature": "INFRA",
    "area": "Plant 2",
    "process": "Flipper",
    "machineNo": "FLP_05",
    "machineType": "Bead Flipping Machine 12\"-20\"",
    "downtimeMinutes": 10,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-05-16",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-16T08:02:00Z"
  },
  {
    "id": "YOKO-DT-2026-543",
    "issueDate": "2026-05-16",
    "nature": "INFRA",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US4",
    "machineType": "Unistage",
    "downtimeMinutes": 10,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "New battery replaced",
    "responsibility": "ATC",
    "closedDate": "2026-05-16",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-16T08:03:00Z"
  },
  {
    "id": "YOKO-DT-2026-544",
    "issueDate": "2026-05-16",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWMRG_01",
    "machineType": "Marangoni",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-05-16",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-16T08:04:00Z"
  },
  {
    "id": "YOKO-DT-2026-545",
    "issueDate": "2026-05-16",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 2,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-05-16",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-16T08:05:00Z"
  },
  {
    "id": "YOKO-DT-2026-546",
    "issueDate": "2026-05-16",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US1",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-05-16",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-16T08:06:00Z"
  },
  {
    "id": "YOKO-DT-2026-547",
    "issueDate": "2026-05-17",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Band",
    "machineNo": "BBONL_01",
    "machineType": "Online Band Building 56\"",
    "downtimeMinutes": 10,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-05-17",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-17T08:07:00Z"
  },
  {
    "id": "YOKO-DT-2026-548",
    "issueDate": "2026-05-17",
    "nature": "INFRA",
    "area": "Plant 4",
    "process": "Curing",
    "machineNo": "CU_C06_1",
    "machineType": "C-Line",
    "downtimeMinutes": 30,
    "category": "Infra",
    "issueDetails": "Network not available",
    "actionPlan": "IO Crimping",
    "responsibility": "ATC",
    "closedDate": "2026-05-17",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-17T08:08:00Z"
  },
  {
    "id": "YOKO-DT-2026-549",
    "issueDate": "2026-05-17",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "F02",
    "machineType": "Fujion",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-05-17",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-17T08:09:00Z"
  },
  {
    "id": "YOKO-DT-2026-550",
    "issueDate": "2026-05-17",
    "nature": "INFRA",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWYFR_03",
    "machineType": "Yantai II Stage-16 - 30 inch - 2",
    "downtimeMinutes": 15,
    "category": "Infra",
    "issueDetails": "Weight Auto Capturing",
    "actionPlan": "Weigh Scale Device restarted",
    "responsibility": "ATC",
    "closedDate": "2026-05-17",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-17T08:10:00Z"
  },
  {
    "id": "YOKO-DT-2026-551",
    "issueDate": "2026-05-17",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-05-17",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-17T08:11:00Z"
  },
  {
    "id": "YOKO-DT-2026-552",
    "issueDate": "2026-05-17",
    "nature": "INFRA",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWFMF_01",
    "machineType": "Finemac",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-05-17",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-17T08:12:00Z"
  },
  {
    "id": "YOKO-DT-2026-553",
    "issueDate": "2026-05-18",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T01",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Callibration",
    "responsibility": "ATC",
    "closedDate": "2026-05-18",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-18T08:13:00Z"
  },
  {
    "id": "YOKO-DT-2026-554",
    "issueDate": "2026-05-18",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWMRG_01",
    "machineType": "Marangoni",
    "downtimeMinutes": 5,
    "category": "Infra",
    "issueDetails": "Weight Auto Capturing",
    "actionPlan": "Weigh Scale Device restarted",
    "responsibility": "ATC",
    "closedDate": "2026-05-18",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-18T08:14:00Z"
  },
  {
    "id": "YOKO-DT-2026-555",
    "issueDate": "2026-05-18",
    "nature": "MES",
    "area": "Plant 4",
    "process": "Curing",
    "machineNo": "CU_A01",
    "machineType": "A-Line",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Callibration",
    "responsibility": "ATC",
    "closedDate": "2026-05-18",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-18T08:15:00Z"
  },
  {
    "id": "YOKO-DT-2026-556",
    "issueDate": "2026-05-18",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWMRG_02",
    "machineType": "Marangoni",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-05-18",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-18T08:16:00Z"
  },
  {
    "id": "YOKO-DT-2026-557",
    "issueDate": "2026-05-18",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-05-18",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-18T08:17:00Z"
  },
  {
    "id": "YOKO-DT-2026-558",
    "issueDate": "2026-05-18",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "F09",
    "machineType": "Fujion",
    "downtimeMinutes": 5,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-05-18",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-18T08:18:00Z"
  },
  {
    "id": "YOKO-DT-2026-559",
    "issueDate": "2026-05-18",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y16",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-05-18",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-18T08:19:00Z"
  },
  {
    "id": "YOKO-DT-2026-560",
    "issueDate": "2026-05-18",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y02",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-05-18",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-18T08:20:00Z"
  },
  {
    "id": "YOKO-DT-2026-561",
    "issueDate": "2026-05-18",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US3",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-05-18",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-18T08:21:00Z"
  },
  {
    "id": "YOKO-DT-2026-562",
    "issueDate": "2026-05-18",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWMRG_05",
    "machineType": "Marangoni",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-05-18",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-18T08:22:00Z"
  },
  {
    "id": "YOKO-DT-2026-563",
    "issueDate": "2026-05-18",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "F01",
    "machineType": "Fujion",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-05-18",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-18T08:23:00Z"
  },
  {
    "id": "YOKO-DT-2026-564",
    "issueDate": "2026-05-18",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "F01",
    "machineType": "Fujion",
    "downtimeMinutes": 10,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "Printer restart done",
    "responsibility": "ATC",
    "closedDate": "2026-05-18",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-18T08:24:00Z"
  },
  {
    "id": "YOKO-DT-2026-565",
    "issueDate": "2026-05-18",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US3",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-05-18",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-18T08:25:00Z"
  },
  {
    "id": "YOKO-DT-2026-566",
    "issueDate": "2026-05-18",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Band",
    "machineNo": "BBOFL_02",
    "machineType": "56\"  Band Building Machine",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Printer restart done",
    "responsibility": "ATC",
    "closedDate": "2026-05-18",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-18T08:26:00Z"
  },
  {
    "id": "YOKO-DT-2026-567",
    "issueDate": "2026-05-19",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWYFR_01",
    "machineType": "12-24 radial machine",
    "downtimeMinutes": 35,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "New printer replaced",
    "responsibility": "ATC",
    "closedDate": "2026-05-19",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-19T08:27:00Z"
  },
  {
    "id": "YOKO-DT-2026-568",
    "issueDate": "2026-05-19",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "SBC_02",
    "machineType": "Steel fisher cutter",
    "downtimeMinutes": 15,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Settings re-confgiruation done",
    "responsibility": "ATC",
    "closedDate": "2026-05-19",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-19T08:28:00Z"
  },
  {
    "id": "YOKO-DT-2026-569",
    "issueDate": "2026-05-19",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US4",
    "machineType": "Unistage",
    "downtimeMinutes": 10,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "New battery replaced",
    "responsibility": "ATC",
    "closedDate": "2026-05-19",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-19T08:29:00Z"
  },
  {
    "id": "YOKO-DT-2026-570",
    "issueDate": "2026-05-19",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 10,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-05-19",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-19T08:30:00Z"
  },
  {
    "id": "YOKO-DT-2026-571",
    "issueDate": "2026-05-19",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y02",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-05-19",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-19T08:31:00Z"
  },
  {
    "id": "YOKO-DT-2026-572",
    "issueDate": "2026-05-19",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Slitter",
    "machineNo": "SLIT_01",
    "machineType": "Fabric Chafer Slitter",
    "downtimeMinutes": 5,
    "category": "MES",
    "issueDetails": "No Data Found",
    "actionPlan": "Delay in Response",
    "responsibility": "MELSS",
    "closedDate": "2026-05-19",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-19T08:32:00Z"
  },
  {
    "id": "YOKO-DT-2026-573",
    "issueDate": "2026-05-20",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "F07",
    "machineType": "Fujion",
    "downtimeMinutes": 3,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-05-20",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-20T08:33:00Z"
  },
  {
    "id": "YOKO-DT-2026-574",
    "issueDate": "2026-05-20",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T09",
    "machineType": "Taku TBM",
    "downtimeMinutes": 2,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-05-20",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-20T08:34:00Z"
  },
  {
    "id": "YOKO-DT-2026-575",
    "issueDate": "2026-05-20",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC-03",
    "machineType": "Biascutter 20-90 deg",
    "downtimeMinutes": 10,
    "category": "IPC",
    "issueDetails": "hardware issue",
    "actionPlan": "Eletrical issue",
    "responsibility": "ATC",
    "closedDate": "2026-05-20",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-20T08:35:00Z"
  },
  {
    "id": "YOKO-DT-2026-576",
    "issueDate": "2026-05-20",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-05-20",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-20T08:36:00Z"
  },
  {
    "id": "YOKO-DT-2026-577",
    "issueDate": "2026-05-20",
    "nature": "INFRA",
    "area": "Mixing Shed",
    "process": "Mixing",
    "machineNo": "MIX_01",
    "machineType": "Mixer-1 (430 LTR) Master",
    "downtimeMinutes": 10,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-05-20",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-20T08:37:00Z"
  },
  {
    "id": "YOKO-DT-2026-578",
    "issueDate": "2026-05-20",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-05-20",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-20T08:38:00Z"
  },
  {
    "id": "YOKO-DT-2026-579",
    "issueDate": "2026-05-20",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "F03",
    "machineType": "Fujion",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-05-20",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-20T08:39:00Z"
  },
  {
    "id": "YOKO-DT-2026-580",
    "issueDate": "2026-05-20",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC-02",
    "machineType": "Biascutter 45-90 deg",
    "downtimeMinutes": 5,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-05-20",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-20T08:40:00Z"
  },
  {
    "id": "YOKO-DT-2026-581",
    "issueDate": "2026-05-20",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC-01",
    "machineType": "Biascutter 20-90 deg",
    "downtimeMinutes": 5,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Reinsert the Cabel",
    "responsibility": "ATC",
    "closedDate": "2026-05-20",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-20T08:41:00Z"
  },
  {
    "id": "YOKO-DT-2026-582",
    "issueDate": "2026-05-20",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US3",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-05-20",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-20T08:42:00Z"
  },
  {
    "id": "YOKO-DT-2026-583",
    "issueDate": "2026-05-20",
    "nature": "INFRA",
    "area": "Mixing Shed",
    "process": "Mixing",
    "machineNo": "MIX_01",
    "machineType": "Mixer-1 (430 LTR) Master",
    "downtimeMinutes": 20,
    "category": "Printer",
    "issueDetails": "Poor quality tag printing",
    "actionPlan": "Head cleaning done",
    "responsibility": "ATC",
    "closedDate": "2026-05-20",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-20T08:43:00Z"
  },
  {
    "id": "YOKO-DT-2026-584",
    "issueDate": "2026-05-20",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "F05",
    "machineType": "Fujion",
    "downtimeMinutes": 10,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "Printer restart done",
    "responsibility": "ATC",
    "closedDate": "2026-05-20",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-20T08:44:00Z"
  },
  {
    "id": "YOKO-DT-2026-585",
    "issueDate": "2026-05-21",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "F01",
    "machineType": "Fujion",
    "downtimeMinutes": 10,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-05-21",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-21T08:45:00Z"
  },
  {
    "id": "YOKO-DT-2026-586",
    "issueDate": "2026-05-21",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWFMD_01",
    "machineType": "Finemac",
    "downtimeMinutes": 15,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-05-21",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-21T08:46:00Z"
  },
  {
    "id": "YOKO-DT-2026-587",
    "issueDate": "2026-05-21",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y02",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-05-21",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-21T08:47:00Z"
  },
  {
    "id": "YOKO-DT-2026-588",
    "issueDate": "2026-05-21",
    "nature": "INFRA",
    "area": "Plant 3",
    "process": "Bead Winding",
    "machineNo": "BW_02",
    "machineType": "Bead Winding # 2 (15\"-58\")",
    "downtimeMinutes": 10,
    "category": "IPC",
    "issueDetails": "Delay access or response",
    "actionPlan": "Cache cleared and restart done",
    "responsibility": "ATC",
    "closedDate": "2026-05-21",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-21T08:48:00Z"
  },
  {
    "id": "YOKO-DT-2026-589",
    "issueDate": "2026-05-21",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "F05",
    "machineType": "Fujion",
    "downtimeMinutes": 10,
    "category": "IPC",
    "issueDetails": "Spec not open",
    "actionPlan": "Spec remaping",
    "responsibility": "ATC",
    "closedDate": "2026-05-21",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-21T08:49:00Z"
  },
  {
    "id": "YOKO-DT-2026-590",
    "issueDate": "2026-05-21",
    "nature": "INFRA",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWMRG_04",
    "machineType": "Marangoni",
    "downtimeMinutes": 10,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Settings re-confgiruation done",
    "responsibility": "ATC",
    "closedDate": "2026-05-21",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-21T08:50:00Z"
  },
  {
    "id": "YOKO-DT-2026-591",
    "issueDate": "2026-05-22",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWFMD_01",
    "machineType": "Finemac",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-05-22",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-22T08:51:00Z"
  },
  {
    "id": "YOKO-DT-2026-592",
    "issueDate": "2026-05-22",
    "nature": "INFRA",
    "area": "Plant 3",
    "process": "Slitter",
    "machineNo": "SLIT_02",
    "machineType": "Gum Slitter",
    "downtimeMinutes": 5,
    "category": "Infra",
    "issueDetails": "Network not available",
    "actionPlan": "Netowrk Patch Cable replaced",
    "responsibility": "ATC",
    "closedDate": "2026-05-22",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-22T08:52:00Z"
  },
  {
    "id": "YOKO-DT-2026-593",
    "issueDate": "2026-05-22",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T08",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-05-22",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-22T08:53:00Z"
  },
  {
    "id": "YOKO-DT-2026-594",
    "issueDate": "2026-05-22",
    "nature": "INFRA",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-05-22",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-22T08:54:00Z"
  },
  {
    "id": "YOKO-DT-2026-595",
    "issueDate": "2026-05-22",
    "nature": "INFRA",
    "area": "Plant 3",
    "process": "Slitter",
    "machineNo": "SLIT_02",
    "machineType": "Gum Slitter",
    "downtimeMinutes": 10,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-05-22",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-22T08:55:00Z"
  },
  {
    "id": "YOKO-DT-2026-596",
    "issueDate": "2026-05-22",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "F06",
    "machineType": "Fujion",
    "downtimeMinutes": 10,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Reinsert the Cabel",
    "responsibility": "ATC",
    "closedDate": "2026-05-22",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-22T08:56:00Z"
  },
  {
    "id": "YOKO-DT-2026-597",
    "issueDate": "2026-05-22",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y22",
    "machineType": "YANTAI",
    "downtimeMinutes": 10,
    "category": "MES",
    "issueDetails": "Spec not opening",
    "actionPlan": "drive mapped again",
    "responsibility": "ATC",
    "closedDate": "2026-05-22",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-22T08:57:00Z"
  },
  {
    "id": "YOKO-DT-2026-598",
    "issueDate": "2026-05-22",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "F01",
    "machineType": "Fujion",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "Printer restart done",
    "responsibility": "ATC",
    "closedDate": "2026-05-22",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-22T08:58:00Z"
  },
  {
    "id": "YOKO-DT-2026-599",
    "issueDate": "2026-05-22",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Band",
    "machineNo": "BBOFL_01",
    "machineType": "76\"  Band Building Machine",
    "downtimeMinutes": 10,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-05-22",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-22T08:59:00Z"
  },
  {
    "id": "YOKO-DT-2026-600",
    "issueDate": "2026-05-23",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y01",
    "machineType": "YANTAI",
    "downtimeMinutes": 10,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-05-23",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-23T08:00:00Z"
  },
  {
    "id": "YOKO-DT-2026-601",
    "issueDate": "2026-05-23",
    "nature": "INFRA",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-05-23",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-23T08:01:00Z"
  },
  {
    "id": "YOKO-DT-2026-602",
    "issueDate": "2026-05-23",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC-01",
    "machineType": "Biascutter 20-90 deg",
    "downtimeMinutes": 10,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-05-23",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-23T08:02:00Z"
  },
  {
    "id": "YOKO-DT-2026-603",
    "issueDate": "2026-05-23",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC_04",
    "machineType": "Bias Cutter 45\u00b0-90\u00b0 With Auto Splicer",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "Printer restart done",
    "responsibility": "ATC",
    "closedDate": "2026-05-23",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-23T08:03:00Z"
  },
  {
    "id": "YOKO-DT-2026-604",
    "issueDate": "2026-05-23",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y13",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-05-23",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-23T08:04:00Z"
  },
  {
    "id": "YOKO-DT-2026-605",
    "issueDate": "2026-05-24",
    "nature": "MES",
    "area": "IT infra",
    "process": "All",
    "machineNo": "All",
    "machineType": "All",
    "downtimeMinutes": 15,
    "category": "MES",
    "issueDetails": "Slowness or stopped",
    "actionPlan": "Manually restarted apache",
    "responsibility": "MELSS",
    "closedDate": "2026-05-24",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-24T08:05:00Z"
  },
  {
    "id": "YOKO-DT-2026-606",
    "issueDate": "2026-05-24",
    "nature": "INFRA",
    "area": "Plant 3",
    "process": "Bead Winding",
    "machineNo": "BW_01",
    "machineType": "Bead Winding # 1 (8\"-38\")",
    "downtimeMinutes": 15,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-05-24",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-24T08:06:00Z"
  },
  {
    "id": "YOKO-DT-2026-607",
    "issueDate": "2026-05-24",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "F02",
    "machineType": "Fujion",
    "downtimeMinutes": 10,
    "category": "IPC",
    "issueDetails": "Delay access or response",
    "actionPlan": "Cache cleared and restart done",
    "responsibility": "ATC",
    "closedDate": "2026-05-24",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-24T08:07:00Z"
  },
  {
    "id": "YOKO-DT-2026-608",
    "issueDate": "2026-05-24",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y01",
    "machineType": "YANTAI",
    "downtimeMinutes": 10,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-05-24",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-24T08:08:00Z"
  },
  {
    "id": "YOKO-DT-2026-609",
    "issueDate": "2026-05-24",
    "nature": "INFRA",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWFMD_01",
    "machineType": "Finemac",
    "downtimeMinutes": 10,
    "category": "Infra",
    "issueDetails": "Weight Auto Capturing",
    "actionPlan": "Weigh Scale Device restarted",
    "responsibility": "ATC",
    "closedDate": "2026-05-24",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-24T08:09:00Z"
  },
  {
    "id": "YOKO-DT-2026-610",
    "issueDate": "2026-05-24",
    "nature": "INFRA",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWMRG_01",
    "machineType": "Marangoni",
    "downtimeMinutes": 5,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-05-24",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-24T08:10:00Z"
  },
  {
    "id": "YOKO-DT-2026-611",
    "issueDate": "2026-05-24",
    "nature": "MES",
    "area": "Mixing Shed",
    "process": "Mixing",
    "machineNo": "MIX_04",
    "machineType": "Mixer-4 (430 LTR) Master / Final",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Callibration",
    "responsibility": "ATC",
    "closedDate": "2026-05-24",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-24T08:11:00Z"
  },
  {
    "id": "YOKO-DT-2026-612",
    "issueDate": "2026-05-24",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T03",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-05-24",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-24T08:12:00Z"
  },
  {
    "id": "YOKO-DT-2026-613",
    "issueDate": "2026-05-24",
    "nature": "MES",
    "area": "Mixing Shed",
    "process": "Mixing",
    "machineNo": "MIX_04",
    "machineType": "Mixer-4 (430 LTR) Master / Final",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "MELSS",
    "closedDate": "2026-05-24",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-24T08:13:00Z"
  },
  {
    "id": "YOKO-DT-2026-614",
    "issueDate": "2026-05-24",
    "nature": "MES",
    "area": "IT infra",
    "process": "All",
    "machineNo": "All",
    "machineType": "All",
    "downtimeMinutes": 10,
    "category": "MES",
    "issueDetails": "No Data Found",
    "actionPlan": "Delay in Response",
    "responsibility": "MELSS",
    "closedDate": "2026-05-24",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-24T08:14:00Z"
  },
  {
    "id": "YOKO-DT-2026-615",
    "issueDate": "2026-05-24",
    "nature": "MES",
    "area": "Plant 4",
    "process": "Curing",
    "machineNo": "CU_C05_2",
    "machineType": "C-Line",
    "downtimeMinutes": 10,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-05-24",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-24T08:15:00Z"
  },
  {
    "id": "YOKO-DT-2026-616",
    "issueDate": "2026-05-25",
    "nature": "INFRA",
    "area": "Mixing Shed",
    "process": "Mixing",
    "machineNo": "MIX_05",
    "machineType": "Mixer-5 (430 LTR) Final",
    "downtimeMinutes": 10,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-05-25",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-25T08:16:00Z"
  },
  {
    "id": "YOKO-DT-2026-617",
    "issueDate": "2026-05-25",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-05-25",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-25T08:17:00Z"
  },
  {
    "id": "YOKO-DT-2026-618",
    "issueDate": "2026-05-25",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y09",
    "machineType": "YANTAI",
    "downtimeMinutes": 10,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "Printer restart done",
    "responsibility": "ATC",
    "closedDate": "2026-05-25",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-25T08:18:00Z"
  },
  {
    "id": "YOKO-DT-2026-619",
    "issueDate": "2026-05-25",
    "nature": "INFRA",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWYFR_01",
    "machineType": "12-24 radial machine",
    "downtimeMinutes": 20,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "New printer replaced",
    "responsibility": "ATC",
    "closedDate": "2026-05-25",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-25T08:19:00Z"
  },
  {
    "id": "YOKO-DT-2026-620",
    "issueDate": "2026-05-25",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "SBC_02",
    "machineType": "Steel fisher cutter",
    "downtimeMinutes": 10,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Settings re-confgiruation done",
    "responsibility": "ATC",
    "closedDate": "2026-05-25",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-25T08:20:00Z"
  },
  {
    "id": "YOKO-DT-2026-621",
    "issueDate": "2026-05-25",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US4",
    "machineType": "Unistage",
    "downtimeMinutes": 30,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Program corrected by engg",
    "responsibility": "MELSS",
    "closedDate": "2026-05-25",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-25T08:21:00Z"
  },
  {
    "id": "YOKO-DT-2026-622",
    "issueDate": "2026-05-26",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-05-26",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-26T08:22:00Z"
  },
  {
    "id": "YOKO-DT-2026-623",
    "issueDate": "2026-05-26",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Band",
    "machineNo": "BBOFL_01",
    "machineType": "76\"  Band Building Machine",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Printer restart done",
    "responsibility": "ATC",
    "closedDate": "2026-05-26",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-26T08:23:00Z"
  },
  {
    "id": "YOKO-DT-2026-624",
    "issueDate": "2026-05-26",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y01",
    "machineType": "YANTAI",
    "downtimeMinutes": 10,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-05-26",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-26T08:24:00Z"
  },
  {
    "id": "YOKO-DT-2026-625",
    "issueDate": "2026-05-26",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "24-Dec",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-05-26",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-26T08:25:00Z"
  },
  {
    "id": "YOKO-DT-2026-626",
    "issueDate": "2026-05-26",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y12",
    "machineType": "YANTAI",
    "downtimeMinutes": 10,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "New printer replaced",
    "responsibility": "ATC",
    "closedDate": "2026-05-26",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-26T08:26:00Z"
  },
  {
    "id": "YOKO-DT-2026-627",
    "issueDate": "2026-05-26",
    "nature": "MES",
    "area": "Mixing Shed",
    "process": "Mixing",
    "machineNo": "MIX_04",
    "machineType": "Mixer-4 (430 LTR) Master / Final",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "Printer restart done",
    "responsibility": "ATC",
    "closedDate": "2026-05-26",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-26T08:27:00Z"
  },
  {
    "id": "YOKO-DT-2026-628",
    "issueDate": "2026-05-27",
    "nature": "INFRA",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWMRG_02",
    "machineType": "Marangoni",
    "downtimeMinutes": 10,
    "category": "Infra",
    "issueDetails": "Weight Auto Capturing",
    "actionPlan": "Weigh Scale Device restarted",
    "responsibility": "ATC",
    "closedDate": "2026-05-27",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-27T08:28:00Z"
  },
  {
    "id": "YOKO-DT-2026-629",
    "issueDate": "2026-05-27",
    "nature": "INFRA",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US3",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-05-27",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-27T08:29:00Z"
  },
  {
    "id": "YOKO-DT-2026-630",
    "issueDate": "2026-05-27",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "F02",
    "machineType": "Fujion",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-05-27",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-27T08:30:00Z"
  },
  {
    "id": "YOKO-DT-2026-631",
    "issueDate": "2026-05-28",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T01",
    "machineType": "Taku TBM",
    "downtimeMinutes": 10,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Settings re-confgiruation done",
    "responsibility": "ATC",
    "closedDate": "2026-05-28",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-28T08:31:00Z"
  },
  {
    "id": "YOKO-DT-2026-632",
    "issueDate": "2026-05-28",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y14",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-05-28",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-28T08:32:00Z"
  },
  {
    "id": "YOKO-DT-2026-633",
    "issueDate": "2026-05-28",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US3",
    "machineType": "Unistage",
    "downtimeMinutes": 10,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-05-28",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-28T08:33:00Z"
  },
  {
    "id": "YOKO-DT-2026-634",
    "issueDate": "2026-05-28",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y16",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-05-28",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-28T08:34:00Z"
  },
  {
    "id": "YOKO-DT-2026-635",
    "issueDate": "2026-05-28",
    "nature": "MES",
    "area": "Mixing Shed",
    "process": "Mixing",
    "machineNo": "MIX_04",
    "machineType": "Mixer-4 (430 LTR) Master / Final",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-05-28",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-28T08:35:00Z"
  },
  {
    "id": "YOKO-DT-2026-636",
    "issueDate": "2026-05-28",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T09",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-05-28",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-28T08:36:00Z"
  },
  {
    "id": "YOKO-DT-2026-637",
    "issueDate": "2026-05-29",
    "nature": "MES",
    "area": "Plant 4",
    "process": "Extrusion",
    "machineNo": "CFE_02",
    "machineType": "Simplex 6\" Ext with 75mtr cooling line",
    "downtimeMinutes": 5,
    "category": "MES",
    "issueDetails": "Spec not available",
    "actionPlan": "spec mapped",
    "responsibility": "ATC",
    "closedDate": "2026-05-29",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-29T08:37:00Z"
  },
  {
    "id": "YOKO-DT-2026-638",
    "issueDate": "2026-05-29",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T09",
    "machineType": "Taku TBM",
    "downtimeMinutes": 12,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-05-29",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-29T08:38:00Z"
  },
  {
    "id": "YOKO-DT-2026-639",
    "issueDate": "2026-05-29",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T04",
    "machineType": "Taku TBM",
    "downtimeMinutes": 3,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-05-29",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-29T08:39:00Z"
  },
  {
    "id": "YOKO-DT-2026-640",
    "issueDate": "2026-05-29",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T05",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-05-29",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-29T08:40:00Z"
  },
  {
    "id": "YOKO-DT-2026-641",
    "issueDate": "2026-05-29",
    "nature": "INFRA",
    "area": "Plant 4",
    "process": "Extrusion",
    "machineNo": "CFE_02",
    "machineType": "Simplex 6\" Ext with 75mtr cooling line",
    "downtimeMinutes": 25,
    "category": "IPC",
    "issueDetails": "Hardware issue",
    "actionPlan": "New IPC replaced",
    "responsibility": "ATC",
    "closedDate": "2026-05-29",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-29T08:41:00Z"
  },
  {
    "id": "YOKO-DT-2026-642",
    "issueDate": "2026-05-29",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-05-29",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-29T08:42:00Z"
  },
  {
    "id": "YOKO-DT-2026-643",
    "issueDate": "2026-05-29",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWFMD_01",
    "machineType": "Finemac",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-05-29",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-29T08:43:00Z"
  },
  {
    "id": "YOKO-DT-2026-644",
    "issueDate": "2026-05-29",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T05",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-05-29",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-29T08:44:00Z"
  },
  {
    "id": "YOKO-DT-2026-645",
    "issueDate": "2026-05-29",
    "nature": "MES",
    "area": "Mixing Shed",
    "process": "Mixing",
    "machineNo": "MIX_04",
    "machineType": "Mixer-4 (430 LTR) Master / Final",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "MELSS side configuration done",
    "responsibility": "MELSS",
    "closedDate": "2026-05-29",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-29T08:45:00Z"
  },
  {
    "id": "YOKO-DT-2026-646",
    "issueDate": "2026-05-30",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWFMF_02",
    "machineType": "Radial Finemac",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-05-30",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-30T08:46:00Z"
  },
  {
    "id": "YOKO-DT-2026-647",
    "issueDate": "2026-05-30",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US1",
    "machineType": "Unistage",
    "downtimeMinutes": 3,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-05-30",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-30T08:47:00Z"
  },
  {
    "id": "YOKO-DT-2026-648",
    "issueDate": "2026-05-30",
    "nature": "INFRA",
    "area": "4Roll shed",
    "process": "3Roll",
    "machineNo": "3ROLL_02",
    "machineType": "3-Roll Calendar phase 2",
    "downtimeMinutes": 10,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-05-30",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-30T08:48:00Z"
  },
  {
    "id": "YOKO-DT-2026-649",
    "issueDate": "2026-05-30",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y03",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-05-30",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-30T08:49:00Z"
  },
  {
    "id": "YOKO-DT-2026-650",
    "issueDate": "2026-05-30",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y05",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-05-30",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-30T08:50:00Z"
  },
  {
    "id": "YOKO-DT-2026-651",
    "issueDate": "2026-05-30",
    "nature": "INFRA",
    "area": "Plant 4",
    "process": "Extrusion",
    "machineNo": "CFE_02",
    "machineType": "Simplex 6\" Ext with 75mtr cooling line",
    "downtimeMinutes": 15,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "Printer restart done",
    "responsibility": "ATC",
    "closedDate": "2026-05-30",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-30T08:51:00Z"
  },
  {
    "id": "YOKO-DT-2026-652",
    "issueDate": "2026-05-30",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T07",
    "machineType": "Taku TBM",
    "downtimeMinutes": 2,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-05-30",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-30T08:52:00Z"
  },
  {
    "id": "YOKO-DT-2026-653",
    "issueDate": "2026-05-30",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US1",
    "machineType": "Unistage",
    "downtimeMinutes": 8,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-05-30",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-30T08:53:00Z"
  },
  {
    "id": "YOKO-DT-2026-654",
    "issueDate": "2026-05-30",
    "nature": "INFRA",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWYFR_01",
    "machineType": "12-24 radial machine",
    "downtimeMinutes": 10,
    "category": "Infra",
    "issueDetails": "Weight Auto Capturing",
    "actionPlan": "Weigh Scale Device restarted",
    "responsibility": "ATC",
    "closedDate": "2026-05-30",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-30T08:54:00Z"
  },
  {
    "id": "YOKO-DT-2026-655",
    "issueDate": "2026-05-30",
    "nature": "INFRA",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWMRG_02",
    "machineType": "Marangoni",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Printer restart done",
    "responsibility": "ATC",
    "closedDate": "2026-05-30",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-30T08:55:00Z"
  },
  {
    "id": "YOKO-DT-2026-656",
    "issueDate": "2026-05-30",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-05-30",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-30T08:56:00Z"
  },
  {
    "id": "YOKO-DT-2026-657",
    "issueDate": "2026-05-30",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y05",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-05-30",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-30T08:57:00Z"
  },
  {
    "id": "YOKO-DT-2026-658",
    "issueDate": "2026-05-30",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y02",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-05-30",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-30T08:58:00Z"
  },
  {
    "id": "YOKO-DT-2026-659",
    "issueDate": "2026-05-30",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US3",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-05-30",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-30T08:59:00Z"
  },
  {
    "id": "YOKO-DT-2026-660",
    "issueDate": "2026-05-30",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Bead Winding",
    "machineNo": "BW_02",
    "machineType": "Bead Winding # 2 (15\"-58\")",
    "downtimeMinutes": 5,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Cable removed and reconnected",
    "responsibility": "MELSS",
    "closedDate": "2026-05-30",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-30T08:00:00Z"
  },
  {
    "id": "YOKO-DT-2026-661",
    "issueDate": "2026-05-30",
    "nature": "MES",
    "area": "4Roll shed",
    "process": "4Roll",
    "machineNo": "4ROLL_01",
    "machineType": "4-Roll and IL Cal  650*1900",
    "downtimeMinutes": 5,
    "category": "MES",
    "issueDetails": "BoM values not coming to MES",
    "actionPlan": "Manually corrected",
    "responsibility": "MELSS",
    "closedDate": "2026-05-30",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-30T08:01:00Z"
  },
  {
    "id": "YOKO-DT-2026-662",
    "issueDate": "2026-05-30",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Band",
    "machineNo": "BBOFL_02",
    "machineType": "56\"  Band Building Machine",
    "downtimeMinutes": 10,
    "category": "Printer",
    "issueDetails": "Poor quality tag printing",
    "actionPlan": "New ribbon changed",
    "responsibility": "ATC",
    "closedDate": "2026-05-30",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-30T08:02:00Z"
  },
  {
    "id": "YOKO-DT-2026-663",
    "issueDate": "2026-05-31",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T07",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-05-31",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-31T08:03:00Z"
  },
  {
    "id": "YOKO-DT-2026-664",
    "issueDate": "2026-05-31",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y24",
    "machineType": "YANTAI",
    "downtimeMinutes": 15,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "New printer replaced",
    "responsibility": "ATC",
    "closedDate": "2026-05-31",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-31T08:04:00Z"
  },
  {
    "id": "YOKO-DT-2026-665",
    "issueDate": "2026-05-31",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-05-31",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-31T08:05:00Z"
  },
  {
    "id": "YOKO-DT-2026-666",
    "issueDate": "2026-05-31",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "F01",
    "machineType": "Fujion",
    "downtimeMinutes": 30,
    "category": "MES",
    "issueDetails": "plc got hanged",
    "actionPlan": "restarted plc",
    "responsibility": "MELSS",
    "closedDate": "2026-05-31",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-31T08:06:00Z"
  },
  {
    "id": "YOKO-DT-2026-667",
    "issueDate": "2026-05-31",
    "nature": "MES",
    "area": "IT infra",
    "process": "All",
    "machineNo": "All",
    "machineType": "All",
    "downtimeMinutes": 5,
    "category": "MES",
    "issueDetails": "Slowness or stopped",
    "actionPlan": "Manually restarted apache",
    "responsibility": "MELSS",
    "closedDate": "2026-05-31",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-31T08:07:00Z"
  },
  {
    "id": "YOKO-DT-2026-668",
    "issueDate": "2026-05-31",
    "nature": "MES",
    "area": "4Roll shed",
    "process": "4Roll",
    "machineNo": "4ROLL_01",
    "machineType": "4-Roll and IL Cal  650*1900",
    "downtimeMinutes": 5,
    "category": "MES",
    "issueDetails": "Slowness or stopped",
    "actionPlan": "Manually restarted apache",
    "responsibility": "MELSS",
    "closedDate": "2026-05-31",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-31T08:08:00Z"
  },
  {
    "id": "YOKO-DT-2026-669",
    "issueDate": "2026-05-31",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T02",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Delay access or response",
    "actionPlan": "Cache cleared and restart done",
    "responsibility": "ATC",
    "closedDate": "2026-05-31",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-31T08:09:00Z"
  },
  {
    "id": "YOKO-DT-2026-670",
    "issueDate": "2026-05-31",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWMRG_02",
    "machineType": "Marangoni",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Settings re-confgiruation done",
    "responsibility": "ATC",
    "closedDate": "2026-05-31",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-31T08:10:00Z"
  },
  {
    "id": "YOKO-DT-2026-671",
    "issueDate": "2026-05-31",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC-03",
    "machineType": "Biascutter 20-90 deg",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-05-31",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-31T08:11:00Z"
  },
  {
    "id": "YOKO-DT-2026-672",
    "issueDate": "2026-05-31",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "MES",
    "issueDetails": "No Data Found",
    "actionPlan": "Delay in Response",
    "responsibility": "MELSS",
    "closedDate": "2026-05-31",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-31T08:12:00Z"
  },
  {
    "id": "YOKO-DT-2026-673",
    "issueDate": "2026-05-31",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T03",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-05-31",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-05-31T08:13:00Z"
  },
  {
    "id": "YOKO-DT-2026-674",
    "issueDate": "2026-06-01",
    "nature": "INFRA",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWMRG_01",
    "machineType": "Marangoni",
    "downtimeMinutes": 8,
    "category": "IPC",
    "issueDetails": "Delay access or response",
    "actionPlan": "Cache cleared and restart done",
    "responsibility": "ATC",
    "closedDate": "2026-06-01",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-01T14:15:00Z"
  },
  {
    "id": "YOKO-DT-2026-675",
    "issueDate": "2026-06-01",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-06-01",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-01T08:37:00Z"
  },
  {
    "id": "YOKO-DT-2026-676",
    "issueDate": "2026-06-01",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Band",
    "machineNo": "BBONL_01",
    "machineType": "Online Band Building 56\"",
    "downtimeMinutes": 5,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-06-01",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-01T08:13:00Z"
  },
  {
    "id": "YOKO-DT-2026-677",
    "issueDate": "2026-06-01",
    "nature": "MES",
    "area": "Mixing Shed",
    "process": "Mixing",
    "machineNo": "MIX_04",
    "machineType": "Mixer-4 (430 LTR) Master / Final",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Callibration",
    "responsibility": "ATC",
    "closedDate": "2026-06-01",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-01T19:14:00Z"
  },
  {
    "id": "YOKO-DT-2026-678",
    "issueDate": "2026-06-01",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC-02",
    "machineType": "Biascutter 45-90 deg",
    "downtimeMinutes": 7,
    "category": "Printer",
    "issueDetails": "Poor quality tag printing",
    "actionPlan": "Darkness increased",
    "responsibility": "ATC",
    "closedDate": "2026-06-01",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-01T06:48:00Z"
  },
  {
    "id": "YOKO-DT-2026-679",
    "issueDate": "2026-06-01",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T08",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-06-01",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-01T12:48:00Z"
  },
  {
    "id": "YOKO-DT-2026-680",
    "issueDate": "2026-06-02",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y09",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "Printer restart done",
    "responsibility": "ATC",
    "closedDate": "2026-06-02",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-02T09:22:00Z"
  },
  {
    "id": "YOKO-DT-2026-681",
    "issueDate": "2026-06-02",
    "nature": "MES",
    "area": "IT infra",
    "process": "All",
    "machineNo": "All",
    "machineType": "All",
    "downtimeMinutes": 5,
    "category": "MES",
    "issueDetails": "No Data Found",
    "actionPlan": "Delay in Response",
    "responsibility": "MELSS",
    "closedDate": "2026-06-02",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-02T20:34:00Z"
  },
  {
    "id": "YOKO-DT-2026-682",
    "issueDate": "2026-06-02",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y24",
    "machineType": "YANTAI",
    "downtimeMinutes": 21,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "New printer replaced",
    "responsibility": "ATC",
    "closedDate": "2026-06-02",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-02T18:05:00Z"
  },
  {
    "id": "YOKO-DT-2026-683",
    "issueDate": "2026-06-02",
    "nature": "INFRA",
    "area": "4Roll shed",
    "process": "3Roll",
    "machineNo": "3ROLL_02",
    "machineType": "3-Roll Calendar phase 2",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-06-02",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-02T17:36:00Z"
  },
  {
    "id": "YOKO-DT-2026-684",
    "issueDate": "2026-06-02",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T05",
    "machineType": "Taku TBM",
    "downtimeMinutes": 9,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-06-02",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-02T07:42:00Z"
  },
  {
    "id": "YOKO-DT-2026-685",
    "issueDate": "2026-06-02",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y23",
    "machineType": "YANTAI",
    "downtimeMinutes": 18,
    "category": "Infra",
    "issueDetails": "Network not available",
    "actionPlan": "Switch side power down and make up with help of engg",
    "responsibility": "ATC",
    "closedDate": "2026-06-02",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-02T09:24:00Z"
  },
  {
    "id": "YOKO-DT-2026-686",
    "issueDate": "2026-06-03",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-06-03",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-03T17:22:00Z"
  },
  {
    "id": "YOKO-DT-2026-687",
    "issueDate": "2026-06-03",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T08",
    "machineType": "Taku TBM",
    "downtimeMinutes": 28,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-06-03",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-03T08:38:00Z"
  },
  {
    "id": "YOKO-DT-2026-688",
    "issueDate": "2026-06-03",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "F01",
    "machineType": "Fujion",
    "downtimeMinutes": 7,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "Printer restart done",
    "responsibility": "ATC",
    "closedDate": "2026-06-03",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-03T13:10:00Z"
  },
  {
    "id": "YOKO-DT-2026-689",
    "issueDate": "2026-06-03",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y13",
    "machineType": "YANTAI",
    "downtimeMinutes": 27,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-06-03",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-03T13:43:00Z"
  },
  {
    "id": "YOKO-DT-2026-690",
    "issueDate": "2026-06-03",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y01",
    "machineType": "YANTAI",
    "downtimeMinutes": 13,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-06-03",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-03T07:14:00Z"
  },
  {
    "id": "YOKO-DT-2026-691",
    "issueDate": "2026-06-03",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y08",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "Infra",
    "issueDetails": "Mouse&Keyboard",
    "actionPlan": "Mouse Replacement",
    "responsibility": "ATC",
    "closedDate": "2026-06-03",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-03T12:58:00Z"
  },
  {
    "id": "YOKO-DT-2026-692",
    "issueDate": "2026-06-03",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T07",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-06-03",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-03T16:13:00Z"
  },
  {
    "id": "YOKO-DT-2026-693",
    "issueDate": "2026-06-03",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 15,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-06-03",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-03T10:16:00Z"
  },
  {
    "id": "YOKO-DT-2026-694",
    "issueDate": "2026-06-04",
    "nature": "INFRA",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWYFR_01",
    "machineType": "12-24 radial machine",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "New printer replaced",
    "responsibility": "ATC",
    "closedDate": "2026-06-04",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-04T19:57:00Z"
  },
  {
    "id": "YOKO-DT-2026-695",
    "issueDate": "2026-06-04",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T05",
    "machineType": "Taku TBM",
    "downtimeMinutes": 31,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-06-04",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-04T22:31:00Z"
  },
  {
    "id": "YOKO-DT-2026-696",
    "issueDate": "2026-06-04",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T01",
    "machineType": "Taku TBM",
    "downtimeMinutes": 7,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-06-04",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-04T09:09:00Z"
  },
  {
    "id": "YOKO-DT-2026-697",
    "issueDate": "2026-06-04",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y08",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "Infra",
    "issueDetails": "Mouse&Keyboard",
    "actionPlan": "Mouse Replacement",
    "responsibility": "ATC",
    "closedDate": "2026-06-04",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-04T18:24:00Z"
  },
  {
    "id": "YOKO-DT-2026-698",
    "issueDate": "2026-06-04",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Band",
    "machineNo": "BBONL_01",
    "machineType": "Online Band Building 56\"",
    "downtimeMinutes": 10,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-06-04",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-04T22:16:00Z"
  },
  {
    "id": "YOKO-DT-2026-699",
    "issueDate": "2026-06-04",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T03",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-06-04",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-04T09:43:00Z"
  },
  {
    "id": "YOKO-DT-2026-700",
    "issueDate": "2026-06-04",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "SBC_02",
    "machineType": "Steel fisher cutter",
    "downtimeMinutes": 18,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Settings re-confgiruation done",
    "responsibility": "ATC",
    "closedDate": "2026-06-04",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-04T14:49:00Z"
  },
  {
    "id": "YOKO-DT-2026-701",
    "issueDate": "2026-06-04",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWMRG_01",
    "machineType": "Marangoni",
    "downtimeMinutes": 11,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-06-04",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-04T06:46:00Z"
  },
  {
    "id": "YOKO-DT-2026-702",
    "issueDate": "2026-06-05",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWMRG_02",
    "machineType": "Marangoni",
    "downtimeMinutes": 10,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-06-05",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-05T11:32:00Z"
  },
  {
    "id": "YOKO-DT-2026-703",
    "issueDate": "2026-06-05",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWFMD_01",
    "machineType": "Finemac",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-06-05",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-05T22:38:00Z"
  },
  {
    "id": "YOKO-DT-2026-704",
    "issueDate": "2026-06-05",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y09",
    "machineType": "YANTAI",
    "downtimeMinutes": 29,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-06-05",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-05T11:34:00Z"
  },
  {
    "id": "YOKO-DT-2026-705",
    "issueDate": "2026-06-05",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC-01",
    "machineType": "Biascutter 20-90 deg",
    "downtimeMinutes": 5,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Reinsert the Cabel",
    "responsibility": "ATC",
    "closedDate": "",
    "solvedBy": "Bharadwaj",
    "status": "Open",
    "remarks": "",
    "createdAt": "2026-06-05T16:31:00Z"
  },
  {
    "id": "YOKO-DT-2026-706",
    "issueDate": "2026-06-05",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 7,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-06-05",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-05T17:56:00Z"
  },
  {
    "id": "YOKO-DT-2026-707",
    "issueDate": "2026-06-05",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T01",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-06-05",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-05T08:05:00Z"
  },
  {
    "id": "YOKO-DT-2026-708",
    "issueDate": "2026-06-05",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T09",
    "machineType": "Taku TBM",
    "downtimeMinutes": 15,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-06-05",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-05T08:48:00Z"
  },
  {
    "id": "YOKO-DT-2026-709",
    "issueDate": "2026-06-05",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWMRG_02",
    "machineType": "Marangoni",
    "downtimeMinutes": 15,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Settings re-confgiruation done",
    "responsibility": "ATC",
    "closedDate": "2026-06-05",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-05T11:16:00Z"
  },
  {
    "id": "YOKO-DT-2026-710",
    "issueDate": "2026-06-06",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T06",
    "machineType": "Taku TBM",
    "downtimeMinutes": 19,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-06-06",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-06T12:45:00Z"
  },
  {
    "id": "YOKO-DT-2026-711",
    "issueDate": "2026-06-06",
    "nature": "MES",
    "area": "Mixing Shed",
    "process": "Mixing",
    "machineNo": "MIX_05",
    "machineType": "Mixer-5 (430 LTR) Final",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-06-06",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-06T22:28:00Z"
  },
  {
    "id": "YOKO-DT-2026-712",
    "issueDate": "2026-06-06",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y01",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Auto update delay",
    "actionPlan": "Manually restarted",
    "responsibility": "ATC",
    "closedDate": "",
    "solvedBy": "Srinivas",
    "status": "Open",
    "remarks": "",
    "createdAt": "2026-06-06T08:21:00Z"
  },
  {
    "id": "YOKO-DT-2026-713",
    "issueDate": "2026-06-06",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWMRG_01",
    "machineType": "Marangoni",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-06-06",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-06T08:45:00Z"
  },
  {
    "id": "YOKO-DT-2026-714",
    "issueDate": "2026-06-06",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T09",
    "machineType": "Taku TBM",
    "downtimeMinutes": 9,
    "category": "Infra",
    "issueDetails": "Network not available",
    "actionPlan": "Switch side power down and make up with help of engg",
    "responsibility": "ATC",
    "closedDate": "",
    "solvedBy": "Narayana",
    "status": "Open",
    "remarks": "",
    "createdAt": "2026-06-06T08:57:00Z"
  },
  {
    "id": "YOKO-DT-2026-715",
    "issueDate": "2026-06-06",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC-02",
    "machineType": "Biascutter 45-90 deg",
    "downtimeMinutes": 20,
    "category": "Printer",
    "issueDetails": "Poor quality tag printing",
    "actionPlan": "Darkness increased",
    "responsibility": "ATC",
    "closedDate": "2026-06-06",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-06T21:13:00Z"
  },
  {
    "id": "YOKO-DT-2026-716",
    "issueDate": "2026-06-06",
    "nature": "MES",
    "area": "Mixing Shed",
    "process": "Mixing",
    "machineNo": "MIX_04",
    "machineType": "Mixer-4 (430 LTR) Master / Final",
    "downtimeMinutes": 7,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "MELSS",
    "closedDate": "2026-06-06",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-06T21:15:00Z"
  },
  {
    "id": "YOKO-DT-2026-717",
    "issueDate": "2026-06-06",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T02",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Printer restart done",
    "responsibility": "ATC",
    "closedDate": "2026-06-06",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-06T19:22:00Z"
  },
  {
    "id": "YOKO-DT-2026-718",
    "issueDate": "2026-06-06",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Band",
    "machineNo": "BBONL_01",
    "machineType": "Online Band Building 56\"",
    "downtimeMinutes": 7,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-06-06",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-06T07:43:00Z"
  },
  {
    "id": "YOKO-DT-2026-719",
    "issueDate": "2026-06-07",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y14",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-06-07",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-07T09:15:00Z"
  },
  {
    "id": "YOKO-DT-2026-720",
    "issueDate": "2026-06-07",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US3",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-06-07",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-07T20:08:00Z"
  },
  {
    "id": "YOKO-DT-2026-721",
    "issueDate": "2026-06-07",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y24",
    "machineType": "YANTAI",
    "downtimeMinutes": 22,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "New printer replaced",
    "responsibility": "ATC",
    "closedDate": "2026-06-07",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-07T08:28:00Z"
  },
  {
    "id": "YOKO-DT-2026-722",
    "issueDate": "2026-06-07",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US1",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-06-07",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-07T09:03:00Z"
  },
  {
    "id": "YOKO-DT-2026-723",
    "issueDate": "2026-06-07",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T03",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-06-07",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-07T13:10:00Z"
  },
  {
    "id": "YOKO-DT-2026-724",
    "issueDate": "2026-06-07",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 14,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-06-07",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-07T12:55:00Z"
  },
  {
    "id": "YOKO-DT-2026-725",
    "issueDate": "2026-06-07",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWFMF_03",
    "machineType": "Radial Finemac",
    "downtimeMinutes": 8,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-06-07",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-07T14:59:00Z"
  },
  {
    "id": "YOKO-DT-2026-726",
    "issueDate": "2026-06-07",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWMRG_01",
    "machineType": "Marangoni",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-06-07",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-07T15:27:00Z"
  },
  {
    "id": "YOKO-DT-2026-727",
    "issueDate": "2026-06-08",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T08",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-06-08",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-08T12:18:00Z"
  },
  {
    "id": "YOKO-DT-2026-728",
    "issueDate": "2026-06-08",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 15,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-06-08",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-08T07:47:00Z"
  },
  {
    "id": "YOKO-DT-2026-729",
    "issueDate": "2026-06-08",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T07",
    "machineType": "Taku TBM",
    "downtimeMinutes": 8,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-06-08",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-08T22:10:00Z"
  },
  {
    "id": "YOKO-DT-2026-730",
    "issueDate": "2026-06-08",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "F09",
    "machineType": "Fujion",
    "downtimeMinutes": 5,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-06-08",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-08T08:54:00Z"
  },
  {
    "id": "YOKO-DT-2026-731",
    "issueDate": "2026-06-08",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "16/30",
    "machineType": "YANTAI",
    "downtimeMinutes": 6,
    "category": "Infra",
    "issueDetails": "Network not available",
    "actionPlan": "Switch side power down and make up with help of engg",
    "responsibility": "ATC",
    "closedDate": "2026-06-08",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-08T18:07:00Z"
  },
  {
    "id": "YOKO-DT-2026-732",
    "issueDate": "2026-06-08",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "F07",
    "machineType": "Fujion",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-06-08",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-08T13:37:00Z"
  },
  {
    "id": "YOKO-DT-2026-733",
    "issueDate": "2026-06-08",
    "nature": "INFRA",
    "area": "Mixing Shed",
    "process": "Mixing",
    "machineNo": "MIX_01",
    "machineType": "Mixer-1 (430 LTR) Master",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-06-08",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-08T22:20:00Z"
  },
  {
    "id": "YOKO-DT-2026-734",
    "issueDate": "2026-06-08",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y01",
    "machineType": "YANTAI",
    "downtimeMinutes": 39,
    "category": "IPC",
    "issueDetails": "Hardware issue",
    "actionPlan": "New IPC replaced",
    "responsibility": "ATC",
    "closedDate": "2026-06-08",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-08T16:15:00Z"
  },
  {
    "id": "YOKO-DT-2026-735",
    "issueDate": "2026-06-08",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 12,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-06-08",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-08T16:59:00Z"
  },
  {
    "id": "YOKO-DT-2026-736",
    "issueDate": "2026-06-09",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y23",
    "machineType": "YANTAI",
    "downtimeMinutes": 18,
    "category": "Infra",
    "issueDetails": "Network not available",
    "actionPlan": "Switch side power down and make up with help of engg",
    "responsibility": "ATC",
    "closedDate": "2026-06-09",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-09T20:39:00Z"
  },
  {
    "id": "YOKO-DT-2026-737",
    "issueDate": "2026-06-09",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T06",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-06-09",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-09T22:16:00Z"
  },
  {
    "id": "YOKO-DT-2026-738",
    "issueDate": "2026-06-09",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y14",
    "machineType": "YANTAI",
    "downtimeMinutes": 7,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-06-09",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-09T08:56:00Z"
  },
  {
    "id": "YOKO-DT-2026-739",
    "issueDate": "2026-06-09",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWYFR_01",
    "machineType": "12-24 radial machine",
    "downtimeMinutes": 45,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "New printer replaced",
    "responsibility": "ATC",
    "closedDate": "2026-06-09",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-09T15:39:00Z"
  },
  {
    "id": "YOKO-DT-2026-740",
    "issueDate": "2026-06-09",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y16",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-06-09",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-09T22:00:00Z"
  },
  {
    "id": "YOKO-DT-2026-741",
    "issueDate": "2026-06-09",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWFMF_02",
    "machineType": "Radial Finemac",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-06-09",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-09T10:16:00Z"
  },
  {
    "id": "YOKO-DT-2026-742",
    "issueDate": "2026-06-10",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y09",
    "machineType": "YANTAI",
    "downtimeMinutes": 12,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "Printer restart done",
    "responsibility": "ATC",
    "closedDate": "2026-06-10",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-10T10:17:00Z"
  },
  {
    "id": "YOKO-DT-2026-743",
    "issueDate": "2026-06-10",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC_04",
    "machineType": "Bias Cutter 45\u00b0-90\u00b0 With Auto Splicer",
    "downtimeMinutes": 13,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "Printer restart done",
    "responsibility": "ATC",
    "closedDate": "2026-06-10",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-10T14:32:00Z"
  },
  {
    "id": "YOKO-DT-2026-744",
    "issueDate": "2026-06-10",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US3",
    "machineType": "Unistage",
    "downtimeMinutes": 6,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-06-10",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-10T07:05:00Z"
  },
  {
    "id": "YOKO-DT-2026-745",
    "issueDate": "2026-06-10",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y09",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-06-10",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-10T10:40:00Z"
  },
  {
    "id": "YOKO-DT-2026-746",
    "issueDate": "2026-06-10",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-06-10",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-10T20:35:00Z"
  },
  {
    "id": "YOKO-DT-2026-747",
    "issueDate": "2026-06-10",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T02",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Delay access or response",
    "actionPlan": "Cache cleared and restart done",
    "responsibility": "ATC",
    "closedDate": "",
    "solvedBy": "Pardhu",
    "status": "Open",
    "remarks": "",
    "createdAt": "2026-06-10T10:34:00Z"
  },
  {
    "id": "YOKO-DT-2026-748",
    "issueDate": "2026-06-11",
    "nature": "INFRA",
    "area": "Mixing Shed",
    "process": "Mixing",
    "machineNo": "MIX_01",
    "machineType": "Mixer-1 (430 LTR) Master",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-06-11",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-11T10:27:00Z"
  },
  {
    "id": "YOKO-DT-2026-749",
    "issueDate": "2026-06-11",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T01",
    "machineType": "Taku TBM",
    "downtimeMinutes": 29,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Settings re-confgiruation done",
    "responsibility": "ATC",
    "closedDate": "2026-06-11",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-11T07:57:00Z"
  },
  {
    "id": "YOKO-DT-2026-750",
    "issueDate": "2026-06-11",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC-01",
    "machineType": "Biascutter 20-90 deg",
    "downtimeMinutes": 13,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-06-11",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-11T13:42:00Z"
  },
  {
    "id": "YOKO-DT-2026-751",
    "issueDate": "2026-06-11",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y09",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "Printer restart done",
    "responsibility": "ATC",
    "closedDate": "2026-06-11",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-11T10:59:00Z"
  },
  {
    "id": "YOKO-DT-2026-752",
    "issueDate": "2026-06-11",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y03",
    "machineType": "YANTAI",
    "downtimeMinutes": 6,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-06-11",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-11T11:51:00Z"
  },
  {
    "id": "YOKO-DT-2026-753",
    "issueDate": "2026-06-11",
    "nature": "INFRA",
    "area": "Mixing Shed",
    "process": "Mixing",
    "machineNo": "MIX_05",
    "machineType": "Mixer-5 (430 LTR) Final",
    "downtimeMinutes": 8,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-06-11",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-11T16:50:00Z"
  },
  {
    "id": "YOKO-DT-2026-754",
    "issueDate": "2026-06-11",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US3",
    "machineType": "Unistage",
    "downtimeMinutes": 7,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-06-11",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-11T13:17:00Z"
  },
  {
    "id": "YOKO-DT-2026-755",
    "issueDate": "2026-06-11",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "F05",
    "machineType": "Fujion",
    "downtimeMinutes": 5,
    "category": "Infra",
    "issueDetails": "Mouse&Keyboard",
    "actionPlan": "Keyboard Replacement",
    "responsibility": "ATC",
    "closedDate": "2026-06-11",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-11T21:14:00Z"
  },
  {
    "id": "YOKO-DT-2026-756",
    "issueDate": "2026-06-12",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y14",
    "machineType": "YANTAI",
    "downtimeMinutes": 10,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-06-12",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-12T15:52:00Z"
  },
  {
    "id": "YOKO-DT-2026-757",
    "issueDate": "2026-06-12",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Bead Winding",
    "machineNo": "BW_01",
    "machineType": "Bead Winding # 1 (8\"-38\")",
    "downtimeMinutes": 7,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Printer restart done",
    "responsibility": "ATC",
    "closedDate": "2026-06-12",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-12T18:21:00Z"
  },
  {
    "id": "YOKO-DT-2026-758",
    "issueDate": "2026-06-12",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T05",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-06-12",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-12T14:22:00Z"
  },
  {
    "id": "YOKO-DT-2026-759",
    "issueDate": "2026-06-12",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US3",
    "machineType": "Unistage",
    "downtimeMinutes": 21,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-06-12",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-12T16:01:00Z"
  },
  {
    "id": "YOKO-DT-2026-760",
    "issueDate": "2026-06-12",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC_05",
    "machineType": "Bias Cutter 45\u00b0-90\u00b0 With Auto Splicer",
    "downtimeMinutes": 5,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-06-12",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-12T11:37:00Z"
  },
  {
    "id": "YOKO-DT-2026-761",
    "issueDate": "2026-06-12",
    "nature": "INFRA",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US4",
    "machineType": "Unistage",
    "downtimeMinutes": 9,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-06-12",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-12T17:46:00Z"
  },
  {
    "id": "YOKO-DT-2026-762",
    "issueDate": "2026-06-12",
    "nature": "INFRA",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US4",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-06-12",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-12T22:07:00Z"
  },
  {
    "id": "YOKO-DT-2026-763",
    "issueDate": "2026-06-12",
    "nature": "INFRA",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWFMD_01",
    "machineType": "Finemac",
    "downtimeMinutes": 6,
    "category": "Infra",
    "issueDetails": "Weight Auto Capturing",
    "actionPlan": "Weigh Scale Device restarted",
    "responsibility": "ATC",
    "closedDate": "2026-06-12",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-12T19:00:00Z"
  },
  {
    "id": "YOKO-DT-2026-764",
    "issueDate": "2026-06-12",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y16",
    "machineType": "YANTAI",
    "downtimeMinutes": 26,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-06-12",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-12T12:23:00Z"
  },
  {
    "id": "YOKO-DT-2026-765",
    "issueDate": "2026-06-13",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y22",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "MES",
    "issueDetails": "Spec not opening",
    "actionPlan": "drive mapped again",
    "responsibility": "ATC",
    "closedDate": "2026-06-13",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-13T09:46:00Z"
  },
  {
    "id": "YOKO-DT-2026-766",
    "issueDate": "2026-06-13",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-06-13",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-13T15:42:00Z"
  },
  {
    "id": "YOKO-DT-2026-767",
    "issueDate": "2026-06-13",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC-02",
    "machineType": "Biascutter 45-90 deg",
    "downtimeMinutes": 8,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-06-13",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-13T12:26:00Z"
  },
  {
    "id": "YOKO-DT-2026-768",
    "issueDate": "2026-06-13",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y09",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "Printer restart done",
    "responsibility": "ATC",
    "closedDate": "2026-06-13",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-13T11:39:00Z"
  },
  {
    "id": "YOKO-DT-2026-769",
    "issueDate": "2026-06-13",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y15",
    "machineType": "YANTAI",
    "downtimeMinutes": 15,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-06-13",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-13T15:13:00Z"
  },
  {
    "id": "YOKO-DT-2026-770",
    "issueDate": "2026-06-13",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-06-13",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-13T16:29:00Z"
  },
  {
    "id": "YOKO-DT-2026-771",
    "issueDate": "2026-06-13",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T01",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Settings re-confgiruation done",
    "responsibility": "ATC",
    "closedDate": "2026-06-13",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-13T11:42:00Z"
  },
  {
    "id": "YOKO-DT-2026-772",
    "issueDate": "2026-06-13",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y16",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-06-13",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-13T16:05:00Z"
  },
  {
    "id": "YOKO-DT-2026-773",
    "issueDate": "2026-06-14",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y16",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "",
    "solvedBy": "Pardhu",
    "status": "Open",
    "remarks": "",
    "createdAt": "2026-06-14T12:09:00Z"
  },
  {
    "id": "YOKO-DT-2026-774",
    "issueDate": "2026-06-14",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWMRG_01",
    "machineType": "Marangoni",
    "downtimeMinutes": 14,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-06-14",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-14T21:39:00Z"
  },
  {
    "id": "YOKO-DT-2026-775",
    "issueDate": "2026-06-14",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "F05",
    "machineType": "Fujion",
    "downtimeMinutes": 14,
    "category": "IPC",
    "issueDetails": "Spec not open",
    "actionPlan": "Spec remaping",
    "responsibility": "ATC",
    "closedDate": "2026-06-14",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-14T12:45:00Z"
  },
  {
    "id": "YOKO-DT-2026-776",
    "issueDate": "2026-06-14",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWMRG_01",
    "machineType": "Marangoni",
    "downtimeMinutes": 5,
    "category": "Infra",
    "issueDetails": "Weight Auto Capturing",
    "actionPlan": "Weigh Scale Device restarted",
    "responsibility": "ATC",
    "closedDate": "2026-06-14",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-14T18:15:00Z"
  },
  {
    "id": "YOKO-DT-2026-777",
    "issueDate": "2026-06-14",
    "nature": "INFRA",
    "area": "4Roll shed",
    "process": "3Roll",
    "machineNo": "3ROLL_02",
    "machineType": "3-Roll Calendar phase 2",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-06-14",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-14T09:49:00Z"
  },
  {
    "id": "YOKO-DT-2026-778",
    "issueDate": "2026-06-14",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US1",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-06-14",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-14T22:29:00Z"
  },
  {
    "id": "YOKO-DT-2026-779",
    "issueDate": "2026-06-14",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWMRG_01",
    "machineType": "Marangoni",
    "downtimeMinutes": 24,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-06-14",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-14T10:51:00Z"
  },
  {
    "id": "YOKO-DT-2026-780",
    "issueDate": "2026-06-15",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC-03",
    "machineType": "Biascutter 20-90 deg",
    "downtimeMinutes": 13,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-06-15",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-15T20:39:00Z"
  },
  {
    "id": "YOKO-DT-2026-781",
    "issueDate": "2026-06-15",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Bead Winding",
    "machineNo": "BW_02",
    "machineType": "Bead Winding # 2 (15\"-58\")",
    "downtimeMinutes": 5,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Cable removed and reconnected",
    "responsibility": "MELSS",
    "closedDate": "2026-06-15",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-15T20:57:00Z"
  },
  {
    "id": "YOKO-DT-2026-782",
    "issueDate": "2026-06-15",
    "nature": "INFRA",
    "area": "4Roll shed",
    "process": "3Roll",
    "machineNo": "3ROLL_02",
    "machineType": "3-Roll Calendar phase 2",
    "downtimeMinutes": 10,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-06-15",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-15T21:28:00Z"
  },
  {
    "id": "YOKO-DT-2026-783",
    "issueDate": "2026-06-15",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y01",
    "machineType": "YANTAI",
    "downtimeMinutes": 24,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-06-15",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-15T22:31:00Z"
  },
  {
    "id": "YOKO-DT-2026-784",
    "issueDate": "2026-06-15",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T06",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-06-15",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-15T20:04:00Z"
  },
  {
    "id": "YOKO-DT-2026-785",
    "issueDate": "2026-06-15",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 14,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-06-15",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-15T08:08:00Z"
  },
  {
    "id": "YOKO-DT-2026-786",
    "issueDate": "2026-06-15",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC-01",
    "machineType": "Biascutter 20-90 deg",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-06-15",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-15T10:45:00Z"
  },
  {
    "id": "YOKO-DT-2026-787",
    "issueDate": "2026-06-15",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Band",
    "machineNo": "BBONL_01",
    "machineType": "Online Band Building 56\"",
    "downtimeMinutes": 14,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-06-15",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-15T19:03:00Z"
  },
  {
    "id": "YOKO-DT-2026-788",
    "issueDate": "2026-06-16",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWFMF_03",
    "machineType": "Radial Finemac",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-06-16",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-16T06:54:00Z"
  },
  {
    "id": "YOKO-DT-2026-789",
    "issueDate": "2026-06-16",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T02",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Delay access or response",
    "actionPlan": "Cache cleared and restart done",
    "responsibility": "ATC",
    "closedDate": "2026-06-16",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-16T17:19:00Z"
  },
  {
    "id": "YOKO-DT-2026-790",
    "issueDate": "2026-06-16",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWFMF_02",
    "machineType": "Radial Finemac",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-06-16",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-16T19:34:00Z"
  },
  {
    "id": "YOKO-DT-2026-791",
    "issueDate": "2026-06-16",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-06-16",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-16T21:14:00Z"
  },
  {
    "id": "YOKO-DT-2026-792",
    "issueDate": "2026-06-16",
    "nature": "INFRA",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWFMF_01",
    "machineType": "Finemac",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-06-16",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-16T06:24:00Z"
  },
  {
    "id": "YOKO-DT-2026-793",
    "issueDate": "2026-06-16",
    "nature": "MES",
    "area": "Plant 4",
    "process": "Extrusion",
    "machineNo": "CFE_01",
    "machineType": "Duplex 10*8 Ext with 100mtr cooling line",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Callibration",
    "responsibility": "ATC",
    "closedDate": "2026-06-16",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-16T20:58:00Z"
  },
  {
    "id": "YOKO-DT-2026-794",
    "issueDate": "2026-06-16",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y02",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-06-16",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-16T06:58:00Z"
  },
  {
    "id": "YOKO-DT-2026-795",
    "issueDate": "2026-06-16",
    "nature": "INFRA",
    "area": "Plant 3",
    "process": "Slitter",
    "machineNo": "SLIT_02",
    "machineType": "Gum Slitter",
    "downtimeMinutes": 5,
    "category": "Infra",
    "issueDetails": "Network not available",
    "actionPlan": "Netowrk Patch Cable replaced",
    "responsibility": "ATC",
    "closedDate": "2026-06-16",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-16T19:08:00Z"
  },
  {
    "id": "YOKO-DT-2026-796",
    "issueDate": "2026-06-16",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWMRG_04",
    "machineType": "Marangoni",
    "downtimeMinutes": 7,
    "category": "Infra",
    "issueDetails": "Weight Auto Capturing",
    "actionPlan": "Weigh Scale Device restarted",
    "responsibility": "ATC",
    "closedDate": "2026-06-16",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-16T07:16:00Z"
  },
  {
    "id": "YOKO-DT-2026-797",
    "issueDate": "2026-06-17",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC-02",
    "machineType": "Biascutter 45-90 deg",
    "downtimeMinutes": 18,
    "category": "Printer",
    "issueDetails": "Poor quality tag printing",
    "actionPlan": "Darkness increased",
    "responsibility": "ATC",
    "closedDate": "2026-06-17",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-17T19:16:00Z"
  },
  {
    "id": "YOKO-DT-2026-798",
    "issueDate": "2026-06-17",
    "nature": "INFRA",
    "area": "Plant 4",
    "process": "Curing",
    "machineNo": "CU_C06_1",
    "machineType": "C-Line",
    "downtimeMinutes": 39,
    "category": "Infra",
    "issueDetails": "Network not available",
    "actionPlan": "IO Crimping",
    "responsibility": "ATC",
    "closedDate": "2026-06-17",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-17T06:47:00Z"
  },
  {
    "id": "YOKO-DT-2026-799",
    "issueDate": "2026-06-17",
    "nature": "INFRA",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-06-17",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-17T08:49:00Z"
  },
  {
    "id": "YOKO-DT-2026-800",
    "issueDate": "2026-06-17",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Bead Winding",
    "machineNo": "BW_02",
    "machineType": "Bead Winding # 2 (15\"-58\")",
    "downtimeMinutes": 15,
    "category": "Printer",
    "issueDetails": "Poor quality tag printing",
    "actionPlan": "Head cleaning done",
    "responsibility": "ATC",
    "closedDate": "2026-06-17",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-17T06:15:00Z"
  },
  {
    "id": "YOKO-DT-2026-801",
    "issueDate": "2026-06-17",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC-02",
    "machineType": "Biascutter 45-90 deg",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-06-17",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-17T21:42:00Z"
  },
  {
    "id": "YOKO-DT-2026-802",
    "issueDate": "2026-06-17",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWMRG_02",
    "machineType": "Marangoni",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Settings re-confgiruation done",
    "responsibility": "ATC",
    "closedDate": "2026-06-17",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-17T12:29:00Z"
  },
  {
    "id": "YOKO-DT-2026-803",
    "issueDate": "2026-06-17",
    "nature": "INFRA",
    "area": "Mixing Shed",
    "process": "Mixing",
    "machineNo": "MIX_01",
    "machineType": "Mixer-1 (430 LTR) Master",
    "downtimeMinutes": 13,
    "category": "Printer",
    "issueDetails": "Poor quality tag printing",
    "actionPlan": "Head cleaning done",
    "responsibility": "ATC",
    "closedDate": "2026-06-17",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-17T09:49:00Z"
  },
  {
    "id": "YOKO-DT-2026-804",
    "issueDate": "2026-06-17",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y01",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "",
    "solvedBy": "Narayana",
    "status": "Open",
    "remarks": "",
    "createdAt": "2026-06-17T09:37:00Z"
  },
  {
    "id": "YOKO-DT-2026-805",
    "issueDate": "2026-06-17",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T03",
    "machineType": "Taku TBM",
    "downtimeMinutes": 18,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-06-17",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-17T18:25:00Z"
  },
  {
    "id": "YOKO-DT-2026-806",
    "issueDate": "2026-06-18",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC-03",
    "machineType": "Biascutter 20-90 deg",
    "downtimeMinutes": 5,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Reinsert the Cabel",
    "responsibility": "ATC",
    "closedDate": "2026-06-18",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-18T13:06:00Z"
  },
  {
    "id": "YOKO-DT-2026-807",
    "issueDate": "2026-06-18",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y16",
    "machineType": "YANTAI",
    "downtimeMinutes": 19,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-06-18",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-18T09:50:00Z"
  },
  {
    "id": "YOKO-DT-2026-808",
    "issueDate": "2026-06-18",
    "nature": "INFRA",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWMRG_02",
    "machineType": "Marangoni",
    "downtimeMinutes": 8,
    "category": "Infra",
    "issueDetails": "Weight Auto Capturing",
    "actionPlan": "Weigh Scale Device restarted",
    "responsibility": "ATC",
    "closedDate": "2026-06-18",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-18T07:22:00Z"
  },
  {
    "id": "YOKO-DT-2026-809",
    "issueDate": "2026-06-18",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T08",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-06-18",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-18T16:00:00Z"
  },
  {
    "id": "YOKO-DT-2026-810",
    "issueDate": "2026-06-18",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T09",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-06-18",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-18T21:06:00Z"
  },
  {
    "id": "YOKO-DT-2026-811",
    "issueDate": "2026-06-18",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 18,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-06-18",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-18T10:27:00Z"
  },
  {
    "id": "YOKO-DT-2026-812",
    "issueDate": "2026-06-18",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US3",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-06-18",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-18T14:39:00Z"
  },
  {
    "id": "YOKO-DT-2026-813",
    "issueDate": "2026-06-19",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T04",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-06-19",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-19T14:20:00Z"
  },
  {
    "id": "YOKO-DT-2026-814",
    "issueDate": "2026-06-19",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T05",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-06-19",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-19T08:17:00Z"
  },
  {
    "id": "YOKO-DT-2026-815",
    "issueDate": "2026-06-19",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "F05",
    "machineType": "Fujion",
    "downtimeMinutes": 21,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "Printer restart done",
    "responsibility": "ATC",
    "closedDate": "",
    "solvedBy": "Narayana",
    "status": "Open",
    "remarks": "",
    "createdAt": "2026-06-19T18:21:00Z"
  },
  {
    "id": "YOKO-DT-2026-816",
    "issueDate": "2026-06-19",
    "nature": "MES",
    "area": "Mixing Shed",
    "process": "Mixing",
    "machineNo": "MIX_04",
    "machineType": "Mixer-4 (430 LTR) Master / Final",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "MELSS side configuration done",
    "responsibility": "MELSS",
    "closedDate": "2026-06-19",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-19T16:11:00Z"
  },
  {
    "id": "YOKO-DT-2026-817",
    "issueDate": "2026-06-19",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC-02",
    "machineType": "Biascutter 45-90 deg",
    "downtimeMinutes": 16,
    "category": "Printer",
    "issueDetails": "Poor quality tag printing",
    "actionPlan": "Darkness increased",
    "responsibility": "ATC",
    "closedDate": "",
    "solvedBy": "Srinivas",
    "status": "Open",
    "remarks": "",
    "createdAt": "2026-06-19T14:35:00Z"
  },
  {
    "id": "YOKO-DT-2026-818",
    "issueDate": "2026-06-19",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWMRG_02",
    "machineType": "Marangoni",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Settings re-confgiruation done",
    "responsibility": "ATC",
    "closedDate": "2026-06-19",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-19T12:05:00Z"
  },
  {
    "id": "YOKO-DT-2026-819",
    "issueDate": "2026-06-19",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T01",
    "machineType": "Taku TBM",
    "downtimeMinutes": 12,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-06-19",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-19T21:41:00Z"
  },
  {
    "id": "YOKO-DT-2026-820",
    "issueDate": "2026-06-19",
    "nature": "INFRA",
    "area": "Plant 2",
    "process": "Flipper",
    "machineNo": "FLP_05",
    "machineType": "Bead Flipping Machine 12\"-20\"",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-06-19",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-19T06:05:00Z"
  },
  {
    "id": "YOKO-DT-2026-821",
    "issueDate": "2026-06-19",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y22",
    "machineType": "YANTAI",
    "downtimeMinutes": 14,
    "category": "MES",
    "issueDetails": "Spec not opening",
    "actionPlan": "drive mapped again",
    "responsibility": "ATC",
    "closedDate": "2026-06-19",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-19T17:30:00Z"
  },
  {
    "id": "YOKO-DT-2026-822",
    "issueDate": "2026-06-20",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T07",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-06-20",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-20T16:22:00Z"
  },
  {
    "id": "YOKO-DT-2026-823",
    "issueDate": "2026-06-20",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y15",
    "machineType": "YANTAI",
    "downtimeMinutes": 37,
    "category": "Infra",
    "issueDetails": "Network not available",
    "actionPlan": "vlans changed for input switch",
    "responsibility": "ATC",
    "closedDate": "2026-06-20",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-20T12:20:00Z"
  },
  {
    "id": "YOKO-DT-2026-824",
    "issueDate": "2026-06-20",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US3",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-06-20",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-20T11:12:00Z"
  },
  {
    "id": "YOKO-DT-2026-825",
    "issueDate": "2026-06-20",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 6,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-06-20",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-20T22:38:00Z"
  },
  {
    "id": "YOKO-DT-2026-826",
    "issueDate": "2026-06-20",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US1",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-06-20",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-20T12:18:00Z"
  },
  {
    "id": "YOKO-DT-2026-827",
    "issueDate": "2026-06-20",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "F01",
    "machineType": "Fujion",
    "downtimeMinutes": 11,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "Printer restart done",
    "responsibility": "ATC",
    "closedDate": "",
    "solvedBy": "Pardhu",
    "status": "Open",
    "remarks": "",
    "createdAt": "2026-06-20T10:17:00Z"
  },
  {
    "id": "YOKO-DT-2026-828",
    "issueDate": "2026-06-20",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y14",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-06-20",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-20T15:44:00Z"
  },
  {
    "id": "YOKO-DT-2026-829",
    "issueDate": "2026-06-20",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWFMF_02",
    "machineType": "Radial Finemac",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-06-20",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-20T06:36:00Z"
  },
  {
    "id": "YOKO-DT-2026-830",
    "issueDate": "2026-06-21",
    "nature": "MES",
    "area": "Mixing Shed",
    "process": "Mixing",
    "machineNo": "MIX_05",
    "machineType": "Mixer-5 (430 LTR) Final",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-06-21",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-21T16:11:00Z"
  },
  {
    "id": "YOKO-DT-2026-831",
    "issueDate": "2026-06-21",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC-02",
    "machineType": "Biascutter 45-90 deg",
    "downtimeMinutes": 69,
    "category": "Infra",
    "issueDetails": "Network not available",
    "actionPlan": "Input from other switch vlans has been changed and switch position has been slightly changed inside the enclosure",
    "responsibility": "ATC",
    "closedDate": "2026-06-21",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-21T08:25:00Z"
  },
  {
    "id": "YOKO-DT-2026-832",
    "issueDate": "2026-06-21",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC-03",
    "machineType": "Biascutter 20-90 deg",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "hardware issue",
    "actionPlan": "Eletrical issue",
    "responsibility": "ATC",
    "closedDate": "2026-06-21",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-21T07:09:00Z"
  },
  {
    "id": "YOKO-DT-2026-833",
    "issueDate": "2026-06-21",
    "nature": "MES",
    "area": "4Roll shed",
    "process": "4Roll",
    "machineNo": "4ROLL_01",
    "machineType": "4-Roll and IL Cal  650*1900",
    "downtimeMinutes": 6,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Settings re-confgiruation done",
    "responsibility": "ATC",
    "closedDate": "2026-06-21",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-21T09:35:00Z"
  },
  {
    "id": "YOKO-DT-2026-834",
    "issueDate": "2026-06-21",
    "nature": "INFRA",
    "area": "Mixing Shed",
    "process": "Mixing",
    "machineNo": "MIX_01",
    "machineType": "Mixer-1 (430 LTR) Master",
    "downtimeMinutes": 9,
    "category": "Printer",
    "issueDetails": "Poor quality tag printing",
    "actionPlan": "Head cleaning done",
    "responsibility": "ATC",
    "closedDate": "2026-06-21",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-21T13:49:00Z"
  },
  {
    "id": "YOKO-DT-2026-835",
    "issueDate": "2026-06-21",
    "nature": "INFRA",
    "area": "4Roll shed",
    "process": "3Roll",
    "machineNo": "3ROLL_02",
    "machineType": "3-Roll Calendar phase 2",
    "downtimeMinutes": 13,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-06-21",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-21T19:19:00Z"
  },
  {
    "id": "YOKO-DT-2026-836",
    "issueDate": "2026-06-21",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T07",
    "machineType": "Taku TBM",
    "downtimeMinutes": 13,
    "category": "Infra",
    "issueDetails": "Mouse&Keyboard",
    "actionPlan": "Keyboard Replacement",
    "responsibility": "ATC",
    "closedDate": "2026-06-21",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-21T09:48:00Z"
  },
  {
    "id": "YOKO-DT-2026-837",
    "issueDate": "2026-06-21",
    "nature": "INFRA",
    "area": "Plant 4",
    "process": "Extrusion",
    "machineNo": "CFE_01",
    "machineType": "Duplex 10*8 Ext with 100mtr cooling line",
    "downtimeMinutes": 24,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Settings re-confgiruation done",
    "responsibility": "ATC",
    "closedDate": "2026-06-21",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-21T13:11:00Z"
  },
  {
    "id": "YOKO-DT-2026-838",
    "issueDate": "2026-06-21",
    "nature": "INFRA",
    "area": "Plant 4",
    "process": "Extrusion",
    "machineNo": "CFE_01",
    "machineType": "Duplex 10*8 Ext with 100mtr cooling line",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Settings re-confgiruation done",
    "responsibility": "ATC",
    "closedDate": "2026-06-21",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-21T06:26:00Z"
  },
  {
    "id": "YOKO-DT-2026-839",
    "issueDate": "2026-06-22",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T06",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-06-22",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-22T15:44:00Z"
  },
  {
    "id": "YOKO-DT-2026-840",
    "issueDate": "2026-06-22",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC-03",
    "machineType": "Biascutter 20-90 deg",
    "downtimeMinutes": 8,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-06-22",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-22T13:59:00Z"
  },
  {
    "id": "YOKO-DT-2026-841",
    "issueDate": "2026-06-22",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US3",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-06-22",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-22T12:27:00Z"
  },
  {
    "id": "YOKO-DT-2026-842",
    "issueDate": "2026-06-22",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y01",
    "machineType": "YANTAI",
    "downtimeMinutes": 12,
    "category": "IPC",
    "issueDetails": "Auto update delay",
    "actionPlan": "Manually restarted",
    "responsibility": "ATC",
    "closedDate": "2026-06-22",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-22T10:58:00Z"
  },
  {
    "id": "YOKO-DT-2026-843",
    "issueDate": "2026-06-22",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "F02",
    "machineType": "Fujion",
    "downtimeMinutes": 7,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-06-22",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-22T15:38:00Z"
  },
  {
    "id": "YOKO-DT-2026-844",
    "issueDate": "2026-06-22",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "F07",
    "machineType": "Fujion",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-06-22",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-22T15:28:00Z"
  },
  {
    "id": "YOKO-DT-2026-845",
    "issueDate": "2026-06-22",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T02",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Delay access or response",
    "actionPlan": "Cache cleared and restart done",
    "responsibility": "ATC",
    "closedDate": "2026-06-22",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-22T14:32:00Z"
  },
  {
    "id": "YOKO-DT-2026-846",
    "issueDate": "2026-06-23",
    "nature": "INFRA",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 6,
    "category": "IPC",
    "issueDetails": "Unable to login",
    "actionPlan": "Restart Done",
    "responsibility": "ATC",
    "closedDate": "2026-06-23",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "Type Wrong Password",
    "createdAt": "2026-06-23T07:56:00Z"
  },
  {
    "id": "YOKO-DT-2026-847",
    "issueDate": "2026-06-23",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T03",
    "machineType": "Taku TBM",
    "downtimeMinutes": 11,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-06-23",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-23T13:43:00Z"
  },
  {
    "id": "YOKO-DT-2026-848",
    "issueDate": "2026-06-23",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC-03",
    "machineType": "Biascutter 20-90 deg",
    "downtimeMinutes": 9,
    "category": "IPC",
    "issueDetails": "hardware issue",
    "actionPlan": "Eletrical issue",
    "responsibility": "ATC",
    "closedDate": "2026-06-23",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-23T06:48:00Z"
  },
  {
    "id": "YOKO-DT-2026-849",
    "issueDate": "2026-06-23",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US4",
    "machineType": "Unistage",
    "downtimeMinutes": 32,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Program corrected by engg",
    "responsibility": "MELSS",
    "closedDate": "2026-06-23",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-23T11:30:00Z"
  },
  {
    "id": "YOKO-DT-2026-850",
    "issueDate": "2026-06-23",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T03",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-06-23",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-23T14:11:00Z"
  },
  {
    "id": "YOKO-DT-2026-851",
    "issueDate": "2026-06-23",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T03",
    "machineType": "Taku TBM",
    "downtimeMinutes": 12,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-06-23",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-23T21:22:00Z"
  },
  {
    "id": "YOKO-DT-2026-852",
    "issueDate": "2026-06-23",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T06",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Printer restart done",
    "responsibility": "ATC",
    "closedDate": "2026-06-23",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-23T09:54:00Z"
  },
  {
    "id": "YOKO-DT-2026-853",
    "issueDate": "2026-06-23",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y22",
    "machineType": "YANTAI",
    "downtimeMinutes": 16,
    "category": "MES",
    "issueDetails": "Spec not opening",
    "actionPlan": "drive mapped again",
    "responsibility": "ATC",
    "closedDate": "2026-06-23",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-23T18:52:00Z"
  },
  {
    "id": "YOKO-DT-2026-854",
    "issueDate": "2026-06-23",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "F05",
    "machineType": "Fujion",
    "downtimeMinutes": 5,
    "category": "Infra",
    "issueDetails": "Mouse&Keyboard",
    "actionPlan": "Keyboard Replacement",
    "responsibility": "ATC",
    "closedDate": "2026-06-23",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-23T20:05:00Z"
  },
  {
    "id": "YOKO-DT-2026-855",
    "issueDate": "2026-06-24",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y03",
    "machineType": "YANTAI",
    "downtimeMinutes": 28,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-06-24",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-24T22:52:00Z"
  },
  {
    "id": "YOKO-DT-2026-856",
    "issueDate": "2026-06-24",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "F06",
    "machineType": "Fujion",
    "downtimeMinutes": 5,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Reinsert the Cabel",
    "responsibility": "ATC",
    "closedDate": "2026-06-24",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-24T20:26:00Z"
  },
  {
    "id": "YOKO-DT-2026-857",
    "issueDate": "2026-06-24",
    "nature": "MES",
    "area": "Plant 4",
    "process": "Curing",
    "machineNo": "CU_A01",
    "machineType": "A-Line",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Callibration",
    "responsibility": "ATC",
    "closedDate": "2026-06-24",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-24T20:48:00Z"
  },
  {
    "id": "YOKO-DT-2026-858",
    "issueDate": "2026-06-24",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y01",
    "machineType": "YANTAI",
    "downtimeMinutes": 13,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-06-24",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-24T10:59:00Z"
  },
  {
    "id": "YOKO-DT-2026-859",
    "issueDate": "2026-06-24",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Band",
    "machineNo": "BBONL_01",
    "machineType": "Online Band Building 56\"",
    "downtimeMinutes": 5,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-06-24",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-24T13:45:00Z"
  },
  {
    "id": "YOKO-DT-2026-860",
    "issueDate": "2026-06-24",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US4",
    "machineType": "Unistage",
    "downtimeMinutes": 13,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "New battery replaced",
    "responsibility": "ATC",
    "closedDate": "2026-06-24",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-24T06:35:00Z"
  },
  {
    "id": "YOKO-DT-2026-861",
    "issueDate": "2026-06-24",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC-02",
    "machineType": "Biascutter 45-90 deg",
    "downtimeMinutes": 68,
    "category": "Infra",
    "issueDetails": "Network not available",
    "actionPlan": "Input from other switch vlans has been changed and switch position has been slightly changed inside the enclosure",
    "responsibility": "ATC",
    "closedDate": "2026-06-24",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-24T20:07:00Z"
  },
  {
    "id": "YOKO-DT-2026-862",
    "issueDate": "2026-06-24",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T08",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-06-24",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-24T21:59:00Z"
  },
  {
    "id": "YOKO-DT-2026-863",
    "issueDate": "2026-06-24",
    "nature": "INFRA",
    "area": "Plant 4",
    "process": "Extrusion",
    "machineNo": "CFE_02",
    "machineType": "Simplex 6\" Ext with 75mtr cooling line",
    "downtimeMinutes": 24,
    "category": "IPC",
    "issueDetails": "Hardware issue",
    "actionPlan": "New IPC replaced",
    "responsibility": "ATC",
    "closedDate": "2026-06-24",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-24T21:30:00Z"
  },
  {
    "id": "YOKO-DT-2026-864",
    "issueDate": "2026-06-25",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC-01",
    "machineType": "Biascutter 20-90 deg",
    "downtimeMinutes": 9,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-06-25",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-25T12:58:00Z"
  },
  {
    "id": "YOKO-DT-2026-865",
    "issueDate": "2026-06-25",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T05",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-06-25",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-25T14:49:00Z"
  },
  {
    "id": "YOKO-DT-2026-866",
    "issueDate": "2026-06-25",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC-01",
    "machineType": "Biascutter 20-90 deg",
    "downtimeMinutes": 9,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-06-25",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-25T16:59:00Z"
  },
  {
    "id": "YOKO-DT-2026-867",
    "issueDate": "2026-06-25",
    "nature": "MES",
    "area": "Mixing Shed",
    "process": "Mixing",
    "machineNo": "MIX_04",
    "machineType": "Mixer-4 (430 LTR) Master / Final",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "MELSS",
    "closedDate": "2026-06-25",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-25T15:53:00Z"
  },
  {
    "id": "YOKO-DT-2026-868",
    "issueDate": "2026-06-25",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "F06",
    "machineType": "Fujion",
    "downtimeMinutes": 5,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Reinsert the Cabel",
    "responsibility": "ATC",
    "closedDate": "2026-06-25",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-25T21:55:00Z"
  },
  {
    "id": "YOKO-DT-2026-869",
    "issueDate": "2026-06-25",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US4",
    "machineType": "Unistage",
    "downtimeMinutes": 7,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "New battery replaced",
    "responsibility": "ATC",
    "closedDate": "2026-06-25",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-25T18:29:00Z"
  },
  {
    "id": "YOKO-DT-2026-870",
    "issueDate": "2026-06-25",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y05",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-06-25",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-25T12:44:00Z"
  },
  {
    "id": "YOKO-DT-2026-871",
    "issueDate": "2026-06-26",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y13",
    "machineType": "YANTAI",
    "downtimeMinutes": 33,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "New printer replaced",
    "responsibility": "ATC",
    "closedDate": "2026-06-26",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-26T16:47:00Z"
  },
  {
    "id": "YOKO-DT-2026-872",
    "issueDate": "2026-06-26",
    "nature": "MES",
    "area": "4Roll shed",
    "process": "4Roll",
    "machineNo": "4ROLL_01",
    "machineType": "4-Roll and IL Cal  650*1900",
    "downtimeMinutes": 8,
    "category": "MES",
    "issueDetails": "BoM values not coming to MES",
    "actionPlan": "Manually corrected",
    "responsibility": "MELSS",
    "closedDate": "2026-06-26",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-26T18:24:00Z"
  },
  {
    "id": "YOKO-DT-2026-873",
    "issueDate": "2026-06-26",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-06-26",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-26T21:02:00Z"
  },
  {
    "id": "YOKO-DT-2026-874",
    "issueDate": "2026-06-26",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "F03",
    "machineType": "Fujion",
    "downtimeMinutes": 7,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-06-26",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-26T16:55:00Z"
  },
  {
    "id": "YOKO-DT-2026-875",
    "issueDate": "2026-06-26",
    "nature": "MES",
    "area": "4Roll shed",
    "process": "4Roll",
    "machineNo": "4ROLL_01",
    "machineType": "4-Roll and IL Cal  650*1900",
    "downtimeMinutes": 5,
    "category": "MES",
    "issueDetails": "BoM values not coming to MES",
    "actionPlan": "Manually corrected",
    "responsibility": "MELSS",
    "closedDate": "2026-06-26",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-26T20:00:00Z"
  },
  {
    "id": "YOKO-DT-2026-876",
    "issueDate": "2026-06-26",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y09",
    "machineType": "YANTAI",
    "downtimeMinutes": 13,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "Printer restart done",
    "responsibility": "ATC",
    "closedDate": "2026-06-26",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-26T10:04:00Z"
  },
  {
    "id": "YOKO-DT-2026-877",
    "issueDate": "2026-06-26",
    "nature": "MES",
    "area": "IT infra",
    "process": "All",
    "machineNo": "All",
    "machineType": "All",
    "downtimeMinutes": 13,
    "category": "MES",
    "issueDetails": "Slowness or stopped",
    "actionPlan": "Manually restarted apache",
    "responsibility": "MELSS",
    "closedDate": "2026-06-26",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-26T18:41:00Z"
  },
  {
    "id": "YOKO-DT-2026-878",
    "issueDate": "2026-06-26",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "F05",
    "machineType": "Fujion",
    "downtimeMinutes": 13,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-06-26",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-26T18:20:00Z"
  },
  {
    "id": "YOKO-DT-2026-879",
    "issueDate": "2026-06-26",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Band",
    "machineNo": "BBOFL_02",
    "machineType": "56\"  Band Building Machine",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Printer restart done",
    "responsibility": "ATC",
    "closedDate": "2026-06-26",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-26T07:39:00Z"
  },
  {
    "id": "YOKO-DT-2026-880",
    "issueDate": "2026-06-27",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T09",
    "machineType": "Taku TBM",
    "downtimeMinutes": 16,
    "category": "Infra",
    "issueDetails": "Network not available",
    "actionPlan": "Switch side power down and make up with help of engg",
    "responsibility": "ATC",
    "closedDate": "2026-06-27",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-27T08:27:00Z"
  },
  {
    "id": "YOKO-DT-2026-881",
    "issueDate": "2026-06-27",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US1",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-06-27",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-27T20:10:00Z"
  },
  {
    "id": "YOKO-DT-2026-882",
    "issueDate": "2026-06-27",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US3",
    "machineType": "Unistage",
    "downtimeMinutes": 13,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-06-27",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-27T06:02:00Z"
  },
  {
    "id": "YOKO-DT-2026-883",
    "issueDate": "2026-06-27",
    "nature": "INFRA",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US1",
    "machineType": "Unistage",
    "downtimeMinutes": 8,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-06-27",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-27T10:15:00Z"
  },
  {
    "id": "YOKO-DT-2026-884",
    "issueDate": "2026-06-27",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Slitter",
    "machineNo": "SLIT_01",
    "machineType": "Fabric Chafer Slitter",
    "downtimeMinutes": 5,
    "category": "MES",
    "issueDetails": "No Data Found",
    "actionPlan": "Delay in Response",
    "responsibility": "MELSS",
    "closedDate": "2026-06-27",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-27T11:10:00Z"
  },
  {
    "id": "YOKO-DT-2026-885",
    "issueDate": "2026-06-27",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC-01",
    "machineType": "Biascutter 20-90 deg",
    "downtimeMinutes": 5,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-06-27",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-27T13:31:00Z"
  },
  {
    "id": "YOKO-DT-2026-886",
    "issueDate": "2026-06-27",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-06-27",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-27T13:29:00Z"
  },
  {
    "id": "YOKO-DT-2026-887",
    "issueDate": "2026-06-27",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y02",
    "machineType": "YANTAI",
    "downtimeMinutes": 8,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-06-27",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-27T20:57:00Z"
  },
  {
    "id": "YOKO-DT-2026-888",
    "issueDate": "2026-06-28",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC-03",
    "machineType": "Biascutter 20-90 deg",
    "downtimeMinutes": 5,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-06-28",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-28T20:22:00Z"
  },
  {
    "id": "YOKO-DT-2026-889",
    "issueDate": "2026-06-28",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y13",
    "machineType": "YANTAI",
    "downtimeMinutes": 29,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-06-28",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-28T14:29:00Z"
  },
  {
    "id": "YOKO-DT-2026-890",
    "issueDate": "2026-06-28",
    "nature": "MES",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US4",
    "machineType": "Unistage",
    "downtimeMinutes": 6,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-06-28",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-28T18:54:00Z"
  },
  {
    "id": "YOKO-DT-2026-891",
    "issueDate": "2026-06-28",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC-03",
    "machineType": "Biascutter 20-90 deg",
    "downtimeMinutes": 22,
    "category": "IPC",
    "issueDetails": "hardware issue",
    "actionPlan": "Eletrical issue",
    "responsibility": "ATC",
    "closedDate": "2026-06-28",
    "solvedBy": "Jagadeesh",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-28T15:44:00Z"
  },
  {
    "id": "YOKO-DT-2026-892",
    "issueDate": "2026-06-28",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T05",
    "machineType": "Taku TBM",
    "downtimeMinutes": 16,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "",
    "solvedBy": "Narayana",
    "status": "Open",
    "remarks": "",
    "createdAt": "2026-06-28T18:17:00Z"
  },
  {
    "id": "YOKO-DT-2026-893",
    "issueDate": "2026-06-28",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T01",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-06-28",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-28T21:53:00Z"
  },
  {
    "id": "YOKO-DT-2026-894",
    "issueDate": "2026-06-28",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T06",
    "machineType": "Taku TBM",
    "downtimeMinutes": 6,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-06-28",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-28T13:38:00Z"
  },
  {
    "id": "YOKO-DT-2026-895",
    "issueDate": "2026-06-29",
    "nature": "INFRA",
    "area": "Plant 3",
    "process": "Unistage",
    "machineNo": "US2",
    "machineType": "Unistage",
    "downtimeMinutes": 11,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-06-29",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-29T10:40:00Z"
  },
  {
    "id": "YOKO-DT-2026-896",
    "issueDate": "2026-06-29",
    "nature": "INFRA",
    "area": "Plant 3",
    "process": "Bead Winding",
    "machineNo": "BW_02",
    "machineType": "Bead Winding # 2 (15\"-58\")",
    "downtimeMinutes": 19,
    "category": "IPC",
    "issueDetails": "Delay access or response",
    "actionPlan": "Cache cleared and restart done",
    "responsibility": "ATC",
    "closedDate": "2026-06-29",
    "solvedBy": "Bharadwaj",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-29T07:19:00Z"
  },
  {
    "id": "YOKO-DT-2026-897",
    "issueDate": "2026-06-29",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Band",
    "machineNo": "BBONL_01",
    "machineType": "Online Band Building 56\"",
    "downtimeMinutes": 6,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Configuration done",
    "responsibility": "ATC",
    "closedDate": "2026-06-29",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-29T08:58:00Z"
  },
  {
    "id": "YOKO-DT-2026-898",
    "issueDate": "2026-06-29",
    "nature": "INFRA",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWYFR_01",
    "machineType": "12-24 radial machine",
    "downtimeMinutes": 24,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "New printer replaced",
    "responsibility": "ATC",
    "closedDate": "2026-06-29",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-29T19:11:00Z"
  },
  {
    "id": "YOKO-DT-2026-899",
    "issueDate": "2026-06-29",
    "nature": "INFRA",
    "area": "Mixing Shed",
    "process": "Mixing",
    "machineNo": "FC_01",
    "machineType": "Final Chemical",
    "downtimeMinutes": 5,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "New scanner changed",
    "responsibility": "ATC",
    "closedDate": "2026-06-29",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-29T22:32:00Z"
  },
  {
    "id": "YOKO-DT-2026-900",
    "issueDate": "2026-06-29",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T05",
    "machineType": "Taku TBM",
    "downtimeMinutes": 29,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-06-29",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-29T11:16:00Z"
  },
  {
    "id": "YOKO-DT-2026-901",
    "issueDate": "2026-06-29",
    "nature": "MES",
    "area": "4Roll shed",
    "process": "3Roll",
    "machineNo": "3ROLL_02",
    "machineType": "3-Roll Calendar phase 2",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Callibration",
    "responsibility": "ATC",
    "closedDate": "2026-06-29",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-29T16:51:00Z"
  },
  {
    "id": "YOKO-DT-2026-902",
    "issueDate": "2026-06-29",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Cutter",
    "machineNo": "BC-03",
    "machineType": "Biascutter 20-90 deg",
    "downtimeMinutes": 15,
    "category": "Scanner",
    "issueDetails": "Scanner not scanning",
    "actionPlan": "Reinsert the Cabel",
    "responsibility": "ATC",
    "closedDate": "2026-06-29",
    "solvedBy": "Karthik V",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-29T10:48:00Z"
  },
  {
    "id": "YOKO-DT-2026-903",
    "issueDate": "2026-06-30",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T05",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-06-30",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-30T17:05:00Z"
  },
  {
    "id": "YOKO-DT-2026-904",
    "issueDate": "2026-06-30",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T08",
    "machineType": "Taku TBM",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Media out error",
    "actionPlan": "Printer restart done",
    "responsibility": "ATC",
    "closedDate": "2026-06-30",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-30T14:34:00Z"
  },
  {
    "id": "YOKO-DT-2026-905",
    "issueDate": "2026-06-30",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y08",
    "machineType": "YANTAI",
    "downtimeMinutes": 17,
    "category": "IPC",
    "issueDetails": "Not able to access URL",
    "actionPlan": "PC restart done",
    "responsibility": "ATC",
    "closedDate": "2026-06-30",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-30T18:52:00Z"
  },
  {
    "id": "YOKO-DT-2026-906",
    "issueDate": "2026-06-30",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y09",
    "machineType": "YANTAI",
    "downtimeMinutes": 30,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "LAN cable removed and reconnected",
    "responsibility": "ATC",
    "closedDate": "2026-06-30",
    "solvedBy": "Ramesh Kumar",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-30T09:43:00Z"
  },
  {
    "id": "YOKO-DT-2026-907",
    "issueDate": "2026-06-30",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y02",
    "machineType": "YANTAI",
    "downtimeMinutes": 8,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-06-30",
    "solvedBy": "Pardhu",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-30T16:58:00Z"
  },
  {
    "id": "YOKO-DT-2026-908",
    "issueDate": "2026-06-30",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "T08",
    "machineType": "Taku TBM",
    "downtimeMinutes": 12,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "MELSS",
    "closedDate": "2026-06-30",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-30T08:40:00Z"
  },
  {
    "id": "YOKO-DT-2026-909",
    "issueDate": "2026-06-30",
    "nature": "MES",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "Y09",
    "machineType": "YANTAI",
    "downtimeMinutes": 5,
    "category": "Printer",
    "issueDetails": "Not printing tags",
    "actionPlan": "Printer restart done",
    "responsibility": "ATC",
    "closedDate": "",
    "solvedBy": "Bharadwaj",
    "status": "Open",
    "remarks": "",
    "createdAt": "2026-06-30T09:08:00Z"
  },
  {
    "id": "YOKO-DT-2026-910",
    "issueDate": "2026-06-30",
    "nature": "INFRA",
    "area": "Plant 1",
    "process": "Stage-1",
    "machineNo": "F05",
    "machineType": "Fujion",
    "downtimeMinutes": 16,
    "category": "Infra",
    "issueDetails": "Mouse&Keyboard",
    "actionPlan": "Keyboard Replacement",
    "responsibility": "ATC",
    "closedDate": "2026-06-30",
    "solvedBy": "Narayana",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-30T15:31:00Z"
  },
  {
    "id": "YOKO-DT-2026-911",
    "issueDate": "2026-06-30",
    "nature": "MES",
    "area": "Plant 2",
    "process": "Stage-2",
    "machineNo": "SWFMF_03",
    "machineType": "Radial Finemac",
    "downtimeMinutes": 17,
    "category": "NSNL",
    "issueDetails": "Production confirmation page not opened",
    "actionPlan": "Manually tag value set",
    "responsibility": "ATC",
    "closedDate": "2026-06-30",
    "solvedBy": "Srinivas",
    "status": "Completed",
    "remarks": "",
    "createdAt": "2026-06-30T20:23:00Z"
  }
];
window.DEMO_INCIDENTS_BACKUP = DEMO_INCIDENTS_BACKUP;
const PRELOADED_SAMPLE_IMPORT = [
  {
    "id": "YOKO-DT-2026-001",
    "issueDate": "2026-01-03",
    "nature": "INFRA",
    "area": "Plant-2",
    "process": "Tire Building",
    "machineNo": "BLD_F10",
    "machineType": "Tire Building Stage-1",
    "isCritical": "No",
    "downtimeMinutes": 35,
    "affectedMachines": 1,
    "totalDowntimeMinutes": 35,
    "category": "Scanner",
    "issueDetails": "after Plant Shutdown  F10 machine scanner not working Properly (scanner touch issue)",
    "actionPlan": "Replacing New Scanner",
    "responsibility": "IT- Infra",
    "closedDate": "2026-01-03",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": ""
  },
  {
    "id": "YOKO-DT-2026-002",
    "issueDate": "2026-01-06",
    "nature": "INFRA",
    "area": "4 Roll Shed",
    "process": "3 Roll",
    "machineNo": "SQC_02",
    "machineType": "3 Roll Calander",
    "isCritical": "No",
    "downtimeMinutes": 25,
    "affectedMachines": 1,
    "totalDowntimeMinutes": 25,
    "category": "PLC Communication",
    "issueDetails": "Last Production was Confirmed. But not allow next Production Start (Previous Production not completed popup)",
    "actionPlan": "PLC tag was not writed So,Manually (kepware) tag Write to solved the issue",
    "responsibility": "MELSS",
    "closedDate": "2026-01-06",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": ""
  },
  {
    "id": "YOKO-DT-2026-003",
    "issueDate": "2026-01-10",
    "nature": "INFRA",
    "area": "Plant-2",
    "process": "Tire Curing",
    "machineNo": "CU_G01",
    "machineType": "Tire Curing Press",
    "isCritical": "No",
    "downtimeMinutes": 30,
    "affectedMachines": 31,
    "totalDowntimeMinutes": 930,
    "category": "Network",
    "issueDetails": "G-Line and H-line All Machines Network Issue",
    "actionPlan": "Replacing New Switch to Issue corrected",
    "responsibility": "IT- Infra",
    "closedDate": "2026-01-10",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": ""
  },
  {
    "id": "YOKO-DT-2026-004",
    "issueDate": "2026-01-19",
    "nature": "INFRA",
    "area": "Plant-3",
    "process": "Band Building",
    "machineNo": "BND_009",
    "machineType": "Band Building",
    "isCritical": "No",
    "downtimeMinutes": 25,
    "affectedMachines": 1,
    "totalDowntimeMinutes": 25,
    "category": "Scanner",
    "issueDetails": "Scanner Sensor and Touch Screen issue (not working )",
    "actionPlan": "Replacing New Scanner  to issue closed",
    "responsibility": "IT",
    "closedDate": "2026-01-19",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": ""
  },
  {
    "id": "YOKO-DT-2026-005",
    "issueDate": "2026-01-20",
    "nature": "MES",
    "area": "Mixing Shed",
    "process": "Mixing",
    "machineNo": "MIX_001",
    "machineType": "Mixer",
    "isCritical": "No",
    "downtimeMinutes": 120,
    "affectedMachines": 5,
    "totalDowntimeMinutes": 600,
    "category": "MES",
    "issueDetails": "During the AGV integration deployment time, a few issues were observed in the mixer.\nIn the PO confirmation process, when scanning the output one by one, the quantity should normally decrease; however, in this case, it was increasing unexpectedly.\nDue to this issue, PO confirmation could not be completed through MES.\nThere was no production stoppage, and the machines continued to run without interruption.\nHowever, MES scanning was not functioning properly, and it took approximately 2 hours to analyze and resolve the issue",
    "actionPlan": "The root cause of the issue was that, for some materials, the value received from the Material Master was 0, which did not meet the criteria for expiry date handling in the AGV Interface.\nAs a result, the team modified the code to handle both scenarios and ensure proper processing.",
    "responsibility": "MELSS",
    "closedDate": "2026-01-20",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": ""
  },
  {
    "id": "YOKO-DT-2026-006",
    "issueDate": "2026-01-27",
    "nature": "MES",
    "area": "Plant-1",
    "process": "Tire Building",
    "machineNo": "BLD_F18",
    "machineType": "Tire Building Stage-1",
    "isCritical": "No",
    "downtimeMinutes": 95,
    "affectedMachines": 1,
    "totalDowntimeMinutes": 95,
    "category": "MES",
    "issueDetails": "After restarting the Box PCs, even after completing the loading process on Plant-1 TBM BLD_F18 machine, the system did not allow access to the PO confirmation screen. A popup message stating \u201cPrevious process not completed\u201d was displayed. Even in the NSNL OFF condition, the system did not allow PO confirmation. It took approximately 1.3 hours to analyze and rectify this issue. However, there was no machine stoppage and no production loss during this period.",
    "actionPlan": "The root cause of this issue was that, after a server restart, the MQTT database crashed.\nThe team restarted the MQTT service and resumed the original data flow. Due to this unexpected crash, the issue was reported.",
    "responsibility": "MELSS",
    "closedDate": "2026-01-27",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": ""
  },
  {
    "id": "YOKO-DT-2026-007",
    "issueDate": "2026-01-27",
    "nature": "INFRA",
    "area": "4 Roll Shed",
    "process": "Biascutter",
    "machineNo": "BAS_008",
    "machineType": "Auto Bias cutter",
    "isCritical": "No",
    "downtimeMinutes": 40,
    "affectedMachines": 1,
    "totalDowntimeMinutes": 40,
    "category": "Network",
    "issueDetails": "4-Roll Area  auto bias Cutter machine online Printer Network Issue.",
    "actionPlan": "After some time, the ATC IT team identified and resolved the issue, which was caused by a network problem.",
    "responsibility": "IT",
    "closedDate": "2026-01-27",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": ""
  },
  {
    "id": "YOKO-DT-2026-008",
    "issueDate": "2026-02-08",
    "nature": "INFRA",
    "area": "Plant-1",
    "process": "Tire Curing",
    "machineNo": "CU_A01",
    "machineType": "Tire Curing Press",
    "isCritical": "No",
    "downtimeMinutes": 50,
    "affectedMachines": 12,
    "totalDowntimeMinutes": 600,
    "category": "Power Failure",
    "issueDetails": "Plant-1 Curing Network Issue",
    "actionPlan": "The network issue Occurred Due to a power failure to the WIFI box. after Some time, the ATC IT team identified the issue and fixed it.",
    "responsibility": "Engg.",
    "closedDate": "2026-02-08",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": ""
  },
  {
    "id": "YOKO-DT-2026-009",
    "issueDate": "2026-02-12",
    "nature": "INFRA",
    "area": "Plant 4",
    "process": "Solid Curing",
    "machineNo": "S_SC21",
    "machineType": "Solid Tire Curing Press",
    "isCritical": "No",
    "downtimeMinutes": 65,
    "affectedMachines": 1,
    "totalDowntimeMinutes": 65,
    "category": "PLC",
    "issueDetails": "Plant-4 Curing Machine S_SC21 after GT completion, the PO confirmation Screen Not allow to Scan (Previous Process not completed Popup) after I checked the Machine Network is Bad  Signal showing",
    "actionPlan": "The network cable was connected to a port that was not working, so the machine communication failed. With the help of the electrical team, He connected the cable to another port and checked. After that, it started working properly.",
    "responsibility": "Engg.",
    "closedDate": "2026-02-12",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": ""
  },
  {
    "id": "YOKO-DT-2026-010",
    "issueDate": "2026-02-18",
    "nature": "INFRA",
    "area": "Mixing Shed",
    "process": "Chemical Loading",
    "machineNo": "FCL",
    "machineType": "Final Chemical Loading",
    "isCritical": "No",
    "downtimeMinutes": 30,
    "affectedMachines": 1,
    "totalDowntimeMinutes": 30,
    "category": "Printer",
    "issueDetails": "In the mixer line chemical final batch machine, a \u201cMedia Out\u201d error occurred on the online printer. We were unable to rectify the issue immediately.\nDue to this delay in correcting the issue, we were unable to provide input to Mixer 4 and Mixer 6 on time.",
    "actionPlan": "Since the issue could not be resolved and to avoid further delay, after 30 minutes we switched off the printer and changed the machine to use pre-printed tags (old type) in order to continue production.                                                                                                                (A New Printer Needs to be Replaced)",
    "responsibility": "IT- Infra",
    "closedDate": "2026-02-18",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": ""
  },
  {
    "id": "YOKO-DT-2026-011",
    "issueDate": "2026-02-20",
    "nature": "MES",
    "area": "Plant-3",
    "process": "Tire Building",
    "machineNo": "BLD_G03",
    "machineType": "Tire Building Stage-1",
    "isCritical": "No",
    "downtimeMinutes": 50,
    "affectedMachines": 5,
    "totalDowntimeMinutes": 250,
    "category": "SAP",
    "issueDetails": "Sap data not received  to Staging table. (While scaning wrong lable scanned Popup Appear)",
    "actionPlan": "Immediately informed  to SAP  to corrected the issue",
    "responsibility": "SAP Team",
    "closedDate": "2026-02-20",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": ""
  },
  {
    "id": "YOKO-DT-2026-012",
    "issueDate": "2026-02-25",
    "nature": "INFRA",
    "area": "Plant-3",
    "process": "Tire Building",
    "machineNo": "BLD_B07",
    "machineType": "Tire Building Stage-1",
    "isCritical": "No",
    "downtimeMinutes": 120,
    "affectedMachines": 23,
    "totalDowntimeMinutes": 2760,
    "category": "Power Failure",
    "issueDetails": "Plant-3 experienced a full network issue. Until the network problem was resolved, all machines were running in Non-NSNL mode. After approximately 2 hours, the network issue was fixed, and all machines resumed operation in NSNL mode.",
    "actionPlan": "The network issue Occurred Due to a power failure to the WIFI  and Network Connection box. after Some time, the ATC IT team identified the issue and fixed it.",
    "responsibility": "IT- Infra",
    "closedDate": "2026-02-25",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": ""
  },
  {
    "id": "YOKO-DT-2026-013",
    "issueDate": "2026-03-02",
    "nature": "MES",
    "area": "Plant-3",
    "process": "Tire Building",
    "machineNo": "BLD_F09",
    "machineType": "Tire Building Stage-1",
    "isCritical": "No",
    "downtimeMinutes": 40,
    "affectedMachines": 3,
    "totalDowntimeMinutes": 0,
    "category": "SAP",
    "issueDetails": "Sap data not received  to Staging table. (While scaning wrong lable scanned Popup Appear)",
    "actionPlan": "Escalted to SAP team to address the issue.",
    "responsibility": "SAP Team",
    "closedDate": "2026-03-02",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "Preventive: \"Online Printer\" Deployment can help Prevent this Issue"
  },
  {
    "id": "YOKO-DT-2026-014",
    "issueDate": "2026-03-02",
    "nature": "MES",
    "area": "Plant-3",
    "process": "Tire Building",
    "machineNo": "BLD_F09",
    "machineType": "Tire Building Stage-1",
    "isCritical": "No",
    "downtimeMinutes": 40,
    "affectedMachines": 3,
    "totalDowntimeMinutes": 120,
    "category": "SAP",
    "issueDetails": "SAP data not received to Staging table (TBM F09, D06, G06). While scanning, wrong label scanned popup appeared.",
    "actionPlan": "Immediately informed to Planning & SAP Team to correct the issue",
    "responsibility": "Planing Team",
    "closedDate": "2026-03-02",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "Preventive: \"Online Printer\" Deployment can help prevent this issue | Assumption: representative code BLD_F09 for 3 named machines (F09,D06,G06). Issue occurred 02:30 PM."
  },
  {
    "id": "YOKO-DT-2026-015",
    "issueDate": "2026-03-14",
    "nature": "MES",
    "area": "IT Infra",
    "process": "IT Infrastructure",
    "machineNo": "MES_SERVER",
    "machineType": "MES / Application Server",
    "isCritical": "Yes",
    "downtimeMinutes": 60,
    "affectedMachines": 1,
    "totalDowntimeMinutes": 60,
    "category": "Server",
    "issueDetails": "Time taken to restart all Box PC's and MES Server's across the TN site.",
    "actionPlan": "NA",
    "responsibility": "ATC Team",
    "closedDate": "2026-03-14",
    "solvedBy": "ATC IT Team",
    "status": "Completed",
    "remarks": "Preventive: NA | Site-wide restart, no per-machine production stoppage. Server Restart time 2.30-3.30 PM."
  },
  {
    "id": "YOKO-DT-2026-016",
    "issueDate": "2026-03-14",
    "nature": "MES",
    "area": "Plant-1",
    "process": "Tire Building",
    "machineNo": "BLD_F18",
    "machineType": "Tire Building Stage-1",
    "isCritical": "No",
    "downtimeMinutes": 70,
    "affectedMachines": 1,
    "totalDowntimeMinutes": 70,
    "category": "MES",
    "issueDetails": "After restarting Box PCs, Plant-1 TBM BLD_F18 did not allow PO confirmation screen access (\"Previous process not completed\"). No machine stoppage, machine operated without NSNL.",
    "actionPlan": "Restarted MQTT service and resumed original data flow after MQTT database crash post server restart.",
    "responsibility": "MELSS",
    "closedDate": "2026-03-14",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "Preventive: MQTT log file creation process and QA Agent connectivity to be validated; server-level permissions for Mosquitto log/DB files to be verified. | Repeat of Jan 27 MQTT crash pattern on same machine. Issue occurred 05:20 PM."
  },
  {
    "id": "YOKO-DT-2026-017",
    "issueDate": "2026-03-27",
    "nature": "INFRA",
    "area": "Plant-3",
    "process": "Tire Building",
    "machineNo": "BLD_D07",
    "machineType": "Tire Building Stage-1",
    "isCritical": "No",
    "downtimeMinutes": 110,
    "affectedMachines": 1,
    "totalDowntimeMinutes": 110,
    "category": "Network",
    "issueDetails": "Plant-3 TBM D07 machine encountered a network issue.",
    "actionPlan": "Machine run without NSNL to reduce stoppage while IT checked network.",
    "responsibility": "IT Team",
    "closedDate": "2026-03-27",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "Preventive: End-to-end physical connectivity checked; loose connections/cable damage/port faults rectified. | Issue occurred 10:30 AM."
  },
  {
    "id": "YOKO-DT-2026-018",
    "issueDate": "2026-03-27",
    "nature": "INFRA",
    "area": "Plant-3",
    "process": "Tire Building",
    "machineNo": "BLD_H01",
    "machineType": "Tire Building Stage-1",
    "isCritical": "No",
    "downtimeMinutes": 65,
    "affectedMachines": 1,
    "totalDowntimeMinutes": 65,
    "category": "Network",
    "issueDetails": "Plant-3 TBM H01 machine encountered a network issue.",
    "actionPlan": "Machine run without NSNL to reduce stoppage while IT checked network.",
    "responsibility": "IT Team",
    "closedDate": "2026-03-27",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "Preventive: End-to-end physical connectivity checked; loose connections/cable damage/port faults rectified. | Issue occurred 1:20 PM."
  },
  {
    "id": "YOKO-DT-2026-019",
    "issueDate": "2026-03-27",
    "nature": "INFRA",
    "area": "Plant-2",
    "process": "Tire Building",
    "machineNo": "BST_002",
    "machineType": "Tire Building Stage-2",
    "isCritical": "No",
    "downtimeMinutes": 150,
    "affectedMachines": 1,
    "totalDowntimeMinutes": 150,
    "category": "Network",
    "issueDetails": "Plant-2 Bestry-2 machine encountered a network issue.",
    "actionPlan": "Machine run without NSNL to reduce stoppage while IT checked network.",
    "responsibility": "IT Team",
    "closedDate": "2026-03-27",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "Preventive: End-to-end physical connectivity checked; loose connections/cable damage/port faults rectified. | Issue occurred 10:05 PM."
  },
  {
    "id": "YOKO-DT-2026-020",
    "issueDate": "2026-03-28",
    "nature": "INFRA",
    "area": "IT Infra",
    "process": "IT Infrastructure",
    "machineNo": "MES_SERVER",
    "machineType": "MES / Application Server",
    "isCritical": "Yes",
    "downtimeMinutes": 45,
    "affectedMachines": 1,
    "totalDowntimeMinutes": 45,
    "category": "Server",
    "issueDetails": "Network Server Switches restart activity across the TN site.",
    "actionPlan": "NA",
    "responsibility": "ATC IT Team",
    "closedDate": "2026-03-28",
    "solvedBy": "ATC IT Team",
    "status": "Completed",
    "remarks": "Preventive: NA | Site-wide planned restart. Network switches restart time 2.45-3.30 PM."
  },
  {
    "id": "YOKO-DT-2026-021",
    "issueDate": "2026-04-06",
    "nature": "MES",
    "area": "Plant 4",
    "process": "Solid Curing",
    "machineNo": "S_SC01",
    "machineType": "Solid Tire Curing Press",
    "isCritical": "No",
    "downtimeMinutes": 480,
    "affectedMachines": 36,
    "totalDowntimeMinutes": 17280,
    "category": "MES",
    "issueDetails": "PO confirmation issue in Solid Tyre Curing: input production order not closed, so PO does not appear correctly on confirmation screen.",
    "actionPlan": "All machines run without NSNL for one shift while issue was analyzed.",
    "responsibility": "MELSS",
    "closedDate": "",
    "solvedBy": "MELSS Team",
    "status": "Open",
    "remarks": "Preventive: New backend logic proposed so a deleted input PO does not reflect in next PO confirmation screen. | Assumption: \"some machines\" read as all 36 Solid Curing machines per your instruction; representative code S_SC01. Issue occurred 18:50 PM."
  },
  {
    "id": "YOKO-DT-2026-022",
    "issueDate": "2026-04-08",
    "nature": "MES",
    "area": "Plant-2",
    "process": "Tire Building",
    "machineNo": "BLD_F02",
    "machineType": "Tire Building Stage-1",
    "isCritical": "No",
    "downtimeMinutes": 5,
    "affectedMachines": 1,
    "totalDowntimeMinutes": 5,
    "category": "MES",
    "issueDetails": "Filler & Flipper Machine-01: during PO confirmation, next label printed automatically after one label; operator moved unconfirmed label forward without checking, so it could not be scanned/consumed.",
    "actionPlan": "Backend verification and traceability check done; wrongly moved label replaced with correct label.",
    "responsibility": "MELSS",
    "closedDate": "",
    "solvedBy": "MELSS Team",
    "status": "Open",
    "remarks": "Preventive: (Ticket Raised) MELSS team analysing the issue | Issue occurred 21:50 PM."
  },
  {
    "id": "YOKO-DT-2026-023",
    "issueDate": "2026-04-12",
    "nature": "MES",
    "area": "FID",
    "process": "FID",
    "machineNo": "FID",
    "machineType": "FID",
    "isCritical": "No",
    "downtimeMinutes": 10,
    "affectedMachines": 1,
    "totalDowntimeMinutes": 10,
    "category": "MES",
    "issueDetails": "Users unable to log in to FID process system across Plant 1-4; login screen kept loading.",
    "actionPlan": "Resolved after restarting the Apache Server.",
    "responsibility": "MELSS",
    "closedDate": "",
    "solvedBy": "MELSS Team",
    "status": "Open",
    "remarks": "Preventive: (Ticket Raised) MELSS team analysing the issue | Assumption: mapped to \"FID\" process (1 machine in Machine_Master) per your \"all machines in that process\" rule; text mentions Plant 1-4 scope, so verify if broader coverage is intended. Issue occurred 00:10 AM."
  },
  {
    "id": "YOKO-DT-2026-024",
    "issueDate": "2026-05-22",
    "nature": "MES",
    "area": "IT Infra",
    "process": "IT Infrastructure",
    "machineNo": "MES_SERVER",
    "machineType": "MES / Application Server",
    "isCritical": "Yes",
    "downtimeMinutes": 30,
    "affectedMachines": 1,
    "totalDowntimeMinutes": 30,
    "category": "MES",
    "issueDetails": "While reading newly added alarm tags in Kepware for the Curing Utility Drop - Auto Hold function, an unexpected PO Confirmation issue occurred plant-wide.",
    "actionPlan": "Stopped Kepware tag reading activity, checked PLC-MES communication status; PO Confirmation recovered after verification.",
    "responsibility": "MELSS",
    "closedDate": "",
    "solvedBy": "MELSS Team",
    "status": "Open",
    "remarks": "Preventive: (Ticket Raised) MELSS team analysing the issue | Site-wide software issue during feature deployment. Issue occurred 11:15 AM."
  },
  {
    "id": "YOKO-DT-2026-025",
    "issueDate": "2026-06-02",
    "nature": "MES",
    "area": "IT Infra",
    "process": "IT Infrastructure",
    "machineNo": "MES_SERVER",
    "machineType": "MES / Application Server",
    "isCritical": "Yes",
    "downtimeMinutes": 240,
    "affectedMachines": 1,
    "totalDowntimeMinutes": 240,
    "category": "Server",
    "issueDetails": "MES brought down for MongoDB upgrade. No machines idle/stopped; all ran in non-NSNL mode without interruption.",
    "actionPlan": "NA",
    "responsibility": "MELSS",
    "closedDate": "2026-06-02",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "Preventive: NA | Planned upgrade window 11.00 AM-3.00 PM."
  },
  {
    "id": "YOKO-DT-2026-026",
    "issueDate": "2026-06-02",
    "nature": "MES",
    "area": "Mixing Shed",
    "process": "Mixing",
    "machineNo": "MIX_001",
    "machineType": "Mixer",
    "isCritical": "No",
    "downtimeMinutes": 5,
    "affectedMachines": 6,
    "totalDowntimeMinutes": 30,
    "category": "MES",
    "issueDetails": "All scanners across the plant displayed a white screen; some users unable to log in, application stuck loading.",
    "actionPlan": "Restarted Apache service; application resumed normally.",
    "responsibility": "MELSS",
    "closedDate": "",
    "solvedBy": "MELSS Team",
    "status": "Open",
    "remarks": "Preventive: (Ticket Raised) MELSS team analysing the issue | Split across the 3 named processes (Mixing/Tire Building/Tire Curing) per your \"all machines in that process\" rule - this row covers Mixing (6 machines). Issue occurred 00:15 PM."
  },
  {
    "id": "YOKO-DT-2026-027",
    "issueDate": "2026-06-02",
    "nature": "MES",
    "area": "Plant-1",
    "process": "Tire Building",
    "machineNo": "BLD_A01",
    "machineType": "Tire Building Stage-1",
    "isCritical": "No",
    "downtimeMinutes": 5,
    "affectedMachines": 75,
    "totalDowntimeMinutes": 375,
    "category": "MES",
    "issueDetails": "All scanners across the plant displayed a white screen; some users unable to log in, application stuck loading.",
    "actionPlan": "Restarted Apache service; application resumed normally.",
    "responsibility": "MELSS",
    "closedDate": "",
    "solvedBy": "MELSS Team",
    "status": "Open",
    "remarks": "Preventive: (Ticket Raised) MELSS team analysing the issue | Split across the 3 named processes per your rule - this row covers Tire Building (75 machines). Issue occurred 00:15 PM."
  },
  {
    "id": "YOKO-DT-2026-028",
    "issueDate": "2026-06-02",
    "nature": "MES",
    "area": "Plant-1",
    "process": "Tire Curing",
    "machineNo": "CU_A01",
    "machineType": "Tire Curing Press",
    "isCritical": "No",
    "downtimeMinutes": 5,
    "affectedMachines": 169,
    "totalDowntimeMinutes": 845,
    "category": "MES",
    "issueDetails": "All scanners across the plant displayed a white screen; some users unable to log in, application stuck loading.",
    "actionPlan": "Restarted Apache service; application resumed normally.",
    "responsibility": "MELSS",
    "closedDate": "",
    "solvedBy": "MELSS Team",
    "status": "Open",
    "remarks": "Preventive: (Ticket Raised) MELSS team analysing the issue | Split across the 3 named processes per your rule - this row covers Tire Curing (169 machines). Issue occurred 00:15 PM."
  },
  {
    "id": "YOKO-DT-2026-029",
    "issueDate": "2026-06-24",
    "nature": "MES",
    "area": "IT Infra",
    "process": "IT Infrastructure",
    "machineNo": "MES_SERVER",
    "machineType": "MES / Application Server",
    "isCritical": "Yes",
    "downtimeMinutes": 120,
    "affectedMachines": 1,
    "totalDowntimeMinutes": 120,
    "category": "MES",
    "issueDetails": "Curing Utility affected Tyre's Auto Hold system deployed to production. All machines run without NSNL during deployment; no production stoppage.",
    "actionPlan": "NA",
    "responsibility": "MELSS",
    "closedDate": "2026-06-24",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "Preventive: NA | Deployment activity time 12:00-2:00 PM."
  },
  {
    "id": "YOKO-DT-2026-030",
    "issueDate": "2026-07-04",
    "nature": "MES",
    "area": "IT Infra",
    "process": "IT Infrastructure",
    "machineNo": "MES_SERVER",
    "machineType": "MES / Application Server",
    "isCritical": "Yes",
    "downtimeMinutes": 60,
    "affectedMachines": 1,
    "totalDowntimeMinutes": 60,
    "category": "Server",
    "issueDetails": "Time taken to restart all Box PC's and MES Server's across the TN site.",
    "actionPlan": "Production Team informed to run machines without NSNL mode; no production stoppage.",
    "responsibility": "ATC Team",
    "closedDate": "2026-07-04",
    "solvedBy": "ATC IT Team",
    "status": "Completed",
    "remarks": "Preventive: NA | Server Restart time 3.00-4.00 PM."
  },
  {
    "id": "YOKO-DT-2026-031",
    "issueDate": "2026-07-05",
    "nature": "MES",
    "area": "Plant-1",
    "process": "Tire Building",
    "machineNo": "BLD_A06",
    "machineType": "Tire Building Stage-1",
    "isCritical": "No",
    "downtimeMinutes": 60,
    "affectedMachines": 4,
    "totalDowntimeMinutes": 240,
    "category": "SAP",
    "issueDetails": "SAP data not received to Staging table (Plant-1&3 TBM: A06, A10, D06, H01). Wrong label scanned popup appeared.",
    "actionPlan": "Immediately informed to Planning & SAP Team to correct the issue",
    "responsibility": "Planing Team",
    "closedDate": "2026-07-05",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "Preventive: \"Online Printer\" Deployment can help prevent this issue | Representative code BLD_A06 for 4 named machines (A06,A10,D06,H01). Issue occurred 08:30 AM."
  },
  {
    "id": "YOKO-DT-2026-032",
    "issueDate": "2026-07-07",
    "nature": "INFRA",
    "area": "Plant-1",
    "process": "Tire Curing",
    "machineNo": "CU_A01",
    "machineType": "Tire Curing Press",
    "isCritical": "No",
    "downtimeMinutes": 20,
    "affectedMachines": 76,
    "totalDowntimeMinutes": 1520,
    "category": "Power Failure",
    "issueDetails": "Network issue across Plant-1 (machines & FID area) due to a power supply interruption to the IT network switch box serving the plant.",
    "actionPlan": "Production Team informed to run machines without NSNL mode.",
    "responsibility": "NA",
    "closedDate": "2026-07-07",
    "solvedBy": "MELSS Team",
    "status": "Completed",
    "remarks": "Assumption: affected count = all Plant-1 machines (75, Machine_Master) + FID (1) = 76, attributed to Tire Curing as the dominant Plant-1 process (49 of 75 Plant-1 machines) - flag for your review if a different process split is more accurate. Issue occurred 02:30 PM."
  },
  {
    "id": "YOKO-DT-2026-033",
    "issueDate": "2026-07-19",
    "nature": "MES",
    "area": "Plant-1",
    "process": "Tire Building",
    "machineNo": "BLD_A01",
    "machineType": "Tire Building Stage-1",
    "isCritical": "No",
    "downtimeMinutes": 60,
    "affectedMachines": 60,
    "totalDowntimeMinutes": 3600,
    "category": "MES",
    "issueDetails": "MES server password expired, disrupting data flow between MES application and staging table; production output data could not be read/scanned (GT-label scan failure) across Plant-1,2,3 TBM Stage-1.",
    "actionPlan": "Production Team informed to run machines without NSNL mode until resolved.",
    "responsibility": "MELSS",
    "closedDate": "",
    "solvedBy": "MELSS Team",
    "status": "Open",
    "remarks": "Assumption: read \"TBM Stage-1\" narrowly as the 60 Stage-1 machines across Plant-1,2,3 (not the full 75-machine Tire Building process, which also includes Stage-2). Representative code BLD_A01. Issue occurred 1:10 PM."
  },
  {
    "id": "YOKO-DT-2026-034",
    "issueDate": "2026-07-23",
    "nature": "MES",
    "area": "Mixing Shed",
    "process": "Mixing",
    "machineNo": "MIX_001",
    "machineType": "Mixer",
    "isCritical": "No",
    "downtimeMinutes": 5,
    "affectedMachines": 6,
    "totalDowntimeMinutes": 30,
    "category": "MES",
    "issueDetails": "Production application login screen stuck loading (white screen); users unable to log in across Mixer, Curing, TBM areas.",
    "actionPlan": "Restarted Apache server; production screen resumed normally.",
    "responsibility": "MELSS",
    "closedDate": "",
    "solvedBy": "MELSS Team",
    "status": "Open",
    "remarks": "Preventive: (Ticket Raised) MELSS team analysing the issue | Split across the 3 named processes per your rule - this row covers Mixing (6 machines). Issue occurred 4:17 AM."
  },
  {
    "id": "YOKO-DT-2026-035",
    "issueDate": "2026-07-23",
    "nature": "MES",
    "area": "Plant-1",
    "process": "Tire Building",
    "machineNo": "BLD_A01",
    "machineType": "Tire Building Stage-1",
    "isCritical": "No",
    "downtimeMinutes": 5,
    "affectedMachines": 75,
    "totalDowntimeMinutes": 375,
    "category": "MES",
    "issueDetails": "Production application login screen stuck loading (white screen); users unable to log in across Mixer, Curing, TBM areas.",
    "actionPlan": "Restarted Apache server; production screen resumed normally.",
    "responsibility": "MELSS",
    "closedDate": "",
    "solvedBy": "MELSS Team",
    "status": "Open",
    "remarks": "Preventive: (Ticket Raised) MELSS team analysing the issue | Split across the 3 named processes per your rule - this row covers Tire Building (75 machines). Issue occurred 4:17 AM."
  },
  {
    "id": "YOKO-DT-2026-036",
    "issueDate": "2026-07-23",
    "nature": "MES",
    "area": "Plant-1",
    "process": "Tire Curing",
    "machineNo": "CU_A01",
    "machineType": "Tire Curing Press",
    "isCritical": "No",
    "downtimeMinutes": 5,
    "affectedMachines": 169,
    "totalDowntimeMinutes": 845,
    "category": "MES",
    "issueDetails": "Production application login screen stuck loading (white screen); users unable to log in across Mixer, Curing, TBM areas.",
    "actionPlan": "Restarted Apache server; production screen resumed normally.",
    "responsibility": "MELSS",
    "closedDate": "",
    "solvedBy": "MELSS Team",
    "status": "Open",
    "remarks": "Preventive: (Ticket Raised) MELSS team analysing the issue | Split across the 3 named processes per your rule - this row covers Tire Curing (169 machines). Issue occurred 4:17 AM."
  },
  {
    "id": "YOKO-DT-2026-037",
    "issueDate": "2026-07-25",
    "nature": "MES",
    "area": "IT Infra",
    "process": "IT Infrastructure",
    "machineNo": "MES_SERVER",
    "machineType": "MES / Application Server",
    "isCritical": "Yes",
    "downtimeMinutes": 120,
    "affectedMachines": 1,
    "totalDowntimeMinutes": 120,
    "category": "MES",
    "issueDetails": "Production application login screen stuck loading (white screen) across the TN site; repeated issue.",
    "actionPlan": "Production Team ran machines without NSNL mode; resolved after restarting Apache server and changing connection timeout.",
    "responsibility": "MELSS",
    "closedDate": "",
    "solvedBy": "MELSS Team",
    "status": "Open",
    "remarks": "Preventive: (Ticket Raised) MELSS team analysing the issue | Site-wide, no production stoppage - treated per your \"count as 1\" rule. Repeated issue flagged YES in source. Issue occurred 8:57 AM."
  },
  {
    "id": "YOKO-DT-2026-038",
    "issueDate": "2026-07-30",
    "nature": "INFRA",
    "area": "IT Infra",
    "process": "IT Infrastructure",
    "machineNo": "MES_SERVER",
    "machineType": "MES / Application Server",
    "isCritical": "Yes",
    "downtimeMinutes": 185,
    "affectedMachines": 1,
    "totalDowntimeMinutes": 185,
    "category": "Network",
    "issueDetails": "Firewall malfunction caused a TN Plant IT network outage, affecting connectivity for all network-connected devices/machines; MES, SAP, and Wi-Fi services became unavailable, impacting normal operations.",
    "actionPlan": "Production Team informed to run machines without NSNL and barcode scanning until resolved.",
    "responsibility": "ATC IT",
    "closedDate": "",
    "solvedBy": "ATC IT Team",
    "status": "Open",
    "remarks": "Preventive: YOHT IT team analysing the issue | Site-wide, treated as MES_SERVER/IT Infrastructure per your \"count as 1\" rule. CAPA Required: YES, Escalation Required: YES (escalated to YOHT IT). Repeated Issue: NO. Note: Date column says 30-07-2026 (Shift C) but source remark timestamps the issue at 4:35 AM on 31-07-2026 - likely a shift crossing midnight; logged under the shift-start date per convention. Flag if you want it moved to the 31st instead."
  }
];
window.PRELOADED_SAMPLE_IMPORT = PRELOADED_SAMPLE_IMPORT;
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

// --- Initialization ---
document.addEventListener("DOMContentLoaded", async () => {
  await initStorage();
  initFormControls();
  initLiveClock();
  initMachineMultiSelectDropdown();
  initAreaMultiSelectDropdown();
  initFormAreaDropdown();
  initFormMachineDropdown();
  initAreasDropdowns();
  initProcessesDropdowns();
  initTechniciansDropdown();
  renderMasterPersonnelGrid();
  initCategoryDropdowns();
  initResponsibilityDropdown();
  initNatureSelector();
  initNatureFilterDropdown();
  initMachineSelector();
  populateDefaultDates();
  initAuthSystem();
  setupDependentDropdowns();
  setupEventListeners();
  populateDashboardMonths();

  const currentUser = getCurrentUser();
  if (currentUser) {
    updateAuthUI(currentUser);
    const targetTab = currentUser.allowedTabs.includes(activeTab) ? activeTab : (currentUser.allowedTabs[0] || 'entry');
    switchTab(targetTab);
  } else {
    updateAuthUI(null);
  }
});

// =========================================================================
// MULTI-ROLE RBAC AUTHENTICATION & ACCESS CONTROL SYSTEM
// Roles: Operator (Entry Only), Supervisor (Entry + KPI), Admin (Full + Settings)
// =========================================================================

const DEFAULT_USER_ACCOUNTS = {
  operator: {
    username: "operator",
    passwordHash: "5746b142df3f4ddbfdf0fa49c30fef6509f6e5a61fc726ff2c0cb77d7ffccff0",
    plainPassword: "operator123",
    role: "OPERATOR",
    displayName: "Plant Operator",
    allowedTabs: ["entry"],
    canExport: false,
    canManageSettings: false,
    themeColor: "emerald"
  },
  supervisor: {
    username: "supervisor",
    passwordHash: "7b1c3e3a4e929f0464f89d79ca82fe5daff0da070c01a1e7b9dd4bcf6b509ef5",
    plainPassword: "super123",
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
    plainPassword: "admin123",
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
  updateAuthUI(user);
  const targetTab = user.role === "OPERATOR" ? "entry" : (activeTab || "all");
  switchTab(targetTab);
  showToast(`Signed in as ${user.displayName} (${user.role})!`, "success");
};

window.handleUserLogout = function() {
  localStorage.removeItem("YOKOHAMA_CURRENT_USER");
  localStorage.removeItem("YOKOHAMA_ADMIN_LOGGED_IN");
  updateAuthUI(null);
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

        // 1. Authenticate against Supabase Cloud Database
        if (typeof window.authenticateUserWithSupabase === "function") {
          try {
            const cloudUser = await window.authenticateUserWithSupabase(usernameInput, passwordInput);
            if (cloudUser) {
              matchedUser = {
                username: cloudUser.username,
                role: cloudUser.role,
                displayName: cloudUser.display_name,
                canExport: cloudUser.can_export !== false,
                canManageSettings: cloudUser.can_manage_settings === true,
                themeColor: cloudUser.theme_color || "red",
                allowedTabs: cloudUser.role === "OPERATOR" ? ["entry"] : (cloudUser.role === "SUPERVISOR" ? ["entry", "kpi", "logs", "all"] : ["entry", "kpi", "logs", "all", "settings"])
              };
            }
          } catch (cloudErr) {
            console.warn("Cloud auth error, testing fallback:", cloudErr);
          }
        }

        // 2. Fallback to local accounts if offline or cloud unavailable
        if (!matchedUser) {
          const pHash = await hashCredential(passwordInput);
          for (const key of Object.keys(USER_ACCOUNTS)) {
            const acc = USER_ACCOUNTS[key];
            if (acc && acc.username && acc.username.toLowerCase() === usernameInput) {
              if (passwordInput === acc.plainPassword || (acc.passwordHash && pHash === acc.passwordHash)) {
                matchedUser = acc;
                break;
              }
            }
          }
        }

        if (matchedUser) {
          localStorage.setItem("YOKOHAMA_CURRENT_USER", JSON.stringify(matchedUser));
          localStorage.setItem("YOKOHAMA_ADMIN_LOGGED_IN", "true");
          updateAuthUI(matchedUser);

          const targetTab = matchedUser.role === "OPERATOR" ? "entry" : (activeTab || "all");
          switchTab(targetTab);
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
  const passEl = document.getElementById(`user${cap}NewPass`);
  const confEl = document.getElementById(`user${cap}ConfirmPass`);

  const newDisplayName = (dispEl?.value || "").trim();
  const newUsername = (userEl?.value || "").trim();
  const newPass = (passEl?.value || "").trim();
  const confPass = (confEl?.value || "").trim();

  if (!newUsername) {
    showToast("Username cannot be empty!", "warning");
    if (userEl) userEl.focus();
    return;
  }

  // Check duplicate username across other accounts
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
    acc.plainPassword = newPass;
    acc.passwordHash = pHash;
    passwordChanged = true;
  }

  acc.username = newUsername;
  if (newDisplayName) acc.displayName = newDisplayName;

  saveUserAccountsToStorage();

  if (typeof window.updateCloudUserAccount === "function") {
    window.updateCloudUserAccount(acc.role, acc.username, acc.displayName, acc.passwordHash).catch(e => console.warn("[Supabase] Cloud user sync warning:", e));
  }

  // If the updated user is currently logged in, sync session
  const currentUser = getCurrentUser();
  if (currentUser && currentUser.role === acc.role) {
    localStorage.setItem("YOKOHAMA_CURRENT_USER", JSON.stringify(acc));
    updateAuthUI(acc);
  }

  // Clear password inputs
  if (passEl) passEl.value = "";
  if (confEl) confEl.value = "";

  const statusEl = document.getElementById(`badge${cap}Status`);
  if (statusEl) {
    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    statusEl.innerHTML = `<i class="fa-solid fa-check text-emerald-600"></i> Updated ${timeStr}`;
  }

  const passMsg = passwordChanged ? " and password updated" : "";
  showToast(`${acc.role} account credentials saved! Username: "${newUsername}"${passMsg}.`, "success");
};

// --- Reset Master Settings to Factory Defaults ---
window.resetMasterSettingsToDefaults = function() {
  if (!confirm("Reset all Master Settings (Machines, Categories, Areas, Responsibilities) to factory defaults? Custom additions will be restored.")) {
    return;
  }
  localStorage.removeItem("YOKOHAMA_MASTER_MACHINES");
  localStorage.removeItem("YOKOHAMA_MASTER_AREAS");
  localStorage.removeItem("YOKOHAMA_MASTER_CATEGORIES");
  localStorage.removeItem("YOKOHAMA_MASTER_RESPONSIBILITIES");
  localStorage.removeItem("YOKOHAMA_MASTER_NATURES");
  localStorage.removeItem("YOKOHAMA_TECHNICIANS");
  localStorage.removeItem("YOKOHAMA_USER_ACCOUNTS");

  YOKOHAMA_MACHINES = JSON.parse(JSON.stringify(INITIAL_MACHINES_BACKUP));
  YOKOHAMA_AREAS = JSON.parse(JSON.stringify(INITIAL_AREAS_BACKUP));
  masterCategories = ["NSNL", "IPC", "Printer", "Scanner", "Infra", "MES", "Hardware / PC", "Network / Switch", "PLC / SCADA", "Other"];
  masterResponsibilities = ["ATC", "MELSS"];
  masterNatures = [...INITIAL_NATURES_BACKUP];
  technicians = [...DEFAULT_TECHNICIANS];
  USER_ACCOUNTS = JSON.parse(JSON.stringify(DEFAULT_USER_ACCOUNTS));
  saveUserAccountsToStorage();
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
  showToast("Master Settings reset to factory defaults successfully!", "success");
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
  // Load Dynamic Master Registry with Versioning
  const masterVer = localStorage.getItem("YOKOHAMA_MASTER_VERSION");
  const storedMachines = localStorage.getItem("YOKOHAMA_MASTER_MACHINES");
  if (masterVer === "2026_master_v2" && storedMachines) {
    try {
      YOKOHAMA_MACHINES = JSON.parse(storedMachines);
    } catch (e) {
      console.error("Failed to parse master machines", e);
      YOKOHAMA_MACHINES = [...INITIAL_MACHINES_BACKUP];
    }
    const storedAreas = localStorage.getItem("YOKOHAMA_MASTER_AREAS");
    if (storedAreas) {
      try { YOKOHAMA_AREAS = JSON.parse(storedAreas); } catch (e) { console.error(e); }
    }
    const storedProcesses = localStorage.getItem("YOKOHAMA_MASTER_PROCESSES");
    if (storedProcesses) {
      try { YOKOHAMA_PROCESSES = JSON.parse(storedProcesses); } catch (e) { console.error(e); }
    }
  } else {
    YOKOHAMA_MACHINES = [...INITIAL_MACHINES_BACKUP];
    YOKOHAMA_AREAS = [...INITIAL_AREAS_BACKUP];
    YOKOHAMA_PROCESSES = [...INITIAL_PROCESSES_BACKUP];
    saveMasterDataToStorage();
  }
  const storedCats = localStorage.getItem("YOKOHAMA_MASTER_CATEGORIES");
  if (storedCats) {
    try {
      masterCategories = JSON.parse(storedCats);
    } catch (e) {
      console.error("Failed to parse master categories", e);
    }
  }
  const storedResp = localStorage.getItem("YOKOHAMA_MASTER_RESPONSIBILITIES");
  if (storedResp) {
    try {
      masterResponsibilities = JSON.parse(storedResp);
    } catch (e) {
      console.error("Failed to parse master responsibilities", e);
    }
  }
  const storedNatures = localStorage.getItem("YOKOHAMA_MASTER_NATURES");
  if (storedNatures) {
    try {
      masterNatures = JSON.parse(storedNatures);
    } catch (e) {
      console.error("Failed to parse master natures", e);
    }
  }
  rebuildMachineMap();
  window.YOKOHAMA_AREAS = YOKOHAMA_AREAS;
  window.YOKOHAMA_MACHINES = YOKOHAMA_MACHINES;

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
    });
  }
}
window.initStorage = initStorage;

function saveToStorage() {
  localStorage.setItem("YOKOHAMA_DOWNTIME_RECORDS", JSON.stringify(downtimeRecords));
  if (typeof window.bulkUpsertCloudIncidents === "function" && Array.isArray(downtimeRecords) && downtimeRecords.length > 0) {
    window.bulkUpsertCloudIncidents(downtimeRecords).catch(e => console.warn("[Supabase] Cloud sync warning:", e));
  }
}

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
  setInterval(updateTime, 1000);
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

function populateDefaultDates() {
  const today = new Date().toISOString().split("T")[0];
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
      if (closedDateInput && !closedDateInput.value) {
        closedDateInput.value = new Date().toISOString().split("T")[0];
      }
    });

    btnOpen.addEventListener("click", () => {
      hiddenStatus.value = "Open";
      btnOpen.className = "segmented-option active-open";
      btnCompleted.className = "segmented-option";
      if (closedDateContainer) closedDateContainer.style.opacity = "0.6";
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

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentFilter.search = e.target.value.toLowerCase();
      renderRecordsTable();
    });
  }

  if (dateFilter) {
    dateFilter.addEventListener("change", (e) => {
      currentFilter.dateFrom = e.target.value;
      renderRecordsTable();
    });
  }

  if (dateToFilter) {
    dateToFilter.addEventListener("change", (e) => {
      currentFilter.dateTo = e.target.value;
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

  syncFormHiddenInputs();

  const issueDate = document.getElementById("issueDate").value;
  const nature = document.getElementById("nature").value;
  const area = document.getElementById("area").value;
  const machineNo = document.getElementById("machineNo").value;
  const isCritical = document.getElementById("isCritical") ? document.getElementById("isCritical").value : "No";
  const machineType = document.getElementById("machineType") ? document.getElementById("machineType").value : "";
  const downtimeMinutes = parseInt(document.getElementById("downtimeMinutes").value, 10);
  const affectedMachines = parseInt(document.getElementById("affectedMachines") ? document.getElementById("affectedMachines").value : 1, 10) || (machinesList.length > 0 ? machinesList.length : 1);
  const totalDowntimeMinutes = parseInt(document.getElementById("totalDowntimeMinutes") ? document.getElementById("totalDowntimeMinutes").value : 0, 10) || (downtimeMinutes * affectedMachines);
  const category = document.getElementById("category").value;
  const issueDetails = document.getElementById("issueDetails") ? document.getElementById("issueDetails").value.trim() : "";
  const actionPlan = document.getElementById("actionPlan") ? document.getElementById("actionPlan").value.trim() : "";

  const responsibility = document.getElementById("responsibility").value;
  const closedDate = document.getElementById("closedDate").value;
  const solvedBy = document.getElementById("solvedBy").value;
  const status = document.getElementById("closureStatus").value;
  const remarks = document.getElementById("remarks").value.trim();

  if (!issueDate) {
    showToast("Please select the Issue Date.", "warning");
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
    showToast("Please enter a valid numeric downtime in minutes.", "warning");
    document.getElementById("downtimeMinutes").focus();
    return;
  }
  if (!issueDetails) {
    showToast("Please select or enter the Issue Details.", "warning");
    return;
  }
  if (!solvedBy) {
    showToast("Please select or specify the Responsible Person.", "warning");
    document.getElementById("solvedBy").focus();
    return;
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

  if (editingRecordId) {
    const index = downtimeRecords.findIndex(r => r.id === editingRecordId);
    if (index !== -1) {
      downtimeRecords[index] = {
        ...downtimeRecords[index],
        issueDate,
        date: issueDate,
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
        closedDate: status === "Completed" ? (closedDate || issueDate) : "",
        solvedBy,
        responsiblePerson: solvedBy,
        status,
        remarks,
        updatedAt: new Date().toISOString()
      };
      showToast(`Record ${editingRecordId} updated successfully!`, "success");
      editingRecordId = null;
      document.getElementById("btn-save-record").innerHTML = `<i class="fa-solid fa-floppy-disk mr-1.5"></i> Save Entry`;
    }
  } else {
    // SINGLE LINE OUTPUT FOR THE ENTIRE BREAKDOWN
    const year = new Date().getFullYear();
    const recordNum = String(downtimeRecords.length + 1).padStart(3, "0");
    const newId = `YOKO-DT-${year}-${recordNum}`;

    const newRecord = {
      id: newId,
      issueDate,
      date: issueDate,
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
      closedDate: status === "Completed" ? (closedDate || issueDate) : "",
      solvedBy,
      responsiblePerson: solvedBy,
      status,
      remarks,
      createdAt: new Date().toISOString()
    };

    downtimeRecords.unshift(newRecord);
    showToast(`Downtime entry ${newId} saved as a single line output (${finalMachineNo} • ${finalArea} • ${finalProcess})!`, "success");
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
}
window.handleFormSubmit = handleFormSubmit;

function resetForm() {
  document.getElementById("downtimeForm").reset();
  editingRecordId = null;
  
  setFormNature(masterNatures.includes("MES") ? "MES" : (masterNatures[0] || "MES"));

  const btnCompleted = document.getElementById("btn-status-completed");
  const btnOpen = document.getElementById("btn-status-open");
  if (btnCompleted && btnOpen) {
    document.getElementById("closureStatus").value = "Open";
    btnOpen.className = "segmented-option active-open";
    btnCompleted.className = "segmented-option";
    const closedDateContainer = document.getElementById("closed-date-container");
    if (closedDateContainer) closedDateContainer.style.opacity = "0.6";
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

  const saveBtn = document.getElementById("btn-save-record");
  if (saveBtn) {
    saveBtn.innerHTML = `<i class="fa-solid fa-floppy-disk mr-1.5"></i> Save Entry`;
  }
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

  if (countEl) countEl.textContent = `${filtered.length} Incident${filtered.length === 1 ? '' : 's'}`;
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
      showingInfo.textContent = `Showing ${filtered.length} of ${downtimeRecords.length} total entries${filterText}`;
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

  tbody.innerHTML = filtered.map((rec) => {
    const isCompleted = rec.status === "Completed";
    const natureBadge = getNatureBadge(rec.nature);

    const statusBadge = isCompleted
      ? `<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200"><i class="fa-solid fa-check-circle mr-1 text-emerald-600"></i> Completed</span>`
      : `<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-100 text-red-800 border border-red-200 pulse-red-indicator"><i class="fa-solid fa-triangle-exclamation mr-1 text-red-600"></i> Open</span>`;

    return `
      <tr class="hover:bg-slate-50/80 transition-colors border-b border-slate-100 group">
        <td class="px-4 py-3.5 font-mono text-xs font-bold text-slate-900 whitespace-nowrap">
          ${rec.id}
        </td>
        <td class="px-4 py-3.5 whitespace-nowrap text-xs font-semibold text-slate-600">
          ${rec.issueDate}
        </td>
        <td class="px-4 py-3.5 whitespace-nowrap">
          ${natureBadge}
        </td>
        <td class="px-4 py-3.5 whitespace-nowrap">
          ${getCategoryBadge(rec.category)}
        </td>
        <td class="px-4 py-3.5 text-xs font-bold text-slate-800 whitespace-nowrap">
          <div class="px-2 py-0.5 bg-slate-900 text-white rounded text-[11px] font-bold inline-block">${rec.area}</div>
          <div class="text-[10px] text-slate-500 font-semibold mt-0.5">${rec.process || 'General'}</div>
        </td>
        <td class="px-4 py-3.5 text-xs whitespace-nowrap">
          <div class="flex items-center gap-1.5">
            <span class="font-bold text-slate-900 font-mono text-red-600">${rec.machineNo}</span>
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
          <div class="font-semibold text-slate-900 truncate" title="${rec.issueDetails}">${rec.issueDetails}</div>
          <div class="text-[11px] text-slate-500 truncate" title="${rec.actionPlan || 'Troubleshooting done'}">
            <i class="fa-solid fa-wrench text-[9px] mr-1 text-slate-400"></i>${rec.actionPlan || 'Troubleshooting done'}
          </div>
        </td>
        <td class="px-4 py-3.5 whitespace-nowrap text-xs">
          <span class="font-bold text-slate-800 flex items-center gap-1.5">
            <span class="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center text-[10px] text-slate-700 font-black">
              ${rec.solvedBy ? rec.solvedBy.charAt(0) : 'T'}
            </span>
            ${rec.solvedBy || 'Unassigned'}
          </span>
        </td>
        <td class="px-4 py-3.5 whitespace-nowrap">
          ${statusBadge}
        </td>
        <td class="px-4 py-3.5 text-right whitespace-nowrap">
          <div class="flex items-center justify-end gap-1.5 opacity-90 group-hover:opacity-100">
            <button onclick="viewRecordDetails('${rec.id}')" title="View Full Details" class="p-1.5 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded transition-all">
              <i class="fa-solid fa-eye text-xs"></i>
            </button>
            <button onclick="loadRecordForEdit('${rec.id}')" title="Edit Entry" class="p-1.5 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded transition-all">
              <i class="fa-solid fa-pen-to-square text-xs"></i>
            </button>
            <button onclick="toggleRecordStatus('${rec.id}')" title="Toggle Open/Completed" class="p-1.5 text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 rounded transition-all">
              <i class="fa-solid fa-arrows-rotate text-xs"></i>
            </button>
            <button onclick="deleteRecord('${rec.id}')" title="Delete Entry" class="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded transition-all">
              <i class="fa-solid fa-trash text-xs"></i>
            </button>
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
          <span class="text-xs font-mono font-bold text-red-600 bg-red-50 px-2 py-1 rounded border border-red-200">${rec.id}</span>
          <h4 class="text-lg font-bold text-slate-900 mt-1">${rec.machineNo} - ${rec.area}</h4>
        </div>
        <span class="px-3 py-1 rounded-full text-xs font-bold ${isCompleted ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}">
          ${rec.status}
        </span>
      </div>

      <div class="grid grid-cols-2 gap-3 text-sm">
        <div class="p-3 bg-slate-50 rounded-lg">
          <span class="text-[11px] font-bold text-slate-500 uppercase block">Issue Date</span>
          <span class="font-semibold text-slate-800">${rec.issueDate}</span>
        </div>
        <div class="p-3 bg-slate-50 rounded-lg">
          <span class="text-[11px] font-bold text-slate-500 uppercase block">Closed Date</span>
          <span class="font-semibold text-slate-800">${rec.closedDate || 'Pending'}</span>
        </div>
        <div class="p-3 bg-slate-50 rounded-lg">
          <span class="text-[11px] font-bold text-slate-500 uppercase block">Nature</span>
          <span class="font-semibold text-slate-800">${rec.nature}</span>
        </div>
        <div class="p-3 bg-slate-50 rounded-lg">
          <span class="text-[11px] font-bold text-slate-500 uppercase block">Downtime Metrics</span>
          <div class="space-y-1 mt-1 text-xs font-mono">
            <div class="flex justify-between"><span class="text-slate-500">Per Machine:</span> <span class="font-bold text-slate-800">${rec.downtimeMinutes || 0} mins</span></div>
            <div class="flex justify-between"><span class="text-slate-500">Machines Affected:</span> <span class="font-bold text-amber-700">${rec.affectedMachines || 1}</span></div>
            <div class="flex justify-between border-t border-slate-200 pt-0.5"><span class="text-slate-500 font-bold">Total DT:</span> <span class="font-black text-red-600">${rec.totalDowntimeMinutes || ((Number(rec.downtimeMinutes) || 0) * (Number(rec.affectedMachines) || 1))} mins (${(((rec.totalDowntimeMinutes || ((Number(rec.downtimeMinutes) || 0) * (Number(rec.affectedMachines) || 1)))) / 60).toFixed(1)} hrs)</span></div>
          </div>
        </div>
        <div class="p-3 bg-slate-50 rounded-lg">
          <span class="text-[11px] font-bold text-slate-500 uppercase block">Machine & Process</span>
          <span class="font-semibold text-slate-800">${rec.machineNo}</span>
          <span class="ml-2 text-xs px-2 py-0.5 rounded bg-slate-200 text-slate-700 font-bold">${rec.process || 'General'}</span>
        </div>
        <div class="p-3 bg-slate-50 rounded-lg">
          <span class="text-[11px] font-bold text-slate-500 uppercase block">Criticality Status</span>
          <span class="font-bold font-mono text-xs ${rec.isCritical === 'Yes' ? 'text-red-600' : 'text-slate-600'}">
            ${rec.isCritical === 'Yes' ? 'Critical' : 'Standard'}
          </span>
        </div>
        <div class="p-3 bg-slate-50 rounded-lg">
          <span class="text-[11px] font-bold text-slate-500 uppercase block">Category</span>
          <span class="font-semibold text-slate-800">${rec.category}</span>
        </div>
        <div class="p-3 bg-slate-50 rounded-lg">
          <span class="text-[11px] font-bold text-slate-500 uppercase block">Responsibility</span>
          <span class="font-semibold text-slate-800">${rec.responsibility}</span>
        </div>
      </div>

      <div class="p-3 bg-slate-50 rounded-lg text-sm">
        <span class="text-[11px] font-bold text-slate-500 uppercase block mb-1">Issue Details</span>
        <p class="text-slate-800 font-medium">${rec.issueDetails}</p>
      </div>

      <div class="p-3 bg-emerald-50/50 border border-emerald-100 rounded-lg text-sm">
        <span class="text-[11px] font-bold text-emerald-800 uppercase block mb-1">Action Plan</span>
        <p class="text-slate-800">${rec.actionPlan || 'No action plan recorded.'}</p>
      </div>

      <div class="grid grid-cols-2 gap-3 text-sm">
        <div class="p-3 bg-slate-50 rounded-lg">
          <span class="text-[11px] font-bold text-slate-500 uppercase block">Responsible Person</span>
          <span class="font-bold text-slate-900">${rec.solvedBy || 'Unassigned'}</span>
        </div>
        <div class="p-3 bg-slate-50 rounded-lg">
          <span class="text-[11px] font-bold text-slate-500 uppercase block">Remarks</span>
          <span class="text-slate-700">${rec.remarks || 'None'}</span>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
};

window.closeDetailsModal = function() {
  const modal = document.getElementById("detailsModal");
  if (modal) modal.classList.add("hidden");
};

window.loadRecordForEdit = function(id) {
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
  const rec = downtimeRecords.find(r => r.id === id);
  if (!rec) return;

  if (rec.status === "Completed") {
    rec.status = "Open";
    rec.closedDate = "";
    showToast(`Marked ${id} as OPEN`, "warning");
  } else {
    rec.status = "Completed";
    rec.closedDate = new Date().toISOString().split("T")[0];
    showToast(`Marked ${id} as COMPLETED`, "success");
  }

  saveToStorage();
  renderRecordsTable();
  renderKPIs();
  renderCharts();
};

window.deleteRecord = function(id) {
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
}
window.updateMaintenanceLogCount = updateMaintenanceLogCount;

window.clearAllIncidentLogs = function() {
  if (downtimeRecords.length === 0) {
    showToast("Incident logs are already empty.", "info");
    return;
  }
  const confirmed = (typeof confirm === "function")
    ? confirm(`Are you sure you want to empty all ${downtimeRecords.length} incident logs? This will reset the incident table and analytics to zero.`)
    : true;
  if (confirmed) {
    downtimeRecords = [];
    window.downtimeRecords = downtimeRecords;
    saveToStorage();
    if (typeof window.clearAllCloudIncidents === "function") {
      window.clearAllCloudIncidents().catch(e => console.warn("[Supabase] Cloud clear warning:", e));
    }
    renderRecordsTable();
    renderKPIs();
    renderCharts();
    populateDashboardMonths();
    initCategoryFilterDropdown();
    updateMaintenanceLogCount();
    showToast("All incident logs have been emptied successfully.", "success");
  }
};

window.restoreDemoIncidents = function() {
  const demoCount = DEMO_INCIDENTS_BACKUP.length;
  const confirmed = (typeof confirm === "function")
    ? confirm(`Restore the sample Yokohama incident dataset (${demoCount} historical records)?`)
    : true;
  if (confirmed) {
    downtimeRecords = JSON.parse(JSON.stringify(DEMO_INCIDENTS_BACKUP));
    window.downtimeRecords = downtimeRecords;
    saveToStorage();
    renderRecordsTable();
    renderKPIs();
    renderCharts();
    populateDashboardMonths();
    initCategoryFilterDropdown();
    updateMaintenanceLogCount();
    showToast(`${demoCount} demo incident logs restored successfully!`, "success");
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

    // Year filter (if not ALL)
    if (dashboardDateFilter.year && dashboardDateFilter.year !== "ALL") {
      if (!r.issueDate.startsWith(dashboardDateFilter.year)) return false;
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
    const s = new Date(dashboardDateFilter.startDate);
    const e = new Date(dashboardDateFilter.endDate);
    const diff = Math.round((e - s) / (1000 * 60 * 60 * 24)) + 1;
    return Math.max(1, diff);
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

  const monthSet = new Set();
  downtimeRecords.forEach(r => {
    if (r.issueDate && r.issueDate.length >= 7) {
      monthSet.add(r.issueDate.substring(0, 7));
    }
  });

  const sortedMonths = Array.from(monthSet).sort().reverse();

  let html = '<option value="ALL">All Months</option>';
  if (sortedMonths.length === 0) {
    const curYear = new Date().getFullYear();
    for (let mo = 1; mo <= 12; mo++) {
      const mStr = `${curYear}-${String(mo).padStart(2, "0")}`;
      const label = `${getMonthName(mo - 1)} ${curYear}`;
      html += `<option value="${mStr}">${label}</option>`;
    }
  } else {
    sortedMonths.forEach(mStr => {
      const parts = mStr.split("-");
      const y = parts[0];
      const m = parts[1];
      const mIdx = parseInt(m, 10) - 1;
      const label = `${getMonthName(mIdx)} ${y}`;
      html += `<option value="${mStr}">${label}</option>`;
    });
  }

  select.innerHTML = html;
  if (dashboardDateFilter.month) {
    select.value = dashboardDateFilter.month;
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
  renderKPIs();
  renderCharts();
  showToast(`Dashboard filtered for Year ${yearVal}`, "info");
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
  if (monthSelect) monthSelect.value = "ALL";
  if (yearSelect) yearSelect.value = "2026";

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

// --- KPI Calculations ---
function renderKPIs() {
  const records = getFilteredDashboardRecords();
  const totalDowntimeMinutes = records.reduce((acc, r) => acc + (parseInt(r.downtimeMinutes, 10) || 0), 0);
  const totalHours = (totalDowntimeMinutes / 60).toFixed(1);
  const openCount = records.filter(r => r.status === "Open").length;
  const completedCount = records.filter(r => r.status === "Completed").length;
  const resolutionRate = records.length > 0 ? Math.round((completedCount / records.length) * 100) : 100;
  
  const completedRecords = records.filter(r => r.status === "Completed");
  const mttrMinutes = completedRecords.length > 0
    ? Math.round(completedRecords.reduce((acc, r) => acc + (parseInt(r.downtimeMinutes, 10) || 0), 0) / completedRecords.length)
    : 0;

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
  if (elMttr) elMttr.textContent = `${mttrMinutes} min`;
  if (elResolutionRate) elResolutionRate.textContent = `${resolutionRate}%`;
  if (elTotalIncidents) elTotalIncidents.textContent = `${records.length} Incidents (${badgeText})`;
}
window.renderKPIs = renderKPIs;

// --- Chart.js Visualizations (Speedometer, Availability FY, Area, Process, Day, Process DT, Category Pie) ---
function renderCharts() {
  if (typeof Chart === "undefined") return;

  const records = getFilteredDashboardRecords();
  const periodDays = getDashboardPeriodDays();
  const standardAreas = ["Plant 1", "Plant 2", "Plant 3", "Plant 4", "4Roll shed", "Mixing Shed", "FID", "IT infra"];

  // -------------------------------------------------------------
  // Chart 1A: Automotive Speedometer Gauge ("Overall Availability")
  // -------------------------------------------------------------
  const totalPlantOperatingMinutes = periodDays * 24 * 60 * standardAreas.length;
  const totalDowntimeMinutes = records.reduce((acc, r) => acc + (parseInt(r.downtimeMinutes, 10) || 0), 0);
  const totalUptimeMinutes = Math.max(0, totalPlantOperatingMinutes - totalDowntimeMinutes);
  const overallAvailability = Math.min(100, Math.max(0, (totalUptimeMinutes / totalPlantOperatingMinutes) * 100));
  const overallAvailFormatted = overallAvailability.toFixed(2);

  const gaugeTextEl = document.getElementById("gaugePercentText");
  const gaugeBadgeEl = document.getElementById("gaugeStatusBadge");
  const gaugeUptimeEl = document.getElementById("gaugeUptimeHours");
  const gaugeDowntimeEl = document.getElementById("gaugeDowntimeHours");

  let gaugeStatusText = "";
  let gaugeBadgeClass = "";

  if (overallAvailability < 95.0) {
    gaugeStatusText = "Critical";
    gaugeBadgeClass = "text-[10px] font-bold px-2 py-0.5 rounded-full border bg-rose-100 text-rose-800 border-rose-300";
  } else if (overallAvailability < 99.0) {
    gaugeStatusText = "Warning";
    gaugeBadgeClass = "text-[10px] font-bold px-2 py-0.5 rounded-full border bg-amber-100 text-amber-800 border-amber-300";
  }

  if (gaugeTextEl) gaugeTextEl.textContent = `${overallAvailFormatted}%`;
  if (gaugeBadgeEl) {
    if (gaugeStatusText) {
      gaugeBadgeEl.textContent = gaugeStatusText;
      gaugeBadgeEl.className = gaugeBadgeClass;
    } else {
      gaugeBadgeEl.textContent = "";
      gaugeBadgeEl.className = "hidden";
    }
  }
  if (gaugeUptimeEl) gaugeUptimeEl.textContent = `${Math.round(totalUptimeMinutes / 60)} hrs`;
  if (gaugeDowntimeEl) gaugeDowntimeEl.textContent = `${(totalDowntimeMinutes / 60).toFixed(1)} hrs (${totalDowntimeMinutes}m)`;

  const ctxGauge = document.getElementById("gaugeAvailability");
  if (ctxGauge) {
    if (gaugeAvailabilityInstance) gaugeAvailabilityInstance.destroy();

    let gaugeDatasets = [];
    let needleColor = "#E60012";

    if (speedometerColorTheme === "multi") {
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
        const clampedVal = Math.min(100, Math.max(0, overallAvailability));
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
  const currentYear = (dashboardDateFilter.year && dashboardDateFilter.year !== "ALL") ? dashboardDateFilter.year : "2026";
  const yearRecs = downtimeRecords.filter(r => r.issueDate && r.issueDate.startsWith(currentYear));
  const yearDays = currentYear === "2026" ? 181 : 365;
  const yearOpMins = yearDays * 24 * 60 * standardAreas.length;
  const yearDtMins = yearRecs.reduce((acc, r) => acc + (parseInt(r.downtimeMinutes, 10) || 0), 0);
  const yearAvail = Math.min(100, Math.max(0, ((yearOpMins - yearDtMins) / yearOpMins) * 100));

  let targetMonth = dashboardDateFilter.month !== "ALL" ? dashboardDateFilter.month : `${currentYear}-06`;
  const monthRecs = downtimeRecords.filter(r => r.issueDate && r.issueDate.startsWith(targetMonth));
  const [tYear, tMonth] = targetMonth.split("-").map(Number);
  const mDays = getElapsedDaysInMonth(tYear, tMonth, downtimeRecords);
  const monthOpMins = Math.max(1, mDays) * 24 * 60 * standardAreas.length;
  const monthDtMins = monthRecs.reduce((acc, r) => acc + (parseInt(r.downtimeMinutes, 10) || 0), 0);
  const monthAvail = Math.min(100, Math.max(0, ((monthOpMins - monthDtMins) / monthOpMins) * 100));

  const elYearAvail = document.getElementById("kpiYearAvailVal");
  const elYearLabel = document.getElementById("kpiYearLabel");
  const elMonthAvail = document.getElementById("kpiMonthAvailVal");
  const elDayAvail = document.getElementById("kpiDayAvailVal");
  const elMonthlyTitle = document.getElementById("monthlyAvailabilityTitle");

  if (elYearAvail) elYearAvail.textContent = `${yearAvail.toFixed(2)}%`;
  if (elYearLabel) elYearLabel.textContent = currentYear;
  if (elMonthAvail) elMonthAvail.textContent = `${monthAvail.toFixed(2)}%`;
  if (elDayAvail) elDayAvail.textContent = `${overallAvailFormatted}%`;
  if (elMonthlyTitle) {
    elMonthlyTitle.textContent = dashboardDateFilter.year !== "ALL"
      ? `Monthly Availability (FY ${dashboardDateFilter.year})`
      : "Monthly Availability (All Fiscal Years)";
  }

  // -------------------------------------------------------------
  // Chart 1B: Monthly Availability (Automatching Fiscal Year & Months)
  // -------------------------------------------------------------
  const ctxMonthly = document.getElementById("chartMonthlyAvailability");
  if (ctxMonthly) {
    if (monthlyAvailabilityInstance) monthlyAvailabilityInstance.destroy();

    // Dynamically identify months for the chosen year
    const fyMonthSet = new Set();
    downtimeRecords.forEach(r => {
      if (r.issueDate && r.issueDate.length >= 7) {
        const ym = r.issueDate.substring(0, 7);
        if (dashboardDateFilter.year === "ALL" || ym.startsWith(dashboardDateFilter.year)) {
          fyMonthSet.add(ym);
        }
      }
    });

    const fyMonths = Array.from(fyMonthSet).sort();
    if (fyMonths.length === 0) {
      fyMonths.push("2026-01", "2026-02", "2026-03", "2026-04", "2026-05", "2026-06");
    }

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

    const categories = ["NSNL", "IPC", "Printer", "Scanner", "Infra", "MES"];
    const catColors = ["#E60012", "#0F172A", "#2563EB", "#F59E0B", "#059669", "#7C3AED"];
    const catMins = [];
    const catCounts = [];

    categories.forEach(cat => {
      const cRecs = records.filter(r => r.category === cat);
      const mins = cRecs.reduce((acc, r) => acc + (parseInt(r.downtimeMinutes, 10) || 0), 0);
      catMins.push(mins);
      catCounts.push(cRecs.length);
    });

    const totalCatMins = catMins.reduce((a, b) => a + b, 0) || 1;

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
              const pct = ((mins / totalCatMins) * 100).toFixed(1);
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
              const pct = ((mins / totalCatMins) * 100).toFixed(1);
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

          const totalHours = (totalCatMins / 60).toFixed(1);
          ctx.font = "bold 17px JetBrains Mono, monospace";
          ctx.fillStyle = "#0F172A";
          ctx.fillText(`${totalHours} hrs`, cx, cy - 6);

          ctx.font = "bold 8px Plus Jakarta Sans, sans-serif";
          ctx.fillStyle = "#94A3B8";
          ctx.letterSpacing = "1px";
          ctx.fillText("TOTAL DOWNTIME", cx, cy + 12);
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
                const pct = ((mins / totalCatMins) * 100).toFixed(1);
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
              const pct = ((mins / totalCatMins) * 100).toFixed(1);
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

  standardAreas.forEach(area => {
    const areaRecs = records.filter(r => r.area === area);
    const downtimeMins = areaRecs.reduce((acc, r) => acc + (parseInt(r.downtimeMinutes, 10) || 0), 0);
    const incidentCount = areaRecs.length;
    const uptimeMins = Math.max(0, operatingMins - downtimeMins);
    const uptimePct = Math.min(100, Math.max(0, (uptimeMins / operatingMins) * 100));
    const uptimeFormatted = uptimePct.toFixed(2);

    let statusBadgeClass = "bg-emerald-50 text-emerald-700 border-emerald-200";
    let statusText = "Optimal";
    let dotClass = "bg-emerald-500";
    let progressBarClass = "bg-emerald-500";
    let textColor = "text-emerald-600";
    let topBarColor = "bg-emerald-500";

    if (uptimePct < 95.0) {
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
            <span class="text-2xl sm:text-3xl font-black font-mono tracking-tight ${textColor}">${uptimeFormatted}%</span>
            <span class="text-[9px] font-bold text-slate-400 bg-slate-100 border border-slate-200 px-1.5 py-0.5 rounded font-mono">TGT 99.5%</span>
          </div>

          <!-- Clean Progress Bar -->
          <div class="w-full bg-slate-100 rounded-full h-2 overflow-hidden mb-3 border border-slate-100">
            <div class="h-full rounded-full transition-all duration-500 ${progressBarClass}" style="width: ${Math.min(100, Math.max(0, uptimePct))}%"></div>
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
      const statusText = val >= 99.0 ? "AVAILABILITY (≥99%)" : (val >= 95.0 ? "WARNING (95-98.9%)" : "CRITICAL ALERT (<95%)");
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

  return standardAreas.map((area, idx) => {
    const aRecs = records.filter(r => r.area === area);
    const dtMins = aRecs.reduce((acc, r) => acc + (parseInt(r.downtimeMinutes, 10) || 0), 0);
    const dtHours = parseFloat((dtMins / 60).toFixed(2));
    const upMins = Math.max(0, areaOpMins - dtMins);
    const upHours = parseFloat((upMins / 60).toFixed(1));
    const avail = Math.min(100, Math.max(0, (upMins / areaOpMins) * 100));
    const availPct = parseFloat(avail.toFixed(2));
    const targetPct = 99.00;
    const variance = parseFloat((availPct - targetPct).toFixed(2));
    const incidents = aRecs.length;
    const mttr = incidents > 0 ? parseFloat((dtMins / incidents).toFixed(1)) : 0.0;
    let status = "≥99%";
    let statusColor = "FF065F46";
    let statusBg = "FFD1FAE5";
    if (availPct < 95.0) {
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
    const avail = Math.min(100, Math.max(0, (upMins / procOpMins) * 100));
    const availPct = parseFloat(avail.toFixed(2));
    const incidents = pRecs.length;
    const mttr = incidents > 0 ? parseFloat((dtMins / incidents).toFixed(1)) : 0.0;
    const primaryArea = procAreaMap[proc] || (pRecs.length > 0 ? pRecs[0].area : "General Plant");

    let status = "≥99%";
    let statusColor = "FF065F46";
    let statusBg = "FFD1FAE5";
    if (availPct < 95.0) {
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
      const s = new Date(startDate);
      const e = new Date(endDate);
      periodDays = Math.max(1, Math.round((e - s) / (1000 * 60 * 60 * 24)) + 1);
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
      const s = new Date(startDate);
      const e = new Date(endDate);
      periodDays = Math.max(1, Math.round((e - s) / (1000 * 60 * 60 * 24)) + 1);
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
      const s = new Date(startDate);
      const e = new Date(endDate);
      periodDays = Math.max(1, Math.round((e - s) / (1000 * 60 * 60 * 24)) + 1);
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

  if (mode === "month") {
    if (btnMonth) btnMonth.className = "py-2.5 px-3 rounded-xl text-xs font-black bg-slate-900 text-white border border-slate-900 transition-all flex items-center justify-center gap-2 shadow-xs";
    if (btnCustom) btnCustom.className = "py-2.5 px-3 rounded-xl text-xs font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200 transition-all flex items-center justify-center gap-2";
    if (secMonth) secMonth.classList.remove("hidden");
    if (secCustom) secCustom.classList.add("hidden");
  } else {
    if (btnCustom) btnCustom.className = "py-2.5 px-3 rounded-xl text-xs font-black bg-slate-900 text-white border border-slate-900 transition-all flex items-center justify-center gap-2 shadow-xs";
    if (btnMonth) btnMonth.className = "py-2.5 px-3 rounded-xl text-xs font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200 transition-all flex items-center justify-center gap-2";
    if (secMonth) secMonth.classList.add("hidden");
    if (secCustom) secCustom.classList.remove("hidden");
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
      formatNote.textContent = "Export Format: Full Multi-Sheet Excel (Logs + Total Month Uptime Matrix + All Monthly Sheets)";
      formatBadge.textContent = "ALL MONTHS";
    } else if (exp.selectedMonth) {
      formatNote.textContent = `Export Format: Dual-Sheet Excel (Logs + Uptime Matrix for ${exp.periodLabel})`;
      formatBadge.textContent = "2 SHEETS";
    } else {
      formatNote.textContent = `Export Format: Dual-Sheet Excel (Logs + Uptime Matrix for ${exp.periodDays} Days)`;
      formatBadge.textContent = "2 SHEETS";
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
    parseDowntimeExcelFile(files[0]);
  }
};

window.handleDowntimeFileSelect = function(e) {
  const file = e.target.files && e.target.files[0];
  if (file) {
    parseDowntimeExcelFile(file);
  }
};

window.quickLoadPreloadedDowntimeFile = function() {
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

function parseDowntimeExcelFile(file) {
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array', cellDates: true });
      
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
        if (!rawMach || !rawDate) continue;

        const mCode = String(rawMach).trim();
        if (!mCode || mCode.toLowerCase() === "total" || mCode.toLowerCase() === "machine") continue;

        // Format Date
        let dateStr = "";
        if (rawDate instanceof Date && !isNaN(rawDate)) {
          const y = rawDate.getFullYear();
          const m = String(rawDate.getMonth() + 1).padStart(2, "0");
          const d = String(rawDate.getDate()).padStart(2, "0");
          dateStr = `${y}-${m}-${d}`;
        } else {
          const s = String(rawDate).trim();
          if (s.includes("/") || s.includes("-")) {
            const parts = s.replace(/\//g, "-").split("-");
            if (parts.length === 3) {
              if (parts[0].length === 4) {
                dateStr = `${parts[0]}-${parts[1].padStart(2, "0")}-${parts[2].substring(0, 2).padStart(2, "0")}`;
              } else if (parts[2].length >= 4) {
                dateStr = `${parts[2].substring(0, 4)}-${parts[1].padStart(2, "0")}-${parts[0].padStart(2, "0")}`;
              } else {
                dateStr = s.substring(0, 10);
              }
            } else {
              dateStr = s.substring(0, 10);
            }
          } else {
            dateStr = s.substring(0, 10);
          }
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

        // Closed Date
        let closedDate = (closedCol !== -1 && row[closedCol]) ? String(row[closedCol]).trim() : "";
        if (!closedDate && status === "Completed") {
          closedDate = dateStr;
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
      showToast(`Parsed ${parsed.length} downtime records from "${file.name}"!`, "success");
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
    const existingCount = downtimeRecords.length;
    const toAppend = pendingImportRecords.map((r, idx) => ({
      ...r,
      id: `YOKO-DT-${r.issueDate ? r.issueDate.substring(0, 4) : '2026'}-${String(existingCount + idx + 1).padStart(3, '0')}`
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

      // =========================================================================
      // SHEET 1: IT_DOWNTIME_LOG (Audit Trail & Performance Metrics)
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
      const todayStr = new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
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
      const filename = `Plant_IT_Downtime_${fileSuffix}_${new Date().toISOString().split("T")[0]}.xlsx`;
      saveAs(blob, filename);

      const toastMsg = isAllMonths
        ? `Full Multi-Sheet Excel exported! (Sheet 1: Incident Logs, Sheet 2: Uptime All Months Matrix, plus individual monthly sheets)`
        : `Dual-Sheet Excel (.xlsx) exported successfully! (Sheet 1: Incident Logs, Sheet 2: Uptime Matrix for ${periodLabel})`;
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

  // Sheet 1: IT_DOWNTIME_LOG
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

  const filename = `Plant_IT_Downtime_${fileSuffix}_${new Date().toISOString().split("T")[0]}.xlsx`;
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

  const rows = targetRecords.map(r => {
    const dtMin = parseInt(r.downtimeMinutes, 10) || 0;
    const aff = parseInt(r.affectedMachines, 10) || 1;
    const totMins = parseInt(r.totalDowntimeMinutes, 10) || (dtMin * aff);
    return [
      `"${r.id}"`,
      `"${r.issueDate}"`,
      `"${r.nature}"`,
      `"${r.area}"`,
      `"${r.process || ''}"`,
      `"${r.machineNo}"`,
      `"${r.isCritical || 'No'}"`,
      dtMin,
      aff,
      totMins,
      parseFloat((totMins / 60).toFixed(2)),
      `"${r.category}"`,
      `"${(r.issueDetails || '').replace(/"/g, '""')}"`,
      `"${(r.actionPlan || '').replace(/"/g, '""')}"`,
      `"${r.responsibility}"`,
      `"${r.closedDate || ''}"`,
      `"${r.solvedBy}"`,
      `"${r.status}"`,
      `"${(r.remarks || '').replace(/"/g, '""')}"`
    ];
  });

  const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `Plant_IT_Downtime_${fileSuffix}_${new Date().toISOString().split("T")[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

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

  toast.innerHTML = `
    <i class="fa-solid ${icon} text-base"></i>
    <span class="flex-1">${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(50px)";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
