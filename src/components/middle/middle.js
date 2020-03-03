import React from "react"
import Slider from 'react-rangeslider'

 const Middle = ({volume,handleOnChange,canvas2}) => {
        return (
            <div className="opccanvas">
                <canvas 
                    ref = {canvas2} 
                    className="canvas_server_canvas" 
                    width="400" 
                    height = "400"
                    onDragOver = {e=>e.preventDefault()}
                >  
                </canvas>
            <Slider
                min={0}
                max={1}
                step={0.1}
                orientation="vertical"
                className = "slider"
                value={volume}
                onChange={handleOnChange}
            />
           
    </div>
        ) 
           
 }

 export default Middle