function validateName() {
    const name = document.getElementById("name").value.trim();
    const errorSpan = document.getElementById("name-error");
    const inputField = document.getElementById("name");

    if (name === "") {
        errorSpan.textContent = "Name is required.";
        inputField.classList.add("invalid");
        return false;
    } else {
        errorSpan.textContent = "";
        inputField.classList.remove("invalid");
        return true;
    }
}

function validateEmail() {
    const email = document.getElementById("email").value.trim();
    const errorSpan = document.getElementById("email-error");
    const inputField = document.getElementById("email");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        errorSpan.textContent = "Please enter a valid email address.";
        inputField.classList.add("invalid");
        return false;
    } else {
        errorSpan.textContent = "";
        inputField.classList.remove("invalid");
        return true;
    }
}

function validateCourse() {
    const course = document.getElementById("courses").value;
    const errorSpan = document.getElementById("courses-error");

    if (course === "") {
        errorSpan.textContent = "Please select a course.";
        return false;
    } else {
        errorSpan.textContent = "";
        return true;
    }
}


function jfun1() {

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const genderMale = document.getElementById("male").checked;
    const genderFemale = document.getElementById("female").checked;
    const course = document.getElementById("courses").value;

    if (name === "") {
        alert("Name is required.");
        return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (course === "") {
        alert("Please select a course.");
        return false;
    }


    if (!genderMale && !genderFemale) {
        const errorSpan = document.getElementById("gender-error");
        alert("Please select your gender.");
        errorSpan.textContent = "Please select your gender.";

        return false;
    }
    else {
        const errorSpan = document.getElementById("gender-error");
        errorSpan.textContent = "";
      
    }

    // Course validation
   
   
    return true;

}
