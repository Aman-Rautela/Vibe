import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import SignIn from "./Components/SignIn"
import SignUp from "./Components/SignUp"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to = "/SignIn" />} />
          <Route path="/SignIn" element ={<SignIn/>}/>
          <Route path="/SignUp" element ={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
