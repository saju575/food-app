import About from "../about/About";
import Banner from "../banner/Banner";
import Category from "../category/Category";
import Featured from "../featured/Featured";

import Menu from "../menu/Menu";
import Recommends from "../recommends/Recommends";
import Testimonial from "../testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Banner />
      <Category />
      <About />
      <Menu />
      <Recommends />
      <Featured />
      <Testimonial />
    </>
  );
};

export default Home;
