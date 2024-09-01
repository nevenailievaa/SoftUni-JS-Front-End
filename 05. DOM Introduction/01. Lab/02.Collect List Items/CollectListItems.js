function extractText() {
    let elements =  document.getElementsByTagName('li');
    let inputField = document.getElementById('result');

    let text = [];
    for (const element of elements) {
        text.push(element.textContent);
    }

    let result = text.join('\n');

    inputField.value = result;
}