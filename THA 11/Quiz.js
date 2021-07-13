(function() {
    const myQuestions = [{
            question: "What does Vampires survive upon?",
            answers: {
                a: "Vervain",
                b: "Sunlight",
                c: "Blood"
            },
            correctAnswer: "c"

        },
        {
            question: "How many years did Klaus lived?",
            answers: {
                a: "500 years",
                b: "6000 years",
                c: "1000 years"
            },
            correctAnswer: "c"
        },
        {
            question: "Which of the following triggers a werewolf?",
            answers: {
                a: "Full Moon",
                b: "Solar Eclipse",
                c: "Rain",

            },
            correctAnswer: "b"
        },
        {
            question: "Where does The Originals move from s?",
            answers: {
                a: "New York",
                b: "New Jersey",
                c: "New Orleans",

            },
            correctAnswer: "c"
        },
        {
            question: "What was Marilyn Monroe's natural hair colour?",
            answers: {
                a: "Ginger",
                b: "Blue",
                c: "Brown",

            },
            correctAnswer: "a"
        },
        {
            question: "Which two metals is pewter made from?",
            answers: {
                a: "Copper and Bronze",
                b: "Tin and lead.",
                c: "Zinc and gold",

            },
            correctAnswer: "b"
        },
        {
            question: "What takes place in Hong Kong's Happy Valley?",
            answers: {
                a: "Monkey racing",
                b: "Dog racing.",
                c: "Horse racing",

            },
            correctAnswer: "c"
        },
        {
            question: "Which country does the sport of pelato come from?",
            answers: {
                a: "Portugal",
                b: "Spain",
                c: "Italy",

            },
            correctAnswer: "b"
        },
        {
            question: "How did Originals can be controlled?",
            answers: {
                a: "White oak dagger",
                b: "Iron Dagger",
                c: "Bonnie's Magic",

            },
            correctAnswer: "a"
        },
        {
            question: "What was Elena's full name invented the bikini?",
            answers: {
                a: "Elena Forbes ",
                b: "Elena Gilbert",
                c: "Elena Rotownski",

            },
            correctAnswer: "b"
        },
    ];

    function buildQuiz() {
        // we'll need a place to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // we'll want to store the list of answer choices
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                    `<label>
               <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
             </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="slide">
             <div class="question"> ${currentQuestion.question} </div>
             <div class="answers"> ${answers.join("")} </div>
           </div>`
            );
        });

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                answerContainers[questionNumber].style.color = "lightgreen";
            } else {
                // if answer is wrong or blank
                // color the answers red
                answerContainers[questionNumber].style.color = "red";
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    function showSlide(n) {
        slides[currentSlide].classList.remove("active-slide");
        slides[n].classList.add("active-slide");
        currentSlide = n;

        if (currentSlide === 0) {
            previousButton.style.display = "none";
        } else {
            previousButton.style.display = "inline-block";
        }

        if (currentSlide === slides.length - 1) {
            nextButton.style.display = "none";
            submitButton.style.display = "inline-block";
        } else {
            nextButton.style.display = "inline-block";
            submitButton.style.display = "none";
        }
    }

    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    function showPreviousSlide() {
        showSlide(currentSlide - 1);
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");

    // display quiz right away
    buildQuiz();

    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    showSlide(0);

    // on submit, show results
    submitButton.addEventListener("click", showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
})();