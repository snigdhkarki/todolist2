import React, { useState } from 'react';

const ProjectForm = ({ addProject }) => {
  const [projectName, setProjectName] = useState('');
  const [projectDeadline, setProjectDeadline] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectPriority, setProjectPriority] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addProject({ projectName, projectDeadline, projectDescription, projectPriority });
    setProjectName('');
    setProjectDeadline('');
    setProjectDescription('');
    setProjectPriority('');
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Project Name"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
      />
      <input
        type="date"
        placeholder="Project Deadline"
        value={projectDeadline}
        onChange={(e) => setProjectDeadline(e.target.value)}
      />
      <input
        type="text"
        placeholder="Project Description"
        value={projectDescription}
        onChange={(e) => setProjectDescription(e.target.value)}
      />
      <select value={projectPriority} onChange={(e) => setProjectPriority(e.target.value)}>
        <option value="">Select Priority</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <button type="submit">Add Project</button>
    </form>
  );
};

export default ProjectForm;