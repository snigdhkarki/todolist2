import React from 'react';

const Project = ({ project, handleDelete  }) => {
  return (
    <li className={project.projectPriority}>
      <h3>{project.projectName}</h3>
      <p>Deadline: {project.projectDeadline}</p>
      <p>Description: {project.projectDescription}</p>
      <p>Priority: {project.projectPriority}</p>
      <button onClick={() => handleDelete(project.id)}>Delete</button>
    </li>
  );
};

export default Project;
