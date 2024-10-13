-- quvse --

# This is it...almost

    The final project of the foundations path is here, with it also comes a feeling of inadequacy. These last exercises we're done but i struggled a lot with them.
I know this calculator will be frustrating and that i'll be working on it all week. I need to segment this project into parts so that i don't get lost in the sauce.
I must plan this and follow the plan in order to not become so frustrated i just quit, or worse, cheat.
    This project needs to be divided in three parts:
        1_The logic
        2_The UI 
        3_The Integration
    Each of these must be done in order except the UI, which i can work on when i dont have the thinking capacity to work on the logic part. The Integration part can only begin once all
the logic has been set up AND the UI is ready.

## Logic

    Write all the operations a calculator does and store them in functions
    Store the first number, the operator and the second number
    Create an operate() function that takes the first number and operates it with the second number
    Make sure all this is working properly

## UI

    This part is pure html+css so its relatively easy.
    copy a simple analog calculator layout and replicate it in html+css
    the display should contain a placeholder value for now or just blank

    --deprecated--
    make sure to take extra time on this step to make the calculator exxxxtra pretty --deprecated--

## Integration

    Make Them Fit!
    create the functions that display the numbers pressed:
        -The screen should display the first number as its being pressed, building it from right to left. When an operator is pressed it should display only the operator. when another number is pressed it should start building the next number.
    Make a function caled operate() that can take number1, an operator and number2 and calculate it
    When the user presses the "=" button it should do the operate() function with the numbers typed on the calculator and display it



### Almost there!!
    Finishing the logic does not mean finished project. I still have things to work on to make this a decent calculator (it feels very flimsy right now)

    -Working with floats. Float button still doesnt work. If an operation results in a float it is rounded to 0 decimals right now, but I wanted it so that it outputs float if its a float and a regular integer otherwise.

    -Error message for when the user divides by 0. Right now it displays "Infinity". I want it to display "Don't do that"

    -Adding a backspace button so that if i click on a number by accident i can correct it.

    -Keyboard support
-- quvse --
