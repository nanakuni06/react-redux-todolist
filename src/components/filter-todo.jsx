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
    <div className="my-5 flex gap-x-2 sm:flex-none">
      <div onClick={handleAll} className={`badge ${status.statusAll ? "px-3 py-1 rounded-xl bg-violet-700 text-white" : "px-3 py-1 rounded-xl hover:bg-violet-700 hover:text-white"} cursor-pointer`}>
        All
      </div>
      <div onClick={handleActive} className={`badge ${status.statusActive ? "px-3 py-1 rounded-xl bg-violet-700 text-white" : "px-3 py-1 rounded-xl hover:bg-violet-700 hover:text-white"} cursor-pointer`}>
        Active
      </div>
      <div onClick={handleComplete} className={`badge ${status.statusComplete ? "px-3 py-1 rounded-xl bg-violet-700 text-white" : "px-3 py-1 rounded-xl hover:bg-violet-700 hover:text-white"} cursor-pointer`}>
        Completed
      </div>
    </div>
  );
}

export default FilterTodo