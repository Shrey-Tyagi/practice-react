import { ButtonWithHex } from './ButtonWithHex';

export function ColorPicker({ colors }) {
  return (
    <div>
      {colors.map(({ hex, name }) => (
        <ButtonWithHex key={name} hex={hex} name={name} />
      ))}
    </div>
  );
}
