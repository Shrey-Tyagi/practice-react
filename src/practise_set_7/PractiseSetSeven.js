import { Weather } from './Weather';
import { User } from './User';
import { ProductListSorted } from './ProductListSorted';
import { ProductList } from './ProductList';
import { MoviesWithGenre } from './MoviesWithGenre';
import { Quote } from './Quote';
import { Employee } from './Employee';
import { Movies } from './Movies';

export function PractiseSetSeven() {
  return (
    <div>
      <Weather />
      <hr />
      <User />
      <hr />
      <Movies />
      <hr />
      <Employee />
      <hr />
      <Quote />
      <hr />
      <MoviesWithGenre />
      <hr />
      <ProductList />
      <hr />
      <ProductListSorted />
    </div>
  );
}
