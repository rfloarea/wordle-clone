import React from 'react';

/** This component is/controls the input field where the player submits their word
 * It takes two arguments:
 * 1. gameState, which is used here to disable the input field if the game is over
 * 2. handleGuessSubmit, which is used here to send our player's guess to the Game component (which holds all the game logic)
 * There is some client-side validation which checks for:
 * 1. If the guess is exactly 5 characters
 * 2. If the guess is only letters
 */

export function GuessInput({ handleGuessSubmit }) {
    const [guess, setGuess] = React.useState();

    function handleSubmit(ev) {
        ev.preventDefault();
        handleGuessSubmit(guess)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={guess}
                onChange={(ev) => {
                    const nextGuess = ev.target.value
                    setGuess(nextGuess);
                }}
            >
            </input>
        </form>
    );
}