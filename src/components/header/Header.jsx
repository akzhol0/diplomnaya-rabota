import Brand from "./Brand.jsx";

const Header = () => {
  return (
    <div className="w-full h-[700px] md:h-[800px] flex justify-center items-center background-paral">
      <div className="w-full md:w-[80%] h-full flex flex-col justify-between px-2 py-10 text-[#2b2b2b]">
        <div>
          <Brand />
          <p className="text-lg md:text-2xl">
            Ознакомительный сайт по аудиту и информационной безопасности
          </p>
        </div>
        <div>
          <p className="text-[35px] md:text-[60px] font-semibold">
            Аудит информационной <br /> безопасности
          </p>
          <hr className="w-[200px] md:w-[300px] bg-red-600 h-[2px] border-0 my-4" />
          <p className="max-w-[700px] text-[16px]">
            Аудит — это независимая проверка и анализ финансовой, операционной
            или другой деятельности организации для оценки соответствия
            стандартам, выявления ошибок, рисков или улучшения процессов и
            повышения доверия.
          </p>
          <span className="spanspan"></span>
        </div>
        <div>
          <p className="text-[12px]">
            Дипломная работа <br /> Тема: Разработка веб-приложения для
            проведения аудита информационной безопасности на предприятии <br />{" "}
            Сделал: Тобажаров Дастан
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;