import CeoMIM from "./components/CeoMIM";
import FourthHero from "./components/FourthHero";
import LandingHero from "./components/LandingHero";
import LoanInfo from "./components/LoanInfo";
import Navbar from "./components/Navbar";
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
        <h1 className="text-red-900 text-center text-5xl">Start here</h1>
      </div>
    </div>
  );
}

export default App;
