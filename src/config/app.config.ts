interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Team Member', 'End Customer'],
  tenantName: 'Agency',
  applicationName: 'HJK Creations',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage users', 'Manage agencies', 'Manage clients', 'Manage campaigns'],
  getQuoteUrl: 'https://app.roq.ai/proposal/96396039-1469-45fa-be56-b51a1fc09b1b',
};
