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
  
function saveToSheet(data) {
    let ss = SpreadsheetApp.getActiveSpreadsheet();
    let ws = ss.getSheetByName(exhibitSheetName);

    ws.appendRow(data);
    Logger.log(data);
    return true;
}