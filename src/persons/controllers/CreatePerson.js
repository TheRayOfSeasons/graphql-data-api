import { Person } from '../models/Person';

export const CreatePerson = async ({ name, age, birthday }) => {
  const person = await Person.query().insert({
    name,
    age,
    birthday
  });
  return person;
}
