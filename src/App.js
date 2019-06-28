import React from 'react';
import emailjs from 'emailjs-com';
import logo from './logo.svg';
import './App.css';


function textToBase64Barcode(text){
  var canvas = document.createElement("canvas");
  const JsBarcode = require('jsbarcode')
  JsBarcode(canvas, text, {format: "CODE39"});
  return canvas.toDataURL("image/png");
}

function clicked(e) {
  const orderNumber = 'W810724207';


// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// const msg = {
//   to: 'harshadatla@gmail.com',
//   from: 'test@example.com',
//   subject: 'Sending with Twilio SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };
// sgMail.send(msg);

const emailjs = require('emailjs-com')
const JsBarcode = require('jsbarcode')
JsBarcode("#barcode", "Hi!");
const src = textToBase64Barcode('harsha')
console.log(textToBase64Barcode('harsha'))
//console.log(test, 'test')
const message_html = '<img id="barcode" src=' + src + '/>'
console.log('message', message_html)
var templateParams = {
  name: 'James',
  notes: 'Check this out!',
  to_name: 'Dude',
  to_email: 'datla123@gmail.com',
  message_html: '<img src="https://www.barcodesinc.com/generator/image.php?code=' + orderNumber + '&style=197&type=C128B&width=76&height=50&xres=1&font=3"/>'
};
// emailjs.init('harsha');
//console.log(emailjs)

emailjs.send('gmail','template_LwppKxkz', templateParams, 'user_1cZ6PXmfzk7mjYAzLhzN7')
  .then(function(response) {
     console.log('SUCCESS!', response.status, response.text);
  }, function(err) {
     console.log('FAILED...', err);
  });

// fetch(`/api/email`,{
//   method: 'POST'
// })
// .then(response => {
//   const res = response.json()
//   console.log(res)
// })

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
      <img id="barcode"/>
      <img src='data:image/png;base64,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'/>
      <input type="text" name="email" />
      <button onClick={(e) => {clicked(e)}}>Send</button>
    </div>
  );
}

export default App;
