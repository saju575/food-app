const MenuCard = ({ menuItem }) => {
  return (
    <div className="flex justify-between">
      <div className="flex">
        <div className="mr-3">
          <div className="w-24 h-24 ">
            <img
              className="object-cover w-24 h-24 rounded-ss-none rounded-full"
              src={menuItem.image}
              alt={menuItem.name}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <h4 className="uppercase mb-1">{menuItem.name} -----------</h4>
          <p className="text-sm">{menuItem.recipe}</p>
        </div>
      </div>
      <div className=" text-yellow-600">${menuItem.price}</div>
    </div>
  );
};

export default MenuCard;
