import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const addTodo = () => {
    if (text.trim() === "") {
      return;
    }
    let newTodo = {
      id: Date.now(),
      todo: text,
      completed: false,
    };
    setToDoList([...toDoList, newTodo]);
    setText("");
  };
  const deleteTask = (taskId) => {
    setToDoList(toDoList.filter((task) => task.id !== taskId));
  };

  return (
    <>
      <div className="todo-input">
        <h1>To-Do</h1>
        <input
          type="text"
          className="input-text"
          name="todo"
          placeholder="To-Do"
          value={text}
          onChange={handleChange}
        />
        <button onClick={addTodo}>Submit</button>
      </div>
      {toDoList.length === 0 ? null : (
        <div className="todo-list">
          <ul>
            {toDoList.map((toDoObj) => (
              <li key={toDoObj.id}>
                  {toDoObj.todo}
                  <button
                    onClick={() => deleteTask(toDoObj.id)}
                    className="delete-btn"
                    aria-label="Delete"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#080808ff"
                        d="M9 3v1H4v2h16V4h-5V3H9zm-4 6v11c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V9H5zm2 2h6v9H7v-9z"
                      />
                    </svg>
                  </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
export default App;
