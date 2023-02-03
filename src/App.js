import React, { useState, useEffect } from 'react';
import ProjectForm from './components/ProjectForm';
import ProjectList from './components/ProjectList';
import "./App.css";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [sortBy, setSortBy] = useState('id');

  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem('projects'));
    if (storedProjects) {
      setProjects(storedProjects);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  const addProject = (project) => {
    setProjects([...projects, { ...project, id: projects.length + 1 }]);
  };

  const handleDelete = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  const sortProjects = (sortKey) => {
    setSortBy(sortKey);
    setProjects([...projects].sort((a, b) => (a[sortKey] > b[sortKey] ? 1 : -1)));
    window.location.reload();
  };

  return (
    <div>
      <h1 className='title'>To-Do List</h1>
      <ProjectForm addProject={addProject} />
      <button onClick={() => sortProjects('projectDeadline')}>
        Sort by Deadline
      </button>
      <ProjectList projects={projects} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
