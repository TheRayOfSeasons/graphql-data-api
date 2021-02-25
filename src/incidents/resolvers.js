import GetIncident from './controllers/GetIncident';
import ListIncidents from './controllers/ListIncidents';

export const IncidentResolvers = {
  incident: GetIncident,
  incidents: ListIncidents,
}
