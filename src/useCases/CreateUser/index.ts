import { MailtrapMailProvider } from '../../providers/implementations/MailtrapProvider';
import { PostGresUserRepository } from '../../repositories/implementations/PostGresUserRepository';
import { CreateUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';

const mailtrapProvider = new MailtrapMailProvider();
const postgresUserRepository = new PostGresUserRepository();

const createUserUseCase = new CreateUserUseCase(
  postgresUserRepository,
  mailtrapProvider,
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
