import React from "react"
import Slider from 'react-rangeslider'
import './middle.css'

    const Middle = ({volume,handleOnChange,canvas2,image2,file}) => {
        return (
            <div className="opccanvas col-md-4 offset-md-4 col-12 ">
              
                <canvas 
                    ref = {canvas2} 
                    className="canvas_server_canvas middlecanvas" 
                    width="400" 
                    height = "400"
                >  
                </canvas>
                <img
                    ref = {image2}
                    src = {file} 
                    width="350" 
                    height = "350" 
                    className="middle_img" 
                    alt="mid_img"
                />
                <Slider
                    min={0}
                    max={1}
                    step={0.05}
                    orientation="vertical"
                    className = "slider"
                    value={volume}
                    onChange={handleOnChange}
                />
            </div>
           
        ) 
    }

    export default Middle