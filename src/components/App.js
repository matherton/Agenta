import React from 'react';

var x = document.URL;
var splitPoint = x.split('?');
var justName = splitPoint.pop() || splitPoint.pop();

class App extends React.Component {

	constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

	handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    var chatBox = document.createElement("div");
    chatBox.setAttribute('class', 'chat-bubble');
    chatBox.innerHTML = this.state.value;
    document.getElementsByClassName("message-title")[1].appendChild(chatBox);
		document.querySelector('.chat-box').value = "";
		//make the chat area always scroll to bottom when new comments are added
		var objDiv = document.querySelector(".message-container");
		objDiv.scrollTop = objDiv.scrollHeight;
  }

	render() {
		return (
			
			<section className="chat-panel">
				<a href="/" title="close chat" className="close-chat">
		      <header className="chat-header">
		        <h1>Chat</h1>
		      </header>
		    </a>
	      <div className="message-container">
	        <div className="message-title">Roberto Lastname</div>
	        <div className="chat-bubble">chat message goes here</div>
	        <div className="message-title user">{justName}</div>
	      </div>
	      <form className="chat-area" onSubmit={this.handleSubmit}>
		      <input cols="50" type="textbox" value={this.state.value} onChange={this.handleChange} className="chat-box" placeholder="Your mesage here" rows="4" cols="50"/>
		      <button type="submit" className="chat-button chat-orange">Send</button>
				</form>
	    </section>

		)
	}
}

export default App;