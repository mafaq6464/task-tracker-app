import './App.css';
import Header from './components/header';
import TasksComponents from './components/tasks';
import AddTasksComponents from './components/addTask';

function App() {
  return (
    <div className="App">
        <Header/>
        <TasksComponents title="Tasks:" />
        <AddTasksComponents title="Add Tasks:" />
    </div>
  );
}

export default App;
