import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import MyProperties from './pages/MyProperties';
import Notification from './pages/Notification';
import Profile from './pages/Profile';
import Register from './pages/Register';
import TopListing from './pages/TopListing';



function App(){
    return(
        <Router>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/myproperties" element={<MyProperties />} />
                <Route path="/notification" element={<Notification />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/register" element={<Register />} />
                <Route path="/topListing" element={<TopListing />} />
            </Routes>
        </Router>
    )
}

export default App;