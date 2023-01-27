import './Button.css';
import Bdata from './Bdata';

function Button(props)
{
    return(
        <div className='buttons'>
            <Bdata name={props.data[0].bname}/>
            <Bdata name={props.data[4].bname}/>
            <Bdata name={props.data[1].bname}/>
            <Bdata name={props.data[2].bname}/>
            <Bdata name={props.data[3].bname}/>
        </div>
    );
}

export default Button;