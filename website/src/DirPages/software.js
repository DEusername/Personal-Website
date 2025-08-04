import Card from '../components/card.js'
import PDFViewer from '../components/pdf_viewer.js';

function Software() {
    return (
        <div>
            <h1 className="text-center font-bold text-shadow-sm text-4xl m-4">
                Software Engineering Projects
            </h1>

            <main>
                <div className="flex gap-4 mb-4">
                    <Card
                        title="Front-end Design Project"
                        content="A video game group management front-end developed in Figma, based on 
                        both Primary and Secondary research that my team and I conducted."
                        linkDivs={
                            <div>

                            </div>}
                    />
                    <Card
                        title="Scavenger"
                        content="A service that allows users to run AI powered web scraping workflows in
                        the Google Cloud Platform, which return data on user defined intervals."
                        linkDivs={
                            <div>

                            </div>}
                    />
                    <Card
                        title="Meal Match"
                        content="A meal planning and logging hub service. Features include a food diary, 
                        recipe search, meal plan generator, grocery list, grocery search, and nutrition log."
                        linkDivs={
                            <div>

                            </div>}
                    />
                </div>
                <div className="flex gap-4 mb-4">
                    <Card
                        title="Video Game Library Website (Microservice Architecture)"
                        content="A video game hub website featuring the ability to get recommended games,
                        store games, and find out various peices of information about games."
                        linkDivs={
                            <div>

                            </div>}
                    />
                    <Card
                        title="Endure Galactic"
                        content="A top-down, 2D, space arcade survival video game. It features both a
                        survival mode, a tutorial, and an original soundtrack produced by me."
                        linkDivs={
                            <div>

                            </div>}
                    />
                    <Card
                        title="Small Shell"
                        content="A small and limited shell program. It features process execution 
                        (Foreground and Background), file management, input/output redirection, and 
                        some limited signal handling."
                        linkDivs={
                            <div>

                            </div>}
                    />
                </div>
            </main>
        </div>
    );
}

export default Software;