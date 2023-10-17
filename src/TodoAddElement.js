function AddTodo(props) {
    return (
        <button
            onClick={props.onAddTodo}
        >+</button>
    );
}

export default TodoAddElement;