let num1, num2, operator, correctAnswer;
let score = 0;

// Function to generate a new random math problem
function generateProblem() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    
    // Get the selected operation from the dropdown
    const selectedOperation = document.getElementById("operation").value;
    
    switch (selectedOperation) {
        case "add":
            operator = "+";
            correctAnswer = num1 + num2;
            break;
        case "sub":
            operator = "-";
            correctAnswer = num1 - num2;
            break;
        case "mul":
            operator = "*";
            correctAnswer = num1 * num2;
            break;
        case "div":
            operator = "/";
            // Ensure no division by zero and that the answer is an integer
            while (num2 === 0 || num1 % num2 !== 0) {
                num2 = Math.floor(Math.random() * 10) + 1;
            }
            correctAnswer = num1 / num2;
            break;
    }

    // Display the generated problem
    document.getElementById("problem").textContent = `${num1} ${operator} ${num2} = ?`;
    document.getElementById("feedback").textContent = "";
    document.getElementById("answerInput").value = "";
}

// Function to check the user's answer
function checkAnswer() {
    const userAnswer = parseFloat(document.getElementById("answerInput").value);

    if (!isNaN(userAnswer)) {
        if (userAnswer === correctAnswer) {
            document.getElementById("feedback").textContent = "Correct! Great job!";
            document.getElementById("feedback").style.color = "green";
            score++;
        } else {
            document.getElementById("feedback").textContent = "Oops! Try again.";
            document.getElementById("feedback").style.color = "red";
        }
        document.getElementById("score").textContent = `Score: ${score}`;