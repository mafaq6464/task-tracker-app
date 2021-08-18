import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    padding: 0 15px;
    max-width: 1160px;
    margin: 0 auto;
`;

const TaskListWrap = styled.ul`
    list-style-type: none;
    padding: 0;
`;

const TaskList = styled.li`
    padding: 15px;
    background: #f5f5f5;
    margin-bottom: 12px;
    font-size: 16px;
    color: black;
    text-transform: capitalize;
    position: relative;
`;

const TaskTitle = styled.h3`
    margin: 0;
`;

const CrossIconBtn = styled.button`
   display: flex;
   position: absolute;
   top: 50%;
   right: 15px;
   transform: translateY(-50%);
`;

const TasksComponents = (props) => {
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

    const deleteList = (index) => {
        console.log("id", index.target.id);
        return setTasks(tasks.filter( task => task.id !== index.target.id ));
    }

    return (
        <Container>
            <h3>{props.title}</h3>
            <TaskListWrap>
                { tasks.map( task => 
                    <TaskList key={task.id}>
                        <TaskTitle>
                            {task.taskName}
                            <CrossIconBtn id={task.id} onClick={deleteList}>x</CrossIconBtn>
                        </TaskTitle>
                    </TaskList>
                )}
            </TaskListWrap>
        </Container>
    );
}

export default TasksComponents;