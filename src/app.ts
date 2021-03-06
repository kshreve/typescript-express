import express, { Request, Response } from 'express'
import AppController from './app-controller'

const app = express()
const port = 3000

app.get('/', async (req: Request, res: Response) => {
  const html = await new AppController(req, res).index()
  res.send(html)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
