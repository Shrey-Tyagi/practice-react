export function ImgWithCaption({ imgUrl, caption }) {
  return (
    <div>
      <img src={imgUrl} alt={caption} />
      <h2>{caption}</h2>
    </div>
  );
}
