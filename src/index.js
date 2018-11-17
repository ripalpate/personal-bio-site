import 'jquery';
import firebase from 'firebase/app';
import apiKeys from '../db/apiKeys.json';
import 'bootstrap';
import './index.scss';
import projectView from './javascripts/components/project';
import events from './javascripts/helpers/events';

const initializeApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  projectView.initializeProjectView();
  events.bindEvents();
};

initializeApp();
