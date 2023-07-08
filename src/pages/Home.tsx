import React from 'react';
import Searchbox from '../components/Filter/Searchbox';
import FilterSelectbox from '../components/Filter/FilterSelectbox';
import JobList from '../components/Jobs/JobList';

const Home: React.FC = () => {
  return (
    <>
      <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
        <h1 className="lws-section-title">All Available Jobs</h1>
        <div className="flex gap-4">
          <Searchbox />
          <FilterSelectbox />
        </div>
      </div>

      <JobList />
    </>
  );
};

export default Home;
