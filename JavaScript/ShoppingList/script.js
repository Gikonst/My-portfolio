// Variables - Getting the elements from input to the list
const addButton = document.querySelector(".btn");
const itemList = document.querySelector("ul");
const filterInput = document.querySelector(".form-input-filter");
const clearBtn = document.querySelector(".btn-clear");


// Function to create the list items 
function createListItem(itemText) {
    const groceries = document.createElement("li");
    const textSpan = document.createElement("span"); 
    textSpan.textContent = itemText; 
    groceries.appendChild(textSpan); 

    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-item", "btn-link", "text-red");
    removeButton.setAttribute("aria-label", `Remove ${itemText}`);

    const removeIcon = document.createElement("i");
    removeIcon.classList.add("fa-solid", "fa-xmark");

    removeButton.appendChild(removeIcon);
    groceries.appendChild(removeButton);
    itemList.appendChild(groceries);

    // Add remove functionality
    removeButton.addEventListener("click", () => {
        itemList.removeChild(groceries);
        removeFromLocalStorage(itemText);
        displayNot();
    });

    // Add inline editing functionality
    textSpan.addEventListener("dblclick", () => {
        const inputField = document.createElement("input");
        inputField.type = "text";
        inputField.value = textSpan.textContent; 
        groceries.replaceChild(inputField, textSpan); 

        // Handle blur event for saving the changes
        inputField.addEventListener("blur", () => {
            const newItemText = inputField.value.trim();
            if (newItemText !== "" && !isDuplicate(newItemText)) {
                textSpan.textContent = newItemText;  
                groceries.replaceChild(textSpan, inputField);  
                updateLocalStorage(itemText, newItemText);  
                itemText = newItemText; 
            } else {
                groceries.replaceChild(textSpan, inputField);  
            }
        });

        inputField.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                inputField.blur();  
            }
        });

        inputField.focus();  
    });
}

// Check for duplicates
function isDuplicate(inputValue) {
    const existingItems = document.querySelectorAll("li span");
    return [...existingItems].some(item => item.textContent.toLowerCase() === inputValue.toLowerCase());
}

// Update local storage with the new item text
function updateLocalStorage(oldItem, newItem) {
    const storedItems = JSON.parse(localStorage.getItem("items")) || [];
    const updatedItems = storedItems.map(item => (item === oldItem ? newItem : item));
    localStorage.setItem("items", JSON.stringify(updatedItems));
    
}


// Function to load items from local storage
function loadItems() {
    const storedItems = JSON.parse(localStorage.getItem("items")) || [];
    storedItems.forEach(item => {createListItem(item);});
    displayNot();
}
// Function to remove item from local storage
function removeFromLocalStorage(item) {
    const storedItems = JSON.parse(localStorage.getItem("items")) || [];
    const updatedItems = storedItems.filter(storedItem => storedItem !== item);
    localStorage.setItem("items", JSON.stringify(updatedItems));
}
// Whent the button is clicked I want to create <li> items and put them in the unordered list beforeend
function addRemoveElements () {
    const inputValue = document.querySelector(".form-input").value.trim();
   
    // Ensuring the value is not blank
    if (inputValue !== "") { 
        
        // Checks for duplicate entries
        const existingItems = document.querySelectorAll("li");
        let isDuplicate = false;
        existingItems.forEach((item) => {
            if (item.textContent.toLowerCase() === inputValue.toLowerCase()){
                isDuplicate = true;
            }
        });
        if (!isDuplicate) {

            // Creating list elements 
            createListItem(inputValue);
            const storedItems = JSON.parse(localStorage.getItem("items")) || [];
            storedItems.push(inputValue);
            localStorage.setItem("items", JSON.stringify(storedItems));
            document.querySelector(".form-input").value = "";
        }else{
            alert('The item is already in the list');
        }
        displayNot();
    }
};

// Filter
function filtering () {
    const groceries = itemList.querySelectorAll("li");
    groceries.forEach((grocery) => {
        if (grocery.textContent.toLowerCase().includes(filterInput.value.toLowerCase())) {
            grocery.style.display = "";
        } else {
            grocery.style.display = "none";
        }
    });
};

// Clear button function
function clearAll() {
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
    filterInput.value = "";
    localStorage.removeItem("items");
    displayNot();
};

// Hide or display the clear button and filter if there are / there are no items in the list respectively
function displayNot(){
    if(itemList.childElementCount === 0){
        filterInput.style.display = "none";
        clearBtn.style.display = "none";
    }else{
        filterInput.style.display = "";
        clearBtn.style.display = "";
    }
}
// Executing function
function execution(){
    loadItems();
    addButton.addEventListener("click", addRemoveElements);
    document.querySelector("form").addEventListener('submit', e => e.preventDefault());
    filterInput.addEventListener("input", filtering);
    clearBtn.addEventListener("click", clearAll);
};

execution();
