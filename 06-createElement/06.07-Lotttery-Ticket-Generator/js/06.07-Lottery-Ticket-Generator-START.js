// Lesson 06.02 - FINAL
// Lottery Generator

// Select five numbers from 1 to 69 for the white balls; then select one number from 1 to 26 for the red Powerball
// then 5 rand ints from 1-69, splicing out the used int each time
// generate a random integer from 1-26 (red powerball)

// 4.  begin by getting the elements from the DOM:
let numBox;
let ticketsDiv;
let btn;

// 5. Have the button listen for a click and call the generateTickets function when clicked:

// 6. Define the generateTickets() function and have it start by clearing the tickets div for a fresh load:

// clear
// get user input number (how many tickets to make)

// 7. Next, get the desired number of tickets from the input box:

// 8. Declare an array to hold the whiteball numbers from 1-69:

// 9. Run a loop from 1 to 69, pushing i into the array each time:

// 10. Log the array to make sure it worked:

// 11. Set up the loop, which runs from 1 to the total number of ticket requested:

// 12. We need a fresh set of numbers to choose from for each ticket, so copy the array of numbers from 1-69:
let whiteNums;

// 13. Make a div to hold a ticket:

// 14. Number the ticket box. The first ticket is #1, etc.:

// 15. Output the numbered but otherwise empty ticketDiv to the parent ticketsHolder div:

// 16. Declare a new empty array to hold the lottery number for the ticket:
let oneTicketArr;

// 17. Run a loop that goes five times:

// 18. Each time through the loop, generate a random integer in the range of the array of whiteball numbers:
let r;

// 19. Pick the number at the random index from the array and stringify it by tacking on an empty space. We do this so for consistency, so that all the picks are strings. Otherwise only the picks less than 10 with leading 0's added would be strings--the 2-digit picks would all be actual numbers.
let pick;

// 20. Still in the loop, if the pick only has one character, its from 1-9, so add a leading zeroes:

// 21. Push the pick, which is a 2-character "number", into the array:

// 22. Splice the just-picked number out of the array of choices so that it cannot be chosen again for this same ticket:

// close inner loop

// We have the five whiteball numbers, but they need to be sorted before going into the ticket div on ping-pong balls. The array items are strings (not numbers, not objects), so we can just use the simplest version of sort--no callback function.

// 23. Still in the outer loop, sort the five stringy numbers that make up a single lottery ticket:

// 24. Still in the outer loop, make another inner loop that runs 5 times,  making ping-pong balls, each with a lottery number on it:

// 25. Each time through the loop, make a div and assign it its class. The 'ping-pong-ball' class uses border radius to round the div into a circle: each with a lottery number on it:
let pingPongBall;

// 26. "Label" the "ping-pong ball" with a lottery pick number from the array of 5 whiteball numbers:

// 27. Output the "ping-pong ball" with lottery number on it to the ticket div:

// close inner loop

// 28. Generate the random Powerball number from 1-26:
let powerballNum;

// 29. Stringify the Powerball number so that its data type matches the 5 whiteball numbers--all strings:

// 30. If the Powerball number is single digit (just one character long), add a leading 0:

// 31. Add the Powerball number to the oneTicketArr to complete the array of 6 lotter numbers for one ticket:

// 32. Make another circular div, a red ping-pong ball to hold the Powerball (in the css, there's a .ping-pong-ball:last-child rule that makes the last ball red):
let powerballDiv;

// 33. Label the red Powerball ping-pong ball with the Powerball number:

// 34. Output the red Powerball ping-pong ball to the ticket div:

// 35. Close the big outer loop; close the generateTickets() function and reload the browser. The Lotter Ticket Generator application should work.

// end loop

// end function

// END: Lesson 06.07
// NEXT: Lesson 07.01
