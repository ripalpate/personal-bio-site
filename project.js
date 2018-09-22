// Projects Array of object
let projects = [
    {
        title: "Cool Project", 
        screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    },
    {
        title: "Awesome Project", 
        screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
        description: "This is the better project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/ripalpate/grpproject1", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/ripalpate/grpproject1"
    }
];

// funtion for Print to DOM
const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
};

// function to print projects on webpage
const createProjectCards = () => {
    let newProjectCard = '';
    for (let i = 0; i < projects.length; i++) {
        newProjectCard += `<div class="cardContainer">`;
        newProjectCard += `<h2>${projects[i].title}</h2>`;
        newProjectCard += `<img src="${projects[i].screenshot}"></img>`;
        newProjectCard += `<p>${projects[i].description}</p>`;
        newProjectCard += `<h4>${projects[i].technologiesUsed}</h4>`;
        newProjectCard += `<h3>${projects[i].available}</h3>`;
        newProjectCard += `<a href="https://${projects[i].url}" target="_blank">View Project</a>`;
        newProjectCard += `<p><a href="https://${projects[i].githubUrl}" target="_blank">Git Hub</a><p>`;
        newProjectCard += `</div>`;
        if (projects[i].available === true){
        printToDom(newProjectCard, 'projectsPage');
    };
    };
};
createProjectCards();



const aboutMeElem = document.getElementById('navToBio');
const technologiesElem = document.getElementById('navToTechnologies');
const projectsPageElem = document.getElementById('navToProjects');

// function for click on About Me
const aboutMe = () => {
    aboutMeElem.setAttribute('href', '#bioPage');
}
// EventListener for About Me 
aboutMeElem.addEventListener('click', aboutMe);

//function for clcik on technologies
const technologies = () => {
    technologiesElem.setAttribute('href', '#technologiesPage' );
}
//event listener for Technologies
technologiesElem.addEventListener('click', technologies);

//function for clcik on projects
const projectsDisplay = () => {
    projectsPageElem.setAttribute('href', '#projectsPage' );
}
//event listener for Projects
projectsPageElem.addEventListener('click', projectsDisplay);