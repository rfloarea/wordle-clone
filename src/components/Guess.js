import React from "react";

// these are the rows of cells
export function Guess() {
    return (
        <Cell />
    );
}

// these are the individual 'cells' for each letter of the words
// we will need to split the characters of the guess into each cell
function Cell() {
    return (
        <p></p>
    );
}