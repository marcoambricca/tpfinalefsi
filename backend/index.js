import express from 'express';
import ProductRouter from './src/controllers/product-controller.js'

const app = express();
const port = 3000;

app.use(express.json())
app.use('/api/products', ProductRouter);

app.listen(3000, () => console.log(`Server listening on port ${port}`));