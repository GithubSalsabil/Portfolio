// Initialize EmailJS
emailjs.init("4-Q3o5-6n-M1bZHk3"); // Replace with your EmailJS public key

// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Send the email
    emailjs.send("service_b1k3akg", "template_anchv4y", {
        from_name: name,
        from_email: email,
        message: message,
    })
    .then(function () {
        document.getElementById("response-message").textContent = "Your message has been sent successfully!";
        document.getElementById("contact-form").reset();
    })
    .catch(function (error) {
        document.getElementById("response-message").textContent = "There was an error sending your message. Please try again.";
        console.error("Error:", error);
    });
});
