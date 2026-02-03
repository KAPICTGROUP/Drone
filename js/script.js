// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: "smooth" });
    });
});

// Welcome alert
window.onload = function () {
    alert("Welcome to the Drone Technology Website 🚁");
};

// Scroll to top button
const topButton = document.createElement("button");
topButton.innerText = "⬆ Top";
topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.padding = "10px 15px";
topButton.style.border = "none";
topButton.style.borderRadius = "5px";
topButton.style.backgroundColor = "#2c5364";
topButton.style.color = "white";
topButton.style.cursor = "pointer";
topButton.style.display = "none";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
});

topButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
