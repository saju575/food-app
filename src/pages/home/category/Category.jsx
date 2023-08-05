import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// image import
import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";

const Category = () => {
  return (
    <section className="container mx-auto my-4">
      {" "}
      <SectionTitle
        heading={"Order online"}
        subHeading={"From 11.00 am to 10.00 pm"}
      />
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={4}
        // breakpoints={{
        //   760: {
        //     slidesPerView: 4,
        //   },
        // }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
          <h3 className="sm:text-2xl text-center uppercase text-white -mt-10">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
          <h3 className=" sm:text-2xl text-center uppercase text-white -mt-10">
            Pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="soup" />
          <h3 className="sm:text-2xl text-center uppercase text-white -mt-10">
            Soup
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="desert" />
          <h3 className="sm:text-2xl text-center uppercase text-white -mt-10">
            Desert
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="salads" />
          <h3 className="sm:text-2xl text-center uppercase text-white -mt-10">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
