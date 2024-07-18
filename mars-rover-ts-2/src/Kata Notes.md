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

-- 2024-04-03
While working on the UI we're prioritising the rendering before caring about any styling.

Unless it's behavioral, it might not be worth explicitly testing the styling (i.e. a button click changes a font color, rather than the font always being red)

Currently hard-coding grid height and width in MarsGrid as well as Position. At some point might want to pass value down rather than having connascence between these variables

-- 2024-04-18
Finished rendering the grid.
Began rendering the rover at start position.
Decided to pass Mars Rover state into the grid, so it re-renders when the controller changes it.

Note: in hindsight would probably pass the state to the grid at the start when first rendering the grid.
This piece of the work is key to the talk, as understanding how the BE and FE connect is key to understanding the React/UI concept of the kata.
Highlight this in the talk!

-- 2024-05-10
Discussed where the default start position is kept:
-- In the App and passed to mars rover controller and grid.
-- Or within the controller perhaps?
-- Would be good to figure out and then follow decision next time around doing the kata.

Next up we want to change position state from a string to an object with x, y as numbers.
-- Considering new object for it - we already have a Position one, however.

-- 2024-05-15
Moved Coordinate and Compass into a Position object. Spent a bit of time deciding if we should refactor assertions in MarsRoverController tests.
Decided not to at the moment, we should reflect on this later.

Moving to Position instead of string. Currently fixing tests to support this. We think a mocking issue is causing App.test.tsx to fail.

-- 2024-05-24
Discussed immutability:
-- Particularly around coordinate.
-- But applies to compass also, and potentially at the position level.
-- Refactoring to immutability - as a demonstration/exercise - is one option.
-- But we have discussed just making immutable as we go.
-- Plan to try that out in future and see how it affects the tests.

-- Next up we need to test rover directions are displayed on the grid.

-- 2024-06-06
Moved the rover direction logic out into a map
Discussed the idea of having this map as its own class (Would be valuable if we went further with this, to return specific assets rather than just strings)
We aren't sure if it's worth doing this at this point, we want to think about it more in future

Next time we're fixing the acceptance test!

-- 2024-06-13
Got acceptance test passing!

-- But currently getting "not wrapped in act() warnings".
-- Have found using act() works but is supposedly unnecessary.
-- See Execute button.

-- 2024-06-27
Fixed the wrapped in act warnings!
Upgrading @testing-library/react from 13.x.x resolved this issue.
We're running with 16.0.0

We want to:

- Fix the input to clear after sending a command (and preserve state)
- Fix aria warnings that are displayed when running the page
- Add some CSS

Clearing the command involves updating the MarsRoverController so it won't be reset after each render.
We've discussed whether to make wrap the control in useState so it won't be cleared, but this has highlighted that the position is duplicated in App and in the Controller.
We've now decided to instead pass our position in to the controller from App, so the Controller doesn't need to care about it and can be stateless.

-- 2024-07-04

- We might want to continue the state changes and apply them to Coordinate and Compass:
  - For example the Coordinate class holds the grid size - this could be in the controller/grid.
  - We could make Coordinate and Compass immutable, accept current position and command and return new position.
  - Similar to how we have refactored the App and Controller.
- Note - we are thinking that the controller is probably more a grid - but will see how refactors go.

- We have moved state out of the controller by passing in current position to execute.
- Effectively adding some immutability.

Next up we can review if we wish to make Coordinate and Compass immutable also.

-- 2024-07-11

Discussed between two approaches for Coordinate immutability:

```
public static moveNorth(coordinate: Coordinate): Coordinate {
    let yCoord = coordinate.yCoordinate + 1;

    if (yCoord > coordinate.gridHeight) {
      yCoord = 0;
    }

    return new Coordinate(coordinate.xCoordinate, yCoord);
  }
  // Coordinate.moveNorth(currentPosition.coordinate);

  moveSouth() {
    let yCoord = this.yCoordinate - 1;

    if (yCoord < 0) {
      yCoord = this.gridHeight;
    }

    return new Coordinate(this.xCoordinate, yCoord);
  }
  // currentPosition.coordinate.moveSouth();
```

One is a static method with a coordinate passed in, the other relies on the instance of our coordinate.
We're undecided on this. Currently going with static due to Navigator **authority**. Would be interested to reflect on this in future.

-- 2024-07-18

Completed making Coordinate immutable.

Next we plan to change MarsRoverController so that it uses the new static functions and have the move function
within the controller return the new coordinate. 

After that, then make Compass immutable.