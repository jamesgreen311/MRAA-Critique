const publishMode = "test";

const pageRoot = "Pages";
const ds = SpreadsheetApp.getActiveSpreadsheet(); // datasource
const config = ds.getSheetByName("Config");
const testSheet = "Dev-Test";
const liveSheet = ""; // Month Year
const pageName = `${pageRoot}/Form`;

// UI
const formTitle = "Critique Sign Up";

let targetSheet = publishMode==="test"?testSheet:liveSheet;

//const uploadFilePath = "/MRAA Exhibitions/{Exhibit Name}"; // not used, informational only