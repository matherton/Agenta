import React from 'react';
import Inventory from './Inventory';
import Order from './Order';

class App extends React.Component {
	render() {
		return (
			<section className="chat-panel">
	      <header className="chat-header">
	        <h1>Chat</h1>
	      </header>
	      <div className="message-container">
	        <div className="message-title">Roberto Lastname</div>
	        <div className="chat-bubble">chat message goes here</div>
	        <div className="message-title">Roberto Lastname</div>
	        <div className="chat-bubble">second chat message, maybe</div>
	      </div>
	      <input type="textbox" className="chat-box" placeholder="Your mesage here" />
	      <button type="submit" className="chat-button chat-orange">Send</button>
	    </section>
		)
	}
}

export default App;