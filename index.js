// Detectin the click event

for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var clickInnerHTML = this.innerHTML;
    makeSound(clickInnerHTML);
    backHover(clickInnerHTML);
  });
}

// Detecting keyboard click

document.addEventListener("keypress", function(event) {
  // console.log(event.key);
  makeSound(event.key);
  backHover(event.key);
});

// Making the drum sound on both the click and keyboard Stroke

function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    default:
      break;
  }
}

// Hover on click and Key Strokes

function backHover(clickEvent) {
  var backGround = document.querySelector("." + clickEvent);
  backGround.classList.add("pressed");

  setTimeout(function() {
    backGround.classList.remove("pressed");
  }, 100);
}
