import { useState } from 'react'
import './App.css'

function App() {
  const [list, setList] = useState([])
  const [undid, setUndid] = useState([])
  
  function handleCreateCircle (e){
    const newCircle = {
      clientX:e.clientX,
      clientY:e.clientY 
    }
    setList( (prev) => [...prev, newCircle])
  }

  function handleUndo(){
    const lastItem = list[list.length - 1]

    if(list.length === 0){
      return;
    }

    setUndid((prev) => [...prev, lastItem])

    setList((prev) => {
      const newArr = [...prev].slice(0, -1)
      return newArr
    })
  }

  function handleRedo (){
    const lastItem = undid[undid.length - 1]

    if(undid.length === 0){
      return;
    }

    setUndid((prev) => {
      const newArr = [...prev].slice(0, -1)
      return newArr
    })

    setList((prev) => [...prev, lastItem])
  }

  function clearAll (){
    setList([])
  }

  return (
    <main>
    <header>
      <h1>click</h1>
      <div className='actions'>
        <button
         onClick={handleUndo}
         className='undo'
         >Desfazer
         </button>

        <button 
        onClick={handleRedo}
        className='redo'
        >Refazer</button>

        <button 
        onClick={clearAll}
        className='clearAll'
        >Limpar tudo</button>
      </div>
    </header>
      <div onClick={handleCreateCircle} id='page'>
        {
        list.map((item, index) => (
        <div 
        style={{
          left:item.clientX,
          top: item.clientY
        }}
        className='circle'
        key={index}
        >
        </div>
        ))
        }
      </div>
    </main>
  )
}

export default App
