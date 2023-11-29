# Kata Notes

List of notes and decisions from our Mars Rover Katas.

## Mars Rover 2

---

Created Acceptance test  
Assertion is looking for a square via LabelText `square at x1 y3` and expecting the content to be our rover `^`.
We've done this as a reliable way to view specific squares in a way that a user might (using a screen-reader in this case). Preferred this approach over finding an array of squares within our grid `div`.

Handled UI for buttons under unit tests
We decided to mock out the MarsRoverController here to keep our unit tests simple
Originally decided to use Left/Right/Move buttons - have since highlighted that this doesn't meet with the kata requirements of giving a list of commands.
To resolve this, we're discussing different approaches. One currently highlighted is keeping the L/R/M buttons, but using them to populate a text box (Clicking Left adds an L, clicking Right then appends an R) and adding an execute button to fire out command off all at once ("LR" instead of "L" and then "R").

---

Expanded acceptance test to include clicking Execute button
