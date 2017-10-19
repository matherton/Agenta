import React from 'react';
import { BrowserRouter, Match, Miss, components } from 'react-router';
import { render } from 'react-dom';

import './css/style.css';
import App from './components/App';
import ChatPanel from './components/ChatPanel';
import NotFound from './components/NotFound';

var x = document.URL;
var splitPoint = x.split('?');
var justName = splitPoint.pop() || splitPoint.pop(); 

const Root = () => {

		return (
			<section>
				 <header className="App-header">
					<a href="https://ajenta.net/" target="_blank">
		        <img src="https://ajenta.net/wp-content/uploads/2015/07/ajenta_white2.png" className="mk-light-logo" alt="ajenta" />
	        </a>
	        <ul className="App-links">
	          <li><a href='/'>Home</a></li>
	          <li><a href='/'>Recordings</a></li>
	          <li><a href='/'>Account</a></li>
	        </ul>
	      </header>
				<BrowserRouter>
					<div>
						<Match exactly pattern='/' component={ChatPanel} />
						<Match pattern='/chat/:storeId' component={App} />
						<Miss component={NotFound} />
					</div>
				</BrowserRouter>
			</section>
		)
}

render(<Root name={justName}/>, document.querySelector('#main'));


