import "./App.css";
import ListCard from "./components/listCard";
import PopUp from "./components/PopUp";
import React, { useState, useEffect } from "react";
import InputComponent from "./components/InputComponent";
import errorChecking from "./utils/errorChecking";
const Tasks = () => {
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

  const [NewArry, SetNewArray] = useState([]);
  const [error, SetError] = useState(false);
  const [popUpData, SetpopUpData] = useState(InitialState);

  // useEffect(()=>{
  //   setInterval(()=>SetError(false),5000)
  // },[error])
  // useEffect(()=>{
  //  let temp= JSON.parse(localStorage.getItem('tasksList'))
  //  if(temp){
  //   SetNewArray(temp)
  //  }
  // },[])

  const UpdateArray=(DuplicateNewArray)=>{
    localStorage.setItem('tasksList',JSON.stringify(DuplicateNewArray))
    SetNewArray(DuplicateNewArray);
  }

// Main Function
  const setCompleteTask = (index) => {
    let DuplicateNewArray = NewArry.map((w, i) =>
      i === index ? { ...w, complete: true } : w
    );
    UpdateArray(DuplicateNewArray);
  };
  const editTasks = (text,index) => {
    let DuplicateNewArray = NewArry.map((w, i) =>
      i === index ? { ...w, title: text } : w
    );
    UpdateArray(DuplicateNewArray);
  };
  const deleteTask = (index) => {
    let DuplicateNewArray = NewArry.filter((w,i)=>i!==index)
    UpdateArray(DuplicateNewArray);
  };
  const addTasks = (data) => {
    let DuplicateNewArray = NewArry;
    DuplicateNewArray = [...DuplicateNewArray, { title: data, complete: false }];
    UpdateArray(DuplicateNewArray);
  };

  return (
    <>
      <div className="AddTaskContainer">
        <h3>Tasks</h3>
        <div style={{ width: "100%" }}>
          {NewArry.map((w, i) => {
            return (
              <ListCard
                title={w.title}
                data={Actions}
                completed={w.complete}
                complete={() => setCompleteTask(i)}
                deleteTask={() => deleteTask(i)}
                editTasks={(text) => editTasks(text,i)}
                index={i}
              />
            );
          })}
        </div>
        <div
          onClick={() =>
            SetpopUpData({
              ...popUpData,
              open: true,
            })
          }
          style={{ borderRadius: 10 }}
          className="closeBtnFooter"
        >
          Add Tasks
        </div>
      </div>
      {popUpData.open && (
        <PopUp
          title={popUpData.name}
          CloseBtn={() => {
            SetpopUpData(InitialState);
          }}
          description={
              <InputComponent title='Tasks' onChange={(e)=>{
                    SetpopUpData({
                        ...popUpData,
                        desc:e.target.value
                    })}}
                    value={popUpData.desc}
                    errorText={error&&'Please Provide input value'}
                    />
          }
          disableOkBtn={error}
          okBtn={()=>{
            if(errorChecking(popUpData.desc)){
                SetError(true)
               return 
            }  
            addTasks(popUpData.desc)
            SetpopUpData(InitialState);
        }
            
        }
        />
      )}
    </>
  );
};

export default Tasks;