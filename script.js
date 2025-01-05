// Function to generate QR code
function generateQRCode() {
    // Clear any existing QR code
    document.getElementById("qrcode").innerHTML = "";

    // Get the text or URL entered by the user
    var text = document.getElementById("text-input").value;

    if (text) {
        // Create a new QRCode instance
        var qrcode = new QRCode(document.getElementById("qrcode"), {
            text: text,
            // width: 128,  // Width of the QR code
            // height: 128,  // Height of the QR code
        });
    } else {
        alert("Please enter a valid text or URL!");
    }
}

// Add event listener to the button
document.getElementById("generate-btn").addEventListener("click", generateQRCode);