// Importing necessary assets and components
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import { useGetMenusQuery } from "../../../features/client/menuItem/menuItemApi";
import Cover from "../../../shared/cover/Cover";
import MenuCategory from "../menuCategory/MenuCategory";

// Importing additional image
import img from "../../../assets/menu/banner3.jpg";
import img1 from "../../../assets/menu/dessert-bg.jpeg";
import img2 from "../../../assets/menu/pizza-bg.jpg";
import img3 from "../../../assets/menu/salad-bg.jpg";
import img4 from "../../../assets/menu/soup-bg.jpg";

// Defining category constants
const OFFERED = "offered";
const DESSERTS = "dessert";
const PIZZA = "pizza";
const SALADA = "salad";
const SOUPS = "soup";

const Menu = () => {
  // Fetching all menu items using a query
  const {
    data: menuItems,
    isError,
    isLoading,
    error: errorMsg,
  } = useGetMenusQuery();

  // TODO:Filtering menu items for 'offered' category
  const offerdMenuItems = menuItems?.filter(
    (menuItem) => menuItem.category === OFFERED
  );

  // TODO:Filtering menu items for 'dessert' category
  const desserts = menuItems?.filter(
    (menuItem) => menuItem.category === DESSERTS
  );

  // TODO: Filtering menu items for 'pizza' category

  const pizza = menuItems?.filter((menuItem) => menuItem.category === PIZZA);

  // TODO: Filtering menu items for 'Salad' category

  const salads = menuItems?.filter((menuItem) => menuItem.category === SALADA);

  // TODO: Filtering menu items for 'soups' category

  const soups = menuItems?.filter((menuItem) => menuItem.category === SOUPS);

  // Determining what to render based on loading and error states
  let render;
  if (isLoading) {
    render = <p className="flex justify-center ">Loading...</p>;
  } else if (!isLoading && isError) {
    render = <p className="flex justify-center text-red-400">{errorMsg}</p>;
  } else if (!isLoading && menuItems && menuItems.length > 0) {
    render = (
      <>
        {offerdMenuItems.length > 0 && <MenuCategory items={offerdMenuItems} />}
        {desserts.length > 0 && (
          <MenuCategory
            items={desserts}
            title={"desserts"}
            titleStyle="text-2xl sm:text-3xl font-bold uppercase"
            coverImg={img1}
          />
        )}
        {pizza.length > 0 && (
          <MenuCategory
            items={pizza}
            title={"Pizza"}
            titleStyle="text-2xl sm:text-3xl font-bold uppercase"
            coverImg={img2}
          />
        )}
        {salads.length > 0 && (
          <MenuCategory
            items={salads}
            title={"salads"}
            titleStyle="text-2xl sm:text-3xl font-bold uppercase"
            coverImg={img3}
          />
        )}
        {soups.length > 0 && (
          <MenuCategory
            items={soups}
            title={"soups"}
            titleStyle="text-2xl sm:text-3xl font-bold uppercase"
            coverImg={img4}
          />
        )}
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
