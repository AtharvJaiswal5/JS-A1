function joinNow() {
  alert("Welcome to FitZone! We'll contact you soon 💪");
}

function sendMessage(event) {
  event.preventDefault();
  alert("Message sent successfully!");
  document.querySelector("form").reset();
}
