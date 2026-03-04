document.addEventListener("DOMContentLoaded", () => {
  console.log("Site-ul Biserica Maranata Piatra Neamț este activ.");

  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        showMessage("Te rugăm să completezi toate câmpurile.", "error");
        return;
      }

      showMessage("Mulțumim, mesajul tău a fost trimis cu succes!", "success");
      form.reset();
    });
  }

  function showMessage(text, type) {
    const msg = document.getElementById("formMessage");
    msg.textContent = text;
    msg.style.color = type === "success" ? "green" : "red";
  }
});

   
  // Afișare detalii cont donații

document.addEventListener("DOMContentLoaded", () => {
  const showAccountBtn = document.querySelector(".donations .show-account");
  const accountBox = document.getElementById("donationsAccount");

  if (showAccountBtn && accountBox) {
    showAccountBtn.addEventListener("click", () => {
      const isHidden = accountBox.style.display === "none" || accountBox.style.display === "";
      accountBox.style.display = isHidden ? "block" : "none";
      showAccountBtn.textContent = isHidden
        ? "Ascunde detaliile contului"
        : "Afișează detaliile contului";
    });
  }
}, { once: true });


document.addEventListener("DOMContentLoaded", () => {
const form = document.getElementById("contactForm"); const msg = document.getElementById("formMessage");
if (form) { form.addEventListener("submit", function(e) { e.preventDefault();
