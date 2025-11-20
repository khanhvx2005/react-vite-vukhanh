const TodoData = (props) => {
    const { name, age, data } = props;
    // const name = props.name;
    return (
        <div className="todo-data">
            <div>My name is {name}</div>
            <div>Learn Todo</div>
        </div>
    );
}
export default TodoData;