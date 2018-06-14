import React from 'react';
import './index.css';
// import registerServiceWorker from './registerServiceWorker';
import {unregister} from './registerServiceWorker';
import BasisExample from './router'
import { hydrate, render } from 'react-dom';


const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(<BasisExample />, rootElement);
} else {
  render(<BasisExample />, rootElement);
}

// registerServiceWorker();
unregister()
