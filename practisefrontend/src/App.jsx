import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EmployeePage from "./pages/EmployeePage";

function App() {
  return (
    <Router>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/employees">Employees</Link>
      </nav>
      <Routes>
        <Route path="/employees" element={<EmployeePage />} />
      </Routes>
    </Router>
  );
}

export default App;
