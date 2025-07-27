import Card from '../components/card.js'

function Misc() {
    return (
        <div>
            <h1 className="text-center font-bold text-shadow-sm text-4xl m-4">Miscellaneous Projects</h1>

            <main>
                <div className="flex gap-4 mb-4">
                    <Card
                        title="IB IA (Math SL) - Monopoly Probability Study"
                        content="International Baccalaureate Internal Assessment submitted for Standard
                        Level consideration in Math. I scored a 7/7."
                        linkDivs={
                            <div>
                                <iframe src="./projects/IAs/Math_IA.pdf"
                                    width="100%" height="400px"></iframe>
                            </div>}
                    />
                    <Card
                        title="IB IA (Physics HL) - Coils and Electromagnetic Field Strength"
                        content="International Baccalaureate Internal Assessment submitted for Higher
                        Level consideration in Physics. I scored a 4/7."
                        linkDivs={
                            <div>
                                <iframe src="./projects/IAs/Physics_IA.pdf"
                                    width="100%" height="400px"></iframe>
                            </div>}
                    />
                    <Card
                        title="Technical Paper - Optimal Teaching Method"
                        content=""
                        linkDivs={
                            <div>
                                <iframe src=""
                                    width="100%" height="400px"></iframe>
                            </div>}
                    />
                </div>
            </main>
        </div>
    );
}

export default Misc;