import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";

function Footer() {
  return (
    <footer className="font-courierPrime bg-transparent text-center bottom-0 w-full mt-16">
      <div className="container mx-auto p-6">
        <p className="text-xs">
          &copy; 2023. "GreeneryCo" was created to support the Medium article:
          "React-ing to accessibility: Building inclusive e-commerce forms that
          everyone can use."
        </p>
        <div className="flex justify-center mt-4 space-x-4">
          <a
            href="https://github.com/MartaBento"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/marta-bento/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={16} />
          </a>
          <a
            href="https://martafbento.medium.com/react-ing-to-accessibility-building-accessible-e-commerce-forms-that-everyone-can-use-9713daf7ba69"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMedium size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
