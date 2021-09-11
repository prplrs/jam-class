import { fromEvent, interval, merge } from "rxjs";
import { throttleTime } from "rxjs/operators";

const JAM = [
  "Just a Minute",
  "Jim and Pam",
  "Jazz After Midnight",
  "Just Alanis Morissette",
  "Japanese Animation Music",
  "JavaScript Assessment Mission",
  "Journal of Applied Micromanaging",
  "Jumping and Moaning",
  "Jupiter Ascending Movie",
  "Joint Aviation Model",
  "Just Ask Me",
  "Jelly And Marmalade",
  "Jesse Adam McCartney",
  "Just Act Medicated",
  "Jokes Aside Madam",
  "Judging All Mankind",
  "Jersey Acoustic Music",
  "Just Act More",
  "Jersies Are Magnificent",
  "Jelly and mayo",
  "Just act matural",
  "Jiggle Aaren's Mouse",
];

// get DOM elements
const JamOutput = document.getElementById("jam-def");
const JamBtn = document.getElementById("jam-btn");

// helper to grab a random item from the list
const getRandomJAM = () => {
  return [JAM[Math.floor(Math.random() * JAM.length)]];
};

// handle everything involved with changing text
const transitionText = () => {
  JamOutput.classList.add("transitioning");
  setTimeout(() => {
    JamOutput.innerText = getRandomJAM();
  }, 100);

  setTimeout(() => {
    JamOutput.classList.remove("transitioning");
  }, 200);
};

// set it initially
JamOutput.innerText = getRandomJAM();

// combine final observables
merge(
  // handle/debounce the button click
  fromEvent(JamBtn, "click").pipe(throttleTime(500)),
  // rotate every 5s
  interval(5000)
).subscribe(() => {
  transitionText();
});
