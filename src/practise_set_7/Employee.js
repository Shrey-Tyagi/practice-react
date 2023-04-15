import { useEffect, useState } from 'react';
import { fakeFetch } from './fakeFetch';

export function Employee() {
  const [employees, setEmployees] = useState();
  const [companyList, setCompanyList] = useState(['All companies']);
  const [employeesToShow, setEmployeesToShow] = useState();
  const [selectedOption, setSelectedOption] = useState('');
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fakeFetch('https://example.com/api/users')
      .then((data) => {
        setEmployeesToShow(data.data);
        setEmployees(data.data);
        setCompanyList([
          'All Companies',
          ...new Set(data?.data.map(({ company }) => company)),
        ]);
        setIsLoading(false);
      })
      .catch((e) => setError(e));
  }, []);
  return (
    <div>
      <h2>Employees</h2>
      {isLoading && <h2>Loading...</h2>}
      <h3>Filter By Company:</h3>
      <select
        value={selectedOption}
        onChange={(e) => {
          if (e.target.value === 'All Companies') {
            setEmployeesToShow(employees);
          } else {
            setEmployeesToShow(
              employees?.filter(
                ({ company }) => company === e.target.value
              )
            );
          }
          setSelectedOption(e.target.value);
        }}
      >
        {companyList.map((i) => (
          <option value={i}>{i}</option>
        ))}
      </select>
      {employeesToShow?.map((employee) => {
        return (
          <li>
            <h3> {employee?.name}</h3>
            <h3> {employee?.email}</h3>
            <h3> {employee?.website}</h3>
            <h3> {employee?.company}</h3>
          </li>
        );
      })}

      {error && <h2>{error.message}</h2>}
    </div>
  );
}
