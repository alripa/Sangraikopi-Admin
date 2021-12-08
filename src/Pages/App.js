import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Product from "./Product";
import Pages from "./Pages";
import RoastedForm from "./Roasted";
import GreenBeanForm from "./GreenBean";
import Recipe from "./Recipe";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/add-roasted" element={<RoastedForm />} />
        <Route path="/add-green-bean" element={<GreenBeanForm />} />
      </Routes>
    </Router>
  );
}

export default App;
