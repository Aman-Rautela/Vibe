import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import SignIn from "./Components/Auth/SignIn"
import SignUp from "./Components/Auth/SignUp"
import Dashboard from "./Components/Screens/Dashboard"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to = "/SignIn" />} />
          <Route path="/SignIn" element ={<SignIn/>}/>
          <Route path ='/Dashboard' element = {<Dashboard/>}/>
          {/* <Route path="/SignUp" element ={<SignUp/>}/> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
