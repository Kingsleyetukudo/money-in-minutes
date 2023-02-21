import Navbar from "./components/Navbar";
import About from "./pages/About";

function App() {
  return (
    <div className="container">
      <Navbar />
      <div className="mt-10 flex flex-col gap-28">
        <About />
      </div>
    </div>
  );
}

export default App;
