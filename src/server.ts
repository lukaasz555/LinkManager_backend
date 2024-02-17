import express, { Application, Router } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRouter from './app/routes/auth';
import linksRouter from './app/routes/links';
import refreshTokenRouter from './app/routes/refreshToken';
import { testRouter } from './app/routes/test';
import { categoriesRouter } from './app/routes/categories';

const app = express();
const PORT = process.env.PORT || 4747;

dotenv.config();
app.use(cors());
app.use(express.json());

mongoose.set('strictQuery', true);

async function run() {
	if (!process.env.MONGODB) {
		throw Error('No db connection provided');
	} else {
		await mongoose.connect(process.env.MONGODB);
	}
}

run().catch((e: Error) => console.log(e));

app.use('/api/auth', authRouter);
app.use('/api/links', linksRouter);
app.use('/api/categories', categoriesRouter);
app.use('/api/test', testRouter);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
