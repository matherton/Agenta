import React from 'react';

class ChatPanel extends React.Component {

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
    alert('Ready to enter chat: ' + this.state.value + '!');
    const chatUser = this.state.value;
    console.log(chatUser);
    window.location.replace("/chat/chat?" +chatUser);
  }

	render() {
		return (
			<section className="chat-container">
        <form className="enter" onSubmit={this.handleSubmit}>
          <input type="textbox" value={this.state.value} onChange={this.handleChange} placeholder="Enter your name" required /><br />
          <button type="submit" className="chat-button chat-orange">Start chat</button>
        </form>
      </section>
			)
	}
}

export default ChatPanel;