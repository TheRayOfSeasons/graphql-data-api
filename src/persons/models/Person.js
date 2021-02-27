import { Model } from 'objection';

export class Person extends Model {
  static get tableName() {
    return 'persons';
  }

  static get idColumn() {
    return 'id';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'age', 'birthday'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string' },
        age: { type: 'number' },
        birthday: { type: 'Date' },
      }
    }
  }
}