import $ from 'jquery';
import 'bootstrap';
import htmlPhoto from '../../images/html.png';
import cssPhoto from '../../images/css.png';
import gitPhoto from '../../images/github.jpg';
import jsPhoto from '../../images/js.png';
import mailPhoto from '../../images/mail.png';
import linkedInPhoto from '../../images/linkedIn.png';
import githubPhoto from '../../images/git.jpg';
import jqueryPhoto from '../../images/jquery-icon.png';
import webpackPhoto from '../../images/webpack.png';
import bootstrapPhoto from '../../images/bootstrap.png';
import sassPhoto from '../../images/sass.png';
import firebasePhoto from '../../images/firebase.png';
import reactPhoto from '../../images/react.png';
import npmPhoto from '../../images/npmlogo.png';
import git from '../../images/git1.png';
import projectData from '../data/projectData';


$('#htmlPhoto').attr('src', htmlPhoto);
$('#cssPhoto').attr('src', cssPhoto);
$('#gitPhoto').attr('src', gitPhoto);
$('#jsPhoto').attr('src', jsPhoto);
$('#mailPhoto').attr('src', mailPhoto);
$('#linkedInPhoto').attr('src', linkedInPhoto);
$('#gitHubPhoto').attr('src', githubPhoto);
$('#jqueryPhoto').attr('src', jqueryPhoto);
$('#webpackPhoto').attr('src', webpackPhoto);
$('#bootstrapPhoto').attr('src', bootstrapPhoto);
$('#sassPhoto').attr('src', sassPhoto);
$('#firebasePhoto').attr('src', firebasePhoto);
$('#reactPhoto').attr('src', reactPhoto);
$('#npmPhoto').attr('src', npmPhoto);
$('#git').attr('src', git);

// function to print projects on webpage
const createProjectCards = (projects) => {
  let newProjectCard = '';
  projects.forEach((project) => {
    newProjectCard += `<div class="cardContainer">
                          <h2>${project.title}</h2>
                          <img src="${project.screenshot}"></img>
                          <p>${project.description}</p>
                          <h4>${project.technologiesUsed}</h4>
                          <a href="https://${project.url}" target="_blank">View Project</a>
                          <p><a href="https://${project.githubUrl}" target="_blank">Git Hub</a><p>
                        </div>`;
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
