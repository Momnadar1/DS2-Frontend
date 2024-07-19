import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    console.log(count);
    // Cleanup function
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs once after the initial render

  const [text, setText] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      <p className="text-2xl text-white"> Count: {count}</p>
      <button className="bg-slate-50 p-4" onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <input onChange={handleChange} />
      <p className="text-white text-2xl"> {text} </p>
    </div>
  );
}

export default Timer;
