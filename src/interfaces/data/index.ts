import { ReportInterface } from 'interfaces/report';
import { GetQueryInterface } from 'interfaces';

export interface DataInterface {
  id?: string;
  name: string;
  value: string;
  report_id: string;
  created_at?: any;
  updated_at?: any;

  report?: ReportInterface;
  _count?: {};
}

export interface DataGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  value?: string;
  report_id?: string;
}
