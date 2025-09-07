interface IProps {
  name?: string;
}
const TodoInput = (props: IProps) => {
  const { name = "hãy điền tên vào" } = props;
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: 15,
          marginBottom: 20,
        }}
      >
        <input value={name} type="text" />
        <button>Add</button>
      </div>
    </>
  );
};
export default TodoInput;
