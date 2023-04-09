export function StudentDetails({
  student: { name, english, maths, computers },
}) {
  const computeGrade = (total) =>
    total >= 225
      ? 'A'
      : total >= 180
      ? 'B'
      : total >= 150
      ? 'C'
      : 'D';
  return (
    <div>
      <h2>Student Details</h2>
      <p> Name: {name} </p>
      <p> English: {english} </p>
      <p> Maths: {maths} </p>
      <p> Computers: {computers} </p>
      <p> Total Marks: {computers + english + maths} </p>
      <p> Grade: {computeGrade(computers + english + maths)} </p>
    </div>
  );
}
