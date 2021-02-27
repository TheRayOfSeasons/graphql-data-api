import { Person } from '../models/Person';

export const GetPerson = async ({ id }) => {
  return await Person.query().findById(id);
}
