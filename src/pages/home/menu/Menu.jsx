import MenuCard from "../../../components/menuCard/MenuCard";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import { useGetMenusQuery } from "../../../features/client/menuItem/menuItemApi";

const Menu = () => {
  //fetch menu items
  const {
    data: menuItems,
    isError,
    isLoading,
    error: errorMsg,
  } = useGetMenusQuery();

  // what to render
  let render;
  if (isLoading) {
    render = <p className="flex justify-center ">Loadding...</p>;
  } else if (!isLoading && isError) {
    render = <p className="flex justify-center text-red-400">{errorMsg}</p>;
  } else if (!isLoading && menuItems && menuItems.length > 0) {
    render = (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-6">
        {
          // show only the popular menu items
          menuItems
            .filter((menuItem) => menuItem.category === "popular")
            .map((item) => (
              <MenuCard key={item._id} menuItem={item} />
            ))
        }
      </div>
    );
  }

  return (
    <section className="container mx-auto px-2 pt-8 pb-14">
      <SectionTitle heading="From our menu" subHeading="Check it out" />

      {render}

      <div className="flex justify-center">
        <p className="cursor-pointer text-center w-32 uppercase pb-2 border-b-2 text-sm md:text-base rounded border-black">
          view full menu
        </p>
      </div>

      {/* call us section */}
      <div className="bg-black py-20 my-12 flex justify-center items-center">
        <p className="text-white md:text-2xl font-medium">
          Call Us: +8801923456789
        </p>
      </div>
    </section>
  );
};

export default Menu;
