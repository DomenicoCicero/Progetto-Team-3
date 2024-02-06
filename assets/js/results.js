const correctH4 = document.querySelector("#section-sx h4");
const correctP = document.querySelector("#section-sx p");

const questions = 10;
const giuste = 6;
const sbagliate = 4;

const percentCorrect = (100 / questions) * giuste;
console.log(percentCorrect);
correctH4.innerText = percentCorrect + "%";
// correctP.innerText = giuste + "/" + questions + " correct";
correctP.innerText = `${giuste}/${questions} questions`;

const wrongH4 = document.querySelector("#section-dx h4");
const wrongP = document.querySelector("#section-dx p");
wrongP.innerText = `${sbagliate}/${questions} questions`;

const percentWrong = (100 / questions) * sbagliate;
wrongH4.innerText = percentWrong + "%";

// ---------------------------------

const firstH3 = document.querySelector("#article-center h3");
const secondH3 = document.querySelector(".h3-blue");
const firstP = document.querySelector(".p1");
const secondP = document.querySelector(".p2");

if (giuste >= 6) {
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

const btn = document.querySelector("button");
btn.onclick = () => {
  document.location.href = "/pag.review.04.html";
};
