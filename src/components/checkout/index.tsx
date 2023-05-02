import CheckoutTitle from "@components/checkout/partials/CheckoutTitle";
import Divider from "@components/checkout/partials/Divider";
import ProductOverview from "@components/checkout/products/ProductOverview";

function Checkout() {
  return (
    <>
      <CheckoutTitle />
      <div className="flex flex-col-reverse md:flex-row justify-between mt-16 px-6 max-w-full">
        <div className="md:flex-grow-1 md:flex-shrink-0 md:w-3/5">
          {/* Start working here. */}
          <h1 className="font-courierPrime text-sm mt-12 md:mt-0">
            The new form will be placed here. 🚀
          </h1>
        </div>
        <div className="hidden md:flex">
          <Divider />
        </div>
        <div className="md:flex-shrink-0 md:w-2/5 md:pl-8">
          <ProductOverview />
        </div>
      </div>
    </>
  );
}

export default Checkout;
