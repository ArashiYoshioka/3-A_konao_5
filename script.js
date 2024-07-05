function checkAnswer() {
    const answerInput = document.getElementById('answerInput').value;
    const result = document.getElementById('result');

    if (answerInput === "ちょうききゅうか") {
        result.textContent = "正解！";
    } else if (answerInput === "長期休暇") {
        result.textContent = "正解！";
    } else {
        result.textContent = "残念...";
    }
}
