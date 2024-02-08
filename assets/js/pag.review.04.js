let valueStar = 0;
const stars = document.querySelectorAll(".stars i");
const btn = document.getElementById("button");
const input = document.querySelector("input");
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
    const p = document.getElementsByClassName("valuestar")[0];
    p.innerText = i + 1 + " of 10";

    if (i + 1 > 0) {
      btn.classList.add("illuminate");
    } else {
      btn.classList.remove("illuminate");
    }
  });
});
btn.addEventListener("click", (e) => {
  if (input.value !== "" && stars[0].classList.contains("selected1")) {
    alert("grazie per la tua recensione");
  } else {
    alert("compila tutti i campi per la tua recensione");
  }
});
