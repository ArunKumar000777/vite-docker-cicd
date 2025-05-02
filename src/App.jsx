import { useState } from "react";

function App() {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");
    const [editId, setEditId] = useState(null);

    function addTodo(e) {
        e.preventDefault();
        if (editId) {
            setTodos(todos.map((item) => (item.id === editId ? { ...item, title: todo } : item)));
            setEditId(null);
        } else {
            const newTodo = { id: Date.now(), title: todo };
            setTodos([...todos, newTodo]);
        }
        setTodo("");
    }
    function deleteTodo(id) {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    function editTodo(id) {
        const todoToEdit = todos.find((todo) => todo.id === id);
        setTodo(todoToEdit.title);
        setEditId(todoToEdit.id);
    }

    return (
        <div>
            <h1
                style={{
                    color: "rebeccapurple",
                    textAlign: "center",
                    textTransform: "capitalize",
                    fontWeight: "900",
                    fontFamily: "monospace",
                }}
            >
                Todo list app created by arun
            </h1>
            <form onSubmit={(e) => addTodo(e)}>
                <input type="text" placeholder="enter a task" value={todo} onChange={(e) => setTodo(e.target.value)} />
                <button type="submit">add</button>
            </form>
            <ul>
                {todos.length > 0 ? (
                    todos.map((todo, i) => {
                        return (
                            <li key={todo.id}>
                                {i + 1} {todo.title}
                                <button onClick={() => editTodo(todo.id)}>edit</button>
                                <button onClick={() => deleteTodo(todo.id)}>delete</button>
                            </li>
                        );
                    })
                ) : (
                    <h5>there is no todo</h5>
                )}
            </ul>
        </div>
    );
}

export default App;
