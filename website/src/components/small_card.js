function SmallCard({ title, content }) {
    return (
        <div className="card w-96 bg-white card-xs shadow-sm">
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="ml-4">{content}</p>
            </div>
        </div>
    );
}

export default SmallCard