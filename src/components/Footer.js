const Footer = () => {
  return (
    <div>
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
      <div></div>
    </div>
  );
};

export default Footer;
