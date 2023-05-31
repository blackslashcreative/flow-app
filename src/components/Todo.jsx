function Todo({todo,index,remove}){

  function handle(){
    remove(index);
  }

  return <div className="todo" onClick={handle}>{todo.text} <i class="hover ri-delete-back-2-line"></i></div>

}

export default Todo;