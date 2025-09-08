import { useState } from "react";
import TodoData from "./todoData";
import TodoInput from "./todoInput";

interface ITodo {
  id: number;
  title: string;
  isComplete: boolean;
}

const TodoList = () => {
  // const todo = [
  //   {
  //     id: 1,
  //     title: "Hoc React Typescript",
  //     isComplete: false,
  //   },
  //   {
  //     id: 2,
  //     title: "Subcribe YTB",
  //     isComplete: true,
  //   },
  //   {
  //     id: 3,
  //     title: "Hoc TA",
  //     isComplete: true,
  //   },
  //   {
  //     id: 4,
  //     title: "Project",
  //     isComplete: true,
  //   },
  // ];

  const [listTodo, setListTodo] = useState<ITodo[]>([]);

  const addNewTodo = (todo: ITodo) => {
    setListTodo([...listTodo, todo]);
  };

  const deleteTodo = (id: number) => {
    const newTodo = listTodo.filter((item) => item.id !== id);
    setListTodo(newTodo);
  };

  return (
    <>
      <div
        style={{
          width: "600px",
          margin: "50px auto",
          border: "1px solid #ccc",
          borderRadius: 10,
          padding: 10,
        }}
      >
        <div
          style={{
            padding: "10px 0",
            borderBottomWidth: 1,
            borderBottomColor: "#ccc",
            borderBottomStyle: "solid",
          }}
        >
          My todo List:{" "}
        </div>
        <br />
        <TodoInput
          // name="your todo"
          addNewTodo={addNewTodo}
        />
        <TodoData
          todo={listTodo}
          // owner={"Bin"} age={19} isDeveloper={true}
          deleteTodo={deleteTodo}
        />
      </div>
    </>
  );
};
export default TodoList;
