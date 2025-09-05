import { useEffect, useState } from "react";
import EmployeeForm from "../components/EmployeeForm";
import config from "../config";

const EmployeePage = () => {
  const [employees, setEmployees] = useState([]);
  const [editData, setEditData] = useState(null);

  const loadEmployees = async () => {
    const response = await fetch(config.apiBaseUrl);
    const data = await response.json();
    setEmployees(data);
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  const handleAdd = async (employee) => {
    await fetch(config.apiBaseUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(employee),
    });
    loadEmployees();
  };

  const handleUpdate = async (employee) => {
    await fetch(`${config.apiBaseUrl}/${employee.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(employee),
    });
    setEditData(null);
    loadEmployees();
  };

  const handleDelete = async (id) => {
    await fetch(`${config.apiBaseUrl}/${id}`, { method: "DELETE" });
    loadEmployees();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Employee Management</h2>

      <EmployeeForm
        onSubmit={editData ? handleUpdate : handleAdd}
        initialData={editData}
      />

      <table border="1" cellPadding="10" style={{ width: "100%", marginTop: "20px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.department}</td>
              <td>{emp.salary}</td>
              <td>
                <button onClick={() => setEditData(emp)}>Edit</button>
                <button onClick={() => handleDelete(emp.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeePage;
