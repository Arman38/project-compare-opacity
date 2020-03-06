import React from "react";

const Left = ({imag,canvas,imgSrc}) => {
    return <div className="col-md-4 col-12">
            <canvas 
                ref = {canvas} 
                className="canvas_server_canvas"  
                width="400" 
                height = "400"
            >
            <img 
                ref = {imag} 
                src = "https://firebasestorage.googleapis.com/v0/b/maps-6ec63.appspot.com/o/maps%2Fmap1.JPG?alt=media&token=ab5db3fc-938c-4165-8815-9b8ed53d2c35" 
                className="hiddenimage"
                alt="left_img"
            />
        </canvas>
        
 </div>
}

export default Left