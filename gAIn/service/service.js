const express = require('express')
const app = express();
const oai = require('openai');
const Configuration = oai.Configuration;
const OpenAIApi = oai.OpenAIApi;


//openai auth and function
const configuration = new Configuration({
  apiKey: process.env.OPENAI_KEY
});
const openai = new OpenAIApi(configuration);

async function getPlan(prompt) {
  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      temperature: 0.8,
      max_tokens: 200
    });
    console.log(completion.data.choices[0].text);
    return completion.data.choices[0].text;
  } catch(error) {
    if (error.response) {
      console.error(error.response.status, error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
    }
    return ''
  }
}


//twilio auth and function
const accountSid  = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

function sendSMS(message, recipientNumber) {
  client.messages
    .create({
      body: message,
      from: '+15854206151',
      to: recipientNumber
    })
    .then((message) => console.log(message.sid));
}


//functionality
const request = require('request');

app.get('/response/:phone', function(req, res) {
  let options = {
    json: true
  };
  let phonenumber = req.params.phone;
  request.get(options, () => {
    getPlan("hello").then((resp)=> {
      res.send(resp)
      sendSMS(resp, phonenumber)} )
  });
});

// start our server on port 8080
app.listen(8080,() => {
  console.log("Server now listening on 8080");
});
