import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Demo from "./pages/Demo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Demo />} index />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
