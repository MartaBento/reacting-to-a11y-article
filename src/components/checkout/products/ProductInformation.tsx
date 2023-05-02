type ProductOverviewProps = {
  imageSrc: string;
  altDescription: string;
  plantName: string;
  plantSpecies: string;
  quantity: number;
  price: number;
};

function ProductInformation({
  imageSrc,
  altDescription,
  plantName,
  plantSpecies,
  quantity,
  price,
}: ProductOverviewProps) {
  return (
    <div
      className="flex flex-col items-center justify-center font-courierPrime text-center"
      tabIndex={0}
    >
      <img alt={altDescription} src={imageSrc} className="w-24 rounded-md" />
      <p className="font-bold">{plantName}</p>
      <p className="hidden md:block text-gray-500 text-xs">{plantSpecies}</p>
      <div className="flex flex-col md:flex-row text-[10px] md:text-xs mt-4">
        <p>Quantity: {quantity} |&nbsp;</p>
        <p>${price}</p>
      </div>
    </div>
  );
}

export default ProductInformation;
