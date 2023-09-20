import { CampaignInterface } from 'interfaces/campaign';
import { AgencyInterface } from 'interfaces/agency';
import { GetQueryInterface } from 'interfaces';

export interface ClientInterface {
  id?: string;
  name: string;
  address: string;
  contact_number: string;
  contact_person: string;
  agency_id: string;
  created_at?: any;
  updated_at?: any;
  campaign?: CampaignInterface[];
  agency?: AgencyInterface;
  _count?: {
    campaign?: number;
  };
}

export interface ClientGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  address?: string;
  contact_number?: string;
  contact_person?: string;
  agency_id?: string;
}
