import axios from 'axios';
import queryString from 'query-string';
import { UpdateInterface, UpdateGetQueryInterface } from 'interfaces/update';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getUpdates = async (query?: UpdateGetQueryInterface): Promise<PaginatedInterface<UpdateInterface>> => {
  const response = await axios.get('/api/updates', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createUpdate = async (update: UpdateInterface) => {
  const response = await axios.post('/api/updates', update);
  return response.data;
};

export const updateUpdateById = async (id: string, update: UpdateInterface) => {
  const response = await axios.put(`/api/updates/${id}`, update);
  return response.data;
};

export const getUpdateById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/updates/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteUpdateById = async (id: string) => {
  const response = await axios.delete(`/api/updates/${id}`);
  return response.data;
};
