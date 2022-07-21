const burgerMenu = document.querySelector('.burger-menu');
const BMlist = document.querySelector('.burger-menu__list');
const menuDropDown = document.querySelector('.menu-dropdown');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle("active");
  BMlist.classList.toggle("active");
  menuDropDown.classList.toggle("active");
})

const servItem = document.querySelector('.our-services__item');

servItem.addEventListener('click' , () => {
  servItem.classList.toggle("active");
})

//slider

const sliderWrapper = document.querySelector('.slider');
const slider = document.querySelector('.slider-items');
const sliderBtnLeft = sliderWrapper.querySelector('.arrow-left');
const sliderBtnRight = sliderWrapper.querySelector('.arrow-right');
const sliderDots = sliderWrapper.querySelectorAll('.slider-dot');
const sliderItems = sliderWrapper.querySelectorAll('.slider-item');
const sliderItemSize = slider.querySelector('.slider-item').clientWidth + 30;

let sliderInProgress = false;


const setActiveItem = (index) => {
  sliderDots.forEach((dot) => dot.classList.remove('active'));
  sliderItems.forEach((item) => item.classList.remove('active'));
  sliderDots[index].classList.add('active');
  sliderItems[index].classList.add('active');
};

const slideItems = (value) => {
  if (sliderInProgress) return;

  let lastIndex = 0;
  sliderDots.forEach((dot, index) => {
    if (dot.classList.contains('active')) lastIndex = index;
  });

  if(value > 0) lastIndex++
  if(value < 0) lastIndex--
  if(lastIndex < 0) return;
  if(lastIndex > sliderDots.length - 1) return;
  
  sliderInProgress = true;
  setActiveItem(lastIndex);

  const style = window.getComputedStyle(slider);
  const matrix = new DOMMatrixReadOnly(style.transform);
  const translateX = matrix.m41;

  slider.style.transform = `translateX(${translateX - value}px)`;

  setTimeout(() => {
    sliderInProgress = false;
  }, 1000);
};

sliderBtnLeft.addEventListener('click', () => slideItems(-sliderItemSize));
sliderBtnRight.addEventListener('click', () => slideItems(sliderItemSize));


//slider2

const slider2 = document.querySelector('.works-slider');
const sliderItems2 = document.querySelectorAll('.works-photos');
const sldrBtnLeft = slider2.querySelector('.works-arrow-left');
const sldrBtnRight = slider2.querySelector('.works-arrow-right');
const sldrDots = slider2.querySelectorAll('.slider-dot');


// let slideIndex = 1;
// showSlides = slideIndex;

// function plusSlide (n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide (n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;

// }
const activeSlide = (index) => {
  sldrDots.forEach((dot) => dot.classList.remove('active'));
  sliderItems2.forEach((item) => item.classList.remove('active'));
  sldrDots[index].classList.add('active');
  sliderItems2[index].classList.add('active');
}

const newSlider = (value) => {
  if (sliderInProgress) return;

  let currentIndex = 0;
  sliderItems2.forEach((index) => {
    if(index.classList.contains('active')) currentIndex = index;
  });

  if (value > 0) currentIndex++
  if (value < 0) currentIndex--
  if(lastIndex < 0) currentIndex = sliderItems2.length -1;
  if(lastIndex > sliderDots.length - 1) return;

}




// sldrBtnRight.addEventListener('click' () => newSlider())


// const slideItems = (value) => {
//   if (sliderInProgress) return;

//   let lastIndex = 0;
//   sliderDots.forEach((dot, index) => {
//     if (dot.classList.contains('active')) lastIndex = index;
//   });

//   if(value > 0) lastIndex++
//   if(value < 0) lastIndex--
//   if(lastIndex < 0) return;
//   if(lastIndex > sliderDots.length - 1) return;
  
//   sliderInProgress = true;
//   setActiveItem(lastIndex);

//   const style = window.getComputedStyle(slider);
//   const matrix = new DOMMatrixReadOnly(style.transform);
//   const translateX = matrix.m41;

//   slider.style.transform = `translateX(${translateX - value}px)`;

//   setTimeout(() => {
//     sliderInProgress = false;
//   }, 1000);
// };