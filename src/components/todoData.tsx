interface IProps {
  todo: {
    id: number;
    title: string;
    isComplete: boolean;
  }[];
}

type TProps = {
  todo: {
    id: number;
    title: string;
    isComplete: boolean;
  }[];
};
// props: IProps or TProps
const TodoData = (props: TProps) => {
  const { todo } = props;
  return (
    <>
      <div>
        {todo.map((item) => {
          return (
            <div key={item.id}>
              <div>{item.title}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default TodoData;
