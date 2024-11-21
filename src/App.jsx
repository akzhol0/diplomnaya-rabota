import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import "./assets/styles/global.css";
import Marquee from "./components/marquee/Marquee.jsx";

function App() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Header />
      <div className="w-full h-[1000px] flex flex-col justify-start items-center">
        <div className="w-full h-[200px] bg-[#131313] text-white overflow-hidden">
          <Marquee />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
