import Card from '../components/card.js'
import AnchorButton from '../components/anchor_button.js';

function Misc() {
    return (
        <div>
            <h1 className="text-center font-bold text-shadow-sm text-4xl m-4">Miscellaneous Projects</h1>

            <main>
                <div className="flex flex-col items-center lg:flex-row gap-4 mb-4">
                    <Card
                        title="O&B Film Club Problem-Solving Consultancy"
                        content="A team project in which a problem-solving approach was developed 
                        to address a core management issue plagueing the O&B Film Club at OSU."
                        linkDivs={
                            <div>
                                <AnchorButton
                                    hrefVal={"./projects/Misc/Final-Presentation_BA361.pdf"}
                                    label={"Presentation"}
                                    color={"btn-primary"}
                                />
                            </div>}
                    />
                    <Card
                        title="IB IA (Math SL) - Monopoly Probability Study"
                        content="International Baccalaureate Internal Assessment submitted for Standard
                        Level consideration in Math. I scored a 7/7."
                        linkDivs={
                            <div>
                                <AnchorButton
                                    hrefVal={"./projects/IAs/Math_IA.pdf"}
                                    label={"Report"}
                                    color={"btn-primary"}
                                />
                            </div>}
                    />
                    <Card
                        title="IB IA (Physics HL) - Coils and Electromagnetic Field Strength"
                        content="International Baccalaureate Internal Assessment submitted for Higher
                        Level consideration in Physics. I scored a 4/7."
                        linkDivs={
                            <div>
                                <AnchorButton
                                    hrefVal={"./projects/IAs/Physics_IA.pdf"}
                                    label={"Report"}
                                    color={"btn-primary"}
                                />
                            </div>}
                    />
                </div>
                <div className="flex flex-col items-center lg:flex-row gap-4 mb-4">
                    <Card
                        title="Technical Paper - Optimal Teaching Method"
                        content="A technical research paper designed to explain the most optimal
                        instructional method for teaching subjects, such that students retain the 
                        most information possible."
                        linkDivs={
                            <div>
                                <AnchorButton
                                    hrefVal={"./projects/Misc/Final-Technical-Report_Duncan-Everson_WR227.pdf"}
                                    label={"Report"}
                                    color={"btn-primary"}
                                />
                            </div>}
                    />
                </div>
            </main>
        </div>
    );
}

export default Misc;