import React from 'react';
import ReactDOM from 'react-dom';
import Note from './components/Note'; 

/**
 * @author haapjari (www.github.com/haapjari)
 * @version 20.8.2020
 * This is a assignment React Application of Full-Stack Open (www.fullstackopen.fi)
 */

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2020-01-10T17:30:31.098Z',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only Javascript',
    date: '2020-01-10T18:39:34.091Z',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2020-01-10T19:20:14.298Z',
    important: true
  }
]

const App = ({ notes }) => {
  
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
                    <Note key={note.id} note={note} />        
        )}      
      </ul>
    </div>
  )
}

ReactDOM.render(
  <App notes={notes}/>,
  document.getElementById('root')
);