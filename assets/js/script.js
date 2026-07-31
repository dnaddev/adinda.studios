/* ==========================================
   ADINDA STUDIOS
   script.js
========================================== */

// ===============================
// Loading Screen
// ===============================

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(function () {

        loader.style.display = "none";

    }, 500);

});

// ===============================
// Navbar Scroll
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 80) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll("a[href^='#']").forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});

// ===============================
// Counter Animation
// ===============================

const counters = document.querySelectorAll(".counter h2");

counters.forEach(counter => {

    const target = parseInt(counter.innerText);

    let count = 0;

    const speed = target / 120;

    function updateCounter() {

        if (count < target) {

            count += speed;

            counter.innerText = Math.ceil(count) + "+";

            requestAnimationFrame(updateCounter);

        } else {

            counter.innerText = target + "+";

        }

    }

    updateCounter();

});

// ===============================
// FAQ Accordion
// ===============================

const questions = document.querySelectorAll(".faq-question");

questions.forEach(item => {

    item.addEventListener("click", function () {

        const answer = this.nextElementSibling;

        if (answer.style.display === "block") {

            answer.style.display = "none";

        } else {

            document.querySelectorAll(".faq-answer").forEach(a => {

                a.style.display = "none";

            });

            answer.style.display = "block";

        }

    });

});

// ===============================
// Scroll Reveal Animation
// ===============================

const revealElements = document.querySelectorAll(

".card,.price-card,.portfolio-item,.testi-card"

);

function reveal() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < windowHeight - 100) {

            el.style.opacity = "1";

            el.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(el => {

    el.style.opacity = "0";

    el.style.transform = "translateY(40px)";

    el.style.transition = ".7s";

});

window.addEventListener("scroll", reveal);

reveal();

// ===============================
// Back To Top
// ===============================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topButton";

document.body.appendChild(topButton);

topButton.style.position = "fixed";

topButton.style.bottom = "100px";

topButton.style.right = "25px";

topButton.style.width = "55px";

topButton.style.height = "55px";

topButton.style.border = "none";

topButton.style.borderRadius = "50%";

topButton.style.background = "#c8a96a";

topButton.style.color = "#111";

topButton.style.fontSize = "24px";

topButton.style.cursor = "pointer";

topButton.style.display = "none";

topButton.style.zIndex = "999";

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.onclick = function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

// ===============================
// Booking WhatsApp
// ===============================

function kirimBooking() {

    const nama = document.getElementById("nama").value;

    const hp = document.getElementById("hp").value;

    const layanan = document.getElementById("layanan").value;

    const tanggal = document.getElementById("tanggal").value;

    const lokasi = document.getElementById("lokasi").value;

    const catatan = document.getElementById("catatan").value;

    const pesan =
`Halo Adinda Studios,

Saya ingin melakukan pemesanan.

Nama : ${nama}

No HP : ${hp}

Layanan : ${layanan}

Tanggal : ${tanggal}

Lokasi : ${lokasi}

Catatan : ${catatan}`;

    window.open(

"https://wa.me/6287770800032?text=" + encodeURIComponent(pesan),

"_blank"

    );

}