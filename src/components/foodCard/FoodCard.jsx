import img from "../../assets/menu/salad-bg.jpg";

// FoodCard component to display information about a food item
const FoodCard = () => {
  return (
    <div className="card card-compact md:w-[300px] rounded-sm bg-base-100 shadow-xl">
      {/* Image of the food item */}
      <figure>
        <img className="relative" src={img} alt="Salad" />
        <div className="absolute top-3 right-4 badge badge-info gap-2">
          <span>$16.6</span> {/* Price badge */}
        </div>
      </figure>
      <div className="card-body bg-slate-100 items-center">
        {/* Food item title */}
        <h2 className="card-title">Caeser Salad</h2>

        {/* Food item description */}
        <p className="text-center">
          Lettuce, Eggs, Parmesan Cheese, Chicken, Breast Fillets
        </p>

        {/* Button to add the item to the cart */}
        <div className="card-actions justify-end mt-1">
          <button className="btn btn-outline border-0 border-b-2 rounded hover:bg-[#1F2937] text-[#e4b74b] uppercase">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
