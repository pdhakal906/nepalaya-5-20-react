import { listNotes } from "../lib/api/fetchNotes";

export default async function Notes() {
  const data = await listNotes();
  return (
    <>
      {data.map((note) => (
        <div key={note.id}>
          <p>{note.text}</p>
        </div>
      ))}
    </>
  );
}