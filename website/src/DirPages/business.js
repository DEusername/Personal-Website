import Card from '../components/card.js'
import PDFViewer from '../components/pdf_viewer.js';

function Business() {
    return (
        <div>
            <h1 className="text-center font-bold text-shadow-sm text-4xl m-4">Business Projects</h1>

            <main>
                <div className="flex gap-4 mb-4">
                    <Card
                        title="Solar Roadways Innovation Management Project"
                        content=""
                        linkDivs={
                            <div>
                                <PDFViewer
                                    pdfUrl={"./projects/BA_Projects/Team-6_Solar-Roadways_BA363.pdf"}
                                    label={"Report"}
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
                                <PDFViewer
                                    pdfUrl={"./projects/IAs/Business_Management_IA.pdf"}
                                    label={"Report"}
                                />
                            </div>}
                    />
                    <Card
                        title="Integrated Marketing Campaign (Event) - E3"
                        content=""
                        linkDivs={
                            <div>
                                <PDFViewer
                                    pdfUrl={"./projects/DECA_Projects/E3/E3_Written.pdf"}
                                    label={"Written Project"}
                                />
                                <PDFViewer
                                    pdfUrl={"./projects/DECA_Projects/E3/E3_Slideshow.pdf"}
                                    label={"Presentation"}
                                />
                            </div>}
                    />
                </div>
                <div className="flex gap-4 mb-4 justify-center">
                    <Card
                        title="Integrated Marketing Campaign (Service) - Marriott International"
                        content=""
                        linkDivs={
                            <div>
                                <PDFViewer
                                    pdfUrl={"./projects/DECA_Projects/Marriott_International/Marriott_Written.pdf"}
                                    label={"Written Project"}
                                />
                                <PDFViewer
                                    pdfUrl={"./projects/DECA_Projects/Marriott_International/Marriott_Slideshow.pdf"}
                                    label={"Presentation"}
                                />
                            </div>}
                    />
                    <Card
                        title="International Business Plan - Boschi Viaggio"
                        content=""
                        linkDivs={
                            <div>
                                <PDFViewer
                                    pdfUrl={"./projects/DECA_Projects/Boschi_Viaggio/Boschi_Viaggio_Written.pdf"}
                                    label={"Written Project"}
                                />
                                <PDFViewer
                                    pdfUrl={"./projects/DECA_Projects/Boschi_Viaggio/Boschi_Viaggio_Slideshow.pdf"}
                                    label={"Slideshow"}
                                />
                            </div>}
                    />
                    <Card
                        title="Integrated Marketing Campaign (Service) - AirBnB"
                        content=""
                        linkDivs={
                            <div>
                                <PDFViewer
                                    pdfUrl={"./projects/DECA_Projects/AirBnB/AirBnB_Written.pdf"}
                                    label={"Written Project"}
                                />
                                <PDFViewer
                                    pdfUrl={"./projects/DECA_Projects/AirBnB/AirBnB_Slideshow.pdf"}
                                    label={"Presentation"}
                                />
                            </div>}
                    />
                </div>
            </main>
        </div>
    );
}

export default Business;