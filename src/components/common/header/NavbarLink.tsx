type NavbarLinkProps = {
  href: string;
  name: string;
  role: string;
  ariaLabel: string;
};

function NavbarLink({ href, name, role, ariaLabel }: NavbarLinkProps) {
  return (
    <li>
      <a
        href={href}
        className="font-courierPrime text-white hover:text-gray-300"
        role={role}
        aria-label={ariaLabel}
      >
        {name}
      </a>
    </li>
  );
}

export default NavbarLink;
