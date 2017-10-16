import React from 'react';
import Inventory from './Inventory';
import Order from './Order';
import StorePicker from './StorePicker';

class App extends React.Component {

	handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    var chatUser = this.state.value;
    alert('Ready to enter chat: ' + chatUser + '!');
    //console.log(chatUser);
  }

	render() {
		return (
			
			<section className="chat-panel">
	      <header className="chat-header">
	        <h1>Chat</h1>
	      </header>
	      <div className="message-container">
	        <div className="message-title">{this.props.name}</div>
	        <div className="chat-bubble">chat message goes here</div>
	        <div className="message-title">Roberto Lastname</div>
	        <div className="chat-bubble">second chat message, maybe</div>
	      </div>
	      <form className="ChatPanel" onSubmit={this.handleSubmit}>
		      <input onChange={this.handleChange} type="textbox" className="chat-box" placeholder="Your mesage here" />
		      <button type="submit" className="chat-button chat-orange">Send</button>
				</form>
	    </section>

		)
	}
}

export default App;