import $ from 'jquery';

// Variables to collect navigation element
const aboutMeElem = $('#navToBio');
const technologiesElem = $('#navToTechnologies');
const projectsPageElem = $('#navToProjects');
const contactElem = $('#navToContacts');
const homeElem = $('#navToHome');

// function to set href on Home
const home = () => {
  homeElem.attr('href', '#home');
};

// function to set href on AboutMe
const aboutMe = () => {
  aboutMeElem.attr('href', '#bioPage');
};

// function to set href on Technologies
const technologies = () => {
  technologiesElem.attr('href', '#technologiesPage');
};

// function to set href on Projects
const projectsDisplay = () => {
  projectsPageElem.attr('href', '#projects');
};

// function to set href on Contacts
const contacts = () => {
  contactElem.attr('href', '#contactPage');
};

const bindEvents = () => {
  homeElem.on('click', () => { home(); });
  aboutMeElem.on('click', () => { aboutMe(); });
  technologiesElem.on('click', () => { technologies(); });
  projectsPageElem.on('click', () => { projectsDisplay(); });
  contactElem.on('click', () => { contacts(); });
};

export default { bindEvents };
