# 🧩 Cube of Secrets
*Arduino-powered Escape Room Experience*

## What's This All About?

**Cube of Secrets** is our Arduino-based escape room that we're building during a 2-month hackathon. This extended timeline gives us the chance to create something pretty ambitious that combines hardware tinkering with some clever puzzle design.

The whole thing works like this: players hit a start button and race against the clock to solve color-coded puzzles. Questions pop up on an LCD screen, and the answers are always colors. Here's where it gets interesting - you need to hold the right colored card in front of a sensor while pressing the matching button to get morse code numbers through a buzzer. Then you punch those numbers into an IR remote in the correct order to crack the code and escape.

## How We Built It

We're using an Arduino as the brain that controls everything - a 7-segment display for the timer, LCD for questions, color sensor magic, five colorful buttons, a buzzer for those satisfying morse code beeps, and an IR receiver. The cool part is that we designed it to be replayable with different question sets and varying difficulty levels where you might only need 3 out of 5 buttons for some rounds.

## Where We're At

Right now we've got the basic hardware wired up and the core Arduino code working. We're deep in the weeds calibrating the color sensor (turns out detecting colors consistently is trickier than expected!) and fine-tuning our morse code system. Still working on expanding our question database and getting the IR remote to play nice with everything else.

## The Team

Built by [Your Names] during [Hackathon Name] 2025.

---

*Because who doesn't love solving puzzles under pressure? 🚀*