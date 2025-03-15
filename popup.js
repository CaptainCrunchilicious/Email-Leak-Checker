document.getElementById("checkBtn").addEventListener("click", async () => {
    let email = document.getElementById("emailInput").value.trim();
    if (!email) {
        alert("Please enter a valid email.");
        return;
    }

    let hashedEmail = await sha1(email.toLowerCase());
    let apiUrl = `https://api.pwnedpasswords.com/range/${hashedEmail.substring(0, 5)}`;

    fetch(apiUrl)
        .then(response => response.text())
        .then(data => {
            let leaked = data.includes(hashedEmail.substring(5).toUpperCase());
            document.getElementById("result").innerText = leaked
                ? "Your email has been leaked! Change your passwords."
                : "Your email is safe. No need to worry.";
        })
        .catch(error => console.error("Error:", error));
});

// SHA-1 hashing function
async function sha1(str) {
    const buffer = new TextEncoder().encode(str);
    const hash = await crypto.subtle.digest("SHA-1", buffer);
    return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, "0")).join("");
}
