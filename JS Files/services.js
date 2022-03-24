$(document).ready(function() {
  $("#p1").click(function(){
    $("#p1").css("border-bottom", "3px solid black")
    $("#p2").css("border-bottom", "none")
    $("#p3").css("border-bottom", "none")
    $("#col3").show();
    $("#col4").show();
    $("#col5").show();
    $("#fluid2").css("height","200px")
    $("#row2").css("height","200px")
    $("#row2").show();
    $("#row3").hide();
    $("#row4").hide();
  })
 
  $("#p2").click(function(){
  $("#row2").toggle();
  $("#row3").toggle();
  $("#p2").css("border-bottom", "3px solid black")
  $("#p3").css("border-bottom", "none")
  $("#p1").css("border-bottom", "none")
  $("#fluid2").css("height","410px")
  $("#row3").css("height","410px")
  $("#row2").hide();
  $("#row3").show();
  $("#row4").hide();
  })

  $("#p3").click(function(){
    $("#p3").css("border-bottom", "3px solid black")
    $("#p2").css("border-bottom", "none")
    $("#p1").css("border-bottom", "none")
    $("#fluid2").css("height","300px")
    $("#row2").css("height","300px")
    $("#row2").hide();
    $("#row3").hide();
    $("#row4").show();
  }) 

    $("#p6").click(function(){
      $("#row6").toggle();
      $("#row5").toggle();
  
    
    });
  });


  const quiz = [
    {
        "question": "How does your skin feel on average?",
        "answers": {
            "a":"Oily all over",
            "b":"Oily on certain spots",
            "c":"Dry and tight",
            "d":"Not too oily not too dry",
        }
    },
    {
        "question": "What is your main skin concern?",
        "answers": {
            "a":"Acne and breakouts",
            "b":"Tight, flaky, dry and dehydrated skin",
            "c":"Fine lines and wrinkles",
            "d":"Fading darkspots",
        }
    },
    {
        "question": "How often do you wash your face?",
        "answers": {
            "a":"More than twice",
            "b":"Twice a day",
            "c":"Once a day",
            "d":"None of the above",
        }
    },
    {
        "question": "How many steps would you prefer in your skin care routine?",
        "answers": {
            "a":"The glow basic- a 3 step routine",
            "b":"The glow neutral- a 5 step routine",
            "c":"The glow nebula- 8 step routine",
            "d":"Any routine",
        }
    },
    {
        "question": "What is your skin care budget?",
        "answers": {
            "a":"Affordable price",
            "b":"I don't care about price",
            "c":"A little bit expensive",
            "d":"Negotiable price",
        }
    },
]
let count = 0;
let score = 0;
const quizquestion = document.querySelector(".question");
const opt1 = document.querySelector("#option1");
const opt2 = document.querySelector("#option2");
const opt3 = document.querySelector("#option3");
const opt4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers1 = document.querySelectorAll(".answer")
const showsc = document.querySelector("#showscore");
const loadQuestions = () => {
    const listOfQuestions = quiz[count];
    quizquestion.innerHTML = listOfQuestions.question;
    opt1.innerHTML = listOfQuestions.answers.a;
    opt2.innerHTML = listOfQuestions.answers.b;
    opt3.innerHTML = listOfQuestions.answers.c;
    opt4.innerHTML = listOfQuestions.answers.d;
}
loadQuestions();
const getAnswer = () => {
    let ans;
    answers1.forEach(currentAnswer => {
        if (currentAnswer.checked) {
            ans = currentAnswer.id;
        }
    });
    const corAnswer = {ans1:'a', ans2:'b', ans3:'c', ans4:'d'};
    return corAnswer[ans];
}
submit.addEventListener('click', () => {
    const checkanswer = getAnswer();
    console.log({ checkanswer, correct: quiz[count].answers.correct, score});
    if (checkanswer == quiz[count].answers.correct) {
        score = score + 1;
    };
    count++;
    if (count < quiz.length) {
        loadQuestions();
    } else {
        showsc.innerHTML = `
        <h4> Your Skin is:  ${score}/ ${quiz.length}</h4>
       <button class="Submit" onClick="location.reload()"> View Recommendation </button>
        `;
        showsc.classList.remove("myscore")
    }
});