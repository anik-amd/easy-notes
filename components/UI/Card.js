// props ->
//          size = "sm" || None
//          hover = "disable" || None

const Card = (props) => {
  return (
    <div
      className={`bg-white grow min-h-full dark:bg-zinc-900 ${
        !props.hover && "hover:bg-zinc-50 dark:hover:bg-zinc-800"
      } rounded-xl ${
        props.size ? "max-w-sm" : "max-w-lg"
      } overflow-hidden shadow-lg p-5  whitespace-pre-wrap`}
    >
      {props.children}
    </div>
  );
};

export default Card;
