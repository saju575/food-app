// SectionTitle component to display a section's heading and subheading
const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center w-3/4 sm:w-2/4 md:w-4/12 my-6">
      {/* Subheading */}
      <p className="text-yellow-500 pb-1 md:text-base text-xs">
        --- {subHeading} ---
      </p>
      {/* Heading */}
      <p className="uppercase text-xl md:text-3xl border-y-4 py-3">{heading}</p>
    </div>
  );
};

export default SectionTitle;
