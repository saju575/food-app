import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import Carousel styles

// Import images
import img1 from "../../../assets/home/01.jpg";
import img2 from "../../../assets/home/02.jpg";
import img3 from "../../../assets/home/03.png";
import img4 from "../../../assets/home/04.jpg";
import img5 from "../../../assets/home/05.png";
import img6 from "../../../assets/home/06.png";

const Banner = () => {
  return (
    <Carousel
      autoPlay // Enable auto play for the carousel
      infiniteLoop // Enable infinite loop for the carousel items
      interval={2000} // Set the interval for auto play (in milliseconds)
      dynamicHeight // Enable dynamic height adjustment for carousel items
      centerMode // Enable center mode to display the current item in the center
      emulateTouch // Emulate touch behavior for non-touch devices
    >
      {/* Carousel items with images */}
      <div>
        <img src={img1} alt="Banner 1" />
      </div>
      <div>
        <img src={img2} alt="Banner 2" />
      </div>
      <div>
        <img src={img3} alt="Banner 3" />
      </div>
      <div>
        <img src={img4} alt="Banner 4" />
      </div>
      <div>
        <img src={img5} alt="Banner 5" />
      </div>
      <div>
        <img src={img6} alt="Banner 6" />
      </div>
    </Carousel>
  );
};

export default Banner;
