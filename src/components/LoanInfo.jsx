import icon1 from "../images/Combined-shape-218.png";
import icon2 from "../images/Combined-shape-203.png";
import icon3 from "../images/Combined-shape-208.png";
import icon4 from "../images/Combined-shape-213.png";
import woman from "../images/woman.jpg";
import icon5 from "../images/Vector.png";
const LoanInfo = () => {
  return (
    <div className="bg-loanColor py-20 flex items-end justify-end relative w-90 m-auto mt-40">
      <div className=" left-0 h-600  absolute newScreen:hidden newSmallScreen:hidden">
        <img src={woman} alt="" className="h-full" />
      </div>
      <div className="md:w-654 flex flex-col gap-12 mr-10 newSmallScreen:px-5">
        <h2 className="text-5xl font-bold newSmallScreen:text-center">
          Access more Loans with full flexibility, live well
        </h2>
        <div className="grid grid-cols-2 gap-12 ">
          <div className="loan-card">
            <div>
              <img src={icon1} alt="" />
            </div>
            <h3>No unexpected fees</h3>
            <p>
              No admin fees, no late payment fees & definetely no fees for
              paying back early.
            </p>
          </div>
          <div className="loan-card">
            <div>
              <img src={icon2} alt="" />
            </div>
            <h3>Extended hours</h3>
            <p>
              Get a loan any time with app or website available 24 hours a week,
              just when you need us
            </p>
          </div>
          <div className="loan-card">
            <div>
              <img src={icon3} alt="" />
            </div>
            <h3>Money in 5mins</h3>
            <p>
              Our loan process is easy, fast and secure. Once approved cash is
              sent to your bank account under 5 minutes
            </p>
          </div>
          <div className="loan-card">
            <div>
              <img src={icon4} alt="" />
            </div>
            <h3>Top up loan</h3>
            <p>
              Need extra cash, when you already have a loan, just apply for a
              top up loan, we have got you.
            </p>
          </div>

          <div className="flex gap-5 items-center">
            <h3 className="text-xl font-bold text-emailBoxBg">
              All Our Products
            </h3>
            <img src={icon5} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanInfo;
