import Logo from "../assets/Logo.png";
import { navItems } from "../constants";

import { BiSolidChevronDown } from "react-icons/bi";

function Navbar() {
  return (
    <nav className="flex items-center justify-between container">
      <div className="flex items-center gap-4">
        <img
          src={Logo}
          alt="swiggy logo"
          height={95}
          width={95}
          className="hover:scale-110 hover:cursor-pointer transition-scale ease-in duration-200"
        />
        <div className="flex items-center gap-2 cursor-pointer group">
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
        <ul className="flex items-center gap-12">
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
    </nav>
  );
}
export default Navbar;
