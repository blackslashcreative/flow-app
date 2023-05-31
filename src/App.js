import React from 'react';
import './App.css';
import Todo from './components/Todo.jsx';
import TodoForm from './components/Form.jsx';
import FlowIcon from './restart-line.svg';

function App() {
  /* ToDos List Initialize State */ 
  const [todos, setTodos] = React.useState([
    {
      text: 'build todo functionality',
      isCompleted: false,
    },
    {
      text: 'add a focus timer',
      isCompleted: false,
    },
    {
      text: 'package as a lightweight desktop app',
      isCompleted: false,
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text:text, isCompleted:false}]; // update todos state, adding new one
    setTodos(newTodos);
  }
  
  const removeTodo = index  => {
    let temp = [...todos];
    temp.splice(index,1);
    setTodos(temp);
  }

  /* JSX list of todo's and form to add a new one */ 
  return(
    <div className="app">
      <div id="logo">
        <img src={FlowIcon} alt="Flow Logo" /> <h1>Flow App</h1>
      </div>
      <div className="todo-list">
        {todos.map( (todo, index) => <Todo todo={todo} index={index} remove={removeTodo}/> )}
        <TodoForm addTodo={addTodo}/>
      </div>
    </div>
  );
}

export default App;