function Card({ title, content, linkDivs }) {

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
                {linkDivs}
            </div>
        </div>
    );
}

export default Card;