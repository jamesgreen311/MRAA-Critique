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
    const regForm = "https://script.google.com/macros/s/AKfycbw9yov3sDA-4K0N4K5bdj_78HyM6idKyGUmz_Cv9oIHPpGKGzc/exec?v=reg&id=73CB67";
    const eventsPage = "https://metrorichmondart.org/meetings-critiques/";
    const meetingtype = data.meetingType;
    const inPersonContent = `This month's host is ${data.hostName}. The host's address is ${data.hostLocation}.`
    const zoomContent = `To Join Zoom Meeting<br>${data.zoomLink}<br><br>Meeting ID: ${data.zoomMeetingId}<br>Passcode: ${data.zoomPasscode}<br><br>`
    const contactInfo = data.contactEmail ? `For questions, please contact ${data.contactEmail} <br><br>` : "";
    
    let body = `Registered Name: ${data.firstName} ${data.lastName} <br>Registered Email: ${data.email}<br><br>
        Thank you for registering for this month's critique session <br><br>
        ${contactInfo}
        If you need a reminder about event details, please revisit the <a href='${regForm}'>registration form</a> or the MRAA website 
        <a href='${eventsPage}'>Events page</a>`
    if (meetingtype.toLowerCase() === "in person") {
        body =+ `<br><br>Host<br><br>${inPersonContent}`;
    } else if (meetingtype.toLowerCase() === "virtual") {
        body =+ `<br><br>Zoom Info <br><br>${zoomContent}`;
    } else if (meetingtype.toLowerCase() === "hybrid") {
        body =+ `<br><br>Please RSVP to the host if you plan to attend in person.`
        body =+ `<br><br>Host<br><br>${inPersonContent}`
        body =+ `<br><br>Zoom Info <br><br>${zoomContent}`;
    }

    MailApp.sendEmail({
        to: data.sendTo,
        cc: `${getCoordinatorEmail()}, ${getHostEmail()}`,
        //cc: `${getHostEmail()}`, TESTING
        replyTo: getHostEmail(),
        subject: "MRAA Critique Registration",
        htmlBody: body
    });
}

function getCurrentYear() {
    let y = new Date().getFullYear();
    return y;
}

function createCloseTrigger() {
    const deadline = getDeadlineRaw(); 

    ScriptApp.newTrigger("closeSession")
        .timeBased()
        .atDate(deadline.getFullYear(), deadline.getMonth()+1, deadline.getDate())
        .create();
}