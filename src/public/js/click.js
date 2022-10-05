const items = document.querySelectorAll(".topnav a");
[...items].forEach(item => item.addEventListener("click", handle));
function handle(e) {
    [...items].forEach(item => item.classList.remove("active"));
    e.target.classList.add("active");
}