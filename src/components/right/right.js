import React from 'react'
import "./right.css"

const Right = ({changeInput,imgFile,rightImage}) => {

    return  (
              <div className="col-md-4 offset-md-4 col-12  right  ">
                    <img src = {imgFile} width="350" height="350"  ref= {rightImage} />
                    <input 
                        type="file" 
                        className="right_input form-control-file"
                        onChange = {changeInput}
                        />
                </div>
            )
}
export default Right