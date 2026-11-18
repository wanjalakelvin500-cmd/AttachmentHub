
const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menuBtn");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
});

// Dashboard navigation
function openPage(pageName) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    const selectedPage = document.getElementById(pageName);

    if (selectedPage) {
        selectedPage.classList.add("active");
    }

    document.querySelectorAll(".nav-link").forEach(link => {
        link.classList.toggle(
            "active",
            link.dataset.page === pageName
        );
    });

    const title = document.getElementById("pageTitle");
    title.textContent = pageName.charAt(0).toUpperCase()
        + pageName.slice(1);

    sidebar.classList.remove("open");
}

document.querySelectorAll("[data-page]").forEach(element => {
    element.addEventListener("click", event => {
        event.preventDefault();
        openPage(element.dataset.page);
    });
});

// Demo student name
const demoName = "Student Name";

document.getElementById("welcomeName").textContent = demoName;
document.getElementById("sideName").textContent = demoName;

// Search opportunities
document.getElementById("searchBtn").addEventListener("click", () => {
    const search = document.getElementById("jobSearch")
        .value.toLowerCase();

    const type = document.getElementById("jobType").value.toLowerCase();

    document.querySelectorAll(".searchable").forEach(job => {
        const matchesSearch =
            job.dataset.search.includes(search);

        const matchesType =
            !type || job.textContent.toLowerCase().includes(type);

        job.style.display =
            matchesSearch && matchesType ? "flex" : "none";
    });
});

// Save opportunities in browser storage for demonstration
function renderSaved() {
    const saved = JSON.parse(localStorage.getItem("kazilinkSaved") || "[]");
    const container = document.getElementById("savedList");

    container.innerHTML = "";

    if (saved.length === 0) {
        container.innerHTML =
            '<p class="muted">No saved opportunities yet.</p>';
        return;
    }

    saved.forEach(title => {
        const item = document.createElement("div");
        item.className = "notification-item";
        item.textContent = "⭐ " + title;
        container.appendChild(item);
    });
}

document.querySelectorAll(".save-btn").forEach(button => {
    button.addEventListener("click", () => {
        const title = button.closest(".job")
            .querySelector("h4").textContent;

        const saved = JSON.parse(
            localStorage.getItem("kazilinkSaved") || "[]"
        );

        const index = saved.indexOf(title);

        if (index === -1) {
            saved.push(title);
            button.textContent = "★ Saved";
        } else {
            saved.splice(index, 1);
            button.textContent = "☆ Save";
        }

        localStorage.setItem("kazilinkSaved", JSON.stringify(saved));
        renderSaved();
    });
});

renderSaved();

// Profile demo
document.getElementById("profileForm").addEventListener("submit", event => {
    event.preventDefault();

    const name = document.getElementById("profileName").value;

    if (name.trim()) {
        document.getElementById("welcomeName").textContent = name;
        document.getElementById("sideName").textContent = name;
    }

    document.getElementById("profileMessage").textContent =
        "Profile updated in this demonstration only.";
});

// Demo logout
document.getElementById("logoutBtn").addEventListener("click", () => {
    const confirmLogout = confirm("Are you sure you want to logout?");

    if (confirmLogout) {
        window.location.href = "../auth/login.html";
    }
});
