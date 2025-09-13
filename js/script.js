// Isi nama otomatis di Hero
document.addEventListener("DOMContentLoaded", () => {
  const welcome = document.getElementById("welcome-message");
  const name = "Harfi"; // bisa diganti sesuai input/variable
  welcome.textContent = `Hi ${name}, Welcome To Website`;

  // Update waktu real-time
  setInterval(() => {
    document.getElementById("current-time").textContent = new Date().toString();
  }, 1000);

  // Form submit
  const form = document.getElementById("message-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    document.getElementById("out-name").textContent = document.getElementById("name").value;
    document.getElementById("out-birthdate").textContent = document.getElementById("birthdate").value;
    document.getElementById("out-gender").textContent = document.querySelector("input[name='gender']:checked").value;
    document.getElementById("out-message").textContent = document.getElementById("message").value;
  });
});
