import React from 'react'
import Button from '../../components/buttons/Button/Button'


function QuizStartPage() {
  return (
    <>
    <section className="flex h-screen justify-center items-center flex-col gap-5 bg-[#332D39]">
        <h1 className="text-4xl font-bold text-[#B9B8D3]">Lets build a quiz!</h1>
        <Button path="/quizmaker" type="primary" size="medium">
            Now!
        </Button>
    </section>
    </>
  )
}

export default QuizStartPage