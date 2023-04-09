export function StudentCertificationApproval({ studentData }) {
  const isCertified = () =>
    studentData.reduce((result, { marks }) => result + marks, 0) /
      studentData.length >
    80;
  return (
    <div>
      {isCertified() ? (
        <p>Certification Approved</p>
      ) : (
        <p>Certification Not Approved</p>
      )}
    </div>
  );
}
