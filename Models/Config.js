/*
Target Config Sheet retrieved as config in privateSettings.js
*/

Config = {
  startTime: "a2",
  endTime: "b2",
  deadline: "c2",
  seatLimit: "d2",
  totalSeatLimit: "e2",
  hostName: "f2",
  hostEmail: "g2",
  coordinator: "h2",
  coordinatorEmail: "i2"
}

/* 

*/
function getAttendeeLimit() {
  return config.getRange(Config.seatLimit).getValue();
}

function getTotalSeatLimit() {
  return config.getRange(Config.totalSeatLimit).getValue();
}
  
function getHostName() {
  return config.getRange(Config.hostName).getValue();
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

    case "monthyear": {
      r = Utilities.formatDate(startDatetime, "GMT-4", "MMMM yyyy");
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
  let endDatetime = config.getRange(Config.endTime).getValue();

  return Utilities.formatDate(endDatetime, "GMT-4", "hh:mm a");
}

