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
    const body = `A new critique sign up has been detected
    ${data[0]} ${data[1]}, ${data[2]}
    joining as an ${data[3]} participant`;
    MailApp.sendEmail(supportEmail, "New Critique Sign Up", body);
  }

  function getCurrentYear() {
    y = new Date().getFullYear();
    return y;
  }