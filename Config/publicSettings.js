const publishMode = "test";
const ownerName = "James Green";
const imageUploadLimit = 2;
const pageRoot = "Pages";
const testSheet = "Dev-Test";
//const liveSheet = `${getStart("monthyear")}`; // Month Year
const pageName = `${pageRoot}/Form`;

// UI
const formTitle = "Critique Sign Up";

let targetSheet = publishMode==="test"?testSheet:liveSheet;
