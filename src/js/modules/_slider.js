import Swiper from 'swiper'; 
import { Navigation, Pagination } from 'swiper/modules'; 
 
const initSlider = () => { 
    const swiper = new Swiper('.new__slider', { 
        modules: [Navigation, Pagination], 
        slidesPerView: 4, 
        spaceBetween: 20, 
 
        navigation: { 
            nextEl: '.slider__next', 
            prevEl: '.slider__prev', 
        }, 
        pagination:{
            
        }
    }); 
} 
 
export default initSlider