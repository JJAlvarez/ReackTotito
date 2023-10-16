
function TodoList(props) {
    return (
        <div>
            <label>Estos son tus pendientes:</label>
            <ul>
                { props.children }
            </ul>
        </div>
    )
}

export default TodoList;