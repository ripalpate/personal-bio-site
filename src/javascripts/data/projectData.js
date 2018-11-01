import $ from 'jquery';

const loadProjects = () => new Promise((resolve, reject) => {
  $.get('http://localhost:3001/projects')
    .done((data) => {
      resolve(data);
    })
    .fail((error) => {
      reject(error);
    });
});

export default { loadProjects };
