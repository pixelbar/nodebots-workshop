# Webserver

Spins up a webserver on http://localhost:3000. Lights up the LED for 1 second for every request and performs a POST request on button press.

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

0. Update the code in [`webserver/index.js`](index.js) by changing `POST_URL` to a valid URL. For example a [RequestBin](https://requestb.in)
1. Create the wire up setup shown above
2. Connect Arduino to your laptop
3. Run `npm run webserver`
4. Go to http://localhost:3000
