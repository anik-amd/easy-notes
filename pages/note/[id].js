import notes from "../../__mock__/notes";

import Link from "next/link";

import { useRouter } from "next/router";
import Card from "../../components/UI/Card";

const Note = () => {
  const router = useRouter();
  const { id } = router.query;
  const note = notes.find((data) => data.id === id);
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
            <div>
              <h4 className="text-sm mb-2 text-zinc-700 dark:text-zinc-300">
                ✏ Edit
              </h4>
              <h4 className="text-sm text-zinc-700 dark:text-zinc-300">
                ⚠ Delete
              </h4>
            </div>
          </div>

          <div className="text-zinc-800 dark:text-zinc-200">{note.content}</div>
        </Card>
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
