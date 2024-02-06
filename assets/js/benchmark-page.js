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
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
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
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Which programming language shares its name with an island in Indonesia?",
    correct_answer: ["Java", "php", "javascript"],
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

let index = 0;
let corrects = 0;
let wrongs = 0;

const showQuestion = () => {
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

    nextQuestionAfterClick();
  } else {
    alert("domande finite"); //da cambiare con il riferimento
  }
};

const nextQuestionAfterClick = () => {
  const buttons = document.querySelectorAll("button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = e => {
      if (questions[index].correct_answer.includes(e.target.innerText)) {
        corrects++;
      } else {
        wrongs++;
      }
      const buttons = document.querySelectorAll(".content-button button"); //questa variabile ci serve solo per avere i riferimenti dei bottoni da eliminare e cambiare
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].remove();
      }
      index++;
      showQuestion();
    };
  }
  console.log(corrects);
  console.log(wrongs);
};

window.onload = () => {
  showQuestion();
};
