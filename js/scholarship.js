
function showCondition(){
    window.open("condition.html","_blank","width=600,height=270,top=50");

    }
    
function validateName() {
    const nameField = document.getElementById("name");
    const errorSpan = document.getElementById("name-error"); // Get the error message span

    if (nameField.value.trim() === "") {
        nameField.classList.add("error-focus");
        errorSpan.textContent = "Name cannot be blank";
      
        nameField.focus();
        return false;
    }
    else {
        nameField.classList.remove("error-focus"); // Remove the error-focus class
        errorSpan.textContent = ""; 
    return true;
    }
}

function validateMarks(fieldId) {
    const field = document.getElementById(fieldId);
    const value = parseFloat(field.value);
    const errorSpan = document.getElementById(`${fieldId}-error`); // Get the error message span


    if (isNaN(value) || value < 0 || value > 100) {
        field.classList.add("error-focus");
        errorSpan.textContent = "Please enter a valid value between 0 and 100.";
        field.focus();
        return false;
    }
    else {
        field.classList.remove("error-focus"); // Remove the error-focus class
        errorSpan.textContent = ""; // Clear error message
        return true;
    }

}

function calc() {
    // Get form elements
    const name = document.getElementById("name").value.trim();
    const math = parseFloat(document.getElementById("math").value);
    const engl = parseFloat(document.getElementById("eng").value);
    const sci = parseFloat(document.getElementById("sci").value);
    const com = parseFloat(document.getElementById("cs").value);
    const tenthGrade = document.getElementById("tenth").value;

    // Validate inputs
    if (!name) {
        // document.getElementById("scholarship").textContent = 
        alert("Please enter your name.");
        return;
    }
    if (
        isNaN(math) ||
        math < 0 || math > 100 ||
        isNaN(engl) ||
        engl < 0 || engl > 100 ||
        isNaN(sci) ||
        sci < 0 || sci > 100 ||
        isNaN(com) ||
        com < 0 || com > 100
    ) {
        // document.getElementById("scholarship").textContent =
           alert("Please enter valid marks between 0 and 100 for all subjects.");
        return;
    }

    // Calculate 12th percentage
    const total = math + engl + sci + com;
    const twelthPercentage = (total / 400) * 100;

    // Calculate scholarship
    let scholarship = 0;
    const baseAmount = 100000;


    if (tenthGrade === "1" && twelthPercentage >= 90) {
        scholarship = baseAmount * 0.5; // 50% off for 10th percentage 90-100 and 12th percentage >= 90
    } else if (
        (tenthGrade === "2" && twelthPercentage >= 80) ||        
        (tenthGrade === "1" && twelthPercentage >= 80)
    ) {
        scholarship = baseAmount * 0.25; // 25% off for 10th percentage 80-89 and 12th percentage >= 80 or >= 90
    } else {
        scholarship = 0; // No scholarship for other conditions
    }
    

    const finalAmount = baseAmount - scholarship;

    // Display scholarship details
    document.getElementById("scholarship").textContent =
        scholarship > 0
            ? `You got a scholarship of ₹${scholarship.toFixed(2)}! Final amount to pay is ₹${finalAmount.toFixed(2)}.`
            : "No scholarship awarded. Total amount to pay is ₹1,00,000.";

            if (scholarship > 0) {
                alert(`You got a scholarship of ₹${scholarship.toFixed(2)}! Final amount to pay is ₹${finalAmount.toFixed(2)}.`);
            } else {
                alert("No scholarship awarded. Total amount to pay is ₹1,00,000.");
            }
}

