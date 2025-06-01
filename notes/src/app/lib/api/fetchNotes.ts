export const listNotes = async () => {
  const response = await fetch("http://127.0.0.1:8000/api/notes/");

  if (!response.ok) {
    throw new Error("Failed to fetch notes");
  }

  return response.json();
};
