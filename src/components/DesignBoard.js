import React, {useState} from 'react';



function Pad(props)
{

    return(
        <span className="pad">
            <h4>{props.name}</h4>
        </span>
    )
}

function DesignBoard()
{
    return (

        
        <span>
            <h1 className='headerBoard'>Design Pad</h1>
            <span className='board'>
                <Pad name="Pad1" />
                <Pad name="Pad2" />
                <Pad name="Pad3" />
                <Pad name="Pad4" />
            </span>
        </span>
    );
}

export default DesignBoard;