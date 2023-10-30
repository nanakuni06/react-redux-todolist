import { useState } from "react";
import { useDispatch } from "react-redux";
import { getActiveTodo, getAllTodo, getCompleteTodo } from "../redux/action/todo-acrtion";

function FilterTodo() {
  const dispatch = useDispatch();
  const [status, setStatus] = useState({
    statusAll: true,
    statusActive: false,
    statusComplete: false,
  });

  const handleAll = () => {
    dispatch(getAllTodo());
    setStatus({
      statusAll: true,
      statusActive: false,
      statusComplete: false,
    });
  };

  const handleActive = () => {
    dispatch(getActiveTodo());
    setStatus({
      statusAll: false,
      statusActive: true,
      statusComplete: false,
    });
  };

  const handleComplete = () => {
    dispatch(getCompleteTodo());
    setStatus({
      statusAll: false,
      statusActive: false,
      statusComplete: true,
    });
  };

  return (
    <div className="my-5 flex gap-x-4">
      <div onClick={handleAll} className={`badge ${status.statusAll ? "badge-accent" : "badge-ghost"} cursor-pointer`}>
        All
      </div>
      <div onClick={handleActive} className={`badge ${status.statusActive ? "badge-accent" : "badge-ghost"} cursor-pointer`}>
        Active
      </div>
      <div onClick={handleComplete} className={`badge ${status.statusComplete ? "badge-accent" : "badge-ghost"} cursor-pointer`}>
        Completed
      </div>
    </div>
  );
}

export default FilterTodo