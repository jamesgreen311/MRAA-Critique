function tester_() {
  Logger.log(getRangeByName("Limit").getRange().getValue());
  Logger.log(getRangeByName("HostName").getRange().getValue());
  Logger.log(getRangeByName("CritiqueDateTime").getRange().getValue());
  Logger.log(getRangeByName("Deadline").getRange().getValue());
  Logger.log(getRangeByName("StartTime").getRange().getValue());
  Logger.log(getRangeByName("StopTime").getRange().getValue());
}


function showDataFromRange() {
  Logger.log(getHostName());
}

function showEventDate() {
  var e = getRangeByName("CritiqueDateTime");
  var rc = "";
  if (typeof e !== "string") {
    rc = e.getRange().getValue();
  }
  
  Logger.log(Utilities.formatDate(rc, "GMT-4", "MMMM dd, yyyy"));
}

function showStartTime() {
  Logger.log(getEventStartTime());
}