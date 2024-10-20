import React, {useState} from 'react'
import Logo from '../img/Logo.png'

export default function Lista (){
    const [tarefa, setTarefa] = useState([])
    const [button, setButton] = useState("")

    function changeInput (ev){
        setTarefa(ev.target.value)
    }
    function buttonClick (){
        setButton(tarefa)
        setTarefa("")
    }
    function apagarTarefa(){
        setButton("")
    }
    
   
    return(
        <>
        <img src={Logo} />
       <div>
        <input className='w-52 bg-gray-800 rounded-lg text-white max-w-2xl h-[50px] sm:w-screen '
        type='text'
        value={tarefa}
        onChange={changeInput}
        />
        <button className='bg-blue-400 rounded-lg m-2 h-[50px] text-white'
       onClick={buttonClick}
 >Adicionar</button>
       </div> 
       { button &&
       <div className='flex justify-center'>
    <p className='bg-gray-500 w-[400px] h-[50px] justify-between flex p-3 '>{button} <button
    onClick={apagarTarefa}
    >X</button> </p>
         </div>
    }  
    </>
     
    )
}