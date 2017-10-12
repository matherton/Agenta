import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';


import './css/style.css';
import App from './components/App';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';
import Header from './components/Header';

const Root = () => {
		return (
			<div>
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


