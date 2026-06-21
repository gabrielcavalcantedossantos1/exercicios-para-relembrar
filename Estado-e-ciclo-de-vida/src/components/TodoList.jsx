import { useState } from "react";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (task.trim() !== "") {
      const newTask = {
        id: Date.now(),
        text: task,
        completed: false,
      };

      setTasks([...tasks, newTask]);
      setTask("");
    }
  }

  const toggleTaskCompletion = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  return (
    <div>
      <header>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Adicione uma tarefa"
            onChange={(e) => setTask(e.target.value)}
            value={task}
          />
          <button type="submit">Adicionar</button>
        </form>
      </header>

      <main>
        <h3>Tarefas</h3>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.text} - {task.completed ? "Concluída" : "Pendente"}
              <button onClick={() => toggleTaskCompletion(task.id)}>
                {task.completed ? "Desmarcar" : "Marcar"}
              </button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default TodoList;
