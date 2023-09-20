import { ReportInterface } from 'interfaces/report';
import { ClientInterface } from 'interfaces/client';
import { GetQueryInterface } from 'interfaces';

export interface CampaignInterface {
  id?: string;
  name: string;
  start_date: any;
  end_date: any;
  budget: number;
  client_id: string;
  created_at?: any;
  updated_at?: any;
  report?: ReportInterface[];
  client?: ClientInterface;
  _count?: {
    report?: number;
  };
}

export interface CampaignGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  client_id?: string;
}
