import { useState } from "react";

interface IProps {
  name?: string;
  // Định nghĩa funtion
  addNewTodo: (value: ITodo) => void;
}

interface ITodo {
  id: number;
  title: string;
  isComplete: boolean;
}

function randomInterger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const TodoInput = (props: IProps) => {
  const { addNewTodo } = props;
  // Javascript State
  // const [todo, setTodo] = useState("");
  // Typescript State
  const [todo, setTodo] = useState<string>("");

  // const [todo, setTodo] = useState<number>(2);

  const handTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  const handleClick = () => {
    if (!todo) {
      alert("Không có dữ liệu");
      return;
    }
    addNewTodo({
      id: randomInterger(1, 1000000),
      title: todo,
      isComplete: false,
    });
    setTodo("");
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: 15,
          marginBottom: 20,
        }}
      >
        <input type="text" value={todo} onChange={handTextChange} />
        <button onClick={handleClick}>Add</button>
      </div>
    </>
  );
};
export default TodoInput;
