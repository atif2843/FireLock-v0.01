const slider = document.querySelector(".items");
		const slides = document.querySelectorAll(".item");
		const button = document.querySelectorAll(".button");
        const text=document.querySelectorAll(".text");

		let current = 0;
		let prev = 8;
		let next = 1;

		for (let i = 0; i < button.length; i++) {
                button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
		}
		for (let i = 0; i < slides.length; i++) {
			slides[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
	}

		const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

		const gotoNext = () => current < 8 ? gotoNum(current + 1) : gotoNum(0);

		const gotoNum = number => {
			current = number;
			prev = current - 1;
			next = current + 1;

			for (let i = 0; i < slides.length; i++) {
				slides[i].classList.remove("active");
				slides[i].classList.remove("prev");
                slides[i].classList.remove("next");
			}
      for (let i=0; i<text.length; i++){
        text[i].classList.remove("active");
      }

			if (next == 9) {
				next = 0;
			}

			if (prev == -1) {
				prev = 8;
			}

			slides[current].classList.add("active");
			slides[prev].classList.add("prev");
			slides[next].classList.add("next");
			text[current].classList.add("active");
        }
        console.log(text);
		console.log(slides);




		//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}