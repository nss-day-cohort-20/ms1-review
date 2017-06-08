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
  updateCard(dogPics, "monkey");
  updateText(monkeyBtn, dogH1, "Dog", "Monkey");
})

horseBtn.addEventListener("click", function() {
  updateCard(rainbowPics, "horse");
  updateText(horseBtn, rainbowH1, "Rainbow", "Horse");
})

function updateCard(pics, category) {
  for ( let i = 0; i < pics.length; i++) {
    pics[i].classList.toggle("fancy-border");
    pics[i].classList.toggle(`${category}fied`);
  } 
}

function updateText(btn, h1, cat1, cat2) {
  btn.classList.toggle(`${cat1}ify`);
  if (btn.classList.contains(`${cat1}ify`) ) {
    btn.innerHTML = `${cat1}ify it!`;
    h1.innerHTML = `My Awesome ${cat2} Pics`
  } else {
    btn.innerHTML = `${cat2}ify it!`;
    h1.innerHTML = `My Awesome ${cat1} Pics`
  }
}
