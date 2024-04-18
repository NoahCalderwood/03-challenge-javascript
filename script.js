// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data

let addEmployee= true
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  
 const employeesArray=[]
 while (addEmployee) {
  const employee ={
  firstName: "",
  lastName: "",
  salary: "0",
  }
 employee.firstName= window.prompt("Enter Employee's first name here");
 console.log(employee.firstName)
 employee.lastName= window.prompt("Enter Employee's last name here"); 
 employee.salary= window.prompt("Enter Employee's salary",0);
 while (isNaN(employee.salary)){
  employee.salary= window.prompt("Enter Employee's salary",0);
 }
 employeesArray.push(employee);
  console.log(employee);
  
  addEmployee = window.confirm("Would you like to add a new Employee?");
 }
 console.log(employeesArray)
return employeesArray
}

 

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let total= 0
  for (i=0; i< employeesArray.length; i++){
      
      total= total + parseInt(employeesArray[i].salary);
  }
  let averageSalary = total / employeesArray.length
  console.log(`The average salary for employees is $${averageSalary}.`)
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  let randomNumber = Math.floor( Math.random() * employeesArray.length);
  console.log(`${employeesArray[randomNumber].firstName} ${employeesArray[randomNumber].lastName}`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
