		const slider = document.querySelector(".items");
		const slides = document.querySelectorAll(".item");
		const button = document.querySelectorAll(".button");
        const text=document.querySelectorAll(".text");

		let current = 0;
		let prev = 8;
		let next = 1;
		
		// function slide(slider, slides, prev, next,current) {
		// 	var posX1 = 0,
		// 		posX2 = 0,
		// 		posInitial,
		// 		posFinal,
		// 		threshold = 100
		// 		for (var i=0; i < slides.length; i++){
		
		// 			slides[i].addEventListener("touchstart",function dragStart(e){
		// 				e = e || window.event;
		// 				e.preventDefault();
		// 				posInitial = slides.offsetLeft;
						
		// 				if (e.type == 'touchstart') {
		// 				  posX1 = e.touches[0].clientX;
		// 				} else {
		// 				  posX1 = e.clientX;
		// 				  document.onmouseup = dragEnd;
		// 				  document.onmousemove = dragAction;
		// 			}});
					
					
					
		// 			slides[i].addEventListener("touchend", function dragEnd (e) {
		// 				posFinal = slides.offsetLeft;
		// 				if (posFinal - posInitial < -threshold) {
		// 				  shiftSlide(1, 'drag');
		// 				} else if (posFinal - posInitial > threshold) {
		// 				  shiftSlide(-1, 'drag');
		// 				} else {
		// 				  slides.style.left = (posInitial) + "px";
		// 				}});
					
		// 				slides[i].addEventListener("touchmove", function dragAction (e) {
		// 					e = e || window.event;
		// 					if (e.type == 'touchmove') {
		// 					  posX2 = posX1 - e.touches[0].clientX;
		// 					  posX1 = e.touches[0].clientX;
		// 					} else {
		// 					  posX2 = posX1 - e.clientX;
		// 					  posX1 = e.clientX;
		// 					}
		// 				  });
		// 				};
		// 	};
		
		

		for (let i = 0; i < button.length; i++) {
                button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
		}
		for (let i = 0; i < slides.length; i++) {
			slides[i].addEventListener("click", () => i == 0 ? gotoNext() : gotoPrev());
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




		