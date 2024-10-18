import { Button } from "@/components/ui/button";
import { PlusCircle, X } from "lucide-react";
import { useState } from "react";

const StickyNotes = () => {
  const [isPopUp, setIsPopUp] = useState(false);
  const [notes, setNotes] = useState([
    {
      id: Date.now(),
      title: "Note 1",
    },
  ]);
  const [newNote, setNewNote] = useState({
    id: Date.now(),
    title: "",
  });

  const togglePopUp = () => setIsPopUp(!isPopUp);

  const handleNewNote = (e) => {
    setNewNote({
      ...newNote,
      title: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newNote.title.trim()) {
      setNotes([...notes, { id: Date.now(), title: newNote.title }]);
      setNewNote({
        id: Date.now(),
        title: "",
      });
      togglePopUp();
    }
  };

  const handleDeleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <section>
      <div className="flex items-center justify-between">
        <h1>Sticky Notes</h1>

        <div>
          <Button onClick={togglePopUp} variant="ghost" size="icon">
            <PlusCircle className=" h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* sticky notes */}

      <div className="mt-10 grid grid-cols-3 gap-2">
        {notes.map((note) => (
          <div
            key={note.id}
            className="flex flex-col border bg-red-50 hover:shadow shadow-sm h-[210px] rounded-sm  p-4 justify-between"
          >
            <p>{note.title}</p>
            <Button
              onClick={() => handleDeleteNote(note.id)}
              size="icon"
              variant="ghost"
            >
              <X className="h-4 w-4 text-red-600" />
            </Button>
          </div>
        ))}
      </div>
      {/* popup */}
      {isPopUp ? (
        <>
          <div
            onClick={togglePopUp}
            className="bg-slate-900 opacity-30 cursor-pointer  fixed inset-0 "
          ></div>
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="bg-white flex flex-col justify-between z-50 shadow  w-[580px] h-[350px] rounded-md relative overflow-hidden px-4 ">
              <div className="absolute top-2 right-2">
                <Button onClick={togglePopUp} size="icon" variant="ghost">
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <form className="mt-20" action="" onSubmit={handleSubmit}>
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  className="w-full h-full p-4 border rounded"
                  value={newNote.title}
                  onChange={handleNewNote}
                ></textarea>
                <Button type="submit" size="sm">
                  Submit Data
                </Button>
              </form>
            </div>
          </div>
        </>
      ) : null}
    </section>
  );
};

export default StickyNotes;
