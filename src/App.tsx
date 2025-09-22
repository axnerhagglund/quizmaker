import Layout from "./layout/layout"
import MakeQuizPage from "./pages/Quizpage/MakeQuizPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import QuizStartPage from "./pages/QuizStartPage/QuizStartPage"
function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<QuizStartPage/>}/>
            <Route path="/quizmaker" element={<MakeQuizPage/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
