const input = document.getElementById('text-input');
const button = document.getElementById('check-btn');
const result = document.getElementById('result');

function inputIsEmpty() {
    return input.value === "";
}

function cleanString(string) {
    let regex = /[^a-zA-Z0-9]/g;
    return string.replace(regex, '').toLowerCase();
}

function palindromeCheck(string) {
    const clearText = cleanString(string);
    const check = clearText.split("").reverse().join("");
    return check === clearText;
}

function resultText(string) {
    if (palindromeCheck(string)) {
        result.innerText = `${string} is a palindrome`;
    } else {
        result.innerText = `${string} is not a palindrome`;
    }
}


button.addEventListener("click", (event) => {
    event.preventDefault(); // Prevents the form from submitting and refreshing the page
    if (inputIsEmpty()) {
        alert("Please input a value");
    } else {
        resultText(input.value);
    }
});
