let questions = [{
        "question": "Wer hat HTML erfunden ?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Mit welchem Attribut erstellt man eine Unsortierte Liste ?",
        "answer_1": "a",
        "answer_2": "ul",
        "answer_3": "img",
        "answer_4": "table",
        "right_answer": 2
    },
    {
        "question": "Was bedeutet HTML ? ",
        "answer_1": "Hypertext Markup Language",
        "answer_2": "Hybrid Text Module Loading",
        "answer_3": "Hypertext Module Large",
        "answer_4": "Hyper Toggle Module Language",
        "right_answer": 1
    },
    {
        "question": "Wie fügt man eine JS Variable in HTML ein ? ",
        "answer_1": "add variable",
        "answer_2": "<${variable}>",
        "answer_3": "import variable",
        "answer_4": "show variable",
        "right_answer": 2
    },
    {
        "question": "Wie erstellt man eine Tabelle in HTML ?  ",
        "answer_1": "ul",
        "answer_2": "img",
        "answer_3": "table",
        "answer_4": "p",
        "right_answer": 3
    }

];


let currentQuestion = 0;
let amountOfQuestions = questions.length;
let rightQuestions = 0;
let AUDIO_SUCCESS = new Audio('sound/success.mp3');
let AUDIO_FAIL = new Audio('sound/wrong.mp3');

function init() {

    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();

}



function restartGame() {
    location.reload()
    currentQuestion = 0;
    rightQuestions = 0;
    init();
}


function gameIsOver() {
    return currentQuestion >= questions.length;
}

function showQuestion() {
    if (gameIsOver()) {
        // Endscreen
        showEndScreen();
    } else {
        // Show question
        updateProgressBar();
        updateToNextQuestion();
    }
}

function showEndScreen() {
    document.getElementById('quiz-content').innerHTML = `
    <div class="endscreen">
        <div class="endscreen-img"><img src="img/brain-result.png"></div>
        <div class="endscreen.text"><h1>Quiz abgeschlossen</h1></div>
        <div class="score"><h2>Deine Punktzahl:&nbsp; <h2 class="score-points">${rightQuestions}</h2> <h2>/</h2 "score-points"> <h2> ${amountOfQuestions}</h2> </h2></div>
        <div><button onclick="restartGame()" type="button" class="btn btn-primary" id="next-button">Neu Starten</button></div>
    </div>`
}


function updateProgressBar() {
    let percent = currentQuestion / questions.length;
    percent = percent * 100;
    document.getElementById('progress-bar').innerHTML = `${percent} %`
    document.getElementById('progress-bar').style = `width: ${percent}%`
}

function updateToNextQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('current-question').innerHTML = currentQuestion + 1;
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}



function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question["right_answer"]) {
        document.getElementById(selection).parentNode.classList.add("bg-success", "zoom-in-out-box");
        document.getElementById('next-button').disabled = false;
        AUDIO_SUCCESS.play();
        rightQuestions++;
    } else {
        document.getElementById(selection).parentNode.classList.add("bg-danger", "answer");
        document.getElementById(idOfRightAnswer).parentNode.classList.add("bg-success", "zoom-in-out-box");
        document.getElementById('next-button').disabled = false;
        AUDIO_FAIL.play();
    }
}


function nextQuestion() {
    currentQuestion++;
    showQuestion();
    if (currentQuestion < questions.length) {
        document.getElementById('next-button').disabled = true;
        resetAnswerButtons();
    } else {
        showQuestion()
    }
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove("bg-danger", "answer", "zoom-in-out-box");
    document.getElementById('answer_1').parentNode.classList.remove("bg-success", "answer", "zoom-in-out-box");
    document.getElementById('answer_2').parentNode.classList.remove("bg-danger", "answer", "zoom-in-out-box");
    document.getElementById('answer_2').parentNode.classList.remove("bg-success", "answer", "zoom-in-out-box");
    document.getElementById('answer_3').parentNode.classList.remove("bg-danger", "answer", "zoom-in-out-box");
    document.getElementById('answer_3').parentNode.classList.remove("bg-success", "answer", "zoom-in-out-box");
    document.getElementById('answer_4').parentNode.classList.remove("bg-danger", "answer", "zoom-in-out-box");
    document.getElementById('answer_4').parentNode.classList.remove("bg-success", "answer", "zoom-in-out-box");
}