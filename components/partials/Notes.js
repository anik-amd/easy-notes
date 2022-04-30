import notes from "../../__mock__/notes";
import Card from "../UI/Card";

const Notes = () => {
  return (
    <>
      <div className="grid grid-cols-2 mx-6 justify-items-center sm:grid-cols-3 sm:mx-16 md:grid-cols-4 md:mx-32 gap-3 my-4">
        {notes.map((note) => {
          return (
            <Card key={note.id}>
              <h3>{note.title}</h3>
              <h4>{note.date}</h4>
              <div>{note.content.slice(0, 140)}</div>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default Notes;
