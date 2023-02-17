import icon5 from "../images/Vector.png";
export default function About() {
  return (
    <div className="flex flex-col">
      <div className="bg-aboutBgColor flex flex-col items-center justify-center h-600">
        <h1 className="text-headingColor text-7xl font-bold w-4/5 text-center">
          We are always here for you, Welcome to Money in minutes
        </h1>
        <p className="text-2xl font-normal w-1/2 text-center mt-8">
          We are geared towards supporting individuals and businesses by
          providing access to credit when and how they need it.
        </p>
      </div>
      <div className="bg-aboutImage h-600 bg-cover bg-no-repeat flex justify-center items-start">
        <button className="flex gap-5 items-center text-white bg-primaryBg py-4 px-8 font-bold -mt-8">
          All Our Products
          <img src={icon5} alt="" />
        </button>
      </div>
    </div>
  );
}
