import { ToastContainer } from "react-toastify";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
      </main>

      <ToastContainer position="top-right" autoClose={2500} />
    </>
  );
}

export default App;