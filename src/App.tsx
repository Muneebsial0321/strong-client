
import { Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import Execrises from "./pages/Execrises"
import Workout from "./pages/Workout"
import SideBar from "./components/SideBar"
import ExecriseCreate from "./pages/ExecriseCreate"
const App = () => {
  return (
    <>
        <SideBar/>
      <Routes>
        {/* auth routes */}
        <Route path="auth">
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* home dashboad */}
        <Route path="home">
          <Route path="" element={<Home />} />
        </Route>

        {/* exe routes */}
        <Route path="exe">
          <Route path="" element={<Execrises />} />
          <Route path="create" element={<ExecriseCreate />} />
        </Route>

        {/* Workout routes */}
        <Route path="workout">
          <Route path="" element={<Workout />} />
        </Route>


      </Routes>
    </>
  )
}

export default App