import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <main>
                <div>
                    <h1 className="text-center font-bold text-shadow-sm text-4xl m-4">Home Page</h1>
                </div>

                <div>
                    <p className="bubble">
                        Hello, and welcome to my website! My name is Duncan Everson, and I've created this
                        website to act as a storage for my professional projects. I've also included
                        some facts about my character and skills on this site too, so feel free to
                        also examine those. If you would like to reach out to me, please feel free to
                        email me at duncan.everson@icloud.com.
                    </p>

                    {/* This will be just a professional looking picture of me. */}

                    <div className="dropdown dropdown-bottom relative">
                        <button className="mt-4 text-xl  btn bg-neonblue hover:bg-blue-100">
                            Please enjoy reading over my website!
                        </button>

                        <ul tabIndex={0} className="dropdown-content menu p-2 mt-3 shadow 
                        bg-white rounded-box text-lg font-medium left-1/2 -translate-x-1/2">
                            <li><Link to="/about">About Me</Link></li>
                            <li><Link to="/soft-skills">Soft Skills</Link></li>
                            <li><Link to="/software-projects">Software Projects</Link></li>
                            <li><Link to="/business-projects">Business Projects</Link></li>
                        </ul>
                    </div>

                </div>
            </main>
        </div>

    );
}

export default Home;