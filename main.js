const canvas = document.getElementById('canvas')
const tc = document.createElement('div')

tc.classList.add('digit')
tc.classList.add('tc')
canvas.appendChild(tc)

var digits = "141592653589793141592653589793"

for (var i = 0; i < digits.length; i++) {
    var digit = document.createElement('div')
    var n = digits.charAt(i)
    var c = n * 25
    var color = ("rgb(" + c + "," + c + "," + c + ")").toString()
    digit.classList.add('digit')
    digit.style.background = color
    canvas.appendChild(digit)
}

const piDigitsFilePath = 'pi1000.txt';

async function displayPiDigits() {
    const response = await fetch(piDigitsFilePath);

    if (!response.ok) {
        console.error('Failed to fetch Pi digits file.');
        return;
    }

    const text = await response.text();
    const digits = text.split('');

    async function printDigit(index) {
        if (index < digits.length) {
            var digit = document.createElement('div')
            var n = digits[index]
            var c = n * 25
            var color = ("rgb(" + c + "," + c + "," + c + ")").toString()
            digit.classList.add('digit')
            digit.style.background = color
            canvas.appendChild(digit)
            printDigit(index + 1);
        }
    }

    printDigit(0);
}

displayPiDigits();
