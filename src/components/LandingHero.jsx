import Heropic from "../images/landing-page-hero-image.png";
import GoogleLogo from "../images/google-play-logo.png";
import AppleLogo from "../images/apple-play-logo.png";
const LandingHero = () => {
  return (
    <div className="secondNav:grid grid-cols-2 p-4">
      <div className="flex gap-7 flex-col justify-center secondNav:ml-16 navBarRes:text-center navBarRes:items-center navBarRes:p-2">
        <h1 className="md:text-7xl font-bold navBarRes:text-4xl">
          Affordable and fast loans for your needs.
        </h1>
        <p className="text-xl font-normal md:w-500">
          Borrow from as low as 1% interest a month, you don’t need to apply and
          wait, just sign up there is a loan waiting for you.
        </p>
        <div className="bg-emailBoxBg md:w-500 h-16 flex border-emailBoxBg border-2">
          <input
            type="text"
            placeholder="Email Address"
            className="bg-transparent placeholder:text-white placeholder:text-base placeholder:font-bold w-full outline-none pl-6 text-base"
          />
          <button className="bg-white h-auto w-36 text-textColor text-center font-bold text-base">
            Sign Up
          </button>
        </div>

        <div>
          <p className="text-lg font-normal mb-3">
            No-hidden fee, flexible-rate loans from ₦5,000 up to 5 Million Naira
          </p>
          <div className="flex gap-5 navBarRes:justify-center flex-wrap">
            <img src={GoogleLogo} alt="" className="w-40" />
            <img src={AppleLogo} alt="" className="w-40" />
          </div>
        </div>
      </div>
      <div className="navBarRes:mt-5">
        <img src={Heropic} alt="" />
      </div>
    </div>
  );
};

export default LandingHero;
