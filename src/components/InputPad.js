import React, {useState}  from 'react';


function Pad(props)
{

    const [isColor, setColor] = useState(false);
    
    const changeColor = () =>
    {
        setColor(true);
    }

    return(
        <div className="inputPad" draggable onDrag={changeColor}>
            <h5>{props.name}</h5>

        </div>
    )
}

function InputPad()
{
    return(
        <div>
            <h1 className="inputHeader">Input Pad</h1>
            <div className="inputBoard">
                <Pad name="1"/>
                <Pad name="2"/>
                <Pad name="3"/>
                <Pad name="4"/>
                <Pad name="5"/>
                <Pad name="6"/>
                <Pad name="7"/>
                <Pad name="8"/>
            </div>
        </div>
    )
}

export default InputPad;