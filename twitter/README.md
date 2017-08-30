# Twitter

Lights up LED when someone tweets about `#nodebots` and sends a tweet when the button is pressed.

## Requirements

- Arduino (Nano)
- breadboard
- jumper wires
- 1x red LED 
- 1x 220Ω resistor (Red-Red-Brown)
- 1x 1kΩ resistor (Brown-Black-Red)
- 1x button

## Wire up

![](../nano-button-led_bb.png)

## Instructions

0. [Create a Twitter app](https://apps.twitter.com/)
1. Copy `.env.example` to `.env` and fill in the credentials from your Twitter app
2. Create the wire up setup shown above
3. Connect Arduino to your laptop
4. Run `npm run twitter`
