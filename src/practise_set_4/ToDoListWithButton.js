import { ListItem } from './ListItem';

export function ToDoListWithButton({ todoItems }) {
  return (
    <div>
      <h2>ToDo list</h2>
      {todoItems.map(({ task, id, isDone }) => (
        <ListItem key={id} content={task} isDone={isDone} />
      ))}
    </div>
  );
}
