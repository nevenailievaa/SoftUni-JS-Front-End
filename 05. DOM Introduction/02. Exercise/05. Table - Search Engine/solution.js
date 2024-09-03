function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const searchItem = document.getElementById('searchField').value.trim();
      
      const allRows = document.querySelectorAll('tbody tr');
      const allCells = document.querySelectorAll('tbody tr td');

      for (let row of allRows) {
         if (row.classList.contains('select')) {
            row.classList.remove('select');
         }
      }
      
      for (let cell of allCells) {
         if (cell.textContent.includes(searchItem)) {
            cell.parentElement.classList.add('select');
         }
      }
   }
}
