function solve() {    
    const sumbit = document.querySelector('button');
    const reset = document.querySelectorAll('button')[1];
    let result = document.querySelector('#check p');
    let table = document.querySelector('table');
    let invalidNum = false;

    sumbit.addEventListener('click', function(e) {
        const inputs = Array.from(document.querySelectorAll('input[type="number"]')).map((input) => Number(input.value));

        function checkRow(start, end) {
            let row = inputs.slice(start, end)
            return row.reduce((a, b) => a + b) === 6 && (new Set(row)).size === row.length;
        }

        function checkCol(startIdx) {
            let row = []
            for (i=startIdx; i<inputs.length; i+=3 ) {
                row.push(inputs[i])
            }
            return row.reduce((a, b) => a + b) === 6 && (new Set(row)).size === row.length;
        }

        inputs.forEach((num) => {
            checkNum(num);
        })

        function checkNum(num) {
            return (num > 3 || num < 1) ? invalidNum = true : null;
        }

        inputs.forEach((num) => {
            checkNum(num);
        })

        if (checkRow(0, 3) && checkRow(3, 6) && checkRow(6, 9) && checkCol(0) && checkCol(1) && checkCol(2) && !invalidNum){
            table.style.border = '2px solid green';
            result.style.color = 'green';
            result.textContent = 'You solve it! Congratulations!';
        } else {
            table.style.border = '2px solid red';
            result.style.color = 'red';
            result.textContent = 'NOP! You are not done yet...';
        }

    })

    reset.addEventListener('click', function(e) {
        rows = document.querySelectorAll('input[type="number"]');
        rows.forEach(row => {
            row.value = '';
        });

        table.style.border = '';
        result.style.color = '';
        result.textContent = '';
    })


}