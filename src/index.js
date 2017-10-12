import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';


import './css/style.css';
import App from './components/App';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';

const Root = () => {
		return (
			<div>
			 <header className="App-header">
        <img src="https://ajenta.net/wp-content/uploads/2015/07/ajenta_white2.png" className="mk-light-logo" alt="ajenta" />
        <ul className="App-links">
          <li><a href=''>Home</a></li>
          <li><a href=''>Recordings</a></li>
          <li><a href=''>Account</a></li>
        </ul>
      </header>
				<BrowserRouter>
				<div>
					<Match exactly pattern='/' component={StorePicker} />
					<Match pattern='/store/:storeId' component={App} />
					<Miss component={NotFound} />
				</div>
				</BrowserRouter>
			</div>
		)
}

render(<Root/>, document.querySelector('#main'));


