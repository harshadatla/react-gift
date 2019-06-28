const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.post('/api/email', (req, res) => {
    const name = req.query.name || 'World';
//     const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey('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');
// const msg = {
//   to: 'harshadatla@gmail.com',
//   from: 'test@example.com',
//   subject: 'Sending with Twilio SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };
//     sgMail.send(msg).then(resp => {
//         console.log('hello')
//         console.log(res)
//         res.setHeader('Content-Type', 'application/json');
//     res.send(JSON.stringify(resp));
//     })
var templateParams = {
    name: 'James',
    notes: 'Check this out!'
};
 
const emailjs = require('emailjs-com')
emailjs.send('gmail', 'template_LwppKxkz', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);