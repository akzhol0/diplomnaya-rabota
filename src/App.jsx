import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import "./assets/styles/global.css";
import Parallax from "./components/parallax/Parallax.jsx";

function App() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Header />
      <div className="w-full flex flex-col justify-start items-center z-10">
        <Parallax />
        <div className="min-w-full h-[200px] bg-[#1b1b1b] flex items-center text-white text-3xl"></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
