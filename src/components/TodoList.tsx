import React, { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { fetchTodo, setTodoPage } from "../store/action-creators/todo";

const TodoList: React.FC = () => {
  const { fetchTodo, setTodoPage } = useActions();
  const { todos, loading, error, page, limit } = useTypedSelector(
    (state) => state.todo
  );
  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    fetchTodo(page, limit);
  }, [page]);

  if (loading) {
    return <h1>Іде загрузка даних ...</h1>;
  } else if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.id} - {todo.title}
        </div>
      ))}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {pages.map((p) => (
          <div
            key={p}
            onClick={() => setTodoPage(p)}
            style={{
              border: p === page ? "2px solid green" : "1px solid gray",
              padding: "10px",
              margin: "0px 5px",
            }}
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
