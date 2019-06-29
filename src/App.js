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
  const orderNumber = 'WA15515487';


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
// JsBarcode("#barcode", "Hi!");
const src = textToBase64Barcode('harsha')
console.log(textToBase64Barcode('harsha'))
//console.log(test, 'test')
const message_html = '<img id="barcode" src=' + src + '/>'
console.log('message', message_html)
var templateParams = {
  name: 'James',
  notes: 'Check this out!',
  to_name: 'Customer',
  to_email: 'datla123@gmail.com',
  message_html: '<img src="https://www.barcodesinc.com/generator/image.php?code=' + orderNumber + '&style=197&type=C128B&width=200&height=100&xres=1&font=3"/>'
};
// emailjs.init('harsha');
//console.log(emailjs)

emailjs.send('gmail','template_sJlVai6P', templateParams, 'user_2J9Ph5ccKerUmGo7KoeAd')
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

      <input type="email" name="email" />
      <button onClick={(e) => {clicked(e)}}>Send</button>
    </div>
  );
}

export default App;
