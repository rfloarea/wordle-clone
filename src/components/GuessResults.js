import React from "react";
import { NUM_OF_GUESSES } from "../constants";
import { range } from "../utils";

export function GuessResults({ guesses }) {
    return (
        <>
        {range(NUM_OF_GUESSES).map((guess, index) => (
            <p key={index}>{guesses[index]}</p>
        ))}
        </>
    );
}
