function wordTracker(info) {
    let occurrences = {};
    let searched = info.shift().split(" ");

    for (let word of searched) {
        occurrences[word] = 0;
    }

    for (word of info) {
        if (occurrences.hasOwnProperty(word)) {
            occurrences[word] += 1;
        }
    }

    let sortedOccurrences = Object.entries(occurrences)
        .sort((a, b) => b[1] - a[1]);

    for (let [word, count] of sortedOccurrences) {
        console.log(`${word} - ${count}`);
    }
}