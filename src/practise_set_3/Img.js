export function Img({ url, height, width }) {
  return (
    <img
      src={url}
      alt="Img"
      style={{ width: width, height: height }}
    />
  );
}
