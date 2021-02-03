/* 
PRODUCTION
*/
let config = ds.getSheetByName("Config");

/* 
TESTING
*/
//config = ds.getSheetByName("Test Config");

const StatusType = {
  Wait: "Wait List",
  Closed: "Closed",
  Open: "Open"
}

ConfigDataMap = {
  month: "a2",
  start: "b2",
  end: "c2",
  deadline: "d2",
  activeSeatLimit: "e2",
  observerLimit: "f2",
  hostName: "g2",
  hostEmail: "h2",
  coordinator: "i2",
  coordinatorEmail: "j2",
  sessionStatus: "k2",
  uploadLimit: "l2",
  zoomLink: "m2",
  zoomMeetingID: "n2",
  zoomPasscode: "o2"
}

/* 

*/
function getObserverSeatLimit() {
  return config.getRange(ConfigDataMap.observerLimit).getValue();
}

function getMonth() {
  return config.getRange(ConfigDataMap.month).getDisplayValue().trim();
}
  
function getActiveSeatLimit() {
  return config.getRange(ConfigDataMap.activeSeatLimit).getValue();
}

function getHostName() {
  return config.getRange(ConfigDataMap.hostName).getValue();
}

function getDeadline() {
  return config.getRange(ConfigDataMap.deadline).getDisplayValue();
}

function getDeadlineRaw() {
  return config.getRange(ConfigDataMap.deadline).getValue();
}

function getHostEmail() {
  return config.getRange(ConfigDataMap.hostEmail).getValue();
}

function getCoordinator() {
  return config.getRange(ConfigDataMap.coordinator).getValue();
}

function getCoordinatorEmail() {
  return config.getRange(ConfigDataMap.coordinatorEmail).getValue();
}

/*
@Param: option string [date, time, month]
*/
function getStart() {
  return config.getRange(ConfigDataMap.start).getDisplayValue();
}
  
function getEnd() {
  return config.getRange(ConfigDataMap.end).getDisplayValue();
}

function getSessionStatus() {
  return config.getRange(ConfigDataMap.sessionStatus).getValue();  
}

function getUploadLimit() {
  return config.getRange(ConfigDataMap.uploadLimit).getValue();
}

function getZoomLink() {
  return config.getRange(ConfigDataMap.zoomLink).getValue();
}

function getZoomMeetingID() {
  return config.getRange(ConfigDataMap.zoomMeetingID).getValue();
}

function getZoomPasscode() {
  return config.getRange(ConfigDataMap.zoomPasscode).getValue();
}


function setSessionStatus(status) {
  const statusCell = config.getRange(ConfigDataMap.sessionStatus)
  statusCell.setValue(status);
}

function closeSession() {
  const statusCell = config.getRange(ConfigDataMap.sessionStatus);
  statusCell.setValue(StatusType.Closed);
}