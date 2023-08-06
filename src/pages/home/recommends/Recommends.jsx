import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import FoodCard from "../../../components/foodCard/FoodCard";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";

const Recommends = () => {
  return (
    <section className="container mx-auto pb-20 pt-4 px-3">
      <SectionTitle subHeading="Should try" heading="chef recommends" />
      <div className=" pt-6">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // slidesPerView={3}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            688: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            1100: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <FoodCard />
          </SwiperSlide>
          <SwiperSlide>
            <FoodCard />
          </SwiperSlide>
          <SwiperSlide>
            <FoodCard />
          </SwiperSlide>
          <SwiperSlide>
            <FoodCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Recommends;
