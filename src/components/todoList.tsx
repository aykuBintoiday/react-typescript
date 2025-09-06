import TodoData from "./todoData";

const TodoList = () => {
  const todo = [
    {
      id: 1,
      title: "Hoc React Typescript",
      isComplete: false,
    },
    {
      id: 2,
      title: "Subcribe YTB",
      isComplete: true,
    },
    {
      id: 3,
      title: "Hoc TA",
      isComplete: true,
    },
  ];
  return (
    <>
      <div>My todo List: </div>
      <br />
      <TodoData todo={todo} />
    </>
  );
};
export default TodoList;
