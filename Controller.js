/*
    Accepts input and converts it to commands for the model or view.

    The controller responds to the user input and performs interactions on the data model objects. 
    The controller receives the input, optionally validates it and then passes the input to the model.
*/
var Route = {};
Route.path = function(r, callback) {
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
 
function saveFile(f,d) {
  let blob = Utilities.newBlob(f.bytes, f.mimeType, f.filename);
  let today = new Date();
  let uploadFolder = DriveApp.getFolderById("1vzt4WO3Rh0mbyzzVsE1MwSbkRYopKfAz"); // Folder must already exist
  let newFile = uploadFolder.createFile(blob).getId();
  //DriveApp.createFile(blob).moveTo(uploadFolder).getId();
  d.push(newFile);
  d.push(today);
  
  let done = saveToSheet(d);
/*   Logger.log(`Images ${getStart("monthyear")}`);
  Logger.log("Uploaded image id = %s",newFile) */
  return done;
}

function saveToSheet(data) {
    let d = getDataSheet();
    d.appendRow(data);
    sendNotification(data);
    //Logger.log(data);
    return true;
}

function showDone() {
  return render(`${pageRoot}/Done`);
}
