// import $ from 'jquery';
import 'bootstrap';


// funtion for Print to DOM
const printToDom = (stringToPrint, divId) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = stringToPrint;
};

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
                            <h3>${projects.available}</h3>
                            <a href="https://${project.url}" target="_blank">View Project</a>
                            <p><a href="https://${project.githubUrl}" target="_blank">Git Hub</a><p>
                        </div>;`;
    if (project.available === true) {
      printToDom(newProjectCard, 'projectsPage');
    }
  });
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
