import React from "react";
import { GuessInput } from "./GuessInput";

export function Game() {
    const [gameState, setGameState] = React.useState();

    function handleGuessSubmit() {

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