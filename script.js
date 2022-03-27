let questions = [{
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Mit welchem Attribut erstellt man eine Unsortierte Liste ?",
        "answer_1": "<a>",
        "answer_2": "<ul>",
        "answer_3": "<img>",
        "answer_4": "<table>",
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
        "answer_1": "<var>variable</var>",
        "answer_2": "<${variable}>",
        "answer_3": "<a>variable</a>",
        "answer_4": "<table>variable</tabl>",
        "right_answer": 2
    }

];



let currentQuestion = 0;


function init() {

    showQuestion()

}


function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);

    if (selectedQuestionNumber == question["right_answer"]) {
        document.getElementById(selection).parentNode.classList.add("bg-success", "zoom-in-out-box");
    } else {
        document.getElementById(selection).parentNode.classList.add("bg-danger", "answer");
    }

}