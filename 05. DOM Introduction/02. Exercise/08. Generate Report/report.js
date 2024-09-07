function generateReport() {
    const selectedCols = Array.from(document.querySelectorAll('th input'))
      .map((col, index) => col.checked ? index : -1)
      .filter(index => index !== -1);
  
    const reportList = Array.from(document.querySelectorAll('tbody tr')).map(row => {
      return selectedCols.reduce((acc, colIndex) => {
        acc[document.querySelectorAll('th input')[colIndex].name] = row.cells[colIndex].textContent;
        return acc;
      }, {});
    });
  
    document.getElementById('output').value = JSON.stringify(reportList);
  }
  