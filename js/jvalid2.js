
function validateDetails(fieldId) {
    const field = document.getElementById(fieldId);
    const value = field.value.trim();
    const errorSpan = document.getElementById(`${fieldId}-error`); // Get the error message span

    // Check if the field is empty
    if (value === "") {
        field.classList.add("error-focus"); // Highlight the field with an error
        errorSpan.textContent = `Please enter a valid ${fieldId}.`; // Display an appropriate error message
        return false;
    } else {
        field.classList.remove("error-focus"); // Remove the error-focus class
        errorSpan.textContent = ""; // Clear the error message
        return true;
    }

}

function validateForm() {
    // Get form fields
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate Name
    if (name === "") {
        alert("Name is required.");
        return false;
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Validate Subject
    if (subject === "") {
        alert("Subject is required.");
        return false;
    }

    // Validate Message
    if (message === "") {
        alert("Message is required.");
        return false;
    }

    // If all validations pass
    return true;
}