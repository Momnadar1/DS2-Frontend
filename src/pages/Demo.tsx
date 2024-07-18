import { Link } from "react-router-dom";

function Demo() {
  return (
    <div className="flex flex-col">
        <p className="text-slate-600 text-2xl">Welcome to Refonte Prototype! Chose your exercise!</p>
      <div className="flex justify-around">
        <Link className=" flex flex-col bg-slate-600 w-80 h-80 justify-center items-center" to="/kernel">
          <img src="vite.svg" className="w-[140px] " />
          <p className="  text-white text-3xl p-5">Kernel</p>
        </Link>
        <Link
          className=" flex flex-col p-10 bg-slate-600 w-80 h-80 justify-center items-center"
          to="/summary"
        >
          <img className="w-[100px] " src="vite.svg" />
          <p className="   text-white text-3xl p-5">Large Language Model</p>
        </Link>
      </div>
    </div>
  );
}

export default Demo;
