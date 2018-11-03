
import axios from 'axios';

const loadProjects = () => axios.get('http://localhost:3001/projects');

export default { loadProjects };
