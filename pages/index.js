import Head from 'next/head'
import { useState } from 'react'
import Answers from '../components/Answers'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Loader from '../components/Loader'
import coresProvas from '../helpers/cores-provas'
import getDiffDate from '../helpers/diff-dates'
import respostasProvas from '../helpers/respostas-prova'

export default function Home() {
  const [day, setDay] = useState('01')
  const [answersData, setAnswersData] = useState(respostasProvas)
  const [loading, setLoading] = useState(true)

  useState(() => {
    const diff = getDiffDate(new Date(), new Date('2021-11-28'))
    setDay(diff > 0 ? '01' : '02')

    setTimeout(() => setLoading(false), 3000)
  }, [])

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

      <section className="container mx-auto my-5 px-8 md:py-0">
        <Header coresProvas={coresProvas} day={day} setDay={setDay} />
        <Answers day={day} answersData={answersData} />
        <Footer />
      </section>

      {loading && <Loader />}
    </div>
  )
}
