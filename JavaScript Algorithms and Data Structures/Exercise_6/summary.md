# Rock, Paper, Scissors Game

A simple interactive Rock, Paper, Scissors game built with HTML, CSS, and JavaScript where users play against the computer.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Code Explanation](#code-explanation)
  - [HTML Structure](#html-structure)
  - [CSS Styling](#css-styling)
  - [JavaScript Functionality](#javascript-functionality)
- [How to Play](#how-to-play)

## Overview

This web application allows users to play the classic "Rock, Paper, Scissors" game against a computer opponent. The first player to score 3 points wins the game.

## Features

- Interactive gameplay with clickable buttons
- Real-time score tracking
- Game rules explanation
- Responsive design
- Round result messages
- Game reset functionality

## Project Structure

The project consists of three main files:

- `index.html` - The structure of the web page
- `styles.css` - The styling for the web page
- `script.js` - The JavaScript code that powers the game logic

## Code Explanation

### HTML Structure

The HTML file establishes the basic structure of the game:

- **Document Head**: Contains metadata, viewport settings, title, and CSS link
- **Body Content**:
  - `<h1>`: Main heading "Let's play Rock, Paper, Scissors!"
  - `<details>`: Collapsible section containing game rules
  - `<div class="score-container">`: Display area for player and computer scores
  - `<section class="options-container">`: Area containing the game option buttons
  - `<div class="results-container">`: Area for displaying round results and winner message
  - `<button id="reset-game-btn">`: Button to reset and play again (hidden by default)

### CSS Styling

The CSS file provides styling for the game interface:

- **CSS Variables**: Defines color variables for consistent theming (`--very-dark-blue`, `--white`, `--yellow`, `--golden-yellow`)
- **Global Reset**: Applies standard margin, padding, and box-sizing reset
- **Body Styling**: Sets dark blue background with white text
- **Button Styling**: Creates gold-colored interactive buttons with hover effects
- **Rules Container**: Styled as a white box with yellow border
- **Score Container**: Flexbox layout to display scores side by side
- **Responsive Design**: Media query to adjust rules container width on larger screens

### JavaScript Functionality

The JavaScript file contains all the game logic:

#### Core Game Functions

```javascript
// Randomly selects Rock, Paper, or Scissors for the computer
function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}
```
This function generates the computer's choice by:
1. Creating an array of the three possible options
2. Generating a random index between 0-2
3. Returning the option at that random index

```javascript
// Determines if the player won based on game rules
function hasPlayerWonTheRound(player, computer) {
    return (
        (player === "Rock" && computer === "Scissors") ||
        (player === "Scissors" && computer === "Paper") ||
        (player === "Paper" && computer === "Rock")
    );
}
```
This function implements the game rules logic by:
1. Taking the player and computer choices as parameters
2. Checking all three possible winning conditions for the player
3. Returning true if any condition is met, false otherwise

```javascript
// Global variables to track scores
let playerScore = 0;
let computerScore = 0;
```
These variables maintain the game state between rounds.

```javascript
// Processes a round and returns the result message
function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult();
  
    if (hasPlayerWonTheRound(userOption, computerResult)) {
        playerScore++;
        return `Player wins! ${userOption} beats ${computerResult}`;
    } else if (computerResult === userOption) {
        return `It's a tie! Both chose ${userOption}`;
    } else {
        computerScore++;
        return `Computer wins! ${computerResult} beats ${userOption}`;
    }
}
```
This function:
1. Gets the computer's random choice
2. Determines if the player won using the rules function
3. Updates the appropriate score
4. Returns a message describing the round result

#### DOM Manipulation

```javascript
// DOM element references
const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");
```
These variables store references to HTML elements that will be updated during gameplay.

```javascript
// Updates the UI with round results and checks for game end
function showResults(userOption) {
    roundResultsMsg.innerText = getRoundResults(userOption);
    computerScoreSpanElement.innerText = computerScore;
    playerScoreSpanElement.innerText = playerScore;
  
    if (playerScore === 3 || computerScore === 3) {
        winnerMsgElement.innerText = `${
            playerScore === 3 ? "Player" : "Computer"
        } has won the game!`;
  
        resetGameBtn.style.display = "block";
        optionsContainer.style.display = "none";
    }
}
```
This function:
1. Updates the result message by calling the game logic function
2. Updates the score displays
3. Checks if either player has reached 3 points
4. If the game is over, displays the winner message
5. Shows the reset button and hides the game options

```javascript
// Resets the game state and UI
function resetGame() {
    // Reset scores
    playerScore = 0;
    computerScore = 0;
  
    // Update score display
    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;
  
    // Hide reset button, show options
    resetGameBtn.style.display = "none";
    optionsContainer.style.display = "block";
  
    // Clear result messages
    winnerMsgElement.innerText = "";
    roundResultsMsg.innerText = "";
}
```
This function completely resets the game by:
1. Resetting score variables
2. Updating the score display
3. Hiding the reset button and showing the game options
4. Clearing any result messages

#### Event Listeners

```javascript
// Button references
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

// Event listener for reset button
resetGameBtn.addEventListener("click", resetGame);

// Event listeners for game option buttons
rockBtn.addEventListener("click", function () {
    showResults("Rock");
});
  
paperBtn.addEventListener("click", function () {
    showResults("Paper");
});
  
scissorsBtn.addEventListener("click", function () {
    showResults("Scissors");
});
```
These sections:
1. Get references to the three game option buttons
2. Add a click event listener to the reset button
3. Add click event listeners to each game option button
4. Each button calls the showResults function with the appropriate option

## How to Play

1. Open the HTML file in a web browser
2. Read the rules (click on "Rules to the game" if needed)
3. Click on one of the three buttons (Rock, Paper, or Scissors) to make your choice
4. The computer will randomly choose an option
5. The result of the round will be displayed and scores updated
6. The first player to reach 3 points wins the game
7. Click "Play again?" to reset the game