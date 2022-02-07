# Random Frontend Project Ideas
If you want to practice your skills in HTML/CSS and JavaScript, but you don't know where to start, or what projects to work on, try using this website to get you a some ideas!

## Introduction
I created this website when I couldn't figure out what to make for my next project. My goal was to use Bootstrap and practice my knowledge of DOM and JavaScript.  
The random number generator ensures you won't get the same idea twice in a row.  
It also has a "do not show this again" button to hide the ideas you don't want to see again. The hiding function adds the index number to an array instead of mutating the original array. The next time the user presses the "new idea" button, it checks if the newly generated number is: 1) the same as the last shown item's index, and 2) if it is in the "do not show again" index array. It displays a special message and disables the "new idea button" once the "do not show again" array has the same length as the idea array.

### Challenges
At first, I did not implement the "do not show again" function correctly, resulting in the hidden ideas still showing up when it generated a new index number. Moreover, it pushed the same number into the array.
Since the "out of idea" only checks if the "do not show" and the idea array has the same length, the program would end when "do not show again" was pressed the same number of times as the length of the array. If implemented correctly, it shouldn't generate a number already in the "do now show" array.


## How to use
Click on "Click me for idea" to show a random idea.  
Click "Don't show this idea again" if you don't want to see an idea again.

## Langauge and Framework used
+ HTML & CSS
+ JavaScript
+ Bootstrap

## 🏗️Roadmap
+ ✅functional "do not show again" button
+ filters for specific skills/Language(e.g., html/css, JavaScript, React.js, accessibility support)
+ randomly generates idea alongside with set ideas

## For Bugs and Suggestion
Feel free to submit an issue if you encounter any bugs, or have any suggestion to the project.

## Change Log
### 2/6/22  
+ Change name of the website
+ Add meta description
+ Change the variable that holds data from an object to an array
+ Add more ideas
+ Adjust functions in main.js for the changed data type

### 1/20/22
+ Finish initial website