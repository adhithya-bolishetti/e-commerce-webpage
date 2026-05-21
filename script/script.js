const menuBtn = document.getElementById("menu-btn");
const headerList = document.querySelector(".header-list");

menuBtn.addEventListener("click", () => {
    headerList.classList.toggle("active");
});