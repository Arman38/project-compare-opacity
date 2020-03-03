import React from "react"

const Left = ({imag,canvas}) => {
    return <div className="col-lg-3 offset-lg-1 col-sm-6">
            <canvas 
                ref = {canvas} 
                className="canvas_server_canvas"  
                width="400" 
                height = "400"
                draggable="true"
            >
            <img 
                ref = {imag} 
                src = {"https://picsum.photos/536/354"} 
                className="hiddenimage"
            />
        </canvas>
 </div>
}

export default Left