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
