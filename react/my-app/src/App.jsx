
import { useState } from 'react'
import './App.css'

let initList = [
  {id:1, tittle: "Wynieść śmieci"},
  {id:2, tittle: "Zakupy"},
  {id:3, tittle: "Nakarm psy"},

]

function App() {
  let [list, setList] = useState(initList)
  let [newTittle, setNewTitle] = useState('test')

  const addTask = ()=>{
    const newItem = {id: Math.random, tittle:newTittle}
    setList([...list, newItem])
    setNewTitle('')
  }

  return (
    <>
      <h1>ToDo</h1>
      <ul>
        {list.map(item=>
          <li key={item.id}>{item.tittle}</li>
        )}
      </ul>
      <input value={newTittle} onChange={(e)=>setNewTitle(e.target.value)}/>
      <button onClick={addTask}>Dodaj nowe zadanie</button>
    </>
  )
}

export default App
