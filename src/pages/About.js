import icon5 from "../images/Vector1.png";
import logo1 from "../images/google.png";
import logo2 from "../images/facebook.png";
import logo3 from "../images/amazon.png";
export default function About() {
  return (
    <div className="flex flex-col absolute top-0 -z-40 gap-20">
      <div>
        <div className="bg-aboutBgColor flex flex-col items-center justify-center h-400 md:h-600 pt-4 ">
          <h1 className="text-headingColor text-xl md:text-7xl font-bold md:w-4/5 text-center px-4">
            We are always here for you, Welcome to Money in minutes
          </h1>
          <p className="md:text-2xl text-base font-normal md:w-1/2 text-center mt-4 md:mt-8 px-4">
            We are geared towards supporting individuals and businesses by
            providing access to credit when and how they need it.
          </p>
        </div>
        <div className="md:bg-aboutImage md:h-600 bg-cover bg-no-repeat flex justify-center items-start ">
          <button className="flex gap-5 items-center text-white bg-primaryBg py-4 px-8 font-bold -mt-8">
            All Our Products
            <img src={icon5} alt="" />
          </button>
        </div>
      </div>
      <div className=" w-90 m-auto md:grid grid-cols-2 gap-10 md:py-10">
        <div>
          <h3 className="md:text-5xl text-xl navBarRes:text-center font-bold text-headingColor mb-3">
            We are building a future where access to finance isn’t physical but
            where you need it.
          </h3>
        </div>
        <div className="flex flex-col gap-10">
          <p className="md:text-2xl text-base font-normal navBarRes:text-center">
            we are supported by amazing partners and investors who are walking
            this path with us.
          </p>
          <div className="flex justify-between navBarRes:flex-wrap items-center gap-10 navBarRes:flex-col navBarRes:flex">
            <img src={logo1} alt="" className="w-38 h-8" />
            <img src={logo2} alt="" className="w-40 h-8" />
            <img src={logo3} alt="" className="w-40 h-8" />
          </div>
        </div>
      </div>
    </div>
  );
}
