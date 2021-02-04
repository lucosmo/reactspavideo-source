import React from 'react';

export default class Forms extends React.Component {
	render() {
		return <div id="contactform"><p>CONTACT US</p><div className="forma">
		<form>
		<label for="name">Name:</label><br />
  	<input type="text" id="name" name="name" /><br />
  	<label for="emaila">Email:</label><br />
  	<input type="email" id="emaila" name="emaila" /><br />
  	<label for="message">Message:</label><br />
  	<textarea name="message" rows="10" cols="30" /><br />
  	<input type="submit" value="Submit" />
		</form>
		</div>
		</div>
		}
}
