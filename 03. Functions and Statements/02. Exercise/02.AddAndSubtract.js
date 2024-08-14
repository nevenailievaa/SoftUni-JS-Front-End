function addAndSubtract(a, b, c) {
    function sum(a, b) {
        return a + b;
    }
    function subtract(ab, c) {
        return ab - c;
    }

    console.log(subtract(sum(a, b), c));
}