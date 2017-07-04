function findLongestWord(sentence) {
    var pos = sentence.indexOf(' ');
    var word = sentence.substring(0, pos);
    var arr = [];
    var max = 0;
    for (var i = 0; pos != -1; i++) {
        arr[i] = word;
        var previousPos = pos;
        pos = sentence.indexOf(' ', previousPos + 1);
        word = sentence.substring(previousPos + 1, pos);
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > max) {
            max = arr[i].length;
            var longWord = arr[i];
        }
    }
    return (longWord);
}