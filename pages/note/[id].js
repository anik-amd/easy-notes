// import notes from "../../__mock__/notes";

import Link from "next/link";
import { useTheme } from "next-themes";
import Swal from "sweetalert2";
import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { updateNote, deleteNote } from "../../store/notesSlice";

import { format } from "timeago.js";

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
    id: note && note.id,
    title: note && note.title,
    date: note && note.date,
    content: note && note.content,
  });

  const handleDelete = () => {
    Swal.fire({
      title: "Delete Note",
      text: "Are you sure? Your note will be permanently deleted.",
      icon: "warning",
      confirmButtonText: "Delete",
      confirmButtonColor: `${
        // theme === "dark" ? "rgb(185 28 28)" : "rgb(239 68 68)"
        theme === "light" ? "rgb(239 68 68)" : "rgb(185 28 28)"
      }`,
      showCancelButton: true,
      cancelButtonText: "Keep",
      cancelButtonColor: `${
        // theme === "dark" ? "rgb(68 64 60)" : "rgb(68 64 60)"
        theme === "light" ? "rgb(68 64 60)" : "rgb(68 64 60)"
      }`,
      width: "16rem",
      // background: `${theme === "dark" ? "rgb(38 38 38)" : "#fff"}`,
      background: `${theme === "light" ? "#fff" : "rgb(38 38 38)"}`,
      // color: `${theme === "dark" ? "rgb(212 212 212)" : "#545454"}`,
      color: `${theme === "light" ? "#545454" : "rgb(212 212 212)"}`,
    }).then((result) => {
      if (result.isConfirmed) {
        router.push("/");
        dispatch(deleteNote(note));
      }
    });
  };

  const handleEditing = (event) => {
    const { name, value } = event.target;
    const today = new Date();
    setFormData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
        date: today.toString(),
      };
    });
  };

  const handleSubmit = () => {
    setShowForm(false);
    dispatch(updateNote(formData));
  };

  return (
    <>
      {note && !showForm && (
        <>
          <div className="p-5 m-5 sm:flex sm:justify-center md:justify-center">
            <Card hover="disable">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-zinc-800 dark:text-zinc-200">
                    {note.title}
                  </h3>
                  <h4 className="text-sm mb-5 text-zinc-700 dark:text-zinc-300">
                    {format(note.date)}
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
      {note && showForm && (
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
