
// ======================================
// SMOOTH SCROLLING
// ======================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const href = this.getAttribute("href");

        if (href === "#") return;

        e.preventDefault();

        const target = document.querySelector(href);

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});

// ======================================
// CARD ANIMATION
// ======================================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

document.querySelectorAll(
    ".card,.feature-card,.category-card,.stat-card"
).forEach(item => {

    observer.observe(item);

});


// ======================================
// COMPARE BUTTONS
// ======================================

document.querySelectorAll(".compare-btn")
.forEach(button => {

    button.addEventListener("click", () => {

        alert(
            "Comparison feature will connect to backend APIs."
        );

    });

});

// ======================================
// CURRENT YEAR
// ======================================

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

// ======================================
// PAGE LOADED
// ======================================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    console.log(
        "SmartSaver Loaded Successfully"
    );

});


// ======================================
// HAMBURGER MENU
// ======================================

function toggleMenu() {

    let navLinks =
    document.getElementById("navLinks");

    navLinks.classList.toggle("active");

}

// ======================================
// FEEDBACK RESPONSE
// ======================================
function showFeedbackMessage() {

    document.getElementById("feedbackStatus")
    .innerHTML =
    "✅ Thank you for your feedback!";

    document.getElementById("feedbackStatus")
    .style.color = "#22c55e";

    document.getElementById("feedbackStatus")
    .style.marginTop = "15px";

    document.getElementById("feedbackForm")
    .reset();
}