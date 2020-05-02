import React from 'react'
import Panel from './Panels'

const Sel = () => {
    // need to bring in the card domponent as an array not sure how yet
    let part = 0
    //the count of component index
    const handle = () => {
        if (direction == 'forward')
         part = (part + 1) % comp.length
        else 
        part = (part -1 + comp.length) % comp.length
    }
    return (
        <div>
            
        </div>
    )
}

export default Sel
