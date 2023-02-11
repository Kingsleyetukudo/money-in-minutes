import LandingHero from "./components/LandingHero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingHero />
      <h1 className="text-red-900 text-center text-5xl">Start here</h1>
    </div>
  );
}

export default App;
