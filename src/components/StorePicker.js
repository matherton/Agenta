import React from 'react';

/*function clickAlert(e) {
  e.preventDefault();
  var chatUser = document.querySelector('.enter input').value;
  var submitAction = document.querySelector('button.chat-button');
  if (!chatUser) {
    alert("Please enter your chat name!");
  }
  else {
    {/* put the name into the chat panel }*/
    /*window.location.replace("/store/chat");
    var element = document.querySelector(".message-container");
    var newUserName = React.createElement('div');
    {/*newUserName.innerHTML = chatUser;}*/
    /*element.appendChild(newUserName);
  }
}*/

class StorePicker extends React.Component {

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
    window.location.replace("/store/chat?" +chatUser);
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

export default StorePicker;
