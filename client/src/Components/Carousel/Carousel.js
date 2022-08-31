import { Pagination, Autoplay, EffectCoverflow } from "swiper";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Carousel = ({ children }) => {
  return (
    <Swiper
      modules={[Pagination, Autoplay, EffectCoverflow]}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 150,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      spaceBetween={30}
      slidesPerView={3}
    >
      {children}
    </Swiper>
  );
};

export default Carousel;
