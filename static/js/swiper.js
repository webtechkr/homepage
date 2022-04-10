const swiperContainer = document.querySelector('.swiper-container');
const swiperControlsContainer = document.querySelector('.swiper-controls');
const swiperControls = ['previous', 'next'];
const swiperItems = document.querySelectorAll('.swiper-item');

class Carousel {
  constructor(container, items, controls) {
    this.carouselContainer = container;
    this.carouselControls = controls;
    this.carouselArray = [...items];
  }

  // Update css classes for gallery
  updateSwiper() {
    this.carouselArray.forEach(el => {
      el.classList.remove('swiper-item-1');
      el.classList.remove('swiper-item-2');
      el.classList.remove('swiper-item-3');
    });

    this.carouselArray.slice(0, 3).forEach((el, i) => {
      el.classList.add(`swiper-item-${i+1}`);
    });
  }

  // Update the current order of the carouselArray and gallery
  setCurrentState(direction) {

    if (direction == 'controls-previous') {
      this.carouselArray.unshift(this.carouselArray.pop());
    } else {
      this.carouselArray.push(this.carouselArray.shift());
    }
    
    this.updateSwiper();
  }
 
  // Add a click event listener to trigger setCurrentState method to rearrange carousel
  useControls() {    
    document.querySelector('.swiper-controls-previous').addEventListener('click', e => {
      e.preventDefault();        
      this.setCurrentState('controls-previous');
    });
    document.querySelector('.swiper-controls-next').addEventListener('click', e => {
      e.preventDefault();        
      this.setCurrentState('controls-next');
    });    
  }
}

const swiperCarousel = new Carousel(swiperContainer, swiperItems, swiperControls);
swiperCarousel.useControls();
