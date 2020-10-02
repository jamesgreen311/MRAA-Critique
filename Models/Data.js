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
    timestamp: "m2"
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

function getTotalAttendees() {
/*     let r = dataSheet.getRange(2, 1, dataSheet.getLastRow() - 1, 1).getValues();
    let unique = new Array();

    if (r.length > 0) {
        let single = r.map(i => i[0]);
        unique = [...new Set(single)];
    }
    return unique.length; */
}

function getObserversAttending() {
    /*     let r = dataSheet.getRange(2, 3, dataSheet.getLastRow()-1, 2).getValues();
        //let single = r.map(i => i[0]);
        let unique = [...new Set(r)];
        Logger.log(unique); */
}

function getObserverSeatsAvailable() {
/*     let limit = getObserverLimit(); */

}