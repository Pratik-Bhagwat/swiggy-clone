function Image({ item }) {
  return (
    <img
      key={item.id}
      src={item.src}
      alt={item.alt}
      className={item.className}
    />
  );
}
export default Image;
