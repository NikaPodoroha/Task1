function firstCharToUpperCase(text) {
    var newText = '';
    var firstLetter = text.charAt(0).toLocaleUpperCase();
    for (var i = 1; i < text.length; i++) {
        var nextLetter = text[i].toLocaleLowerCase();
        newText += nextLetter;
    }
    return (firstLetter + newText);
}