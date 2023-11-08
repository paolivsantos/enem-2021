import Router from 'next/router'

export default function Header({ provas, provaEscolhida, day, setDay, setLoading }) {

  const updateQuery = (newQuery) => {
    Router.push({
      pathname: '/',
      query: { cor: encodeURI(newQuery) },
    })

    Router.events.on('routeChangeComplete', () => {
      setLoading(true)
      window.location.reload()
    })
  };

  const handleDay = (e) => {
    const { currentTarget: target } = e
    setDay(target.value)
  }

  return (
    <header>
      {/* Patrocinador */}
      <div className="grid grid-cols-1 grid-rows-2 gap-1 sm:grid-rows-1 sm:grid-cols-2 sm:gap-5 items-center lg:grid-cols-3 border-b border-gray-300 pb-0 sm:pb-5 mb-7 sm:mb-14">
        <h1 className="w-full text-center font-bold text-gray-700 md:text-left mt-0 sm:mt-10">
          Gabarito extraoficial
        </h1>
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
            defaultValue={day}
            className="shadow border bg-white rounded w-full py-2 px-3 leading-tight max-w-md">
            <option value="01">Primeiro dia</option>
            <option value="02">Segundo dia</option>
          </select>
        </div>

        {/* Cores das Provas */}
        <div className="max-w-3xl">
          <div className="block text-gray-700 font-bold mb-2">
            Selecione a cor da sua prova
          </div>

          <div className="grid grid-cols-2 grid-rows-4 sm:grid-cols-3 sm:grid-rows-2 gap-2">
            {provas.map((prova, i) => (
              <label
                className={`grid grid-cols-3 gap-1 items-center w-20 cursor-pointer ${prova.exibirProva === 'sim' ? '' : 'hidden'} ${day === '01' && prova.disponivelPrimeiroDia !== 'sim' ? 'hidden' : ''} ${day === '02' && prova.disponivelSegundoDia !== 'sim' ? 'hidden' : ''}`}
                key={i}
                data-js-snippet={prova.snippetProva}
              >

                <input type="radio" name="corProva" value={prova.nomeProva} defaultChecked={prova.nomeProva === provaEscolhida.nomeProva} onClick={() => { updateQuery(prova.nomeProva) }} />

                <span className="block h-5 w-5 border" style={{ backgroundColor: prova.corProva }}></span>
                <span className="capitalize">{prova.nomeProva}</span>

              </label>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}