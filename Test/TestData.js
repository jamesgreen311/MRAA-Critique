/* 
Check that test files are in use
*/
function checkStatus() {
    let status = getSessionStatus(); // should return value from the Test Config sheet
    return status;
}
