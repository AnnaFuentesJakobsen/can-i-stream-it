import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './style/style.css'
import './style/grid.css'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
