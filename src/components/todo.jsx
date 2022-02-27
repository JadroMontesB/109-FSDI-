import './todo.css';
import { useState } from 'react';

const Todo = () => {
    const [text, setText] = useState("");
    const [list, setList] = useState([]);

    
     const handleAdd = () => {

        let allTodos = [...list];
        allTodos.push(text);
        setList(allTodos);
    };

    const handleText = (e) => {

        setText(e.target.value); 
    };
  
    return(

        <div className="todo-page">

            <h4>My Shopping List</h4>

            <input onChange={handleText} type="text"/>
            <button onClick={handleAdd} className="btn btn-sm btn-primary"> Add</button>

            <div className="todo-list">

                {list.map(todo => <p key={todo}>{todo}</p>)}

            </div>

        </div>

    );
};

export default Todo;