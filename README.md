<p align="center">
  <img alt="JavaScript plus Hardware equals Nodebots" src="http://nodebots.io/img/equation.png">
  <h1 align="center">Nodebots Workshop</h1>
</p>

🤖  This repo serves as resources for the Hardware &amp;&amp; JS workshop given at [NodeSchool Rotterdam].

## Requirements

- Arduino (for example Nano)
- A breadboard
- A set of jumper wires
- 1x red LED
- 1x 220Ω resistor (Red-Red-Brown - [view color coding](http://iamtechnical.com/sites/default/files/220-ohm-resistor-color-code.jpg))
- 1x 1kΩ resistor (Brown-Black-Red - [view color coding](http://iamtechnical.com/sites/default/files/1k-ohm-resistor-color-code.jpg))
- 1x button
- Computer with:
  - [Node.js] and [npm] (this is installed with Node.js)
  - Potentially the [Arduino IDE] to install the firmware
  - Your favorite code editor (e.g. [Visual Studio Code])
  - The drivers to detect your Arduino (everything with a CH340G chip): 
    - [Windows, Linux, Mac (10.11 El Capitan and lower)](https://www.sparkfun.com/products/14050)
    - [Mac (10.12 Siera and higher)](https://github.com/adrianmihalko/ch340g-ch34g-ch34x-mac-os-x-driver)

If you have a new Arduino you will need to install the Firmata firmware on the Arduino. 
[Perform the instructions in this blog post to do so][Getting started with nodebots].

## Examples

There are in total five examples in this repository that you can check out. In 
each of the folders you can find instructions on the hardware setup and how to run 
the code. But first make sure to perform the following instructions:

```bash
git clone git@github.com:pixelbar/nodebots-workshop.git
cd nodebots-workshop
npm install
```

Make sure you Arduino is plugged in. You might have to install a driver for your
Arduino to be recognized. If your Arduino is a clone that uses the CH340G chip you 
can [take the driver from this Sparkfun page](https://www.sparkfun.com/products/14050).

These are the examples available:

| Name | What? | Command to run |
| ---- | ----- | -------------- |
| [`hello-world`](hello-world/) | Makes the LED on the Arduino blink | `npm run helloworld` |
| [`blink`](blink/) | Makes an external LED blink | `npm run blink` |
| [`button`](button/) | Lights up LED when a button is pressed | `npm run button` |
| [`webserver`](webserver/) | Spins up a webserver, lights up an LED on every request and performs a POST request on button press | `npm run webserver` |
| [`twitter`](twitter/) | Lights up the LED whenever someone tweets about `#nodebots` and tweets on button press | `npm run twitter` |

## Resources

- [Nodebots website][Nodebots]
- [Johnny-Five website][Johnny-Five]
- [Getting started with nodebots]
- [How Dominik hacked his coffee machine]
- [Tessel website][Tessel 2]
- [Espruino]
- [Nodebot workshop npm module][nodebot-workshop]

## License

MIT

## Collaborators

- [Dominik Kundel](https://github.com/dkundel)
- [David van Leeuwen](https://twitter.com/davidvanleeuwen)

[NodeSchool Rotterdam]: https://nodeschool.io/rotterdam/
[Visual Studio Code]: https://code.visualstudio.com
[Node.js]: https://nodejs.org
[npm]: https://npmjs.com
[Arduino IDE]: https://www.arduino.cc/en/Main/Software
[Nodebots]: http://nodebots.io/
[Johnny-Five]: http://johnny-five.io/
[How Dominik hacked his coffee machine]: https://moin.world/2017/04/01/how-we-hacked-our-coffee-machine-with-javascript/
[J5 Node Module]: https://www.npmjs.com/package/johnny-five
[J5 Platform Support]: http://johnny-five.io/platform-support/
[Arduino Nano]: http://johnny-five.io/platform-support/#arduino-nano
[nodebot-workshop]: https://www.npmjs.com/package/nodebot-workshop
[Tessel 2]: https://tessel.io/
[Espruino]: https://www.espruino.com/
[Getting started with nodebots]: https://www.twilio.com/blog/2017/08/js-hardware-getting-started-with-nodebots-and-johnny-five.html
