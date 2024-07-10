function largestNumber(a, b, c) {
    let biggestNumber = a;

    if (b > a) {
        biggestNumber = b;

        if (c > b) {
            biggestNumber = c;
        }
    } else if (c > a) {
        biggestNumber = c;
    }
    
    console.log(`The largest number is ${biggestNumber}.`);
}