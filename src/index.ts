import express from 'express'
import morgan from 'morgan';

const app = express();
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.json({ hello: 'World!' })
})

// everything that comes through environment variable is a string
// we need to convert the environment variable to a number
const port: number = Number(process.env.PORT ?? 8080);
app.listen(port, '0.0.0.0', () => {
    console.log(`Server started at http://localhost:${port}`)
})
// in docker when we are attaching to a port we need to listen at '0.0.0.0'