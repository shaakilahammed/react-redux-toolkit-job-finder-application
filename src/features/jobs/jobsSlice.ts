import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addJob, deleteJob, editJob, getJobs } from './jobsAPI';
import { JobsState } from '../../types/Job';
import Job from '../../types/Job';
// import { AppDispatch, RootState } from '../../app/store';

const initialState: JobsState = {
  isLoading: false,
  jobs: [],
  isError: false,
  error: '',
};

export const fetchJobs = createAsyncThunk('jobs/fetch', async () => {
  const jobs = await getJobs();
  return jobs;
});

export const createJob = createAsyncThunk(
  'jobs/create',
  async (data: Job): Promise<Job> => {
    const job = await addJob(data);
    return job;
  }
);

export const changeJob = createAsyncThunk(
  'jobs/change',
  async ({ id, data }: { id: number; data: Job }): Promise<Job> => {
    const job = await editJob(id, data);
    return job;
  }
);

export const removeJob = createAsyncThunk(
  'jobs/remove',
  async (id: number): Promise<void> => {
    await deleteJob(id);
  }
);

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.jobs = [];
        state.isError = true;
        state.error = action.error?.message;
      });
    builder
      .addCase(createJob.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(createJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobs.push(action.payload);
      })
      .addCase(createJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
    builder
      .addCase(changeJob.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(changeJob.fulfilled, (state, action) => {
        state.isLoading = false;
        const findIndex = state.jobs.findIndex(
          (item) => item.id === action.payload.id
        );
        state.jobs[findIndex] = action.payload;
      })
      .addCase(changeJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
    builder
      .addCase(removeJob.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(removeJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobs = state.jobs.filter((item) => item.id !== action.meta.arg);
      })
      .addCase(removeJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default jobsSlice.reducer;
