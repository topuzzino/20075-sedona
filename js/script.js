var formButton = document.querySelector(".popup-button");
var popup = document.querySelector(".searching-form");
var form = document.querySelector("form");
				
var checkIn = popup.querySelector("[name=checkin]");
var checkOut = popup.querySelector("[name=checkout]");
var adults = popup.querySelector("[name=adults]");



var isStorageSupport = true;
var storage = "";
try {
	storage = localStorage.getItem("checkIn");
	localStorage.getItem("checkOut");
	localStorage.getItem("adults");
} catch (err) {
	isStorageSupport = false;
}




popup.classList.add("popup-hide");
			
formButton.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.toggle("popup-show");
	checkIn.focus();
});

form.addEventListener("submit", function (evt) {
	evt.preventDefault();
	if (!checkIn.value || !checkOut.value || !adults.value) {
		console.log("Нужно ввести даты заезда и количество взрослых");
		form.classList.add("popup-error");
	} else {
		if (isStorageSupport){
			localStorage.setItem("checkin", checkIn.value);
			localStorage.setItem("checkout", checkOut.value);
			localStorage.setItem("adults", adults.value);
		}
	}
});