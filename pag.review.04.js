const stars = document.querySelectorAll(".stars i");

stars.forEach((star, i) => {
  star.addEventListener("click", () => {
    stars.forEach((star, j) => {
      if (i + 1 >= j + 1) {
        star.classList.add("active");
      } else {
        star.classList.remove("active");
      }
    });
  });
});

const btn = document.getElementById("button");
btn.onclick = () => {
  document.location.href = "https://epicode.com/it/";
};
