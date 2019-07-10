import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  res.json({ uhum: 'aham' });
});

export default routes;
