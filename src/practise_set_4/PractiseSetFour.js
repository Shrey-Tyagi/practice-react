import { characters, itemList, todoItems, books } from './data';
import { ShowAndToggleCharacters } from './ShowAndToggleCharacters';
import { Heading } from './Heading';
import { ItemListWithButtons } from './ItemListWithButtons';
import { ToDo } from './Todo';
import { ToDoListWithButton } from './ToDoListWithButton';
import { ShowAndToggleBooks } from './ShowAndToggleBooks';
import { Lives } from './Lives';

export function PractiseSetFour() {
  return (
    <div>
      <ShowAndToggleCharacters
        heroes={characters.heroes}
        villains={characters.villains}
      />
      <hr />
      <Heading />
      <hr />
      <ItemListWithButtons itemList={itemList} />
      <hr />
      <ToDo todoItems={todoItems} />
      <hr />
      <ToDoListWithButton todoItems={todoItems} />
      <hr />
      <ShowAndToggleBooks books={books} />
      <hr />
      <Lives lives={7} />
    </div>
  );
}
