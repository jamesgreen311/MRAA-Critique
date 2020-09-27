const publishMode = "test";
const targetSpreadSheetId = "1SkGkB36mnmnsKaLpRxfC1ezR2sVpoPsk-BjnuEVFD8I";
const pageRoot = "Pages";
const ds = SpreadsheetApp.openById(targetSpreadSheetId); // datasource
const config = ds.getSheetByName("Config");
const testSheet = "Dev-Test";
const liveSheet = ""; // Month Year
const pageName = `${pageRoot}/Form`;

// UI
const formTitle = "Critique Sign Up";

let targetSheet = publishMode==="test"?testSheet:liveSheet;

//const uploadFilePath = "/MRAA Exhibitions/{Exhibit Name}"; // not used, informational only