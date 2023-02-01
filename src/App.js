import "./App.css";
import { Routes, Route } from "react-router-dom";
import Index from "./pages";
import Blog from "./pages/blog";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}

export default App;
