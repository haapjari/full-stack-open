const { response } = require('express')
const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(express.json())

// otetaan käyttöön morgan middleware
// käytetään tiny konfiguraation mukaisesti
app.use(morgan('tiny'))

// luodaan token metodi
morgan.token('host', function(req, res) {
    return req.hostname;
})

/* ----------------------------- */

// Otetaan käyttöön CORS (Cross-Origin Resource Sharing)

const cors = require('cors')

app.use(cors())

/* ----------------------------- */

let persons = [
    {
        id: 1,
        name: "Arto Hellas",
        number: "040-123456"
    },
    {
        id: 2,
        name: "Ada Lovelace",
        number: "39-44-532523"
    },
    {
        id: 3,
        name: "Dan Abramov",
        number: "12-43-234345"
    },
    {
        id: 4,
        name: "Marry Poppendick",
        number: "39-23-6423122"
    }
]

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
})

var today = new Date();
app.get('/info', (req, res) => {
    res.send('Phonebook has info for ' + persons.length + ' people' + '<br>' + today)
})

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

// resurssin poisto
app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
  
    response.status(204).end()
})

// yksittäisen resurssin hakeminen
app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => {
      return person.id === id
    })
    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

/* -------------------------------- */
/* -------------------------------- */
/* -------------------------------- */

// numeroiden lisäys
const generateId = () => {
    const maxId = persons.length > 0
        ? Math.max(...persons.map(n => n.id))
        : 0
    return maxId + 1
}

app.post('/api/persons', (request, response) => {
    const body = request.body

    if (!body.name) {
        return response.status(400).json({
            error: 'name missing'
        })
    }

    if (!body.number) {
        return response.status(400).json({
            error: 'number missing'
        })
    }

    var hasMatch = false;

    for (var index = 0; index < persons.length; ++index) {
        var comparedObject = persons[index];

        if (comparedObject.name == body.name) {
            hasMatch = true;
            break;
        }
    }

    
    if (hasMatch == true) {
        return response.status(400).json({
            error: 'name must be unique'
        })
    }

    const person = {
        id : generateId(),
        name: body.name,
        number: body.number,
    }

    persons = persons.concat(person)

    response.json(person)
})

/* -------------------------------- */
/* -------------------------------- */
/* -------------------------------- */

var server_port = process.env.YOUR_PORT || process.env.PORT || 3001;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
app.listen(server_port, server_host, function() {
    console.log('Running on port %d', server_port);
});

/*
const PORT = process.env.port || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
*/