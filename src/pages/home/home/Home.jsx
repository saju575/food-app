import About from "../about/About";
import Banner from "../banner/Banner";
import Category from "../category/Category";
import Featured from "../featured/Featured";
import Menu from "../menu/Menu";
import Recommends from "../recommends/Recommends";
import Testimonial from "../testimonial/Testimonial";

// Home component that includes various sections of the home page
const Home = () => {
  return (
    <>
      {/* Banner section */}
      <Banner />

      {/* Category section */}
      <Category />

      {/* About section */}
      <About />

      {/* Menu section */}
      <Menu />

      {/* Recommends section */}
      <Recommends />

      {/* Featured section */}
      <Featured />

      {/* Testimonial section */}
      <Testimonial />
    </>
  );
};

export default Home;
