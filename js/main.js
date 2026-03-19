document.addEventListener("DOMContentLoaded", () => {
  console.log("Site-ul Biserica Maranata Piatra Neamț este activ.");
  /* --- FORMULAR CONTACT --- */
  const contactForm = document.getElementById("contactForm");
  const contactMsg = document.getElementById("formMessage");
  if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
      e.preventDefault();
      emailjs.send("service_gnhlyq6", "template_ec7t2ok", {
        from_name: document.getElementById("from_name").value,
        reply_to: document.getElementById("reply_to").value,
        phone: "",
        message: document.getElementById("message").value,
        date: new Date().toLocaleString()
      })
      .then(() => {
        contactMsg.textContent = "Mesaj trimis cu succes!";
        contactMsg.style.color = "green";
        contactForm.reset();
      }, (error) => {
        contactMsg.textContent = "A apărut o eroare la trimitere.";
        contactMsg.style.color = "red";
        console.error("EmailJS Error:", error);
      });
    });
  }
  /* --- FORMULAR CONSILIERE --- */
  const consForm = document.getElementById("consiliereForm");
  const consMsg = document.getElementById("consiliereMessage");
  if (consForm) {
    consForm.addEventListener("submit", function(e) {
      e.preventDefault();
      emailjs.send("service_gnhlyq6", "template_ec7t2ok", {
        from_name: document.getElementById("c_name").value,
        reply_to: document.getElementById("c_email").value,
        phone: document.getElementById("c_phone").value,
        message: document.getElementById("c_message").value,
        date: new Date().toLocaleString()
      })
      .then(() => {
        consMsg.textContent = "Cererea ta a fost trimisă cu succes.";
        consMsg.style.color = "green";
        consForm.reset();
      }, (error) => {
        consMsg.textContent = "A apărut o eroare la trimitere.";
        consMsg.style.color = "red";
        console.error("EmailJS Error:", error);
      });
    });
  }
  /* --- DONAȚII --- */
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
});
