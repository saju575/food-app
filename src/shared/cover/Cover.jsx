import styles from "./Cover.module.css";

// Cover component that displays an image, title, and description as a hero section.
const Cover = ({
  img,
  title,
  description,
  titleStyle = "", // Custom CSS classes for title
  textStyle = "", // Custom CSS classes for description
}) => {
  return (
    <div
      className={`${styles.cover} hero`}
      style={{ backgroundImage: `url("${img}")` }}
    >
      {/* Overlay with semi-transparent background */}
      <div className="hero-overlay bg-opacity-60"></div>

      {/* Content container */}
      <div className="hero-content text-center text-white">
        {/* Inner container with padding and background */}
        <div className="py-12 px-16 sm:py-20 sm:px-40 bg-[#000000] bg-opacity-30">
          {/* Title */}
          <h1 className={`${titleStyle} mb-5`}>{title}</h1>

          {/* Description */}
          <p className={`${textStyle} mb-5`}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
