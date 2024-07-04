import React, { useState } from "react";
import './Help.css'
import helpbg from '../../assets/helpbg.jpg'
import axios from "axios";
function Help(){
    function handleChange(event) {
        console.log(event.target.value);
        setquestion(event.target.value)
      }
      const  handleGenerate = async() => {
             console.log(question)
             if(question === ''){
                setAns("Welcome Prakarthi AI  chatbot")
                window.alert("empty prompt are not allowed")
                return
             }
             const res = await axios.post("http://127.0.0.1:5000/process_text",{"question":question})
             console.log(res.data)
             setAns(res.data.data)
      }
    const [question,setquestion] = useState('')
    const [ans,setAns] = useState("Welcome Prakarthi AI  chatbot")
    
    return(
        <>
        <img src={helpbg} alt=""  className="hbg"/>
        <div className="outBox">
            <div className="chatbox">
                <input type="text" className="inp" value={question} onChange={handleChange}/>
                <button className="btn" onClick={handleGenerate}>Generate</button>
                <div className="resbox">
                <p className="res">{ans}</p>
                </div>
                </div>
        </div>
        </>
    )
}
export default Help