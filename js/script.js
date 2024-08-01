const sliderItems = document.querySelectorAll(".slider");
const form = document.querySelector(".form");

let sliderActive = 1;

if (sliderItems) {
    // Check if there are any slider items
    sliderItems.forEach((slider, index) => {
        // Use sliderindex here
        if (index === 0) {
            slider.setAttribute("data-show", "show"); // Use setAttribute, not setAttribut
        } else {
            slider.setAttribute("data-show", "hidden"); // Use setAttribute, not setAttribut
        }
    });

    setInterval(() => {
        sliderItems.forEach((slider, index) => {
            if (sliderActive === index) {
                slider.setAttribute("data-show", "show"); // Use setAttribute, not setAttribut
            } else {
                slider.setAttribute("data-show", "hidden"); // Use setAttribute, not setAttribut
            }
        });

        if (sliderActive === sliderItems.length - 1) {
            sliderActive = 0;
        } else {
            sliderActive++;
        }
    }, 5000);
};

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const pesan = document.getElementById("pesan").value.trim();
    const interest = document.getElementById("interst").value;

    // Reset error messages
    const errorMessages = form.querySelectorAll(".error-message");
    errorMessages.forEach(function(errorMessage) {
        errorMessage.textContent = "";
    });

    // Validate name
    if (name === "") {
        document.getElementById("name-error").textContent =
            "Please enter your name";
        return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("email-error").textContent =
            "Please enter a valid email address";
        return;
    }

    // Validate pesan
    if (pesan === "") {
        document.getElementById("pesan-error").textContent =
            "Please enter a message";
        return;
    }

    // Validate interest
    if (interest === "") {
        document.getElementById("interst-error").textContent =
            "Please select an interest";
        return;
    }

    // Form is valid, perform further actions (e.g., submit the form)
    alert("Form submitted successfully");
});