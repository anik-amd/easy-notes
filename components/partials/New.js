import { useState } from "react";
import Button from "../UI/Button";

const New = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className="flex justify-center">
        {!showForm && (
          <button
            className="py-5 pl-4 pr-6 m-5 block w-4/5 sm:w-5/12 md:w-6/12 rounded-xl bg-cyan-50 dark:bg-cyan-900 hover:bg-cyan-100 dark:hover:bg-cyan-800"
            onClick={() => setShowForm(true)}
          >
            ✒ New Note
          </button>
        )}
        {showForm && (
          <form className="p-5 m-5 rounded-lg block sm:w-5/12 md:w-6/12 bg-zinc-50 dark:bg-zinc-800">
            <span className="block font-semibold pb-5 text-zinc-700 dark:text-zinc-200 text-2xl">
              New Note
            </span>
            <input
              className="rounded-lg border-2 w-full p-4 mb-5 font-mono text-zinc-700 dark:text-zinc-200"
              type="text"
              placeholder="Title"
            />
            <textarea
              className="rounded-lg border-2 w-full p-4  mb-2 font-mono text-zinc-700 dark:text-zinc-200"
              type="text"
              placeholder="Start Writing..."
              rows={8}
            />
            <Button label="✨ Done!" onClick={() => setShowForm(false)}>
              Done!
            </Button>
          </form>
        )}
      </div>
    </>
  );
};

export default New;
