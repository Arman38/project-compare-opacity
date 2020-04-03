import React from "react"
import Slider from 'react-rangeslider'
import './middle.css'

    const Middle = ({volume,handleOnChange,canvas2,onDropped,image2,file}) => {
        return (
            <div className="opccanvas">
                <canvas 
                    ref = {canvas2} 
                    className="canvas_server_canvas middlecanvas" 
                    width="400" 
                    height = "400"
                    onDragOver = {e=>e.preventDefault()}
                    onDrop = {onDropped}
                >  
                </canvas>
                <img ref = {image2} src = {file} width="350" height = "350" className="middle_img" />
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