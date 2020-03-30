<<<<<<< HEAD
import React, {useState} from 'react';
import DesignBoard from './DesignBoard';
import InputBoard from './InputBoard';


class DesignContainer extends React.Component {

    state =
    {
        isOn: false
    }

    setOnOff = () =>
    {
        this.setState(props => ({isOn: !props.isOn}));
    }





render()
{
    const isOn = this.state.isOn;
    var text = (isOn ? "On" : "Off");
    // if (isOn)
    // {
    //     text = "On";
    // }
    // else
    // {
    //     text = "Off";
    // }

    return (
            <div>
            <button className="button" onClick={this.setOnOff}>Edit</button>
            <h1 className="OnOff">{text}</h1>
            <InputBoard isOn={isOn}/>
            <DesignBoard />
            </div>
      );
}



  }
  
  export default DesignContainer;

=======
import React, {useState} from 'react'
import DesignBoard from './DesignBoard'
import InputPad from './InputPad'
import { render } from '@testing-library/react'


class DesignContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
             isColor: ["white", "red"],
             showBoard: true,
             board: true,
            
        }
        this.setState({color: 'red', input: 1})
    }
    


render(){
    return(
        <div>
        {/* <button onClick={()=>this.isColor}>Change color</button> */}
            <div isColor={this.isColor}></div>
            {/* <div className="board" style={{background: this.state.color}}></div> */}
            <div className="inputPad"></div>
            <InputPad />
            <DesignBoard />
        </div>
        )
    }

}


   


export default DesignContainer
>>>>>>> 2ee1d6fb5188dec59c7ad0803f7ae2d58bf078ae
