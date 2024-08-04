function sortingNumbers(numbers) {
    numbers.sort((a, b) => a - b);
    let resultArray = [];

    let counter = 0

    while (numbers.length != 0) {
        if (counter % 2 == 0) {
            resultArray[counter] = numbers.shift();
        } else {
            resultArray[counter] = numbers.pop();
        }
        counter++;
    }

    return resultArray;
}