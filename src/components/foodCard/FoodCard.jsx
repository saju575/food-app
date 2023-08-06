import img from "../../assets/menu/salad-bg.jpg";

const FoodCard = () => {
  return (
    <div className="card card-compact md:w-[300px] rounded-sm bg-base-100 shadow-xl">
      <figure>
        <img className="relative" src={img} alt="Shoes" />
        <div className="absolute top-3 right-4 badge badge-info gap-2">
          <span>$16.6</span>
        </div>
      </figure>
      <div className="card-body bg-slate-100 items-center">
        <h2 className="card-title">Caeser Salad</h2>
        <p className="text-center">
          Lettuce, Eggs, Parmesan Cheese, Chicken, Breast Fillets
        </p>
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
