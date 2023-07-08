import React from 'react';
import Form from '../components/Form/Form';

const AddJobs: React.FC = () => {
  return (
    <>
      <h1 className="mb-10 text-center lws-section-title">Add New Job</h1>
      <div className="max-w-3xl mx-auto">
        <Form />
      </div>
    </>
  );
};

export default AddJobs;
