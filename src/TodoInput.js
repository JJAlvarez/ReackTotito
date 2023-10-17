
function TodoInput(props) {
    return (
        <div>
            <input 
                value={props.todoText}
                onChange={(event) => {
                    props.setTodoText(event.target.value);
                }}  
                placeholder="Aquí coloca tu pendiente" 
                className="todo-input" />
        </div>
    );
}

export default TodoInput;