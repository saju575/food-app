import styles from "./Cover.module.css";

const Cover = ({
  img,
  title,
  description,
  titleStyle = "",
  textStyle = "",
}) => {
  return (
    <div
      className={`${styles.cover} hero`}
      style={{ backgroundImage: `url("${img}")` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-white">
        <div className="py-12 px-16 sm:py-20 sm:px-40 bg-[#000000] bg-opacity-30">
          <h1 className={`${titleStyle} mb-5`}>{title}</h1>
          <p className={`${textStyle} mb-5`}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
