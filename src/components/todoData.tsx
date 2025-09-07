// interface sẽ dùng để định nghĩa Object (nên code OOP)
interface IProps {
  todo: {
    id: number;
    title: string;
    isComplete: boolean;
  }[];
  owner?: string;
  age?: number;
  isDeveloper?: boolean;
}

// type
// type TProps = {
//   todo: {
//     id: number;
//     title: string;
//     isComplete: boolean;
//   }[];
// };
// ======================================================================================
// Lưu ý :
// Nên code interface tới khi mà code type
// Nên dùng Interface khi code Hướng Đối Tượng (OOP)
// Nên dùng Type khi dùng thuộc tính đơn giản của một đối tượng
//
// Ex :
// Khá bất tiện khi dùng interface chỉ để định nghĩa một thuộc tính đơn giản của Object
// colors: "red" | "yellow" | "pink"
//
// interface IColor {
//   colors: "red" | "yellow" | "pink"
// }
//
// Sử dụng type sẽ hợp lí hơn và nó sẽ gợi ý code
//
// type TColor = "red" | "yellow" | "pink"
//
// const color: TColor = 'pink';
// ======================================================================================

// props: IProps or TProps
const TodoData = (props: IProps) => {
  const { todo, owner = "unknown" } = props;
  return (
    <>
      <div>
        {todo.map((item) => {
          return (
            <div key={item.id}>
              <div style={{ padding: "10px 0" }}>{item.title}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default TodoData;
