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
    <div className="my-5 flex gap-x-2">
      <div onClick={handleAll} className={`badge ${status.statusAll ? "bg-violet-900 px-3 py-3 text-white border-none" : "hover:badge-ghost hover: px-3 hover:py-3"} cursor-pointer px-3 py-3`}>
        All
      </div>
      <div onClick={handleActive} className={`badge ${status.statusActive ? "bg-violet-900 px-3 py-3 text-white border-none" : "hover:badge-ghost hover: px-3 hover:py-3"} cursor-pointer px-3 py-3`}>
        Active
      </div>
      <div onClick={handleComplete} className={`badge ${status.statusComplete ? "bg-violet-900 px-3 py-3 text-white border-none" : "hover:badge-ghost hover: px-3 hover:py-3"} cursor-pointer px-3 py-3`}>
        Completed
      </div>
    </div>
  );
}

export default FilterTodo