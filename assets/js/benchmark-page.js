const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: ["Counter Strike: Source", "Corrective Style Sheet", "Computer Style Sheet"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

let index = 0;
let corrects = 0;
let wrongs = 0;

let giuste = [];
let sbagliate = [];

const startQuestionTimer = () => {
  if (index < questions.length) {
    console.log(index, questions.length);
    const timerDiv = document.querySelector(".timer");
    let timeLimit = 60000; // 10 secondi in millisecondi
    let remainingTime = timeLimit / 1000; // Converti in secondi
    timerDiv.textContent = remainingTime;

    const timerInterval = setInterval(() => {
      remainingTime--;
      timerDiv.textContent = remainingTime;

      console.log(remainingTime);

      updateChart(remainingTime); //

      const buttons = document.querySelectorAll("button");
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", e => {
          clearInterval(timerInterval);
        });
      }

      if (remainingTime <= 0) {
        clearInterval(timerInterval); // Interrompe il timer quando il tempo scade
        handleTimeout(); // Gestisci il timeout
      }
    }, 1000); // Aggiorna il timer ogni secondo
  }
};

const handleTimeout = () => {
  // Aggiungi qui il codice da eseguire quando il tempo per la domanda scade
  // Per esempio, considera la risposta come sbagliata
  // wrongs++;
  sbagliate.push(wrongs);
  const buttons = document.querySelectorAll(".content-button button"); //questa variabile ci serve solo per avere i riferimenti dei bottoni da eliminare e cambiare
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].remove();
  }

  index++; // Passa alla prossima domanda
  console.log(index);
  showQuestion(); // Mostra la prossima domanda
};

const showQuestion = () => {
  const benchmark = document.querySelector(".benchmark-page");
  const results = document.querySelector(".results");
  results.style.display = "none";
  if (index < questions.length) {
    const p = document.querySelector(".question p");
    const testoQuestion = questions[index].question;
    p.innerText = testoQuestion;

    const buttonDiv = document.querySelector(".content-button");

    const correct_answers = questions[index].correct_answer;
    if (Array.isArray(correct_answers)) {
      for (let i = 0; i < correct_answers.length; i++) {
        const button = document.createElement("button");
        button.innerText = correct_answers;
        buttonDiv.appendChild(button);
      }
    } else {
      const button = document.createElement("button");
      button.innerText = correct_answers;
      buttonDiv.appendChild(button);
    }

    const incorrect_answers = questions[index].incorrect_answers;
    if (Array.isArray(incorrect_answers)) {
      for (let i = 0; i < incorrect_answers.length; i++) {
        const button = document.createElement("button");
        button.innerText = incorrect_answers[i];
        buttonDiv.appendChild(button);
      }
    } else {
      const button = document.createElement("button");
      button.innerText = incorrect_answers;
      buttonDiv.appendChild(button);
    }

    const pQuestion = document.querySelector(".benchmark-page .p-question");
    const span = document.querySelector(".benchmark-page .p-question span");
    span.innerText = `/ ${questions.length}`;
    pQuestion.innerText = `QUESTION ${index + 1} `;
    pQuestion.appendChild(span);

    nextQuestionAfterClick();
    startQuestionTimer();
  } else {
    nextQuestionAfterClick();
    // startQuestionTimer();
    benchmark.style.display = "none";
    results.style.display = "";

    // document.location.href = "/results.html";
    // alert("domande finite");
  }
};

console.log("risposte giuste:", giuste.length);
console.log("risposte sbagliate:", sbagliate.length);

const nextQuestionAfterClick = () => {
  const buttons = document.querySelectorAll("button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", e => {
      if (questions[index].correct_answer.includes(e.target.innerText)) {
        corrects++;
        giuste.push(corrects);
      } else {
        wrongs++;
        sbagliate.push(wrongs);
      }
      const buttons = document.querySelectorAll(".content-button button"); //questa variabile ci serve solo per avere i riferimenti dei bottoni da eliminare e cambiare
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].remove();
      }
      index++;
      showQuestion();
    });
  }

  console.log("risposte giuste:", giuste.length);
  console.log("risposte sbagliate:", sbagliate.length);

  const totaleQuestion = questions.length;
  const correct = giuste.length;
  const wrong = sbagliate.length;
  const correctH4 = document.querySelector("#section-sx h4");
  const correctP = document.querySelector("#section-sx p");

  const percentCorrect = (100 / totaleQuestion) * correct;
  correctH4.innerText = percentCorrect + "%";
  // correctP.innerText = giuste + "/" + questions + " correct";
  correctP.innerText = `${correct}/${totaleQuestion} questions`;

  const wrongH4 = document.querySelector("#section-dx h4");
  const wrongP = document.querySelector("#section-dx p");
  wrongP.innerText = `${wrong}/${totaleQuestion} questions`;

  const percentWrong = (100 / totaleQuestion) * wrong;
  wrongH4.innerText = percentWrong + "%";

  // ---------------------------------

  const firstH3 = document.querySelector("#article-center h3");
  const secondH3 = document.querySelector(".h3-blue");
  const firstP = document.querySelector(".p1");
  const secondP = document.querySelector(".p2");

  if (correct >= 6) {
    firstH3.innerText = "Congratulations!";
    secondH3.innerText = "You passed the exam.";
    firstP.innerText = "We'll send you the certificate in a few minutes.";
    secondP.innerText = "Check your email (including promotions / spam folder)";
  } else {
    firstH3.innerText = "Failed!";
    secondH3.innerText = "You have not passed the exam.";
    firstP.innerText = "Ritenta il tuo esame";
  }
  // --------------------------------

  const btn = document.querySelector(".results button");
  btn.onclick = () => {
    document.location.href = "/pag.review.04.html";
  };
};

let myChart;

function drawPieChart(value, maxValue) {
  const ctx = document.getElementById("countdown").getContext("2d");
  myChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [value, maxValue - value],
          backgroundColor: ["#00FFFF", "#825F8E"],
        },
      ],
    },
    options: {
      cutout: "80%",
      tooltips: {
        enabled: false,
      },
      plugins: {
        datalabels: {
          backgroundColor: function (context) {
            return context.dataset.backgroundColor;
          },
          display: function (context) {
            var dataset = context.dataset;
            var value = dataset.data[context.dataIndex];
            return value > 0;
          },
          color: "white",
        },
      },
    },
  });
}

function updateChart(counter) {
  myChart.data.datasets[0].data[1] = counter;
  myChart.update();
}

const init = () => {
  drawPieChart(60, 60);
};

init();

window.onload = () => {
  showQuestion();
};
