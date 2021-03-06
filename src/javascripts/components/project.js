import $ from 'jquery';
import 'bootstrap';
import './project.scss';
import projectData from '../data/projectData';
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
import npmPhoto from '../../images/npmlogo1.png';
import git from '../../images/git1.png';
import profilePic from '../../images/me.png';

const imgSrc = () => {
  $('#profilePic').attr('src', profilePic);
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
};

// function to print projects on webpage
const createProjectCards = (projects) => {
  let newProjectCard = '';
  projects.forEach((project) => {
    newProjectCard += `<div class="projectsWrapper">
                          <div class="card cardContainer">
                            <div class="imageContainer front face">
                              <img src="${project.screenshot}" class="card-img"></img>
                              <img src="https://static.thenounproject.com/png/267318-200.png" height="30px" alt="flip-card" class="flip-card">
                            </div>
                            <div class="card-body descContainer back face">
                              <h2 class="card-title">${project.title}</h2>
                              <p class="card-text">${project.description}</p>
                              <h4 class="card-text">${project.technologiesUsed}</h4>
                              <a href="${project.url}" target="_blank" class="btn btn-primary">Live Demo</a>
                              <a href="${project.githubUrl}" target="_blank" class="btn btn-primary">Git Hub</a>
                            </div>
                          </div>
                      </div>`;
    if (project.available === true) {
      $('#projectsPage').html(newProjectCard);
    }
  });
};

const initializeProjectView = () => {
  projectData.getAllProjectsFromDb().then((data) => {
    createProjectCards(data);
  }).catch((error) => {
    console.error(error);
  });
};

export default { initializeProjectView, imgSrc };
