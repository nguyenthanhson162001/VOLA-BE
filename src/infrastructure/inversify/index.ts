import "reflect-metadata";
import { Container } from "inversify";
import IUserRepository from "@domain/repositories/IUserRepository";
import UserRepository from "@infrastructure/mongoose/repositories/UserRepository";
import ErrorCollector from "@presentation/utilities/ErrorCollector";
const container = new Container({
  autoBindInjectable: true,
  skipBaseClassChecks: true,
});

// Utilities
container.bind<ErrorCollector>("ErrorCollector").to(ErrorCollector);
container.bind<IUserRepository>("UserRepository").to(UserRepository);

export default container;
