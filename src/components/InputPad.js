import React, {useState} from 'react';
import '../inputpad.css';

export default function ImportPad(props)
    {



        // const [isOn, setOn] = useState(false);
    
        // const turnOn = e =>
        // {
        //     setOn(!isOn);
        // }
        // <button className="button" onClick={turnOn()}>Edit</button>
        
    
        const dragStart = e => {
            e.dataTransfer.setData("name", props.name);
          };
          
    
        return(
            
            <div className={props.isOn ? "inputPadOn" : "inputPadOff"} draggable={props.isOn} onDragStart={dragStart}>
                <h5>{props.name}</h5>
            </div>
        )
    }