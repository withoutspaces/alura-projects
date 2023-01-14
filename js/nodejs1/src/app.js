import express from 'express'
const app = express()

app.use(express.json())

const livros = [
  { id: 1, titulo: 'Senhor dos Anéis' },
  { id: 2, titulo: 'Percy Jackson e o ladrão de raios' },
  { id: 3, titulo: 'O Hobbit' }
]

app.get('/', (req, res) => {
  res.status(200).send('Curso de NodeJS')
})

app.get('/livros', (req, res) => {
  res.status(200).json(livros)
})

app.post('/livros', (req, res) => {
  livros.push(req.body)
  res.status(201).send('O livro foi cadastrado com sucesso')
})

export default app
