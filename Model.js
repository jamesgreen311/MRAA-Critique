function getAttendeeLimit() {
    var l = getRangeByName("Limit");
    var rc = "";
    if (typeof l !== "string") {
      rc = l.getRange().getValue();
    }
    return rc;
  }
  
  function getHostName() {
    var hn = getRangeByName("HostName");
    var rc = "";
    if (typeof hn !== "string") {
      rc = hn.getRange().getValue();
    }
    return rc;
  }
  
  function getEventDate(option) {
    var e = getRangeByName("CritiqueDateTime");
    var rc = "";
    var val = "";
    if (typeof e !== "string") {
      val = e.getRange().getValue();
      
      if (option == "month") {
        rc = Utilities.formatDate(val, "GMT-4", "MMMM");
      }
      else {
        rc = Utilities.formatDate(val, "GMT-4", "MMMM dd, yyyy");
      }
    }  
    
    return rc;
  }
  
  function getEventDeadlineDate() {
    var d = getRangeByName("Deadline");
    var rc = "";
    var val = "";
    if (typeof d !== "string") {
      val = d.getRange().getValue();
    }
    
    rc = Utilities.formatDate(val, "GMT-4", "MMMM dd, yyyy");
    
    return rc;
  }
  
  function getEventStartTime() {
    var s = getRangeByName("StartTime");
    var rc = "";
    if (typeof s !== "string") {
      rc = s.getRange().getValue();
    }
  
    return rc;
  }
  
  function getEventStopTime() {
    var s = getRangeByName("StopTime");
    var rc = "";
    if (typeof s !== "string") {
      rc = s.getRange().getValue();
    }
    
    return rc;
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