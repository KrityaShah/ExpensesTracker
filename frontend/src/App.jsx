import Dashboard from "./pages/Dashboard";
import Expenses from "./pages/Expenses";
import Login from "./pages/Login"
import Logout from "./pages/Logout";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
 

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<><Login/></>} />
          <Route path="/signup" element={<><Signup/></>} />
          <Route path="/dashboard" element={<><Dashboard/></>} />
          <Route path="/expenses" element={<><Expenses/></>} />
          <Route path="/profile" element={<> <Profile/></>} />
          <Route path="/logout" element={<> <Logout/></>} />
        </Routes>
      </Router>


    </>
  )
}

export default App
