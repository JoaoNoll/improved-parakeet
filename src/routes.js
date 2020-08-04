import { Router } from 'express';
import cors from 'cors';
import ProductController from './app/controllers/ProductController';
import MarkController from './app/controllers/MarkController';

const routes = Router();
routes.use(cors());

routes.get('/', (req, res) => res.json({ result: 'mark-product' }));

// ROUTES PARA USERS
routes.post('/products', ProductController.store);
routes.get('/products', ProductController.index);
routes.get('/products/:uid', ProductController.show);
routes.put('/products/:uid', ProductController.update);
routes.delete('/products/:uid', ProductController.delete);

routes.post('/marks', MarkController.store);
routes.get('/marks', MarkController.index);
routes.get('/marks/:uid', MarkController.show);
routes.put('/marks/:uid', MarkController.update);
routes.delete('/marks/:uid', MarkController.delete);

export default routes;
