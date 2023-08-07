import SectionTitle from "../../../components/sectionTitle/SectionTitle";

import styles from "./Featured.module.css";
// import image
import img from "../../../assets/home/featured.jpg";
const Featured = () => {
  return (
    <div className={`${styles.feature}  text-white`}>
      <section className="bg-black opacity-80 py-16">
        <SectionTitle heading="Featured Item" subHeading="Check it out" />
        <div className="py-10 container px-4 mx-auto gap-8 flex flex-col md:flex-row items-center justify-center">
          <div className="flex-1 ">
            <img src={img} alt="Album" />
          </div>
          <div className="flex-1">
            <p className="mb-2">March 20, 2023</p>
            <h2 className="mb-2 card-title">Where can I get some?</h2>
            <p className="mb-2">
              Lettuce, Eggs, Parmesan Cheese, Chicken, Breast Fillets
            </p>
            <div className="card-actions justify-start">
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
