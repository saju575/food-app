import SectionTitle from "../../../components/sectionTitle/SectionTitle";

// Importing local CSS module and image
import img from "../../../assets/home/featured.jpg";
import styles from "./Featured.module.css";

const Featured = () => {
  return (
    <div className={`${styles.feature}  text-white`}>
      <section className="bg-black opacity-80 py-16">
        {/* Displaying section title for the featured item */}
        <SectionTitle heading="Featured Item" subHeading="Check it out" />

        {/* Container for the featured content */}
        <div className="py-10 container px-4 mx-auto gap-8 flex flex-col md:flex-row items-center justify-center">
          {/* Left column with the featured image */}
          <div className="flex-1">
            <img src={img} alt="Album" />
          </div>

          {/* Right column with featured item details */}
          <div className="flex-1">
            <p className="mb-2">March 20, 2023</p>
            <h2 className="mb-2 card-title">Where can I get some?</h2>
            <p className="mb-2">
              Lettuce, Eggs, Parmesan Cheese, Chicken, Breast Fillets
            </p>
            <div className="card-actions justify-start">
              {/* Button to add item to cart */}
              <button className="btn btn-outline border-0 border-b-2 rounded hover:bg-[#1F2937] text-[#e4b74b] uppercase">
                add to cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Featured;
