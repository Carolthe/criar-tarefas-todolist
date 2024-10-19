import { useState } from 'react'
import Logo from '../img/Logo.png'

const [input, setInput] =useState("")

function changeInput (){
    setInput(input)
}

export default function (){
    return(
        <>
        <img src={Logo} />
       <div>
        <input className='w-52 bg-black text-white max-w-2xl h-[50px] sm:w-screen '
        type='text'
        value={input}
        onChange={e=>(e.target.value)}/>
        <button className='bg-blue-400 h-[53px] text-white'
        onClick={changeInput}>Adicionar</button>
       </div> 
       <>
       <div>
       <p>Tarefas criadas</p> <button>0</button>
       </div>
       <div>
       <p>Tarefas criadas</p> <button>0</button> 
       </div>
       </> 
       <p className='w-52 bg-black text-white max-w-2xl h-[50px] sm:w-screen'><button></button> {input} <img src="" /></p>
       </>
    )
}