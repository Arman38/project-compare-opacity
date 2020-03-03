import React,{useEffect,useRef} from 'react'
import "./right.css"

const Right = ({changeInput,imgFile}) => {
    return  (
              <div className="col-lg-4 offset-lg-4 col-sm-6 right  ">
                    <canvas className="canvas_server_canvas" > </canvas>
                    <input 
                            type="file" 
                            className="right_input"
                            onChange = {changeInput}
                            />
                    <img src = {imgFile}  />
                </div>
            )
}
export default Right