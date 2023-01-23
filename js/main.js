// document.querySelectorAll(".btn-primary").classList.add("rounded-0");
let elements = document.getElementsByClassName("btn-primary");
for (let i = 0; i < elements.length; i++) {
    elements[i].classList.add("rounded-0", "text-light");

}

// left-side menu animation
let sideBarTrigger = document.getElementById("sideBarTrigger");

let sideBarTriggerAnimation = window.setInterval(() => {
    sideBarTrigger.style.animation = "side-menu-trigger-animation 0.8s ease-in-out 0s 1  ";
    window.setTimeout(() => {
        sideBarTrigger.style.animation = "";
    }, 1000)
}, 5000);


// open left-sidemenu
sideBarTrigger.addEventListener('click', () => {
    document.getElementsByClassName("sidebar2")[0].classList.add('sidebar2-show');
    window.clearInterval(sideBarTriggerAnimation);
    sideBarTrigger.style.display = "none";
});

// close left-side menu
document.body.addEventListener('click', (e) => {

    if (!e.target.classList.contains("trigger-icon") && document.getElementsByClassName("sidebar2")[0].classList.contains("sidebar2-show")) {
        document.getElementsByClassName("sidebar2")[0].classList.remove("sidebar2-show");
        sideBarTrigger.style.display = "grid";
        sideBarTrigger.style.display = "grid";
        window.setInterval(() => {
            sideBarTrigger.style.animation = "side-menu-trigger-animation 0.8s ease-in-out 0s 1  ";
            window.setTimeout(() => {
                sideBarTrigger.style.animation = "";
            }, 800)
        }, 5000);
    }
});

// scroll progress bar under navbar
window.onscroll = () => { scrollProgress() };
const scrollProgress = () => {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    navBarToggle(winScroll);
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

// reshape the navbar after a certain amount of scroll
const navBarToggle = (scrollAmount) => {
    let nav = document.getElementsByClassName("navbar")[0];
    let hero = document.getElementsByClassName("hero")[0];
    if (hero) {
        if (scrollAmount > hero.offsetHeight) {
            nav.classList.add("navbar-sm");
            nav.querySelector("a img").setAttribute('src', "./images/logo-sm.svg");
        } else {
            nav.classList.remove("navbar-sm");
            nav.querySelector("a img").setAttribute('src', "./images/group 7.svg");
        }
    } else {
        if (scrollAmount > nav.offsetHeight) {
            nav.classList.add("navbar-sm");
            nav.querySelector("a img").setAttribute('src', "./images/logo-sm.svg");
        } else {
            nav.classList.remove("navbar-sm");
            nav.querySelector("a img").setAttribute('src', "./images/group 7.svg");
        }

    }

}

// modal poper
const linkModal = (modalId) => {
    const modal = new bootstrap.Modal(modalId);
    modal.show();
}