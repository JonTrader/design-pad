import React, {useState} from 'react';
import DesignPad from './DesignPad';



function DesignBoard()
{
    return (

        
        <div>
            <h1 className='headerBoard'>Design Pad</h1>
            <div className='board'>
                <DesignPad />
                <DesignPad />
                <DesignPad />
                <DesignPad />
                
            </div>
        </div>
    );
}

export default DesignBoard;