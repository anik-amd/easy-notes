import { useSelector, useDispatch } from "react-redux";
import { format } from "timeago.js";

import Link from "next/link";
// import notes from "../../__mock__/notes";
import Card from "../UI/Card";
import ErrorPage from "../UI/ErrorPage";

const Notes = () => {
  const notes = useSelector((state) => state.notes.notes);
  // const dispatch = useDispatch();

  return (
    <>
      <div className="grid grid-cols-2 mx-6 place-content-stretch sm:grid-cols-3 sm:mx-16 md:grid-cols-4 md:mx-32 gap-3 my-4">
        {notes &&
          notes.map((note) => {
            return (
              <Link key={note.id} href={`/note/${note.id}`}>
                <a>
                  <Card size="sm">
                    <h3 className="text-lg font-semibold mb-1 text-zinc-800 dark:text-zinc-200">
                      {note.title}
                    </h3>
                    <h4 className="text-sm mb-3 text-zinc-700 dark:text-zinc-300">
                      {format(note.date)}
                    </h4>
                    <div className="text-zinc-800 dark:text-zinc-200">
                      {note.content.slice(0, 80)}
                    </div>
                  </Card>
                </a>
              </Link>
            );
          })}
      </div>
      {notes.length === 0 && <ErrorPage type="notes" />}
    </>
  );
};

export default Notes;
