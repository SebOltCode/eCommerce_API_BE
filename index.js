import express from 'express';
import './db/index.js';
import morgan from 'morgan';
import cors from 'cors';
import userRoutes from './router/users.js';
import notesRoutes from './router/notes.js';

const port = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/users', userRoutes);
app.use('/notes', notesRoutes);

app.listen(port, () => console.log(`Server is running on port ${port}`));