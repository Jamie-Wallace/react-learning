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

---

Refactored Move / Left / Right buttons to update text on screen
Hooked up Execute button with Controller

---

We've made the decision going forward to use fireEvent instead of userEvent inside of Unit Tests
The difference between them is that userEvent simulates entire user interations, whereas fireEvent only handles sending specific events.
This is because our experience with userEvent resulted in some unexpected side-effects when handling state changes.
To resolve this we had to wrap our code in either act() or our assertions in waitFor().
To make our code cleaner, it seems better to save userEvent just for our acceptance tests, so we can avoid boilerplate where we don't believe it brings any real value.

--

Added individual turn left and turn right tests to MarsRovercontroller

--

Next time consider if using command.length for turn R or turn L only is a good idea.
E.g. with LLLLL we only checked the first command and then used length as we know the rest are L's.
Seems to have put us into a bit of a tricky spot when doing LR.

```
    if (command[0] === "L") {
      directionIndex = 3 - command.length;
    } else {
      directionIndex = command.length - 1;
    }
```

Instead we should process every command and + or - 1 frm the direction index. Early on.
Rather than use magic maths as we know the number of repeated commands.

--

Added moving forward - the work we had already done for turning made the logic a lot easier.
Pretty much just stole our turning 'overflow' code.

`
if (commandChar === "M") {
yCoordinate += 1;

        if (yCoordinate > 9) {
          yCoordinate = 0;
        }

        return;
      }

`

Then moved our overflow logic together, so commands are all neatly grouped up.
`
if (commandChar === "L") {
directionIndex -= 1;

        if (directionIndex < 0) {
          directionIndex = 3;
        }

        return;
      }

      if (commandChar === "R") {
        directionIndex += 1;

        if (directionIndex > 3) {
          directionIndex = 0;
        }
      }

`

** To discuss : Do we want to refactor as we go, or refactor towards the end?**
Potential refactors to do as we go:

- Direction / Compass class or enum
- Coordinate class with X/Y
- MarsGrid
  - Extents i.e 10x10
  - myPosition = grid.move(myPosition, myDirection)

-- Next steps (As at 2024-03-08)
Continue the refactor:

- Consider move / grid class.
- Consider compass / direction class.

Start hooking up the UI on the response of the Controller

-- 2024-03-13
Refactored to handle turning in new Compass class
Considering making a Direction enum or direction classes

Refactored to pull out moving into Position method

-- 2024-03-21
Consider starting with Cypress test?
- Perhaps try writing one at the end.
- Does it bring value etc?

- Hooking up UI and rendering a grid.
- Save any further refactor until later, if needed in this run.
  - Discussed extracting grid size as the priority of any further refactor.
  - Likely introduce a grid class.
