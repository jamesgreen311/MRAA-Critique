const testSheet = "November 2020";
//const liveSheet = `${getStart("monthyear")}`; // Month Year
const liveSheet = "November 2020";

let targetSheet = publishMode === "test" ? testSheet : liveSheet;

dataSheet = ds.getSheetByName(targetSheet);

/*
Target Data SpreadSheet retrieved as ds in privateSettings.js
*/

Data = {
    firstName: "a2",
    lastName: "b2",
    email: "c2",
    attendeeLevel: "d2",
    assistance: "e2",
    questions: "f2",
    imageName: "k2",
    imageId: "l2",
    titleOfWork: "g2",
    width: "h2",
    height: "i2",
    medium: "j2",
    timestamp: "m2",
    // Calculated Columns, pivot tables
    attendeeCount: "n2:o",  // grand total is last row of range, sub totals by attendee level
    uploadCounts: "p2:q"    // counts are by email address.
}

function getDataSheet() {
    return dataSheet;
}

function getObserversCount() {
    let counts = dataSheet.getRange(Data.attendeeCount+dataSheet.getLastRow()).getValues();
    let filteredCounts = counts.filter(r => r[0]=="observer");
    return filteredCounts[0][1];
}

function getActiveCount() {
    let counts = dataSheet.getRange(Data.attendeeCount+dataSheet.getLastRow()).getValues();
    let filteredCounts = counts.filter(r => r[0]=="active");
    return filteredCounts[0][1];
}

function getTotalAttendees() {
    let counts = dataSheet.getRange(Data.attendeeCount+dataSheet.getLastRow()).getValues();
    let filteredCounts = counts.filter(r => r[0]=="Grand Total");
    return filteredCounts[0][1];
}

function getObserverSeatsAvailable() {
    return getObserverLimit() - getObserversCount();
}

function getUploadCountByEmail(email) {
    let counts = dataSheet.getRange(Data.uploadCounts+dataSheet.getLastRow()).getValues();
    let filteredCounts = counts.filter(r => r[0].toLowerCase()==email.toLowerCase());

    return filteredCounts[0][1];
}