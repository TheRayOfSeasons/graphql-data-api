import { Person } from '../models/Person';

export const GetPersons = async ({ id }) => {
  return await Person.query();
}
