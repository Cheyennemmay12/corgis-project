const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const topic = document.getElementById("topic").value;
  const message = document.getElementById("message").value;

  const subject = encodeURIComponent("Corgi Field Guide: " + topic);
  const body = encodeURIComponent(
    "From: " + name + "\nEmail: " + email + "\n\n" + message
  );

  document.getElementById("form-status").textContent =
    "Your email app should open. Review your message and choose Send.";

  window.location.href =
    "mailto:hello@corgifieldguide.org?subject=" + subject + "&body=" + body;
});
