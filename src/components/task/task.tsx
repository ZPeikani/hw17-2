import Button from "../button/button";

interface TaskProp {
  taskName: string;
  className: string;
  quality: string;
}
export default function Task({ taskName, className, quality }: TaskProp) {
  return (
    <table>
      <tr className="border-b">
        <div className="px-3 flex flex-col justify-center items-center pb-2">
          <div className="flex justify-between w-full">
            <div className="flex gap-2 items-center justify-center">
              <input type="checkbox" className="w-5 h-5 mt-0.5" />
              <p className="flex gap-1 text-xl text-center">{taskName}</p>
              <label
                htmlFor="quality"
                className={`${className} text-white px-2 py-0.5 font-bold text-center rounded-md text-sm mt-1`}
              >
                {quality}
              </label>
            </div>
            <div>
              <Button text="Delete" className="bg-red-500 hover:bg-red-600" />
            </div>
          </div>
        </div>
      </tr>
    </table>
  );
}
