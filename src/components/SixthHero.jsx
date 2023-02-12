import icon5 from "../images/Vector.png";

const SixthHero = () => {
  return (
    <div className="bg-bgImage h-600 bg-cover bg-no-repeat relative md:mb-40 navBarRes:h-400">
      <div className="w-full absolute -bottom-32">
        <div className="w-90 m-auto md:grid grid-cols-2 gap-10">
          <div className="bg-headingColor p-9 rounded-xl">
            <h1 className="md:text-5xl text-white font-bold navBarRes:text-2xl">
              Join us on our drive of making credit moreaccessible to
              everyone.We’re looking for greatpeople
            </h1>
          </div>
          <div className="flex gap-5 items-center place-self-center self-end pb-5 navBarRes:mt-5">
            <h3 className="text-xl font-bold text-emailBoxBg">
              Come work with us
            </h3>
            <img src={icon5} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SixthHero;
