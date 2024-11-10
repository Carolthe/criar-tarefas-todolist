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
    <div className='grid  justify-items-center ml-8'>
      <img className='ml-36' src={Logo} alt="Logo" />
      <div>
        <input
          className='w-52 ml-40 p-5 bg-gray-400 rounded-lg text-white max-w-2xl h-[50px] sm:w-screen mt-14'
          type='text'
          value={tarefaInput}
          onChange={(ev) => setTarefaInput(ev.target.value)}
          placeholder="Digite uma nova tarefa..."
        />
        <button className='ml-2 h-10 w-12 rounded-lg bg-sky text-white shadow-2xl sm:h-12 sm:w-16' onClick={clickButton}>
          Criar
        </button>
      </div>
      <div className='flex gap-[400px] ml-36 mb-4 mt-10'>
        <p className='text-sky text-sm font-bold'>
          Tarefas Criadas <button className='bg-gray-400 text-white w-6 rounded-full'>{tarefas.length}</button>
        </p>
        <p className='text-purple text-sm font-bold'>
          Concluídas<button className='bg-gray-400 text-white ml-3 w-6 rounded-full'>{tarefasConcluidas}</button>
        </p>
      </div>
      <hr className='border-gray-400 w-[720px] ml-[150px] mb-9' />
      {tarefas.map((task, index) => (
        <div className='flex justify-center' key={index}>
          <div className='bg-gray-400 text-white flex items-center px-4 w-[650px] ml-[150px] h-[45px] rounded-lg justify-between p-3 mb-6'>
            <p className={task.concluida ? 'line-through ' : ''}>
              <button
                onClick={() => concluirTarefa(index)}
                className={task.concluida ? 'bg-gray-500 border-2 border-purple w-4 h-4 mr-2 rounded-full mt-1' : 'bg-gray-500 border-2 border-sky w-4 h-4 mr-2 rounded-full mt-1'}
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
