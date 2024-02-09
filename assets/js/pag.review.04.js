const stars = document.querySelectorAll(".stars i");
const btn = document.getElementById("button");
const input = document.querySelector("input");
const feedbackpage = document.querySelector(".feedbackpage");
const h3Feedback = document.querySelector("h3");
const pFeedback = document.querySelector(".feedbackpage p");

feedbackpage.style.display = "none";

stars.forEach((star, i) => {
  star.addEventListener("mouseover", () => {
    stars.forEach((star, j) => {
      if (i + 1 >= j + 1) {
        star.classList.add("active");
      } else {
        star.classList.remove("active");
      }
    });
    const ratingIcon = generateRatingIcon(i + 1);
    h3Feedback.innerHTML = ratingIcon;
  });

  star.addEventListener("mouseout", () => {
    stars.forEach((star) => {
      star.classList.remove("active");
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

    if (i + 1 > 0) {
      btn.classList.add("illuminate");
    } else {
      btn.classList.remove("illuminate");
    }
  });
});

btn.addEventListener("click", (e) => {
  if (input.value !== "" && stars[0].classList.contains("selected1")) {
    pFeedback.innerText = input.value;
    const firstpage = document.querySelector(".paginaprincipale");
    firstpage.style.display = "none";
    feedbackpage.style.display = "";
  } else {
    alert("compila tutti i campi per la tua recensione");
  }
});

function generateRatingIcon(rating) {
  let ratingIcon = "";
  for (let j = 0; j < rating; j++) {
    if (rating === 1) {
      ratingIcon =
        '<i class="fa-regular fa-face-dizzy fa-xl" style="color: #eceff3;"></i>';
    } else if (rating >= 2 && rating <= 4) {
      ratingIcon =
        '<i class="fa-regular fa-face-frown-open fa-xl" style="color: #eaecf0;"></i>';
    } else if (rating >= 5 && rating <= 7) {
      ratingIcon =
        '<i class="fa-regular fa-face-meh fa-xl" style="color: #f3f4f7;"></i>';
    } else if (rating >= 8 && rating <= 9) {
      ratingIcon =
        '<i class="fa-regular fa-face-smile-wink fa-xl" style="color: #eaecf1;"></i>';
    } else {
      ratingIcon =
        '<i class="fa-regular fa-face-grin-stars fa-xl" style="color: #e7eaee;"></i>';
    }
  }

  return ratingIcon;
}
