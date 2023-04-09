export function EmployeeCard({ name, designation }) {
  return (
    <div>
      <h2 style={{ color: 'green' }}>Name: {name}</h2>
      <h2 style={{ color: 'blue' }}>Designation: {designation}</h2>
    </div>
  );
}
