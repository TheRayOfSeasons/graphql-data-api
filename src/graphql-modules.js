import { importSchema } from 'graphql-import';

import { AttendanceResolvers } from './attendance/resolvers';
import { IncidentResolvers } from './incidents/resolvers';

export const modules = {
  resolvers: [
    AttendanceResolvers,
    IncidentResolvers,
  ],
  schemas: [
    importSchema('./src/attendance/schema.graphql'),
    importSchema('./src/incidents/schema.graphql'),
  ]
}
