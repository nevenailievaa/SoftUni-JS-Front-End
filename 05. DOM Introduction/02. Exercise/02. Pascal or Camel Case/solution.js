function solve() {
    let textArray = document.getElementById('text').value.split(' ');
    let namingConvention = document.getElementById('naming-convention').value;
    let result = document.getElementById('result');

    if (namingConvention !== 'Pascal Case' && namingConvention !== 'Camel Case') {
      result.textContent = 'Error!';
      return;
    }

    for (let i = 0; i < textArray.length; i++) {
      let currentWord = textArray[i].toLowerCase();
    
      if (i == 0 && namingConvention == 'Camel Case') {
        result.textContent += currentWord;
        continue;
      }

      currentWord = currentWord.charAt(0).toUpperCase() + currentWord.slice(1);
      result.textContent += currentWord;
    }
}