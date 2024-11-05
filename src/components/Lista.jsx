import React, { useState } from 'react';
import Logo from '../img/Logo.png';

export default function Lista() {
  const [tarefaInput, setTarefaInput] = useState("");
  const [tarefas, setTarefas] = useState([]);
  const [somar, setSomar] = useState (0)

  function clickButton() {
    if (tarefaInput.trim() !== "") {
      setTarefas([...tarefas, tarefaInput]);
      setTarefaInput("");
    }
  }

  function apagarTarefa(index) {
    const novasTarefas = tarefas.filter((_, i) => i !== index);
    setTarefas(novasTarefas);
  }

  function teste (){
    setSomar(somar)
  }

  return (
    <>
      <img className='ml-36' src={Logo} alt="Logo" />
      <div>
        <input
          className='w-52 ml-40 p-5 bg-gray-400 rounded-lg text-white max-w-2xl h-[47px] sm:w-screen mt-14'
          type='text'
          disabled
          value={tarefaInput}
          onChange={(ev) => setTarefaInput(ev.target.value)}
          placeholder="Digite uma nova tarefa..."
        />
        <button
          className='bg-blue rounded-lg m-2 h-[47px] w-14 text-white'
          onClick={clickButton}
        >
          Add
        </button>
      </div>
    <div className='flex gap-[400px] ml-36 mb-4 mt-10'>
        <p className='text-white'>Tarefas Criadas <button className='w-4 bg-slate-300 rounded-full text-black'>{tarefas.length}</button></p>
        <p className='text-white'>Concluidas<button className='w-5 bg-slate-100 rounded-full text-black'>{teste.length}</button></p>
    </div>
    <hr className='border-gray-400  w-[720px] ml-[150px] mb-9'/>

      {tarefas.map((task, index) => (
        <div className='flex justify-center' key={index}>
          <p id="teste" className='bg-gray-500 w-[650px] ml-[150px] h-[45px] rounded-lg justify-between flex p-3 mb-6'>
          <button onClick={somar} className='w-5 bg-slate-100 rounded-full' ></button>
            {task}
            <button id='teste2' className='text-black' onClick={() => apagarTarefa(index)}>X</button>
          </p>
        </div>
      ))}
    </>
  );
}