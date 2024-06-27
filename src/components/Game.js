import React from "react";
import { GuessInput } from "./GuessInput";
import { GuessResults } from "./GuessResults";
import { WORDS } from "../data";
import { sample } from "../utils";

const answer = sample(WORDS);
console.log(answer)

export function Game() {
    // running | won | lost
    const [gameState, setGameState] = React.useState('running');
    const [guesses, setGuesses] = React.useState('');

    function handleGuessSubmit(tentativeGuess) {
        console.log(`Guess: ${tentativeGuess}. Answer: ${answer}`);
        setGuesses(tentativeGuess)
    }

    return (
        <>
            <GuessResults guesses={guesses}/>
            <GuessInput 
                handleGuessSubmit={handleGuessSubmit} 
                gameState={gameState}
            />
        </>
    );
}