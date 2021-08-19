import './App.css';
import { useState } from "react";
import Header from './components/header';
import TasksComponents from './components/tasks';
import AddTasksComponents from './components/addTask';

function App() {

  const [tasks, setTasks] = useState([
      {
          "id": "0",
          "taskName": "doctors appointment",
      },
      {
          "id": "1",
          "taskName": "office meeting",
      },
      {
          "id": "2",
          "taskName": "shopping",
      }
  ])

  const [ inputValue, setinputValue ] = useState("");

  const deleteList = (index) => {
      console.log("id", index.target.id);
      return setTasks(tasks.filter( task => task.id !== index.target.id ));
  }

  const addTask = (event) => {
    event.preventDefault();
    console.log("task submitted", tasks.length);
    return tasks.push(
      {
        "id": tasks.length,
        "taskName": inputValue,
      }
    );
  }

  const editInput = (e) => {
    console.log("Edit Input", inputValue);
    return setinputValue( e.target.value );
  }

  return (
    <div className="App">
        <Header/>
        <TasksComponents title="Tasks:" deleteList={deleteList} tasks={tasks} />
        <AddTasksComponents title="Add Tasks:" addTask={addTask} inputValueProp={inputValue} editInputProp={editInput} />
    </div>
  );
}

export default App;
