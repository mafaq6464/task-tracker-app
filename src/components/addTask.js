import styled from "styled-components";

const AddTaskWrapper = styled.div`
    padding: 20px 0;
`;

const Container = styled.div`
    padding: 0 15px;
    max-width: 1160px;
    margin: 0 auto;
`;

const TaskTitle = styled.h3`
    margin: 0 0 15px;
`;

const AddTaskForm = styled.form`
    display: flex;
    margin: 0 0 15px;
    border: 2px solid #000;
`;

const AddTaskFormInput = styled.input`
    display: inline-block;
    font-size: 14px;
    line-height: 1.5;
    font-weight: 500;
    color: #000;
    padding: 12px 15px;
    border-radius: 0;
    border: none;
    text-transform: capitalize;
    width: 80%;
`;

const AddTaskFormBtn = styled.button`
    display: inline-block;
    width: 20%;
    border: none;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 700;
    cursor: pointer;
`;

const AddTasksComponents = () => {

    const addTask = () => {
        console.log("task submitted");
    }

    return (
        <AddTaskWrapper>
            <Container>
                <TaskTitle>Add Tasks:</TaskTitle>
                <AddTaskForm onSubmit={addTask}>
                    <AddTaskFormInput placeholder="add task" />
                    <AddTaskFormBtn type="submit">Add</AddTaskFormBtn>
                </AddTaskForm>
            </Container>
        </AddTaskWrapper>
    );
}

export default AddTasksComponents;