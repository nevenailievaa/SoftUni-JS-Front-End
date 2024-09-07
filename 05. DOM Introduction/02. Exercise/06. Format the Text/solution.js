function solve() {
  const allInput = document.getElementById('input').value.split('.');
  const inputContent = allInput.filter(item => item.length !== 0);
  let divElement = document.getElementById('output');

  while (inputContent.length > 0) {
    let paragraphElement = document.createElement('p');
    let count = 0;
    let paragraphContent = [];

    while (count < 3) {
      if (inputContent.length === 0) {
        break;
      }

      let sentence = inputContent.shift();
      if (sentence.length === 0) {
        continue;
      }

      count += 1;

      if (inputContent.length === 0 || count === 3) {
        sentence += '.';
      }

      paragraphContent.push(sentence);
    }

    paragraphElement.textContent = paragraphContent.join('. ');
    divElement.appendChild(paragraphElement);
  }
}
