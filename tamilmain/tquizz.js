document.addEventListener("DOMContentLoaded", function() {
    const submitBtn = document.querySelector(".submit-btn");
    const resultText = document.querySelector(".result");

    submitBtn.addEventListener("click", function() {
        const correctAnswers = {
            q1: "a",
            q2: "a",
            q3: "b",
            q4: "c",
            q5: "c"
        };

        let score = 0;
        const questions = document.querySelectorAll(".question");

        questions.forEach(question => {
            const selectedOption = question.querySelector("input:checked");
            if (selectedOption) {
                const questionName = selectedOption.getAttribute("name");
                const userAnswer = selectedOption.value;

                if (correctAnswers[questionName] === userAnswer) {
                    score++;
                }
            }
        });

        resultText.textContent = "Result: " + score + " correct answers out of " + Object.keys(correctAnswers).length;
    });
});
