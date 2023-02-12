import icon1 from "../images/Group 107.png";
import icon5 from "../images/Vector.png";
import icon2 from "../images/Group 224.png";
const ThirdHero = () => {
  return (
    <div className="secondNav:grid grid-cols-2 w-90 m-auto navBarRes:flex flex-col-reverse gap-8">
      <div className="flex flex-col gap-7 justify-center   navBarRes:p-2">
        <h2 className="md:text-5xl font-bold navBarRes:text-4xl navBarRes:text-center text-headingColor">
          Money when you need it, from anywhere
        </h2>
        <p className="text-xl font-normal md:w-500 navBarRes:text-center navBarRes:w-full">
          We are committed to giving Nigerians the break they deserve when it
          comes to stress free access to affordable finance, you don’t need to
          apply and wait, we already have a loan waiting for you.
        </p>
        <ul className="flex flex-col gap-4 navBarRes:items-start navBarRes:text-left">
          <li className="text-xl font-bold flex gap-2 items-center text-headingColor">
            <img src={icon1} alt="" />
            Visit any of our platforms
          </li>
          <li className="text-xl font-bold flex gap-2 items-center text-headingColor">
            <img src={icon1} alt="" />
            Create your account
          </li>
          <li className="text-xl font-bold flex gap-2 items-center text-headingColor">
            <img src={icon1} alt="" />
            Apply for the loan you need
          </li>
          <li className="text-xl font-bold flex gap-2 items-center text-headingColor">
            <img src={icon1} alt="" />
            Your account is instantly credited
          </li>
        </ul>

        <div className="flex gap-5 items-center">
          <h3 className="text-xl font-bold text-emailBoxBg">
            Visit any of our platforms
          </h3>
          <img src={icon5} alt="" />
        </div>
      </div>

      <div className=" flex items-center justify-end relative ">
        <img src={icon2} alt="" className="rounded" />
      </div>
    </div>
  );
};

export default ThirdHero;
