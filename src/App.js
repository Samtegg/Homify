import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './pages/Dashboard.js';
import LandingPage from './pages/LandingPage.js';
import Login from './pages/Login.js';
import MyProperties from './pages/MyProperties.js';
import Notification from './pages/Notification.js';
import Profile from './pages/Profile.js';
import Register from './pages/Register.js';
import TopListing from './pages/TopListing.js';



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