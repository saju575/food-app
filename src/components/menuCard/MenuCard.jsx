// MenuCard component to display information about a menu item
const MenuCard = ({ menuItem }) => {
  return (
    <div className="flex justify-between">
      {/* Left side: Image and details */}
      <div className="flex">
        <div className="mr-3">
          {/* Menu item image */}
          <div className="w-24 h-24">
            <img
              className="object-cover w-24 h-24 rounded-ss-none rounded-full"
              src={menuItem.image}
              alt={menuItem.name}
            />
          </div>
        </div>
        <div className="flex flex-col">
          {/* Menu item name */}
          <h4 className="uppercase mb-1">{menuItem.name} -----------</h4>
          {/* Menu item recipe/description */}
          <p className="text-sm">{menuItem.recipe}</p>
        </div>
      </div>

      {/* Right side: Price */}
      <div className="text-yellow-600">${menuItem.price}</div>
    </div>
  );
};

export default MenuCard;
