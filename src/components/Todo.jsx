import CheckboxLineIcon from 'remixicon-react/CheckboxLineIcon';
import CheckboxBlankLineIcon from 'remixicon-react/CheckboxBlankLineIcon';

function Todo({todo,index,remove}){

  function handle(){
    remove(index);
  }

  return <div className="todo" onClick={handle}><CheckboxBlankLineIcon className="icon nohover" size={18} /><CheckboxLineIcon className="icon hover" size={18} /> {todo.text}</div>

}

export default Todo;