function printAndSum(a, b) {
    let sum = 0;
    let result = '';

    for (let i = a; i <= b; i++) {
        sum += i; 

        if (i === b) {
            result += `${i}`;
        } else {
            result += `${i} `;
        }
    }

    console.log(result);
    console.log(`Sum: ${sum}`);
}