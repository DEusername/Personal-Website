import Card from '../components/card.js'
import AnchorButton from '../components/anchor_button.js';

function Business() {
    return (
        <div>
            <h1 className="text-center font-bold text-shadow-sm text-4xl m-4">Business Projects</h1>

            <main>
                <div className="flex flex-col items-center lg:flex-row gap-4 mb-4">
                    <Card
                        title="Nanomand Commercialization Consultancy"
                        content="A team consultancy project in which a commercialization plan was created 
                        for a nanotechnology startup called Nanomand."
                        linkDivs={
                            <div>
                                <AnchorButton
                                    hrefVal={"./projects/BA_Projects/Nanomand-Final-Report_BA468.pdf"}
                                    label={"Report"}
                                    color={"btn-primary"}
                                />
                                <AnchorButton
                                    hrefVal={"./projects/BA_Projects/Nanomand-Final-Slides_BA468.pdf"}
                                    label={"Presentation"}
                                    color={"btn-primary"}
                                />
                                <AnchorButton
                                    hrefVal={`https://nanomand.com/`}
                                    label={"Nanomand Website"}
                                    color={"btn-accent text-white"}
                                />
                            </div>}
                    />
                    <Card
                        title="WinCo Online Experience Design Project"
                        content="A team design project crafted to enhance the usability of 
                        WinCo's online shopping experience."
                        linkDivs={
                            <div>
                                <AnchorButton
                                    hrefVal={`https://www.figma.com/proto/yKy7Il1thMmmoR4ttVzrbi/
                                        Medium-Fidelity-Prototype?node-id=0-1&t=ZaP9iR84pqcVnc74-1`}
                                    label={"Prototype"}
                                    color={"bg-violet-600 hover:bg-violet-800 text-white"}
                                />
                                <AnchorButton
                                    hrefVal={"./projects/BA_Projects/Team-5_Design-Executive-Summary_DSGN341.pdf"}
                                    label={"Executive Summary"}
                                    color={"btn-primary"}
                                />
                                <AnchorButton
                                    hrefVal={"./projects/BA_Projects/Team-5_Winco-Presentation_DSGN341.pdf"}
                                    label={"Presentation"}
                                    color={"btn-primary"}
                                />
                            </div>}
                    />
                    <Card
                        title="GripSkin Entrepreneurship Project"
                        content="A team entrepreneurship project designed to plan and market a 
                        new assistive squatting device for weightlifters."
                        linkDivs={
                            <div>
                                <AnchorButton
                                    hrefVal={"./projects/BA_Projects/GripSkin-Discovery-&-Design-Report_BA260.pdf"}
                                    label={"Report"}
                                    color={"btn-primary"}
                                />
                                <AnchorButton
                                    hrefVal={"./projects/BA_Projects/GripSkin-Presentation_BA260.pdf"}
                                    label={"Presentation"}
                                    color={"btn-primary"}
                                />
                            </div>}
                    />
                </div>
                <div className="flex flex-col items-center lg:flex-row gap-4 mb-4">
                    <Card
                        title="Solar Roadways Innovation Management Project"
                        content="A team research report crafted to provide solutions to problems Solar
                        Roadways Inc. faced leading up to their 2016 Sandpoint, Idaho test run."
                        linkDivs={
                            <div>
                                <AnchorButton
                                    hrefVal={"./projects/BA_Projects/Team-6_Solar-Roadways_BA363.pdf"}
                                    label={"Report"}
                                    color={"btn-primary"}
                                />
                                <AnchorButton
                                    hrefVal={"./projects/BA_Projects/Team-6_Project-Presentation_BA363.pdf"}
                                    label={"Presentation"}
                                    color={"btn-primary"}
                                />
                            </div>}
                    />
                    <Card
                        title="IB IA (Business Management SL) - Courthouse Club
                        Fitness"
                        content="International Baccalaureate Internal Assessment submitted for Standard
                        Level consideration in Business Management. I scored a 7/7."
                        linkDivs={
                            <div>
                                <AnchorButton
                                    hrefVal={"./projects/IAs/Business_Management_IA.pdf"}
                                    label={"Report"}
                                    color={"btn-primary"}
                                />
                            </div>}
                    />
                    <Card
                        title="Integrated Marketing Campaign (Event) - E3"
                        content="A theoretical marketing plan designed to increase revenue and excitement
                        around the Entertainment Software Association's E3 expo, and the games released 
                        at this event."
                        linkDivs={
                            <div>
                                <AnchorButton
                                    hrefVal={"./projects/DECA_Projects/E3/E3_Written.pdf"}
                                    label={"Written Project"}
                                    color={"btn-primary"}
                                />
                                <AnchorButton
                                    hrefVal={"./projects/DECA_Projects/E3/E3_Slideshow.pdf"}
                                    label={"Presentation"}
                                    color={"btn-primary"}
                                />
                            </div>}
                    />
                </div>
                <div className="flex flex-col items-center lg:flex-row gap-4 mb-4 justify-center">
                    <Card
                        title="Integrated Marketing Campaign (Service) - Marriott International"
                        content="A theoretical marketing campaign designed to increase revenue and customer loyalty 
                        from Marriott International customers, and establish reusable systems for future campaigns."
                        linkDivs={
                            <div>
                                <AnchorButton
                                    hrefVal={"./projects/DECA_Projects/Marriott_International/Marriott_Written.pdf"}
                                    label={"Written Project"}
                                    color={"btn-primary"}
                                />
                                <AnchorButton
                                    hrefVal={"./projects/DECA_Projects/Marriott_International/Marriott_Slideshow.pdf"}
                                    label={"Presentation"}
                                    color={"btn-primary"}
                                />
                            </div>}
                    />
                    <Card
                        title="International Business Plan - Boschi Viaggio"
                        content="A theoretical international business plan designed around bringing wealthy golfers
                        from Japan to America to experience Oregon's high end golf resorts."
                        linkDivs={
                            <div>
                                <AnchorButton
                                    hrefVal={"./projects/DECA_Projects/Boschi_Viaggio/Boschi_Viaggio_Written.pdf"}
                                    label={"Written Project"}
                                    color={"btn-primary"}
                                />
                                <AnchorButton
                                    hrefVal={"./projects/DECA_Projects/Boschi_Viaggio/Boschi_Viaggio_Slideshow.pdf"}
                                    label={"Presentation"}
                                    color={"btn-primary"}
                                />
                            </div>}
                    />
                    <Card
                        title="Integrated Marketing Campaign (Service) - AirBnB"
                        content="A theoretical marketing campaign designed to increase increase revenue and establish
                        reusable systems that can be deployed in select areas to boost loyalty to AirBnB Experiences."
                        linkDivs={
                            <div>
                                <AnchorButton
                                    hrefVal={"./projects/DECA_Projects/AirBnB/AirBnB_Written.pdf"}
                                    label={"Written Project"}
                                    color={"btn-primary"}
                                />
                                <AnchorButton
                                    hrefVal={"./projects/DECA_Projects/AirBnB/AirBnB_Slideshow.pdf"}
                                    label={"Presentation"}
                                    color={"btn-primary"}
                                />
                            </div>}
                    />
                </div>
            </main>
        </div>
    );
}

export default Business;