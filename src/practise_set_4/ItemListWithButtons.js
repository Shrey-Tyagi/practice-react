import { useState } from 'react';
import { ItemList } from './ItemList';

export function ItemListWithButtons({ itemList }) {
  const [displayItems, setDisplayItem] = useState(itemList);

  return (
    <div>
      <button onClick={() => setDisplayItem(itemList)}>All</button>
      <button
        onClick={() =>
          setDisplayItem(
            itemList.filter(({ category }) => category === 'Fruit')
          )
        }
      >
        Fruits
      </button>
      <button
        onClick={() =>
          setDisplayItem(
            itemList.filter(
              ({ category }) => category === 'Vegetable'
            )
          )
        }
      >
        Vegetables
      </button>
      <ItemList displayItems={displayItems} />
    </div>
  );
}
