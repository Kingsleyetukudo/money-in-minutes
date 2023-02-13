import CeoMIM from "./components/CeoMIM";
import FifthHero from "./components/FifthHero";
import Footer from "./components/Footer";
import FourthHero from "./components/FourthHero";
import LandingHero from "./components/LandingHero";
import LoanInfo from "./components/LoanInfo";
import Navbar from "./components/Navbar";
import SixthHero from "./components/SixthHero";
import ThirdHero from "./components/ThirdHero";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="mt-10 flex flex-col gap-28">
        <LandingHero />
        <LoanInfo />
        <ThirdHero />
        <CeoMIM />
        <FourthHero />
        <FifthHero />
        <SixthHero />
        <Footer />
      </div>
    </div>
  );
}

export default App;
