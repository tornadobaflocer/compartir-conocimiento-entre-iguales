import express from 'express';
import userRoutes from './routes/userRoutes.js';
import resourceRoutes from './routes/resourceRoutes.js';

const app = express();

app.use('/api/users', userRoutes);
app.use('/api/resources', resourceRoutes);

export default app;
