//import style
import styles from "./About.module.css";
// import image
// import img from '../../../assets/home/chef-service.jpg'

const About = () => {
  return (
    <section className="py-6">
      <div className={`container mx-auto ${styles.about}`}>
        <div className="flex justify-center">
          <div className="w-5/6 md:w-9/12 flex flex-col items-center bg-white px-12 py-16 my-16">
            <h4 className="uppercase text-2xl md:text-3xl mb-6">Bistro boss</h4>
            <p className="text-center sm:mx-8 md:text-base text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              molestiae aliquid architecto quia natus minima et aliquam deserunt
              cupiditate quibusdam. Reprehenderit quas temporibus nostrum iste
              quo ipsum vitae hic. Quo?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
