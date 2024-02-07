const check = document.querySelector("input");
const btn = document.querySelector("button");

btn.onclick = function (e) {
  if (check.checked) {
    document.location.href = "/bench_results.html";
  } else {
    alert("Checkbox non affettuata");
  }
};
