import { Swiper, SwiperSlide } from "swiper/react";

// Importing Swiper styles and modules
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

import ReviewCard from "../../../components/reviewCard/ReviewCard";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import { useGetReviewsQuery } from "../../../features/client/review/reviewApi";

const Testimonial = () => {
  // Fetching reviews data
  const {
    data: reviews,
    isLoading,
    isError,
    error: errorMsg,
  } = useGetReviewsQuery();

  // Determining content to render based on loading and error states
  let content;
  if (isLoading) {
    content = <p className="text-center text-lg">Loading...</p>;
  } else if (!isLoading && isError) {
    content = <p className="text-center text-red-400 text-lg">{errorMsg}</p>;
  } else if (!isLoading && reviews.length === 0) {
    content = <p className="text-center text-lg">No Review</p>;
  } else if (!isLoading && reviews && reviews.length > 0) {
    content = reviews.map((r) => (
      <SwiperSlide key={r._id}>
        <ReviewCard review={r} />
      </SwiperSlide>
    ));
  }

  return (
    <section className="py-14">
      <div className="container mx-auto px-4">
        {/* Section title */}
        <SectionTitle
          heading="testimonials"
          subHeading="What our clients say"
        />

        {/* Swiper component for testimonials */}
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          centeredSlides
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation, Autoplay]}
        >
          {content}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
