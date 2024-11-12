import logo from './logo.svg';
import './App.css';
import './todolist.css';
import { useState } from 'react';

function App() {
  let  [todoList,setTodolist] =useState([])
  


  let saveToDoList=(event)=>{

    let toname=event.target.toname.value;
    if(!todoList.includes(toname)){
      let finalDolist=[...todoList,toname]
      setTodolist(finalDolist)

    }
    else{
      alert("ToDo Name Allready Exists...")
    }

    event.preventDefault();
  }

  let list=todoList.map((value,index)=>{

     

    return (
      <TodoListItems value={value} key={index} indexNumber={index}  
      todoList={todoList}
      setTodolist={setTodolist}
      />

      
    )
  })
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <form onSubmit={saveToDoList}>
        <input type="text" name="toname"/> 
        <button>Save</button>
      </form>

      <div className='outerDiv'>
      <ul>
        {list}
      </ul> 
      </div>
    </div>
  );
}

export default App;

function TodoListItems({value,indexNumber,todoList,setTodolist}){

  let [status,setStatus]=useState(false)

  let deleteRow=()=>{
    let finalData=todoList.filter((v,i)=> i!=indexNumber)
    setTodolist(finalData)

  }

  let checkStatus=()=>{
    
  }
  return (
    <li className={(status)? 'completetodo': ''} onClick={checkStatus}>{indexNumber+1} {value} <span onClick={deleteRow}>&times;</span></li>
  )
}
