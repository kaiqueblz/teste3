const form = document.querySelector("#cadas");
form.addEventListener("click", (e) => {
  let nome = e.target.querySelector("[type='submit']").value;
  console.log(nome);
});