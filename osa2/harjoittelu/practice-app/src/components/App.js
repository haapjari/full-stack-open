import React, { useState } from 'react'
import Note from './Note'

const App = ( props ) => {
    const [notes, setNotes] = useState(props.notes)
    const [newNote, setNewNote] = useState('')
    const [showAll, setShowAll] = useState(true)


    const addNote = (event) => {
        event.preventDefault() // this makes sure that page doesn not reload

        /* create new object for the note, and it will reiceve its content from the components newNote state */
        const noteObject = {
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() < 0.5,
            id: notes.length + 1,
        }

        setNotes(notes.concat(noteObject))
        setNewNote('')
    }

    const handleNoteChange = (event) => {
        console.log(event.target.value)
        setNewNote(event.target.value)
    }

    const notesToShow = showAll
        ? notes
        : notes.filter(note => note.important === true)

    return (
      <div>
            <h1>Notes</h1>
            <div>
                <button onClick={() => setShowAll(!showAll)}>
                    show { showAll ? 'important' : 'all' }
                </button>
            </div>
            <ul>
                {notesToShow.map((note) =>
                    <Note key={note.id} note={note} />
                )}
            </ul>
            <form onSubmit={addNote}>
                <input 
                    value={newNote} 
                    onChange={handleNoteChange}
                />
                <button type="submit">save</button>
            </form>
      </div>
    )
}

export default App