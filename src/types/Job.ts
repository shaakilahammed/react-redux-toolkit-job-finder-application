type Job = {
  title: string;
  type: string;
  salary: string;
  deadline: string;
  id: number;
};

export type JobsState = {
  isLoading: boolean;
  jobs: Job[];
  isError: boolean;
  error?: string;
};
export default Job;
