Config = {
  startTime: "a2",
  duration: "b2",
  deadline: "c2",
  seatLimit: "d2",
  hostName: "e2",
  hostEmail: "f2",
  coordinator: "g2",
  coordinatorEmail: "h2"
}

function getAttendeeLimit() {
  return config.getRange(Config.seatLimit).getValue();
}
  
function getHostName() {
  return config.getRange(Config.hostName).getValue();
}

/* 

@Return: hours
*/
function getDuration() {
  return config.getRange(Config.duration).getValue();
}

function getDeadline() {
  return Utilities.formatDate(config.getRange(Config.deadline)
    .getValue(), "GMT-4", "MMMM dd, yyyy");
}

function getHostEmail() {
  return config.getRange(Config.hostEmail).getValue();
}

function getCoordinator() {
  return config.getRange(Config.coordinator).getValue();
}

function getCoordinatorEmail() {
  return config.getRange(Config.coordinatorEmail).getValue();
}

/*
@Param: option string [date, time, month]
*/
function getStart(option) {
  let startDatetime = config.getRange(Config.startTime).getValue();
  var r;

  switch (option) {
    case "date": {
      r = Utilities.formatDate(startDatetime, "GMT-4", "MMMM dd, yyyy");
      break;
    }

    case "time": {
      r = Utilities.formatDate(startDatetime, "GMT-4", "hh:mm a");
      break;
    }

    case "month": {
      r = Utilities.formatDate(startDatetime, "GMT-4", "MMMM");
      break;
    }

    default: {
      r = Utilities.formatDate(startDatetime, "GMT-4", "MM/dd/yyyy hh:mm a");
      break;
    }
  }

  return r;
}
  
function getEndTime() {
  let dur = getDuration()*60*60*1000; // convert to milliseconds
  let startDateTime = new Date(getStart()); 
  let endDateTime = new Date(startDateTime.getTime() + dur);

  //Logger.log(`getEndTime(): Duration ${dur} ms, StartDateTime ${startDateTime} ms, EndDate ${endDateTime}`);

  return Utilities.formatDate(endDateTime, "GMT-4", "hh:mm a");
}

function getRangeByName(n) {
  var a = wsData.getNamedRanges();
  var rc = "";
  for (var i in a) {
    if (a[i].getName() == n) {
      rc = a[i];
    }
  }
  
  return rc;
}