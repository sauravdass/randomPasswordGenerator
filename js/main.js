//catching essential element
const display = document.querySelector("input");
const button = document.querySelector("button");
const copyBtn = document.querySelectorAll(".display span");
const p = document.querySelector("p");

let chars =
  "abcdefghijklmnopuvwxyzABCDEFGHIJKLMNOPUVWXYZ0123456789!@#$%^&*()_+~`|}{][:;?><,./-=";

button.addEventListener("click", () => {
  let i;
  let randomPassword = "";
  for (i = 0; i < 16; i++) {
    randomPassword += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  copyBtn[0].style.display = "block";
  copyBtn[1].style.display = "none";

  display.value = randomPassword;
});

copyBtn.forEach((element) => {
  element.addEventListener("click", () => {
    copyBtn[0].style.display = "none";
    copyBtn[1].style.display = "block";
    display.select();
    document.execCommand("copy");
    p.style.display = "block";

    setTimeout(() => {
      p.style.display = "none";
    }, 2000);
  });
});
