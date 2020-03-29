import React, {useState} from 'react';




function Pad(props)
{

    const [isColor, setColor] = useState(false);
    
    const changeColor = () =>
    {
        setColor(!isColor);
    }

    





    return(
        <div className={isColor ? "red" : "pad"} onDragEnterCapture={changeColor}>
            <h4>{props.name}</h4>
            <button onClick={changeColor}>Change Color</button>
        </div>
    )
}

function DesignBoard()
{
    return (

        
        <div>
            <h1 className='headerBoard'>Design Pad</h1>
            <div className='board'>
                <Pad name="Pad1" />
                <Pad name="Pad2" />
                <Pad name="Pad3" />
                <Pad name="Pad4" />
                
            </div>
        </div>
    );
}

export default DesignBoard;