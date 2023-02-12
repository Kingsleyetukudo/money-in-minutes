import lady from "../images/lady.png";
import man from "../images/african-man.png";
const FourthHero = () => {
  return (
    <div className="bg-headingColor md:h-400  w-100 md:relative md:mt-40">
      <div className=" md:absolute -top-40 w-full">
        <div className=" flex justify-between w-90 m-auto gap-5 items-center newScreen:flex-col newSmallScreen:flex-col newSmallScreen:gap-7 newSmallScreen:p-5">
          <div>
            <img src={lady} alt="" />
          </div>
          <div className="md:w-400 flex flex-col gap-3">
            <img src={man} alt="" />
            <p className="text-xl font-semibold text-white newSmallScreen:text-sm">
              Having MIM has my trustworthy credit partner has enabled my
              business grow, in a short time since I became a customer.
            </p>
            <p className="text-2xl font-bold text-white newSmallScreen:text-base">
              Segun - Business Owner
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthHero;
