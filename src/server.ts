import express, { Application, Router } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRouter from './app/routes/auth';
import linksRouter from './app/routes/links';
import { testRouter } from './app/routes/test';
import { categoriesRouter } from './app/routes/categories';
import { cacheMiddleware } from './app/middlewares/cacheMiddleware';

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

const apiRouter = express.Router();
app.use('/api/v1', apiRouter);

apiRouter.use(cacheMiddleware);
apiRouter.use('/auth', authRouter);
apiRouter.use('/links', linksRouter);
apiRouter.use('/categories', categoriesRouter);
apiRouter.use('/test', testRouter);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
