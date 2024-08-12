function signCheck(...input) {
    let negatives = input.filter(x => x < 0);
    if (negatives.length % 2 === 0) {
        console.log('Positive');
    } else {
        console.log('Negative');
    }
}