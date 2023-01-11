import "./App.css";
import { Routes, Route } from "react-router-dom";
import Index from "./pages";
import Jobs from "./pages/jobs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<Jobs />} />
    </Routes>
  );
}

export default App;
