import express, { type Application, type Request, type Response } from 'express';
import cors from 'cors';
import config from './config/config.js';

const app: Application = express();
const PORT = config.port;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to Shopping List API' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
