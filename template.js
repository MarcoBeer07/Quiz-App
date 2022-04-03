function showQuiz() {
    return `
    <div class="quiz-content">
        <div class="question-text">
            <h2 id="questiontext"></h2>
        </div>

        <div class="card mb-3 d-flex flex-row border-0 align-items-center ">
            <div class="question-place">A</div>
            <div class="card-body  fs-5" id="answer_1" onclick="answer('answer_1')">
            </div>
        </div>

        <div class="card mb-3 d-flex flex-row border-0 align-items-center">
            <div class="question-place">B</div>
            <div class="card-body fs-5" id="answer_2" onclick="answer('answer_2')">
            </div>
        </div>

        <div class="card mb-3 d-flex flex-row border-0 align-items-center">
            <div class="question-place">C</div>
            <div class="card-body fs-5" id="answer_3" onclick="answer('answer_3')">
            </div>
        </div>

        <div class="card mb-3 d-flex flex-row border-0 align-items-center">
            <div class="question-place">D</div>
            <div class="card-body fs-5" id="answer_4" onclick="answer('answer_4')">
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