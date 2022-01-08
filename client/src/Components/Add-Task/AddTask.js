import React, { useState } from 'react';
import AddSubTask from './AddSubTask';

function AddTask() {
  // data Variables
  const [data, setData] = useState([]);
  // useState Variables Input
  const [taskSubject, setTaskSubject] = useState("");
  const [describe, setDescribe] = useState("");
  const [subTasksDisplay, setSubTasksDisplay] = useState(false);
  const [subTasks, setSubTasks] = useState([]);

  // Checkbox => Add Sub Task Handler
  const addSubTaskHandler = (e) =>{
   if (e.target.checked == true) {
    setSubTasksDisplay(true);
    // console.log("True");
   }else{
    // console.log("false");
    setSubTasksDisplay(false);
   }
  };

  // Change handler function
  const changeHandler = (e) => {
   if (e.target.name === "taskSubject"){
    setTaskSubject(e.target.value);
   }else if (e.target.name === "describe"){
    setDescribe(e.target.value);
   }
  };

  // Form function
  const submitForm = (e) => {
    e.preventDefault();
    let object = {
      title: e.target["taskSubject"].value,
      desc: e.target["describe"].value,
    };
    setData(() => data.concat(object));
    // After submitting, clear all inputs
    setTaskSubject("");
    setDescribe("");
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <div>
          {/* <label>Task Subject</label> */}
          <input
            type="text"
            name="taskSubject"
            placeholder="Task Subject ..."
            value={taskSubject}
            onChange={changeHandler}
          />
        </div>
        <div>
          {/* <label>Describe</label> */}
          <input
            type="text"
            name="describe"
            placeholder="Describe it ..."
            value={describe}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label for="sub-task">Sub Task</label>
          <input
            name="subTask"
            type="checkbox"
            id="sub-task"
            value="mycheck"
            onClick={addSubTaskHandler}
          />
        </div>
        {subTasksDisplay && (
          <AddSubTask submitForm={submitForm} changeHandler={changeHandler} />
        )}
        <button type="submit">Submit Task</button>
      </form>
    </div>
  );
}

export default AddTask;
