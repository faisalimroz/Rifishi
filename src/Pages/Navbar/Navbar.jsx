import logo from '../../assets/rishi.jfif';
import {
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarCollapseBtn,
    NavbarContainer,
    NavbarItem,
    NavbarList,
} from "keep-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navItemDesktop = (
        <ul className="flex flex-col justify-start items-start md:flex-row md:justify-center md:items-center space-x-8 lg:space-x-10">
            <li
                className={`hover:scale-125 duration-200 border-primary cursor-pointer uppercase text-white"
                    }`}
            >
                <Link to="/">Home</Link>
            </li>
            <li
                className={`hover:scale-125 duration-200 border-primary cursor-pointer uppercase text-white"
                    }`}
            >
                <Link to="/about">About Us</Link>
            </li>
            <li
                className={`hover:scale-125 duration-200 border-primary cursor-pointer uppercase text-white"
                    }`}
            >
                <Link to="/services">Services</Link>
            </li>
 
            <li
                className={`hover:scale-125 duration-200 border-primary cursor-pointer uppercase text-white"
                    }`}
            >
                <Link to="/career">Career</Link>
            </li>
           
        </ul>
    );

    const navItemMobile = (
        <ul className="flex flex-col justify-start items-start flex-grow-0 space-x-0 w-full ">
            <li
                className={`pb-3 border-b-[1px] border-black w-full uppercase bg-white text-black`}
            >
                <Link to="/">Home</Link>
            </li>
            <li
                className={`py-3 border-b-[1px] border-black w-full uppercase bg-white text-black`}
            >
                <Link to="/about">About Us</Link>
            </li>
            <li
                className={`py-3 border-b-[1px] border-black w-full uppercase bg-white text-black`}
            >
                <Link to="/services">Services</Link>
            </li>
           
            <li
                className={`py-3 border-b-[1px] border-black w-full uppercase bg-white text-black`}
            >
                <Link to="/career">Career</Link>
            </li>
        </ul>
    );

    return (

        <Navbar
            className={`fixed z-50 border-none w-full px-5  transition-colors duration-300 font-semibold ${isScrolled
                ? "bg-blue-600 rounded-none text-white shadow-xl"
                : "bg-transparent rounded-none text-white"
                }`}
        >
            <NavbarContainer className="flex items-center justify-between w-full mx-auto">
                <NavbarBrand>
                    <img
                        src={logo}
                        alt="Logo"
                        loading="lazy"
                        className="w-[40px] rounded-full"
                    />
                </NavbarBrand>

                {/* Desktop Menu */}
                <NavbarList className="hidden lg:flex space-x-6 text-base">
                    {navItemDesktop}
                </NavbarList>

          


                {/* Mobile Menu Button */}
                <NavbarCollapseBtn />

                {/* Mobile Menu */}
                <NavbarCollapse className="lg:hidden sm:w-full">
                    <NavbarList className="flex flex-col justify-start items-start space-y-3 w-full text-base mt-3">
                        {navItemMobile}
                    </NavbarList>
                </NavbarCollapse>
            </NavbarContainer>
        </Navbar>

    );
};

export default NavBar;