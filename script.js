const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yay, see you on the tomorrow!";
  gif.src =
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXZtZDQzYmU0c2xrYW0wczVrazE4cDg2M3JtZGs0ZHh2bXA2NWpxdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ND05Ek1fM1dyU/giphy.gif";

  yesBtn.style.display = 'none';
  noBtn.style.display = 'none';
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
