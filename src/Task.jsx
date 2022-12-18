import { HiOutlineTrash } from "react-icons/hi";

export const Task = (props) => {
  return (
    <li className="text-lg mb-4 justify-start flex gap-4">
      <button onClick={() => props.deleteTask(props.id)}>
        <HiOutlineTrash />
      </button>
      <button
        onClick={() => props.completeTask(props.id)}
        type="button"
        style={{
          backgroundColor: props.completed ? "green" : "none",
          text: props.completed ? "white" : "red",
        }}
        className="btn btn-sm btn-outline"
      >
        Done!
      </button>
      <h2 style={{ textDecoration: props.completed ? "line-through" : "none" }}>
        {props.taskName}
      </h2>
    </li>
  );
};
