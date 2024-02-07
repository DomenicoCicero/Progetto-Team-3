let valueStar = 0;
const stars = document.querySelectorAll(".stars i");
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
  });
});

const btn = document.getElementById("button");
btn.onclick = () => {
  document.location.href = "https://epicode.com/it/";
};
