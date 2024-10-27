import React, {useState} from 'react'
import Logo from '../img/Logo.png'

export default function Lista (){
    const [tarefaInput, setTarefaInput] = useState([])
    const [setarButton, setSetarButton] = useState("")

    function clickButton (){
        setSetarButton(tarefaInput)
        setTarefaInput("")
    }
    function apagarTarefa (){
        setSetarButton("")
    }
    
    return(
        <>
        <img src={Logo} />
       <div>
        <input className='w-52 bg-gray-800 rounded-lg text-white max-w-2xl h-[50px] sm:w-screen mt-14 '
        type='text'
        value={tarefaInput}
        onChange={(ev)=> setTarefaInput(ev.target.value)}
        />
        <button className='bg-blue-400 rounded-lg m-2 h-[50px] w-14 text-white'
       onClick={clickButton}
 >Add</button>
       </div> 
       {setarButton &&
       <div className='flex justify-center'>
    <p className='bg-gray-500 w-[400px] h-[50px] justify-between flex p-3 '>{setarButton} <button
    onClick={apagarTarefa}
    >X</button></p>
         </div>
    }
    </>
     
    )
}