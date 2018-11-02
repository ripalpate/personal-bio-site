import 'jquery';
import 'bootstrap';

import './index.scss';
import movieView from './javascripts/components/project';
import events from './javascripts/helpers/events';

const initializeApp = () => {
  movieView.initializeProjectView();
  events.bindEvents();
};

initializeApp();
