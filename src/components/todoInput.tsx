import { useState } from "react";

interface IProps {
  name?: string;
}
const TodoInput = (props: IProps) => {
  // Javascript State
  // const [todo, setTodo] = useState("");
  // Typescript State
  const [todo, setTodo] = useState<string>("");

  // const [todo, setTodo] = useState<number>(2);

  const handTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  const handleClick = () => {
    console.log(todo);
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
