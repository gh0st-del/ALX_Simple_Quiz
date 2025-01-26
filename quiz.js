function checkAnswer() {
    const feedback = document.getElementById("feedback");
  
    const correctAnswer = "4";
  
    const userAnswer = document.querySelector(
      'input[name="quiz"]:checked'
    )?.value;
  
    if (userAnswer === correctAnswer) {
      feedback.textContent = "Correct! Well done.";
    } else {
      feedback.textContent = "That's incorrect. Try again!";
    }
  }
  
  const btnEl = document.getElementById("submit-answer");
  
  btnEl.addEventListener("click", checkAnswer);