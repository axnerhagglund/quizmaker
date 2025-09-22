import React from 'react'
import QuizQuestion, { type QuizItem } from '../../components/QuizQuestion/QuizQuestion'

function MakeQuizPage() {
    function handleSubmit(item: QuizItem){
        console.log("saved:", item);
    }
  return (
    <>
    <section className="h-screen flex flex-col items-center justify-center bg-[#332D39]">
    <h1 className="text-4xl font-bold text-[#B9B8D3] mb-10">Make A Quiz Question</h1>
    <QuizQuestion onSubmit={handleSubmit}/>
    </section>
    </>
  )
}

export default MakeQuizPage