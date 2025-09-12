import { useEffect, useState } from "react";
import EmployeeForm from "../components/EmployeeForm";
import config from "../config";

const EmployeePage = () => {
  const [employees, setEmployees] = useState([]);
  const [editData, setEditData] = useState(null);

  // Load all employees
  const loadEmployees = async () => {
    try {
      const response = await fetch(`${config.apiBaseUrl}/employees`);
      if (!response.ok) throw new Error("Failed to fetch employees");
      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      console.error("Error loading employees:", error);
    }
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  // Add employee
  const handleAdd = async (employee) => {
    try {
      await fetch(`${config.apiBaseUrl}/employees`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(employee),
      });
      loadEmployees();
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  // Update employee
  const handleUpdate = async (employee) => {
    try {
      await fetch(`${config.apiBaseUrl}/employees/${employee.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(employee),
      });
      setEditData(null);
      loadEmployees();
    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };

  // Delete employee
  const handleDelete = async (id) => {
    try {
      await fetch(`${config.apiBaseUrl}/employees/${id}`, { method: "DELETE" });
      loadEmployees();
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
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
          {employees.length > 0 ? (
            employees.map((emp) => (
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
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                No employees found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeePage;
