// props ->
//          size = "sm" || None
//          label = String || Submit

const Button = (props) => {
  return (
    <>
      <button
        className={`py-3 px-5 bg-slate-200 hover:bg-slate-300 dark:bg-zinc-600 dark:hover:bg-zinc-500 text-slate-700 dark:text-zinc-200 rounded-lg font-medium ${
          props.size === "sm" ? "w-fit" : "w-full"
        }`}
      >
        {props.label ? props.label : "Submit"}
      </button>
    </>
  );
};

export default Button;
