var question = document.getElementById("ques");
var one = document.getElementById("ans1");
var two = document.getElementById("ans2");
var three = document.getElementById("ans3");
var three = document.getElementById("ans3");
var submit = document.getElementById("submit");
var next = document.getElementById("next");
var answers = document.querySelectorAll(".answer");
var viewScore = document.getElementById("viewanswer");
var displayscore = document.getElementById("displayscore");
var control = document.getElementById("submit");
var box = document.querySelector(".quiz-box");
var end = document.querySelector(".game-end");
var finalScore = document.getElementById("finalscore");
var timeVal = document.getElementById("time");
let currentQuestion = 0;
let score = 0;
var valueOfCurrentScore = 0;
var id;

function getAnswer() {
  let ans = {
    one: false,
    two: false,
    three: false,
  };
  answers.forEach((element) => {
    if (element.checked) {
      ans[element.id] = true;
    }
  });
  return ans;
}

function startQuiz(data) {
  const currentQuizData = data[currentQuestion];
  ques.innerText = currentQuizData.question;
  one.innerText = currentQuizData.answer1;
  two.innerText = currentQuizData.answer2;
  three.innerText = currentQuizData.answer3;
  const startMin = 1;
  let time = startMin * 60;
  id = setInterval(() => {
    const min = Math.floor(time / 60);
    let sec = time % 60;
    if (sec < 0) {
      currentQuestion++;
      clearInterval(id);
      if (currentQuestion < data.length) {
        startQuiz(data);
      }
    }
    sec > 0 ? (timeVal.innerHTML = `${min}: ${sec}`) : 00;
    time--;
  }, 1000);
  submit.addEventListener("click", () => {
    let currentScore = 0;
    const checkAns = getAnswer();
    if (
      JSON.stringify([checkAns.one, checkAns.two, checkAns.three]) ===
        JSON.stringify([
          currentQuizData.one,
          currentQuizData.two,
          currentQuizData.three,
        ]) &&
      currentQuestion < data.length
    ) {
      currentScore++;
      score++;
      valueOfCurrentScore = currentScore;
      control.disabled = true;
    }

    const areFalse = Object.values(checkAns).every((value) => value === false);
    if (areFalse) {
      window.alert("Please enter a value before submitting");
    } else {
      control.disabled = true;
    }
  });
  next.addEventListener("click", () => {
    control.disabled = false;
    valueOfCurrentScore = 0;
    displayscore.innerText = 0;
    currentQuestion++;
    console.log(currentQuestion);
    if (currentQuestion < data.length) {
      startQuiz(data);
    } else {
      box.classList.add("quiz-box-hide");
      end.classList.add("game-end-show");
      finalScore.innerText = score;
      setTimeout(()=>{
        window.location.href = "/login.html";
      }, 4000)
    }
  });
  viewScore.addEventListener("click", () => {
    displayscore.innerText = valueOfCurrentScore;
  });
}

fetch("http://localhost:3001/api/user/getQuizQuestions", {
  method: "GET",
  headers: { "Content-Type": "application/json" },
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    if (currentQuestion < data.length) {
      startQuiz(data);
    }
  });
