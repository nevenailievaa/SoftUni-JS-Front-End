function sumTable() {
    let tableRows = Array.from(document.getElementsByTagName('td'));

    let sum = 0;
    for (let i = 1; i < tableRows.length - 2; i += 2) {
        sum += Number(tableRows[i].textContent);
    }
    
    let sumField = document.getElementById('sum');
    sumField.textContent = sum;
}