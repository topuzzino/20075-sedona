var formButton = document.querySelector(".popup-button");
var popup = document.querySelector(".searching-form");
var form = popup.querySelector("form");
				
var checkIn = popup.querySelector("[name=checkin]");
var checkOut = popup.querySelector("[name=checkout]");
var adults = popup.querySelector("[name=adults]");




popup.classList.add("popup-hide");
			
formButton.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.toggle("popup-show");
	checkIn.focus();
});

form.addEventListener("submit", function (evt) {
	
	popup.classList.remove("popup-error");
	if (!checkIn.value || !checkOut.value || !adults.value) {
		popup.classList.add("popup-error");
	} 
});
