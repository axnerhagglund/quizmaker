import React from 'react'
import QuizQuestion, { type QuizItem } from '../../components/QuizQuestion/QuizQuestion'
import { createQuestion } from '../../service/fetchQuestions.ts';

function MakeQuizPage() {
    async function  handleSubmit(item: QuizItem): Promise<void>{
        try{
            const { id } = await createQuestion(item)
            console.log("saved id" ,id)
        } catch(err){
            console.error(err)
        }
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