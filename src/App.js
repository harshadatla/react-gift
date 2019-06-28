import React from 'react';
import logo from './logo.svg';
import './App.css';

function clicked(e) {
  const orderNumber = 'W810724207';


// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'datla123@gmail.com',
  from: 'test@example.com',
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg);

}

function App() {
  return (
    <div className="App">
    <script src="https://smtpjs.com/v3/smtp.js">
    </script>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
      <input type="text" name="email" />
      <button onClick={(e) => {clicked(e)}}>Send</button>
    </div>
  );
}

export default App;
