document.addEventListener("DOMContentLoaded", () => {
  console.log("Site-ul Biserica Maranata Piatra Neamț este activ.");

  /* ------------------ FORMULAR CONTACT ------------------ */
  const contactForm = document.getElementById("contactForm");
  const contactMsg = document.getElementById("formMessage");

  if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
      e.preventDefault();

      emailjs.send("service_gnhlyq6", "template_ore4k6l", {
        from_name: document.getElementById("from_name").value,
        reply_to: document.getElementById("reply_to").value,
        phone: "",  // formularul de contact nu are telefon
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

  /* ------------------ FORMULAR CONSILIERE ------------------ */
  const consForm = document.getElementById("consiliereForm");
  const consMsg = document.getElementById("consiliereMessage");

  if (consForm) {
    consForm.addEventListener("submit", function(e) {
      e.preventDefault();

      emailjs.send("service_gnhlyq6", "template_ore4k6l", {
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

  /* ------------------ AFIȘARE CONT DONAȚII ------------------ */

  
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
    emailjs.send("service_gnhlyq6", "template_ec7t2ok", {
    from_name: document.getElementById("from_name").value,
    reply_to: document.getElementById("reply_to").value,
    message: document.getElementById("message").value
  })
  .then(() => {
    msg.textContent = "Mesaj trimis cu succes!";
    msg.style.color = "green";
    form.reset();
  }, (error) => {
    msg.textContent = "A apărut o eroare la trimitere.";
    msg.style.color = "red";
    console.error("EmailJS Error:", error);
  });
});
} });
const consForm = document.getElementById("consiliereForm");
const consMsg = document.getElementById("consiliereMessage");
if (consForm) {
  consForm.addEventListener("submit", (e) => {
    e.preventDefault();
    emailjs.send("service_gnhlyq6", "template_ore4k6l", {
      from_name: document.getElementById("c_name").value,
      reply_to: document.getElementById("c_email").value,
      message: document.getElementById("c_message").value,
      phone: document.getElementById("c_phone").value
    })
    .then(() => {
      consMsg.textContent = "Cererea ta a fost trimisă cu succes.";
      consMsg.style.color = "green";
      consForm.reset();
    });
  });


 /* ------------------ SCRIPT SECTIUNE ALBUM ------------------ */

    // ── Lightbox Logic ──
    const lightbox     = document.getElementById('lightbox');
    const lbImg        = document.getElementById('lightbox-img');
    const lbCaption    = document.getElementById('lightbox-caption');
    const lbClose      = document.getElementById('lightbox-close');
    const lbPrev       = document.getElementById('lightbox-prev');
    const lbNext       = document.getElementById('lightbox-next');

    let currentItems = [];
    let currentIndex = 0;

    function openLightbox(items, index) {
      currentItems = items;
      currentIndex = index;
      showPhoto(currentIndex);
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }

    function showPhoto(index) {
      const item = currentItems[index];
      lbImg.src = item.dataset.src;
      lbImg.alt = item.dataset.caption || '';
      lbCaption.textContent = item.dataset.caption || '';
    }

    // Click on any photo
    document.querySelectorAll('.album-grid').forEach(grid => {
      const items = Array.from(grid.querySelectorAll('.album-grid-item'));
      items.forEach((item, i) => {
        item.addEventListener('click', () => openLightbox(items, i));
      });
    });

    // Navigation
    lbClose.addEventListener('click', closeLightbox);
    lbPrev.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + currentItems.length) % currentItems.length;
      showPhoto(currentIndex);
    });
    lbNext.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % currentItems.length;
      showPhoto(currentIndex);
    });

    // Close on backdrop click
    lightbox.addEventListener('click', e => {
      if (e.target === lightbox) closeLightbox();
    });

    // Keyboard navigation
    document.addEventListener('keydown', e => {
      if (!lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') lbPrev.click();
      if (e.key === 'ArrowRight') lbNext.click();
    });
  }
