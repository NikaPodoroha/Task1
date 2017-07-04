function checkForSubstring(string, ring) {
    var count = 0;
    var pos = string.indexOf(ring);
    while (pos != -1) {
        count++;
        pos = string.indexOf(ring, pos + 1);
    }
    return (count);
}
