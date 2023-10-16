
function TodoInput(props) {
    return (
        <div>
            <input 
                value={props.todoText}
                onChange={(event) => {
                    props.setTodoText(event.target.value);
                }}  
                placeholder="Ir a hacer las compras al super" 
                className="todo-input" />
        </div>
    );
}

export default TodoInput;