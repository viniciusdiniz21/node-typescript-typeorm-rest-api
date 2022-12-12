import { AppDataSource } from "../data-source";
import { Subject } from "../entities/Subject";

// instancia um repositório do model Subject que por sua vez é uma entidade do banco de dados
export const subjectRepository = AppDataSource.getRepository(Subject);