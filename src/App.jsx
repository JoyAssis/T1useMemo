import React, {useState,useMemo}from 'react';

export default function App(){
const [tarefas, setTarefas] = useState([])
const [input, setInput] = useState([])
const [count, setCount] = useState(0)
const aleatorio = useMemo(()=> count * Math.random(), [count])

function handleAdd(){
  setTarefas([...tarefas,input]),
  setInput("")
}

//useMemo sintaxe
// const valor = useMemo(()=>{
//   calculo()
// }, [valorquemuda])
const totalTarefas = useMemo(()=> tarefas.length, [tarefas])

  return(
    <>
    <h1>{input}</h1>
    <input value={input} type="text" onChange={(e)=>setInput(e.target.value)}/>
    <button onClick={handleAdd}>adicionar</button>
    {tarefas.map((tarefas) =>(
      <li key={tarefas}>{tarefas}</li>
    ))}
    <h1>Você tem tarefas {totalTarefas} para fazer</h1>
    <h2>{count}</h2>
    <button onClick={()=>{setCount(count +1)}}>+1</button>
    <h2>multiplicanco count por um numero aleatório: {aleatorio}</h2>
    <h3>Nova atualização</h3>
    </>
  )
}
