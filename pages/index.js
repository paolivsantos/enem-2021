import Head from 'next/head'
import { useState } from 'react'
import Answers from '../components/Answers'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Loader from '../components/Loader'
import getDiffDate from '../helpers/diff-dates'
import respostasProvas from '../helpers/respostas-prova'

export default function Home({ provas, respostas, provaEscolhida }) {
  const [day, setDay] = useState('01')
  const [answersData, setAnswersData] = useState(respostas)
  const [loading, setLoading] = useState(false)

  useState(() => {
    const diff = getDiffDate(new Date(), new Date('2021-11-28'))
    setDay(diff > 0 ? '01' : '02')
  }, [])

  return (
    <div className="block min-h-screen">
      <Head>
        <meta name="robots" content="noindex,nofollow" />
        <meta name="description" content="Acompanhe o gabarito oficial e a correção de todas as questões do Enem 2021 no R7 Educação." />
        <meta name="author" content="https://www.r7.com" />
        <meta name="publisher" content="https://www.r7.com" />
        <meta http-equiv="refresh" content="60; /" />

        <link rel="shortcut icon" type="image/vnd.microsoft.icon" href="/favicon.png" />

        <title>Correção Enem 2021 - Notícias - R7 Educação</title>
      </Head>

      <section className="container mx-auto my-5 px-8 md:py-0">
        <Header 
          provas={provas} 
          provaEscolhida={provaEscolhida} 
          day={day} 
          setDay={setDay} 
          setLoading={setLoading} 
        />

        <Answers day={day} answersData={answersData} />

        <Footer />
      </section>

      {loading && <Loader />}
    </div>
  )
}

export async function getServerSideProps(context) {
  const { query } = context
  const { cor } = query || {}

  // recupera snippet de configuração
  const res = await fetch('https://snippets.r7.com/snippet/619967ca8509f36f3900002b')
  const data = await res.json()
  const { itens: provas } = data
  
  // filtra a prova pela cor
  const provaEscolhida = cor ? provas.find(i => i.nomeProva === cor) : provas.find(i => i.provaPadrao === 'sim')
  const { snippetProva: snippet } = provaEscolhida

  // recupera as respostas cadastradas
  const resSnippet = await fetch(snippet)
  const dataSnippet = await resSnippet.json()
  const { itens: respostasSnippet } = dataSnippet

  // mescla as respostas cadastras com as respostas default
  const respostas = respostasProvas.map((r, indice) => {
    const rs = respostasSnippet.find(rs => Number(rs.numeroQuestao) === indice + 1)
    return {
      answer: rs.respostaQuestao || r.answer,
      link: rs.linkCorrecao?.text || r.link
    }
  })

  return { props: { provas, respostas, provaEscolhida } }
}
