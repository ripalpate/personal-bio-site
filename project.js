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

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
};

const createProjectCards = () => {
    let newProjectCard = '';
    for (let i = 0; i < projects.length; i++) {
        newProjectCard += `<div>`;
        newProjectCard += `<h2>${projects[i].title}</h2>`;
        newProjectCard += `<h3>${projects[i].screenshot}</h3>`;
        newProjectCard += `<p>${projects[i].description}</p>`;
        newProjectCard += `<li>${projects[i].technologiesUsed}</li>`;
        newProjectCard += `<h3>${projects[i].available}</h3>`;
        newProjectCard += `<p>${projects[i].url}</p>`;
        newProjectCard += `<h4>${projects[i].githubUrl}</h4>`;
        newProjectCard += `</div>`;
    };
    printToDom(newProjectCard, 'projectsPage');
};
createProjectCards();