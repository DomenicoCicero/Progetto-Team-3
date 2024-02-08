let valueStar = 0;
const stars = document.querySelectorAll(".stars i");
const btn = document.getElementById("button");
const input = document.querySelector("input");
const feedbackpage = document.querySelector(".feedbackpage");
feedbackpage.style.display = "none";
// const feedbackContainer = document.getElementById("feedback-container");
stars.forEach((star, i) => {
  star.addEventListener("mouseover", () => {
    stars.forEach((star, j) => {
      if (i + 1 >= j + 1) {
        star.classList.add("active");
      } else {
        star.classList.remove("active");
      }
    });
    const h3Feedback = document.querySelector("h3");
    h3Feedback.innerText = i + 1 + " of 10";
    star.addEventListener("mouseout", () => {
      stars.forEach((star) => {
        star.classList.remove("active");
      });
    });
  });

  star.addEventListener("click", () => {
    stars.forEach((star, j) => {
      if (i + 1 >= j + 1) {
        star.classList.add("selected1");
      } else {
        star.classList.remove("selected1");
      }
    });
    // const p = document.getElementsByClassName("valuestar")[0];

    if (i + 1 > 0) {
      btn.classList.add("illuminate");
    } else {
      btn.classList.remove("illuminate");
    }
  });
});
btn.addEventListener("click", (e) => {
  if (input.value !== "" && stars[0].classList.contains("selected1")) {
    const pFeedback = document.querySelector(".feedbackpage p");
    pFeedback.innerText = input.value;
    const firstpage = document.querySelector(".paginaprincipale");
    firstpage.style.display = "none";
    feedbackpage.style.display = "";
  } else {
    alert("compila tutti i campi per la tua recensione");
  }
});
