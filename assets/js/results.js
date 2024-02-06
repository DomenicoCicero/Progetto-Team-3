const urlParams = new URLSearchParams(window.location.search);
const correct = urlParams.get("correctValue");
console.log(correctValue);

console.log();
const correctH4 = document.querySelector("#section-sx h4");
const correctP = document.querySelector("#section-sx p");

const percentCorrect = (100 / questions.length) * giuste.length;
console.log(percentCorrect);
correctH4.innerText = percentCorrect + "%";

const wrongH4 = document.querySelector("#section-dx h4");
const wrongP = document.querySelector("#section-dx p");

const percentWrong = (questions.length / 100) * sbagliate.length;
wrongH4.innerText = percentWrong + "%";
