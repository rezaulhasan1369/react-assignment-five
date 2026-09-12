import { ToastContainer } from "react-toastify";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TechnologySection from "./components/TechnologySection";



function App() {
  return (
    <>
      <Navbar />

<main>
  <Hero />
  <TechnologySection />
</main>

      <ToastContainer position="top-right" autoClose={2500} />
    </>
  );
}

export default App;