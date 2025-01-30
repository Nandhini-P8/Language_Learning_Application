document.addEventListener("DOMContentLoaded", function() {
    const submitBtn = document.querySelector(".submit-btn");
    const resultText = document.querySelector(".result");

    submitBtn.addEventListener("click", function() {
        const correctAnswers = {
            q1: "b",
            q2: "b",
            q3: "d",
            q4: "c",
            q5: "b"
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
