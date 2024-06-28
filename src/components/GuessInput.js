import React from 'react';

/** This component is/controls the input field where the player submits their word
 * It takes two arguments:
 * 1. gameState, which is used here to disable the input field if the game is over
 * 2. handletentativeGuessSubmit, which is used here to send our player's tentativeGuess to the Game component (which holds all the game logic)
 * There is some client-side validation which checks for:
 * 1. If the tentativeGuess is exactly 5 characters
 * 2. If the tentativeGuess is only letters
 */

export function GuessInput({ handleGuessSubmit }) {
    const [tentativeGuess, setTentativeGuess] = React.useState('');

    function handleSubmit(ev) {
        ev.preventDefault();
        handleGuessSubmit(tentativeGuess)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={tentativeGuess}
                onChange={(ev) => {
                    const nextTentativeGuess = ev.target.value.toUpperCase();
                    setTentativeGuess(nextTentativeGuess);
                }}
            >
            </input>
        </form>
    );
}