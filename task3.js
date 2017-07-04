function splitString(str, maxLength) {
    var end = "..."
    str = str.substr(str, maxLength - 3);
    return (str + end);
}