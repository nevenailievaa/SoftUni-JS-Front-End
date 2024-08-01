function censoredWords(sentence, word) {
    console.log(sentence.replaceAll(word, '*'.repeat(word.length)));
}