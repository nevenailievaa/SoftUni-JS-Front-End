function pascalCaseSplitter(text) {
    let words = text.split(/(?=[A-Z])/);
    let result = words.join(', ');

    console.log(result);
}