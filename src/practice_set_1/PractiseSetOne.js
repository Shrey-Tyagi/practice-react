import { EmployeeCard } from './EmployeeCard';
import { EmployeeDetails } from './EmployeeDetails';
import { ImgWithCaption } from './ImgWithCaption';
import { ProductList } from './ProductList';
import { ProductListSalesMoreThanQuantity } from './ProductListSalesMoreThanQuantity';
import { StartBtn } from './StartBtn';
import { StationaryItems } from './StationaryItems';
import { StudentDetails } from './StudentDetails';
import { products, employees } from '../data';

export function PractiseSetOne() {
  return (
    <div>
      <EmployeeCard
        name={'Shrey'}
        designation={'Software Engineer'}
      />
      <hr />
      <StartBtn
        btnStyle={{
          backgroundColor: 'lightgreen',
          color: 'darkgreen',
          borderRadius: '5px',
          padding: '10px',
        }}
      />
      <hr />
      <StationaryItems items={['pen', 'pencil', 'ruler', 'eraser']} />
      <hr />
      <ImgWithCaption
        imgUrl={
          'https://cdn.pixabay.com/photo/2023/03/18/10/43/plum-blossoms-7860381_1280.jpg'
        }
        caption={'Spring Flowers'}
      />
      <hr />
      <ProductList products={products} />
      <hr />
      <ProductListSalesMoreThanQuantity products={products} />
      <hr />
      <StudentDetails
        student={{
          name: 'John Doe',
          english: 90,
          maths: 80,
          computers: 70,
        }}
      />
      <hr />
      <EmployeeDetails employees={employees} />
    </div>
  );
}
