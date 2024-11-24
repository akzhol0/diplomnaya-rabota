import { useState } from "react";

const Header = () => {
  const [modal, setModal] = useState(false);
  const [modalMobile, setModalMobile] = useState(false);
  const [burger, setBurger] = useState(false);

  return (
    <div className="sticky top-0 w-full h-[70px] flex justify-center items-center bg-[#FBFBFD] border-b z-50">
      <div className="w-[1600px] relative px-4 md:px-8 flex justify-between">
        <p className="brand text-[40px] font-bold text-[#2b2b2b] cursor-pointer">
          Dastan
        </p>
        <ul className="hidden lg:flex items-center justify-between lg:gap-6 z-60 text-lg whitespace-nowrap">
          <li
            onMouseEnter={() => setModal(true)}
            onMouseLeave={() => setModal(false)}
            className="cursor-pointer border-b border-white hover:border-black duration-200"
          >
            Технологии
          </li>
          <li
            onMouseEnter={() => setModal(true)}
            onMouseLeave={() => setModal(false)}
            className="cursor-pointer border-b border-white hover:border-black duration-200"
          >
            Виды Аудитов
          </li>
          <li
            onMouseEnter={() => setModal(true)}
            onMouseLeave={() => setModal(false)}
            className="cursor-pointer border-b border-white hover:border-black duration-200"
          >
            Что такое Аудит?
          </li>
          <button
            className="px-8 py-2 border border-red-600 rounded cursor-pointer
            font-bold hover:bg-red-600 hover:text-white duration-200 text-red-600"
          >
            Узнать больше
          </button>
          <p className="hidden xl:block">+7 (778) 311 61-62</p>
        </ul>
        <div
          onClick={() => setBurger(!burger)}
          className="w-[30px] h-[30px] mt-4 flex lg:hidden flex-col items-center justify-between cursor-pointer"
        >
          <span className="w-full h-1 bg-black"></span>
          <span className="w-full h-1 bg-black"></span>
          <span className="w-full h-1 bg-black"></span>
        </div>
        {modal && (
          <div className="anim absolute top-[65px] w-full h-[300px] bg-[#1b1b1b] z-50 duration-200"></div>
        )}
        {burger && (
          <div className="absolute top-[65px] left-0 w-full min-h-[10px] bg-white">
            <ul className="flex lg:hidden py-4 items-center justify-center gap-2 sm:gap-8 text-base sm:text-lg whitespace-nowrap">
              <li
                onMouseEnter={() => setModalMobile(true)}
                onMouseLeave={() => setModalMobile(false)}
                className="cursor-pointer border-b border-white hover:border-black duration-200"
              >
                Технологии
              </li>
              <li
                onMouseEnter={() => setModalMobile(true)}
                onMouseLeave={() => setModalMobile(false)}
                className="cursor-pointer border-b border-white hover:border-black duration-200"
              >
                Виды Аудитов
              </li>
              <li
                onMouseEnter={() => setModalMobile(true)}
                onMouseLeave={() => setModalMobile(false)}
                className="cursor-pointer border-b border-white hover:border-black duration-200"
              >
                Что такое Аудит?
              </li>
            </ul>
            {modalMobile && (
              <div className="anim absolute w-full h-[400px] bg-[#1b1b1b] top-[56px]"></div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
