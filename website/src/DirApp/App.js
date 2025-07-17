import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from '../components/navbar.js';

import Home from '../DirPages/home.js'
import About from '../DirPages/about.js'
import Skills from '../DirPages/skills.js'
import Software from '../DirPages/software.js'
import Business from '../DirPages/business.js'

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
