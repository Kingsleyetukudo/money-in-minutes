import LandingHero from "./components/LandingHero";
import LoanInfo from "./components/LoanInfo";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="mt-10">
        <LandingHero />
        <LoanInfo />
        <h1 className="text-red-900 text-center text-5xl">Start here</h1>
      </div>
    </div>
  );
}

export default App;
