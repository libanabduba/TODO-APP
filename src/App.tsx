import React from "react";
import InputBar from "./components/InputBar";
import TasksList from "./components/TasksList";

function App() {
  // const test = (data: any){
  //   if (data === true){
  //     console.log("true")
  //   } else {

  //   }
  // }
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center space-y-6 bg-orange-300 px-10 py-6"
      data-test="test-app"
    >
      <InputBar />
      <TasksList />
    </div>
  );
}

export default App;
