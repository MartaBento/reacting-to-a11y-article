import NavbarImage from "./NavbarImage";
import NavbarLink from "./NavbarLink";
import companyLogo from "../../../assets/navbar/GreeneryLogo.png";
import ShoppingCart from "./ShoppingCart";

import { FaBars } from "react-icons/fa";

function Navbar() {
  return (
    <header>
      <nav className="bg-brunswickGreen w-full h-16 z-50">
        <div className="container mx-auto px-2">
          <div className="flex justify-between items-center py-4">
            <div
              className="flex items-center"
              aria-label="Logo & Name of the company"
            >
              <NavbarImage
                imageSrc={companyLogo}
                imageAlt="Logo for the Greenery Co."
              />
              <span className="text-white text-2xl font-courierPrime">
                Greenery Co.
              </span>
            </div>
            <FaBars size={16} className="text-white md:hidden" />
            <ul
              className="hidden md:flex space-x-6"
              aria-label="Navigation Bar for the website"
            >
              <NavbarLink
                href="#"
                name="About"
                role="button"
                ariaLabel="Return to the top of the page"
              />
              <NavbarLink
                href="#"
                name="Shop Plants"
                role="button"
                ariaLabel="Shop more plants"
              />
              <ShoppingCart itemCount={2} />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
