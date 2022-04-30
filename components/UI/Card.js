// props ->
//          size = "sm" || None

const Card = (props) => {
  return (
    <div
      className={`bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-xl ${
        props.size ? "max-w-sm" : "max-w-lg"
      } overflow-hidden shadow-lg p-5`}
    >
      {props.children}
    </div>
  );
};

export default Card;
