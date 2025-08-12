function About() {
    return (
        <div>
            <main>
                <h1 className="text-center font-bold text-shadow-sm text-4xl m-4">About Duncan Everson</h1>

                <div className='mb-4 flex justify-center'>
                    <div className="carousel carousel-center bg-base-100 rounded-box max-w-lg space-x-4 p-4">
                        <div className="carousel-item">
                            <img
                                src="./images/straight-on.jpeg"
                                className="rounded-box max-h-96"
                                alt='A man with brown hair standing in front of a door 
                                looking directly at a camera.' />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="./images/beaver.jpeg"
                                className="rounded-box max-h-96"
                                alt='A man with brown hair and glasses standing in front of a giant,
                            inflatable beaver wearing Oregon State University sports merchandise.'/>
                        </div>
                        <div className="carousel-item">
                            <img
                                src="./images/white-shirt.jpeg"
                                className="rounded-box max-h-96"
                                alt='A man with brown hair taking a mirror selfie in a white shirt.' />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="./images/gym-pic.jpeg"
                                className="rounded-box max-h-96"
                                alt='A man with brown hair standing in front of a mirror in a gym, 
                                with gym equipment visible, taking a mirror selfie.'/>
                        </div>
                    </div>
                </div>


                <div className='bubble text-left mx-auto mb-8 w-4/5'>
                    <p className='mb-4'>
                        My name is Duncan Everson. I live in Oregon and am majoring in Computer
                        Science and am minoring in Innovation and Entrepreneurship.
                    </p>

                    <p className='mb-4'>
                        I mainly studied elements of Business in high school, and was a part of my
                        school's DECA club, where I competed with other students from across the state
                        and nation with written Marketing and Entrepreneurship mock proposals.
                    </p>

                    <p className='mb-4'>
                        In college, I've been trying to develop my Software Engineering skills to gain
                        the ability to create interesting projects and gain expertise in a technical
                        craft.
                    </p>

                    <p className='mb-4'>
                        I personally like to spend time with my family, lift weights, do creative writing,
                        and play video games. Additionally, I like to go out ballroom/country western
                        dancing during the week.
                    </p>

                    <p>
                        I'm currently interested in various technologies. I am interested in Docker,
                        Go, Tailwind/DaisyUI, and Ollama for running locally hosted AI models.
                    </p>
                </div>

            </main>
        </div>
    );
}

export default About;