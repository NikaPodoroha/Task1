function changeDirection(string) {
    var newString = '';
    for (var j = string.length - 1; j >= 0; j--) {
        newString += string[j];
    }
    return newString;
}