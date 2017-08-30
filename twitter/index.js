const { Button, Led, Board } = require('johnny-five');
const _ = require('lodash');
const Twitter = require('twitter');

const board = new Board();
const twitterClient = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

let led;
let button;

board.on('ready', () => {
  led = new Led(6);
  button = new Button(5);

  // This will grant access to the led instance
  // from within the REPL that's created when
  // running this program.
  board.repl.inject({
    led: led,
    button: button
  });

  const stream = twitterClient.stream('statuses/filter', { track: 'nodebots' });
  stream.on('data', onIncomingTwitterData);

  stream.on('error', error => {
    throw error;
  });

  button.on('press', sendTweet);
});

function onIncomingTwitterData(evt) {
  led.on();
  setTimeout(() => {
    led.off();
  }, 2000);
}

function sendTweet() {
  twitterClient.post(
    'statuses/update',
    { status: 'Hello from my Arduino Nano running #nodejs! 🤖 #nodebots #nodeschool #pixelbar' },
    (err, tweet, response) => {
      if (err) {
        throw err;
      } else {
        console.log('Tweet sent!');
      }
    }
  );
}
