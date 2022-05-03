// import notes from "../../__mock__/notes";

import Link from "next/link";
import { useTheme } from "next-themes";
import Swal from "sweetalert2";
import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { addNote, updateNote, deleteNote } from "../../store/notesSlice";

import { useRouter } from "next/router";
import Card from "../../components/UI/Card";
import Button from "../../components/UI/Button";

const Note = () => {
  // TODO: Add date editing.

  const [showForm, setShowForm] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const dispatch = useDispatch();

  const { id } = router.query;
  const notes = useSelector((state) => state.notes.notes);
  const note = notes.find((data) => data.id === id);
  const [formData, setFormData] = useState({
    id: note.id,
    title: note.title,
    date: note.date,
    content: note.content,
  });

  const handleDelete = () => {
    if (theme === "dark") {
      Swal.fire({
        title: "Delete Note",
        text: "Are you sure? Your note will be permanently deleted.",
        icon: "warning",
        confirmButtonText: "Delete",
        confirmButtonColor: "rgb(185 28 28)",
        showCancelButton: true,
        cancelButtonText: "Keep",
        cancelButtonColor: "rgb(68 64 60)",
        width: "16rem",
        background: "rgb(38 38 38)",
        color: "rgb(212 212 212)",
      });
    } else {
      Swal.fire({
        title: "Delete Note",
        text: "Are you sure? Your note will be permanently deleted.",
        icon: "warning",
        confirmButtonText: "Delete",
        confirmButtonColor: "rgb(239 68 68)",
        showCancelButton: true,
        cancelButtonText: "Keep",
        cancelButtonColor: "rgb(68 64 60)",
        width: "16rem",
      });
    }
  };

  const handleEditing = (event) => {
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
    dispatch(updateNote(formData));
  };

  return (
    <>
      {!showForm && (
        <>
          <div className="p-5 m-5 sm:flex sm:justify-center md:justify-center">
            <Card hover="disable">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-zinc-800 dark:text-zinc-200">
                    {note.title}
                  </h3>
                  <h4 className="text-sm mb-5 text-zinc-700 dark:text-zinc-300">
                    {note.date}
                  </h4>
                </div>
              </div>

              <div className="text-zinc-800 dark:text-zinc-200">
                {note.content}
              </div>
            </Card>
          </div>
          <div className="mb-6 sm:flex sm:justify-center md:justify-center">
            <div className="flex justify-center">
              <Button
                className="mx-3"
                onClick={() => setShowForm(true)}
                label="✏ Edit"
                size="sm"
              />
              <Button
                className="mx-3"
                size="sm"
                label="🚫 Delete"
                onClick={handleDelete}
              />
            </div>
          </div>
        </>
      )}
      {showForm && (
        <div className="sm:flex sm:justify-center md:justify-center">
          <form className="p-5 m-5 rounded-lg block sm:w-5/12 md:w-6/12 bg-zinc-50 dark:bg-zinc-800">
            <span className="block font-semibold pb-5 text-zinc-700 dark:text-zinc-200 text-2xl">
              Edit Note
            </span>
            <input
              onChange={handleEditing}
              name="title"
              className="rounded-lg border-2 w-full p-4 mb-5 font-mono text-zinc-700 dark:text-zinc-200"
              type="text"
              value={formData.title}
            />
            <textarea
              name="content"
              onChange={handleEditing}
              className="rounded-lg border-2 w-full p-4  mb-2 font-mono text-zinc-700 dark:text-zinc-200"
              type="text"
              rows={8}
              value={formData.content}
            />
            <Button label="✨ Done!" onClick={handleSubmit} />
          </form>
        </div>
      )}

      <div className="flex justify-self-center justify-center">
        <Link href="/">
          <a className="text-lg mb-5 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-400">
            🏠 Back to home
          </a>
        </Link>
      </div>
    </>
  );
};

export default Note;
