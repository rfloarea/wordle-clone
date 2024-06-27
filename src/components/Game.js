import React from "react";
import { GuessInput } from "./GuessInput";
import { WORDS } from "../data";
import { sample } from "../utils";

const answer = sample(WORDS);
console.log(answer)

export function Game() {
    const [gameState, setGameState] = React.useState();

    function handleGuessSubmit() {
        console.log(`Guess: ${guess}. Answer: ${answer}`);
    }

    return (
        <>
            <p>THE GAME BOARD GOES HERE</p>
            <GuessInput 
                handleGuessSubmit={handleGuessSubmit} 
                gameState={gameState}
            />
        </>
    );
}