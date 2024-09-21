function solve() {
   let shoppingCart = document.querySelector('.shopping-cart');
   let addProductButtons = shoppingCart.querySelectorAll('.add-product');
   let checkoutButton = shoppingCart.querySelector('.checkout');
   let result = shoppingCart.querySelector('textarea');

   let boughtProducts = {};

   addProductButtons.forEach(button => {
      button.addEventListener('click', (event) => {
         let button = event.target;

         let productElement = button.closest('.product');
         let productTitle = productElement.querySelector('.product-title').textContent;
         let productPrice = parseFloat(productElement.querySelector('.product-line-price').textContent);

         if (boughtProducts[productTitle] === undefined) {
            boughtProducts[productTitle] = productPrice;
         } else {
            boughtProducts[productTitle] += productPrice;
         }

         result.textContent += `Added ${productTitle} for ${productPrice.toFixed(2)} to the cart.\n`;
      });
   });

   checkoutButton.addEventListener('click', () => {
      let sum = 0;

      for (const productName in boughtProducts) {
         sum += boughtProducts[productName];
      }

      let productNames = Object.keys(boughtProducts).join(', ');
      result.textContent += `You bought ${productNames} for ${sum.toFixed(2)}.`;

      addProductButtons.forEach(button => {
         button.disabled = true;
      });

      checkoutButton.disabled = true;
   });
}
