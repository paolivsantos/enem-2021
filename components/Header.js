export default function Header({ coresProvas, setDay }) {

  const handleDay = (e) => {
    const { currentTarget: target } = e
    setDay(target.value)
  }

  return (
    <header>
      {/* Patrocinador */}
      <div className="grid grid-cols-1 grid-rows-2 gap-1 sm:grid-rows-1 sm:grid-cols-2 sm:gap-5 items-center lg:grid-cols-3 border-b border-gray-300 pb-0 sm:pb-5 mb-7 sm:mb-14">
        <img 
          src="/logo.jpg" 
          alt="Logo: Colégio Anglo Leonado da Vinci" 
          title="Colégio Anglo Leonado da Vinci" 
          width="726" 
          height="289" 
          loading="lazy"
          className="w-full h-auto max-w-sm" />

        <p className="w-full text-center font-bold text-gray-700 md:text-left mt-0 sm:mt-10">
          Gabarito extraoficial feito pelos professores do Anglo Leonardo da Vinci
        </p>
      </div>

      <div className="grid grid-cols-1 grid-rows-1 sm:grid-rows-2 gap-0 sm:gap-5 lg:grid-cols-2 lg:grid-rows-1 mb-10 sm:mb-20">
        {/* Dia da Prova */}
        <div className="mb-10 sm:mb-0">
          <label htmlFor="provaDia" className="block text-gray-700 font-bold mb-2">
            Selecione o dia da sua prova
          </label>

          <select 
            name="provaDia" 
            id="provaDia" 
            onChange={handleDay}
            className="shadow border bg-white rounded w-full py-2 px-3 leading-tight max-w-md">
            <option value="01">Primeiro dia</option>
            <option value="02">Segundo dia</option>
          </select>
        </div>

        {/* Cores das Provas */}
        <div className="max-w-3xl">
          <div className="block text-gray-700 font-bold mb-2">
            Selecione o dia da sua prova
          </div>

          <div className="grid grid-cols-2 grid-rows-4 sm:grid-cols-3 sm:grid-rows-2 gap-2">
            {coresProvas.map((cp, i) => (
              <label className="grid grid-cols-3 gap-1 items-center w-20" key={i}>
                <input type="radio" name="corProva" value={cp.cor} defaultChecked={cp.checked} />
                <span className={`block h-5 w-5 border ${cp.cor}`}></span>
                <span className="capitalize">{cp.nome}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}