function addItem() {
    let list = document.getElementById('items');
    let inputText = document.getElementById('newItemText').value;

    let newItem = document.createElement('li');
    newItem.textContent = inputText;

    list.appendChild(newItem);
}