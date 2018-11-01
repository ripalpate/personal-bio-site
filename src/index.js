import 'jquery';
import 'bootstrap';

import './index.scss';
import movieView from './javascripts/components/project';

const initializeApp = () => {
  movieView.initializeProjectView();
};

initializeApp();
