function extract(contentId) {
    let text = document.getElementById(contentId).textContent;

    let matches = text.match(/\(([^)]+)\)/g);
    let extractedTexts = matches.map(match => match.slice(1, match.length-1));

    let result = extractedTexts.join("; ");
    return result;
}
