let display = document.getElementById('display');

function clearDisplay() {
    display.innerText = '';
}

function deleteLast() {
    display.innerText = display.innerText.slice(0, -1);
}

function appendCharacter(char) {
    display.innerText += char;
}

function calculateResult() {
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = 'Error';
    }
}

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const action = button.dataset.action;
        const value = button.dataset.value;

        switch(action) {
            case 'clear':
                clearDisplay();
                break;
            case 'delete':
                deleteLast();
                break;
            case 'append':
                appendCharacter(value);
                break;
            case 'calculate':
                calculateResult();
                break;
        }
    });
});
