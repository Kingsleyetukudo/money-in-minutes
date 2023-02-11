import logo from "../images/mim-logo.png";
import Menu from "@material-ui/icons/Menu";
const Navbar = () => {
  return (
    <header className=" w-90 m-auto">
      <nav className="flex justify-between items-center py-5 px-2">
        <img src={logo} alt="" />
        <div className="flex gap-7 text-textColor text-lg font-medium">
          <a href="#">Pay</a>
          <a href="#">Loan</a>
          <a href="#">Contact</a>
          <a href="#">About</a>
          <a href="#">Career</a>
        </div>

        <div className="flex gap-5 items-center ">
          <a href="#" className="font-medium">
            Login
          </a>
          <a
            href="#"
            className="bg-primaryBg py-1 px-4 text-white font-bold rounded-md">
            Sign Up
          </a>

          <Menu className="text-red-800 md:hidden" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
