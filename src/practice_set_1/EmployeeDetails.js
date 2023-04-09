export function EmployeeDetails({ employees }) {
  const computeTotalSalaryExpense = () =>
    employees.reduce((sum, { salary }) => sum + salary, 0);
  const computeStyle = (designation, level) => {
    let styleList =
      designation === 'President'
        ? { border: '2px solid', padding: '5px' }
        : {};

    styleList =
      level === 2
        ? { ...styleList, backgroundColor: 'orange' }
        : { ...styleList };
    return styleList;
  };
  return (
    <ul>
      <h2>Employee Details</h2>
      {employees.map(({ name, level, dept, designation, salary }) => (
        <li style={computeStyle(designation, level)}>
          name: {name}, level: {level}, dept: {dept}, designation:
          {designation}, salary: {salary}
        </li>
      ))}
      <h3>Total Salary Expense: {computeTotalSalaryExpense()}</h3>
    </ul>
  );
}
