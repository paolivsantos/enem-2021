export default function Header({ coresProvas, setDay }) {

  const handleDay = (e) => {
    const { currentTarget: target } = e
    setDay(target.value)
  }

  return (
    <header className="grid grid-cols-1 grid-rows-2 gap-5 lg:grid-cols-2 lg:grid-rows-1 mb-20">
      {/* Dia da Prova */}
      <div>
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

        <div className="grid grid-cols-3 grid-rows-2 gap-2">
          {coresProvas.map((cp, i) => (
            <label className="grid grid-cols-3 gap-1 items-center w-20" key={i}>
              <input type="radio" name="corProva" value={cp.cor} defaultChecked={cp.checked} />
              <span className={`block h-5 w-5 border ${cp.cor}`}></span>
              <span className="capitalize">{cp.nome}</span>
            </label>
          ))}
        </div>
      </div>
    </header>
  )
}