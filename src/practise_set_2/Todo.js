export function Todo({ todoItems }) {
  return (
    <div>
      {todoItems.map(({ id, title, description, isCompleted }) => (
        <div
          key={id}
          style={
            isCompleted
              ? { color: 'green', border: '3px solid' }
              : { color: 'red', border: '3px solid' }
          }
        >
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
}
