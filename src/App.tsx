import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <main className="flex min-h-screen items-center justify-center bg-slate-100">
        <h1 className="brand-gradient-text text-4xl font-bold">
          Dev Stack
        </h1>
      </main>

      <ToastContainer position="top-right" autoClose={2500} />
    </>
  );
}

export default App;