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

    if (!genderMale && !genderFemale) {
        alert("Please select your gender.");
        return false;
    }

    // Course validation
    if (course === "") {
        alert("Please select a course.");
        return false;
    }

    window.location.href = "thanks.html";

    return true;
   
}
