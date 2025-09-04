import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import SignIn from "./Components/Auth/SignIn"
import SignUp from "./Components/Auth/SignUp"
import Dashboard from "./Components/Screens/Dashboard"
import Liked from "./Components/Screens/Liked"
import Saved from "./Components/Screens/Saved"
import Playlist from "./Components/Screens/Playlist"
import DashboardHome from "./Components/Screens/DashboardHome"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to = "/SignIn" />} />
          <Route path="/SignIn" element ={<SignIn/>}/>


          
            <Route path ='/Dashboard' element = {<Dashboard/>}>
              <Route index element = {<DashboardHome/>}/>
              <Route path ='Liked' element = {<Liked/>}/>
              <Route path ='Saved' element = {<Saved/>}/>
              <Route path ='Playlist' element = {<Playlist/>}/>
              {/* <Route path="/SignUp" element ={<SignUp/>}/> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
