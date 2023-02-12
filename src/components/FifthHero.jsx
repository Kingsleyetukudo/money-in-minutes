import icon5 from "../images/Vector.png";
const FifthHero = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="w-62 m-auto flex flex-col items-center justify-center gap-10">
        <h1 className="md:text-5xl font-bold navBarRes:text-3xl navBarRes:text-center newSmallScreen:text-xl text-headingColor">
          Our Personal Loans and Business Loans are designed to conveniently
          meet your financial needs.
        </h1>
        <div className="flex gap-5 items-center">
          <h3 className="text-xl font-bold text-emailBoxBg">Get Started</h3>
          <img src={icon5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FifthHero;
