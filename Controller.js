/*
    Accepts input and converts it to commands for the model or view.

    The controller responds to the user input and performs interactions on the data model objects. 
    The controller receives the input, optionally validates it and then passes the input to the model.
*/
var Route = {};
Route.path = function (r, callback) {
  Route[r] = callback;
}


function doGet(e) {
  Route.path("done", showDone);

  var r;
  if (Route[e.parameter.v]) {
    r = Route[e.parameter.v]();
  } else {
    // default to main page
    r = render(pageName);
  }

  return r;
}

function saveFile(f, d) {
  let blob = Utilities.newBlob(f.bytes, f.mimeType, f.filename);
  let uploadFolder = DriveApp.getFolderById("1vzt4WO3Rh0mbyzzVsE1MwSbkRYopKfAz"); // Folder must already exist
  let newFile = uploadFolder.createFile(blob).getId();

  let done = saveToSheet(d, newFile);
  return done;
}

function saveToSheet(data, fileId) {
  let today = new Date();
  data.push(fileId?fileId:"");
  data.push(getSessionStatus()===StatusType.Wait?true:false);
  data.push(today);
  let d = getDataSheet();
  d.appendRow(data);

  let eventInfo = {
    zoomLink: getZoomLink(),
    zoomMeetingId: getZoomMeetingID(),
    zoomPasscode: getZoomPasscode(),
    sendTo: data[2],
    firstName: data[0],
    lastName: data[1],
    email: data[2],
    hostName: getHostName(),
    hostLocation: getLocation(),
    meetingType: getMeetingType()
    //sendTo: "jamesgreen.311@gmail.com" // TESTING
  }

  // check for max attendance
  // if total attendance meets or exceeds active and observer seating limit then set status to 'wait list'
  if (getTotalAttendees() >= (getActiveSeatLimit() + getObserverSeatLimit())) {
    setSessionStatus(StatusType.Wait);
  };

  if (getRecordCountByEmail(data[2]) < 2) {
    sendNotification(eventInfo);
  }

  return true;
}

function showDone() {
  return render(`${pageRoot}/Done`);
}