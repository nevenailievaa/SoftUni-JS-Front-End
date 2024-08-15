function nxnMatrix(number) {
    let row = [];

    for (let i = 0; i < number; i++) {
        row.push(number);
    }
    for (let i = 0; i < number; i++) {
        console.log(row.join(' '));
    }
}