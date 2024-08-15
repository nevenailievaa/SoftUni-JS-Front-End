function loadingBar(a, b) {
    function factorial(n) {
        let result = 1
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    aFactorial = factorial(a);
    bFactorial = factorial(b);
    console.log((aFactorial/bFactorial).toFixed(2));
}