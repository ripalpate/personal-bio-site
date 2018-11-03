import $ from 'jquery';
import 'bootstrap';
import htmlPhoto from '../../images/html.png';
import cssPhoto from '../../images/css.png';
import gitPhoto from '../../images/github.jpg';
import jsPhoto from '../../images/js.png';
import mailPhoto from '../../images/mail.png';
import linkedInPhoto from '../../images/linkedIn.png';
import githubPhoto from '../../images/git.jpg';
import projectData from '../data/projectData';


$('#htmlPhoto').attr('src', htmlPhoto);
$('#cssPhoto').attr('src', cssPhoto);
$('#gitPhoto').attr('src', gitPhoto);
$('#jsPhoto').attr('src', jsPhoto);
$('#mailPhoto').attr('src', mailPhoto);
$('#linkedInPhoto').attr('src', linkedInPhoto);
$('#gitHubPhoto').attr('src', githubPhoto);

// function to print projects on webpage
const createProjectCards = (projects) => {
  let newProjectCard = '';
  projects.forEach((project) => {
    newProjectCard += `<h3 class="project_header">Projects</h3>;
                        <div class="cardContainer">
                            <h2>${project.title}</h2>
                            <img src="${project.screenshot}"></img>
                            <p>${project.description}</p>
                            <h4>${project.technologiesUsed}</h4>
                            <a href="https://${project.url}" target="_blank">View Project</a>
                            <p><a href="https://${project.githubUrl}" target="_blank">Git Hub</a><p>
                        </div>;`;
    if (project.available === true) {
      $('#projectsPage').html(newProjectCard);
    }
  });
};

const initializeProjectView = () => {
  projectData.loadProjects().then((data) => {
    createProjectCards(data.data);
  }).catch((error) => {
    console.error(error);
  });
};

export default { initializeProjectView };
