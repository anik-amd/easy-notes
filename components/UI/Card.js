const Card = (props) => {
  return (
    <div className="dark:bg-zinc-900 text-gray-800 dark:text-gray-100 rounded-xl max-w-sm overflow-hidden shadow-lg p-5">
      {props.children}
    </div>
  );
};

export default Card;
