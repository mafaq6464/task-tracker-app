import './App.css';
import { useState } from "react";
import Header from './components/header';
import TasksComponents from './components/tasks';
import AddTasksComponents from './components/addTask';

function App() {

  const [tasks, setTasks] = useState([
      {
          id: 0,
          "taskName": "doctors appointment",
      },
      {
          id: 1,
          taskName: "office meeting",
      },
      {
          id: 2,
          taskName: "shopping",
      }
  ])

  const deleteList = (id) => {
      setTasks(tasks.filter( task => task.id !== id ));
  }

  const addTask = (data) => {
    const copy = [...tasks];
    copy.push({id:tasks.length,taskName:data});
    setTasks(copy);
  }

  return (
    <div className="App">
        <Header/>
        <TasksComponents title="Tasks:" deleteList={deleteList} tasks={tasks} />
        <AddTasksComponents title="Add Tasks:" addTask={addTask} />
    </div>
  );
}

export default App;
