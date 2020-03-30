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

