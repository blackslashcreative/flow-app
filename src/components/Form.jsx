import React from 'react';

function TodoForm({addTodo}){
  /* ToDo Form Value */ 
  const [value, setValue] = React.useState('');

  /* Handle Form Submit */ 
  const handleSubmit = e => {
    e.preventDefault(); // prevent page reload 
    if (!value) return; // check for input 
    addTodo(value);
    setValue(''); // clear the form input 
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        id="add-todo"
        type="text"
        className="input"
        value={value}
        placeholder="add a todo, press enter..."
        onChange={e => setValue(e.target.value)}
        />
    </form>
  );
}

export default TodoForm;