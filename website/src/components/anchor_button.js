const AnchorButton = ({ hrefVal, label, color }) => {
    return (
        <div className='mt-2'>
            <div className="card-actions justify-center">
                <a className={`btn ${color} font-bold`}
                    href={hrefVal} target='blank'
                >
                    {`View ${label}`}
                </a>
            </div>
        </div>
    );
};

export default AnchorButton