
import './App.css'
import Chatbot from "./components/chatbot/Chatbot"
import Help from './components/help/Help'
import { useState } from 'react'

function App() {
  const [view,setView]= useState(false)
  const handleChange = (event, newAlignment) => {
    setView(newAlignment);
  };
  const applyView=()=>{
    setView(true)
  }
  return (
    <>
    {
        view ? <Help/> : <Chatbot applyView={applyView}/>
    }
    </>
  )
}

export default App
