import { createContext, useState } from 'react';

export const TodoContext = createContext();

export function TodoContextProvider({ children }) {
  const [todoList, setTodoList] = useState();
  const markAdDone = (todoItem) => {
    setTodoList((todoList) => [
      ...todoList.filter(({ id }) => id !== todoItem.id),
      { ...todoItem, isCompleted: true },
    ]);
  };
  return (
    <TodoContext.Provider
      value={{ todoList, markAdDone, setTodoList }}
    >
      {children}
    </TodoContext.Provider>
  );
}
