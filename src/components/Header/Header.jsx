import { useState } from "react";
import logo from "../../assets/images/1.png";
import { MenuIcon } from "../../assets";

function Header() {
  // State to toggle mobile menu
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Function to handle menu toggle
  const onMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 bg-white shadow-lg py-2">
      <nav className="flex justify-between w-[95%] md:w-[90%] mx-auto">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-16" />
        </div>
        <div className="flex items-center gap-3">
          <div className={`navLinks duration-500 fixed top-20 md:static md:w-auto w-full md:h-auto h-[calc(100vh-80px)] bg-white flex md:items-center gap-[1.5vw] md:top-[100%] px-5 md:py-0 py-5 ${isMenuOpen ? "left-0" : "left-[-100%]"}`}>
            <ul className="flex md:flex-row flex-col md:items-center md:gap-11 gap-8">
              <li className="relative max-w-fit pr-3 md:pr-0 py-1 group">
                <a href="/" className="relative block pb-1 font-medium">
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#2b68e0] to-[#09ddff] transition-all duration-300 group-hover:w-full content-['']"></span>
                </a>
              </li>
              <li className="relative max-w-fit pr-3 md:pr-0 py-1 group">
                <a href="/services" className="relative block pb-1 font-medium">
                  Services
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#2b68e0] to-[#09ddff] transition-all duration-300 group-hover:w-full content-['']"></span>
                </a>
              </li>
              <li className="relative max-w-fit pr-3 md:pr-0 py-1 group">
                <a href="/staffing" className="relative block pb-1 font-medium">
                  Staffing Augmentation
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#2b68e0] to-[#09ddff] transition-all duration-300 group-hover:w-full content-['']"></span>
                </a>
              </li>
              <li className="relative max-w-fit pr-3 md:pr-0 py-1 group">
                <a href="contact" className="relative block pb-1 font-medium">
                  Contact Us
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#2b68e0] to-[#09ddff] transition-all duration-300 group-hover:w-full content-['']"></span>
                </a>
              </li>

            </ul>
          </div>

          <div className="block md:hidden" name={isMenuOpen ? "close" : "menu"}
            onClick={onMenuToggle}>
            <MenuIcon />
          </div>
        </div>
      </nav>
    </header>



  );
}

export default Header;
