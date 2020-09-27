/* var formSignUpID = "1NOQT9wGQILfuPtv4N9GS9CNjw8E0nC2s0v_naNGghO0";
var sheetDataID = "1JtDdgpuNaeNUoIAFAlDFef-pmfZ73-V3d9cgo3-LGk4";
var sheetResponseID = "1SkGkB36mnmnsKaLpRxfC1ezR2sVpoPsk-BjnuEVFD8I"; // this sheet

var wsData = SpreadsheetApp.openById(sheetDataID).getSheetByName("Data");
var wsResponse = SpreadsheetApp.openById(sheetResponseID).getSheetByName("August 2020");
var frmSignUp = FormApp.openById(formSignUpID);


function main() {
  var attendingCount = 0;
  var activeCount = 0;
  var max = getAttendeeLimit();
  var title = getEventDate("month") + " Critique Sign Up Sheet";  
  activeCount = wsResponse.getRange("G2:G2").getCell(1,1).getValue();
  attendingCount = wsResponse.getRange("H2:H2").getCell(1,1).getValue();
  
  var formDesc = getEventDate() + 
    " at " + 
    getEventStartTime() + " - " +
    getEventStopTime() + 
    "\n\nSign up DEADLINE is " +
    getEventDeadlineDate() +
    "\n\nHosted Online By: " +
    getHostName();  
  
  formDesc = formDesc + "\n\nCurrently Attending: " + (attendingCount);
  formDesc = formDesc + "\nActive participant seats taken: " + (activeCount) + " of " + max;

  if (attendingCount >= max) {
    formDesc = formDesc + "\n\n** All seats are currently taken. Any new requests will be put on a wait list. **";
  }
  
  frmSignUp.setTitle(title);
  frmSignUp.setDescription(formDesc);
}
 */