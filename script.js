// script.js

// Functionality for generating QR codes
function generateQRCode(data) {
    const qrCodeContainer = document.getElementById('qr-code');
    qrCodeContainer.innerHTML = ''; // Clear previous QR Code
    const qrCode = new QRCode(qrCodeContainer, {
        text: data,
        width: 128,
        height: 128,
    });
}

// Form submission handling
document.getElementById('myForm').onsubmit = function(event) {
    event.preventDefault(); // Prevent default form submission
    const data = document.getElementById('inputData').value;
    generateQRCode(data); // Generate QR Code based on input
};

// Page interactions
document.addEventListener('DOMContentLoaded', function() {
    // Setup initial interactions if necessary
    console.log('Page fully loaded');
});