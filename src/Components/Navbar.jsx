import Logo from "../assets/Logo.png";
import { navItems } from "../constants";
import { RxHamburgerMenu } from "react-icons/rx";

import { BiSolidChevronDown } from "react-icons/bi";

function Navbar() {
  return (
    <nav className="flex items-center justify-between sm:container">
      <div className="flex items-center gap-4">
        <img
          src={Logo}
          alt="swiggy logo"
          className="w-14 lg:w-24 hover:scale-110 hover:cursor-pointer transition-scale ease-in duration-200"
        />
        <div className="hidden lg:flex items-center gap-2 cursor-pointer group">
          <h4 className="group-hover:text-[#ff6600] font-bold border-b-2 border-black group-hover:border-[#ff6600] text-sm">
            Other
          </h4>
          <h4 className="group-hover:text-[#A2A4AC] text-sm whitespace-nowrap">
            Pune, Maharashtra, India
          </h4>
          <BiSolidChevronDown color="#ff6600" />
        </div>
      </div>
      <div>
        <ul className="hidden lg:flex items-center gap-12">
          {navItems.map((item) => (
            <li
              className="flex items-center gap-2 font-semibold text-[#494949] text-base cursor-pointer hover:text-[#ff6600] whitespace-nowrap"
              key={item.id}
            >
              {item.icon}
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center lg:hidden">
        <RxHamburgerMenu size={25} />
      </div>
    </nav>
  );
}
export default Navbar;
