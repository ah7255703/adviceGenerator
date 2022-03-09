let getAdviceButton = document.getElementById("swap"),
  advicePlaceholder = document.getElementById("advice-content"),
  adviceId = document.getElementById("advice-id");

const advices = [
  {
    id: 001,
    content: "Always get two ciders",
  },
  {
    id: 002,
    content:
      "Make what is valuable important. Instead of thinking about what is profitable, think about what is valuable. Invest in others and you will grow your portfolio.",
  },
  {
    id: 003,
    content:
      "Treat others the way you want to be treated. Do right. Do your best. Treat others as you would want them to treat you",
  },
  {
    id: 004,
    content:
      "No task is beneath you. Don't put yourself above anyone or anything; work hard in silence and let success make the noise.",
  },
  {
    id: 005,
    content:
      "Be your best at all times. You never know what the future will bring, so always make the best use of the present.",
  },
  {
    id: 006,
    content:
      "Be patient and persistent. Life is not so much what you accomplish as what you overcome. ",
  },
];

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

getAdviceButton.addEventListener("click", (event) => {
  event.preventDefault();
  randomAdvice = advices[getRndInteger(0, advices.length)];
  advicePlaceholder.innerText = randomAdvice.content;
  adviceId.innerText ='00' + randomAdvice.id;
});
