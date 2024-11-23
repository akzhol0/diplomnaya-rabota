import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import "./assets/styles/global.css";
import Parallax from "./components/parallax/Parallax.jsx";

function App() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Header />
      <div className="w-full flex flex-col justify-start items-center z-10">
        <div className="w-full bgbgbg h-[800px] flex items-center bg-white"></div>
        <div className="absolute z-1 left-0 top-[30%] text-[30px] px-2 md:ps-[10%] font-bold text-[#2b2b2b]">
          <p>Разработка веб-приложения для</p>
          <div>
            проведения
            <label className="text-[#C63031]"> аудита информационной</label>
          </div>
          <p>безопасности на предприятии</p>
        </div>
        <div className="w-full h-[200px] bg-[#1b1b1b]"></div>
        <Parallax />
      </div>
      <Footer />
    </div>
  );
}

export default App;
