// TOGGLE ICON NAVBAR//
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
//Rotating The Profile Picture
const profilePic = document.querySelector(".profile-pic");

profilePic.addEventListener("mouseenter", () => {
  profilePic.style.transform = "rotate(360deg)";
  profilePic.style.transition = "transform 1.5s";
});

profilePic.addEventListener("mouseleave", () => {
  profilePic.style.transform = "rotate(0deg)";
});

// SCROLL SECTION ACTIVE LINK //
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*= " + id + "]")
          .classList.add("active");
      });
    }
  });

  // STICKY NAVBAR //

  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  // REMOVE THE ICON WHEN ANY CLICK THEM //

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};
// SCROLL REVEAL//
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .about-img, .services-container, .project-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(" .home-content h1,  .footer-text, .social-media", {
  origin: "left",
});
ScrollReveal().reveal(" .home-content p, .about-content", { origin: "right" });

// TYPED JS//
const typed = new Typed(".multiple-text", {
  strings: ["FullStack Developer", "Graphic Designer", "YouTuber"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

//LOADING ANIMATION //
window.addEventListener("load", function () {
  // Hide loading screen after 3 seconds
  setTimeout(function () {
    document.getElementById("loading-screen").style.display = "none";
  }, 3000);
});

// FOR SENDING MAIL
// Initialize EmailJS with your public key
(function () {
  emailjs.init("ckyC912UitvZZhOPK"); // Replace with your actual public key
})();

// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission

  // Show loading alert immediately
  Swal.fire({
    title: "Sending...",
    text: "Please wait while we send your message.",
    icon: "info", // Optionally set an icon
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading(); // Show loading animation
    },
    customClass: {
      popup: "custom-swal", // Apply your custom class for styling
    },
  });

  // Collect data from the form
  const templateParams = {
    from_name: document.getElementById("userName").value,
    email_id: document.getElementById("email").value,
    phone: document.getElementById("phone").value || "N/A", // Optional field with default
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
    reply_to: document.getElementById("email").value, // Sets "Reply To" email
  };

  // Send email using EmailJS
  emailjs.send("service_5ikjuuy", "template_mgrma3b", templateParams).then(
    (response) => {
      // Close the loading alert
      Swal.close();

      // Success SweetAlert message
      Swal.fire({
        title: "Success!",
        text: "Your message has been sent successfully!",
        icon: "success",
        customClass: {
          popup: "popup",
          title: "title",
          content: "content",
          icon: "success-icon",
          confirmButton: "confirm-button",
        },
      });

      document.getElementById("contactForm").reset(); // Clear the form after success
    },
    (error) => {
      // Close the loading alert
      Swal.close();

      // Error SweetAlert message
      Swal.fire({
        title: "Error",
        text: "Failed to send message. Please try again.",
        icon: "error",
        customClass: {
          popup: "popup-error",
          title: "title-error",
          content: "content-error",
          confirmButton: "confirm-button-error",
        },
      });

      console.error("Error:", error);
    }
  );
});
