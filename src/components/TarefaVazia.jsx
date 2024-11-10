import Notas from "../img/Notas.png"

export default function TarefaVazia (){
    return(
        
        <div className="grid justify-items-center ml-[130px] mt-[50px]">
        <img className="h-14 w-14 mb-2" src={Notas} />
        <p className="text-gray-300 inline-block sm:text-base text-sm font-bold" >Você ainda não tem tarefas cadastradas</p>
        <p className="text-gray-300  inline-block sm:text-base text-sm ml-2">Crie tarefas e organize seus itens a fazer </p>
        </div>
    )

}