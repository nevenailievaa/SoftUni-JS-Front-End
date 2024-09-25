function solve() {
  const [generateButton, buyButton] = Array.from(document.getElementsByTagName('button'));
  const [generateTextarea, buyTextarea] = Array.from(document.getElementsByTagName('textarea'));
  const tbodyElement = document.querySelector('.table > tbody')

  generateButton.addEventListener('click', generate);
  buyButton.addEventListener('click', buy);

  function generate() {
      const inputData = JSON.parse(generateTextarea.value);

      for (const {img, name, price, decFactor} of inputData) {
          const tableRow = createElement('tr', '', tbodyElement);
          const firstColumnTd = createElement('td', '', tableRow);
          createElement('img', '', firstColumnTd, '', '', {src: img});
          const secondColumnTd = createElement('td', '', tableRow);
          createElement('p', name, secondColumnTd);
          const thirdColumnTd = createElement('td', '', tableRow);
          createElement('p', price, thirdColumnTd);
          const fourthColumnTd = createElement('td', '', tableRow);
          createElement('p', decFactor, fourthColumnTd);
          const fifthColumnTd = createElement('td', '', tableRow);
          createElement('input', '', fifthColumnTd, '', '', {type: 'checkbox'});
      }

  }

  function buy() {
      const checkedBoxes = Array.from(document.querySelectorAll('input:checked'));
      let names = [];
      let totalPrice = 0;
      let decFactorSum = 0;
      let productsCount = 0;

      for (const item of checkedBoxes) {
          names.push(item.parentNode.parentNode.children[1].children[0].textContent);
          totalPrice += Number(item.parentNode.parentNode.children[2].children[0].textContent);
          decFactorSum += Number(item.parentNode.parentNode.children[3].children[0].textContent);
          productsCount++;
      }

      buyTextarea.value = `Bought furniture: ${names.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${decFactorSum / productsCount}`;
  }

  function createElement(type, content, parentNode, id, classes, attributes) {
      const htmlElement = document.createElement(type);

      if (content && type !== 'input' && type !== 'textarea') {
          htmlElement.textContent = content;
      }

      if (content && (type === 'input' || type === 'textarea')) {
          htmlElement.value = content;
      }

      if (id) {
          htmlElement.id = id;
      }

      if (classes) {
          htmlElement.classList.add(...classes);
      }

      if (parentNode) {
          parentNode.appendChild(htmlElement);
      }

      if (attributes) {
          for (const key in attributes) {
              htmlElement.setAttribute(key, attributes[key]);
          }
      }
      return htmlElement;
  }
}