import Checkout from "@components/checkout/index";

function MainContainer() {
  return (
    <main
      className="flex justify-center items-center"
      aria-label="Checkout form"
    >
      <div className="flex flex-col w-3/4">
        <h1 className="text-6xl font-dongle tracking-tighter text-center leading-tight mt-8">
          Greenery Co.
        </h1>
        <h2 className="text-sm font-courierPrime text-center -mt-6 text-gray-500">
          Checkout
        </h2>
        <Checkout />
      </div>
    </main>
  );
}

export default MainContainer;
