function modernTimesOfHashtag(text) {
    let regex = /#\b[a-zA-Z]+\b/g;

    let validWords = text.match(regex);

    for (word of validWords) {
        console.log(word.substring(1));
    }
}