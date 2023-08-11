// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <>
      <div className="md:hidden">
        <Swiper
          id="banner-swiper-sm"
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://m.media-amazon.com/images/I/61jPN0bUdjL._SR1236,1080_.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://m.media-amazon.com/images/I/51nVYKEaNTL._SR1236,1080_.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://m.media-amazon.com/images/I/71PirqOSGOL._SR1236,1080_.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://m.media-amazon.com/images/I/813ZDwq9-IL._SR1236,1080_.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://m.media-amazon.com/images/I/61LEsyQWAAL._SR1236,1080_.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* banner for tablet and desktop */}
      <div className="hidden md:block -mt-[17px] z-0">
        <Swiper
          id="banner-swiper"
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
