import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { VscArrowSmallDown } from "react-icons/vsc";
import { Link } from "react-router-dom";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-[#2699fb] p-4">
      <div className="max-w-[1240px] flex justify-between items-center">
        <div className="text-3xl font-bold text-white">Naveed_test_app</div>

        {toggle ? (
          <AiOutlineClose
            onClick={() => setToggle(!toggle)}
            className="text-white text-3xl md:hidden block"
          />
        ) : (
          <AiOutlineMenu
            onClick={() => setToggle(!toggle)}
            className="text-white text-3xl md:hidden block "
          />
        )}

        <ul className="hidden  pt-4 md:flex gap-10 text-white">
          <Link to='/' className="text-decoration-none text-white">Home</Link>
          <Link to='/dropdown' className="text-decoration-none text-white">DropDown</Link>
          <li>About</li>
          <li>Contact</li>
          <Menu>
            <MenuHandler>
              <li variant="gradient">
                Services
                <VscArrowSmallDown />
              </li>
            </MenuHandler>
            <MenuList>
              <MenuItem>Service Item 1</MenuItem>
              <MenuItem>Service Item 2</MenuItem>
              <MenuItem>Service Item 3</MenuItem>
            </MenuList>
          </Menu>
          <li></li>
        </ul>
        {/*responsive menu */}
        <ul
          className={`duration-300 md:hidden gap-10 w-full h-screen text-white fixed bg-black left-0 top-[67px]
    ${toggle ? "left-[0%]" : "left-[-100%]"}`}
        >
          <Link to='/' className="p-5 text-white list-style-type: none;">Home</Link>
          <Link to='/dropdown' className="p-5">DropDown</Link>
          <li className="p-5">About</li>
          <li className="p-5">Contact</li>
          <li className="p-5">
            <Menu>
              <MenuHandler>
                <button variant="gradient">
                  Services
                </button>
              </MenuHandler>
              <MenuList>
                <MenuItem>Service Item 1</MenuItem>
                <MenuItem>Service Item 2</MenuItem>
                <MenuItem>Service Item 3</MenuItem>
              </MenuList>
            </Menu>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
