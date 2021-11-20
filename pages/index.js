import Head from 'next/head'
import coresProvas from '../helpers/cores-provas'

export default function Home() {
  return (
    <div className="block min-h-screen">
      <Head>
        <meta name="robots" content="noindex,nofollow" />
        <meta name="description" content="Acompanhe o gabarito oficial e a correção de todas as questões do Enem 2021 no R7 Educação." />
        <meta name="author" content="https://www.r7.com" />
        <meta name="publisher" content="https://www.r7.com" />

        <link rel="shortcut icon" type="image/vnd.microsoft.icon" href="/favicon.png" />

        <title>Correção Enem 2021 - Notícias - R7 Educação</title>
      </Head>

      {/* <div className="flex items-center justify-center bg-gray-100 w-screen h-screen">
        <div 
          style={{ borderTopColor: 'transparent' }} 
          className="w-16 h-16 border-4 border-blue-400 border-solid rounded-full animate-spin">
        </div>
      </div> */}

      <main className="container mx-auto my-5 px-8 md:py-0">
        <header className="grid grid-cols-1 grid-rows-2 gap-5 lg:grid-cols-2 lg:grid-rows-1">
          {/* Dia da Prova */}
          <div>
            <label htmlFor="provaDia" className="block text-gray-700 font-bold mb-2">
              Selecione o dia da sua prova
            </label>

            <select name="provaDia" id="provaDia" className="shadow border bg-white rounded w-full py-2 px-3 leading-tight max-w-md">
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
      </main>
    </div>
  )
}
