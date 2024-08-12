function repeatString(text, repeatsCount) {
    let repeatedText = [];
    for (let i = 0; i < repeatsCount; i++) {
        repeatedText.push(text);
    }

    console.log(repeatedText.join(''));
}