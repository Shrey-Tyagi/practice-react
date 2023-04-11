export function ShowBooks({ books }) {
  return (
    <div>
      {books?.map(({ title, author }) => {
        return (
          <div>
            <h2>{title}</h2>
            <h3>Author :{author}</h3>
          </div>
        );
      })}
    </div>
  );
}
