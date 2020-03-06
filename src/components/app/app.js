
import React,{useState,useEffect,useRef} from "react"
import "./app.css"
import Nav from '../nav/nav'
import Left from '../left/left'
import Right from '../right/right'
import Middle from '../middle/middle'




const App = ()=>{
    const [volume,setVolume] = useState(Number(.5))
    const [file,setFile] = useState(null)

    const canvas = useRef(null);
        const canvas2 = useRef(null);
             const imag = useRef(null);
                const image2 = useRef(null) 
                    
   useEffect(()=> {
        const ctx = canvas.current.getContext("2d")
        const ctx2 = canvas2.current.getContext("2d")
                const img = imag.current
            const func = ()=> {
                ctx.drawImage(img,0,0,400,400)
                ctx2.drawImage(img,0,0,400,400)
            }
                window.addEventListener("load",func)
                canvas2.current.style.opacity = volume
             return ()=>{
                window.removeEventListener("load",func)
                console.log("removed")

             }   
                 
        }
    ) 
  
    const handleOnChange = (value) =>  setVolume(value.toFixed(2))
    
    const changeInput = (e) =>  {
        const file = e.target.files[0]
        setFile(URL.createObjectURL(file))
    }
    

   return (
            <div className = "canvas_server">
                <div className = 'container'>
                    <div className="row">
                        <Nav />
                    </div>
                     <div className="row">
                        <Left  
                            imag={imag}  
                            canvas = {canvas}  
                        />
                        <Right 
                            changeInput = {changeInput}  
                            imgFile = {file}
                        />
                    </div>
                     <div className="row">
                        <Middle 
                            handleOnChange ={handleOnChange} 
                            volume = {volume}
                            canvas2 ={canvas2}
                            file = {file}
                            image2 = {image2}
                            
                        />
                     </div>
                </div>
            </div>
   )     
} 

export default App