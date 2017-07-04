function factorial(n) {
    var P = 1;
    for (var i = 1; i <= n; i++) {
        P *= i;
    }
    return P;
}