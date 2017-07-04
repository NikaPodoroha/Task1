function fibonachi(n) {
    var firstNumber = 1;
    var secondNumber = 1;
    for (var i = 3; i <= n; i++) {
        var nextNumber = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = nextNumber;
    }
    return secondNumber;
}