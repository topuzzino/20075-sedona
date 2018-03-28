var formButton = document.querySelector(".popup-button");
		var popup = document.querySelector(".searching-form");
				
		var checkIn = popup.querySelector("[name=checkin]");
		var checkOut = popup.querySelector("[name=checkout]");
		var adults = popup.querySelector("[name=adults]");
		
				
		formButton.addEventListener("click", function (evt) {
			evt.preventDefault();
			popup.classList.toggle("popup-hide");
			checkIn.focus();
		})
		
		popup.addEventListener("submit", function (evt) {
			if (!checkIn.value || !checkOut.value || !adults.value) {
				evt.preventDefault();
				console.log("Нужно ввести даты заезда и количество взрослых");
				popup.classList.add(popup-error);
			} else {
				localStorage.setItem("checkin", checkIn.value);
				localStorage.setItem("checkout", checkOut.value);
				localStorage.setItem("adults", adults.value);
			}
		})