import React, {useState} from 'react';


function Pad(props)
{
    return(
        <span className="inputPad" draggable="true">

        </span>
    )
}

function InputPad()
{
    return(
        <span>
            <h1>Input Pad</h1>
            <span className="inputBoard">
                <Pad />
                <Pad />
                <Pad />
                <Pad />
                <Pad />
                <Pad />
                <Pad />
                <Pad />
            </span>
        </span>
    )
}

export default InputPad;