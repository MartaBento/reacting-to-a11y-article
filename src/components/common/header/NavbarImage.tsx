type NavbarImageProps = {
  imageSrc: string;
  imageAlt: string;
};

function NavbarImage({ imageSrc, imageAlt }: NavbarImageProps) {
  return <img src={imageSrc} alt={imageAlt} className="me-6 w-8 h-8" />;
}

export default NavbarImage;
