function palindromeIntegers(array) {
    array.forEach(element => {
        console.log(Number(String(element).split('').reverse().join('')) === element)
    });
}
