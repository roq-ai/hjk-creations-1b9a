const mapping: Record<string, string> = {
  agencies: 'agency',
  campaigns: 'campaign',
  clients: 'client',
  data: 'data',
  reports: 'report',
  updates: 'update',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
