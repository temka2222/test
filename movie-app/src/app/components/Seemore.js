export const Seemore = (props) => {
  return (
    <div className="w-full h-9 flex flex flex-row justify-between items-center">
      <p>{props.title}</p>
      <button>See more</button>
    </div>
  );
};
