import ProductInformation from "./ProductInformation";

function ProductOverview() {
  return (
    <>
      <h4 className="font-bold mb-8 text-lg font-courierPrime text-center underline decoration-wavy decoration-timberwolf">
        Your plant haul
      </h4>
      <div className="flex flex-row md:flex-col items-center justify-center md:space-y-8">
        <ProductInformation
          imageSrc="src/assets/products/Product1.jpg"
          altDescription="An image of a ZZ plant being held by a person"
          plantName="ZZ Plant"
          plantSpecies="Zamioculcas zamiifolia"
          quantity={1}
          price={32}
        />
        <ProductInformation
          imageSrc="src/assets/products/Product2.jpg"
          altDescription="An image of a Monstera plant being held by a person"
          plantName="Monstera"
          plantSpecies="Monstera Deliciosa"
          quantity={1}
          price={40}
        />
      </div>
      <h5 className="font-courierPrime font-bold text-sm text-center mt-12 text-brunswickGreen">
        Order Total: ${72}
      </h5>
    </>
  );
}

export default ProductOverview;
