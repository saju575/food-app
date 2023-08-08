// Importing necessary assets and components
import img from "../../../assets/menu/banner3.jpg";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import { useGetMenusQuery } from "../../../features/client/menuItem/menuItemApi";
import Cover from "../../../shared/cover/Cover";
import MenuCategory from "../menuCategory/MenuCategory";

// Importing additional image
import img2 from "../../../assets/menu/dessert-bg.jpeg";

// Defining category constants
const OFFERED = "offered";
const DESSERTS = "dessert";

const Menu = () => {
  // Fetching all menu items using a query
  const {
    data: menuItems,
    isError,
    isLoading,
    error: errorMsg,
  } = useGetMenusQuery();

  // Filtering menu items for 'offered' category
  const offerdMenuItems = menuItems?.filter(
    (menuItem) => menuItem.category === OFFERED
  );

  // Filtering menu items for 'dessert' category
  const desserts = menuItems?.filter(
    (menuItem) => menuItem.category === DESSERTS
  );

  // Determining what to render based on loading and error states
  let render;
  if (isLoading) {
    render = <p className="flex justify-center ">Loading...</p>;
  } else if (!isLoading && isError) {
    render = <p className="flex justify-center text-red-400">{errorMsg}</p>;
  } else if (!isLoading && menuItems && menuItems.length > 0) {
    render = (
      <>
        <MenuCategory items={offerdMenuItems} />
        <MenuCategory
          items={desserts}
          title={"desserts"}
          titleStyle="text-2xl sm:text-3xl font-bold uppercase"
          coverImg={img2}
        />
      </>
    );
  }

  return (
    <div>
      {/* Displaying the menu cover */}
      <Cover
        img={img}
        title="Our menu"
        description="Would you like to try a dish?"
        textStyle="uppercase text-xs sm:text-sm"
        titleStyle="text-4xl sm:text-5xl font-bold uppercase"
      />

      {/* Displaying section title for today's offered items */}
      <SectionTitle heading="today's offered" subHeading="Don't miss" />

      {/* Rendering the determined content */}
      {render}
    </div>
  );
};

export default Menu;
