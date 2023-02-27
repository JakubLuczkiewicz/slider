let activeSlideNumber = 1;

let arrowLeft = document.querySelector('.arrow-left');
let arrowRight = document.querySelector('.arrow-right');

let hideActiveSlide = () => {
    let activeElement = document.querySelector('.active');
    activeElement.classList.remove('active');
};

let changeActiveDot = () => {
    document.querySelector('.active-dot').classList.remove('active-dot')
    document.querySelector('#dot' + activeSlideNumber).classList.add('active-dot')
}

let showSlide = () => {
    hideActiveSlide();
    changeActiveDot();
    document.querySelector('#slide' + activeSlideNumber).classList.add('active');
};

let showNextSlide = () => {
    if (activeSlideNumber === 3) activeSlideNumber = 1;
    else activeSlideNumber++;
    showSlide();
};

let showPreviousSlide = () => {
    if (activeSlideNumber === 1) activeSlideNumber = 3;
    else activeSlideNumber--;
    showSlide();
};

for (let index = 1; index <= 3; index++) {
    let showSlideIndex = () => {
        activeSlideNumber = index;
        showSlide();
    }
    document.querySelector('#dot' + index).addEventListener('click', showSlideIndex);

}

arrowRight.addEventListener('click', showNextSlide);
arrowLeft.addEventListener('click', showPreviousSlide);


