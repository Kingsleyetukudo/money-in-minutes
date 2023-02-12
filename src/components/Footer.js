import logo from "../images/mim-logo.png";
const Footer = () => {
  return (
    <div className="w-90 m-auto flex flex-col gap-28">
      <div className="shadow-3xl flex w-4/5 p-10 rounded-md navBarRes:flex navBarRes:flex-wrap navBarRes:items-center navBarRes:justify-center navBarRes:mt-20 m-auto gap-10">
        <h2 className="text-2xl text-headingColor font-bold">
          Access to credit when you need it. Get money in minutes.
        </h2>
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
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex justify-between">
          <div>
            <img src={logo} alt="" className="mb-9" />
            <p className="text-lg font-normal text-headingColor">
              © Copyright, 2020. All Rights Reserved
            </p>
          </div>
          <div className="flex gap-36">
            <div>
              <h3 className="text-2xl font-semibold text-headingColor mb-8">
                Legal
              </h3>
              <p className="text-lg font-normal text-headingColor">
                Privacy policy
              </p>
              <p className="text-lg font-normal text-headingColor">
                Terms of use
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-headingColor mb-8">
                Company
              </h3>
              <p className="text-lg font-normal text-headingColor">About Us</p>
              <p className="text-lg font-normal text-headingColor">Career</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-headingColor mb-8">
                Socials
              </h3>

              <div></div>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-headingColor mb-8">
              Address
            </h3>
            <p className="text-lg font-normal text-headingColor">
              101 Obafemi Awolowo Road, Ikoyi, <br /> Victoria island, Lagos,
              Nigeria.
            </p>
          </div>
          <div className="flex gap-28">
            <div>
              <h3 className="text-2xl font-semibold text-headingColor mb-8">
                Contact
              </h3>
              <p className="text-lg font-normal text-headingColor">
                hello@moneyinminutes.ng
              </p>
              <p className="text-lg font-normal text-headingColor">
                +234 (0) 8177277277
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-headingColor mb-8">
                Support
              </h3>
              <p className="text-lg font-normal text-headingColor">Help Desk</p>
              <p className="text-lg font-normal text-headingColor">
                Contact Us
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-headingColor mb-8">
                More
              </h3>
              <p className="text-lg font-normal text-headingColor">News</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
