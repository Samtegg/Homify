import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './src/pages/Dashboard';
import LandingPage from './src/pages/LandingPage';
import Login from './src/pages/Login';
import MyProperties from './src/pages/MyProperties';
import Notification from './src/pages/Notification';
import Profile from './src/pages/Profile';
import Register from './src/pages/Register';
import TopListing from './src/pages/TopListing';



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