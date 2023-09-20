import { GetQueryInterface } from 'interfaces';

export interface UpdateInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface UpdateGetQueryInterface extends GetQueryInterface {
  id?: string;
}
