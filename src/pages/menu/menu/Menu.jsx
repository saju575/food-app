import img from "../../../assets/menu/banner3.jpg";

import Cover from "../../../shared/cover/Cover";

const Menu = () => {
  return (
    <div>
      <Cover
        img={img}
        title="Our menu"
        description="Would you like to try a dish?"
        textStyle="uppercase text-xs sm:text-sm"
        titleStyle="text-4xl sm:text-5xl font-bold uppercase"
      />
    </div>
  );
};

export default Menu;
