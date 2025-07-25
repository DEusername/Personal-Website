import { useState } from 'react';

function Card({ title, content, linkDivs }) {

    const [showPDF, setShowPDF] = useState(false);

    return (
        <div className="card bg-white w-96 shadow-sm">
            <figure className="px-10 pt-10">
                <img
                    src=""
                    alt=""
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h3 className="card-title">{title}</h3>
                <p>{content}</p>
                <div className="card-actions">
                    <button
                        className="btn btn-primary font-bold"
                        onClick={() => setShowPDF(!showPDF)}
                    >
                        {showPDF ? 'Hide PDF' : 'View PDF'}
                    </button>
                </div>
                {showPDF ? linkDivs : null}
            </div>
        </div>
    );
}

export default Card;