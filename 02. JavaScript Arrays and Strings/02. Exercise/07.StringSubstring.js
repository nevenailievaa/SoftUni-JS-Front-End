function stringSubstring(word, text) {
    let regex = new RegExp(`\\b${word.toLowerCase()}\\b`, 'g');
    text = text.toLowerCase();

    let matchesFound = regex.test(text);

    if (matchesFound) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}