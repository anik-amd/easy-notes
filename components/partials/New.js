import { nanoid } from "nanoid";

import { useState } from "react";
import Button from "../UI/Button";

import { useSelector, useDispatch } from "react-redux";
import { addNote } from "../../store/notesSlice";

const New = () => {
  const [showForm, setShowForm] = useState(false);

  const today = new Date();

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    date: today.toString(),
    id: nanoid(),
  });
  // const notes = useSelector((state) => state.notes.notes);
  const dispatch = useDispatch();

  const HandleForm = (event) => {
    const { name, value } = event.target;
    setFormData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const handleSubmit = () => {
    setShowForm(false);
    console.log(formData);
    dispatch(addNote(formData));

    const today = new Date();
    setFormData({
      title: "",
      content: "",
      date: today.toString(),
      id: nanoid(),
    });
  };

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
              name="title"
              className="rounded-lg border-2 w-full p-4 mb-5 font-mono text-zinc-700 dark:text-zinc-200"
              type="text"
              placeholder="Title"
              value={formData.title}
              onChange={HandleForm}
            />
            <textarea
              name="content"
              className="rounded-lg border-2 w-full p-4  mb-2 font-mono text-zinc-700 dark:text-zinc-200"
              type="text"
              placeholder="Start Writing..."
              rows={8}
              value={formData.content}
              onChange={HandleForm}
            />
            <Button label="✨ Done!" onClick={handleSubmit}>
              Done!
            </Button>
          </form>
        )}
      </div>
    </>
  );
};

export default New;
