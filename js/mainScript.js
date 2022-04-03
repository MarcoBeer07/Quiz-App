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
    includeHTML();
    showHtml();
}

function showGame() {
    document.getElementById('quiz-content').innerHTML = showQuiz();
}

//HTML Quiz
function showHtml() {
    document.getElementById('quiz-content').innerHTML = htmlStartscreen();
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
    hideMenu();
}

//CSS Quiz
function showCss() {
    document.getElementById('quiz-content').innerHTML = cssStartscreen();
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
    hideMenu();
}

//Javascript Quiz
function showJs() {
    document.getElementById('quiz-content').innerHTML = jsStartscreen();
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
    hideMenu();
}


//Reset Game
function restartGame() {
    startHtmlQuiz();
    startCssQuiz();
    startJsQuiz();

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

// Asking, from which should be showed the endscreen. 

function showEndScreen() {
    showHtmlEndcreen();
    showCssEndcreen();
    showJsEndcreen();

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

// Asking, wich data from which quiz should be picked for the next question. 

function updateToNextQuestion() {
    updateToNextHtmlQuestion();
    updateToNextCssQuestion();
    updateToNextJsQuestion();

}

// Asking, from which quiz the (right) answer is and put the right Css classes for the right feedback on it. 

function selectedAnswer(selection) {
    selectedQuestionHTML(selection);
    selectedQuestionCss(selection);
    selectedQuestionJs(selection);
}

// Checking if the answer is selected. If yes, make the "next-button" clickable and reset the classes on the answer-buttons for the next question.

function nextQuestion() {
    currentQuestion++;
    showQuestion();
    nextQuestionHtml();
    nextQuestionCss();
    nextQuestionJs();
}