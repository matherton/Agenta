import React from 'react';
import { BrowserRouter, Match, Miss, components } from 'react-router';
import { render } from 'react-dom';

import './css/style.css';
import App from './components/App';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';

var x = document.URL;
var splitPoint = x.split('?');
var justName = splitPoint.pop() || splitPoint.pop(); 

/*var chatName = React.createClass({

	let chatName = document.querySelector('.enter input').value;

  getInitialState: function() {
    return {value: ''};
  },
  onBlur: function(event) {
    this.setState({value: event.target.value});
  },
  render: function() {
    return <div>
        <input type="text" onBlur={this.onBlur.bind(this)}/>
        You typed: <code>{this.state.value}</code>
      </div>
  }
});*/

const Root = () => {

		/*
		setup callback to receive name from initial page (StorePicker.js)
		constructor() {
	    super();
	    this.handleData = this.handleData.bind(this);
	    this.state = {
	      value: ''
	    };
	  }

		handleData(data) {
	    this.setState({
	      value: data
	    });
	  }*/


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
						<Match exactly pattern='/' component={StorePicker} />
						<Match pattern='/store/:storeId' component={App} />
						<Miss component={NotFound} />
					</div>
				</BrowserRouter>
			</section>
		)
}

render(<Root name={justName}/>, document.querySelector('#main'));


