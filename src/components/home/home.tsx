import Button from "../button/button";
import Task from "../task/task";

export function Home() {
  return (
    <div className="flex justify-center items-center h-screen relative">
      <div className="bg-gradient-to-b from-blue-500 to-blue-400 rounded-3xl w-1/3 h-2/3 -rotate-6 absolute -z-10 shadow-lg"></div>
      <div className="bg-white rounded-3xl shadow-md flex flex-col gap-5 w-1/3 h-2/3 px-12">
        <p className="text-2xl font-bold mt-12">ToDo List</p>
        <Task taskName="Task 1" className="bg-red-500" quality="High" />
        <Task taskName="Task 2" className="bg-yellow-500" quality="Medium" />
        <Task taskName="Task 3" className="bg-green-600" quality="Low" />
        <Task taskName="Task 4" className="bg-red-500" quality="High" />
        <div className="flex justify-between">
          <p className="text-gray-400 font-bold">Task name</p>
          <div className="flex gap-1">
            <select name="quality" id="quality" className="bg-white">
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
            <div>
              <Button
                text="Add Task"
                className="bg-green-400 hover:bg-green-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
