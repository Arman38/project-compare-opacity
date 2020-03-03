import React,{useState,useEffect,useRef} from "react"
import "./canvas-from -server.css"
import Slider from 'react-rangeslider'
const CanvasServer = () =>{

    const [volume,setVolume] = useState(1)

    const canvas = useRef(null);
        const canvas2 = useRef(null);
             const imag = useRef(null);
                 const imag2 = useRef(null);

   useEffect(()=> {
        const ctx = canvas.current.getContext("2d")
        const ctx2 = canvas2.current.getContext("2d")
                const img = imag.current
                const img2 = imag2.current
                    window.onload = () => {
                        ctx.drawImage(img,0,0,400,400)
                         ctx2.drawImage(img2,0,0,400,400)
                 }
                 canvas2.current.style.opacity = volume
        }
    ) 
  
    const handleOnChange = (value) => {
            setVolume(value.toFixed(1))
    }
    const onDropped = (e) => {
       
            const ctx2 = canvas2.current.getContext("2d")
                const img = imag.current
                    ctx2.drawImage(img,0,0,400,400)
    }
   return (
            <div className = "canvas_server">
                <div className = 'container'>
                     <div className="row">
                         <div className="col-lg-3 offset-lg-1 col-sm-6">
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
                        
                        <div className="col-lg-4 offset-lg-4 col-sm-6  ">
                             <canvas className="canvas_server_canvas">  </canvas>
                         </div>
                     </div>
                     <div className="row">
                        <div className="opccanvas">
                            <canvas 
                            ref = {canvas2} 
                            className="canvas_server_canvas" 
                            width="400" 
                            height = "400"
                            onDrop = {onDropped}
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
                            <img ref = {imag2} src = {"https://picsum.photos/536/125"} className="hiddenimage"/>
                    </div>
                     </div>
                </div>
            </div>
      
       
   )     
}

export default CanvasServer