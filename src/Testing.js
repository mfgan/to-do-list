import AddTasksBtn from './component/addTask';
import './App.css';
import React, { useState, useEffect } from "react";
function App() {
  // let array=['a','b','c','k']
  const [array, SetArray] = useState(['a','b','c','k']);
  // let array=[a,b,c,d,e];
  console.log(array.length);
  // add item to array
  // array.push('Ming Feng')
  let Actions = [
    {
      name: "complete",
      edit: false,
    },
    {
      name: "edit",
      edit: true,
    },
    {
      name: "delete",
      edit: false,
    },
  ];
  const InitialState={
    open: false,
    name: "Add Task",
    desc: "",
  }
  // InitialState.name="Ming Feng"
  // console.log(InitialState.name)
  // Actions[0].name="Ming Feng"
  // console.log(Actions[0])
  const AddArray=(item)=>{
    let temp =array
    temp.push(item)
    console.log(temp)
    SetArray(temp);
    console.log(array)
  }
  const editTasks = (title,index) => {
    let DuplicateNewArray = array.map((w, i) =>
    { if(i=== index ){
      return title 
     }
     return w
     }
    );
    console.log(DuplicateNewArray)
    SetArray(DuplicateNewArray);
  };
  const deleteTask = (index) => {
    let DuplicateNewArray = array.filter((w,i)=>i!==index)
    SetArray(DuplicateNewArray);
  };
  return (
    <div className="App-header">
    <div> <div>{array.map((w,index)=>{return <h1 key={w}>{w}</h1>})}</div>
    </div>
  
      <AddTasksBtn onClick={() =>
         AddArray('Ming feng')
        } text={'Add Tasks'} />
        <AddTasksBtn onClick={() =>
         editTasks('Mieng',3)
        } text={'Edit Tasks'} />
        <AddTasksBtn onClick={() =>
         deleteTask(3)
        } text={'Delete Tasks'} />
</div>
);
}

export default App;
