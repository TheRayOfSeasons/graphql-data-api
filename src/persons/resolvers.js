import { GetPerson } from './controllers/GetPerson';
import { GetPersons } from './controllers/GetPersons';

export const PersonResolvers = {
  person: GetPerson,
  persons: GetPersons,
}
