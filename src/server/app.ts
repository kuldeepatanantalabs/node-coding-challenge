import express, { json, urlencoded, Request, Response } from 'express';
import pool from '../db/pool';

const app = express();

const healthCheck = (req: Request, res: Response) => {
  try {
    pool
      .query('SELECT 1')
      .then(() => res.sendStatus(200))
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error })
  } 
}
app.use(json());
app.use(urlencoded({ extended: true }));
app.get('/health', healthCheck);

export default app;
