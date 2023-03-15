const openNav = document.querySelector(".open-nav");
const closeNav = document.querySelector(".close-nav");
const nav = document.querySelector("nav");
openNav.addEventListener("click", function () {
    nav.style.display = "block";
});
closeNav.addEventListener("click", function () {
    nav.style.display = "none";
});

// portfolio
const categories = Array.from(document.querySelectorAll(".categories span"));
const projects = Array.from(document.querySelectorAll(".project"));
categories.forEach(btn => {
    btn.addEventListener("click", function () {
        for(let i = 0; i < categories.length; i++) {
            categories[i].classList.remove("active");
        }
        projects.forEach(p => {
            if(p.dataset.id == this.id && this.id != "all") {
                p.classList.remove("hide");
            }else if(this.id == "all") {
                p.classList.remove("hide");
            } else {
                p.classList.add("hide");
            }
        });
        this.classList.add("active");
    });
});

// Q&A
const questions = Array.from(document.querySelectorAll(".question"));
questions.forEach(q => {
    q.addEventListener("click", function () {
        for(let i = 0; i < questions.length; i++) {
            questions[i].classList.remove("active");
        }
        if(this.classList.contains("active")) {
            this.classList.remove("active");
            console.log("has active");
        } else {
            this.classList.add("active");
            console.log("dont have active");
        }
    });
});

// go up
const goUp = document.querySelector(".go-up");
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    if(this.scrollY <= 300) {
        goUp.style.opacity = "0";
        header.style.backgroundColor = "transparent";
    } else if(this.scrollY > 300) {
        goUp.style.opacity = "1";
        header.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    }
})

// https://bootstrapmade.com/demo/KnightOne/