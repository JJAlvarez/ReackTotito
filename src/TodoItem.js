
function TodoItem(props) {
    return (
        <div>
            {props.todoItem.completed ? <></> : <span onClick={
                () => {
                    props.completeTodo(props.todoItem)
                }
            }>V</span>}
            <br />
            <label>{ props.todoItem.name }</label>
            <br />
            <span onClick={ () => {
                props.deleteTodo(props.todoItem)
            } }>X</span>
            <br />
        </div>
    );
}

export default TodoItem;