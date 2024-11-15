import Notas from "../img/Notas.png"

export default function TarefaVazia (){
    return(
        <div className="grid justify-items-center sm:mt-[15px] mt-20">
        <img className="sm:w-14 sm:h-14 w-10 h-10" src={Notas} />
        <p className="text-gray-300 inline-block sm:text-base text-sm font-bold" >Você ainda não tem tarefas cadastradas</p>
        <p className="text-gray-300  inline-block sm:text-base text-sm ml-2">Crie tarefas e organize seus itens a fazer </p>
        </div>
    )
}