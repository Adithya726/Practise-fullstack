import { useState, useEffect } from "react";

const EmployeeForm = ({ onSubmit, initialData }) => {
  const [form, setForm] = useState({ name: "", email: "", department: "", salary: "" });

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ name: "", email: "", department: "", salary: "" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <input type="text" name="department" placeholder="Department" value={form.department} onChange={handleChange} required />
      <input type="number" name="salary" placeholder="Salary" value={form.salary} onChange={handleChange} required />
      <button type="submit">{initialData ? "Update" : "Add"} Employee</button>
    </form>
  );
};

export default EmployeeForm;
