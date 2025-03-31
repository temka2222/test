export const Seemore = (props) => {
  return (
    <div className="w-full h-9 flex  flex-row justify-between items-center font-bold text-xl pr-10">
      <p>{props.title}</p>
      <button>See more</button>
    </div>
  );
};
