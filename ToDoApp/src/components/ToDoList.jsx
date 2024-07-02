import ToDo from "./ToDo"

function ToDoList({ todos, onRemoveTodo, onUpdateTodo }) {
    return (
        <div style={{ marginTop: '50px', width: '100%' }}>
            {
                todos && todos.map((todo) => (
                    <ToDo key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} onUpdateTodo={onUpdateTodo} />

                ))
            }

        </div>
    )
}

export default ToDoList