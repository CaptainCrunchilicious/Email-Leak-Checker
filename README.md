# 🛡️ Email Leak Checker - Chrome Extension

## 🔍 Overview
Email Leak Checker is a **privacy-focused Chrome extension** that allows users to check if their email has been compromised in a data breach. It uses the **Have I Been Pwned (HIBP) API** to scan leaked databases and alerts users about potential security risks.

---

## 📂 Repository Structure
```
📁 email-leak-checker-extension/
│── 📁 icons/             # Stores extension icons (16x16, 48x48, 128x128)
│── 📄 manifest.json      # Chrome extension configuration
│── 📄 popup.html         # UI for the extension (email input & results)
│── 📄 popup.js           # Handles user input & API requests
│── 📄 popup.css          # Styles for the extension popup
│── 📄 background.js      # Runs in the background, handles notifications & auto-checks
│── 📄 README.md          # Documentation for the repository
```

---

## ⚡ Features
✅ **Check if your email is leaked** in a data breach  
✅ **Secure & privacy-focused** – Uses SHA-1 hashing before checking  
✅ **Real-time notifications** when a leak is detected  
✅ **Lightweight & easy to use**  

---

## 🚀 How to Use
1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/email-leak-checker-extension.git
   cd email-leak-checker-extension
   ```
2. **Load the extension in Chrome:**
   - Open **Google Chrome** and go to `chrome://extensions/`
   - Enable **Developer Mode** (top-right corner)
   - Click **"Load Unpacked"** and select the cloned folder
3. **Use the extension:**
   - Click on the **extension icon** in the Chrome toolbar
   - Enter your email and click **"Check"**
   - The extension will fetch data from **HIBP API** and display the result

---

## 🛠️ Tech Stack
- **HTML, CSS, JavaScript** (Frontend)
- **Chrome Extension APIs** (Storage, Action, Notifications)
- **SHA-1 Hashing (Crypto API)** (For security)
- **Have I Been Pwned API** (For breach checks)

---

## 📌 Future Enhancements
🔹 **Auto-detect email breaches on login pages**  
🔹 **Dark mode support**  
🔹 **Support for multiple email tracking**  

---

## 🤝 Contributing
Contributions are welcome! Feel free to fork the repository and submit a pull request with improvements or new features.

---

## 📜 License
This project is licensed under the **MIT License**.

---

## 🌐 Links
- [Have I Been Pwned API](https://haveibeenpwned.com/API/v3)
- [Chrome Extension Documentation](https://developer.chrome.com/docs/extensions/)

