let monkeyBtn = document.getElementById("monkeyfy");
let horseBtn = document.getElementById("horsefy");
let dogPics = document.querySelectorAll(".dog-card");
let rainbowPics = document.querySelectorAll(".rainbow-card");
let dogH1 = document.querySelector(".dogH1");
let rainbowH1 = document.querySelector(".rainbowH1");

for ( let i = 0; i < dogPics.length; i++) {
  dogPics[i].style.backgroundImage = `url('img/dog${i + 1}.jpeg')`;
}

for ( let i = 0; i < rainbowPics.length; i++) {
  rainbowPics[i].style.backgroundImage = `url('img/rainbow${i + 1}.jpeg')`;
}

monkeyBtn.addEventListener("click", function() {
  monkeyBtn.classList.toggle("dogify");
  if (monkeyBtn.classList.contains("dogify")) {
    monkeyBtn.innerHTML = "Dogify it!" 
    dogH1.innerHTML = "My Awesome Monkey Pics"
  } else {
    monkeyBtn.innerHTML = "Monkeyfy it!"
    dogH1.innerHTML = "My Awesome Dog Pics"
  }
  for( let i = 0; i < dogPics.length; i++) {
    dogPics[i].classList.toggle("fancy-border");
  }
})

horseBtn.addEventListener("click", function() {
  horseBtn.classList.toggle("rainbowify");
  if (horseBtn.classList.contains("dogify")) {
    horseBtn.innerHTML = "Dogify it!" 
    rainbowH1.innerHTML = "My Awesome Rainbow Pics"
  } else {
    horseBtn.innerHTML = "Rainbowify it!"
    rainbowH1.innerHTML = "My Awesome Horse Pics"
  }
  for( let i = 0; i < rainbowPics.length; i++) {
    rainbowPics[i].classList.toggle("fancy-border");
  }
})
