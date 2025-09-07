package com.practise.edu.services;

import com.practise.edu.model.Employee;
import java.util.List;

public interface EmployeeService {
    Employee saveEmployee(Employee employee);          
    List<Employee> getAllEmployees();                  
    Employee getEmployeeById(Long id);                 
    Employee updateEmployee(Long id, Employee employeeDetails); 
    String deleteEmployee(Long id);                    
}
