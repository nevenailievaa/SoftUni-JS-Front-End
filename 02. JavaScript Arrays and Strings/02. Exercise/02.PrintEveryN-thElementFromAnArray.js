function printEveryNthElementOfAnArray(array, steps) {

    let newArray = [];

    for (let i = 0; i < array.length; i += steps) {
        newArray.push(array[i]);
    }

    return(newArray);
}