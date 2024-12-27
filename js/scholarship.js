
function showCondition(){
window.open("condition.html","_blank","width=650,height=300,left=100,top=100");
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



















// document.getElementById("tenth").addEventListener("change", calc);

// function calc() {
//     // Get form elements
//     const name = document.getElementById("name").value.trim();
//     const math = parseFloat(document.getElementById("math").value);
//     const engl = parseFloat(document.getElementById("eng").value);
//     const sci= parseFloat(document.getElementById("sci").value);

//     con com < 0 || com > 100
//     ) {
       
//             alert("Please enter valid marks between 0 and 100 for all subjects.");
//         return;
//     }

//      // Calculate 12th percentage
//      const total = math + engl + sci + com;
//      const twelthPercentage = (total / 400) * 100;
 
//      // Calculate scholarship
//      let scholarship = 0;
//      const baseAmount = 10000;
 
//      if (tenthGrade === ">90" && twelthPercentage > 90) {
//          scholarship = baseAmount * 0.5; // 50% off
//      } else if (tenthGrade === ">90" || (tenthGrade === "90" && twelthPercentage > 80)) {
//          scholarship = baseAmount * 0.25; // 25% off
//      } else {
//          scholarship = 0; // No scholarship
//      }
 
//      const finalAmount = baseAmount - scholarship;
 
//      // Display scholarship details
//      document.getElementById("scholarship").textContent =
//          scholarship > 0
//              ? `You got a scholarship of ₹${scholarship.toFixed(2)}! Final amount to pay is ₹${finalAmount.toFixed(2)}.`
//              : "No scholarship awarded. Total amount to pay is ₹10,000.";
//             }


// st com = parseFloat(document.getElementById("cs").value);

//     // Validate inputs
//     if (!name) {
//         alert("Please enter your name.");
//         return;
//     }
//     if (
//         isNaN(math) ||
//         math < 0 || math > 100 ||
//         isNaN(engl) ||
//         engl < 0 || engl > 100 ||
//         isNaN(sci) ||
//         sci < 0 || sci > 100 ||
//         isNaN(com) ||
       



