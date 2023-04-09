import { useEffect, useState } from 'react';

export function CarCatogories({ cars }) {
  const [categories, setCategries] = useState({});

  useEffect(() => {
    setCategries(
      cars
        .reduce((result, car) => [...result, car.category], [])
        .reduce((result, CarCatogory) => {
          if (result[CarCatogory]) {
            result[CarCatogory] += 1;
          } else {
            result[CarCatogory] = 1;
          }
          return result;
        }, {})
    );
  }, [cars]);
  return (
    <div>
      {Object.keys(categories).map((category) => (
        <p>
          {category}: {categories[category]}
        </p>
      ))}
    </div>
  );
}
