import { ToastContainer } from "react-toastify";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TechnologySection from "./components/TechnologySection";
import Footer from "./components/footer";


function App() {
  return (
    <>
      <Navbar />

<main>
  <Hero />
  <TechnologySection />
</main>

<Footer/>

      <ToastContainer position="top-right" autoClose={2500} />
    </>
  );
}

export default App;