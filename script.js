const sampleTexts = [
    "JavaScript is a powerful programming language.",
    "Practice makes perfect.",
    "Frontend development is creative."
];

const textDisplay = document.getElementById("text-display");
const inputArea = document.getElementById("input-area");
const startBtn = document.getElementById("start-btn");
const submitBtn = document.getElementById("submit-btn");
const timeDisplay = document.getElementById("time");
const wpmDisplay = document.getElementById("wpm");
const accuracyDisplay = document.getElementById("accuracy");

let timer;
let time = 0;
let currentText = "";

startBtn.addEventListener("click", function () {
    currentText = sampleTexts[Math.floor(Math.random() * sampleTexts.length)];
    textDisplay.innerText = currentText;

    inputArea.disabled = false;
    inputArea.value = "";
    inputArea.focus();

    startBtn.disabled = true;
    submitBtn.disabled = false;

    time = 0;
    timeDisplay.innerText = 0;

    timer = setInterval(function () {
        time++;
        timeDisplay.innerText = time;
    }, 1000);
});

submitBtn.addEventListener("click", function () {
    clearInterval(timer);

    const typedText = inputArea.value.trim();
    const wordCount = typedText.split(" ").length;
    const minutes = time / 60;
    const wpm = Math.round(wordCount / minutes);

    let correctChars = 0;
    for (let i = 0; i < typedText.length; i++) {
        if (typedText[i] === currentText[i]) {
            correctChars++;
        }
    }

    const accuracy = Math.round((correctChars / currentText.length) * 100);

    wpmDisplay.innerText = isNaN(wpm) ? 0 : wpm;
    accuracyDisplay.innerText = accuracy;

    inputArea.disabled = true;
    startBtn.disabled = false;
    submitBtn.disabled = true;
});