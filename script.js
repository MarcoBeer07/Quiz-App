let html = false;
let css = false;
let js = false;

let currentQuestion = 0;

let amountOfHtmlQuestions = questionsHtml.length;
let amountOfCssQuestions = questionsCss.length;
let amountOfJsQuestions = questionsJs.length;

let rightQuestions = 0;

let AUDIO_SUCCESS = new Audio('sound/success.mp3');
let AUDIO_FAIL = new Audio('sound/wrong.mp3');


function init() {
    showHtml()
}

function showGame() {
    document.getElementById('quiz-content').innerHTML = showQuiz();
}

//HTML Quiz
function showHtml() {
    document.getElementById('quiz-content').innerHTML = `
    <div class="startscreen-box">
        <div class="startscreen">
            <div><h1>Wilkommen zum HTML Quiz</h1></div>
            <div><h3>Bist du bereit ?</h3></div>  
        </div>
        <div class="start-button-box">
            <button onclick="startHtmlQuiz()" class="start-button">QUIZ STARTEN <img class="start-arrow" src="img/arrow-25-24.png"</button>
        </div>
    </div>
    `
    html = true;
    css = false;
    js = false;
    return html;
}

function startHtmlQuiz() {
    currentQuestion = 0;
    rightQuestions = 0;
    showGame()
    document.getElementById('all-questions').innerHTML = questionsHtml.length;
    showQuestion();
}

//CSS Quiz
function showCss() {
    document.getElementById('quiz-content').innerHTML = `
    <div class="startscreen-box">
        <div class="startscreen">
            <div><h1>Wilkommen zum CSS Quiz</h1></div>
            <div><h3>Bist du bereit ?</h3></div>  
        </div>
        <div class="start-button-box">
            <button onclick="startCssQuiz()" class="start-button">QUIZ STARTEN <img class="start-arrow" src="img/arrow-25-24.png"</button>
        </div>
    </div>
    `
    html = false;
    css = true;
    js = false;
    return css;
}

function startCssQuiz() {
    currentQuestion = 0;
    rightQuestions = 0;
    showGame()
    document.getElementById('all-questions').innerHTML = questionsCss.length;
    showQuestion();

}

//Javascript Quiz
function showJs() {
    document.getElementById('quiz-content').innerHTML = `
    <div class="startscreen-box">
        <div class="startscreen">
            <div><h1>Wilkommen zum Javascript Quiz</h1></div>
            <div><h3>Bist du bereit ?</h3></div>  
        </div>
        <div class="start-button-box">
            <button onclick="startJsQuiz()" class="start-button">QUIZ STARTEN <img class="start-arrow" src="img/arrow-25-24.png"</button>
        </div>
    </div>
    `
    js = true;
    html = false;
    css = false;
    return js;
}

function startJsQuiz() {
    currentQuestion = 0;
    rightQuestions = 0;
    showGame()
    document.getElementById('all-questions').innerHTML = questionsJs.length;
    showQuestion();
}


//Reset Game
function restartGame() {
    if (html == true) {
        currentQuestion = 0;
        rightQuestions = 0;
        startHtmlQuiz();
    } else if (css == true) {
        currentQuestion = 0;
        rightQuestions = 0;
        startCssQuiz();
    } else if (js == true) {
        currentQuestion = 0;
        rightQuestions = 0;
        startJsQuiz();
    }
}


function gameIsOver() {
    if (html == true) {
        return currentQuestion >= questionsHtml.length;
    } else if (css == true) {
        return currentQuestion >= questionsCss.length;
    } else if (js == true) {
        return currentQuestion >= questionsJs.length;
    }
}

//Show the Questions
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

    if (html == true) {
        document.getElementById('quiz-content').innerHTML = `
    <div class="endscreen">
        <div class="endscreen-img"><img src="img/brain-result.png"></div>
        <div class="endscreen.text"><h1>Quiz abgeschlossen</h1></div>
        <div class="score"><h2>Deine Punktzahl:&nbsp; <h2 class="score-points">${rightQuestions}</h2> <h2>/</h2 "score-points"> <h2> ${amountOfHtmlQuestions}</h2> </h2></div>
        <div><button onclick="restartGame()" type="button" class="btn btn-primary" id="next-button">Neu Starten</button></div>
        <div class="trophy"> <img src="img/tropy.png"></div>
    </div>`
    } else if (css == true) {
        document.getElementById('quiz-content').innerHTML = `
    <div class="endscreen">
        <div class="endscreen-img"><img src="img/brain-result.png"></div>
        <div class="endscreen.text"><h1>Quiz abgeschlossen</h1></div>
        <div class="score"><h2>Deine Punktzahl:&nbsp; <h2 class="score-points">${rightQuestions}</h2> <h2>/</h2 "score-points"> <h2> ${amountOfCssQuestions}</h2> </h2></div>
        <div><button onclick="restartGame()" type="button" class="btn btn-primary" id="next-button">Neu Starten</button></div>
        <div class="trophy"> <img src="img/tropy.png"></div>
    </div>`
    } else if (js == true) {
        document.getElementById('quiz-content').innerHTML = `
    <div class="endscreen">
        <div class="endscreen-img"><img src="img/brain-result.png"></div>
        <div class="endscreen.text"><h1>Quiz abgeschlossen</h1></div>
        <div class="score"><h2>Deine Punktzahl:&nbsp; <h2 class="score-points">${rightQuestions}</h2> <h2>/</h2 "score-points"> <h2> ${amountOfJsQuestions}</h2> </h2></div>
        <div><button onclick="restartGame()" type="button" class="btn btn-primary" id="next-button">Neu Starten</button></div>
        <div class="trophy"> <img src="img/tropy.png"></div>
    </div>`
    }
}


function updateProgressBar() {

    if (html == true) {
        let percent = currentQuestion / questionsHtml.length;
        percent = percent * 100;
        document.getElementById('progress-bar').innerHTML = `${percent} %`
        document.getElementById('progress-bar').style = `width: ${percent}%`
    } else if (css == true) {
        let percent = currentQuestion / questionsCss.length;
        percent = percent * 100;
        document.getElementById('progress-bar').innerHTML = `${percent} %`
        document.getElementById('progress-bar').style = `width: ${percent}%`
    } else if (js == true) {
        let percent = currentQuestion / questionsJs.length;
        percent = percent * 100;
        document.getElementById('progress-bar').innerHTML = `${percent} %`
        document.getElementById('progress-bar').style = `width: ${percent}%`
    }
}

function updateToNextQuestion() {
    let questionCss = questionsCss[currentQuestion];
    let questionHtml = questionsHtml[currentQuestion];
    let questionJs = questionsJs[currentQuestion];

    if (html == true) {
        document.getElementById('current-question').innerHTML = currentQuestion + 1;
        document.getElementById('questiontext').innerHTML = questionHtml['question'];
        document.getElementById('answer_1').innerHTML = questionHtml['answer_1'];
        document.getElementById('answer_2').innerHTML = questionHtml['answer_2'];
        document.getElementById('answer_3').innerHTML = questionHtml['answer_3'];
        document.getElementById('answer_4').innerHTML = questionHtml['answer_4'];
    } else if (css == true) {
        document.getElementById('current-question').innerHTML = currentQuestion + 1;
        document.getElementById('questiontext').innerHTML = questionCss['question'];
        document.getElementById('answer_1').innerHTML = questionCss['answer_1'];
        document.getElementById('answer_2').innerHTML = questionCss['answer_2'];
        document.getElementById('answer_3').innerHTML = questionCss['answer_3'];
        document.getElementById('answer_4').innerHTML = questionCss['answer_4'];
    } else if (js == true) {
        document.getElementById('current-question').innerHTML = currentQuestion + 1;
        document.getElementById('questiontext').innerHTML = questionJs['question'];
        document.getElementById('answer_1').innerHTML = questionJs['answer_1'];
        document.getElementById('answer_2').innerHTML = questionJs['answer_2'];
        document.getElementById('answer_3').innerHTML = questionJs['answer_3'];
        document.getElementById('answer_4').innerHTML = questionJs['answer_4'];
    }
}



function answer(selection) {

    let selectedQuestionNumber = selection.slice(-1);

    if (html == true) {
        let questionHtml = questionsHtml[currentQuestion];
        let idOfRightAnswerHtml = `answer_${questionHtml['right_answer']}`
        if (selectedQuestionNumber == questionHtml["right_answer"]) {
            document.getElementById(selection).parentNode.classList.add("bg-success", "zoom-in-out-box");
            document.getElementById('next-button').disabled = false;
            rightQuestions++;
            AUDIO_SUCCESS.play();
        } else {
            document.getElementById(selection).parentNode.classList.add("bg-danger", "answer");
            document.getElementById(idOfRightAnswerHtml).parentNode.classList.add("bg-success", "zoom-in-out-box");
            document.getElementById('next-button').disabled = false;
            AUDIO_FAIL.play();
        }
    } else if (css == true) {
        let questionCss = questionsCss[currentQuestion];
        let idOfRightAnswerCss = `answer_${questionCss['right_answer']}`;
        if (selectedQuestionNumber == questionCss["right_answer"]) {
            document.getElementById(selection).parentNode.classList.add("bg-success", "zoom-in-out-box");
            document.getElementById('next-button').disabled = false;
            rightQuestions++;
            AUDIO_SUCCESS.play();
        } else {
            document.getElementById(selection).parentNode.classList.add("bg-danger", "answer");
            document.getElementById(idOfRightAnswerCss).parentNode.classList.add("bg-success", "zoom-in-out-box");
            document.getElementById('next-button').disabled = false;
            AUDIO_FAIL.play();
        }
    } else if (js == true) {
        let questionJs = questionsJs[currentQuestion];
        let idOfRightAnswerJs = `answer_${questionJs['right_answer']}`;
        if (selectedQuestionNumber == questionJs["right_answer"]) {
            document.getElementById(selection).parentNode.classList.add("bg-success", "zoom-in-out-box");
            document.getElementById('next-button').disabled = false;
            rightQuestions++;
            AUDIO_SUCCESS.play();
        } else {
            document.getElementById(selection).parentNode.classList.add("bg-danger", "answer");
            document.getElementById(idOfRightAnswerJs).parentNode.classList.add("bg-success", "zoom-in-out-box");
            document.getElementById('next-button').disabled = false;
            AUDIO_FAIL.play();
        }
    }
}


function nextQuestion() {
    currentQuestion++;
    showQuestion();
    if (html == true) {
        if (currentQuestion < questionsHtml.length) {
            document.getElementById('next-button').disabled = true;
            resetAnswerButtons();
        } else {
            showQuestion()
        }
    } else if (css == true) {
        if (currentQuestion < questionsCss.length) {
            document.getElementById('next-button').disabled = true;
            resetAnswerButtons();
        } else {
            showQuestion()
        }
    } else if (js == true) {
        if (currentQuestion < questionsJs.length) {
            document.getElementById('next-button').disabled = true;
            resetAnswerButtons();
        } else {
            showQuestion()
        }
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