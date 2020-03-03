import React from 'react'

const Nav = () => {
     return (
        <div className = "container">
            <div className = "row" >
                    <select className="col-lg-3 offset-lg-1 ">
                        <optgroup label = "Regions">
                            <option >Yerevan</option>
                            <option>Kotayq</option>
                            <option>Gegharquniq</option>
                        </optgroup>  
                    </select>
                    <select className="col-lg-3 offset-lg-1">
                        <optgroup label="City">
                            <option>Yerevan</option>
                            <option>Hrazdan</option>
                            <option>Abovyan</option>
                        </optgroup>
                    </select>
                
              
                    <select className="col-lg-3 offset-lg-1">
                        <optgroup label="Regions">
                            <option>Lernanist</option>
                            <option>Kaghsi</option>
                            <option>Solak</option>
                        </optgroup>
                    </select>
                </div>
        </div>

)
}
export default Nav