# Javascript - Fundamentals - Basics

## Timers and Intervals

**Timer**

Launches the Piece of Code after the Given Time Interval

```javascript
// Duration in Seconds
const waitingDuration = 3;

// Duration from Seconds to Milliseconds
const watingDurationToMilliseconds = watingDuration * 1000;

// Timer
setTimeout(() => {
  console.log("Hello World")
}, watingDurationToMilliseconds)
```

**Interval Loop**

Keeps on Running a piece of code again and again after a particular time interval given, untill stopped

```javascript
// Milliseconds
const timeGap = 2 * 1000;
let counter = 0

const Run = () => {
  counter++;
  if( counter > 100 ) {
    // Terminate the Time Interval Process/Loop
    clearInterval(loop);
    loop = null;
  } else {
    console.log("Interval Loop in Still Running ....")
  }
}

// Start the Interval Loop
var loop = setInterval(Run,timeGap);
```