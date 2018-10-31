// import $ from 'jquery';
import 'bootstrap';


// funtion for Print to DOM
const printToDom = (stringToPrint, divId) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = stringToPrint;
};

// function to print projects on webpage
const createProjectCards = () => {
  let newProjectCard = '';
  newProjectCard = '<h3 class="project_header">Projects</h3>';
  for (let i = 0; i < projects.length; i++) {
    newProjectCard += '<div class="cardContainer">';
    newProjectCard += `<h2>${projects[i].title}</h2>`;
    newProjectCard += `<img src="${projects[i].screenshot}"></img>`;
    newProjectCard += `<p>${projects[i].description}</p>`;
    newProjectCard += `<h4>${projects[i].technologiesUsed}</h4>`;
    newProjectCard += `<h3>${projects[i].available}</h3>`;
    newProjectCard += `<a href="https://${projects[i].url}" target="_blank">View Project</a>`;
    newProjectCard += `<p><a href="https://${projects[i].githubUrl}" target="_blank">Git Hub</a><p>`;
    newProjectCard += '</div>';
    if (projects[i].available === true) {
      printToDom(newProjectCard, 'projectsPage');
    }
  }
};
createProjectCards();

// Variables to collect navigation element
const aboutMeElem = document.getElementById('navToBio');
const technologiesElem = document.getElementById('navToTechnologies');
const projectsPageElem = document.getElementById('navToProjects');
const contactElem = document.getElementById('navToContacts');
const homeElem = document.getElementById('navToHome');


// function for click on Home
const home = () => {
  homeElem.setAttribute('href', '#home');
};
// event listener for Projects
homeElem.addEventListener('click', home);

// function for click on About Me
const aboutMe = () => {
  aboutMeElem.setAttribute('href', '#bioPage');
};
// EventListener for About Me
aboutMeElem.addEventListener('click', aboutMe);

// function for clcik on technologies
const technologies = () => {
  technologiesElem.setAttribute('href', '#technologiesPage');
};
// event listener for Technologies
technologiesElem.addEventListener('click', technologies);

// function for clcik on projects
const projectsDisplay = () => {
  projectsPageElem.setAttribute('href', '#projectsPage');
};
// event listener for Projects
projectsPageElem.addEventListener('click', projectsDisplay);

// function for click on Contacts
const contacts = () => {
  contactElem.setAttribute('href', '#contactPage');
};
// event listener for Projects
contactElem.addEventListener('click', contacts);
