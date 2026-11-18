
// Show and hide passwords
document.querySelectorAll(".toggle-password").forEach(button => {
    button.addEventListener("click", () => {
        const input = document.getElementById(button.dataset.target);

        if (!input) return;

        const showing = input.type === "text";
        input.type = showing ? "password" : "text";
        button.textContent = showing ? "Show" : "Hide";
    });
});

// Student registration validation
const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", event => {
        event.preventDefault();

        const password = document.getElementById("password").value;
        const confirm = document.getElementById("confirmPassword").value;
        const message = document.getElementById("registerMessage");

        message.className = "message";

        if (password.length < 8) {
            message.textContent = "Password must contain at least 8 characters.";
            message.classList.add("error");
            return;
        }

        if (password !== confirm) {
            message.textContent = "Your passwords do not match.";
            message.classList.add("error");
            return;
        }

        if (!registerForm.reportValidity()) return;

        message.textContent =
            "Form validation successful! Backend registration is not connected yet.";
        message.classList.add("success");
    });
}

// Student login validation
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", event => {
        event.preventDefault();

        const message = document.getElementById("loginMessage");

        message.className = "message";

        if (!loginForm.reportValidity()) return;

        message.textContent =
            "Form validation successful! Django login is not connected yet.";
        message.classList.add("success");
    });
}
