import SmallCard from '../components/small_card.js'

function Skills() {
    return (
        <div>
            <main>
                <h1 className="text-center font-bold text-shadow-sm text-4xl m-4">Skills</h1>

                <h2 className='text-left font-bold text-shadow-sm text-2xl m-4'>Software Engineering Skills</h2>

                <div className="flex gap-4 mb-4">
                    <SmallCard
                        title="Coding Languages"
                        content="Proficient in C, C++, C#, JavaScript, HTML5/CSS3, CUDA, Python, and Go."
                    />
                    <SmallCard
                        title="Full-Stack Development"
                        content="Can use Node.js (Express and EJS) as well as React."
                    />
                    <SmallCard
                        title="Linux Systems"
                        content="Familiarity with File Systems, Permissions, and Process Management."
                    />
                </div>
                <div className="flex gap-4 mb-4">
                    <SmallCard
                        title="Networking"
                        content="Capable of implementing TCP/IP networking and socket programming in C."
                    />
                    <SmallCard
                        title="Database Management"
                        content="Experienced using both SQL and NoSQL database systems."
                    />
                    <SmallCard
                        title="AI"
                        content="Capable of deploying and running AI systems on local machines 
                        via Ollama."
                    />
                </div>
                <div className="flex gap-4 mb-4">
                    <SmallCard
                        title="Testing"
                        content="Hands-on experience with unit/integration tests 
                        using Jest for JavaScript code. Additionally, experience developing test
                        suites for line/branch/mutation coverage."
                    />
                    <SmallCard
                        title="Microservice Architectures"
                        content="Experienced with both creating microservices and implementing 
                        existing ones into a monolith."
                    />
                    <SmallCard
                        title="GitHub"
                        content="Well-versed in GitHub for version control and continuous 
                        integration and deployment."
                    />
                </div>
                <div className="flex gap-4">
                    <SmallCard
                        title="Parallel Processing"
                        content="Capable of using OpenMP, OpenCL, CUDA, and MPI for conducting
                        parallel executions across cores in CPUs, GPUs, and distrubuted systems. Can
                        also perform SIMD on cores for faster arithmetic."
                    />
                    <SmallCard
                        title="Visual Studio Code"
                        content="Familiar with utilizing VScode and it's extensions."
                    />
                    <SmallCard
                        title="Task Management"
                        content="Experienced using GitHub Projects/Issues for task tracking."
                    />
                </div>



                <h2 className='text-left font-bold text-shadow-sm text-2xl m-4'>Business Management Skills</h2>

                <div className="flex gap-4">
                    <SmallCard
                        title="Project Management"
                        content="Led and worked in teams using Agile methodologies to deliver 
                        projects in classes, bound by sprint due dates."
                    />
                    <SmallCard
                        title="Strategic Planning"
                        content="Created theoretical marketing plans to employ strategies given 
                        companies' current circumstances. Additionally employed marketing tactics 
                        for the South Salem High School student store."
                    />
                    <SmallCard
                        title="Design Thinking"
                        content="Applied usability heuristics and universal design principles, 
                        as well as user research to design a front-end with a team."
                    />
                </div>



                <h2 className='text-left font-bold text-shadow-sm text-2xl m-4'>Soft Skills</h2>

                <div className="flex gap-4 mb-8">
                    <SmallCard
                        title="Strong Teamwork and Collaborative Abilities"
                        content=""
                    />
                    <SmallCard
                        title="Top-Down Problem Solving Mentality"
                        content=""
                    />
                    <SmallCard
                        title="Ability to Learn Quickly"
                        content=""
                    />
                    <SmallCard
                        title="Meticulous in Task Completion"
                        content=""
                    />
                </div>
            </main>
        </div>
    );
}

export default Skills;