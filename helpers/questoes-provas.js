export default [{
  title: 'Língua Estrangeira',
  day: '01',
  questionsRange: [...Array(180).keys()].filter(k => k >= 0 && k <= 4)
},{
  title: 'Linguagens, Códigos e suas Tecnologias',
  day: '01',
  questionsRange: [...Array(180).keys()].filter(k => k >= 5 && k <= 44)
},{
  title: 'Ciências Humanas e suas Tecnologias',
  day: '01',
  questionsRange: [...Array(180).keys()].filter(k => k >= 45 && k <= 89)
},{
  title: 'Ciências da Natureza e suas Tecnologias',
  day: '02',
  questionsRange: [...Array(180).keys()].filter(k => k >= 90 && k <= 134)
},{
  title: 'Matemática e suas Tecnologias',
  day: '02',
  questionsRange: [...Array(180).keys()].filter(k => k >= 135 && k <= 179)
}]