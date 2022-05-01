import notes from "../../__mock__/notes";

import Link from "next/link";
import { useTheme } from "next-themes";
import Swal from "sweetalert2";

import { useRouter } from "next/router";
import Card from "../../components/UI/Card";
import Button from "../../components/UI/Button";

const Note = () => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const { id } = router.query;
  const note = notes.find((data) => data.id === id);

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

  return (
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

          <div className="text-zinc-800 dark:text-zinc-200">{note.content}</div>
        </Card>
      </div>
      <div className="mb-6 sm:flex sm:justify-center md:justify-center">
        <div className="flex justify-center">
          <Button className="mx-3" label="✏ Edit" size="sm" />
          <Button
            className="mx-3"
            size="sm"
            label="🚫 Delete"
            onClick={handleDelete}
          />
        </div>
      </div>
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
