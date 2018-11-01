import $ from 'jquery';
import 'bootstrap';

import projectData from '../data/projectData';

// function to print projects on webpage
const createProjectCards = (projects) => {
  let newProjectCard = '';
  projects.forEach((project) => {
    newProjectCard += `<h3 class="project_header">Projects</h3>;
                        <div class="cardContainer">;
                            <h2>${project.title}</h2>
                            <img src="${project.screenshot}"></img>
                            <p>${project.description}</p>
                            <h4>${project.technologiesUsed}</h4>
                            <h3>${project.available}</h3>
                            <a href="https://${project.url}" target="_blank">View Project</a>
                            <p><a href="https://${project.githubUrl}" target="_blank">Git Hub</a><p>
                        </div>;`;
    if (project.available === true) {
      $('#projectsPage').html(newProjectCard);
    }
  });
};


const initializeProjectView = () => {
  projectData.loadProjects().then((projects) => {
    createProjectCards(projects);
  }).catch((error) => {
    console.error(error);
  });
};

export default { initializeProjectView };
