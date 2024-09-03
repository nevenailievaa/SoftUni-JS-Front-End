function search() {
   let towns = Array.from(document.getElementById('towns').getElementsByTagName('li'));
   let searchTerm = document.getElementById('searchText').value;
   let result = document.getElementById('result');

   for (const town of towns) {
      town.style.fontWeight = 'normal';
      town.style.textDecoration = 'none'
   }

   if (searchTerm == '' || searchTerm == null) {
      return;
   }
   
   let matchesCount = 0;
   for (const town of towns) {
      if (town.textContent.toLowerCase().includes(searchTerm.toLowerCase())) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline'
         matchesCount++;
      }
   }

   result.textContent = `${matchesCount} matches found`;
}
