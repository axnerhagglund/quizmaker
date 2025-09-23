import React from 'react'


export type QuizItem = {
  question: string,
  answer: string,
  name: string
}
export type QuizQuestionProps = {
    onSubmit: (item: QuizItem) => void
}

function QuizQuestion({onSubmit}: QuizQuestionProps ) {
  const [question, setQuestion] = React.useState("")
  const [answer, setAnswer] = React.useState("")
  const [name, setName] = React.useState("")

  
  function handleSubmit(event: React.FormEvent){
    event.preventDefault();
    onSubmit({ name , question, answer })
    //nollställer svaren efter de har skickats in
    // setName("")
    setQuestion("")
    setAnswer("")
  }
  //en till form för användare?
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text"
               className="w-full
                 rounded-lg
                 border-2 border-[#B9B8D3]
                 bg-[#332D39]
                 px-4 py-2
                 text-gray-900 dark:text-gray-100
                 placeholder-gray-400 dark:placeholder-gray-500
                 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500
                 outline-none
                 transition
                            "
               placeholder="XxcoolnamexX"
               value={name}
               onChange={(event) => setName(event.target.value)}
         />
        <input type="text"
               className="w-full
                 rounded-lg
                 border-2 border-[#B9B8D3]
                 bg-[#332D39]
                 px-4 py-2
                 text-gray-900 dark:text-gray-100
                 placeholder-gray-400 dark:placeholder-gray-500
                 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500
                 outline-none
                 transition
                            "
               placeholder="Write your question"
               value={question}
               onChange={(event) => setQuestion(event.target.value)}
         />

        <input type="text"
               className="w-full
                 rounded-lg
                 border-2 border-[#B9B8D3]
                 bg-[#332D39]
                 px-4 py-2
                 text-gray-900 dark:text-gray-100
                 placeholder-gray-400 dark:placeholder-gray-500
                 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500
                 outline-none
                 transition
                            "
               placeholder="Write your answer"
               value={answer}
               onChange={(event) => setAnswer(event.target.value)}
         />
         <button  className="bg-[#B9B8D3] rounded font-bold text-[#332D39] p-3  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500
                 outline-none" type='submit'>Submit</button>
    </form>
  )
}

export default QuizQuestion