const testSheet = "Dev-Test";
//const liveSheet = `${getStart("monthyear")}`; // Month Year
const liveSheet = "October 2020";

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
    imageName: "g2",
    imageId: "h2",
    titleOfWork: "i2",
    width: "j2",
    height: "k2",
    medium: "l2",
    timestamp: "m2",
    // Calculated Columns
    activeCount: "p2",
    observerCount: "q2"
}

function getDataSheet() {
    return dataSheet;
}

/* 
Sum the number of both active and observers attending meeting from the target Data sheet

*/
function getTotalAttending(option) {
    switch (option) {
        case "active": {

        }

        case "observer": {

        }

        default: {
            // return both active and observer

        }
    }
}


function getObserversCount() {
    return dataSheet.getRange(Data.observerCount).getValue();
}

function getActiveCount() {
    return dataSheet.getRange(Data.activeCount).getValue();
}

function getTotalAttendees() {
    return getObserversCount() + getActiveCount();
}

function getObserverSeatsAvailable() {
    return getObserverLimit() - getObserversCount();
}
