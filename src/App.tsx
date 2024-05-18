import { ChangeEvent, FormEvent, useState } from 'react'
import './App.css'
import Todo from './Todo'

interface TodoType {
  title: string;
  description: string;
  done: boolean;
}
function App() {
  const [list, setList] = useState<TodoType[]>([])
  const [text, setText] = useState<string>("")
  const [des, setdes] = useState<string>("")
  const handlesubmit = (e: FormEvent) =>{
    e.preventDefault();
    setList([...list, {
      title:  text,
      description: des,
      done : false
    }])
    setText("")
  } 
  const handleChange = (e: ChangeEvent<HTMLInputElement> ) =>{
    setText(e.target.value)
  }
  return (
    <>
      <form onSubmit={handlesubmit}>
        <input value={text} onChange={handleChange} type="text" placeholder="add new task..." />
        <input value={des} onChange={(e)=> setdes(e.target.value)} type="text" placeholder="add new task..." />
      <button type='submit'>submit</button>
      </form>

     <Todo list={list} />
    </>
  );
}

export default App
