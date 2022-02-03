import '@babel/polyfill';
import express from "express";
import routes from "./routes/index";
import cors from 'cors';

const app = express();
const PORT = 9001;

const corsOptions = {
    origin: 'http://localhost:9002',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(express.json());
app.use('/', routes)

// current process environment
app.listen(PORT, () => {
    console.log(`App listening on Port ${PORT}`);
})
export default app;
