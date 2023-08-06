import { useEffect, useState } from "react";
import MenuCard from "../../../components/menuCard/MenuCard";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";

const Menu = () => {
  // state
  const [menuItems, setMenuItems] = useState([]);

  //error state
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  //fetch data in useEffect

  useEffect(() => {
    const dataFetch = async () => {
      setIsError(false);
      setErrorMsg("");
      try {
        const response = await fetch("./data/menu.json");
        const data = await response.json();
        setMenuItems(data);
      } catch (error) {
        setIsError(true);
        setErrorMsg(error.message);
      }
    };
    dataFetch();
  }, [setErrorMsg, setIsError, setMenuItems]);

  // what to render
  let render;
  if (isError) {
    render = <p className="flex justify-center text-red-400">{errorMsg}</p>;
  } else if (menuItems && menuItems.length > 0) {
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
