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