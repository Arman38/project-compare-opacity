import React from 'react'
import './nav.css'
const Nav = () => {
     return (
            <select className="col-md-4 nav " >
                <optgroup label = "Maps">
                    <option >Map 1</option>
                    <option>Map 2</option>
                    <option>Map 3</option>
                </optgroup>  
            </select>
        )
}
export default Nav
