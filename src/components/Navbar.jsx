import { useState } from "react";
import logo from "../images/mim-logo.png";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const handleMobileNav = () => {
    setToggleNav((nav) => !nav);
  };

  const closeMobileNav = () => {
    setToggleNav((nav) => !nav);
  };
  return (
    <header className=" w-90 m-auto">
      <nav className="flex justify-between items-center py-5 px-2">
        <div className="">
          <img src={logo} alt="mim-logo" className="max-[990px]:w-40" />
        </div>
        <div className="flex gap-7 text-textColor text-lg font-medium max-[990px]:hidden">
          <a href="#">Pay</a>
          <a href="#">Loan</a>
          <a href="#">Contact</a>
          <a href="#">About</a>
          <a href="#">Career</a>
        </div>

        <div className="flex gap-5 items-center max-[990px]:hidden">
          <a href="#" className="font-medium ">
            Login
          </a>
          <a
            href="#"
            className="bg-primaryBg py-1 px-4 text-white font-bold rounded-md">
            Sign Up
          </a>
        </div>
        <div className="min-[992px]:hidden">
          <i
            className="material-icons text-4xl hover:cursor-pointer"
            onClick={handleMobileNav}>
            menu
          </i>
        </div>

        {toggleNav && (
          <div className="absolute top-0 right-0 h-screen w-full bg-mobileNavBg flex justify-end">
            <div className="mobile-nav flex flex-col gap-4 bg-slate-200 shadow-lg  p-5 w-96 h-auto text-xl font-medium">
              <span className="absolute right-4" onClick={closeMobileNav}>
                <i className="material-icons text-4xl hover:cursor-pointer">
                  close
                </i>
              </span>
              <a href="#" className="menuTrans mt-8">
                Pay
              </a>
              <a href="#" className="menuTrans">
                Loan
              </a>
              <a href="#" className="menuTrans">
                Contact
              </a>
              <a href="#" className="menuTrans">
                About
              </a>
              <a href="#" className="menuTrans">
                Career
              </a>

              <a
                href="#"
                className="bg-textColor py-1 px-4 text-white text-center font-bold rounded-md mt-auto">
                Login
              </a>
              <a
                href="#"
                className="bg-primaryBg py-1 px-4 text-white text-center font-bold rounded-md mt-4">
                Sign Up
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
