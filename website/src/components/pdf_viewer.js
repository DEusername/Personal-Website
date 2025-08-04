const PDFViewer = ({ pdfUrl, label }) => {
    return (
        <div className='mt-2'>
            <div className="card-actions justify-center">
                <a className='btn btn-primary font-bold'
                    href={pdfUrl} target='blank'
                >
                    {`View ${label}`}
                </a>
            </div>
        </div>
    );
};

export default PDFViewer