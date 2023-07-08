import React from 'react';
import JobItem from './JobItem';

const JobList: React.FC = () => {
  return (
    <div className="jobs-list">
      <JobItem />
    </div>
  );
};

export default JobList;
