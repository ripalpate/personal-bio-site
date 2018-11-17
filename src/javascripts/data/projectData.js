
import axios from 'axios';
import apiKeys from '../../../db/apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllProjectsFromDb = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/projects.json`)
    .then((result) => {
      // console.log(result);
      const allProjectsObject = result.data;
      // console.log(allProjectsObject);
      const allProjectsArray = [];
      if (allProjectsObject != null) {
        Object.keys(allProjectsObject).forEach((projectId) => {
          const newProject = allProjectsObject[projectId];
          // console.log(newProject);
          newProject.id = projectId;
          // console.log(projectId);
          allProjectsArray.push(newProject);
        });
      }
      resolve(allProjectsArray);
    }).catch((err) => {
      reject(err);
    });
});

export default { getAllProjectsFromDb };
