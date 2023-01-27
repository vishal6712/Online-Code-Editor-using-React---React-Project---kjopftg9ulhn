import './Bdata.css';

function Bdata(props)
{
    return(
        <div className="bdata">
            <div>
                <button>{props.name}</button>
            </div>
        </div>
    );
}

export default Bdata;