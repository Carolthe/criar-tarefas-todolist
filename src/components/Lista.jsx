import React, {useState} from 'react'
import Logo from '../img/Logo.png'

export default function Lista (){
    const [tarefa, setTarefa] = useState ("")
    const [button, setButton] = useState ("")

    function change (ev){
        setTarefa(ev.target.value)
    }
    function buttonClick (){
        setButton(tarefa)
        setTarefa("")
    }

    return(
        <>
        <img src={Logo} />
       <div>
        <input className='w-52 bg-gray-800 rounded-lg text-white max-w-2xl h-[50px] sm:w-screen '
        type='text'
        value={tarefa}
        onChange={change}
        />
        <button className='bg-blue-400 rounded-lg m-2 h-[50px] text-white'
        onClick={buttonClick}
 >Adicionar</button>
       </div> 
       
       <div className='flex justify-center'>
      { button && <p className='bg-gray-500 w-[400px] h-[50px] '>{button} </p>
        }  </div>
      </>
     
    )
}