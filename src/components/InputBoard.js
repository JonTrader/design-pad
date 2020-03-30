import React, {useState} from 'react';




function InputPad(props)
{

    // const [isOn, setOn] = useState(false);

    // const turnOn = e =>
    // {
    //     setOn(!isOn);
    // }
    // // draggable={isOn ? "true" : "false"} 
    // // <button className="button" onClick={turnOn}>Edit</button>

    const dragStart = e => {
        e.dataTransfer.setData("name", props.name);
      };
      

    return(
        
        <div className="inputPad" draggable onDragStart={dragStart}>
            <h5>{props.name}</h5>
        </div>
    )
}


function InputBoard()
{
    return(
        <div>
            <button className="button">Edit</button>
            <div className="inputBoard">
                <InputPad name="Green"/>
                <InputPad name="Yellow"/>
                <InputPad name="Red"/>
                <InputPad name="Blue"/>
                <InputPad name="Pink"/>
                <InputPad name="Purple"/>
                <InputPad name="Black"/>
                <InputPad name="White"/>
            </div>
        </div>
    )
}

export default InputBoard;