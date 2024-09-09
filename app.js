var questions = [
    {
        question: "What does HTML stand for?",
        opt1: "Hyper Tag Markup Language",
        opt2: "Hyper Text Markup Language",
        opt3: "Hyperlinks Text Mark Language",
        opt4: "Hyperlinking Text Marking Language",
        ans: "Hyper Text Markup Language"
    },
    {
        question: "Which method is used to parse a string to an integer in JavaScript?",
        opt1: "parseInt()",
        opt2: "parseInteger()",
        opt3: "parseNumber()",
        opt4: "parseFloat()",
        ans: "parseInt()"
    },
    {
        question: "Which of these is a genuine tag keyword?",
        opt1: "Header",
        opt2: "Bold",
        opt3: "Body",
        opt4: "Image",
        ans: "Body"
    },
    {
        question: "What symbol indicates a tag?",
        opt1: "Angle brackets e.g <>",
        opt2: "Curved brackets e.g. {,}",
        opt3: "Commas e.g. ','",
        opt4: "Exclamation marks e.g. !",
        ans: "Angle brackets e.g <>"
    },
    {
        question: "What is the correct format for aligning written content to the center of the page in CSS?",
        opt1: "Text-align:center;",
        opt2: "Font-align:center;",
        opt3: "Text:align-center",
        opt4: "align-center;",
        ans: "Text-align:center;"
    }
];

var index = 0;
var result = 0;

function renderQuestion() {
    if (index > 0) {
        var options = document.getElementsByName("option");
        for (var i = 0; i < options.length; i++) {
            if (options[i].checked && options[i].value === questions[index - 1].ans) {
                result++;
            }
        }
    }

    if (index >= questions.length) {
        document.getElementById("container").innerHTML = "<p>Final Score: " + result + "/" + questions.length + "</p>";
        return;
    }

    var container = document.getElementById("container");
    container.innerHTML = ` 
    <div class="card" style="width: 400px;">
        <div class="card-body p-3">
            <p>${index + 1}. ${questions[index].question}</p>
            <div>
                <label for="option1">
                    <input type="radio" id="option1" name="option" value="${questions[index].opt1}">${questions[index].opt1}</label>
            </div>
            <div>
                <label for="option2">
                    <input type="radio" id="option2" name="option" value="${questions[index].opt2}">${questions[index].opt2}</label>
            </div>
            <div>
                <label for="option3">
                    <input type="radio" id="option3" name="option" value="${questions[index].opt3}">${questions[index].opt3}</label>
            </div>
            <div>
                <label for="option4">
                    <input type="radio" id="option4" name="option" value="${questions[index].opt4}">${questions[index].opt4}</label>
            </div>
            <div class="d-flex justify-content-between">
                <button id="prev" class="btn btn-primary" onClick="prevQuestion()">Previous</button>
                <button id="next" class="btn btn-success" onClick="renderQuestion()">Next</button>
            </div>
        </div>
    </div>`;

    index++;
}

function prevQuestion() {
    if (index > 1) {
        index -= 2; // Go back two steps to load the previous question
        renderQuestion();
    }
}

renderQuestion();
