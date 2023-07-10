type Job = {
  title: string;
  type: string;
  salary: string;
  deadline: string;
  id?: number | string;
};

export type JobsState = {
  isLoading: boolean;
  jobs: Job[];
  isError: boolean;
  error?: string;
  editing: Job;
};
export default Job;
