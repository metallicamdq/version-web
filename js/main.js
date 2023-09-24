

//Scrollers

const scrollToTop = () => {
   window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
}

const scrollToExperience = () => {
  const experience = document.getElementsByClassName("experience")[0];
  experience.scrollIntoView({behavior: 'smooth'}, true);
}

const scrollToBottom = () => {
    window.scrollTo({top:(0, document.body.scrollHeight), left:0, behavior: 'smooth'});
}




// Mobile menu

let navBarClosed = true;
// Click en button
const buttonHandler = () => {
    const navBarElements = document.getElementsByClassName('nav-bar-menu')[0];
    if(navBarClosed){
        navBarElements.classList.add('display-flex-to-top-left');
        navBarClosed = false;
    }
    else{
        navBarElements.classList.remove('display-flex-to-top-left');
        navBarClosed = true;
    }
}
// Click afuera
window.addEventListener('click', function(e){
    const navBarElements = document.getElementsByClassName('nav-bar-menu')[0];
    const navBarButton = document.getElementsByClassName('nav-bar-button')[0];
    if(!navBarElements.contains(e.target) && !navBarButton.contains(e.target)){
        navBarElements.classList.remove('display-flex-to-top-left');
        navBarClosed = true;
    }
})
// Click en una opción
const linkHandler = () => {
    const navBarElements = document.getElementsByClassName('nav-bar-menu')[0];
    navBarElements.classList.remove('display-flex-to-top-left');
    navBarClosed = true;
}




//Dark Mode Button

const btnSwitch = document.querySelectorAll('.dark-mode-switch')[0];

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');

    if(document.body.classList.contains('dark')){
        localStorage.setItem('dark-mode', 'true');
    } else{
        localStorage.setItem('dark-mode', 'false');
    }
});

if(localStorage.getItem('dark-mode') === 'true'){
    document.body.classList.add('dark');
    btnSwitch.classList.add('active');
} else {
    document.body.classList.remove('dark');
    btnSwitch.classList.remove('active');
}




// Cards Handler

function showDescription(i) {
    const allCardItems = document.querySelectorAll('.card-item-content');

    for(let e=0; e<allCardItems.length; e++){
        if(allCardItems[e].classList.contains('card-item-description')){
            allCardItems[e].classList.remove('card-item-description');
        }
    }

    const thisCardItem = document.getElementsByClassName("card-item-content")[i];
    thisCardItem.classList.add("card-item-description");

}

window.addEventListener('click', function(c){
    const allCardItems = document.querySelectorAll('.card-item-content');
    
    for(let e=0; e<allCardItems.length; e++){
        if(!allCardItems[e].contains(c.target)){
            allCardItems[e].classList.remove("card-item-description");
        }
    }

})




// Cookies

const cookiesHandler = () => {
    sessionStorage.setItem('cookies', true);
    document.getElementsByClassName("cookies")[0].style.display = "none";
}

const cookiesAdvise = () => {
    const cookiesAccepted = sessionStorage.getItem('cookies');
    if (cookiesAccepted) {
        document.getElementsByClassName("cookies")[0].style.display = "none";
    }
}

// On Load
document.addEventListener('DOMContentLoaded', cookiesAdvise);


// carousel//

function setupCustomCarousel(carouselSelector) {
    const carousels = document.querySelectorAll(carouselSelector);

    carousels.forEach((carousel) => {
        const carouselContainer = carousel.querySelector(".custom-carousel-container");
        const slides = carousel.querySelectorAll(".custom-carousel-slide");
        const controls = carousel.querySelectorAll(".custom-carousel-control");
        let currentIndex = 0;
        let interval;

        function goToSlide(index) {
            currentIndex = index;
            const offset = -currentIndex * 100;
            carouselContainer.style.transform = `translateX(${offset}%)`;

            controls.forEach((control, i) => {
                if (i === currentIndex) {
                    control.classList.add("active");
                } else {
                    control.classList.remove("active");
                }
            });
        }

        function nextSlide() {
            if (currentIndex < slides.length - 1) {
                goToSlide(currentIndex + 1);
            } else {
                goToSlide(0);
            }
        }

        function prevSlide() {
            if (currentIndex > 0) {
                goToSlide(currentIndex - 1);
            } else {
                goToSlide(slides.length - 1);
            }
        }

        function startAutoSlide() {
            interval = setInterval(nextSlide, 3000); // Cambia de slide cada 3 segundos (ajusta este valor según tus preferencias)
        }

        function stopAutoSlide() {
            clearInterval(interval);
        }

        controls.forEach((control, index) => {
            control.addEventListener("click", () => {
                if (index === 0) {
                    prevSlide();
                } else {
                    nextSlide();
                }
                stopAutoSlide();
                startAutoSlide();
            });
        });

        startAutoSlide();
        goToSlide(currentIndex);
    });
}

// Llama a la función setupCustomCarousel para configurar carruseles con la clase "custom-carousel"
setupCustomCarousel(".custom-carousel");
