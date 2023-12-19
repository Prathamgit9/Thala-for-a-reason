function checkInput() {
    var userInput = document.getElementById('userInput').value;
    var resultMessage = getResultMessage(userInput);

    displayModal(resultMessage);
}

function getResultMessage(input) {
    var lengthOrSum = input.trim().length;

    if (!isNaN(input)) {
        // If the input is a number, calculate the sum of its digits
        lengthOrSum = Array.from(input.toString()).reduce((sum, digit) => sum + parseInt(digit), 0);
    }

    return lengthOrSum > 0 && lengthOrSum % 7 === 0 ? 'Thala For a Reason' : 'Try Again';
}

function displayModal(message) {
    var modal = document.getElementById('result-modal');
    var resultMessage = document.getElementById('result-message');
    var userInput = document.getElementById('userInput');

    resultMessage.textContent = message;
    modal.style.display = 'flex';

    // Clear the input space when the modal is displayed
    userInput.value = '';
}

function tryAgain() {
    var modal = document.getElementById('result-modal');
    modal.style.display = 'none';
}
