//Show the main Quiz
function showQuiz() {
    return `
    <div class="quiz-content">
        <div class="question-text">
            <h2 id="questiontext"></h2>
        </div>

        <div class="card mb-3 d-flex flex-row border-0 align-items-center ">
            <div class="question-place">A</div>
            <div class="card-body  fs-5" id="answer_1" onclick="selectedAnswer('answer_1')">
            </div>
        </div>

        <div class="card mb-3 d-flex flex-row border-0 align-items-center">
            <div class="question-place">B</div>
            <div class="card-body fs-5" id="answer_2" onclick="selectedAnswer('answer_2')">
            </div>
        </div>

        <div class="card mb-3 d-flex flex-row border-0 align-items-center">
            <div class="question-place">C</div>
            <div class="card-body fs-5" id="answer_3" onclick="selectedAnswer('answer_3')">
            </div>
        </div>

        <div class="card mb-3 d-flex flex-row border-0 align-items-center">
            <div class="question-place">D</div>
            <div class="card-body fs-5" id="answer_4" onclick="selectedAnswer('answer_4')">
            </div>
        </div>
        <div class="progress">
            <div class="progress-bar" id="progress-bar" role="progressbar" style="width: 0%">%</div>
        </div>
        <div class="quiz-footer">

            <div>
                Frage <b id="current-question"></b> von <b id="all-questions"></b>
            </div>
            <button onclick="nextQuestion()" type="button" class="btn btn-primary" id="next-button" disabled>Nächste Frage</button>
        </div>
    </div>
    `
}

//If the quiz is over, the CSS classes would be removed

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

//query on which quiz the answers should be updated

function nextQuestionHtml() {
    if (html == true) {
        if (currentQuestion < questionsHtml.length) {
            document.getElementById('next-button').disabled = true;
            resetAnswerButtons();
        } else {
            showQuestion()
        }
    }
}

function nextQuestionCss() {
    if (css == true) {
        if (currentQuestion < questionsCss.length) {
            document.getElementById('next-button').disabled = true;
            resetAnswerButtons();
        } else {
            showQuestion()
        }
    }
}

function nextQuestionJs() {
    if (js == true) {
        if (currentQuestion < questionsJs.length) {
            document.getElementById('next-button').disabled = true;
            resetAnswerButtons();
        } else {
            showQuestion()
        }
    }
}

//If answer is selected, the other answers will be locked
function lockAnswers() {
    for (i = 1; i < 5; i++) {
        document.getElementById('answer_' + i).style.pointerEvents = 'none';
    }
}

//If next question is choosed, the  answers will be unlocked

function unLockAnswers() {
    for (i = 1; i < 5; i++) {
        document.getElementById('answer_' + i).style.pointerEvents = 'auto';
    }
}


//asking from which quiz the answers should be selected


function selectedQuestionHTML(selection) {
    let selectedQuestionNumber = selection.slice(-1);

    if (html == true) {
        AUDIO_SUCCESS.currentTime = 0;
        AUDIO_FAIL.currentTime = 0;
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
    }
    lockAnswers()
}

function selectedQuestionCss(selection) {
    let selectedQuestionNumber = selection.slice(-1);

    if (css == true) {
        AUDIO_SUCCESS.currentTime = 0;
        AUDIO_FAIL.currentTime = 0;
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

    }
    lockAnswers()
}

function selectedQuestionJs(selection) {
    let selectedQuestionNumber = selection.slice(-1);

    if (js == true) {
        AUDIO_SUCCESS.currentTime = 0;
        AUDIO_FAIL.currentTime = 0;
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
    lockAnswers()
}

function restartHtml() {
    if (html == true) {
        currentQuestion = 0;
        rightQuestions = 0;
        startHtmlQuiz();
    }
}

function restartCss() {
    if (css == true) {
        currentQuestion = 0;
        rightQuestions = 0;
        startCssQuiz();
    }
}

function restartJs() {
    if (js == true) {
        currentQuestion = 0;
        rightQuestions = 0;
        startJsQuiz();
    }
}


function showMainStartscreen() {
    return `
    <div class="startscreen-box">
        <div class="startscreen">
            <div><h1>Wilkommen in der Quiz App !</h1></div>
            <div><h3>Wähle ein Quiz:</h3></div>  
        </div>
        <div class="main-button-box">
            <button onclick="showHtml()" class="start-button">HTML QUIZ STARTEN <img class="start-arrow" src="img/arrow-25-24.png"</button>
            <button onclick="showCss()" class="start-button">CSS QUIZ STARTEN <img class="start-arrow" src="img/arrow-25-24.png"</button>
            <button onclick="showJs()" class="start-button">JS QUIZ STARTEN <img class="start-arrow" src="img/arrow-25-24.png"</button>
        </div>
    </div>
    `
}
//Startscreen for each quiz

function htmlStartscreen() {
    return `
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
}

function cssStartscreen() {
    return `
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
}

function jsStartscreen() {
    return `
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
}


//Endscreen for each quiz

function showHtmlEndcreen() {
    if (html == true) {
        document.getElementById('quiz-content').innerHTML = `
    <div class="endscreen">
        <div class="endscreen-img"><img src="img/brain-result.png"></div>
        <div class="endscreen.text"><h1>Quiz abgeschlossen</h1></div>
        <div class="score"><h2>Deine Punktzahl:&nbsp; <h2 class="score-points">${rightQuestions}</h2> <h2>/</h2 "score-points"> <h2> ${amountOfHtmlQuestions}</h2> </h2></div>
        <div><button onclick="restartGame()" type="button" class="btn btn-primary" id="next-button">Neu Starten</button></div>
        <div class="trophy"> <img src="img/tropy.png"></div>
    </div>`
    }
}

function showCssEndcreen() {
    if (css == true) {
        document.getElementById('quiz-content').innerHTML = `
    <div class="endscreen">
        <div class="endscreen-img"><img src="img/brain-result.png"></div>
        <div class="endscreen.text"><h1>Quiz abgeschlossen</h1></div>
        <div class="score"><h2>Deine Punktzahl:&nbsp; <h2 class="score-points">${rightQuestions}</h2> <h2>/</h2 "score-points"> <h2> ${amountOfCssQuestions}</h2> </h2></div>
        <div><button onclick="restartGame()" type="button" class="btn btn-primary" id="next-button">Neu Starten</button></div>
        <div class="trophy"> <img src="img/tropy.png"></div>
    </div>`
    }
}

function showJsEndcreen() {
    if (js == true) {
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

//asking from which quiz the answers should be updated

function updateToNextHtmlQuestion() {
    if (html == true) {
        let questionHtml = questionsHtml[currentQuestion];

        document.getElementById('current-question').innerHTML = currentQuestion + 1;
        document.getElementById('questiontext').innerHTML = questionHtml['question'];
        document.getElementById('answer_1').innerHTML = questionHtml['answer_1'];
        document.getElementById('answer_2').innerHTML = questionHtml['answer_2'];
        document.getElementById('answer_3').innerHTML = questionHtml['answer_3'];
        document.getElementById('answer_4').innerHTML = questionHtml['answer_4'];
    }
    unLockAnswers()
}


function updateToNextCssQuestion() {
    if (css == true) {
        let questionCss = questionsCss[currentQuestion];

        document.getElementById('current-question').innerHTML = currentQuestion + 1;
        document.getElementById('questiontext').innerHTML = questionCss['question'];
        document.getElementById('answer_1').innerHTML = questionCss['answer_1'];
        document.getElementById('answer_2').innerHTML = questionCss['answer_2'];
        document.getElementById('answer_3').innerHTML = questionCss['answer_3'];
        document.getElementById('answer_4').innerHTML = questionCss['answer_4'];
    }
    unLockAnswers()
}

function updateToNextJsQuestion() {
    if (js == true) {
        let questionJs = questionsJs[currentQuestion];

        document.getElementById('current-question').innerHTML = currentQuestion + 1;
        document.getElementById('questiontext').innerHTML = questionJs['question'];
        document.getElementById('answer_1').innerHTML = questionJs['answer_1'];
        document.getElementById('answer_2').innerHTML = questionJs['answer_2'];
        document.getElementById('answer_3').innerHTML = questionJs['answer_3'];
        document.getElementById('answer_4').innerHTML = questionJs['answer_4'];
    }
    unLockAnswers()

}