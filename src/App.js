import './index.css';
import React, { useState } from 'react';

function App() {
  const [createToDo, setCreateToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const handleNewSubmit = (e) => {
    e.preventDefault();

    const listItem = {
      text: createToDo,
      complete: false
    };

    setToDos([...toDos, listItem])
    setCreateToDo("")
  };

  const handleDelete = (delIdx) => {
    const filteredToDos = toDos.filter((toDo, i) => {
      return i !== delIdx;
    });
    setToDos(filteredToDos);
  };

  const handleComplete = (idx) => {
    const completedToDos = toDos.map((toDo, i) => {
      if (idx === i) {
        const updatedToDo = {...toDo, complete: !toDo.complete};
        return updatedToDo
      } else {
        return toDo;
      }
    });

    setToDos(completedToDos);
  }

  return(
    <div className="list">
      <h1>To Do List</h1>
      <form onSubmit = {(e) => {
        handleNewSubmit(e);
      }}>
        <input onChange={(e) => {
          setCreateToDo(e.target.value);
        }} 
          type="text"
          value={createToDo} />
        <div>
          <button>Add</button>
        </div>
      </form>

      {toDos.map((toDo, i) => {
        const toDoStyles = [];
          if (toDo.complete) {
            toDoStyles.push("strikethru")
          }
        return(
          <div key={i}>
            <input onChange = {(e) => {
              handleComplete(i);
            }} checked = {toDo.complete} type="checkbox" />
            <span className= {toDoStyles.join(" ")}>{toDo.text}</span>
            <button className="button" onClick = {(event) => {
              handleDelete(i);
            }}>Delete</button>
          </div>
        );
      })}
    </div>
  )
}

export default App;