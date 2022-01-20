import { Request, Response, Router } from 'express';

const router = Router();

router.post('/user', (request: Request, response: Response) => {
  return response.status(201).send();
});

export { router };
