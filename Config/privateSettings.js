const publishMode = "test";

const pageRoot = "Pages";
const exhibitName = "ReAwakening SunTrust Gallery Beta2";
const imageFolderId = "1Svp9RRcAux7VCEFEeGPWc46fJhuwOX4T" // New Fully Public folder
const spreadSheetId = "1Z2XwG3ykd4FUftJdKeSKRbZ9toxX8Poc7GtltRJNeFw";
const sheetName = "Beta2";
const imageFolderName = exhibitName;
const pageName = `${pageRoot}/Form`;

// UI
const topMenuName = "MRAA Exhibitions";
const formTitle = "MRAA Exhibition Submissions Entry";

let exhibitSheetName = publishMode==="test"?sheetName:exhibitName;

//const uploadFilePath = "/MRAA Exhibitions/{Exhibit Name}"; // not used, informational only