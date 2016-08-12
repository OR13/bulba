// Import the interface to Tessel hardware
var tessel = require('tessel');

// Turn one of the LEDs on to start.
// tessel.led[2].on();
//
// // Blink!
// setInterval(function () {
//   tessel.led[2].toggle();
//   tessel.led[3].toggle();
// }, 100);
//
// console.log("I'm blinking! (Press CTRL + C to stop)");

var B4 = tessel.port.B.pin[4]; // select pin 2 on port A
var B5 = tessel.port.B.pin[5];
var B6 = tessel.port.B.pin[6];

setInterval(function () {

  B4.read(function(error, value) {

    console.log(value == 1);

    if (value == 1){
      B4.output(0);
    } else {
      B4.output(1);
    }

  });

}, 1000);


setInterval(function () {

  B5.read(function(error, value) {

    console.log(value == 1);

    if (value == 1){
      B5.output(0);
    } else {
      B5.output(1);
    }

  });

}, 1000);


setInterval(function () {

  B6.read(function(error, value) {

    console.log(value == 1);

    if (value == 1){
      B6.output(0);
    } else {
      B6.output(1);
    }

  });

}, 1000);

// var pinB = tessel.port.B.pin[6]; // select pin 2 on port A
// pinB.output(1);  // turn pin high (on)
// pinB.read(function(error, value) {
//   // print the pin value to the console
//   console.log(value);
//   pinB.output(0);  // turn pin low (off)
// });
