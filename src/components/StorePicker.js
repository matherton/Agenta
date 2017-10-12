import React from 'react';

function clickAlert(e) {
  e.preventDefault();
  var chatUser = document.querySelector('.enter input').value;
  var submitAction = document.querySelector('button.chat-button');
  if (!chatUser) {
    alert("Please enter your Chat name!");
  }
  else {
    {/* put the name into the chat panel */}
    alert('enter chat!');
    var element = document.querySelector(".message-container");
    var newUserName = React.createElement('div');
    {/*newUserName.innerHTML = chatUser;*/}
    element.appendChild(newUserName);
  }
}

class StorePicker extends React.Component {
	render() {
		return (
			<section className="chat-container">
        <form className="enter">
          <input type="textbox" placeholder="Enter your name" required username={this.value} /><br />
          <button type="submit" className="chat-button chat-orange" onClick={clickAlert}>Start chat</button>
        </form>
      </section>
			)
	}
}

export default StorePicker;
