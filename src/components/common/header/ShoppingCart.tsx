import { FaShoppingCart } from "react-icons/fa";

type ShoppingCartProps = {
  itemCount: number;
};

function ShoppingCart({ itemCount }: ShoppingCartProps) {
  return (
    <li
      className="relative font-courierPrime my-auto hover:cursor-pointer"
      aria-label={`Shopping cart with ${itemCount} items`}
    >
      <FaShoppingCart size={16} className="text-white" aria-hidden />
      <span
        className="absolute bottom-2 left-4 rounded-full bg-sage h-4 w-4 text-center text-sm"
        aria-live="polite"
      >
        {itemCount}
      </span>
      <span className="sr-only">Shopping cart with {itemCount} items</span>
    </li>
  );
}

export default ShoppingCart;
