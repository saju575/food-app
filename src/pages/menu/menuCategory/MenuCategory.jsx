import MenuCard from "../../../components/menuCard/MenuCard";
import OrderButton from "../../../components/odrerButton/OrderButton";
import Cover from "../../../shared/cover/Cover";

// This component represents a category of menu items with an optional cover and a list of menu cards.
const MenuCategory = ({ items, title, subText, coverImg, titleStyle }) => {
  return (
    <div>
      {/* Render cover with title, description, and image if title is provided */}
      {title && (
        <Cover
          title={title}
          description={subText}
          img={coverImg}
          titleStyle={titleStyle}
        />
      )}
      <div className="container mx-auto px-2 py-8">
        {/* Grid layout for menu items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-6">
          {/* Map through items and render MenuCard component for each menu item */}
          {items.map((item) => (
            <MenuCard key={item._id} menuItem={item} />
          ))}
        </div>
        <div className="flex justify-center">
          {/* Order prompt */}
          <OrderButton btnTxt="Order your favourite food" />
        </div>
      </div>
    </div>
  );
};

export default MenuCategory;
