import React, { useState, useEffect } from 'react';
import Logo from '../img/Logo.png';
import TarefaVazia from './TarefaVazia';
import Delete from '../img/Delete.png';

export default function Lista() {
  const [tarefaInput, setTarefaInput] = useState("");
  const [tarefas, setTarefas] = useState(JSON.parse(localStorage.getItem("task") || '[]'));

  function clickButton() {
    if (tarefaInput.trim() !== "") {
      setTarefas([...tarefas, { texto: tarefaInput, concluida: false }]);
      setTarefaInput("");
    }
  }

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(tarefas));
  }, [tarefas]);

  function apagarTarefa(index) {
    const novasTarefas = tarefas.filter((_, i) => i !== index);
    setTarefas(novasTarefas);
  }

  function concluirTarefa(index) {
    const novasTarefas = [...tarefas];
    novasTarefas[index].concluida = !novasTarefas[index].concluida;
    setTarefas(novasTarefas);
  }

  const tarefasConcluidas = tarefas.filter(tarefa => tarefa.concluida).length;

  return (
    
    <div className='flex flex-col  justify-center items-center sm:mt-[5%] mt-[22%]'>
      <img className='w-[36] mb-10' src={Logo} alt="Logo" />
      <div>
        <input
          className='w-72 px-6 rounded-lg bg-gray-400 shadow-2xl text-white h-10 sm:w-screen max-w-2xl sm:h-12 sm:mt-5'
          type='text'
          value={tarefaInput}
          maxLength={42}
          onChange={(ev) => setTarefaInput(ev.target.value)}
          placeholder="Digite uma nova tarefa..."
        />
        <button className='ml-2 h-10 w-12 sm:w-[55px] rounded-lg bg-sky hover:bg-claro text-white shadow-2xl sm:h-12 sm:w-16"' onClick={clickButton}>
          Criar
        </button>
      </div>
      <div className='flex sm:gap-[400px] gap-[100px] mb-4 mt-10'>
        <p className='text-sky text-sm font-bold'>
          Tarefas Criadas <button className='bg-gray-400 text-white  ml-3 w-6 rounded-full'>{tarefas.length}</button>
        </p>
        <p className='text-purple text-sm font-bold'>
          Concluídas<button className='bg-gray-400 text-white ml-3 w-6 rounded-full'>{tarefasConcluidas}</button>
        </p>
      </div>
      <hr className='sm:w-screen sm:max-w-3xl w-80 border-gray-400 mt-2 sm:mb-14' />
      {tarefas.map((task, index) => (
        <div className='flex justify-center' key={index}>
          <div className='bg-gray-400 text-white flex items-center px-4 w-80 sm:w-screen sm:max-w-2xl rounded-lg justify-between p-3 mt-6'>
            <p className={task.concluida ? 'line-through ' : ''}>
              <button
                onClick={() => concluirTarefa(index)}
                className={task.concluida ? 'bg-gray-500 border-2 border-green-400 w-4 h-4 mr-2 rounded-full mt-1' : 'bg-gray-500 border-2 border-sky w-4 h-4 mr-2 rounded-full mt-1'}
              ></button>
              {task.texto}
            </p>
            <button onClick={() => apagarTarefa(index)}>
              <img className='w-6' src={Delete} alt="Delete"/>
            </button>
          </div>
        </div>
      ))}
      {tarefas.length === 0 && <TarefaVazia />}
    </div>
  );
}
