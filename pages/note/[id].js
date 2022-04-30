import notes from "../../__mock__/notes";

import { useRouter } from "next/router";
import Card from "../../components/UI/Card";

const Note = () => {
  const router = useRouter();
  const { id } = router.query;
  const note = notes.find((data) => data.id === id);
  return (
    <>
      <div className="p-5 m-5 sm:flex sm:justify-center md:justify-center">
        <Card>
          <div className="flex justify-between">
            <h3 className="text-lg font-semibold mb-1 text-zinc-800 dark:text-zinc-200">
              {note.title}
            </h3>
            <h3 className="">✏ Edit</h3>
          </div>
          <h4 className="text-sm mb-3 text-zinc-700 dark:text-zinc-300">
            {note.date}
          </h4>
          <div className="text-zinc-800 dark:text-zinc-200">{note.content}</div>
        </Card>
      </div>
    </>
  );
};

export default Note;
