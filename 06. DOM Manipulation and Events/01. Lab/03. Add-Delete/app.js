function addItem() {
    let itemsElement = document.getElementById('items');
    let newItemTextElement = document.getElementById('newItemText');

    let liElement = document.createElement('li');
    liElement.textContent = newItemTextElement.value;

    let deleteButton = document.createElement('a');
    deleteButton.textContent = '[Delete]';
    deleteButton.setAttribute('href', '#');
    deleteButton.addEventListener('click', (e) => {
        e.currentTarget.parentElement.remove();
    });

    liElement.appendChild(deleteButton);
    itemsElement.appendChild(liElement);
}