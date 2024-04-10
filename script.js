const questions = [
    {
        question: "Which is the largest animal in the world ?",
        answers: [
            { text: "Blue Whale ", correct: true },
            { text: "Shark ", correct: false },
            { text: "Rabbit", correct: false },
            { text: "Grasshopper", correct: false },
        ]
    },
    {
        question: "When the price of a good increases, what happens to the quantity demanded, generally in Economics?",
        answers: [
            { text: "Increases", correct: false },
            { text: "Decreases", correct: true },
            { text: "Stay the same", correct: false },
            { text: "Depends on the good", correct: false },
        ]
    },
    {
        question: "In a perfectly competitive market, firms have_____ .",
        answers: [
            { text: "Price control", correct: false },
            { text: "Limited product differentiation", correct: false },
            { text: "many buyers and sellers", correct: false },
            { text: "All of the above", correct: true },
        ]
    },
    {
        question: "What is the primary goal of fiscal policy?",
        answers: [
            { text: "To control inflation", correct: false },
            { text: "To influence economic growth", correct: true },
            { text: "To regulate buisnesses", correct: false },
            { text: "To mamnage international trade", correct: false },
        ]
    },
    {
        question: "Which of the following is NOT a component of Gross Domestic Product (GDP)?",
        answers: [
            { text: "Government spending", correct: false },
            { text: "Consumer spending ", correct: false },
            { text: "Net Exports", correct: false },
            { text: "Transfer Payments", correct: true },
        ]
    },
    {
        question: "The central bank raises interest rates to primarily_________ .",
        answers: [
            { text: "Stimulate economic growth", correct: true },
            { text: "Reduce inflation", correct: false },
            { text: "Increase government revenue", correct: false },
            { text: "Attract foreign investment", correct: false },
        ]
    },
    {
        question: "What is a major challenge to economic development in less developed countries?",
        answers: [
            { text: "Lack of infrastructure", correct: false },
            { text: "High levels of inequality ", correct: false },
            { text: "Both (a) and (b) ", correct: true },
            { text: "Neither (a) nor (b)", correct: false },
        ]
    },
    {
        question: "Scarcity refers to the limited availability of resources compared to unlimited wants and needs. Which of the following best exemplifies scarcity?",
        answers: [
            { text: "Everyone has access to clean water. ", correct: false },
            { text: "Diamonds are expensive because they are beautiful.", correct: false },
            { text: " Air is freely available, so there is no scarcity.", correct: false },
            { text: "The price of gasoline fluctuates based on demand", correct: true },
        ]
    },
    {
        question: "People are often willing to pay more for a good if they believe others value it highly. This concept is known as____________ .",
        answers: [
            { text: "Opportunity cost ", correct: false },
            { text: "The endowment effect", correct: true },
            { text: "Diminishing marginal utility", correct: false },
            { text: "The law of demand", correct: false },
        ]
    },
    {
        question: "The concept of opportunity cost refers to the value of the next best alternative you give up when you make a choice. For example, if you decide to go to a movie instead of studying for an exam, the opportunity cost would be the potential grade you might have gotten if you had studied.If you decide to spend your summer break working a part-time job to earn money, what is the opportunity cost?",
        answers: [
            { text: "The money you could have earned working full-time.", correct: false },
            { text: "The cost of transportation to and from work.", correct: false },
            { text: "The free time you could have spent relaxing or traveling.", correct: true },
            { text: "The cost of the uniform you need for the job.", correct: false },
        ]
    },
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;


function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();

}
function showQuestion() {
    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;


    currentQuestion.answers.forEach(answer => {

        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;

        }
        button.addEventListener("click",selectAnswer);

    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);

    }
}
function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect){
        selectBtn.classList.add("correct");
    score++;
    }
    else{
        selectBtn.classList.add("incorrect");

    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";

}
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again"
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();

    }
    else{
        showScore();

    }
}
nextButton.addEventListener("click",()=> {
         if(currentQuestionIndex < questions.length)
         {
            handleNextButton();
         }
         else{
            startQuiz();

         }
});


startQuiz();
