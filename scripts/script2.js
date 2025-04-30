
const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
	event.preventDefault();

	const email = form.querySelector("input[name='email']").value;
	const topic = form.querySelector("select[name='topic']").value;
	const message = form.querySelector("textarea[name='message']").value;

	if (email && topic && message) {
		alert("Wiadomość została wysłana!");
		form.reset();
	} else {
		alert("Proszę wypełnić wszystkie pola.");
	}
});