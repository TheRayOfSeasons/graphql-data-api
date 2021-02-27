import GetIncident from './controllers/GetIncident';
import ListIncidents from './controllers/ListIncidents';

export const CollectionResolvers = {
  incident: GetIncident,
  incidents: ListIncidents,
}
