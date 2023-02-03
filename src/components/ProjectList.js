import React from 'react';
import Project from './Project';

const ProjectList = ({ projects, handleDelete }) => {
  return (
    <ul>
      {projects.map((project) => (
        <Project key={project.id} project={project} handleDelete={handleDelete} />
      ))}
    </ul>
  );
};

export default ProjectList;
