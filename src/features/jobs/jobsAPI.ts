import { AxiosResponse } from 'axios';
import axios from '../../utils/axios';
import Job from '../../types/Job';

export const getJobs = async (type: string): Promise<Job[]> => {
  const filterString = type ? `type=${type}` : '';
  const response: AxiosResponse<Job[]> = await axios.get(
    `/jobs?${filterString}`
  );
  return response.data;
};

export const getJobById = async (id: number | string): Promise<Job> => {
  const response: AxiosResponse<Job> = await axios.get(`/jobs/${id}`);
  return response.data;
};

export const addJob = async (data: Job): Promise<Job> => {
  const response: AxiosResponse<Job> = await axios.post('/jobs', data);
  return response.data;
};

export const editJob = async (id: number | string, data: Job): Promise<Job> => {
  const response: AxiosResponse<Job> = await axios.put(`/jobs/${id}`, data);
  return response.data;
};

export const deleteJob = async (id: number | string): Promise<void> => {
  await axios.delete(`/jobs/${id}`);
};
