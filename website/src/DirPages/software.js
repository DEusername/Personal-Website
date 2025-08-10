import Card from '../components/card.js'
import AnchorButton from '../components/anchor_button.js';


function Software() {
    return (
        <div>
            <h1 className="text-center font-bold text-shadow-sm text-4xl m-4">
                Software Engineering Projects
            </h1>

            <main>
                <div className="flex gap-4 mb-4">
                    <Card
                        title="Portfolio Website"
                        content="A website designed to act as a portfolio of my projects, as well as
                        an introduction to myself. The website you're on is a live version of this 
                        project."
                        linkDivs={
                            <div>
                                <AnchorButton
                                    hrefVal={'/'}
                                    label={"Home"}
                                    color={"btn btn-ghost border-gray-500"}
                                />
                                <AnchorButton
                                    hrefVal={'https://github.com/FerretCode/scavenger'}
                                    label={"GitHub"}
                                    color={"bg-black hover:bg-gray-600 text-white"}
                                />
                            </div>}
                    />
                    <Card
                        title="Front-end UX Design Project"
                        content="A video game group management front-end developed in Figma, based on 
                        both Primary and Secondary research that my team and I conducted."
                        linkDivs={
                            <div>
                                <AnchorButton
                                    hrefVal={`https://www.figma.com/proto/lfNCk8pbSrpqWgSxGhv1Cc/
                                        Group-30---Final-Prototype?node-id=78-17707&p=f&t=
                                        TF6E5Ss7TxIb0I2Y-0&scaling=scale-down&content-scaling=
                                        fixed&page-id=0%3A1&starting-point-node-id=78%3A17707`}
                                    label={"Prototype"}
                                    color={"bg-violet-600 hover:bg-violet-800 text-white"}
                                />
                                <AnchorButton
                                    hrefVal={"./projects/CS_Projects/Everson_Final-Presentation_CS352.pdf"}
                                    label={"Presentation"}
                                    color={"btn-primary"}
                                />
                            </div>}
                    />
                    <Card
                        title="Scavenger"
                        content="A service that allows users to run AI powered web scraping workflows in
                        the Google Cloud Platform, which return data on user defined intervals."
                        linkDivs={
                            <div>
                                <AnchorButton
                                    hrefVal={'https://github.com/FerretCode/scavenger'}
                                    label={"GitHub"}
                                    color={"bg-black hover:bg-gray-600 text-white"}
                                />
                            </div>}
                    />
                </div>
                <div className="flex gap-4 mb-4">
                    <Card
                        title="Meal Match"
                        content="A meal planning and logging hub service. Features include a food diary, 
                        recipe search, meal plan generator, grocery list, grocery search, and nutrition log."
                        linkDivs={
                            <div>
                                <AnchorButton
                                    hrefVal={'https://meal-match-service.vercel.app'}
                                    label={"Live Website"}
                                    color={"btn-accent text-white"}
                                />
                                <AnchorButton
                                    hrefVal={'https://github.com/shiningn-osu/software-dev-ii-project'}
                                    label={"GitHub"}
                                    color={"bg-black hover:bg-gray-600 text-white"}
                                />
                            </div>}
                    />
                    <Card
                        title="Video Game Library Website (Microservice Architecture)"
                        content="A video game hub website featuring the ability to get recommended games,
                        store games, and find out various peices of information about games."
                        linkDivs={
                            <div>
                                <AnchorButton
                                    hrefVal={''}
                                    label={"GitHub"}
                                    color={"bg-black hover:bg-gray-600 text-white"}
                                />
                            </div>}
                    />
                    <Card
                        title="Endure Galactic"
                        content="A top-down, 2D, space arcade survival video game. It features both a
                        survival mode, a tutorial, and an original soundtrack produced by me."
                        linkDivs={
                            <div>
                                <AnchorButton
                                    hrefVal={''}
                                    label={"Itch.io Page"}
                                    color={"btn-accent text-white"}
                                />
                                <AnchorButton
                                    hrefVal={''}
                                    label={"GitHub"}
                                    color={"bg-black hover:bg-gray-600 text-white"}
                                />
                            </div>}
                    />
                </div>
                <div className="flex gap-4 mb-4">
                    <Card
                        title="Small Shell"
                        content="A small and limited shell program. It features process execution 
                        (Foreground and Background), file management, input/output redirection, and 
                        some limited signal handling."
                        linkDivs={
                            <div>
                                <AnchorButton
                                    hrefVal={''}
                                    label={"GitHub"}
                                    color={"bg-black hover:bg-gray-600 text-white"}
                                />
                            </div>}
                    />
                </div>
            </main>
        </div>
    );
}

export default Software;