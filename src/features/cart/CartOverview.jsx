import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice.js";
import { formatCurrency } from "../../utils/helpers.js";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if(!totalCartQuantity) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 p-4 uppercase text-stone-200 sm:px-6">
      <p className="font-semibold text-stone-300 space-x-4 sm:space-x-6">
        <span>{totalCartQuantity}</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
