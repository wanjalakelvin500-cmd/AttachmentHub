
const requestForm = document.getElementById("requestForm");
const newPasswordForm = document.getElementById("newPasswordForm");

// Show and hide password
document.querySelectorAll(".toggle").forEach(button => {
    button.addEventListener("click", () => {
        const input = document.getElementById(button.dataset.target);

        input.type = input.type === "password" ? "text" : "password";
        button.textContent = input.type === "password" ? "Show" : "Hide";
    });
});

// Demonstration only: request reset
requestForm.addEventListener("submit", event => {
    event.preventDefault();

    if (!requestForm.reportValidity()) return;

    const message = document.getElementById("requestMessage");

    message.className = "message success";
    message.textContent =
        "Email accepted for demonstration. Real reset links require Django email integration.";

    // Show the next form for frontend testing only
    requestForm.hidden = true;
    newPasswordForm.hidden = false;
});

// Demonstration only: update password
newPasswordForm.addEventListener("submit", event => {
    event.preventDefault();

    const password = document.getElementById("newPassword").value;
    const confirm = document.getElementById("confirmPassword").value;
    const message = document.getElementById("updateMessage");

    message.className = "message";

    if (password.length < 8) {
        message.textContent = "Password must have at least 8 characters.";
        message.classList.add("error");
        return;
    }

    if (password !== confirm) {
        message.textContent = "Passwords do not match.";
        message.classList.add("error");
        return;
    }

    message.textContent =
        "Demo completed. A real password change must be confirmed by Django using a valid, single-use reset token.";
    message.classList.add("success");
});
