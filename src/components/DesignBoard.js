import React, {useState} from 'react';



function Pad(props)
{

    return(
        <div className="board" >
            <h4>{props.name}</h4>
        </div>
    )
}

function DesignBoard()
{
    return (


        <div>
            <h1 className='header'>Design Pad</h1>
            <div className='pad'>
                <Pad name="Pad1" />
                <Pad name="Pad2" />
                <Pad name="Pad3" />
                <Pad name="Pad4" />
            </div>
        </div>
    );
}

export default DesignBoard;