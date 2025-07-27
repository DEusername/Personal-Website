import { useState } from 'react';

const PDFViewer = ({ pdfUrl, label }) => {
    const [show, setShow] = useState(false);

    return (
        <div className='mt-2'>
            <div className="card-actions justify-center">
                <button
                    className="btn btn-primary font-bold"
                    onClick={() => setShow(!show)}
                >
                    {show ? `Hide ${label}` : `View ${label}`}
                </button>
            </div>
            {show && (
                <iframe src={pdfUrl} width="100%" height="400px" className='mt-2' />
            )}
        </div>
    );
};

export default PDFViewer