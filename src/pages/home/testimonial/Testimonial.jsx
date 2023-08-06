import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

//import swipper style
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import ReviewCard from "../../../components/reviewCard/ReviewCard";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";

const Testimonial = () => {
  // state
  const [reviews, setReviews] = useState([]);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  //useEffects
  useEffect(() => {
    const review = async () => {
      setIsError(false);
      setErrorMsg("");
      try {
        const response = await fetch("./data/reviews.json");
        const reviewData = await response.json();

        setReviews(reviewData);
      } catch (error) {
        setIsError(true);
        setErrorMsg(error.message);
      }
    };
    review();
  }, [setErrorMsg, setIsError, setReviews]);

  //what to rander
  let content;
  if (isError) {
    content = <p className="text-center text-red-400 text-lg">{errorMsg}</p>;
  } else if (reviews.length === 0) {
    content = <p className="text-center text-lg">No Review</p>;
  } else if (reviews && reviews.length > 0) {
    content = reviews.map((r) => (
      <SwiperSlide key={r._id}>
        <ReviewCard review={r} />
      </SwiperSlide>
    ));
  }

  return (
    <section className="py-14">
      <div className="container mx-auto px-4">
        <SectionTitle
          heading="testimonials"
          subHeading="What our client says"
        />
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
