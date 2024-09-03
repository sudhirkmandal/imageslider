import React, { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function App() {
  const data = [
   "https://images.unsplash.com/photo-1502323777036-f29e3972d82f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   "https://images.unsplash.com/photo-1514069419621-1adbe445edf1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   "https://images.unsplash.com/photo-1499476902703-c086d838ef0d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   "https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   "https://images.unsplash.com/photo-1481410491085-5e00972436e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   "https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ]
  const [val, setVal] = useState(0)

  const handlePreviousClick = () => {
    if(val === 0) setVal(data.length - 1)
      else setVal(val - 1)
  }
  
  const handleNextClick = () => {
    setVal((val + 1) % data.length)
  }
  return (
    <div className='w-full h-screen bg-sky-400 flex items-center flex-col justify-center gap-8'>
    <h1 className='text-4xl font-[900] uppercase text-orange-100'>Image Slider</h1>
    <div className='flex items-center gap-8'>    
    <button onClick={handlePreviousClick} className='w-[3vw] h-[3vw] bg-white flex items-center justify-center rounded-full'><FaArrowLeft/></button>
      <div className='w-[35vw] h-[45vh] bg-red-400 rounded-md flex overflow-hidden'>
      <img className='w-full h-full object-cover' src={data[val]} alt="" />       
      </div>
    <button onClick={handleNextClick} className='w-[3vw] h-[3vw] bg-white flex items-center justify-center rounded-full'><FaArrowRight/></button>
    </div>
    </div>
  )
}

export default App