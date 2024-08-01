function reverseAnArrayOfNumbers(n, numArray) {
    let firstNElementsReversed = numArray.slice(0, n).reverse();
    console.log(firstNElementsReversed.join(' '));
}