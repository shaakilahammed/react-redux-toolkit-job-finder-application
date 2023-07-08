import React from 'react';
import Form from '../components/Form/Form';

const EditJobs: React.FC = () => {
  return (
    <>
      <h1 className="mb-10 text-center lws-section-title">Edit Job</h1>
      <div className="max-w-3xl mx-auto">
        <Form editing={true} />
      </div>
    </>
  );
};

export default EditJobs;
