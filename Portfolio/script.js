// About Me
const aboutMe = document.getElementById('about-me');
function showAhoutMe() {
    aboutMe.classList.toggle("hidden");
}

// Fakes the loading setting a timeout
setTimeout(function () {
    document.body.classList.add("loaded");
}, 500);

// Scroll animation
ScrollReveal({
    distance: "50px",
    duration: 2000,
    delay: 150,
});

// Header Elements with delay because of the loader 
ScrollReveal().reveal("#header-info, #header-mid ul, #header-bottom",
    { origin: "top", delay: 500 }
);
ScrollReveal().reveal("#header-info h1",
    { origin: "left", delay: 500 }
);
ScrollReveal().reveal("#header-info p, #header-mid ul li",
    { origin: "right", delay: 500, interval: 150 }
);

// Other Elements
ScrollReveal().reveal("#skills ul li",
    { origin: "bottom", distance: "20px", interval: 100 }
);
ScrollReveal().reveal("#project1, #project3, #project5",
    { origin: "left" }
);
ScrollReveal().reveal("#project2, #project4, #project6",
    { origin: "right", interval: 150 }
);

