// === MediBook Interactivity Script ===

// Highlight active navigation link
document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname.split("/").pop();
    document.querySelectorAll("nav .nav-links a").forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});

// Basic form validation for login/signup
document.addEventListener("submit", e => {
    const form = e.target;
    if (form.matches("form[action='home.html']")) {
        e.preventDefault();

        const email = form.querySelector("input[name='email']");
        const password = form.querySelector("input[name='password']");
        const confirm = form.querySelector("input[name='Confirm']");

        if (!email.value.includes("@")) {
            alert("⚠️ Please enter a valid email address!");
            email.focus();
            return;
        }
        if (password.value.length < 6) {
            alert("⚠️ Password must be at least 6 characters long!");
            password.focus();
            return;
        }
        if (confirm && password.value !== confirm.value) {
            alert("⚠️ Passwords do not match!");
            confirm.focus();
            return;
        }

        alert("✅ Form submitted successfully!");
        window.location.href = "home.html";
    }
});

// Show footer year
const footer = document.querySelector("footer p");
if (footer) {
    footer.innerHTML = `&copy; ${new Date().getFullYear()} MediBook | All Rights Reserved.`;
}

// Random health tip on home page
if (window.location.pathname.includes("home.html")) {
    const tips = [
        "Drink water regularly throughout the day.",
        "Walk 30 minutes every morning.",
        "Limit caffeine intake for better sleep.",
        "Stretch your neck and shoulders every hour.",
        "Maintain a positive mindset and meditate daily."
    ];

    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    const tipBox = document.createElement("div");
    tipBox.className = "tip-box";
    tipBox.textContent = "💡 " + randomTip;
    document.body.appendChild(tipBox);
}
