const http = require('http')

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

const app = http.createServer((request, response) => {  
    response.writeHead(200, { 'Content-Type': 'application/json' })  
    response.end(JSON.stringify(persons))
})

const port = 3001
app.listen(port)
console.log(`Server running on port ${port}`)