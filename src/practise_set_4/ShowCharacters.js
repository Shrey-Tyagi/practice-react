export function ShowCharacters({ characters }) {
  return (
    <div>
      {characters?.map(({ name, power, costume }) => {
        return (
          <div>
            <h2>{name}</h2>
            <h3>Powers :{power}</h3>
            <h3>Constume :{costume}</h3>
          </div>
        );
      })}
    </div>
  );
}
