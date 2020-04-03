import React,{useEffect,useRef} from 'react'
import "./right.css"

const Right = ({changeInput,imgFile,rightImage}) => {

    return  (
              <div className="col-lg-4 offset-lg-4 col-sm-6 right  ">
                    <img src = {imgFile} width="350" height="350"  ref= {rightImage}/>
                    <input 
                        type="file" 
                        className="right_input"
                        onChange = {changeInput}
                        />
                </div>
            )
}
export default Right