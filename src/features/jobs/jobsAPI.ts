import { AxiosResponse } from 'axios';
import axios from '../../utils/axios';
import Job from '../../types/Job';

export const getJobs = async (): Promise<Job[]> => {
  const response: AxiosResponse<Job[]> = await axios.get('/jobs');
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

export const deleteJob = async (id: number): Promise<void> => {
  await axios.delete(`/jobs/${id}`);
};
