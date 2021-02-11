window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    " #d3d160",
    "#3caa80",
    " #60d394",
    "rgb(219, 181, 166)",
  ];
  //
  pads.forEach((pad, index) => {
    pad.addEventListener("click", function () {
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBubbles(index);
    });
  });
  //
  const createBubbles = (index) => {
    const Bubble = document.createElement("div");
    visual.appendChild(Bubble);
    Bubble.style.backgroundColor = colors[index];
    Bubble.style.animation = "jump 1s ease";
    Bubble.addEventListener("animationend", function () {
      visual.removeChild(this);
    });
  };
});
