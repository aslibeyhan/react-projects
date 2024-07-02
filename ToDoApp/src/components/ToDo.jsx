import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import '../App.css';
import { useState } from "react";

function ToDo({ todo, onRemoveTodo, onUpdateTodo }) {
    const { id, content } = todo;  // Destructuring for an object

    const [editable, setEditable] = useState(false);

    const [newTodo, setNewTodo] = useState(content);

    const removeTodo = () => {
        onRemoveTodo(id);
    };

    const updateTodo = () => {
        const request = {
            id: id,
            content: newTodo

        }
        onUpdateTodo(request);
        setEditable(false);
    }

    return (
        <div className="todol">
            <div>
                {editable ? <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)}
                    style={{ width: '380px' }} className='todo-input' type='text' /> : content


                }
            </div>
            <div>
                <IoIosRemoveCircle className="todo-icons" onClick={removeTodo} />
                {
                    editable ? <FaCheckCircle className="todo-icons" onClick={updateTodo} />
                        : <FaEdit className="todo-icons" onClick={() => setEditable(true)} />
                }


            </div>
        </div>
    );
}

export default ToDo;
