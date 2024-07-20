// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Demo from "./pages/Demo";
import Layout from "./pages/Layout";
import Timer from "./pages/Timer";
import Kernel from "./pages/Kernel";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Demo />} index />
          <Route path="/" element={<Layout/>}>
            <Route element={<Timer />} path="timer" />
            <Route element={<Kernel />} path="kernel" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
