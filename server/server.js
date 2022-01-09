import cookieSession from 'cookie-session';
import express from 'express';
import cors from 'cors';
import passport from 'passport';
import dotenv from 'dotenv';
import authRoute from './route/authRoute.js';
import './controllers/authController.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(
  cookieSession({
    name: 'session',
    keys: ['khalid'],
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
    credentials: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

//mounting routes
app.use('/auth', authRoute);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
