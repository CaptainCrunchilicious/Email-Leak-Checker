chrome.runtime.onInstalled.addListener(() => {
    console.log("Email Leak Checker Extension Installed!");
});

// Function to check if an email is in a breach
async function checkEmail(email) {
    let hashedEmail = await sha1(email.toLowerCase());
    let apiUrl = `https://api.pwnedpasswords.com/range/${hashedEmail.substring(0, 5)}`;

    try {
        let response = await fetch(apiUrl);
        let data = await response.text();
        let leaked = data.includes(hashedEmail.substring(5).toUpperCase());

        if (leaked) {
            showNotification("⚠️ Email Breach Alert", "Your email has been leaked! Change your passwords.");
        } else {
            console.log("✅ No breach found for this email.");
        }
    } catch (error) {
        console.error("Error checking email:", error);
    }
}

// Show a Chrome notification
function showNotification(title, message) {
    chrome.notifications.create({
        type: "basic",
        iconUrl: "icons/icon128.png",
        title: title,
        message: message
    });
}

// Listen for messages from popup.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "checkEmail") {
        checkEmail(request.email);
        sendResponse({ status: "Checking email..." });
    }
});

// SHA-1 hashing function
async function sha1(str) {
    const buffer = new TextEncoder().encode(str);
    const hash = await crypto.subtle.digest("SHA-1", buffer);
    return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, "0")).join("");
}
