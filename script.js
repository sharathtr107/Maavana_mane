document.addEventListener("DOMContentLoaded", function () {
    const btn = document.querySelector(".btn");

    btn.addEventListener("click", function () {
        alert("Order placed! Your delicious meal is on its way! 🍕🚀");
    });

    window.addEventListener("scroll", function () {
        let header = document.querySelector("header");
        header.style.background = window.scrollY > 50 ? "rgba(0,0,0,0.9)" : "rgba(255, 255, 255, 0.1)";
    });
});
