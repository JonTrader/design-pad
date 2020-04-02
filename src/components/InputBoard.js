import React, {useState} from 'react';
import InputPad from './InputPad';


function InputBoard(props)
{
    return(
            <div className={props.isOn ? "inputBoardOn" : "inputBoardOff"}>
                <InputPad name="Green" isOn={props.isOn} />
                <InputPad name="Yellow" isOn={props.isOn} />
                <InputPad name="Red" isOn={props.isOn} />
                <InputPad name="Blue" isOn={props.isOn} />
                <InputPad name="Pink" isOn={props.isOn} />
                <InputPad name="Purple" isOn={props.isOn} />
                <InputPad name="Black" isOn={props.isOn} />
                <InputPad name="White" isOn={props.isOn} />
            </div>
    )
}

export default InputBoard;