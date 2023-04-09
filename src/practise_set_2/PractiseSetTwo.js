import { productsList, products, todoItems } from './data';
import { Todo } from './Todo';
import { ColorPicker } from './ColorPicker';
import { MyGadgets } from './MyGadgets';
import { About } from './About';
import { Article } from './Article';
import { Phones } from './Phones';
import { Gadgets } from './Gadgets';
import { UserProfile } from './UserProfile';
import { Product } from './Product';
import { Greeting } from './Greeting';

export function PractiseSetTwo() {
  return (
    <div>
      {' '}
      <Greeting name={'Shrey'} />
      <hr />
      <Product name={'Ball'} price={100} />
      <hr />
      <UserProfile
        userData={{
          name: 'John',
          age: 25,
          email: 'john@example.com',
        }}
      />
      <hr />
      <Gadgets products={productsList} />
      <hr />
      <Phones products={products} />
      <hr />
      <Article
        title="React is awesome"
        content="React is a JavaScript library for building user interfaces."
      />
      <hr />
      <About
        heading="About Me"
        name="Shrey"
        learning="I am learning React JS"
      />
      <hr />
      <MyGadgets products={productsList} />
      <hr />
      <ColorPicker
        colors={[
          { name: 'red', hex: '#EE4B2B' },
          { name: 'blue', hex: '#89CFF0' },
          { name: 'green', hex: '#7FFFD4' },
        ]}
      />
      <hr />
      <Todo todoItems={todoItems} />
    </div>
  );
}
