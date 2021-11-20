import questoesProvas from '../helpers/questoes-provas'

export default function Answers({ day }) {

  return (
    <main>
      {questoesProvas.map((q, i) => (
        <div className={`mb-14 ${day !== q.day ? 'hidden' : ''}`} data-js-day={q.day} key={`dia-${i}`}>

          <h2 className="text-2xl mb-3 pb-3 text-gray-700 font-bold">{q.title}</h2>

          <div className="inline-flex flex-wrap gap-3 w-full">
            {q.questionsRange.map((k, j) => {
              const id = k + 1
              
              return (
                <div 
                  data-js-question={id} 
                  className="w-14 h-14 flex items-center justify-between flex-col p-1 border border-gray-400 rounded" 
                  key={j} 
                >
                  <span className="text-sm">{id}</span>
                  <span className="text-base uppercase font-bold" data-js-answer>-</span>
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </main>
  )
}