let shoppingList = [];

function addItem(item) {
    const cleanItem = item.trim();
    if (cleanItem === "") return;

    if (!shoppingList.includes(cleanItem)) {
        shoppingList.push(cleanItem);
        console.log(`${cleanItem} added to list.`);
    } else {
        console.log(`${cleanItem} is already on the list!`);
    }
}

function removeLastItem() {
    shoppingList.pop();
}

function displayList() {
    console.log("Current Shopping List:", shoppingList);
}

function filterItems(searchTerm) {
    const term = searchTerm.toLowerCase();
    return shoppingList.filter(item => 
        item.toLowerCase().includes(term)
    );
}

const inputField = document.getElementById('itemInput');
        const listUI = document.getElementById('displayList');

        function renderUI() {
            listUI.innerHTML = "";
            shoppingList.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                listUI.appendChild(li);
            });
        }

        function handleAddClick() {
            addItem(inputField.value);
            inputField.value = "";
            renderUI();
        }

        function handleRemoveClick() {
            removeLastItem();
            renderUI();
        }