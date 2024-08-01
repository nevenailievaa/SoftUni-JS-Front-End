function evenAndOddSubtraction(numArray) {
    let sumEven = 0;
    let sumOdd = 0;

    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] % 2 == 0) {
            sumEven += numArray[i];
        } else {
            sumOdd += numArray[i];
        }
    }

    console.log(sumEven - sumOdd);
}