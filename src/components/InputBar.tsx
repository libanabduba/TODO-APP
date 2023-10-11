import React from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";

const InputBar = () => {
  const [input, setInput] = React.useState<string>("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTask(input));
    setInput("");
  };

  return (
    <form
      data-test="test-form"
      className="flex w-[45rem] items-center justify-evenly rounded-xl bg-gray-100 px-6 py-10"
      onSubmit={handleSubmit}
    >
      <input
        data-testid="inputBar"
        type="text"
        className="text-md w-2/3 rounded-md border-2 border-gray-300 p-2 font-medium ring-2 ring-indigo-300 transition-all focus:outline-none focus:ring-indigo-500"
        placeholder="Add a task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        data-testid="submitButton"
        className={`rounded-md bg-pink-500 px-10 py-2 font-medium text-white transition-all hover:bg-pink-700
        ${!input && "cursor-not-allowed opacity-50"}
        `}
        disabled={!input}
        data-test="test-add-button"
      >
        Add
      </button>
    </form>
  );
};

export default InputBar;
