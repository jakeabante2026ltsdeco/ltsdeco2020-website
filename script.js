/* =====================================
   ACTIVE NAVIGATION
===================================== */

const sections=[...document.querySelectorAll("section[id]")];
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if(window.scrollY>= sectionTop){
        current = section.getAttribute("id");

        if (window.scrollY > 400) {
        backTop.classList.add("show");

    } else {
        backTop.classList.remove("show");
    }
    }

});

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

/* =====================================
   BACK TO TOP BUTTON
===================================== */

const backTop = document.querySelector(".back-to-top");

/* =====================================
   GALLERY LIGHTBOX
===================================== */

const galleryImages = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.style.display = "flex";
        lightboxImg.src = image.src;
        lightboxImg.alt = image.alt;

        document.body.style.overflow = "hidden";

    });

});


/* =====================================
   CLOSE LIGHTBOX
===================================== */

function closeLightbox(){

    lightbox.style.display = "none";
    document.body.style.overflow = "auto";

}

if(closeBtn){

    closeBtn.addEventListener("click", closeLightbox);

}


/* =====================================
   CLICK OUTSIDE IMAGE
===================================== */

if (lightbox) {

    lightbox.addEventListener("click", (e) => {

        if (e.target === lightbox) {

            closeLightbox();

        }

    });

}


/* =====================================
   ESC KEY CLOSE
===================================== */

document.addEventListener("keydown",(e)=>{

    if(e.key === "Escape"){

        closeLightbox();

    }

});


/* =====================================
   CONTACT FORM
===================================== */

const contactForm = document.querySelector(".contact-form");

if(contactForm){

contactForm.addEventListener("submit", () => {

    alert("✅ Thank you for contacting LTSDECO!\n\nRedirecting...");

});

}


/* =====================================
   PREVENT EMPTY LINKS
===================================== */

document.querySelectorAll("a[href='#']").forEach(link=>{

    link.addEventListener("click",(e)=>{

        e.preventDefault();

    });

});


/* =====================================
   PAGE LOADED
===================================== */

window.addEventListener("load",()=>{

    
});
/* =====================================
   PRELOADER
===================================== */

window.addEventListener("load",()=>{

    const preloader = document.getElementById("preloader");

    if(preloader){

        preloader.style.opacity="0";
        preloader.style.visibility="hidden";

    }

});
/* ===============================
   AUTO TESTIMONIAL SLIDER
================================*/

const reviews = document.querySelectorAll(".review");

let currentReview = 0;

function showReview(index){

    reviews.forEach(review=>{
        review.style.display="none";
    });

    reviews[index].style.display="block";

}

if(reviews.length>0){

    showReview(currentReview);

    setInterval(()=>{

        currentReview++;

        if(currentReview>=reviews.length){

            currentReview=0;

        }

        showReview(currentReview);

    },4000);

}
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        menuToggle.classList.toggle("active");
        navMenu.classList.toggle("active");

    });

    document.querySelectorAll("#nav-menu a").forEach(link => {

        link.addEventListener("click", () => {

            menuToggle.classList.remove("active");
            navMenu.classList.remove("active");

        });

    });

}

/* ===============================
   ANIMATED COUNTERS
================================ */

const counters = document.querySelectorAll(".counter");

const startCounter = (counter) => {

    const target = +counter.dataset.target;
    let count = 0;
    const speed = target / 150;

    const update = () => {

        count += speed;

        if (count < target) {

            counter.innerText = Math.ceil(count);

            requestAnimationFrame(update);

        } else {

            counter.innerText = target.toLocaleString() + "+";

        }

    };

    update();

};

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            startCounter(entry.target);
            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.6
});

counters.forEach(counter => {
    observer.observe(counter);
});

/* ===============================
   PROJECT MODAL
================================ */

const projectModal = document.getElementById("projectModal");
const projectImage = document.getElementById("projectImage");
const projectClose = document.querySelector(".project-close");
const projectPrev = document.querySelector(".project-prev");
const projectNext = document.querySelector(".project-next");



const projects = {

    alstom: [
        "projects/alstom/1alstom.jpg",
        "projects/alstom/2alstom.jpg",
        "projects/alstom/3alstom.jpg",
        "projects/alstom/4alstom.jpg",
        "projects/alstom/5alstom.jpg",
        "projects/alstom/6alstom.jpg",
        "projects/alstom/7alstom.jpg",
        "projects/alstom/8alstom.jpg",
        "projects/alstom/9alstom.jpg",
        "projects/alstom/10alstom.jpg",
        "projects/alstom/11alstom.jpg",
        "projects/alstom/12alstom.jpg",
        "projects/alstom/13alstom.jpg",
        "projects/alstom/14alstom.jpg",
        "projects/alstom/15alstom.jpg",
        "projects/alstom/16alstom.jpg",
        "projects/alstom/17alstom.jpg"
        



        
    ],

    ched: [
        "projects/ched/1ched.jpg",
        "projects/ched/2ched.jpg",
        "projects/ched/3ched.jpg",
        "projects/ched/4ched.jpg",
        "projects/ched/5ched.jpg",
        "projects/ched/6ched.jpg",
        "projects/ched/7ched.jpg",
        "projects/ched/8ched.jpg",
        "projects/ched/9ched.jpg",
        "projects/ched/10ched.jpg",
        "projects/ched/11ched.jpg",
        "projects/ched/12ched.jpg",
        "projects/ched/13ched.jpg",
        "projects/ched/14ched.jpg",
        "projects/ched/15ched.jpg",
        "projects/ched/16ched.jpg",
        "projects/ched/17ched.jpg",
        "projects/ched/18ched.jpg",
        "projects/ched/19ched.jpg"

    ],

    dpwh: [
        "projects/dpwh/1dpwh.jpg",
        "projects/dpwh/2dpwh.jpg",
        "projects/dpwh/3dpwh.jpg",
        "projects/dpwh/4dpwh.jpg",
        "projects/dpwh/5dpwh.jpg",
        "projects/dpwh/6dpwh.jpg",
        "projects/dpwh/7dpwh.jpg",
        "projects/dpwh/8dpwh.jpg",
        "projects/dpwh/9dpwh.jpg",
        "projects/dpwh/10dpwh.jpg",
        "projects/dpwh/11dpwh.jpg",
        "projects/dpwh/12dpwh.jpg"
        

    ],

    tsukiden: [
        "projects/tsukiden/1tsukiden.jpg",
        "projects/tsukiden/2tsukiden.jpg",
        "projects/tsukiden/3tsukiden.jpg",
        "projects/tsukiden/4tsukiden.jpg",
        "projects/tsukiden/5tsukiden.jpg",
        "projects/tsukiden/6tsukiden.jpg",
        "projects/tsukiden/7tsukiden.jpg",
        "projects/tsukiden/8tsukiden.jpg",
        "projects/tsukiden/9tsukiden.jpg",
        "projects/tsukiden/10tsukiden.jpg",
        "projects/tsukiden/11tsukiden.jpg",
        "projects/tsukiden/12tsukiden.jpg",
        "projects/tsukiden/13tsukiden.jpg",
        "projects/tsukiden/14tsukiden.jpg",
        "projects/tsukiden/15tsukiden.jpg",
        "projects/tsukiden/16tsukiden.jpg"

    ],

    stacruz: [
        "projects/stacruz/1stacruz.jpg",
        "projects/stacruz/2stacruz.jpg",
        "projects/stacruz/3stacruz.jpg",
        "projects/stacruz/4stacruz.jpg",
        "projects/stacruz/5stacruz.jpg",
        "projects/stacruz/6stacruz.jpg",
        "projects/stacruz/7stacruz.jpg",
        "projects/stacruz/8stacruz.jpg",
        "projects/stacruz/9stacruz.jpg",
        "projects/stacruz/10stacruz.jpg",
        "projects/stacruz/11stacruz.jpg",
        "projects/stacruz/12stacruz.jpg",
        "projects/stacruz/13stacruz.jpg",
        "projects/stacruz/14stacruz.jpg",
        "projects/stacruz/15stacruz.jpg",
        "projects/stacruz/16stacruz.jpg",
        "projects/stacruz/17stacruz.jpg",
        "projects/stacruz/18stacruz.jpg",
        "projects/stacruz/19stacruz.jpg",
        "projects/stacruz/20stacruz.jpg",
        "projects/stacruz/21stacruz.jpg",
        "projects/stacruz/22stacruz.jpg",
        "projects/stacruz/23stacruz.jpg",
        "projects/stacruz/24stacruz.jpg",
        "projects/stacruz/25stacruz.jpg",
        "projects/stacruz/26stacruz.jpg",
        "projects/stacruz/27stacruz.jpg",
        "projects/stacruz/28stacruz.jpg",
        "projects/stacruz/29stacruz.jpg",
        "projects/stacruz/30stacruz.jpg",
        "projects/stacruz/31stacruz.jpg",
        "projects/stacruz/32stacruz.jpg",
        "projects/stacruz/33stacruz.jpg",
        "projects/stacruz/34stacruz.jpg",
        "projects/stacruz/35stacruz.jpg",
        "projects/stacruz/36stacruz.jpg",
        "projects/stacruz/37stacruz.jpg",
        "projects/stacruz/38stacruz.jpg",
        "projects/stacruz/39stacruz.jpg",
        "projects/stacruz/40stacruz.jpg",
        "projects/stacruz/41stacruz.jpg",
        "projects/stacruz/42stacruz.jpg",
        "projects/stacruz/43stacruz.jpg",
        "projects/stacruz/44stacruz.jpg",
        "projects/stacruz/45stacruz.jpg",
        "projects/stacruz/46stacruz.jpg",
        "projects/stacruz/47stacruz.jpg",
        "projects/stacruz/48stacruz.jpg",
        "projects/stacruz/49stacruz.jpg",
        "projects/stacruz/50stacruz.jpg",
        "projects/stacruz/51stacruz.jpg",
        "projects/stacruz/52stacruz.jpg",
        "projects/stacruz/53stacruz.jpg",
        "projects/stacruz/54stacruz.jpg",
        "projects/stacruz/55stacruz.jpg",
        "projects/stacruz/56stacruz.jpg",
        "projects/stacruz/57stacruz.jpg",
        "projects/stacruz/58stacruz.jpg",
        "projects/stacruz/59stacruz.jpg",
        "projects/stacruz/60stacruz.jpg",
        "projects/stacruz/61stacruz.jpg",
        "projects/stacruz/62stacruz.jpg",
        "projects/stacruz/63stacruz.jpg",
        "projects/stacruz/64stacruz.jpg",
        "projects/stacruz/65stacruz.jpg",
        "projects/stacruz/66stacruz.jpg",
        "projects/stacruz/67stacruz.jpg",
        "projects/stacruz/68stacruz.jpg",
        "projects/stacruz/69stacruz.jpg",
        "projects/stacruz/70stacruz.jpg",
        "projects/stacruz/71stacruz.jpg",
        "projects/stacruz/72stacruz.jpg",
        "projects/stacruz/73stacruz.jpg",
        "projects/stacruz/74stacruz.jpg",
        "projects/stacruz/75stacruz.jpg"
        
    ],

    apc: [
        "projects/apc/1apc.jpg",
        "projects/apc/2apc.jpg",
        "projects/apc/3apc.jpg",
        "projects/apc/4apc.jpg",
        "projects/apc/5apc.jpg",
        "projects/apc/6apc.jpg",
        "projects/apc/7apc.jpg",
        "projects/apc/8apc.jpg",
        "projects/apc/9apc.jpg",
        "projects/apc/10apc.jpg",
        "projects/apc/11apc.jpg",
        "projects/apc/12apc.jpg",
        "projects/apc/13apc.jpg",
        "projects/apc/14apc.jpg",
        "projects/apc/15apc.jpg",
        "projects/apc/16apc.jpg",
        "projects/apc/17apc.jpg",
        "projects/apc/18apc.jpg",
        "projects/apc/19apc.jpg",
        "projects/apc/20apc.jpg",
        "projects/apc/21apc.jpg",
        "projects/apc/22apc.jpg",
        "projects/apc/23apc.jpg",
        "projects/apc/24apc.jpg",
        "projects/apc/25apc.jpg",
        "projects/apc/26apc.jpg",
        "projects/apc/27apc.jpg",
        "projects/apc/28apc.jpg",
        "projects/apc/29apc.jpg",
        "projects/apc/30apc.jpg",
        "projects/apc/31apc.jpg",
        "projects/apc/32apc.jpg",
        "projects/apc/33apc.jpg",
        "projects/apc/34apc.jpg",
        "projects/apc/35apc.jpg",
        "projects/apc/36apc.jpg",
        "projects/apc/37apc.jpg",
        "projects/apc/38apc.jpg",
        "projects/apc/39apc.jpg",
        "projects/apc/40apc.jpg",
        "projects/apc/41apc.jpg",
        "projects/apc/42apc.jpg",
        "projects/apc/43apc.jpg"
    ],

};

    let currentProject = "";
    let currentIndex = 0;

function closeProjectModal(){

    projectModal.classList.remove("show");

    setTimeout(() => {

        projectModal.style.display = "none";

    },300);

    document.body.style.overflow = "auto";

}

function showImage(){

    

    projectImage.src = projects[currentProject][currentIndex];
    projectImage.onload=function(){

    projectImage.style.opacity="0";
    
}
    projectImage.onload=()=>{
    projectImage.style.opacity="1";
}

}

function openGallery(project){

    currentProject = project;
    currentIndex = 0;

    showImage();

    projectModal.style.display="flex";
    projectModal.classList.add("show");
    document.body.style.overflow = "hidden";

}



if(projectNext)

    projectNext.addEventListener("click", () => {
    

    currentIndex++;

    if(currentIndex >= projects[currentProject].length){
        currentIndex = 0;
    }

    showImage();

});

if(projectPrev){

    projectPrev.addEventListener("click",()=>{

        

        currentIndex--;

      if(currentIndex < 0){

    currentIndex = projects[currentProject].length - 1;

}

        showImage();

    });

}

if (projectClose) {

    projectClose.addEventListener("click", closeProjectModal);

}

if (projectModal) {

    projectModal.addEventListener("click", (e) => {

        if (e.target === projectModal) {

            closeProjectModal();

        }

    });

}

document.addEventListener("keydown", (e) => {

    // Huwag gawin kung sarado ang modal
    if (!projectModal || projectModal.style.display !== "flex") return;

    if (e.key === "Escape") {
        closeProjectModal();
    }

    if (e.key === "ArrowRight") {

        currentIndex++;

        if (currentIndex >= projects[currentProject].length) {
            currentIndex = 0;
        }

        showImage();
    }

    if (e.key === "ArrowLeft") {

        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = projects[currentProject].length - 1;
        }

        showImage();
    }

});

if(projectModal){

    projectModal.classList.remove("show");

    projectModal.style.display="none";

}



