const slider = document.querySelector(".items");
		const slides = document.querySelectorAll(".item");
		const button = document.querySelectorAll(".button");
        const text=document.querySelectorAll(".text");

		let current = 0;
		let prev = 5;
		let next = 1;

		for (let i = 0; i < button.length; i++) {
                button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
		}
		for (let i = 0; i < slides.length; i++) {
			slides[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
	}

		const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

		const gotoNext = () => current < 5 ? gotoNum(current + 1) : gotoNum(0);

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

			if (next == 6) {
				next = 0;
			}

			if (prev == -1) {
				prev = 5;
			}

			slides[current].classList.add("active");
			slides[prev].classList.add("prev");
			slides[next].classList.add("next");
            text[current].classList.add("active");
        }
        console.log(text);
        console.log(slides);
