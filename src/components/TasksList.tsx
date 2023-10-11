import React from "react";
import TaskItem from "./TaskItem";
import { useSelector } from "react-redux";

const TasksList = () => {
  const { tasks } = useSelector((state: any) => state.tasks);

  return (
    <div className="w-[45rem] rounded-md bg-gray-100 px-16 py-10">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl text-indigo-700">Tasks </h1>
      </div>
      <ul data-test="test-tasks-list" data-testid="tasksList">
        {tasks.map((task: any) => (
          <TaskItem
            key={task.id}
            id={task.id}
            title={task.title}
            isCompleted={task.isCompleted}
          />
        ))}
      </ul>
    </div>
  );
};

export default TasksList;
