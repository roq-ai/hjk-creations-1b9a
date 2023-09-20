import { DataInterface } from 'interfaces/data';
import { CampaignInterface } from 'interfaces/campaign';
import { GetQueryInterface } from 'interfaces';

export interface ReportInterface {
  id?: string;
  title: string;
  content: string;
  campaign_id: string;
  created_at?: any;
  updated_at?: any;
  data?: DataInterface[];
  campaign?: CampaignInterface;
  _count?: {
    data?: number;
  };
}

export interface ReportGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  content?: string;
  campaign_id?: string;
}
