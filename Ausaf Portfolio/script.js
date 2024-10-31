// TOGGLE ICON NAVBAR//
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () =>{
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};
//Rotating The Profile Picture
const profilePic = document.querySelector('.profile-pic');

profilePic.addEventListener('mouseenter', () => {
    profilePic.style.transform = 'rotate(360deg)';
    profilePic.style.transition = 'transform 1.5s';
});

profilePic.addEventListener('mouseleave', () => {
    profilePic.style.transform = 'rotate(0deg)';
});

// SCROLL SECTION ACTIVE LINK //
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector("header nav a[href*= " + id + "]").classList.add("active");
            });
        };
    });

    // STICKY NAVBAR //

    let header = document.querySelector("header");

    header.classList.toggle("sticky",window.scrollY > 100);

    // REMOVE THE ICON WHEN ANY CLICK THEM //

    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");

};
    // SCROLL REVEAL//
    ScrollReveal({
        reset: true,
        distance:"80px",
        duration: 2000,
        delay:200
    });
    ScrollReveal().reveal (".home-content, .heading",{ origin:"top"});
    ScrollReveal().reveal (".home-img, .about-img, .services-container, .project-box, .contact form",{ origin:"bottom"});
    ScrollReveal().reveal (" .home-content h1,  .footer-text, .social-media",{ origin:"left"});
    ScrollReveal().reveal (" .home-content p, .about-content",{ origin:"right"});

    // TYPED JS//
    const typed = new Typed(".multiple-text", {
        strings: ['FullStack Developer','Graphic Designer', 'YouTuber'],
        typeSpeed:100,
        backSpeed:100,
        backDelay:1000,
        loop:true
    });

    //LOADING ANIMATION //
    window.addEventListener('load', function() {
        // Hide loading screen after 3 seconds
        setTimeout(function() {
            document.getElementById('loading-screen').style.display = 'none';
        }, 7000);
    });

// FOR SENDING MAIL
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting normally
    
    // Get form fields
    const fullName = document.getElementById('userName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value || 'N/A'; // Fallback if phone is not provided
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Prepare the email body
    const emailBody = `
        Full Name: ${fullName}<br>
        Email: ${email}<br>
        Phone: ${phone}<br>
        Subject: ${subject}<br>
        Message: ${message}
    `;

    // Send the email using SMTP.js
    Email.send({
        Host: "smtp.elasticemail.com",   // Use your SMTP service host
        Username: "ausafkhan7777@gmail.com", // Your SMTP username (email address)
        Password: "48177578A9D2604C6298F1506A61FCB61C9",  // Your SMTP API key (Elastic Email API Key)
        To: "ausafkhan7777@gmail.com",    // Your email where you want to receive the contact form details
        From: "ausafkhan7777@gmail.com",  // This should be your verified email address
        ReplyTo: email,  // User's email address to allow replying directly to the user
        Subject: subject,  // Use the subject provided by the user
        Body: emailBody
    }).then((response) => {
        if (response === "OK") {
            Swal.fire({
                title: "Success!",
                text: "Your message has been sent successfully!",
                icon: "success",
                customClass: {
                    popup: "popup",
                    title: "title",
                    content: "content",
                    icon: "success-icon",
                    confirmButton: "confirm-button"
                }
            });
            document.getElementById('contactForm').reset();  // Clear the form
        } else {
            Swal.fire({
                title: "Error",
                text: "There was an error sending your message. Please try again later.",
                icon: "error",
                customClass: {
                    popup: "popup-error",
                    title: "title-error",
                    content: "content-error",
                    icon: "success-icon",
                    confirmButton: "confirm-button-error"
                }
            });
        }
    }).catch((error) => {
        Swal.fire({
            title: "Error",
            text: "An unexpected error occurred. Please try again.",
            icon: "error",
            customClass: {
                popup: "popup-error",
                title: "title-error",
                content: "content-error",
                confirmButton: "confirm-button-error"
            }
        });
        console.error('Error:', error);
    });
    
});
