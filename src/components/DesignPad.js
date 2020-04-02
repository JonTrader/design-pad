import React, {useState} from 'react';




class DesignPad extends React.Component {

    
    state =
    {
        name: "boardPad"
    }
    
    drop = e =>
    {
        e.preventDefault();
        const name = e.dataTransfer.getData("name");
        this.setState({ name });
    }
    
    dragOver = e =>
    {
        e.preventDefault();
    }
    
    
    
    
        render()
        {
            return(
                <div className={this.state.name} onDrop={this.drop} onDragOver={this.dragOver}>
                </div>
            )
        }
    
    }
    
    export default DesignPad;