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

function sendNotification(data) {
    const body = `A new critique sign up has been detected \n ${data}`;
    MailApp.sendEmail(supportEmail, "New Critique Sign Up", body);
  }
  