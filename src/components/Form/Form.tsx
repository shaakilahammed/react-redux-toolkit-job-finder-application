import React, { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { createJob } from '../../features/jobs/jobsSlice';

type FormProps = {
  editing?: boolean;
};

const Form: React.FC<FormProps> = ({ editing = false }) => {
  const dispatch = useAppDispatch();
  const [input, setInput] = useState({
    title: '',
    type: '',
    salary: '',
    deadline: '',
  });

  const inputHandler = (value: string, fieldName: string) => {
    setInput({ ...input, [fieldName]: value });
  };

  const resetForm = () => {
    setInput({
      title: '',
      type: '',
      salary: '',
      deadline: '',
    });
  };

  const createHandler = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(createJob(input)).catch((error) => console.log(error));
    resetForm();
  };
  const editHandler = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
  };
  return (
    <form
      className="space-y-6"
      onSubmit={editing ? editHandler : createHandler}
    >
      <div className="fieldContainer">
        <label
          htmlFor="lws-JobTitle"
          className="text-sm font-medium text-slate-300"
        >
          Job Title
        </label>
        <select
          id="lws-JobTitle"
          name="lwsJobTitle"
          required
          value={input.title}
          onChange={(e) => inputHandler(e.target.value, 'title')}
        >
          <option value="" hidden>
            Select Job
          </option>
          <option value="Software Engineer">Software Engineer</option>
          <option value="Software Developer">Software Developer</option>
          <option value="Full Stack Developer">Full Stack Developer</option>
          <option value="MERN Stack Developer">MERN Stack Developer</option>
          <option value="DevOps Engineer<">DevOps Engineer</option>
          <option value="QA Engineer">QA Engineer</option>
          <option value="Product Manager">Product Manager</option>
          <option value="Social Media Manager">Social Media Manager</option>
          <option value="Senior Executive">Senior Executive</option>
          <option value="Junior Executive">Junior Executive</option>
          <option value="Android App Developer">Android App Developer</option>
          <option value="IOS App Developer">IOS App Developer</option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Frontend Engineer">Frontend Engineer</option>
        </select>
      </div>

      <div className="fieldContainer">
        <label htmlFor="lws-JobType">Job Type</label>
        <select
          id="lws-JobType"
          name="lwsJobType"
          required
          value={input.type}
          onChange={(e) => inputHandler(e.target.value, 'type')}
        >
          <option value="" hidden>
            Select Job Type
          </option>
          <option value="Full Time">Full Time</option>
          <option value="Internship">Internship</option>
          <option value="Remote">Remote</option>
        </select>
      </div>

      <div className="fieldContainer">
        <label htmlFor="lws-JobSalary">Salary</label>
        <div className="flex border rounded-md shadow-sm border-slate-600">
          <span className="input-tag">BDT</span>
          <input
            type="number"
            name="lwsJobSalary"
            id="lws-JobSalary"
            required
            className="!rounded-l-none !border-0"
            placeholder="20,00,000"
            value={input.salary}
            onChange={(e) => inputHandler(e.target.value, 'salary')}
          />
        </div>
      </div>

      <div className="fieldContainer">
        <label htmlFor="lws-JobDeadline">Deadline</label>
        <input
          type="date"
          name="lwsJobDeadline"
          id="lws-JobDeadline"
          value={input.deadline}
          onChange={(e) => inputHandler(e.target.value, 'deadline')}
          required
        />
      </div>

      <div className="text-right">
        <button
          type="submit"
          id="lws-submit"
          className="cursor-pointer btn btn-primary w-fit"
        >
          {editing ? 'Update' : 'Submit'}
          {/* {editing} */}
        </button>
      </div>
    </form>
  );
};

export default Form;
