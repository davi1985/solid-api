import { Request, Response, Router } from 'express';
import { createUserController } from './useCases/CreateUser';

const router = Router();

router.post('/users', (request: Request, response: Response) => {
  return createUserController.handle(request, response);
});

export { router };
