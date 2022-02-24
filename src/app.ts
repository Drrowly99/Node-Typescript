import express, {Application, Request, Response, NextFunction} from 'express'

const app = express();
const add = (a: number, b:number): number => a + b;


app.get('/', (req: Request, res: Response) => {
    console.log(add(5,9))
    res.send('hello')
})


app.listen(5000, () => console.log('server running'))