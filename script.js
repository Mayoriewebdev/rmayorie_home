const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", function(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        hamburger.classList.remove("active");
    });
});





const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    counter.innerText = "0";

    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = target / 100;

        if(current < target){
            counter.innerText = Math.ceil(current + increment);
            setTimeout(updateCounter, 20);
        } else{
            counter.innerText = target + "+";
        }
    };

    updateCounter();
});






