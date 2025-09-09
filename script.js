const textElement = document.querySelector(".sec-text");

const words = [" Psira Liscenced Security", "Lett Security Service", "Lett Security Academy"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 150; // speed in ms

function typeEffect() {
  const currentWord = words[wordIndex];
  
  if (isDeleting) {
    textElement.textContent = currentWord.substring(0, charIndex--);
  } else {
    textElement.textContent = currentWord.substring(0, charIndex++);
  }

  // typing speed
  let delay = typingSpeed;

  if (!isDeleting && charIndex === currentWord.length) {
    delay = 1500; // pause after full word
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length; // move to next word
    delay = 500;
  }

  setTimeout(typeEffect, delay);
}

// start animation
typeEffect();
