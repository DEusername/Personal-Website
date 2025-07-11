import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from '../components/navbar.js';

import Home from '../DirPages/DirHome/home.js'
import About from '../DirPages/DirAbout/about.js'
import Skills from '../DirPages/DirSkills/skills.js'
import Software from '../DirPages/DirSoftware/software.js'
import Business from '../DirPages/DirBusiness/business.js'

function App() {
    return (
        <Router>
            <Navbar />  {/* Visible on all pages */}
            <Routes>
                {/* Home Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/soft-skills" element={<Skills />} />
                <Route path="/software-projects" element={<Software />} />
                <Route path="/business-projects" element={<Business />} />

                {/* Catch-all Route */}
                <Route path="*" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;
