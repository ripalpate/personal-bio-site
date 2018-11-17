
import axios from 'axios';
import apiKeys from '../../../db/apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;
console.log(baseUrl);

const getAllProjectsFromDb = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/projects.json`)
    .then((result) => {
      console.log(result);
      const allProjectsObject = result.data;
      console.log(allProjectsObject);
      const allProjectsArray = [];
      if (allProjectsObject != null) {
        Object.keys(allProjectsObject).forEach((projectId) => {
          const newProject = allProjectsObject[projectId];
          newProject.id = projectId;
          allProjectsArray.push(newProject);
        });
      }
      resolve(allProjectsArray);
    }).catch((err) => {
      reject(err);
    });
});

// const loadProjects = () => axios.get('http://localhost:3001/projects');

export default { getAllProjectsFromDb };
