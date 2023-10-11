import React from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { GiConfirmed } from "react-icons/gi";
import { editTask, deleteTask } from "../redux/tasksSlice";
import { useDispatch } from "react-redux";
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io";

type TaskItemProps = {
  id: number;
  title: string;
  isCompleted: boolean;
};

const TaskItem: React.FC<TaskItemProps> = ({ id, title, isCompleted }) => {
  const [editedTask, setEditedTask] = React.useState<string>(title);
  const [isEditing, setIsEditing] = React.useState<boolean>(false);
  const [isCompletedTask, setIsCompletedTask] =
    React.useState<boolean>(isCompleted);
  const dispatch = useDispatch();

  const editHandler = () => {
    dispatch(editTask({ id, editedTask, isCompleted: isCompletedTask }));
    setIsEditing(false);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editHandler();
  };

  const deleteHandler = () => dispatch(deleteTask(id));

  return (
    <li data-test="test-task-item" data-testid="taskItem">
      <form
        className={`my-2 flex items-center justify-between rounded-lg bg-white px-6 py-4
      ${isCompletedTask && "opacity-60"}`}
        onSubmit={submitHandler}
      >
        {isCompletedTask ? (
          <IoIosRadioButtonOn
            data-test="test-task-item-completed"
            data-testid="test-task-item-completed"
            className="text-3xl text-green-500"
            onClick={() => setIsCompletedTask(!isCompletedTask)}
          />
        ) : (
          <IoIosRadioButtonOff
            data-test="test-task-item-not-completed"
            data-testid="test-task-item-not-completed"
            className="text-3xl text-gray-500"
            onClick={() => setIsCompletedTask(!isCompletedTask)}
          />
        )}
        <input
          data-testid="taskItemInput"
          className={`text-md bg-transparent italic text-gray-800 focus:outline-none ${
            isEditing && "rounded-md bg-indigo-100 p-2 ring-1 ring-indigo-400"
          }`}
          value={editedTask}
          autoFocus={isEditing}
          disabled={!isEditing}
          onChange={(e) => setEditedTask(e.target.value)}
        />
        <div className="flex items-center justify-center space-x-4">
          {isEditing ? (
            <GiConfirmed
              className="cursor-pointer rounded-md text-3xl  text-green-500 ring-2 ring-green-400 transition-all hover:text-green-700 hover:ring-green-600"
              onClick={editHandler}
            />
          ) : (
            <AiOutlineEdit
              className="cursor-pointer rounded-md text-3xl  text-green-500 ring-2 ring-green-400 transition-all hover:text-green-700 hover:ring-green-600"
              onClick={() => setIsEditing(true)}
            />
          )}
          <AiOutlineDelete
            className="cursor-pointer rounded-md text-3xl text-pink-500 ring-2 ring-pink-400 transition-all hover:text-pink-700 hover:ring-pink-600"
            onClick={deleteHandler}
            data-test="test-task-item-delete"
          />
        </div>
      </form>
    </li>
  );
};

export default TaskItem;
