/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-router-dom";
import { RiMenu3Line } from "react-icons/ri";
const Navbar = () => {

    const navlinks =<>

<li><NavLink className= " text-xl " to="/">Navlink1</NavLink></li>
<li><NavLink className= " text-xl " to="2">Navlink2</NavLink></li>
<li><NavLink className= " text-xl " to="3">Navlink3</NavLink></li>
<li><NavLink className= " text-xl " to="4">Navlink4</NavLink></li>


</>

    return (
        <div className="navbar flex items-center md:justify-evenly  w-full">
        <div className="flex justify-between items-center">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <RiMenu3Line className=" text-2xl" />
                        </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box text-black  w-52">
             {
                navlinks
             }
            </ul>
          </div>


<p>LOGO</p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-black ">
            {
                navlinks
            }
          </ul>
        </div>

      </div>
    );
};

export default Navbar;