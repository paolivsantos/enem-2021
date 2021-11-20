// snippet
(() => {
  const $addFragment = document.querySelector('[ng-click="addFragment()"]')

  console.log('criando as 180 questões')

  let question = 2

  const fillData = () => {
    const respostaQuestao = [...document.querySelectorAll('[data-key="respostaQuestao"]')].reverse()[0]
    respostaQuestao.value = '-'

    const numeroQuestao = [...document.querySelectorAll('[data-key="numeroQuestao"]')].reverse()[0]
    numeroQuestao.value = question - 1

    const categoriaQuestao = [...document.querySelectorAll('[data-key="categoriaQuestao"]')].reverse()[0]
    categoriaQuestao.value = (numeroQuestao.value <= 180) ? 'Matemática e suas Tecnologias' : ''
    categoriaQuestao.value = (numeroQuestao.value <= 135) ? 'Ciências da Natureza e suas Tecnologias' : categoriaQuestao.value
    categoriaQuestao.value = (numeroQuestao.value <= 90) ? 'Ciências Humanas e suas Tecnologias' : categoriaQuestao.value
    categoriaQuestao.value = (numeroQuestao.value <= 45) ? 'Linguagens, Códigos e suas Tecnologias' : categoriaQuestao.value
    categoriaQuestao.value = (numeroQuestao.value <= 5) ? 'Língua Estrangeira' : categoriaQuestao.value
  }

  const iQuestions = setInterval(() => {
    fillData()

    if (question === 181) {
      clearInterval(iQuestions)
      fillData()
      return false
    }

    $addFragment.click()
    question++
  }, 0)
})()