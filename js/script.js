var formButton = document.querySelector(".popup-button");
var popup = document.querySelector(".searching-form");
				
var checkIn = popup.querySelector("[name=checkin]");
var checkOut = popup.querySelector("[name=checkout]");
var adults = popup.querySelector("[name=adults]");


	popup.classList.add("popup-hide");
			
formButton.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.toggle("popup-show");
	checkIn.focus();
});

popup.addEventListener("submit", function (evt) {
	evt.preventDefault();
	if (!checkIn.value || !checkOut.value || !adults.value) {
		console.log("Нужно ввести даты заезда и количество взрослых");
		popup.classList.add("popup-error");
	} else {
		localStorage.setItem("checkin", checkIn.value);
		localStorage.setItem("checkout", checkOut.value);
		localStorage.setItem("adults", adults.value);
	}
});