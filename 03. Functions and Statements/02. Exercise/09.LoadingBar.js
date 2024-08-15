function loadingBar(number) {
    let count = Number(number.toString()[0]);

    if (number == 100) {
        console.log('100% Complete!');
    } else {
        console.log(`${number}% [${'%'.repeat(count)}${'.'.repeat(10-count)}]`);
        console.log('Still loading...');
    }
}