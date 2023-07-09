import React, { useEffect } from 'react';
import JobItem from './JobItem';
// import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../../features/jobs/jobsSlice';

import { RootState } from '../../app/store';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

const JobList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isLoading, jobs, isError, error } = useAppSelector(
    (state: RootState) => state.jobs
  );

  useEffect(() => {
    dispatch(fetchJobs()).catch((error) => console.log(error));
  }, [dispatch]);

  let content;
  if (isLoading) content = <p>Loading.....</p>;
  if (!isLoading && isError) content = <p>{error}</p>;
  if (!isLoading && !isError && jobs.length === 0)
    content = <p>No jobs found....</p>;
  if (!isLoading && !isError && jobs.length > 0)
    content = jobs.map((item) => <JobItem job={item} key={item.id} />);
  return <div className="jobs-list">{content}</div>;
};

export default JobList;
