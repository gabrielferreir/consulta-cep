import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import Root from './root';


ReactDOM.render(<Root/>, document.getElementById('root'));

serviceWorker.register();
