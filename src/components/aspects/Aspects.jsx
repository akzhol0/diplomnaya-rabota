const Aspects = () => {
  const aspects = [
    {
      id: 1,
      title: "Прозрачность финансовой отчетности",
      desc: "Аудит помогает убедиться, что финансовые данные компании являются точными, достоверными и соответствуют установленным стандартам. Это повышает доверие со стороны инвесторов, акционеров и партнеров.",
    },
    {
      id: 2,
      title: "Соответствие законодательству и нормативам\n",
      desc: "Регулярный аудит обеспечивает соблюдение местных и международных законов, избегая штрафов и санкций.",
    },
    {
      id: 3,
      title: "Оптимизация бизнес-процессов\n",
      desc: "Аудит выявляет неэффективные операции и помогает внедрить улучшения, которые способствуют росту производительности и снижению затрат.",
    },
    {
      id: 4,
      title: "Снижение рисков и предотвращение ошибок\n",
      desc: "Благодаря аудиту выявляются потенциальные ошибки, мошенничество или слабые места в управлении. Это позволяет предотвратить финансовые и репутационные потери.",
    },
    {
      id: 5,
      title: "Доверие клиентов и партнёров\n",
      desc: "Независимый аудит подтверждает надёжность компании, что укрепляет её репутацию на рынке и повышает конкурентоспособность.",
    },
    {
      id: 6,
      title: "Подготовка к росту и привлечению инвестиций\n",
      desc: "Аудит необходим для подготовки компании к IPO, привлечению внешнего капитала или крупным сделкам. Инвесторы оценивают компании с проверенной отчетностью как более стабильные",
    },
  ];

  return (
    <div className={"flex flex-col gap-8 lg:flex-row justify-between"}>
      <p className="min-w-[300px] max-h-[50px] border-l-2 border-red-600 ps-4 py-2 text-xl">
        Важные аспекты
      </p>
      <div className="max-w-[1000px] grid grid-cols-2 gap-y-8 gap-x-4 ">
        {aspects.map((item) => (
          <div
            key={item.id}
            className={
              item.id > 0
                ? "flex flex-col gap-4 border-b-2 border-[#1b1b1b] pb-8"
                : "hidden"
            }
          >
            <p className="text-sm text-red-600 font-semibold lg:text-xl">
              {item.id}. {item.title}
            </p>
            <p className="text-sm lg:text-base text-justify	lg:text-start">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aspects;
