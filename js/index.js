document.addEventListener('DOMContentLoaded', function () {
    // Activate all tooltips on the page
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
});

setTimeout(() => {
    // Show the modal after 2.5 seconds
    const modal = document.getElementById('subscriptionModal');
    modal.style.display = 'flex';
}, 2500);


function subscribe() {
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message');

    if (!email) {
        alert('Please enter your email address.');
        return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Mock subscription success
    message.textContent = `Thank you for subscribing with ${email}!`;
    document.getElementById('email').value = ''; // Clear the input
    setTimeout(() => {
        document.getElementById('subscriptionModal').style.display = 'none'; // Hide the modal
    }, 2000);
}

function closeModal() {
    const modal = document.getElementById('subscriptionModal');
    modal.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    // Activate all tooltips on the page
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
});

// setTimeout(() => {
//     const width = 420;
//     const height = 260;

//     // Calculate the center position
//     const screenWidth = window.screen.width;
//     const screenHeight = window.screen.height;

//     const left = (screenWidth - width) / 2;
//     const top = (screenHeight - height) / 2;
//     window.open("subscribe.html", "", `width=${width},height=${height},left=${left},top=${top}`);
// }, 2000);

function openReference(){
    let ref = document.getElementById('referrence').value;
    window.open(ref, "_blank");
}